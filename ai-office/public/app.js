'use strict';
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const store = {
  get(k, d) { try { const v = localStorage.getItem('office.' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem('office.' + k, JSON.stringify(v)); } catch {} },
};

let S = { agents: {}, tasks: [], roster: [], guide: '', usage: {}, workspace: '' };
let current = null;           // 열린 채팅의 직원 id
let messages = [];            // 현재 채팅 메시지
let live = {};                // 직원별 실시간 글
let attachments = [];
let mode = 'final';
const sprites = {};

async function api(path, body) {
  const r = await fetch(path, body === undefined ? {} : { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  if (r.status === 401) { location.href = '/login.html'; throw new Error('login'); }
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(j.error || r.statusText);
  return j;
}
function toast(t, ms = 2600) { const el = $('#toast'); el.textContent = t; el.hidden = false; clearTimeout(toast.t); toast.t = setTimeout(() => el.hidden = true, ms); }
const agentOf = id => S.roster.find(a => a.id === id);
function spriteCanvas(id, cls) {
  const c = document.createElement('canvas'); c.width = Scene.SPRITE; c.height = Scene.SPRITE; if (cls) c.className = cls;
  c.getContext('2d').drawImage(sprites[id], 0, 0); return c;
}
function ago(ts) {
  if (!ts) return '';
  const d = new Date(ts), now = new Date();
  const hm = d.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
  return d.toDateString() === now.toDateString() ? hm : `${d.getMonth() + 1}/${d.getDate()} ${hm}`;
}
function dur(ms) { const s = Math.round(ms / 1000); return s < 60 ? `${s}초` : `${Math.floor(s / 60)}분 ${s % 60}초`; }

// ---------- 마크다운(간단) ----------
function md(src) {
  const blocks = [];
  let s = String(src || '').replace(/```(\w*)\n([\s\S]*?)```/g, (_, l, code) => { blocks.push(`<pre><code>${esc(code)}</code></pre>`); return `\u0000${blocks.length - 1}\u0000`; });
  const inline = t => esc(t)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/(^|[\s(])(https?:\/\/[^\s<)]+)/g, '$1<a href="$2" target="_blank" rel="noopener">$2</a>');
  const lines = s.split('\n'); const out = []; let list = null, para = [];
  const flushP = () => { if (para.length) { out.push(`<p>${para.map(inline).join('<br>')}</p>`); para = []; } };
  const flushL = () => { if (list) { out.push(`<${list.t}>${list.items.map(i => `<li>${inline(i)}</li>`).join('')}</${list.t}>`); list = null; } };
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    let m;
    if (/^\u0000\d+\u0000$/.test(l.trim())) { flushP(); flushL(); out.push(l.trim()); continue; }
    if (/^\s*\|.*\|\s*$/.test(l) && /^\s*\|?\s*:?-{2,}/.test(lines[i + 1] || '')) {
      flushP(); flushL();
      const row = r => r.trim().replace(/^\||\|$/g, '').split('|').map(c => c.trim());
      const head = row(l); i++; const body = [];
      while (i + 1 < lines.length && /^\s*\|.*\|\s*$/.test(lines[i + 1])) body.push(row(lines[++i]));
      out.push(`<table><thead><tr>${head.map(h => `<th>${inline(h)}</th>`).join('')}</tr></thead><tbody>${body.map(r => `<tr>${r.map(c => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>`);
      continue;
    }
    if ((m = /^(#{1,4})\s+(.*)/.exec(l))) { flushP(); flushL(); out.push(`<h${m[1].length + 1}>${inline(m[2])}</h${m[1].length + 1}>`); continue; }
    if ((m = /^\s*[-*]\s+(.*)/.exec(l))) { flushP(); if (!list || list.t !== 'ul') { flushL(); list = { t: 'ul', items: [] }; } list.items.push(m[1]); continue; }
    if ((m = /^\s*\d+[.)]\s+(.*)/.exec(l))) { flushP(); if (!list || list.t !== 'ol') { flushL(); list = { t: 'ol', items: [] }; } list.items.push(m[1]); continue; }
    if (!l.trim()) { flushP(); flushL(); continue; }
    flushL(); para.push(l);
  }
  flushP(); flushL();
  return out.join('').replace(/\u0000(\d+)\u0000/g, (_, n) => blocks[n]);
}

// ---------- 숲 ----------
function buildForest() {
  Scene.drawScene($('#bg'));
  const layer = $('#staffLayer'); layer.innerHTML = '';
  for (const a of S.roster) {
    sprites[a.id] = Scene.makeSprite(a.id);
    const [x, y] = Scene.SPOTS[a.id] || [128, 72];
    const b = document.createElement('button');
    b.className = 'staff'; b.dataset.id = a.id;
    b.style.left = (x / Scene.SCENE_W * 100) + '%'; b.style.top = (y / Scene.SCENE_H * 100) + '%';
    b.setAttribute('aria-label', `${a.name} · ${a.role} 채팅 열기`);
    b.innerHTML = `<span class="bubble">대기 중</span>`;
    b.appendChild(spriteCanvas(a.id));
    b.insertAdjacentHTML('beforeend', `<span class="tag">${esc(a.name)} · ${esc(a.role)}</span>`);
    b.querySelector('canvas').style.animationDelay = `${-Math.random() * 3}s`;
    b.onclick = () => openChat(a.id);
    layer.appendChild(b);
  }
}

function render() {
  // 직원 상태
  const reviewBy = {};
  for (const t of S.tasks) if (t.status === 'review') reviewBy[t.agent] = (reviewBy[t.agent] || 0) + 1;
  for (const a of S.roster) {
    const st = S.agents[a.id] || {};
    const el = document.querySelector(`.staff[data-id="${a.id}"]`);
    if (!el) continue;
    el.classList.toggle('working', st.status === 'working');
    el.classList.toggle('review', !!reviewBy[a.id] && st.status !== 'working');
    el.classList.toggle('active', current === a.id);
    const queued = S.tasks.filter(t => t.agent === a.id && t.status === 'queued').length;
    el.querySelector('.bubble').textContent = st.status === 'working' ? (st.activity || '일하는 중') + (queued ? ` (+${queued})` : '')
      : reviewBy[a.id] ? `확인할 결과 ${reviewBy[a.id]}개` : '대기 중';
  }
  // 위쪽 칩
  const chips = $('#staffChips'); chips.innerHTML = '';
  for (const a of S.roster) {
    const st = S.agents[a.id] || {};
    const b = document.createElement('button');
    b.className = 'chip' + (current === a.id ? ' active' : '');
    b.title = `${a.name} · ${a.role}`;
    b.appendChild(spriteCanvas(a.id));
    b.insertAdjacentHTML('beforeend', `${esc(a.name)}${st.status === 'working' ? '<i class="dot" aria-label="일하는 중"></i>' : ''}${reviewBy[a.id] ? `<span class="badge">${reviewBy[a.id]}</span>` : ''}`);
    b.onclick = () => openChat(a.id);
    chips.appendChild(b);
  }
  // 사용량
  const u = S.usage || {};
  const pct = v => v == null ? '–' : Math.round(v * 100) + '%';
  $('#usage').textContent = `Claude 5시간 ${pct(u.five_hour)} · 7일 ${pct(u.seven_day)}`;
  renderBoard();
  renderChatHead();
  $('#folderPath').textContent = S.workspace;
}

function renderBoard() {
  const cols = [
    ['queued', '맡긴 일'], ['running', '진행 중'], ['review', '확인 대기'], ['done', '완료'],
  ];
  const open = store.get('cols', { queued: true, running: true, review: true, done: false });
  const today = new Date().toDateString();
  const wrap = $('#boardCols'); wrap.innerHTML = '';
  for (const [key, label] of cols) {
    const list = S.tasks.filter(t => key === 'running' ? (t.status === 'running' || t.status === 'waiting')
      : key === 'done' ? (['done', 'failed', 'stopped'].includes(t.status) && new Date(t.finished || t.created).toDateString() === today)
      : t.status === key).slice().reverse();
    const d = document.createElement('details'); d.className = 'col'; d.open = open[key] !== false;
    d.ontoggle = () => { open[key] = d.open; store.set('cols', open); };
    d.innerHTML = `<summary>${label}<span class="n">${list.length}</span></summary>`;
    if (!list.length) d.insertAdjacentHTML('beforeend', '<div class="empty">없음</div>');
    for (const t of list.slice(0, 40)) {
      const a = agentOf(t.agent) || {};
      const from = t.from === 'user' ? '내 부탁' : t.from === 'system' ? '자동 검수' : `${agentOf(t.from)?.name || ''}의 부탁`;
      const st = S.agents[t.agent];
      let meta = `${a.name} · ${from}`;
      if (t.status === 'running' && st?.startedAt) meta += ` · ${dur(Date.now() - st.startedAt)} · ${st.steps || 0}단계`;
      if (t.status === 'waiting') meta += ' · 팀원 작업 대기';
      if (t.finished && key !== 'running') meta += ` · ${ago(t.finished)}`;
      if (t.status === 'failed') meta += ' · 실패';
      if (t.status === 'stopped') meta += ' · 중지됨';
      const c = document.createElement('button');
      c.className = 'card' + (t.status === 'failed' ? ' failed' : '');
      c.style.setProperty('--c', a.color);
      c.innerHTML = `<div class="t">${esc(t.title)}</div><div class="m">${esc(meta)}</div>`;
      c.onclick = () => { openChat(t.agent); if (t.status === 'review') api('/api/seen', { task: t.id }); };
      d.appendChild(c);
    }
    if (key === 'done' && list.length) {
      const clr = document.createElement('button'); clr.className = 'ibtn'; clr.style.fontSize = '12px'; clr.textContent = '완료 목록 비우기';
      clr.onclick = () => api('/api/clear-done', {}); d.appendChild(clr);
    }
    wrap.appendChild(d);
  }
}

// ---------- 채팅 ----------
async function openChat(id) {
  const a = agentOf(id); if (!a) return;
  current = id; store.set('lastChat', id);
  $('#chat').hidden = false;
  document.documentElement.style.setProperty('--agent', a.color);
  const av = $('#chatAvatar'); const g = av.getContext('2d'); g.clearRect(0, 0, 20, 20); g.drawImage(sprites[id], 0, 0);
  const r = await api(`/api/chat/${id}`);
  if (current !== id) return;
  messages = r.messages;
  renderMessages(true);
  render();
  if (S.tasks.some(t => t.agent === id && t.status === 'review')) api('/api/seen', { agent: id });
  if (matchMedia('(min-width: 761px)').matches) $('#input').focus();
}
function closeChat() { current = null; $('#chat').hidden = true; store.set('lastChat', null); render(); }

function renderChatHead() {
  if (!current) return;
  const a = agentOf(current), st = S.agents[current] || {};
  $('#chatName').textContent = `${a.name} · ${a.role}`;
  const q = S.tasks.filter(t => t.agent === current && t.status === 'queued').length;
  $('#chatStatus').textContent = st.status === 'working'
    ? `${st.activity || '일하는 중'} · ${dur(Date.now() - (st.startedAt || Date.now()))}${q ? ` · 대기 ${q}` : ''}`
    : `${a.animal} · 대기 중`;
  $('#btnStop').hidden = st.status !== 'working';
}

function fileUrl(f) { return `/api/file?path=${encodeURIComponent(f)}`; }
function msgEl(m) {
  const d = document.createElement('div');
  d.className = `msg ${m.role}`;
  if (m.role === 'system') { d.textContent = m.text; return d; }
  d.innerHTML = m.role === 'user' ? `<p>${esc(m.text).replace(/\n/g, '<br>')}</p>` : md(m.text);
  const files = (m.files || []).map(f => ({ url: fileUrl(f), name: f })).concat((m.uploads || []).map(f => ({ url: `/api/file?upload=${encodeURIComponent(f)}`, name: f.replace(/^\d+-/, '') })));
  if (files.length) {
    const box = document.createElement('div'); box.className = 'files';
    for (const f of files) {
      if (/\.(png|jpe?g|gif|webp|svg)$/i.test(f.name)) {
        const img = document.createElement('img'); img.src = f.url; img.alt = f.name; img.loading = 'lazy';
        img.onclick = () => lightbox(f); box.appendChild(img);
      } else if (/\.(mp4|webm)$/i.test(f.name)) {
        const v = document.createElement('video'); v.src = f.url; v.controls = true; v.preload = 'metadata'; box.appendChild(v);
      } else box.insertAdjacentHTML('beforeend', `<a class="fname" href="${esc(f.url)}" target="_blank">📄 ${esc(f.name)}</a>`);
    }
    d.appendChild(box);
  }
  if (m.choices && m.choices.length && m === messages[messages.length - 1]) {
    const c = document.createElement('div'); c.className = 'choices';
    for (const ch of m.choices) { const b = document.createElement('button'); b.textContent = ch; b.onclick = () => send(ch); c.appendChild(b); }
    d.appendChild(c);
  }
  d.insertAdjacentHTML('beforeend', `<div class="meta">${ago(m.ts)}</div>`);
  return d;
}
function renderMessages(scroll) {
  const box = $('#messages');
  const nearBottom = box.scrollHeight - box.scrollTop - box.clientHeight < 80;
  box.innerHTML = '';
  if (!messages.length) {
    const a = agentOf(current);
    box.insertAdjacentHTML('beforeend', `<div class="msg system">${esc(a.name)}에게 일을 맡겨 보세요.${a.lead ? '<br>큰 일은 팀원에게 나눠서 진행해요.' : ''}</div>`);
  }
  for (const m of messages) box.appendChild(msgEl(m));
  const st = S.agents[current];
  if (st?.status === 'working') {
    const d = document.createElement('div'); d.className = 'msg agent live';
    d.innerHTML = live[current] ? md(live[current]) : `<p>${esc(st.activity || '생각하는 중')}…</p>`;
    d.lastElementChild?.classList.add('typing');
    box.appendChild(d);
  }
  if (scroll || nearBottom) box.scrollTop = box.scrollHeight;
}

async function send(text) {
  text = (text ?? $('#input').value).trim();
  if (!text || !current) return;
  const files = attachments.map(a => a.file);
  $('#input').value = ''; attachments = []; renderAttachments();
  try { await api('/api/send', { agent: current, text, mode, files }); }
  catch (e) { toast('보내지 못했어요: ' + e.message); $('#input').value = text; }
}
function renderAttachments() { $('#attachList').innerHTML = attachments.map(a => `<span>📎 ${esc(a.name)}</span>`).join(''); }

// ---------- 라이트박스 ----------
function lightbox(file) {
  const imgs = messages.flatMap(m => (m.files || []).filter(f => /\.(png|jpe?g|gif|webp|svg)$/i.test(f)).map(f => ({ url: fileUrl(f), name: f })));
  let i = Math.max(0, imgs.findIndex(x => x.url === file.url)); if (!imgs.length) imgs.push(file);
  const show = () => { $('#lbFig').innerHTML = `<img src="${esc(imgs[i].url)}" alt=""><figcaption>${esc(imgs[i].name)} (${i + 1}/${imgs.length})</figcaption>`; };
  const lb = $('#lightbox'); lb.hidden = false; show();
  lb.querySelector('.lb-prev').onclick = e => { e.stopPropagation(); i = (i - 1 + imgs.length) % imgs.length; show(); };
  lb.querySelector('.lb-next').onclick = e => { e.stopPropagation(); i = (i + 1) % imgs.length; show(); };
  lb.onclick = e => { if (e.target === lb) lb.hidden = true; };
}

// ---------- 모달 ----------
function modal(title, html) { $('#modalTitle').textContent = title; $('#modalBody').innerHTML = html; $('#modal').hidden = false; return $('#modalBody'); }
function closeModal() { $('#modal').hidden = true; }

function guideModal() {
  const b = modal('📒 작업 가이드 — 모든 직원이 참고해요', `
    <p style="margin-top:0">브랜드·말투·자주 쓰는 출처처럼 매번 설명하기 귀찮은 내용을 적어 두세요.</p>
    <textarea id="guideText" placeholder="예) 블로그 이름: 꿀TMI / 독자: 민원·생활 정보를 찾는 30~60대 / 말투: 존댓말, 짧은 문장 / 금지: 과장 광고 문구"></textarea>
    <div class="row"><button class="primary" id="guideSave">저장</button></div>`);
  b.querySelector('#guideText').value = S.guide || '';
  b.querySelector('#guideSave').onclick = async () => { await api('/api/guide', { guide: b.querySelector('#guideText').value }); closeModal(); toast('작업 가이드를 저장했어요'); };
}

async function notifyModal() {
  const s = await api('/api/settings');
  const perm = 'Notification' in window ? Notification.permission : 'unsupported';
  const b = modal('🔔 알림', `
    <p style="margin-top:0"><b>이 브라우저 알림</b>: ${perm === 'granted' ? '켜짐' : perm === 'denied' ? '차단됨 (브라우저 설정에서 허용)' : perm === 'unsupported' ? '지원 안 함' : '꺼짐'}</p>
    ${perm === 'default' ? '<button class="primary" id="nPerm">이 기기에서 알림 받기</button>' : ''}
    <hr style="border:0;border-top:2px solid var(--cream-2);margin:14px 0">
    <p><b>휴대폰 푸시 (ntfy)</b>: 휴대폰에 ntfy 앱을 깔고, 아래와 같은 이름의 주제를 구독하세요. 남이 추측하기 어려운 이름이 안전해요.</p>
    <input type="text" id="nTopic" placeholder="예) kkultmi-office-${Math.random().toString(36).slice(2, 8)}" value="${esc(s.ntfyTopic || '')}">
    <div class="row"><button class="ghost" id="nTest">테스트 알림</button><button class="primary" id="nSave">저장</button></div>`);
  b.querySelector('#nPerm')?.addEventListener('click', async () => { await Notification.requestPermission(); notifyModal(); });
  b.querySelector('#nSave').onclick = async () => {
    const r = await api('/api/settings', { ntfyTopic: b.querySelector('#nTopic').value || b.querySelector('#nTopic').placeholder.replace('예) ', '') });
    toast(r.ntfyTopic ? `ntfy 주제 "${r.ntfyTopic}" 저장` : 'ntfy 알림 끔'); closeModal();
  };
  b.querySelector('#nTest').onclick = () => { showNotify('테스트', '알림이 잘 와요 🌲'); toast('테스트 알림을 보냈어요'); };
}

async function connectModal() {
  const r = await api('/api/connect');
  if (!r.local) return modal('📱 기기 연결', '<p>이미 다른 기기에서 접속 중이에요. 접속 숫자는 사무실 서버가 켜진 컴퓨터 화면에서 확인할 수 있어요.</p>');
  const ts = r.addresses.filter(a => a.tailscale), lan = r.addresses.filter(a => !a.tailscale);
  const line = a => `<span class="addr">http://${esc(a.address)}:${r.port}</span>`;
  modal('📱 휴대폰·다른 컴퓨터에서 접속', `
    <p style="margin-top:0">접속 숫자</p><div class="pin">${esc(r.pin)}</div>
    <p><b>밖에서도 (Tailscale)</b> — 이 컴퓨터와 휴대폰/맥북에 Tailscale을 깔고 같은 계정으로 로그인한 뒤:</p>
    <p>${ts.length ? ts.map(line).join('<br>') : '<span style="color:var(--muted)">Tailscale이 아직 연결되지 않았어요.</span>'}</p>
    <p><b>같은 와이파이에서</b></p><p>${lan.map(line).join('<br>') || '-'}</p>
    <p style="color:var(--muted);font-size:13px">주소를 열고 숫자를 넣으면 끝. 휴대폰에서는 공유 → "홈 화면에 추가"하면 앱처럼 열려요. 처음 켤 때 방화벽 창이 뜨면 "허용"을 누르세요. 모든 기기의 화면은 실시간으로 똑같이 맞춰져요.</p>`);
}

async function folderModal(dir) {
  const r = await api('/api/dirs' + (dir ? `?path=${encodeURIComponent(dir)}` : ''));
  const b = modal('📁 작업 폴더 고르기', `
    <p style="margin-top:0">지금 위치: <span class="addr">${esc(r.dir)}</span></p>
    <div class="dirlist" id="dl">${r.parent ? '<button data-p="..">⬆ 상위 폴더</button>' : ''}${r.entries.map(e => `<button data-p="${esc(e)}">📁 ${esc(e)}</button>`).join('') || '<div class="empty">하위 폴더 없음</div>'}</div>
    <div class="row"><button class="primary" id="fUse">이 폴더로 작업하기</button></div>
    <p style="color:var(--muted);font-size:12px">작업 폴더를 바꾸면 직원들이 새 대화로 시작해요.</p>`);
  const sep = r.dir.includes('\\') ? '\\' : '/';
  b.querySelectorAll('#dl button').forEach(btn => btn.onclick = () => folderModal(btn.dataset.p === '..' ? r.parent : r.dir.replace(/[\\/]$/, '') + sep + btn.dataset.p));
  b.querySelector('#fUse').onclick = async () => { try { await api('/api/workspace', { dir: r.dir }); closeModal(); toast('작업 폴더를 바꿨어요'); } catch (e) { toast(e.message); } };
}

function showNotify(title, body) {
  if (document.hasFocus() && current) return;
  if ('Notification' in window && Notification.permission === 'granted') { try { new Notification(title, { body, icon: '/icon.svg' }); } catch {} }
}

// ---------- 실시간 연결 ----------
function connect() {
  const es = new EventSource('/api/events');
  es.addEventListener('state', e => {
    const first = !S.roster.length;
    S = JSON.parse(e.data);
    if (first) { buildForest(); const last = store.get('lastChat'); if (last && agentOf(last) && matchMedia('(min-width: 761px)').matches) openChat(last); }
    for (const id of Object.keys(live)) if (S.agents[id]?.status !== 'working') live[id] = '';
    render();
    if (current) renderMessages();
  });
  es.addEventListener('message', e => {
    const { agent, message } = JSON.parse(e.data);
    if (message.role !== 'user') live[agent] = '';
    if (agent === current) { messages.push(message); renderMessages(true); }
  });
  es.addEventListener('delta', e => {
    const { agent, text, reset } = JSON.parse(e.data);
    live[agent] = reset ? '' : (live[agent] || '') + text;
    if (agent === current) { clearTimeout(connect.t); connect.t = setTimeout(() => renderMessages(), 120); }
  });
  es.addEventListener('chatreset', e => { if (JSON.parse(e.data).agent === current) { messages = []; renderMessages(true); } });
  es.addEventListener('notify', e => { const { title, body } = JSON.parse(e.data); showNotify(title, body); toast(`${title}: ${body}`); });
  es.onerror = () => { $('#usage').textContent = '연결 끊김 · 다시 연결 중'; fetch('/api/state').then(r => { if (r.status === 401) location.href = '/login.html'; }).catch(() => {}); };
}

// ---------- 크기 조절 ----------
function setupResizers() {
  for (const r of document.querySelectorAll('.resizer')) {
    r.addEventListener('pointerdown', e => {
      const target = r.dataset.target, el = $('#' + target), startX = e.clientX, startW = el.getBoundingClientRect().width;
      r.setPointerCapture(e.pointerId);
      const move = ev => { const w = target === 'board' ? startW + (ev.clientX - startX) : startW - (ev.clientX - startX); document.documentElement.style.setProperty(`--${target}-w`, Math.round(w) + 'px'); };
      const up = () => { r.removeEventListener('pointermove', move); store.set(target + 'W', getComputedStyle(document.documentElement).getPropertyValue(`--${target}-w`)); };
      r.addEventListener('pointermove', move); r.addEventListener('pointerup', up, { once: true });
    });
  }
  for (const t of ['board', 'chat']) { const w = store.get(t + 'W'); if (w) document.documentElement.style.setProperty(`--${t}-w`, w); }
}

// ---------- 시작 ----------
function init() {
  setupResizers();
  if (store.get('boardHidden')) $('#board').classList.add('hidden');
  $('#btnBoardHide').onclick = () => { $('#board').classList.add('hidden'); $('#board').classList.remove('big'); store.set('boardHidden', true); };
  $('#btnBoardShow').onclick = () => { $('#board').classList.remove('hidden'); store.set('boardHidden', false); };
  $('#btnBoardBig').onclick = () => $('#board').classList.toggle('big');
  $('#btnChatClose').onclick = closeChat;
  $('#btnChatMax').onclick = () => $('#chat').classList.toggle('max');
  $('#btnGuide').onclick = guideModal;
  $('#btnNotify').onclick = notifyModal;
  $('#btnConnect').onclick = connectModal;
  $('#btnFolder').onclick = () => folderModal();
  $('#modalClose').onclick = closeModal;
  $('#modal').onclick = e => { if (e.target.id === 'modal') closeModal(); };
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { if (!$('#lightbox').hidden) $('#lightbox').hidden = true; else if (!$('#modal').hidden) closeModal(); else if ($('#chat').classList.contains('max')) $('#chat').classList.remove('max'); }
  });
  $('#composer').onsubmit = e => { e.preventDefault(); send(); };
  $('#input').addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); send(); } });
  document.querySelectorAll('.seg button').forEach(b => b.onclick = () => { mode = b.dataset.mode; document.querySelectorAll('.seg button').forEach(x => x.classList.toggle('on', x === b)); });
  $('#btnNewChat').onclick = async () => { if (current && confirm('새 대화를 시작할까요? 지금 대화는 보관돼요.')) await api('/api/newchat', { agent: current }); };
  $('#btnStop').onclick = () => current && api('/api/stop', { agent: current });
  $('#fileInput').onchange = async e => {
    for (const f of e.target.files) {
      if (f.size > 25e6) { toast(`${f.name}: 25MB 이하만 첨부할 수 있어요`); continue; }
      const r = await fetch('/api/upload', { method: 'POST', headers: { 'X-Filename': encodeURIComponent(f.name) }, body: f }).then(r => r.json());
      if (r.file) { attachments.push({ file: r.file, name: f.name }); renderAttachments(); }
    }
    e.target.value = '';
  };
  const tick = () => { $('#clock').textContent = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: false }); if (current) renderChatHead(); if (S.tasks.some(t => t.status === 'running')) renderBoard(); };
  tick(); setInterval(tick, 1000);
  connect();
}
init();
