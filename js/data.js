// ============================================================
// 2026 FIFA World Cup — Complete Group Stage Data
// 12 groups, 48 teams, 72 matches
// ============================================================

const TEAMS = {
  // Group A
  MEX: { name: "墨西哥", flag: "🇲🇽", rank: 14, group: "A", elo: 1820 },
  RSA: { name: "南非", flag: "🇿🇦", rank: 62, group: "A", elo: 1480 },
  KOR: { name: "韩国", flag: "🇰🇷", rank: 25, group: "A", elo: 1720 },
  CZE: { name: "捷克", flag: "🇨🇿", rank: 40, group: "A", elo: 1630 },
  // Group B
  CAN: { name: "加拿大", flag: "🇨🇦", rank: 30, group: "B", elo: 1650 },
  BIH: { name: "波黑", flag: "🇧🇦", rank: 37, group: "B", elo: 1600 },
  QAT: { name: "卡塔尔", flag: "🇶🇦", rank: 58, group: "B", elo: 1500 },
  SUI: { name: "瑞士", flag: "🇨🇭", rank: 19, group: "B", elo: 1780 },
  // Group C
  BRA: { name: "巴西", flag: "🇧🇷", rank: 6, group: "C", elo: 1940 },
  MAR: { name: "摩洛哥", flag: "🇲🇦", rank: 7, group: "C", elo: 1880 },
  HAI: { name: "海地", flag: "🇭🇹", rank: 87, group: "C", elo: 1320 },
  SCO: { name: "苏格兰", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", rank: 42, group: "C", elo: 1610 },
  // Group D
  USA: { name: "美国", flag: "🇺🇸", rank: 17, group: "D", elo: 1750 },
  PAR: { name: "巴拉圭", flag: "🇵🇾", rank: 41, group: "D", elo: 1590 },
  AUS: { name: "澳大利亚", flag: "🇦🇺", rank: 27, group: "D", elo: 1660 },
  TUR: { name: "土耳其", flag: "🇹🇷", rank: 22, group: "D", elo: 1740 },
  // Group E
  GER: { name: "德国", flag: "🇩🇪", rank: 10, group: "E", elo: 1860 },
  CUW: { name: "库拉索", flag: "🇨🇼", rank: 91, group: "E", elo: 1280 },
  CIV: { name: "科特迪瓦", flag: "🇨🇮", rank: 33, group: "E", elo: 1640 },
  ECU: { name: "厄瓜多尔", flag: "🇪🇨", rank: 23, group: "E", elo: 1700 },
  // Group F
  NED: { name: "荷兰", flag: "🇳🇱", rank: 8, group: "F", elo: 1900 },
  JPN: { name: "日本", flag: "🇯🇵", rank: 18, group: "F", elo: 1760 },
  SWE: { name: "瑞典", flag: "🇸🇪", rank: 38, group: "F", elo: 1620 },
  TUN: { name: "突尼斯", flag: "🇹🇳", rank: 45, group: "F", elo: 1560 },
  // Group G
  BEL: { name: "比利时", flag: "🇧🇪", rank: 9, group: "G", elo: 1850 },
  EGY: { name: "埃及", flag: "🇪🇬", rank: 29, group: "G", elo: 1670 },
  IRN: { name: "伊朗", flag: "🇮🇷", rank: 20, group: "G", elo: 1710 },
  NZL: { name: "新西兰", flag: "🇳🇿", rank: 104, group: "G", elo: 1250 },
  // Group H
  ESP: { name: "西班牙", flag: "🇪🇸", rank: 2, group: "H", elo: 1980 },
  CPV: { name: "佛得角", flag: "🇨🇻", rank: 65, group: "H", elo: 1460 },
  KSA: { name: "沙特", flag: "🇸🇦", rank: 55, group: "H", elo: 1520 },
  URU: { name: "乌拉圭", flag: "🇺🇾", rank: 16, group: "H", elo: 1800 },
  // Group I
  FRA: { name: "法国", flag: "🇫🇷", rank: 3, group: "I", elo: 1970 },
  SEN: { name: "塞内加尔", flag: "🇸🇳", rank: 15, group: "I", elo: 1790 },
  IRQ: { name: "伊拉克", flag: "🇮🇶", rank: 68, group: "I", elo: 1430 },
  NOR: { name: "挪威", flag: "🇳🇴", rank: 31, group: "I", elo: 1680 },
  // Group J
  ARG: { name: "阿根廷", flag: "🇦🇷", rank: 1, group: "J", elo: 2000 },
  ALG: { name: "阿尔及利亚", flag: "🇩🇿", rank: 28, group: "J", elo: 1660 },
  AUT: { name: "奥地利", flag: "🇦🇹", rank: 24, group: "J", elo: 1690 },
  JOR: { name: "约旦", flag: "🇯🇴", rank: 74, group: "J", elo: 1380 },
  // Group K
  POR: { name: "葡萄牙", flag: "🇵🇹", rank: 5, group: "K", elo: 1920 },
  COD: { name: "刚果民主", flag: "🇨🇩", rank: 46, group: "K", elo: 1540 },
  UZB: { name: "乌兹别克", flag: "🇺🇿", rank: 50, group: "K", elo: 1510 },
  COL: { name: "哥伦比亚", flag: "🇨🇴", rank: 13, group: "K", elo: 1810 },
  // Group L
  ENG: { name: "英格兰", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", rank: 4, group: "L", elo: 1950 },
  CRO: { name: "克罗地亚", flag: "🇭🇷", rank: 11, group: "L", elo: 1830 },
  GHA: { name: "加纳", flag: "🇬🇭", rank: 52, group: "L", elo: 1530 },
  PAN: { name: "巴拿马", flag: "🇵🇦", rank: 34, group: "L", elo: 1580 }
};

const GROUPS = {
  A: ["MEX","RSA","KOR","CZE"],
  B: ["CAN","BIH","QAT","SUI"],
  C: ["BRA","MAR","HAI","SCO"],
  D: ["USA","PAR","AUS","TUR"],
  E: ["GER","CUW","CIV","ECU"],
  F: ["NED","JPN","SWE","TUN"],
  G: ["BEL","EGY","IRN","NZL"],
  H: ["ESP","CPV","KSA","URU"],
  I: ["FRA","SEN","IRQ","NOR"],
  J: ["ARG","ALG","AUT","JOR"],
  K: ["POR","COD","UZB","COL"],
  L: ["ENG","CRO","GHA","PAN"]
};

const VENUES = {
  "墨西哥城": "阿兹台克体育场, 墨西哥城",
  "瓜达拉哈拉": "阿克伦体育场, 瓜达拉哈拉",
  "多伦多": "BMO球场, 多伦多",
  "洛杉矶": "SoFi体育场, 洛杉矶",
  "旧金山": "李维斯体育场, 旧金山湾区",
  "纽约": "大都会人寿体育场, 纽约/新泽西",
  "波士顿": "吉列体育场, 波士顿",
  "温哥华": "BC广场, 温哥华",
  "休斯顿": "NRG体育场, 休斯顿",
  "达拉斯": "AT&T体育场, 达拉斯",
  "费城": "林肯金融球场, 费城",
  "蒙特雷": "BBVA体育场, 蒙特雷",
  "亚特兰大": "梅赛德斯奔驰体育场, 亚特兰大",
  "西雅图": "流明球场, 西雅图",
  "迈阿密": "硬石体育场, 迈阿密",
  "堪萨斯城": "箭头体育场, 堪萨斯城"
};

// ============================================================
// All 72 group stage matches
// status: "finished" | "live" | "upcoming"
// ============================================================
const MATCHES = [
  // ── Matchday 1 ──
  { id:"A1", date:"2026-06-11", time:"11:00", group:"A", home:"MEX", away:"RSA", venue:"墨西哥城",
    status:"finished", score:{h:2,a:0}, events:[
      {m:9, t:"goal", p:"Julián Quiñones", team:"MEX"},
      {m:49, t:"red", p:"S. Sithole", team:"RSA"},
      {m:67, t:"goal", p:"Raúl Jiménez", team:"MEX"},
      {m:84, t:"red", p:"T. Zwane", team:"RSA"},
      {m:90+2, t:"red", p:"César Montes", team:"MEX"}
    ],
    prediction:{h:2,a:0, hp:55, dp:30, ap:15, analysis:"墨西哥作为东道主,坐拥阿兹台克高原主场,实力明显高于南非。预测墨西哥凭借主场优势和更强的个人能力取胜。", factors:"主场高原优势,南非缺乏大赛经验"},
    odds:{h:1.45, d:4.20, a:7.50, move:"stable"}
  },
  { id:"A2", date:"2026-06-12", time:"14:00", group:"A", home:"KOR", away:"CZE", venue:"瓜达拉哈拉",
    status:"finished", score:{h:2,a:1}, events:[
      {m:59, t:"goal", p:"L. Krejčí", team:"CZE"},
      {m:67, t:"goal", p:"Hwang In-beom", team:"KOR"},
      {m:80, t:"goal", p:"Oh Hyeon-gyu", team:"KOR"}
    ],
    prediction:{h:2,a:1, hp:40, dp:35, ap:25, analysis:"韩国世界排名第25,拥有孙兴慜等五大联赛球星,整体实力高于捷克。预测韩国小胜,但捷克的身体对抗会给韩国制造麻烦。", factors:"孙兴慜领衔,韩国整体性更强"},
    odds:{h:2.60, d:3.10, a:2.80, move:"stable"}
  },
  { id:"B1", date:"2026-06-12", time:"16:00", group:"B", home:"CAN", away:"BIH", venue:"多伦多",
    status:"upcoming", score:null, events:[],
    prediction:{h:1,a:1, hp:35, dp:35, ap:30, analysis:"加拿大作为东道主之一,主场作战士气高涨。波黑经验老道但年龄偏大。双方实力接近,平局是最合理的结果。戴维斯缺阵对加拿大影响不小。", factors:"加拿大主场,戴维斯缺阵;波黑中场控制力强"},
    odds:{h:2.50, d:3.20, a:2.80, move:"home_slight_in"}
  },
  { id:"D1", date:"2026-06-13", time:"13:00", group:"D", home:"USA", away:"PAR", venue:"洛杉矶",
    status:"upcoming", score:null, events:[],
    prediction:{h:2,a:0, hp:55, dp:28, ap:17, analysis:"美国作为联合东道主,整体实力在巴拉圭之上。普利西奇领衔的攻击线有足够能力撕开巴拉圭防线。预计美国控场取胜,为小组出线抢下关键3分。", factors:"东道主优势,普利西奇状态正佳;巴拉圭防守反击"},
    odds:{h:1.65, d:3.60, a:5.00, move:"home_in"}
  },
  { id:"B2", date:"2026-06-13", time:"15:00", group:"B", home:"QAT", away:"SUI", venue:"旧金山",
    status:"upcoming", score:null, events:[],
    prediction:{h:0,a:3, hp:8, dp:18, ap:74, analysis:"瑞士世界排名第19,欧洲杯八强常客,大赛经验丰富。卡塔尔上届三战全败,硬实力差距巨大。瑞士应轻松控场取得大胜。", factors:"实力悬殊;瑞士为抢占小组头名不会留情"},
    odds:{h:11.00, d:5.50, a:1.22, move:"away_heavy"}
  },
  { id:"C1", date:"2026-06-13", time:"18:00", group:"C", home:"BRA", away:"MAR", venue:"纽约",
    status:"upcoming", score:null, events:[],
    prediction:{h:2,a:1, hp:45, dp:30, ap:25, analysis:"小组赛最受关注的对决——世界第6对阵第7。巴西在安切洛蒂治下攻守更均衡,维尼修斯和拉菲尼亚的边路冲击力极强。摩洛哥2022年四强后持续进步,但面对巴西的个人能力差距仍难以完全弥补。预计巴西小胜,但过程不会轻松。", factors:"安切洛蒂体系成熟;摩洛哥反击犀利;双方都想拿小组第一避开强敌"},
    odds:{h:1.85, d:3.40, a:4.20, move:"stable"}
  },
  { id:"C2", date:"2026-06-14", time:"13:00", group:"C", home:"HAI", away:"SCO", venue:"波士顿",
    status:"upcoming", score:null, events:[],
    prediction:{h:0,a:2, hp:12, dp:25, ap:63, analysis:"海地世界排名87位,是本届最弱的参赛队之一,能进正赛已属巨大成就。苏格兰作为欧洲中游强队,战术纪律和身体对抗远胜对手。本场是苏格兰必须拿下的比赛。", factors:"实力差距明显;苏格兰为出线必须大胜攒净胜球"},
    odds:{h:9.00, d:4.50, a:1.36, move:"away_in"}
  },
  { id:"D2", date:"2026-06-14", time:"16:00", group:"D", home:"AUS", away:"TUR", venue:"温哥华",
    status:"upcoming", score:null, events:[],
    prediction:{h:1,a:2, hp:28, dp:32, ap:40, analysis:"两支中游球队交锋,土耳其排名第22略高于澳大利亚的第27。恰尔汗奥卢等五大联赛球员大赛经验丰富。澳大利亚身体对抗强但技术略糙。预计土耳其小胜。", factors:"土耳其技术优势;澳大利亚洲际附加赛消耗大"},
    odds:{h:3.20, d:3.10, a:2.30, move:"away_slight_in"}
  },
  { id:"E1", date:"2026-06-14", time:"13:00", group:"E", home:"GER", away:"CUW", venue:"休斯顿",
    status:"upcoming", score:null, events:[],
    prediction:{h:4,a:0, hp:90, dp:8, ap:2, analysis:"世界第10对阵第91,这可能是本届世界杯实力最悬殊的比赛。德国经历连续两届小组出局的耻辱后必将全力出击。库拉索能进入正赛已是奇迹。预计德国至少4球大胜。", factors:"实力绝对碾压;德国需要一场大胜宣告回归"},
    odds:{h:1.05, d:13.00, a:34.00, move:"home_heavy"}
  },
  { id:"F1", date:"2026-06-14", time:"16:00", group:"F", home:"NED", away:"JPN", venue:"达拉斯",
    status:"upcoming", score:null, events:[],
    prediction:{h:2,a:1, hp:42, dp:33, ap:25, analysis:"死亡之组F组的焦点战。荷兰世界第8,日本第18。范戴克领衔的防线面对三笘薰、久保建英等技术型攻击手,将是一场矛盾之战。荷兰大赛经验和身体优势终究占优,但日本有能力制造麻烦。", factors:"范戴克防线稳定性;日本技术流中场;双方都想抢得先机"},
    odds:{h:1.95, d:3.30, a:3.80, move:"home_slight_in"}
  },
  { id:"E2", date:"2026-06-15", time:"13:00", group:"E", home:"CIV", away:"ECU", venue:"费城",
    status:"upcoming", score:null, events:[],
    prediction:{h:1,a:1, hp:32, dp:38, ap:30, analysis:"实力最接近的一场对决。厄瓜多尔排名第23稍占上风,但科特迪瓦多名球员效力五大联赛,个人能力不遑多让。双方都会谨慎对待这场出线关键战,平局可能性最大。", factors:"双方势均力敌;都不敢输;平局对双方都可接受"},
    odds:{h:2.70, d:2.90, a:2.80, move:"stable"}
  },
  { id:"F2", date:"2026-06-15", time:"16:00", group:"F", home:"SWE", away:"TUN", venue:"蒙特雷",
    status:"upcoming", score:null, events:[],
    prediction:{h:2,a:0, hp:48, dp:32, ap:20, analysis:"瑞典虽缺少超级巨星,但整体战术执行力极强,北欧球队的身体优势和纪律性是最好的武器。突尼斯非洲球队的不稳定性是隐患。预计瑞典零封取胜。", factors:"瑞典身体对抗优势;突尼斯进攻效率低"},
    odds:{h:1.80, d:3.40, a:4.50, move:"home_in"}
  },
  { id:"H1", date:"2026-06-15", time:"13:00", group:"H", home:"ESP", away:"CPV", venue:"亚特兰大",
    status:"upcoming", score:null, events:[],
    prediction:{h:3,a:0, hp:82, dp:13, ap:5, analysis:"世界第2西班牙对阵佛得角,实力差距悬殊。西班牙传控打法将完全主导比赛,佛得角能做的只有全力防守。预计西班牙轻松大胜。", factors:"实力悬殊;西班牙为净胜球会全力进攻"},
    odds:{h:1.08, d:10.00, a:26.00, move:"home_heavy"}
  },
  { id:"G1", date:"2026-06-15", time:"16:00", group:"G", home:"BEL", away:"EGY", venue:"西雅图",
    status:"upcoming", score:null, events:[],
    prediction:{h:2,a:1, hp:50, dp:28, ap:22, analysis:"比利时黄金一代逐渐老去,但德布劳内、多库等人仍具顶级水准。埃及有萨拉赫这个绝对强点,但整体阵容厚度不足。比利时经验优势明显,预计小胜。", factors:"萨拉赫单核;比利时整体实力仍在"},
    odds:{h:1.60, d:3.80, a:5.50, move:"home_in"}
  },
  { id:"H2", date:"2026-06-15", time:"20:00", group:"H", home:"KSA", away:"URU", venue:"迈阿密",
    status:"upcoming", score:null, events:[],
    prediction:{h:0,a:2, hp:15, dp:25, ap:60, analysis:"乌拉圭世界排名第16,拥有巴尔韦德、努涅斯等顶级球员,整体实力远在沙特之上。沙特技术细腻但对抗能力弱。乌拉圭应轻松取胜。", factors:"乌拉圭经验丰富;沙特防守漏洞多"},
    odds:{h:7.00, d:4.00, a:1.50, move:"away_in"}
  },
  { id:"G2", date:"2026-06-16", time:"13:00", group:"G", home:"IRN", away:"NZL", venue:"洛杉矶",
    status:"upcoming", score:null, events:[],
    prediction:{h:2,a:0, hp:60, dp:25, ap:15, analysis:"伊朗世界排名第20,拥有塔雷米、阿兹蒙等亚洲顶级前锋,身体对抗和战术执行力都很强。新西兰是大洋洲代表,实力差距明显。伊朗应轻松拿下。", factors:"伊朗亚洲最强之一;新西兰实力有限"},
    odds:{h:1.50, d:3.80, a:7.00, move:"home_in"}
  },
  { id:"I1", date:"2026-06-16", time:"16:00", group:"I", home:"FRA", away:"SEN", venue:"纽约",
    status:"upcoming", score:null, events:[],
    prediction:{h:3,a:1, hp:58, dp:25, ap:17, analysis:"法国世界第3,姆巴佩领衔的攻击线令人生畏。塞内加尔第15位,是非洲最强队之一,马内、库利巴利等球星云集。但法国整体实力深度远超塞内加尔,预计2球优势取胜。", factors:"姆巴佩统治力;法国阵容深度;塞内加尔不是弱旅"},
    odds:{h:1.50, d:4.00, a:6.00, move:"home_in"}
  },
  { id:"I2", date:"2026-06-16", time:"20:00", group:"I", home:"IRQ", away:"NOR", venue:"波士顿",
    status:"upcoming", score:null, events:[],
    prediction:{h:0,a:2, hp:18, dp:28, ap:54, analysis:"挪威拥有哈兰德和厄德高两大顶级球星,攻击力恐怖。伊拉克在亚洲区预选赛发挥出色,但面对欧洲强队差距明显。预测挪威取胜,哈兰德有望破门。", factors:"哈兰德+厄德高双核;伊拉克防守将受巨大考验"},
    odds:{h:5.50, d:3.50, a:1.65, move:"away_in"}
  },
  { id:"J1", date:"2026-06-17", time:"13:00", group:"J", home:"ARG", away:"ALG", venue:"堪萨斯城",
    status:"upcoming", score:null, events:[],
    prediction:{h:3,a:0, hp:72, dp:18, ap:10, analysis:"卫冕冠军阿根廷世界排名第1,梅西虽年长但仍是核心,阿尔瓦雷斯、恩佐等中生代已接管大旗。阿尔及利亚有一定实力但难以撼动阿根廷。预计阿根廷轻松开局。", factors:"梅西最后一届世界杯;阿根廷整体实力碾压"},
    odds:{h:1.20, d:6.50, a:13.00, move:"home_heavy"}
  },
  { id:"J2", date:"2026-06-17", time:"16:00", group:"J", home:"AUT", away:"JOR", venue:"旧金山",
    status:"upcoming", score:null, events:[],
    prediction:{h:2,a:0, hp:55, dp:30, ap:15, analysis:"奥地利世界排名第24,在朗尼克带领下高位压迫打法成熟。约旦排名74位,是亚洲中下游球队,很难抵挡奥地利的持续施压。预计奥地利两球取胜。", factors:"朗尼克体系;约旦缺乏大赛经验"},
    odds:{h:1.55, d:3.80, a:6.00, move:"home_in"}
  },
  { id:"K1", date:"2026-06-17", time:"13:00", group:"K", home:"POR", away:"COD", venue:"休斯顿",
    status:"upcoming", score:null, events:[],
    prediction:{h:3,a:0, hp:75, dp:17, ap:8, analysis:"葡萄牙世界第5,C罗可能迎来最后一届世界杯,全队上下志在夺冠。刚果排名第46,防守端漏洞较多。葡萄牙攻击线豪华(莱奥、B费、B席),应能轻松取胜。", factors:"C罗最后一舞;葡萄牙攻击群恐怖"},
    odds:{h:1.18, d:6.00, a:15.00, move:"home_heavy"}
  },
  { id:"L1", date:"2026-06-17", time:"16:00", group:"L", home:"ENG", away:"CRO", venue:"达拉斯",
    status:"upcoming", score:null, events:[],
    prediction:{h:2,a:1, hp:48, dp:28, ap:24, analysis:"小组赛又一场焦点战。英格兰世界第4,贝林厄姆、凯恩、福登等人进攻火力十足。克罗地亚第11,莫德里奇老当益壮但球队整体老化。英格兰年轻且冲击力强,预计小胜。但克罗地亚的大赛韧性不容小觑。", factors:"英格兰进攻火力;克罗地亚老龄化;莫德里奇最后一届"},
    odds:{h:1.80, d:3.30, a:4.50, move:"home_slight_in"}
  },
  { id:"L2", date:"2026-06-18", time:"13:00", group:"L", home:"GHA", away:"PAN", venue:"多伦多",
    status:"upcoming", score:null, events:[],
    prediction:{h:2,a:1, hp:42, dp:33, ap:25, analysis:"加纳非洲传统劲旅,身体对抗和速度是优势。巴拿马中北美球队,有一定实力但大赛经验稍欠。加纳略占上风,但中北美球队近年进步明显,比赛不会一边倒。", factors:"加纳非洲杯表现稳定;巴拿马有爆冷基因"},
    odds:{h:2.10, d:3.00, a:3.60, move:"stable"}
  },
  { id:"K2", date:"2026-06-18", time:"16:00", group:"K", home:"UZB", away:"COL", venue:"墨西哥城",
    status:"upcoming", score:null, events:[],
    prediction:{h:0,a:2, hp:18, dp:28, ap:54, analysis:"哥伦比亚世界第13,路易斯·迪亚斯领衔的攻击线速度快、技术好。乌兹别克首次进入世界杯正赛,经验不足。哥伦比亚实力明显占优,应能轻松取胜。", factors:"哥伦比亚南美劲旅;乌兹别克世界杯首秀"},
    odds:{h:5.00, d:3.50, a:1.70, move:"away_in"}
  },

  // ── Matchday 2 ──
  { id:"A3", date:"2026-06-18", time:"20:00", group:"A", home:"CZE", away:"RSA", venue:"亚特兰大",
    status:"upcoming", score:null, events:[],
    prediction:{h:1,a:0, hp:42, dp:35, ap:23, analysis:"捷克首轮惜败韩国,本轮必须拿分。南非首轮惨败且两名球员红牌停赛,阵容不整。捷克借机拿下首胜。", factors:"南非红牌停赛影响大;捷克必须赢"},
    odds:{h:1.85, d:3.30, a:4.20, move:"home_in"}
  },
  { id:"B3", date:"2026-06-18", time:"17:00", group:"B", home:"SUI", away:"BIH", venue:"洛杉矶",
    status:"upcoming", score:null, events:[],
    prediction:{h:2,a:0, hp:55, dp:28, ap:17, analysis:"瑞士首轮大胜卡塔尔后士气正盛,本场如取胜基本锁定小组第一。波黑首轮战平加拿大,出线形势微妙。瑞士整体实力更强,预计取胜。", factors:"瑞士争小组头名;波黑逼平欲望强"},
    odds:{h:1.65, d:3.50, a:5.50, move:"home_in"}
  },
  { id:"B4", date:"2026-06-18", time:"20:00", group:"B", home:"CAN", away:"QAT", venue:"温哥华",
    status:"upcoming", score:null, events:[],
    prediction:{h:2,a:0, hp:60, dp:25, ap:15, analysis:"加拿大首轮主场平波黑,本轮面对小组最弱的卡塔尔必须全取三分。卡塔尔两战可能已出局。加拿大主场优势和速度优势明显,应能取胜。", factors:"加拿大必须赢;卡塔尔实力不济"},
    odds:{h:1.40, d:4.50, a:7.50, move:"home_heavy"}
  },
  { id:"A4", date:"2026-06-19", time:"14:00", group:"A", home:"MEX", away:"KOR", venue:"瓜达拉哈拉",
    status:"upcoming", score:null, events:[],
    prediction:{h:2,a:1, hp:48, dp:30, ap:22, analysis:"两队首轮均取胜,本场胜者将锁定小组第一。墨西哥拥有高原主场之利,韩国孙兴慜状态正佳。预计墨西哥凭借主场和经验小胜,但韩国不会轻易缴械。", factors:"小组头名之争;墨西哥主场;韩国反击威胁"},
    odds:{h:2.00, d:3.10, a:3.80, move:"home_slight_in"}
  },
  { id:"D3", date:"2026-06-19", time:"17:00", group:"D", home:"USA", away:"AUS", venue:"西雅图",
    status:"upcoming", score:null, events:[],
    prediction:{h:2,a:0, hp:58, dp:27, ap:15, analysis:"美国首轮击败巴拉圭,气势正盛。澳大利亚首轮输给土耳其后出线形势严峻。美国主场优势和整体实力占优,应能连胜提前锁定出线。", factors:"美国主场连胜;澳大利亚背水一战"},
    odds:{h:1.55, d:3.80, a:5.80, move:"home_in"}
  },
  { id:"C3", date:"2026-06-19", time:"20:00", group:"C", home:"SCO", away:"MAR", venue:"波士顿",
    status:"upcoming", score:null, events:[],
    prediction:{h:0,a:2, hp:18, dp:28, ap:54, analysis:"摩洛哥首轮小负巴西但展现出不俗实力,为出线必须拿下此战。苏格兰首轮击败海地后信心足但实力差距仍在。摩洛哥个人能力更强,预计取胜。", factors:"摩洛哥必须赢;苏格兰想守平拿1分"},
    odds:{h:4.50, d:3.20, a:1.85, move:"away_in"}
  },
  { id:"C4", date:"2026-06-20", time:"13:00", group:"C", home:"BRA", away:"HAI", venue:"费城",
    status:"upcoming", score:null, events:[],
    prediction:{h:5,a:0, hp:93, dp:5, ap:2, analysis:"巴西对阵小组最弱的海地,实力悬殊至极。巴西为确保小组第一需要大量净胜球,预计不会留情。安切洛蒂可能轮换阵容但仍能轻松大胜。", factors:"巴西刷净胜球;海地实力差距巨大"},
    odds:{h:1.02, d:17.00, a:41.00, move:"home_heavy"}
  },
  { id:"D4", date:"2026-06-20", time:"16:00", group:"D", home:"TUR", away:"PAR", venue:"旧金山",
    status:"upcoming", score:null, events:[],
    prediction:{h:2,a:0, hp:52, dp:30, ap:18, analysis:"土耳其首轮击败澳大利亚后掌握出线主动权。巴拉圭首轮输美国,出线形势危急。土耳其实力和状态均占优,预计连胜锁定晋级。", factors:"土耳其出线在望;巴拉圭背水一战但实力不足"},
    odds:{h:1.70, d:3.50, a:5.00, move:"home_in"}
  },
  { id:"F3", date:"2026-06-20", time:"13:00", group:"F", home:"NED", away:"SWE", venue:"休斯顿",
    status:"upcoming", score:null, events:[],
    prediction:{h:1,a:0, hp:48, dp:32, ap:20, analysis:"荷兰首轮击败日本,本场取胜即可提前出线。瑞典首轮击败突尼斯,同样势头不错。两队都是欧洲传统强队,比赛将十分胶着。荷兰个人能力稍胜一筹,预计小胜。", factors:"荷兰出线关键战;瑞典防守硬朗"},
    odds:{h:1.75, d:3.40, a:4.80, move:"home_slight_in"}
  },
  { id:"E3", date:"2026-06-20", time:"16:00", group:"E", home:"GER", away:"CIV", venue:"多伦多",
    status:"upcoming", score:null, events:[],
    prediction:{h:3,a:1, hp:68, dp:20, ap:12, analysis:"德国首轮大胜库拉索后已基本锁定出线。科特迪瓦首轮平厄瓜多尔,本轮面临巨大考验。德国进攻火力全开,科特迪瓦防守难以招架。", factors:"德国势如破竹;科特迪瓦难挡德国战车"},
    odds:{h:1.30, d:5.00, a:9.00, move:"home_in"}
  },
  { id:"E4", date:"2026-06-21", time:"13:00", group:"E", home:"ECU", away:"CUW", venue:"堪萨斯城",
    status:"upcoming", score:null, events:[],
    prediction:{h:2,a:0, hp:68, dp:22, ap:10, analysis:"厄瓜多尔首轮平科特迪瓦,本场面对小组最弱的库拉索必须全取三分以争取出线。库拉索已基本出局。厄瓜多尔实力碾压,取胜问题不大。", factors:"厄瓜多尔出线生死战;库拉索为荣誉而战"},
    odds:{h:1.25, d:5.50, a:11.00, move:"home_heavy"}
  },
  { id:"F4", date:"2026-06-21", time:"16:00", group:"F", home:"TUN", away:"JPN", venue:"蒙特雷",
    status:"upcoming", score:null, events:[],
    prediction:{h:0,a:2, hp:15, dp:28, ap:57, analysis:"日本首轮惜败荷兰但展现出极强竞争力,本轮必须击败突尼斯保留出线希望。突尼斯首轮输瑞典实力明显不济。日本技术优势显著,预计取胜。", factors:"日本出线生死战;突尼斯实力有限"},
    odds:{h:5.50, d:3.60, a:1.60, move:"away_in"}
  },
  { id:"H3", date:"2026-06-21", time:"13:00", group:"H", home:"ESP", away:"KSA", venue:"亚特兰大",
    status:"upcoming", score:null, events:[],
    prediction:{h:3,a:0, hp:85, dp:12, ap:3, analysis:"西班牙首轮大胜佛得角,本场取胜即可锁定小组第一。沙特首轮输乌拉圭,实力与西班牙差距巨大。西班牙传控将完全控制比赛。", factors:"西班牙锁定头名;沙特无力抵抗"},
    odds:{h:1.08, d:10.00, a:26.00, move:"home_heavy"}
  },
  { id:"G3", date:"2026-06-21", time:"16:00", group:"G", home:"BEL", away:"IRN", venue:"洛杉矶",
    status:"upcoming", score:null, events:[],
    prediction:{h:2,a:1, hp:50, dp:30, ap:20, analysis:"比利时首轮胜埃及,伊朗首轮胜新西兰。本场胜者基本锁定小组第一。比利时整体实力占优,但伊朗的硬朗防守和塔雷米的反击威胁不容小觑。", factors:"小组头名之争;伊朗防守反击犀利"},
    odds:{h:1.70, d:3.50, a:5.00, move:"home_slight_in"}
  },
  { id:"H4", date:"2026-06-21", time:"20:00", group:"H", home:"URU", away:"CPV", venue:"迈阿密",
    status:"upcoming", score:null, events:[],
    prediction:{h:3,a:0, hp:78, dp:16, ap:6, analysis:"乌拉圭首轮胜沙特,本场取胜即出线。佛得角首轮惨败西班牙,实力差距明显。乌拉圭不会给对手任何机会,预计大胜。", factors:"乌拉圭提前出线;佛得角实力不济"},
    odds:{h:1.15, d:7.00, a:17.00, move:"home_heavy"}
  },
  { id:"G4", date:"2026-06-22", time:"13:00", group:"G", home:"NZL", away:"EGY", venue:"温哥华",
    status:"upcoming", score:null, events:[],
    prediction:{h:0,a:2, hp:12, dp:25, ap:63, analysis:"埃及首轮惜败比利时,本场必须击败新西兰保留出线希望。萨拉赫的个人能力是最大武器。新西兰两轮可能已出局,士气低落。埃及必胜。", factors:"萨拉赫决定比赛;埃及出线生死战"},
    odds:{h:6.50, d:4.00, a:1.50, move:"away_in"}
  },
  { id:"J3", date:"2026-06-22", time:"16:00", group:"J", home:"ARG", away:"AUT", venue:"达拉斯",
    status:"upcoming", score:null, events:[],
    prediction:{h:2,a:0, hp:62, dp:25, ap:13, analysis:"阿根廷首轮大胜阿尔及利亚,本场取胜即锁定小组第一。奥地利首轮胜约旦,有一定实力但很难撼动卫冕冠军。阿根廷的传控和梅西的创造力将决定比赛。", factors:"阿根廷锁定头名;奥地利高位压迫或造成麻烦"},
    odds:{h:1.30, d:5.00, a:9.00, move:"home_in"}
  },
  { id:"I3", date:"2026-06-22", time:"13:00", group:"I", home:"FRA", away:"IRQ", venue:"费城",
    status:"upcoming", score:null, events:[],
    prediction:{h:4,a:0, hp:85, dp:12, ap:3, analysis:"法国首轮击败塞内加尔,本场对阵小组最弱的伊拉克。实力悬殊,法国可能轮换但仍能轻松大胜,为淘汰赛磨合阵容。", factors:"法国阵容轮换;伊拉克防守压力巨大"},
    odds:{h:1.06, d:12.00, a:29.00, move:"home_heavy"}
  },
  { id:"I4", date:"2026-06-23", time:"13:00", group:"I", home:"NOR", away:"SEN", venue:"纽约",
    status:"upcoming", score:null, events:[],
    prediction:{h:1,a:2, hp:30, dp:30, ap:40, analysis:"出线关键战!挪威首轮胜伊拉克,塞内加尔首轮负法国。塞内加尔必须取胜才能掌握出线主动权。哈兰德vs马内,顶级对决。塞内加尔整体性更强,预计小胜。", factors:"出线生死战;哈兰德vs马内;塞内加尔经验更足"},
    odds:{h:2.80, d:3.20, a:2.50, move:"away_slight_in"}
  },
  { id:"J4", date:"2026-06-23", time:"20:00", group:"J", home:"JOR", away:"ALG", venue:"旧金山",
    status:"upcoming", score:null, events:[],
    prediction:{h:0,a:1, hp:22, dp:33, ap:45, analysis:"两支首轮落败的球队交锋,败者基本出局。阿尔及利亚整体实力高于约旦,经验也更丰富。预计阿尔及利亚小胜保留出线希望。", factors:"双方都不敢输;阿尔及利亚实力稍强"},
    odds:{h:3.60, d:3.10, a:2.10, move:"away_slight_in"}
  },
  { id:"K3", date:"2026-06-23", time:"13:00", group:"K", home:"POR", away:"UZB", venue:"休斯顿",
    status:"upcoming", score:null, events:[],
    prediction:{h:3,a:0, hp:80, dp:14, ap:6, analysis:"葡萄牙首轮大胜刚果,本场取胜即锁定小组第一。乌兹别克首轮负哥伦比亚,实力差距巨大。葡萄牙将轻松取胜。", factors:"葡萄牙锁定头名;乌兹别克无力抵抗"},
    odds:{h:1.10, d:8.50, a:21.00, move:"home_heavy"}
  },
  { id:"L3", date:"2026-06-23", time:"16:00", group:"L", home:"ENG", away:"GHA", venue:"波士顿",
    status:"upcoming", score:null, events:[],
    prediction:{h:3,a:1, hp:65, dp:22, ap:13, analysis:"英格兰首轮击败克罗地亚后士气正盛,本场取胜即出线。加纳首轮胜巴拿马,有一定冲击力但很难阻挡英格兰的豪华攻击线。", factors:"英格兰进攻火力全开;加纳速度型反击"},
    odds:{h:1.35, d:4.80, a:8.00, move:"home_in"}
  },
  { id:"L4", date:"2026-06-24", time:"13:00", group:"L", home:"PAN", away:"CRO", venue:"多伦多",
    status:"upcoming", score:null, events:[],
    prediction:{h:0,a:2, hp:18, dp:28, ap:54, analysis:"克罗地亚首轮负英格兰后必须取胜保留出线希望。巴拿马首轮负加纳,实力和克罗地亚差距明显。莫德里奇率领的格子军团经验丰富,预计取胜。", factors:"克罗地亚出线生死战;莫德里奇大赛经验"},
    odds:{h:6.00, d:3.80, a:1.55, move:"away_in"}
  },
  { id:"K4", date:"2026-06-24", time:"16:00", group:"K", home:"COL", away:"COD", venue:"瓜达拉哈拉",
    status:"upcoming", score:null, events:[],
    prediction:{h:2,a:0, hp:60, dp:25, ap:15, analysis:"哥伦比亚首轮胜乌兹别克,本场取胜即出线。刚果首轮惨败葡萄牙,实力差距大。哥伦比亚应轻松取胜。", factors:"哥伦比亚出线在望;刚果实力不济"},
    odds:{h:1.45, d:4.00, a:7.00, move:"home_in"}
  },

  // ── Matchday 3 ──
  { id:"B5", date:"2026-06-24", time:"16:00", group:"B", home:"SUI", away:"CAN", venue:"温哥华",
    status:"upcoming", score:null, events:[],
    prediction:{h:1,a:1, hp:38, dp:35, ap:27, analysis:"小组最后一轮,瑞士可能已提前出线,加拿大需要至少拿1分以确保晋级。双方都会谨慎,平局双赢的可能性很大。", factors:"瑞士可接受平局;加拿大主场求稳;双方默契球可能"},
    odds:{h:2.30, d:3.10, a:3.00, move:"draw_in"}
  },
  { id:"B6", date:"2026-06-24", time:"16:00", group:"B", home:"BIH", away:"QAT", venue:"西雅图",
    status:"upcoming", score:null, events:[],
    prediction:{h:2,a:0, hp:58, dp:28, ap:14, analysis:"波黑为争取出线必须大胜,同时期待另一场结果。卡塔尔已提前出局。波黑实力占优且战意更强,必胜。", factors:"波黑出线希望;卡塔尔毫无斗志"},
    odds:{h:1.50, d:4.00, a:6.00, move:"home_in"}
  },
  { id:"C5", date:"2026-06-24", time:"20:00", group:"C", home:"SCO", away:"BRA", venue:"迈阿密",
    status:"upcoming", score:null, events:[],
    prediction:{h:0,a:3, hp:8, dp:15, ap:77, analysis:"巴西已锁定小组第一,可能轮换部分主力但仍然强大。苏格兰为争出线需要拿分,但实力差距太大。巴西替补阵容也足以取胜。", factors:"巴西轮换阵容;苏格兰死守求平"},
    odds:{h:9.00, d:5.00, a:1.28, move:"away_in"}
  },
  { id:"C6", date:"2026-06-24", time:"20:00", group:"C", home:"MAR", away:"HAI", venue:"亚特兰大",
    status:"upcoming", score:null, events:[],
    prediction:{h:3,a:0, hp:80, dp:15, ap:5, analysis:"摩洛哥为争夺小组第二必须大胜攒净胜球。海地已出局且实力差距巨大。摩洛哥不会手下留情,预计至少3球。", factors:"摩洛哥争第二;海地已无战意"},
    odds:{h:1.10, d:8.00, a:23.00, move:"home_heavy"}
  },
  { id:"A5", date:"2026-06-25", time:"14:00", group:"A", home:"CZE", away:"MEX", venue:"墨西哥城",
    status:"upcoming", score:null, events:[],
    prediction:{h:0,a:2, hp:18, dp:28, ap:54, analysis:"墨西哥主场最后一轮,可能已提前出线但会争取小组第一。捷克为出线拼命但实力差距加高原客场,难以取胜。", factors:"墨西哥高原主场;捷克背水一战"},
    odds:{h:4.50, d:3.50, a:1.75, move:"away_in"}
  },
  { id:"A6", date:"2026-06-25", time:"14:00", group:"A", home:"RSA", away:"KOR", venue:"蒙特雷",
    status:"upcoming", score:null, events:[],
    prediction:{h:1,a:2, hp:20, dp:30, ap:50, analysis:"韩国为争出线必须取胜。南非已提前出局,但会为荣誉而战。韩国孙兴慜领衔的攻击线实力占优,预计取胜。", factors:"韩国出线关键战;南非荣誉之战"},
    odds:{h:3.80, d:3.40, a:1.95, move:"away_in"}
  },
  { id:"E5", date:"2026-06-25", time:"17:00", group:"E", home:"CUW", away:"CIV", venue:"费城",
    status:"upcoming", score:null, events:[],
    prediction:{h:0,a:3, hp:8, dp:18, ap:74, analysis:"科特迪瓦为出线必须大胜。库拉索已提前出局且实力垫底。科特迪瓦五大联赛球员众多,应能轻松大胜。", factors:"科特迪瓦出线关键;库拉索已无战意"},
    odds:{h:10.00, d:5.00, a:1.25, move:"away_heavy"}
  },
  { id:"E6", date:"2026-06-25", time:"17:00", group:"E", home:"ECU", away:"GER", venue:"纽约",
    status:"upcoming", score:null, events:[],
    prediction:{h:1,a:2, hp:20, dp:27, ap:53, analysis:"德国已提前出线可能轮换。厄瓜多尔为出线需要全力拼搏。德国即使轮换实力仍强,但厄瓜多尔背水一战可能制造麻烦。德国大概率仍取胜。", factors:"德国可能轮换;厄瓜多尔死拼出线"},
    odds:{h:4.80, d:3.80, a:1.65, move:"away_in"}
  },
  { id:"F5", date:"2026-06-26", time:"13:00", group:"F", home:"JPN", away:"SWE", venue:"达拉斯",
    status:"upcoming", score:null, events:[],
    prediction:{h:2,a:1, hp:45, dp:30, ap:25, analysis:"死亡之组最后一轮,日本必须取胜以确保出线。瑞典可能只需要1分。日本技术优势明显,三笘薰和久保建英将主导进攻。预计日本小胜晋级。", factors:"日本出线生死战;瑞典可接受平局;日本技术流"},
    odds:{h:2.10, d:3.20, a:3.50, move:"home_slight_in"}
  },
  { id:"F6", date:"2026-06-26", time:"13:00", group:"F", home:"TUN", away:"NED", venue:"堪萨斯城",
    status:"upcoming", score:null, events:[],
    prediction:{h:0,a:2, hp:12, dp:22, ap:66, analysis:"荷兰已提前出线,但会争取小组第一以避开强敌。突尼斯已出局。荷兰轮换阵容仍实力碾压。", factors:"荷兰争小组头名;突尼斯已出局"},
    odds:{h:8.00, d:4.50, a:1.35, move:"away_in"}
  },
  { id:"D5", date:"2026-06-26", time:"17:00", group:"D", home:"TUR", away:"USA", venue:"洛杉矶",
    status:"upcoming", score:null, events:[],
    prediction:{h:1,a:2, hp:30, dp:32, ap:38, analysis:"小组头名之争!双方此前均两连胜已提前出线。美国主场优势和整体实力略胜一筹。预计美国小胜夺小组第一。", factors:"小组头名之争;美国主场;土耳其反击"},
    odds:{h:3.00, d:3.30, a:2.30, move:"stable"}
  },
  { id:"D6", date:"2026-06-26", time:"17:00", group:"D", home:"PAR", away:"AUS", venue:"旧金山",
    status:"upcoming", score:null, events:[],
    prediction:{h:1,a:1, hp:30, dp:38, ap:32, analysis:"双方此前均两连败已出局,本场为荣誉而战。实力接近,平局可能性大。", factors:"无关出线;双方为荣誉而战"},
    odds:{h:2.80, d:3.00, a:2.60, move:"stable"}
  },
  { id:"I5", date:"2026-06-26", time:"20:00", group:"I", home:"NOR", away:"FRA", venue:"波士顿",
    status:"upcoming", score:null, events:[],
    prediction:{h:1,a:2, hp:22, dp:28, ap:50, analysis:"法国已提前出线可能轮换。挪威为出线需要拿分,哈兰德将全力一搏。法国即使轮换实力仍强,但挪威背水一战。预计法国小胜。", factors:"法国轮换;挪威死拼;哈兰德vs法国替补防线"},
    odds:{h:3.50, d:3.60, a:1.95, move:"stable"}
  },
  { id:"I6", date:"2026-06-26", time:"20:00", group:"I", home:"SEN", away:"IRQ", venue:"多伦多",
    status:"upcoming", score:null, events:[],
    prediction:{h:2,a:0, hp:68, dp:22, ap:10, analysis:"塞内加尔为出线必须取胜且争取净胜球。伊拉克可能已出局。塞内加尔实力碾压,马内领衔的攻击群将全力进攻。", factors:"塞内加尔出线关键;伊拉克已出局"},
    odds:{h:1.30, d:5.00, a:9.00, move:"home_in"}
  },
  { id:"H5", date:"2026-06-27", time:"13:00", group:"H", home:"CPV", away:"KSA", venue:"休斯顿",
    status:"upcoming", score:null, events:[],
    prediction:{h:1,a:0, hp:35, dp:33, ap:32, analysis:"双方均可能已出局,为荣誉而战。佛得角首次世界杯,战意更强。实力接近,佛得角略占上风。", factors:"荣誉之战;佛得角世界杯首胜机会"},
    odds:{h:2.60, d:3.00, a:2.70, move:"stable"}
  },
  { id:"H6", date:"2026-06-27", time:"13:00", group:"H", home:"URU", away:"ESP", venue:"瓜达拉哈拉",
    status:"upcoming", score:null, events:[],
    prediction:{h:1,a:2, hp:22, dp:28, ap:50, analysis:"小组头名之争!两队此前均两连胜。西班牙传控对乌拉圭铁血防守,风格对决。西班牙整体实力和阵容深度占优,预计小胜夺头名。", factors:"小组头名;西班牙传控;乌拉圭铁血防守"},
    odds:{h:3.80, d:3.30, a:1.95, move:"away_slight_in"}
  },
  { id:"G5", date:"2026-06-27", time:"17:00", group:"G", home:"EGY", away:"IRN", venue:"西雅图",
    status:"upcoming", score:null, events:[],
    prediction:{h:1,a:1, hp:32, dp:38, ap:30, analysis:"出线关键战。双方实力接近,萨拉赫vs塔雷米的对决。伊朗防守更硬朗,埃及有巨星但整体性稍差。平局可能对双方都有利。", factors:"出线生死战;萨拉赫个人能力;伊朗整体防守"},
    odds:{h:2.50, d:2.90, a:3.00, move:"stable"}
  },
  { id:"G6", date:"2026-06-27", time:"17:00", group:"G", home:"NZL", away:"BEL", venue:"温哥华",
    status:"upcoming", score:null, events:[],
    prediction:{h:0,a:3, hp:6, ap:14, dp:80, analysis:"比利时已提前出线,但为确保小组第一会全力争胜。新西兰已出局。比利时即使轮换也实力碾压。", factors:"比利时争头名;新西兰已出局"},
    odds:{h:13.00, d:6.00, a:1.18, move:"away_heavy"}
  },
  { id:"L5", date:"2026-06-27", time:"20:00", group:"L", home:"PAN", away:"ENG", venue:"纽约",
    status:"upcoming", score:null, events:[],
    prediction:{h:0,a:3, hp:8, dp:15, ap:77, analysis:"英格兰已提前出线,但会争取小组第一以选择淘汰赛路径。巴拿马可能已出局。英格兰阵容深度恐怖,预计大胜。", factors:"英格兰争小组头名;巴拿马已出局"},
    odds:{h:11.00, d:5.50, a:1.22, move:"away_heavy"}
  },
  { id:"L6", date:"2026-06-27", time:"20:00", group:"L", home:"CRO", away:"GHA", venue:"费城",
    status:"upcoming", score:null, events:[],
    prediction:{h:2,a:1, hp:48, dp:30, ap:22, analysis:"出线关键战。克罗地亚经验老道,加纳冲击力强。莫德里奇掌控节奏的能力是克罗地亚最大武器。预计克罗地亚小胜晋级。", factors:"克罗地亚经验;加纳速度优势;莫德里奇控制力"},
    odds:{h:1.80, d:3.40, a:4.50, move:"home_slight_in"}
  },
  { id:"K5", date:"2026-06-28", time:"13:00", group:"K", home:"COL", away:"POR", venue:"迈阿密",
    status:"upcoming", score:null, events:[],
    prediction:{h:1,a:2, hp:25, dp:28, ap:47, analysis:"小组头名之争。葡萄牙整体实力和阵容深度均优于哥伦比亚。但哥伦比亚防守硬朗,迪亚斯反击威胁大。葡萄牙预计险胜夺头名。", factors:"小组头名;葡萄牙攻击群;哥伦比亚反击"},
    odds:{h:3.50, d:3.30, a:2.05, move:"away_slight_in"}
  },
  { id:"K6", date:"2026-06-28", time:"13:00", group:"K", home:"COD", away:"UZB", venue:"亚特兰大",
    status:"upcoming", score:null, events:[],
    prediction:{h:1,a:1, hp:35, dp:35, ap:30, analysis:"双方均可能已出局,为荣誉而战。实力最为接近,两队都是世界杯稀客。平局可能性最大。", factors:"荣誉之战;双方实力接近"},
    odds:{h:2.70, d:2.80, a:2.80, move:"stable"}
  },
  { id:"J5", date:"2026-06-28", time:"17:00", group:"J", home:"ALG", away:"AUT", venue:"堪萨斯城",
    status:"upcoming", score:null, events:[],
    prediction:{h:1,a:2, hp:28, dp:30, ap:42, analysis:"出线关键战。奥地利朗尼克体系成熟,高位压迫让对手窒息。阿尔及利亚有一定实力但整体性不如奥地利。预计奥地利取胜晋级。", factors:"奥地利高压体系;阿尔及利亚为出线而战"},
    odds:{h:3.20, d:3.20, a:2.25, move:"away_slight_in"}
  },
  { id:"J6", date:"2026-06-28", time:"17:00", group:"J", home:"JOR", away:"ARG", venue:"达拉斯",
    status:"upcoming", score:null, events:[],
    prediction:{h:0,a:4, hp:4, dp:10, ap:86, analysis:"阿根廷已提前出线,约旦已出局。即使阿根廷大幅轮换,实力差距仍巨大。阿根廷替补阵容也足以大胜,为淘汰赛保持状态。", factors:"阿根廷轮换;约旦实力悬殊"},
    odds:{h:21.00, d:9.00, a:1.08, move:"away_heavy"}
  }
];

// Helper: get match by ID
function getMatch(id) { return MATCHES.find(m => m.id === id); }

// Helper: get matches by date
function getMatchesByDate(date) { return MATCHES.filter(m => m.date === date); }

// Helper: get matches by group
function getMatchesByGroup(group) { return MATCHES.filter(m => m.group === group); }

// Helper: get upcoming matches
function getUpcomingMatches() { return MATCHES.filter(m => m.status === "upcoming"); }

// Helper: get finished matches
function getFinishedMatches() { return MATCHES.filter(m => m.status === "finished"); }

// Helper: get today's matches
function getTodayMatches() {
  const today = new Date().toISOString().split('T')[0];
  return MATCHES.filter(m => m.date === today);
}

// Helper: compute group standings
function getGroupStandings(group) {
  const teams = GROUPS[group].map(code => ({
    code, ...TEAMS[code],
    pld: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0
  }));

  const groupMatches = getMatchesByGroup(group).filter(m => m.status === "finished");
  groupMatches.forEach(m => {
    const home = teams.find(t => t.code === m.home);
    const away = teams.find(t => t.code === m.away);
    if (!home || !away || !m.score) return;
    home.pld++; away.pld++;
    home.gf += m.score.h; home.ga += m.score.a;
    away.gf += m.score.a; away.ga += m.score.h;
    if (m.score.h > m.score.a) { home.w++; away.l++; home.pts += 3; }
    else if (m.score.h < m.score.a) { away.w++; home.l++; away.pts += 3; }
    else { home.d++; away.d++; home.pts++; away.pts++; }
  });

  teams.forEach(t => { t.gd = t.gf - t.ga; });
  teams.sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf);
  return teams;
}

// All unique match dates
const MATCH_DATES = [...new Set(MATCHES.map(m => m.date))].sort();
