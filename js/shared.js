// ============================================================
// Shared UI components & utilities for all pages
// ============================================================

// Current page slug
const CURRENT_PAGE = document.querySelector('meta[name="page"]')?.content || 'index';

// --- Sidebar ---
function renderSidebar() {
  const nav = document.getElementById('sidebar');
  if (!nav) return;
  const items = [
    { id:'index', icon:'⚽', label:'数据看板', href:'index.html' },
    { id:'schedule', icon:'📅', label:'完整赛程', href:'schedule.html' },
    { id:'groups', icon:'📊', label:'小组积分', href:'groups.html' },
    { id:'scorers', icon:'👑', label:'射手榜', href:'scorers.html' },
    { id:'bracket', icon:'🌳', label:'晋级之路', href:'bracket.html' }
  ];

  nav.innerHTML = `
    <div class="sidebar-brand">
      <h2>WC 2026</h2>
      <span>FIFA World Cup · AI Predictions</span>
    </div>
    <div class="sidebar-nav">
      ${items.map(i => `
        <a href="${i.href}" class="nav-item ${CURRENT_PAGE === i.id ? 'active' : ''}">
          <span class="nav-icon">${i.icon}</span>
          ${i.label}
        </a>
      `).join('')}
    </div>
    <button class="theme-toggle" onclick="toggleTheme()" id="themeToggle">
      <span class="theme-toggle-icon" id="themeIcon">🌙</span>
      <span id="themeLabel">暗色模式</span>
    </button>
    <div class="sidebar-footer">
      <span class="live-dot"></span> 数据自动更新 · <span id="updateTime">--</span>
    </div>
  `;

  // Update time
  const now = new Date();
  document.getElementById('updateTime').textContent =
    now.toLocaleDateString('zh-CN', {month:'short',day:'numeric'}) + ' ' +
    now.toLocaleTimeString('zh-CN', {hour:'2-digit',minute:'2-digit'});
}
renderSidebar();

// --- Match Row HTML ---
function matchRowHTML(m, showPrediction = true) {
  const home = TEAMS[m.home], away = TEAMS[m.away];
  const isFinished = m.status === 'finished';
  const isLive = m.status === 'live';
  const pred = m.prediction;

  let statusBadge = '';
  if (isLive) statusBadge = '<span class="badge badge-live" style="margin-left:8px">LIVE</span>';
  else if (isFinished) {
    statusBadge = '<span class="badge badge-finished" style="margin-left:8px">完赛</span>';
    const upset = isUpset(m);
    if (upset) {
      statusBadge += ` <span class="badge" style="background:var(--red-light);color:var(--red);margin-left:4px;font-size:10px" title="${upset.desc}">${upset.level==='major'?'⚠ 大冷门':'⚠ 冷门'}</span>`;
    }
  }
  else statusBadge = '<span class="badge badge-upcoming" style="margin-left:8px">预告</span>';

  const scoreHTML = isFinished
    ? `<span class="score-val">${m.score.h}</span><span class="score-sep" style="font-size:14px">-</span><span class="score-val">${m.score.a}</span>`
    : isLive
    ? `<span class="score-val" style="color:var(--red)">${m.score?.h||0}</span><span class="score-sep" style="font-size:14px">-</span><span class="score-val" style="color:var(--red)">${m.score?.a||0}</span>`
    : showPrediction
    ? `<span class="score-val dim">${pred?.h||'?'}</span><span class="score-sep" style="font-size:12px;color:var(--text-muted)">vs</span><span class="score-val dim">${pred?.a||'?'}</span>`
    : `<span style="font-size:13px;color:var(--text-muted)">— : —</span>`;

  return `
    <div class="match-row" style="cursor:default">
      <div class="time-col">${m.time}</div>
      <div class="teams-col" style="flex:1">
        <div class="team-line"><span class="team-flag-sm" onclick="event.stopPropagation();showTeamModal('${m.home}')" title="查看${home.name}阵容" style="cursor:pointer">${home.flag}</span><span class="name ${!isFinished&&!isLive&&pred&&pred.h<pred.a?'dim':''}" onclick="event.stopPropagation();showTeamModal('${m.home}')" title="查看${home.name}阵容" style="cursor:pointer;border-bottom:1px dashed transparent;transition:border-color .15s" onmouseenter="this.style.borderBottomColor='var(--accent)'" onmouseleave="this.style.borderBottomColor='transparent'">${home.name}</span></div>
        <div class="team-line"><span class="team-flag-sm" onclick="event.stopPropagation();showTeamModal('${m.away}')" title="查看${away.name}阵容" style="cursor:pointer">${away.flag}</span><span class="name ${!isFinished&&!isLive&&pred&&pred.a<pred.h?'dim':''}" onclick="event.stopPropagation();showTeamModal('${m.away}')" title="查看${away.name}阵容" style="cursor:pointer;border-bottom:1px dashed transparent;transition:border-color .15s" onmouseenter="this.style.borderBottomColor='var(--accent)'" onmouseleave="this.style.borderBottomColor='transparent'">${away.name}</span></div>
      </div>
      <div class="score-col" onclick="window.location='match.html?id=${m.id}'" style="cursor:pointer" title="查看比赛详情">${scoreHTML}</div>
      <div style="display:flex;align-items:center;gap:6px" onclick="window.location='match.html?id=${m.id}'" style="cursor:pointer">
        <span class="badge badge-group">${m.group}组</span>
        ${statusBadge}
      </div>
      <div class="venue-col">${m.venue}</div>
    </div>
  `;
}

// --- Probability bars ---
function probBarsHTML(hp, dp, ap, home, away) {
  return `
    <div style="display:flex;align-items:center;gap:8px;margin:4px 0;font-size:11px">
      <span style="min-width:40px;text-align:right;color:var(--text-secondary)">${home||'主'}</span>
      <div class="prob-bar" style="flex:1"><div class="prob-fill win" style="width:${hp}%"></div></div>
      <span style="min-width:28px;font-weight:600">${hp}%</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;margin:4px 0;font-size:11px">
      <span style="min-width:40px;text-align:right;color:var(--text-secondary)">平</span>
      <div class="prob-bar" style="flex:1"><div class="prob-fill draw" style="width:${dp}%"></div></div>
      <span style="min-width:28px;font-weight:600">${dp}%</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;margin:4px 0;font-size:11px">
      <span style="min-width:40px;text-align:right;color:var(--text-secondary)">${away||'客'}</span>
      <div class="prob-bar" style="flex:1"><div class="prob-fill lose" style="width:${ap}%"></div></div>
      <span style="min-width:28px;font-weight:600">${ap}%</span>
    </div>
  `;
}

// --- Format odds movement ---
function oddsMoveLabel(move) {
  const map = {
    'home_in': '主队赔率下降↑',
    'home_heavy': '主队大热↑↑',
    'home_slight_in': '主队微热↑',
    'away_in': '客队赔率下降↓',
    'away_heavy': '客队大热↓↓',
    'away_slight_in': '客队微热↓',
    'draw_in': '平局赔率下降→',
    'stable': '赔率稳定'
  };
  return map[move] || move;
}

function oddsMoveColor(move) {
  if (move.includes('home')) return 'var(--green)';
  if (move.includes('away')) return 'var(--red)';
  if (move.includes('draw')) return 'var(--amber)';
  return 'var(--text-secondary)';
}

// --- Toast ---
function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2500);
}

// --- Flag helper ---
function teamFlag(code) { return TEAMS[code]?.flag || '🏳'; }
function teamName(code) { return TEAMS[code]?.name || code; }
function teamRank(code) { return TEAMS[code]?.rank || '—'; }

// --- Theme Toggle ---
(function() {
  const saved = localStorage.getItem('wc-theme');
  if (saved === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
})();

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.hasAttribute('data-theme');
  if (isDark) {
    html.removeAttribute('data-theme');
    localStorage.setItem('wc-theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('wc-theme', 'dark');
  }
  updateThemeUI();
}

function updateThemeUI() {
  const icon = document.getElementById('themeIcon');
  const label = document.getElementById('themeLabel');
  if (!icon || !label) return;
  const isDark = document.documentElement.hasAttribute('data-theme');
  icon.textContent = isDark ? '☀️' : '🌙';
  label.textContent = isDark ? '亮色模式' : '暗色模式';
}

// Update UI after sidebar render
setTimeout(updateThemeUI, 50);

// --- Team Modal ---
function showTeamModal(code) {
  const team = TEAMS[code];
  const squad = getSquad ? getSquad(code) : null;
  if (!team || !squad) return showToast('阵容数据暂缺');

  // Remove existing modal
  document.querySelector('.team-modal-overlay')?.remove();

  const playersHTML = squad.players.map(p => `
    <tr>
      <td class="tm-num">${p.num}</td>
      <td class="tm-player">${p.name}</td>
      <td class="tm-pos">${POS_LABELS[p.pos] || p.pos}</td>
      <td class="tm-goals ${p.goals > 0 ? 'has' : ''}">${p.goals > 0 ? '⚽ '+p.goals : '—'}</td>
    </tr>
  `).join('');

  const overlay = document.createElement('div');
  overlay.className = 'team-modal-overlay';
  overlay.innerHTML = `
    <div class="team-modal" onclick="event.stopPropagation()">
      <div class="team-modal-header">
        <span class="tm-flag">${team.flag}</span>
        <div class="tm-info">
          <div class="tm-name">${team.name}</div>
          <div class="tm-meta">FIFA #${team.rank} · ${code}组 · 教练: ${squad.coach}</div>
        </div>
        <button class="team-modal-close" onclick="this.closest('.team-modal-overlay').remove()">✕</button>
      </div>
      <div class="team-modal-body">
        <div class="tm-formation">阵型: <strong>${squad.formation}</strong> · 阵容人数: <strong>${squad.players.length}</strong></div>
        <table class="tm-roster">
          <thead><tr><th>#</th><th>球员</th><th>位置</th><th>进球</th></tr></thead>
          <tbody>${playersHTML}</tbody>
        </table>
      </div>
    </div>
  `;

  overlay.addEventListener('click', () => overlay.remove());
  document.addEventListener('keydown', function esc(e) {
    if (e.key === 'Escape') { overlay.remove(); document.removeEventListener('keydown', esc); }
  });

  document.body.appendChild(overlay);
}

// --- Upset Detection ---
function isUpset(match) {
  if (match.status !== 'finished' || !match.score || !match.prediction) return null;
  const pred = match.prediction;
  const real = match.score;
  const predGD = pred.h - pred.a;
  const realGD = real.h - real.a;
  const gdDiff = Math.abs(realGD - predGD);

  // Big upset: wrong winner predicted
  const predWinner = predGD > 0 ? 'home' : predGD < 0 ? 'away' : 'draw';
  const realWinner = realGD > 0 ? 'home' : realGD < 0 ? 'away' : 'draw';
  const wrongWinner = predWinner !== realWinner;

  if (wrongWinner && gdDiff >= 2) return { level: 'major', label: '⚠ 大冷门', desc: `预测${pred.h}-${pred.a}, 实际${real.h}-${real.a}, 胜负完全相反` };
  if (wrongWinner) return { level: 'minor', label: '⚠ 冷门', desc: `预测${predWinner}胜, 实际${realWinner}胜` };
  if (gdDiff >= 3) return { level: 'minor', label: '⚠ 分差意外', desc: `预测分差${Math.abs(predGD)}, 实际分差${Math.abs(realGD)}` };
  return null;
}

// --- Auto Refresh ---
(function() {
  const REFRESH_INTERVAL = 5 * 60 * 1000; // 5 min
  let lastScoreHash = '';

  function getScoreHash() {
    return MATCHES.filter(m => m.status === 'finished')
      .map(m => `${m.id}:${m.score?.h}-${m.score?.a}`).join('|');
  }

  function isMatchDay() {
    const today = new Date().toISOString().split('T')[0];
    return MATCHES.some(m => m.date === today);
  }

  async function checkUpdates() {
    try {
      const resp = await fetch('data/results.json?t=' + Date.now());
      if (!resp.ok) return;
      const data = await resp.json();
      const newHash = (data.matches || []).filter(m => m.status === 'finished')
        .map(m => `${m.home}-${m.away}:${m.score?.h}-${m.score?.a}`).join('|');

      if (lastScoreHash && newHash && newHash !== lastScoreHash) {
        showToast('📢 有新比分更新！刷新页面查看最新数据');
      }
      if (newHash) lastScoreHash = newHash;
    } catch(e) { /* silent fail */ }
  }

  // Init hash
  lastScoreHash = getScoreHash();

  // Only auto-refresh on match days (June 11 - July 19, 2026)
  const today = new Date().toISOString().split('T')[0];
  const inTournament = today >= '2026-06-11' && today <= '2026-07-19';
  if (inTournament && isMatchDay()) {
    setInterval(checkUpdates, REFRESH_INTERVAL);
  }
})();

