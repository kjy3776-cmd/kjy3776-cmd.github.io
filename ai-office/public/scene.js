// 숲 배경과 직원 스프라이트를 코드로 그립니다 (외부 그림 파일 없음).
'use strict';

const SCENE_W = 256, SCENE_H = 144;

// 직원 위치 (배경 좌표, 발 기준)
const SPOTS = {
  sol: [92, 58], bu: [36, 50], do: [52, 104], mo: [112, 112],
  yeo: [196, 110], bam: [226, 72], duk: [150, 128],
};

function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

function drawScene(canvas) {
  canvas.width = SCENE_W; canvas.height = SCENE_H;
  const g = canvas.getContext('2d');
  const R = rng(7);
  const px = (x, y, c, w = 1, h = 1) => { g.fillStyle = c; g.fillRect(Math.round(x), Math.round(y), w, h); };

  // 잔디
  px(0, 0, '#7fbf5a', SCENE_W, SCENE_H);
  for (let i = 0; i < 900; i++) px(R() * SCENE_W, R() * SCENE_H, R() < .5 ? '#73b04f' : '#8dca66');
  for (let i = 0; i < 160; i++) { const x = R() * SCENE_W, y = R() * SCENE_H; px(x, y, '#5f9a40'); px(x + 1, y - 1, '#5f9a40'); }

  // 위쪽 언덕(절벽)
  for (let x = 0; x < SCENE_W; x++) {
    const h = 18 + Math.round(Math.sin(x / 17) * 3 + Math.sin(x / 7) * 1.5);
    px(x, 0, '#5c9a45', 1, h);
    px(x, h, '#8a6b4a', 1, 4);
    px(x, h + 4, '#6d5238', 1, 1);
    if (x % 9 === 0) px(x, h + 1, '#a08060', 2, 1);
  }

  // 시냇물 (오른쪽 위 폭포에서 왼쪽 아래로)
  const river = [[206, 4], [204, 24], [196, 44], [178, 66], [168, 90], [162, 112], [150, 130], [134, 150]];
  const pathPts = [];
  for (let i = 0; i < river.length - 1; i++) {
    const [x1, y1] = river[i], [x2, y2] = river[i + 1];
    for (let t = 0; t < 1; t += .02) pathPts.push([x1 + (x2 - x1) * t, y1 + (y2 - y1) * t]);
  }
  const disc = (cx, cy, r, c) => { for (let y = -r; y <= r; y++) for (let x = -r; x <= r; x++) if (x * x + y * y <= r * r) px(cx + x, cy + y, c); };
  for (const [x, y] of pathPts) disc(x, y, 9, '#c9b27c');      // 모래 기슭
  for (const [x, y] of pathPts) disc(x, y, 7, '#4f9fd1');
  for (const [x, y] of pathPts) disc(x - 1, y, 4, '#66b6e3');
  for (let i = 0; i < 70; i++) { const [x, y] = pathPts[Math.floor(R() * pathPts.length)]; px(x + R() * 6 - 3, y + R() * 6 - 3, '#d8f0fb', 2, 1); }
  // 폭포
  px(200, 0, '#8fd0f0', 12, 22); for (let y = 0; y < 22; y += 2) px(201 + (y % 4), y, '#e6f7ff', 2, 1);
  for (let i = 0; i < 14; i++) px(198 + R() * 16, 20 + R() * 6, '#ffffff');

  // 꽃길
  const walk = [[0, 82], [30, 80], [60, 76], [90, 70], [118, 76], [150, 88], [178, 92], [220, 96], [256, 100]];
  for (let i = 0; i < walk.length - 1; i++) {
    const [x1, y1] = walk[i], [x2, y2] = walk[i + 1];
    for (let t = 0; t < 1; t += .05) { const x = x1 + (x2 - x1) * t, y = y1 + (y2 - y1) * t; px(x - 2, y - 3, '#e6cf98', 5, 6); }
  }
  for (let i = 0; i < 60; i++) { const [x1, y1] = walk[Math.floor(R() * (walk.length - 1))]; px(x1 + R() * 26, y1 - 3 + R() * 6, '#d6bc82'); }
  // 나무 다리
  px(160, 84, '#8a5a32', 22, 12);
  for (let x = 160; x < 182; x += 3) px(x, 84, '#a8743f', 2, 12);
  px(160, 83, '#5e3c20', 22, 1); px(160, 96, '#5e3c20', 22, 1);

  // 꽃
  const flowerC = ['#ffffff', '#ffd84a', '#ff8fb1', '#c59bff', '#ff6f5e'];
  for (let i = 0; i < 120; i++) {
    const x = R() * SCENE_W, y = 26 + R() * (SCENE_H - 26);
    if (pathPts.some(([a, b]) => Math.abs(a - x) < 11 && Math.abs(b - y) < 11)) continue;
    const c = flowerC[Math.floor(R() * flowerC.length)];
    px(x, y, c); px(x + 1, y + 1, '#3f7a2c');
  }

  // 그루터기 책상 (직원 자리)
  for (const [x, y] of Object.values(SPOTS)) {
    px(x - 9, y - 1, 'rgba(0,0,0,.18)', 18, 3);
  }

  // 나무
  const tree = (x, y, s = 1) => {
    px(x - 2, y - 2, '#6b4426', 4, 8);
    px(x - 9 * s, y - 2, 'rgba(0,0,0,.15)', 18 * s, 3);
    const r = Math.round(8 * s);
    for (let yy = -r; yy <= r; yy++) for (let xx = -r; xx <= r; xx++) {
      const d = xx * xx + yy * yy * 1.2;
      if (d <= r * r) px(x + xx, y - 10 * s + yy, d > (r - 2) * (r - 2) ? '#2f6b2e' : (xx + yy < -2 ? '#5aa84a' : '#3f8a38'));
    }
    px(x - 3 * s, y - 14 * s, '#7cc566', 2, 2);
  };
  const pine = (x, y) => {
    px(x - 1, y - 2, '#6b4426', 3, 5);
    for (let i = 0; i < 12; i++) { const w = Math.floor(i * .7) + 1; px(x - w, y - 14 + i, i % 4 === 3 ? '#245a2a' : '#2f7034', w * 2 + 1, 1); }
  };
  [[10, 40], [70, 34], [128, 36], [242, 40], [14, 130], [236, 138], [100, 142], [60, 140], [250, 120]].forEach(([x, y], i) => tree(x, y, i % 3 ? 1 : 1.2));
  [[150, 34], [170, 40], [30, 76], [232, 54], [196, 140], [4, 100]].forEach(([x, y]) => pine(x, y));

  // 바위·덤불
  for (const [x, y] of [[186, 110], [140, 62], [80, 128], [208, 76]]) { px(x, y, '#8d8f8a', 6, 4); px(x + 1, y - 1, '#a9aba5', 4, 1); px(x, y + 3, '#6c6e69', 6, 1); }
  for (const [x, y] of [[120, 98], [40, 122], [222, 124], [66, 60]]) { px(x, y, '#3f8a38', 8, 4); px(x + 1, y - 2, '#4f9c42', 6, 2); px(x + 2, y - 3, '#68b356', 2, 1); }

  // 표지판
  px(20, 92, '#6b4426', 2, 8); px(12, 86, '#a8743f', 18, 7); px(12, 86, '#5e3c20', 18, 1);
  px(15, 89, '#3b2a1e', 12, 1);
}

// ---------- 직원 스프라이트 (20x20, 자동 외곽선) ----------
const SPRITE = 20;
function makeSprite(kind) {
  const N = SPRITE, grid = Array.from({ length: N }, () => Array(N).fill(null));
  const set = (x, y, c) => { x = Math.round(x); y = Math.round(y); if (x >= 0 && y >= 0 && x < N && y < N) grid[y][x] = c; };
  const ell = (cx, cy, rx, ry, c) => { for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) if (((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 <= 1) set(x, y, c); };
  const P = {
    sol: { b: '#b8783f', l: '#f0d9b0' }, bu: { b: '#7b679f', l: '#e3d8ef' }, do: { b: '#c9772f', l: '#f6e2c0' },
    mo: { b: '#f4eeee', l: '#ffd6e0' }, yeo: { b: '#e57a2c', l: '#fff4e6' }, bam: { b: '#e9c99c', l: '#f6e4c8' }, duk: { b: '#f5d34e', l: '#fff3b0' },
  }[kind];

  // 뒤쪽 부속
  if (kind === 'do') { ell(15.5, 11, 3, 5, '#a95c22'); ell(16, 8, 2, 2.5, '#c9772f'); }
  if (kind === 'yeo') { ell(15.5, 15, 3, 2, P.b); set(17, 15, '#ffffff'); set(18, 15, '#ffffff'); set(17, 14, '#ffffff'); }
  if (kind === 'bam') { for (let a = 0; a < 26; a++) { const t = Math.PI * (a / 25) + Math.PI; const r = a % 2 ? 7.6 : 6.2; set(9.5 + Math.cos(t) * r, 9 + Math.sin(t) * r * .95, '#6e4a2e'); } ell(9.5, 9, 7, 6.5, '#7d5634'); }

  // 몸통·머리
  ell(9.5, 15.5, 4, 3, P.b);
  ell(9.5, 16, 2.4, 2, P.l);
  ell(9.5, 9, kind === 'bam' ? 4.6 : 5.5, kind === 'bam' ? 4 : 4.8, kind === 'bam' ? P.l : P.b);
  set(7, 18.5, '#3b2a1e'); set(12, 18.5, '#3b2a1e');

  // 귀·특징
  if (kind === 'sol') {
    for (const [x, y] of [[5, 2], [4, 1], [6, 3], [6, 1], [13, 2], [14, 1], [12, 3], [12, 1]]) set(x, y, '#7a5230');
    ell(3.5, 7, 1.5, 1, P.b); ell(15.5, 7, 1.5, 1, P.b);
    set(8, 5, '#ffffff'); set(11, 6, '#ffffff'); set(10, 4, '#ffffff');
    ell(9.5, 11, 2, 1.3, P.l);
  }
  if (kind === 'bu') {
    set(5, 4, P.b); set(4, 3, P.b); set(14, 4, P.b); set(15, 3, P.b);
    ell(7.2, 9, 2.2, 2.2, P.l); ell(11.8, 9, 2.2, 2.2, P.l);
    set(9.5, 11, '#f0a030'); set(9.5, 12, '#d8891e');
    for (let x = 6; x <= 13; x += 2) set(x, 15, '#5f4d80');
  }
  if (kind === 'do') { ell(5.5, 4.5, 1.3, 1.5, P.b); ell(13.5, 4.5, 1.3, 1.5, P.b); set(5.5, 4.5, '#f2b38a'); set(13.5, 4.5, '#f2b38a'); ell(9.5, 11, 2.2, 1.2, P.l); }
  if (kind === 'mo') {
    for (let y = 0; y <= 4; y++) { set(6, y, P.b); set(7, y, P.b); set(12, y, P.b); set(13, y, P.b); }
    for (let y = 1; y <= 3; y++) { set(7, y, '#f7b3c6'); set(12, y, '#f7b3c6'); }
    set(9.5, 10.6, '#f78fa7');
  }
  if (kind === 'yeo') {
    for (let i = 0; i < 4; i++) for (let j = 0; j <= i; j++) { set(5 + j, 2 + i, P.b); set(14 - j, 2 + i, P.b); }
    set(5, 2, '#3b2a1e'); set(14, 2, '#3b2a1e'); set(6, 4, '#f7c9a8'); set(13, 4, '#f7c9a8');
    ell(9.5, 11.5, 3, 1.8, P.l);
  }
  if (kind === 'bam') { set(9.5, 10.6, '#3b2a1e'); }
  if (kind === 'duk') {
    set(9, 3, P.b); set(10, 2, P.b); set(10, 3, P.b);
    for (let x = 8; x <= 11; x++) set(x, 11, '#f08a24'); set(9, 12, '#d8731a'); set(10, 12, '#d8731a');
    ell(4.5, 15, 1.4, 2, '#e8c040'); ell(14.5, 15, 1.4, 2, '#e8c040');
  }

  // 눈·볼
  for (const x of [7.5, 11.5]) { set(x, 9, '#2a1e16'); set(x, 8, '#2a1e16'); }
  if (kind !== 'bu') { set(6, 10.6, '#f49ab0'); set(13, 10.6, '#f49ab0'); }

  // 자동 외곽선
  const out = grid.map(r => r.slice());
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    if (grid[y][x]) continue;
    if ([[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => grid[y + dy]?.[x + dx])) out[y][x] = '#3b2a1e';
  }
  const c = document.createElement('canvas');
  c.width = N; c.height = N;
  const g = c.getContext('2d');
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) if (out[y][x]) { g.fillStyle = out[y][x]; g.fillRect(x, y, 1, 1); }
  return c;
}

window.Scene = { SCENE_W, SCENE_H, SPOTS, SPRITE, drawScene, makeSprite };
