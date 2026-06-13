// ============================================================
// Five-Dimension Match Rating Engine
// 1. Team Strength | 2. Tactical Style | 3. Recent Form
// 4. Tournament Factors | 5. Data Model
// ============================================================

const WEIGHTS = { strength: 0.25, tactical: 0.20, form: 0.25, tournament: 0.15, model: 0.15 };

// ============================================================
// Dimension 1: Team Strength (FIFA rank + squad value + age)
// ============================================================
function calcStrengthScore(teamCode) {
  const t = TEAMS[teamCode];
  const rankScore = Math.max(0, Math.min(100, 100 - (t.rank - 1) / 210 * 100));

  // Squad value proxy: ELO * 2 approximates market value ranking
  const maxElo = 2000;
  const valueScore = Math.min(100, t.elo / maxElo * 100);

  // Age profile: peak at 27-28, decline both sides
  const age = t.squadAge || 27;
  const ageScore = 100 - Math.abs(age - 27.5) * 5;

  return {
    rankScore: Math.round(rankScore),
    valueScore: Math.round(valueScore),
    ageScore: Math.round(Math.max(40, ageScore)),
    total: Math.round(rankScore * 0.5 + valueScore * 0.3 + Math.max(40, ageScore) * 0.2)
  };
}

// ============================================================
// Dimension 2: Tactical Style (formation + style + H2H)
// ============================================================
const FORMATION_MATRIX = {
  '4-3-3': { '4-4-2': 60, '3-5-2': 40, '4-2-3-1': 50, '3-4-3': 45, '4-3-3': 50 },
  '4-2-3-1': { '4-4-2': 55, '3-5-2': 45, '4-3-3': 50, '3-4-3': 50, '4-2-3-1': 50 },
  '3-5-2': { '4-3-3': 60, '4-4-2': 45, '4-2-3-1': 55, '3-4-3': 50, '3-5-2': 50 },
  '4-4-2': { '4-3-3': 40, '3-5-2': 55, '4-2-3-1': 45, '3-4-3': 50, '4-4-2': 50 },
  '3-4-3': { '4-3-3': 55, '3-5-2': 50, '4-2-3-1': 50, '4-4-2': 50, '3-4-3': 50 },
  '4-3-2-1': { '4-3-3': 50, '3-5-2': 45, '4-2-3-1': 50, '4-4-2': 55, '3-4-3': 50 }
};

function calcTacticalScore(homeCode, awayCode) {
  const homeSquad = getSquad(homeCode);
  const awaySquad = getSquad(awayCode);

  // Formation matchup
  const hForm = homeSquad?.formation || '4-3-3';
  const aForm = awaySquad?.formation || '4-3-3';
  const formScore = (FORMATION_MATRIX[hForm]?.[aForm] || 50);

  // Style proxy: formation width indicates attacking intent
  const hAttacking = hForm.startsWith('4-3') || hForm.startsWith('3-4') ? 55 : 45;
  const aAttacking = aForm.startsWith('4-3') || aForm.startsWith('3-4') ? 55 : 45;

  // H2H: based on ELO difference as proxy for historical dominance
  const eloDiff = TEAMS[homeCode].elo - TEAMS[awayCode].elo;
  const h2hScore = 50 + Math.min(30, Math.max(-30, eloDiff / 15));

  return {
    formationScore: Math.round(formScore),
    styleScore: Math.round((hAttacking + (100 - aAttacking)) / 2),
    h2hScore: Math.round(h2hScore),
    total: Math.round(formScore * 0.4 + (hAttacking + (100 - aAttacking)) / 2 * 0.3 + h2hScore * 0.3)
  };
}

// ============================================================
// Dimension 3: Recent Form (xG proxy + conversion + injuries)
// ============================================================
function calcFormScore(teamCode) {
  const t = TEAMS[teamCode];
  // xG proxy: ELO change in last 10 matches simulated from rank stability
  const rankFactor = Math.max(0, 100 - t.rank * 0.5);
  const xgScore = 40 + rankFactor * 0.6;

  // Conversion rate proxy: higher ranked teams convert better
  const convScore = 40 + Math.min(60, (100 - t.rank) * 0.6);

  // Injury impact: check squad for key absentees
  let injuryPenalty = 0;
  const squad = getSquad(teamCode);
  if (squad) {
    const keyPlayers = squad.players.slice(0, 5); // top 5 players
    // Simulated: check if any missing (this would be updated with real data)
    // For now: teams with recent losses get penalties
    const recentMatches = getMatchesByGroup(t.group).filter(m =>
      m.status === 'finished' && (m.home === teamCode || m.away === teamCode)
    );
    recentMatches.forEach(m => {
      const isHome = m.home === teamCode;
      const myScore = isHome ? m.score.h : m.score.a;
      const oppScore = isHome ? m.score.a : m.score.h;
      if (myScore < oppScore) injuryPenalty += 10; // each loss suggests issues
      if (myScore === 0) injuryPenalty += 5; // blank suggests offensive issues
    });
  }

  return {
    xgScore: Math.round(xgScore),
    convScore: Math.round(convScore),
    injuryScore: Math.round(Math.max(50, 100 - injuryPenalty)),
    total: Math.round(xgScore * 0.5 + convScore * 0.25 + Math.max(50, 100 - injuryPenalty) * 0.25)
  };
}

// ============================================================
// Dimension 4: Tournament Factors (path + travel + referee)
// ============================================================
function calcTournamentScore(teamCode, group) {
  // Path difficulty: what position in group → who they face in R32
  // Group winners face 3rd place teams (easier path)
  const standings = getGroupStandings(group);
  const pos = standings.findIndex(t => t.code === teamCode) + 1;
  let pathScore;
  if (pos === 0) pathScore = 55; // unknown position
  else if (pos === 1) pathScore = 70; // group winner → easier path
  else if (pos === 2) pathScore = 50; // runner-up → harder path
  else if (pos === 3) pathScore = 35; // 3rd place → tough
  else pathScore = 20; // 4th → nearly eliminated

  // Travel fatigue: based on venue distribution
  const groupVenues = {
    A: 62, B: 58, C: 55, D: 60, E: 55, F: 58,
    G: 55, H: 58, I: 60, J: 55, K: 58, L: 55
  };
  const travelScore = groupVenues[group] || 55;

  // Referee factor: neutral (would be updated per match)
  const refScore = 50;

  return {
    pathScore: Math.round(pathScore),
    travelScore: Math.round(travelScore),
    refScore: Math.round(refScore),
    total: Math.round(pathScore * 0.5 + travelScore * 0.3 + refScore * 0.2)
  };
}

// ============================================================
// Dimension 5: Data Model (ELO + odds + money flow)
// ============================================================
function calcModelScore(homeCode, awayCode, match) {
  const hElo = TEAMS[homeCode].elo;
  const aElo = TEAMS[awayCode].elo;

  // ELO win probability
  const eloDiff = hElo - aElo;
  const eloProb = 1 / (1 + Math.pow(10, -eloDiff / 400));
  const eloScore = Math.round(eloProb * 100);

  // Odds implied probability
  let oddsScore = 50;
  if (match?.odds) {
    const o = match.odds;
    const margin = 1/o.h + 1/o.d + 1/o.a;
    oddsScore = Math.round((1/o.h) / margin * 100);
  }

  // Money flow: odds movement
  let flowScore = 50;
  if (match?.odds?.move) {
    const m = match.odds.move;
    if (m.includes('home_heavy')) flowScore = 65;
    else if (m.includes('home_in') || m.includes('home_slight')) flowScore = 58;
    else if (m.includes('away_heavy')) flowScore = 35;
    else if (m.includes('away_in') || m.includes('away_slight')) flowScore = 42;
  }

  return {
    eloScore,
    oddsScore,
    flowScore,
    total: Math.round(eloScore * 0.4 + oddsScore * 0.4 + flowScore * 0.2)
  };
}

// ============================================================
// Composite: calculate all five dimensions for a match
// ============================================================
function calcMatchRatings(match) {
  const h = match.home, a = match.away, g = match.group;

  const hStrength = calcStrengthScore(h);
  const aStrength = calcStrengthScore(a);
  const tactical = calcTacticalScore(h, a);
  const hForm = calcFormScore(h);
  const aForm = calcFormScore(a);
  const hTournament = calcTournamentScore(h, g);
  const aTournament = calcTournamentScore(a, g);
  const model = calcModelScore(h, a, match);

  // Home-field advantage for hosts (USA, Canada, Mexico)
  const hostTeams = ['USA', 'CAN', 'MEX'];
  const hostBonus = hostTeams.includes(h) ? 1.08 : 1.0;

  // Composite for home team perspective
  const hTotal = (
    hStrength.total * WEIGHTS.strength +
    tactical.total * WEIGHTS.tactical +
    hForm.total * WEIGHTS.form +
    hTournament.total * WEIGHTS.tournament +
    model.total * WEIGHTS.model
  ) * hostBonus;

  const aTotal = (
    aStrength.total * WEIGHTS.strength +
    (100 - tactical.total) * WEIGHTS.tactical + // invert tactical for away
    aForm.total * WEIGHTS.form +
    aTournament.total * WEIGHTS.tournament +
    (100 - model.total) * WEIGHTS.model
  );

  const totalSum = hTotal + aTotal;
  const homeProb = Math.round(hTotal / totalSum * 100);
  const drawProb = Math.round(Math.max(15, Math.min(35, 100 - Math.abs(homeProb - 50))));
  const awayProb = 100 - homeProb - drawProb;

  // Predicted score based on strength ratio
  const avgGoals = 2.75;
  const hGoals = Math.round(avgGoals * (homeProb / 100) * 2) / 2;
  const aGoals = Math.round(avgGoals * (awayProb / 100) * 2) / 2;

  return {
    dimensions: {
      strength: { home: hStrength.total, away: aStrength.total, weight: 25,
        detail: { h: hStrength, a: aStrength } },
      tactical: { home: tactical.total, away: 100 - tactical.total, weight: 20,
        detail: { formation: tactical.formationScore, style: tactical.styleScore, h2h: tactical.h2hScore } },
      form: { home: hForm.total, away: aForm.total, weight: 25,
        detail: { h: hForm, a: aForm } },
      tournament: { home: hTournament.total, away: aTournament.total, weight: 15,
        detail: { h: hTournament, a: aTournament } },
      model: { home: model.total, away: 100 - model.total, weight: 15,
        detail: { elo: model.eloScore, odds: model.oddsScore, flow: model.flowScore } }
    },
    composite: {
      homeTotal: Math.round(hTotal),
      awayTotal: Math.round(aTotal),
      homeProb, drawProb, awayProb,
      predScore: { h: hGoals, a: aGoals },
      confidence: Math.round(Math.abs(homeProb - 50) + 50) // confidence = how decisive
    }
  };
}

// ============================================================
// Convenience: get ratings for a match by ID
// ============================================================
function getMatchRatings(matchId) {
  const m = getMatch(matchId);
  if (!m) return null;
  return calcMatchRatings(m);
}

// ============================================================
// Radar chart data helper
// ============================================================
function getRadarData(ratings) {
  const dims = ratings.dimensions;
  return {
    labels: ['球队实力', '战术风格', '近期状态', '赛会因素', '数据模型'],
    home: [
      dims.strength.home,
      dims.tactical.home,
      dims.form.home,
      dims.tournament.home,
      dims.model.home
    ],
    away: [
      dims.strength.away,
      dims.tactical.away,
      dims.form.away,
      dims.tournament.away,
      dims.model.away
    ],
    weights: [
      dims.strength.weight,
      dims.tactical.weight,
      dims.form.weight,
      dims.tournament.weight,
      dims.model.weight
    ]
  };
}

// ============================================================
// Post-Mortem Analysis Engine
// 5-step diagnostic: data → weights → missing → luck → fix
// ============================================================
function generatePostMortem(match) {
  if (match.status !== 'finished' || !match.score) return null;
  const pred = match.prediction;
  const real = match.score;
  const hTeam = TEAMS[match.home], aTeam = TEAMS[match.away];
  const ratings = calcMatchRatings(match);
  const dims = ratings.dimensions;

  // Gap analysis
  const predGD = pred.h - pred.a;
  const realGD = real.h - real.a;
  const gdError = realGD - predGD;
  const absGdError = Math.abs(gdError);
  const predWinner = predGD > 0 ? match.home : predGD < 0 ? match.away : 'draw';
  const realWinner = realGD > 0 ? match.home : realGD < 0 ? match.away : 'draw';
  const wrongWinner = predWinner !== realWinner;

  // Dimension contribution analysis
  const dimContributions = ['strength','tactical','form','tournament','model'].map(key => {
    const d = dims[key];
    const homeAdv = d.home - d.away;
    return { key, homeAdv, weight: d.weight, contribution: Math.round(homeAdv * d.weight / 100) };
  });

  // Find over/under-weighted dimensions
  const sortedByContribution = [...dimContributions].sort((a,b) => Math.abs(b.homeAdv) - Math.abs(a.homeAdv));
  const mostInfluential = sortedByContribution[0];
  const leastInfluential = sortedByContribution[sortedByContribution.length - 1];

  // === Step 1: Data Errors ===
  let dataErrors = [];
  dimContributions.forEach(dc => {
    if (Math.abs(dc.homeAdv) > 20) {
      const labelMap = { strength:'FIFA排名/身价/年龄', tactical:'阵型克制/H2H', form:'xG状态/伤病', tournament:'路径/旅途', model:'ELO/赔率' };
      if (dc.homeAdv > 0 && realWinner === match.away) {
        dataErrors.push(`${labelMap[dc.key]}高估了${hTeam.name}: 分差+${dc.homeAdv}但实际落败`);
      } else if (dc.homeAdv < -20 && realWinner === match.home) {
        dataErrors.push(`${labelMap[dc.key]}低估了${hTeam.name}: 分差${dc.homeAdv}但实际取胜`);
      }
    }
  });
  if (dataErrors.length === 0) dataErrors.push('各维度基础数据基本准确，偏差主要来自其他环节');

  // === Step 2: Weight Imbalance ===
  let weightIssues = [];
  const overContrib = sortedByContribution.filter(d => Math.abs(d.contribution) > 15);
  const underContrib = sortedByContribution.filter(d => Math.abs(d.contribution) < 3);
  if (overContrib.length > 0) {
    const nameMap = { strength:'球队实力', tactical:'战术风格', form:'近期状态', tournament:'赛会因素', model:'数据模型' };
    weightIssues.push(`${nameMap[overContrib[0].key]}维度贡献过高(${overContrib[0].contribution}分)，可能掩盖其他维度信号`);
  }
  if (underContrib.length > 0) {
    weightIssues.push(`部分维度贡献过低(<3分)，实际预测主要依赖1-2个维度，缺乏多角度验证`);
  }
  if (weightIssues.length === 0) weightIssues.push('权重分配基本合理，各维度贡献均衡');

  // === Step 3: Missing Factors ===
  let missingFactors = [];
  const events = match.events || [];
  const redCards = events.filter(e => e.t === 'red' || e.t === 'red_card');
  const ownGoals = events.filter(e => e.p && e.p.includes('OG'));
  const earlyGoals = events.filter(e => e.t === 'goal' && parseInt(e.m) < 15);
  const lateGoals = events.filter(e => e.t === 'goal' && parseInt(e.m) > 80);

  if (redCards.length > 0) missingFactors.push(`红牌(${redCards.length}张): ${redCards.map(e=>e.p).join(', ')} — 模型未纳入纪律处罚变量`);
  if (ownGoals.length > 0) missingFactors.push(`乌龙球: ${ownGoals.map(e=>e.p).join(', ')} — 属于不可预测的随机事件`);
  if (earlyGoals.length > 0) missingFactors.push(`开场闪击: ${earlyGoals[0].p} ${earlyGoals[0].m}'破门 — 打乱赛前战术部署`);
  if (lateGoals.length > 0) missingFactors.push(`尾声进球: ${lateGoals.map(e=>e.m+'\'').join(', ')} — 可能反映体能/替补深度差异`);
  if (Math.abs(realGD) >= 3 && Math.abs(predGD) <= 1) missingFactors.push('大比分超出预期 → 可能存在门将失误、防线崩溃等连锁反应，模型未覆盖');
  if (missingFactors.length === 0) missingFactors.push('未发现明显的遗漏变量，比赛进程基本在可预测范围内');

  // === Step 4: Randomness Assessment ===
  let luckAnalysis;
  const xgDiff = Math.abs(realGD - (match.xgDiff || predGD));
  if (wrongWinner && absGdError <= 1) {
    luckAnalysis = '大概率属于偶然性结果。胜负仅差1球，属于模型承认的30%不确定性区间，下次相似场景预测方向仍可坚持。';
  } else if (wrongWinner && absGdError >= 2) {
    luckAnalysis = '可能为系统性偏差。胜负完全相反且分差≥2球，建议深刻反思该维度数据或权重。';
  } else if (!wrongWinner && absGdError >= 2) {
    luckAnalysis = '方向正确但分差放大。分差超出预期可能包含偶然因素(如某队把握机会能力超常)，建议关注实际xG差异对待。';
  } else if (!wrongWinner && absGdError <= 1) {
    luckAnalysis = '预测质量良好。方向和分差均接近实际，模型在此类比赛上表现稳定。';
  } else {
    luckAnalysis = '混合偏差。建议结合xG数据进一步判断是运气差还是模型漏洞。';
  }

  // === Step 5: Fix Suggestions ===
  let fixes = [];
  if (absGdError >= 2) {
    fixes.push(`状态维度权重从${WEIGHTS.form*100}%提至${Math.min(35, WEIGHTS.form*100+5)}%，增加近5场场均失球子指标`);
  }
  if (redCards.length > 0) {
    fixes.push('引入"纪律风险指数"：基于球队近10场红黄牌平均数，为高风险球队扣减5-10分');
  }
  if (ownGoals.length > 0 || earlyGoals.length > 0) {
    fixes.push('增加"防守失误率"字段：近5场场均失球数 × 对手进攻强度系数');
  }
  if (dataErrors.length > 1) {
    fixes.push('建议赛后48h内更新FIFA排名和ELO评分快照作为维度基准');
  }
  if (weightIssues.length > 1) {
    fixes.push(`考虑动态权重：根据比赛类型(小组赛/淘汰赛)自动调整赛会因素权重(小组赛${WEIGHTS.tournament*100}%→淘汰赛20%)`);
  }
  if (fixes.length === 0) fixes.push('当前模型在此场表现良好，无需立即调整。积累更多比赛数据后统一校准。');

  // Summary
  let summary;
  if (wrongWinner) {
    summary = `预测${predWinner==='draw'?'平局':TEAMS[predWinner]?.name}${predWinner==='draw'?'':TEAMS[predWinner]?.name}，实际${TEAMS[realWinner]?.name}取胜。核心原因: ${dataErrors.length>1?dataErrors[0]:'关键变量超出模型覆盖范围'}`;
  } else if (absGdError >= 2) {
    summary = `方向正确但分差低估${absGdError}球。${hTeam.name}实际表现${realGD>predGD?'强于':'弱于'}预期，${realGD>predGD?'攻击力':'防守端'}评估需要修正。`;
  } else if (pred.h === real.h && pred.a === real.a) {
    summary = `🎯 完美预测！比分和走势均在模型预期范围内。${pred.analysis?.slice(0,40) || ''}`;
  } else {
    summary = `预测基本准确，方向正确且分差接近。模型在类似实力对比的比赛中表现可靠。`;
  }

  return {
    summary,
    dataErrors,
    weightIssues,
    missingFactors,
    luckAnalysis,
    fixes,
    dimensionAnalysis: dimContributions.map(d => ({
      dimension: d.key,
      label: { strength:'球队实力', tactical:'战术风格', form:'近期状态', tournament:'赛会因素', model:'数据模型' }[d.key],
      homeAdvantage: d.homeAdv,
      weight: d.weight,
      contribution: d.contribution
    }))
  };
}
