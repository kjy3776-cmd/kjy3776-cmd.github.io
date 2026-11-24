#!/usr/bin/env node
// 꿀TMI 숲 사무실 — 로컬 AI 사무실 서버 (Node 18+, 외부 패키지 없음)
// 이 컴퓨터에 로그인된 Claude Code(claude CLI)로 직원들이 실제 작업을 합니다.
'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');
const { spawn, execSync } = require('child_process');
const { AGENTS, systemPrompt } = require('./agents');

const ROOT = __dirname;
const PUBLIC = path.join(ROOT, 'public');
const DATA = path.join(ROOT, 'data');
const CHATS = path.join(DATA, 'chats');
const UPLOADS = path.join(DATA, 'uploads');
const PROMPTS = path.join(DATA, 'prompts');
for (const d of [DATA, CHATS, UPLOADS, PROMPTS, path.join(CHATS, 'archive'), path.join(DATA, 'backups')]) fs.mkdirSync(d, { recursive: true });

// ---------- 설정 ----------
const DEFAULT_CONFIG = {
  port: 4747,
  host: '0.0.0.0',
  workspace: path.resolve(ROOT, '..'),
  claudeCommand: 'claude',
  model: '',
  permissionMode: 'acceptEdits',
  allowedTools: ['Read', 'Edit', 'Write', 'Glob', 'Grep', 'WebSearch', 'WebFetch', 'TodoWrite',
    'Bash(git status:*)', 'Bash(git diff:*)', 'Bash(git log:*)', 'Bash(ls:*)', 'Bash(node:*)', 'Bash(python3:*)'],
  disallowedTools: ['Bash(git push:*)', 'Bash(git commit:*)', 'Bash(git reset:*)', 'Bash(rm -rf:*)'],
  ntfyTopic: '',
  backupHours: 3,
};
function readJSON(file, fallback) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return fallback; }
}
function writeJSON(file, obj) {
  const tmp = file + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(obj, null, 2));
  fs.renameSync(tmp, file);
}
const CONFIG_FILE = path.join(ROOT, 'config.json');
let config = { ...DEFAULT_CONFIG, ...readJSON(CONFIG_FILE, {}) };
if (!config.workspace) config.workspace = DEFAULT_CONFIG.workspace;
config.workspace = path.resolve(config.workspace);
function saveConfig() { writeJSON(CONFIG_FILE, config); }

// ---------- 인증 (다른 기기 접속용 6자리 PIN) ----------
const AUTH_FILE = path.join(DATA, 'auth.json');
let auth = readJSON(AUTH_FILE, null);
if (!auth) {
  auth = { pin: String(crypto.randomInt(0, 1e6)).padStart(6, '0'), tokens: [] };
  writeJSON(AUTH_FILE, auth);
}
const loginFails = new Map();
function isLocal(req) {
  const a = req.socket.remoteAddress || '';
  return a === '127.0.0.1' || a === '::1' || a === '::ffff:127.0.0.1';
}
function cookieToken(req) {
  const m = /(?:^|;\s*)office_token=([a-f0-9]+)/.exec(req.headers.cookie || '');
  return m ? m[1] : '';
}
function isAuthed(req) {
  if (isLocal(req)) return true;
  const t = cookieToken(req);
  if (!t) return false;
  const h = crypto.createHash('sha256').update(t).digest('hex');
  return auth.tokens.includes(h);
}

// ---------- 상태 ----------
const STATE_FILE = path.join(DATA, 'state.json');
const state = readJSON(STATE_FILE, { tasks: [], guide: '', usage: {} });
state.agents = {};
for (const a of AGENTS) state.agents[a.id] = { status: 'idle', activity: '', taskId: null, startedAt: null, steps: 0 };
// 재시작 시 실행 중이던 일은 실패 처리
for (const t of state.tasks) if (t.status === 'running' || t.status === 'waiting') { t.status = 'failed'; t.note = '서버 재시작으로 중단됨'; }
let saveTimer = null;
function saveState() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    const { agents, ...persist } = state;
    persist.tasks = persist.tasks.slice(-500);
    writeJSON(STATE_FILE, persist);
  }, 300);
}

function chatFile(id) { return path.join(CHATS, `${id}.json`); }
const chats = {};
for (const a of AGENTS) chats[a.id] = readJSON(chatFile(a.id), { sessionId: null, messages: [] });
function saveChat(id) { writeJSON(chatFile(id), chats[id]); }

function uid() { return Date.now().toString(36) + crypto.randomBytes(3).toString('hex'); }
const agentById = id => AGENTS.find(a => a.id === id);

// ---------- 실시간 동기화 (SSE) ----------
const clients = new Set();
function broadcast(type, data) {
  const msg = `event: ${type}\ndata: ${JSON.stringify(data)}\n\n`;
  for (const res of clients) res.write(msg);
}
function publicState() {
  return { agents: state.agents, tasks: state.tasks.slice(-200), guide: state.guide, usage: state.usage,
    workspace: config.workspace, roster: AGENTS.map(({ duty, ...a }) => a) };
}
function pushState() { saveState(); broadcast('state', publicState()); }

function addMessage(agentId, msg) {
  const m = { id: uid(), ts: Date.now(), ...msg };
  chats[agentId].messages.push(m);
  saveChat(agentId);
  broadcast('message', { agent: agentId, message: m });
  return m;
}

// ---------- 알림 ----------
function notify(title, body) {
  broadcast('notify', { title, body });
  if (!config.ntfyTopic) return;
  try {
    const req = require('https').request(`https://ntfy.sh/${encodeURIComponent(config.ntfyTopic)}`,
      { method: 'POST', headers: { Title: encodeURIComponent(title), 'Content-Type': 'text/plain; charset=utf-8' } });
    req.on('error', () => {});
    req.end(body.slice(0, 1000));
  } catch {}
}

// ---------- 작업 실행 ----------
const queues = {}; // agentId -> [taskId]
const procs = {};  // agentId -> child process
for (const a of AGENTS) queues[a.id] = [];
// 재시작 전에 대기 중이던 일은 다시 줄 세우기
for (const t of state.tasks) if (t.status === 'queued' && queues[t.agent]) queues[t.agent].push(t.id);
setImmediate(() => AGENTS.forEach(a => pump(a.id)));

function createTask({ agent, title, prompt, from = 'user', parent = null, step = null, mode = 'final', files = [] }) {
  const t = { id: uid(), agent, title: title.slice(0, 80), prompt, from, parent, step, mode, files,
    status: 'queued', created: Date.now(), started: null, finished: null };
  state.tasks.push(t);
  queues[agent].push(t.id);
  pushState();
  setImmediate(() => pump(agent));
  return t;
}

function pump(agentId) {
  if (procs[agentId] || !queues[agentId].length) return;
  const nextId = queues[agentId].shift();
  const task = state.tasks.find(t => t.id === nextId);
  if (!task || task.status !== 'queued') return pump(agentId);
  runTask(task);
}

function quoteWin(a) { return /[\s"&|<>^()]/.test(a) ? `"${a.replace(/"/g, '""')}"` : a; }

function toolLabel(name, input = {}) {
  const f = input.file_path || input.path || input.pattern || input.url || input.query || input.command || '';
  const short = String(f).replace(config.workspace, '').replace(/^[\\/]/, '').slice(0, 50);
  const verb = { Read: '읽는 중', Write: '쓰는 중', Edit: '고치는 중', Glob: '파일 찾는 중', Grep: '검색 중',
    WebSearch: '웹 검색 중', WebFetch: '웹 페이지 읽는 중', Bash: '명령 실행 중', TodoWrite: '할 일 정리 중' }[name] || `${name} 사용 중`;
  return short ? `${verb}: ${short}` : verb;
}

const IMG_RE = /(?:^|[\s(`'"])((?:[\w.\-\/\\]+?)\.(?:png|jpe?g|gif|webp|svg|mp4|webm))(?=[\s)`'",.]|$)/gi;
function findFiles(text, written) {
  const found = new Set();
  for (const m of text.matchAll(IMG_RE)) found.add(m[1]);
  for (const w of written) if (/\.(png|jpe?g|gif|webp|svg|mp4|webm)$/i.test(w)) found.add(w);
  const out = [];
  for (const f of found) {
    const abs = path.isAbsolute(f) ? f : path.join(config.workspace, f);
    if (fs.existsSync(abs) && insideAllowed(abs)) out.push(path.relative(config.workspace, abs).split(path.sep).join('/'));
  }
  return [...new Set(out)].slice(0, 20);
}

function runTask(task) {
  const agent = agentById(task.agent);
  const chat = chats[agent.id];
  const promptFile = path.join(PROMPTS, `${agent.id}.md`);
  fs.writeFileSync(promptFile, systemPrompt(agent, state.guide));

  let prompt = task.prompt;
  if (task.mode === 'draft') prompt += '\n\n(진행 방식: 바로 완성하지 말고 시안/개요를 먼저 보여 준 뒤 사용자 확인을 받으세요.)';
  if (task.files && task.files.length) prompt += `\n\n첨부 파일:\n${task.files.map(f => `- ${path.join(UPLOADS, f)}`).join('\n')}`;

  const args = ['-p', '--output-format', 'stream-json', '--verbose', '--include-partial-messages',
    '--append-system-prompt-file', promptFile, '--permission-mode', config.permissionMode, '--add-dir', UPLOADS];
  if (config.model) args.push('--model', config.model);
  if (chat.sessionId) args.push('--resume', chat.sessionId);
  if (config.disallowedTools.length) args.push('--disallowedTools', config.disallowedTools.join(','));
  if (config.allowedTools.length) args.push('--allowedTools', config.allowedTools.join(','));

  task.status = 'running';
  task.started = Date.now();
  Object.assign(state.agents[agent.id], { status: 'working', activity: '생각하는 중', taskId: task.id, startedAt: Date.now(), steps: 0 });
  pushState();

  const isWin = process.platform === 'win32';
  let child;
  try {
    child = isWin
      ? spawn([config.claudeCommand, ...args].map(quoteWin).join(' '), { cwd: config.workspace, shell: true, windowsHide: true })
      : spawn(config.claudeCommand, args, { cwd: config.workspace });
  } catch (e) {
    return finishTask(task, '', `claude 실행 실패: ${e.message}`);
  }
  procs[agent.id] = child;
  child.stdin.end(prompt);

  let buf = '', finalText = '', liveText = '', errText = '', resultText = null, resultError = false;
  const written = [];
  child.stdout.on('data', chunk => {
    buf += chunk.toString('utf8');
    let i;
    while ((i = buf.indexOf('\n')) >= 0) {
      const line = buf.slice(0, i).trim(); buf = buf.slice(i + 1);
      if (!line) continue;
      let ev; try { ev = JSON.parse(line); } catch { continue; }
      if (ev.session_id && ev.type === 'system' && ev.subtype === 'init') { chat.sessionId = ev.session_id; saveChat(agent.id); }
      if (ev.type === 'stream_event' && ev.event?.type === 'content_block_delta' && ev.event.delta?.type === 'text_delta' && !ev.parent_tool_use_id) {
        liveText += ev.event.delta.text;
        broadcast('delta', { agent: agent.id, text: ev.event.delta.text });
      }
      if (ev.type === 'assistant' && ev.message?.content && !ev.parent_tool_use_id) {
        for (const c of ev.message.content) {
          if (c.type === 'text' && c.text.trim()) finalText = c.text;
          if (c.type === 'tool_use') {
            const s = state.agents[agent.id];
            s.steps++; s.activity = toolLabel(c.name, c.input);
            if ((c.name === 'Write' || c.name === 'Edit') && c.input?.file_path) written.push(c.input.file_path);
            liveText = '';
            broadcast('delta', { agent: agent.id, reset: true });
            pushState();
          }
        }
      }
      if (ev.type === 'rate_limit_event' && ev.rate_limit_info) {
        const w = ev.rate_limit_info.unifiedWindows || {};
        state.usage = { five_hour: w.five_hour?.utilization, seven_day: w.seven_day?.utilization, at: Date.now() };
      }
      if ('result' in ev && (ev.type === 'result' || ev.duration_api_ms != null)) {
        resultText = typeof ev.result === 'string' ? ev.result : null;
        resultError = !!ev.is_error;
        if (ev.session_id) { chat.sessionId = ev.session_id; saveChat(agent.id); }
      }
    }
  });
  child.stderr.on('data', d => { errText += d.toString('utf8'); if (errText.length > 4000) errText = errText.slice(-4000); });
  child.on('error', e => { errText += `\n${e.message}`; });
  child.on('close', code => {
    delete procs[agent.id];
    const text = (resultText && resultText.trim()) || finalText || liveText;
    const failed = task.status === 'stopped' ? '사용자가 중지함'
      : (code !== 0 || resultError) && !text ? (errText.trim().slice(-600) || `종료 코드 ${code}`) : null;
    if (failed && /resume|session/i.test(errText)) { chat.sessionId = null; saveChat(agent.id); }
    finishTask(task, text, failed, written);
  });
}

function parseBlock(text, name) {
  const re = new RegExp('```' + name + '\\s*\\n([\\s\\S]*?)```', 'i');
  const m = re.exec(text);
  if (!m) return { clean: text, data: null };
  let data = null; try { data = JSON.parse(m[1]); } catch {}
  return { clean: text.replace(m[0], '').trim(), data };
}

function finishTask(task, text, error, written = []) {
  const agent = agentById(task.agent);
  task.finished = Date.now();
  Object.assign(state.agents[agent.id], { status: 'idle', activity: '', taskId: null, startedAt: null });

  if (error) {
    if (task.status !== 'stopped') task.status = 'failed';
    task.note = error.slice(0, 300);
    addMessage(agent.id, { role: 'system', text: `⚠️ 작업이 끝나지 못했어요: ${error}` , taskId: task.id });
    notify(`${agent.name}: 작업 실패`, task.title);
    if (task.parent) onSubtaskDone(task);
    pushState();
    return pump(agent.id);
  }

  let { clean, data: delegations } = parseBlock(text, 'delegate');
  const ch = parseBlock(clean, 'choices');
  clean = ch.clean;
  const choices = Array.isArray(ch.data) ? ch.data.map(String).slice(0, 6) : [];
  const files = findFiles(clean, written);
  task.result = clean.slice(0, 4000);
  addMessage(agent.id, { role: 'agent', text: clean || '(작업을 마쳤어요)', files, choices, taskId: task.id });

  if (agent.lead && Array.isArray(delegations) && delegations.length) {
    const valid = delegations.filter(d => agentById(d.to) && !agentById(d.to).lead && d.task);
    if (valid.length) {
      task.status = 'waiting';
      task.plan = valid.map(d => ({ to: d.to, step: Number(d.step) || 1, task: String(d.task) }));
      const names = [...new Set(valid.map(d => agentById(d.to).name))].join(', ');
      addMessage(agent.id, { role: 'system', text: `📋 ${names}에게 일을 나눠 줬어요.`, taskId: task.id });
      startStep(task, Math.min(...task.plan.map(p => p.step)));
      pushState();
      return pump(agent.id);
    }
  }

  task.status = 'review';
  notify(`${agent.name} 작업 완료`, task.title);
  if (task.parent) onSubtaskDone(task);
  pushState();
  pump(agent.id);
}

function startStep(parent, step) {
  parent.currentStep = step;
  const prev = state.tasks.filter(t => t.parent === parent.id && t.status !== 'queued' && t.result);
  const context = prev.length ? `\n\n## 앞 단계 팀원 결과\n${prev.map(t => `### ${agentById(t.agent).name}\n${t.result}`).join('\n\n')}` : '';
  for (const p of parent.plan.filter(p => p.step === step)) {
    addMessage(p.to, { role: 'system', text: `📋 ${agentById(parent.agent).name}가 맡긴 일: ${p.task}` });
    createTask({ agent: p.to, title: p.task, prompt: `편집장 솔이가 맡긴 일입니다.\n\n원래 사용자 요청: ${parent.prompt}\n\n맡은 일: ${p.task}${context}`,
      from: parent.agent, parent: parent.id, step });
  }
}

function onSubtaskDone(sub) {
  const parent = state.tasks.find(t => t.id === sub.parent);
  if (!parent || parent.status !== 'waiting') return;
  const subs = state.tasks.filter(t => t.parent === parent.id && t.step === parent.currentStep);
  if (subs.some(t => t.status === 'queued' || t.status === 'running')) return;
  const nextSteps = parent.plan.map(p => p.step).filter(s => s > parent.currentStep);
  if (nextSteps.length && !subs.some(t => t.status === 'failed')) return startStep(parent, Math.min(...nextSteps));
  // 모든 단계 종료 → 팀장에게 검수 요청
  parent.status = 'done';
  const all = state.tasks.filter(t => t.parent === parent.id);
  const report = all.map(t => `### ${agentById(t.agent).name} (${t.status === 'failed' ? '실패: ' + (t.note || '') : '완료'})\n${t.result || ''}`).join('\n\n');
  createTask({ agent: parent.agent, title: `검수: ${parent.title}`, from: 'system',
    prompt: `팀원들이 맡긴 일을 마쳤습니다. 결과를 검수하고 사용자에게 최종 보고해 주세요. 고칠 것이 있으면 다시 delegate 블록으로 맡기세요.\n\n원래 요청: ${parent.prompt}\n\n${report}` });
}

function stopAgent(agentId) {
  const child = procs[agentId];
  const task = state.tasks.find(t => t.id === state.agents[agentId].taskId);
  if (task) task.status = 'stopped';
  queues[agentId] = [];
  for (const t of state.tasks) if (t.agent === agentId && t.status === 'queued') t.status = 'stopped';
  if (child) {
    if (process.platform === 'win32') { try { execSync(`taskkill /pid ${child.pid} /T /F`, { stdio: 'ignore' }); } catch {} }
    else child.kill('SIGTERM');
  }
  pushState();
}

// ---------- 파일 접근 제한 ----------
function insideAllowed(abs) {
  const r = path.resolve(abs);
  return [config.workspace, UPLOADS].some(base => r === path.resolve(base) || r.startsWith(path.resolve(base) + path.sep));
}
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.webp': 'image/webp', '.mp4': 'video/mp4', '.webm': 'video/webm',
  '.md': 'text/plain; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.pdf': 'application/pdf' };

function sendFile(res, file, extraHeaders = {}) {
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404); return res.end('not found'); }
    const type = MIME[path.extname(file).toLowerCase()] || 'application/octet-stream';
    const headers = { 'Content-Type': type, 'Content-Length': st.size, 'Cache-Control': 'no-cache', ...extraHeaders };
    if (type === 'image/svg+xml') headers['Content-Security-Policy'] = "script-src 'none'";
    res.writeHead(200, headers);
    fs.createReadStream(file).pipe(res);
  });
}
function json(res, code, obj) {
  res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(obj));
}
function readBody(req, limit = 1e6) {
  return new Promise((resolve, reject) => {
    const chunks = []; let n = 0;
    req.on('data', c => { n += c.length; if (n > limit) { reject(new Error('too large')); req.destroy(); } else chunks.push(c); });
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

// ---------- 백업 ----------
function backup() {
  const dir = path.join(DATA, 'backups', new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19));
  fs.mkdirSync(dir, { recursive: true });
  for (const f of fs.readdirSync(CHATS)) if (f.endsWith('.json')) fs.copyFileSync(path.join(CHATS, f), path.join(dir, f));
  if (fs.existsSync(STATE_FILE)) fs.copyFileSync(STATE_FILE, path.join(dir, 'state.json'));
  const all = fs.readdirSync(path.join(DATA, 'backups')).sort();
  for (const old of all.slice(0, Math.max(0, all.length - 16))) fs.rmSync(path.join(DATA, 'backups', old), { recursive: true, force: true });
}
setInterval(backup, Math.max(1, config.backupHours) * 3600e3).unref();

// ---------- HTTP ----------
function lanAddresses() {
  const out = [];
  for (const [name, list] of Object.entries(os.networkInterfaces())) for (const i of list || []) {
    if (i.family === 'IPv4' && !i.internal) out.push({ name, address: i.address, tailscale: i.address.startsWith('100.') || /tailscale/i.test(name) });
  }
  return out;
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  const p = url.pathname;
  try {
    if (p === '/api/login' && req.method === 'POST') {
      const ip = req.socket.remoteAddress;
      const f = loginFails.get(ip) || { n: 0, until: 0 };
      if (f.until > Date.now()) return json(res, 429, { error: '잠시 후 다시 시도하세요' });
      const { pin } = JSON.parse((await readBody(req)).toString() || '{}');
      if (String(pin) !== auth.pin) {
        f.n++; if (f.n >= 5) { f.until = Date.now() + 60e3; f.n = 0; }
        loginFails.set(ip, f);
        return json(res, 401, { error: '숫자가 맞지 않아요' });
      }
      loginFails.delete(ip);
      const token = crypto.randomBytes(24).toString('hex');
      auth.tokens.push(crypto.createHash('sha256').update(token).digest('hex'));
      auth.tokens = auth.tokens.slice(-30);
      writeJSON(AUTH_FILE, auth);
      res.setHeader('Set-Cookie', `office_token=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=31536000`);
      return json(res, 200, { ok: true });
    }

    if (!p.startsWith('/api/')) {
      if (!isAuthed(req) && p !== '/login.html' && !/\.(css|svg|webmanifest)$/.test(p)) {
        res.writeHead(302, { Location: '/login.html' }); return res.end();
      }
      const file = path.join(PUBLIC, p === '/' ? 'index.html' : path.normalize(p).replace(/^([\\/]\.\.)+/, ''));
      if (!file.startsWith(PUBLIC)) { res.writeHead(403); return res.end(); }
      return sendFile(res, file);
    }

    if (!isAuthed(req)) return json(res, 401, { error: 'login required' });

    if (p === '/api/events') {
      res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive', 'X-Accel-Buffering': 'no' });
      res.write(`event: state\ndata: ${JSON.stringify(publicState())}\n\n`);
      clients.add(res);
      const ka = setInterval(() => res.write(': ping\n\n'), 25e3);
      req.on('close', () => { clearInterval(ka); clients.delete(res); });
      return;
    }
    if (p === '/api/state') return json(res, 200, publicState());

    const chatM = /^\/api\/chat\/(\w+)$/.exec(p);
    if (chatM && req.method === 'GET') {
      if (!chats[chatM[1]]) return json(res, 404, {});
      return json(res, 200, { messages: chats[chatM[1]].messages.slice(-200) });
    }

    if (p === '/api/send' && req.method === 'POST') {
      const body = JSON.parse((await readBody(req)).toString());
      const agent = agentById(body.agent);
      const text = String(body.text || '').trim();
      if (!agent || !text) return json(res, 400, { error: 'agent/text 필요' });
      const files = (Array.isArray(body.files) ? body.files : []).map(f => path.basename(String(f))).filter(f => fs.existsSync(path.join(UPLOADS, f)));
      addMessage(agent.id, { role: 'user', text, uploads: files });
      const t = createTask({ agent: agent.id, title: text.split('\n')[0], prompt: text, mode: body.mode === 'draft' ? 'draft' : 'final', files });
      return json(res, 200, { task: t.id });
    }

    if (p === '/api/stop' && req.method === 'POST') {
      const { agent } = JSON.parse((await readBody(req)).toString());
      if (!agentById(agent)) return json(res, 400, {});
      stopAgent(agent); return json(res, 200, { ok: true });
    }

    if (p === '/api/newchat' && req.method === 'POST') {
      const { agent } = JSON.parse((await readBody(req)).toString());
      if (!chats[agent]) return json(res, 400, {});
      if (chats[agent].messages.length) {
        const stamp = new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-');
        writeJSON(path.join(CHATS, 'archive', `${agent}-${stamp}.json`), chats[agent]);
      }
      chats[agent] = { sessionId: null, messages: [] };
      saveChat(agent);
      broadcast('chatreset', { agent });
      return json(res, 200, { ok: true });
    }

    if (p === '/api/seen' && req.method === 'POST') {
      const { agent, task } = JSON.parse((await readBody(req)).toString());
      for (const t of state.tasks) if (t.status === 'review' && (t.id === task || (agent && t.agent === agent))) t.status = 'done';
      pushState(); return json(res, 200, { ok: true });
    }

    if (p === '/api/clear-done' && req.method === 'POST') {
      state.tasks = state.tasks.filter(t => !['done', 'failed', 'stopped'].includes(t.status));
      pushState(); return json(res, 200, { ok: true });
    }

    if (p === '/api/guide' && req.method === 'POST') {
      const { guide } = JSON.parse((await readBody(req)).toString());
      state.guide = String(guide || '').slice(0, 20000);
      pushState(); return json(res, 200, { ok: true });
    }

    if (p === '/api/upload' && req.method === 'POST') {
      const name = path.basename(decodeURIComponent(req.headers['x-filename'] || 'file')).replace(/[^\w.\-가-힣]/g, '_').slice(-80);
      const buf = await readBody(req, 25e6);
      const fname = `${Date.now()}-${name}`;
      fs.writeFileSync(path.join(UPLOADS, fname), buf);
      return json(res, 200, { file: fname });
    }

    if (p === '/api/file') {
      const rel = url.searchParams.get('path') || '';
      const up = url.searchParams.get('upload');
      const abs = up ? path.join(UPLOADS, path.basename(up)) : path.resolve(config.workspace, rel);
      if (!insideAllowed(abs)) { res.writeHead(403); return res.end(); }
      return sendFile(res, abs);
    }

    if (p === '/api/dirs') {
      const home = os.homedir();
      let dir = path.resolve(url.searchParams.get('path') || config.workspace);
      if (!(dir === home || dir.startsWith(home + path.sep)) && dir !== config.workspace) dir = home;
      let entries = [];
      try {
        entries = fs.readdirSync(dir, { withFileTypes: true })
          .filter(e => e.isDirectory() && !e.name.startsWith('.') && e.name !== 'node_modules')
          .map(e => e.name).sort((a, b) => a.localeCompare(b, 'ko')).slice(0, 300);
      } catch {}
      const parent = path.dirname(dir);
      return json(res, 200, { dir, parent: (parent === home || parent.startsWith(home + path.sep)) ? parent : null, entries });
    }

    if (p === '/api/workspace' && req.method === 'POST') {
      const { dir } = JSON.parse((await readBody(req)).toString());
      const abs = path.resolve(String(dir || ''));
      const home = os.homedir();
      if (!(abs.startsWith(home + path.sep)) || !fs.existsSync(abs) || !fs.statSync(abs).isDirectory()) return json(res, 400, { error: '홈 폴더 안의 폴더만 고를 수 있어요' });
      if (Object.keys(procs).length) return json(res, 409, { error: '일하는 직원이 있어서 지금은 바꿀 수 없어요' });
      config.workspace = abs;
      for (const id of Object.keys(chats)) { chats[id].sessionId = null; saveChat(id); }
      saveConfig(); pushState();
      return json(res, 200, { ok: true });
    }

    if (p === '/api/connect') {
      if (!isLocal(req)) return json(res, 200, { local: false });
      return json(res, 200, { local: true, pin: auth.pin, port: config.port, addresses: lanAddresses() });
    }

    if (p === '/api/settings' && req.method === 'POST') {
      const body = JSON.parse((await readBody(req)).toString());
      if ('ntfyTopic' in body) config.ntfyTopic = String(body.ntfyTopic || '').replace(/[^\w\-]/g, '').slice(0, 64);
      saveConfig(); return json(res, 200, { ok: true, ntfyTopic: config.ntfyTopic });
    }
    if (p === '/api/settings') return json(res, 200, { ntfyTopic: config.ntfyTopic, model: config.model, permissionMode: config.permissionMode });

    json(res, 404, { error: 'not found' });
  } catch (e) {
    json(res, 500, { error: e.message });
  }
});

server.listen(config.port, config.host, () => {
  console.log(`\n🌲 꿀TMI 숲 사무실이 열렸어요: http://localhost:${config.port}`);
  console.log(`   작업 폴더: ${config.workspace}`);
  for (const a of lanAddresses()) console.log(`   다른 기기: http://${a.address}:${config.port}${a.tailscale ? '  (Tailscale)' : ''}`);
  console.log(`   다른 기기 접속 숫자(PIN): ${auth.pin}\n`);
});
process.on('SIGINT', () => { for (const id of Object.keys(procs)) stopAgent(id); saveState(); setTimeout(() => process.exit(0), 400); });
