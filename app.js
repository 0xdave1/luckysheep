const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const dialog = document.querySelector('#info-dialog');
const languageButtons = document.querySelectorAll('[data-language-choice]');
const SESSION_LANGUAGE_KEY = 'lucky-sheep-language';

const zh = {
'Lucky Sheep — Be the Lucky Sheep. Take It All.':'幸运羊——成为幸运羊，赢得一切',
'Lucky Sheep home':'幸运羊主页',
'幸运羊 · DIGITAL KINGDOM':'幸运羊 · 数字王国',
'BE THE LUCKY SHEEP.':'成为幸运羊',
'Language':'语言',
'Skip to content':'跳转到内容',
'Protocol preview':'协议预览',
'On-chain data not connected':'链上数据尚未连接',
'Protocol':'协议',
'The game':'游戏',
'Treasury':'金库',
'Rankings':'排名',
'Governance':'治理',
'Archives':'档案',
'Social channels':'社交媒体频道',
'Official social channels':'官方社交媒体',
'Lucky Sheep on X':'幸运羊官方 X 账号',
'Lucky Sheep on Telegram':'幸运羊官方 Telegram 频道',
'Lucky Sheep on DeBox':'幸运羊官方 DeBox 社区',
'Wallet unavailable':'钱包不可用',
'The golden kingdom':'黄金王国',
'BE THE':'成为',
'LUCKY SHEEP.':'幸运羊',
'TAKE IT ALL.':'赢得一切',
'A burn-powered game of timing, conviction and one decisive moment. Step into the chamber when the protocol is ready.':'一场由燃烧机制驱动、考验时机与信念的游戏；协议准备就绪后，踏入黄金殿堂',
'Explore the game':'探索游戏',
'Read whitepaper':'阅读白皮书',
'Read latest Chinese whitepaper':'阅读最新版中文版白皮书',
'Contract connection pending':'合约连接等待中',
'BNB Smart Chain · whitepaper-described network':'BNB Smart Chain · 白皮书所述网络',
'THE LAST BURNER':'最后燃烧者',
'FIG. 01':'图 01',
'THE CHAMBER':'黄金殿堂',
'A SYMBOL OF THE GAME':'游戏象征',
'EST. IN POSSIBILITY':'诞生于无限可能',
'01 — OVERVIEW':'01 — 总览',
'SCROLL TO ENTER':'向下滚动进入',
'A GAME OF':'一场关于',
'ONE LAST MOVE':'最后一步的游戏',
'Lock through the burning mechanic. Keep the 24-hour clock alive. If it expires, the whitepaper says the last qualifying burner wins the round.':'通过燃烧机制锁定资产，让 24 小时倒计时持续运行；倒计时结束时，白皮书称最后一位符合条件的燃烧者将赢得本轮',
'WHITEPAPER FIGURES':'白皮书数据',
'PROJECT-REPORTED':'项目披露',
'The protocol':'协议机制',
'01 / The protocol':'01 / 协议机制',
'A simple wager.':'简单的下注',
'A relentless clock.':'不止的时钟',
'Every burn moves the game forward. The round rewards the last participant and the most committed burners. The exact rules and weights await verification against deployed contracts.':'每次燃烧都会推动游戏前进；本轮奖励最后一位参与者以及投入最坚定的燃烧者；具体规则与权重仍需通过已部署合约验证',
'Lock through a burn':'通过燃烧锁定',
'The whitepaper says “burning means locking”; 10% is permanently burned. Custody and treatment of the remaining 90% need contract clarification.':'白皮书称“燃烧即锁定”；其中 10% 将永久销毁；其余 90% 的托管与处理方式仍需合约说明',
'PARTICIPATION':'参与',
'Keep time alive':'让时间延续',
'The new materials state a 24-hour start and 30-minute extensions for qualifying burns of at least 10,000 tokens, capped at 24 hours. Whether that threshold applies across all price tiers remains unconfirmed.':'最新资料称初始倒计时为 24 小时，符合条件且至少燃烧 10,000 枚代币可延长 30 分钟，最长 24 小时；该门槛是否适用于所有价格档位仍待确认',
'COUNTDOWN':'倒计时',
'Claim the chamber':'夺取殿堂',
'When a round ends, the whitepaper describes a 60 / 40 grand prize split between the last burner and Top 20.':'本轮结束时，白皮书描述大奖将由最后燃烧者与前 20 名按 60 / 40 分配',
'ROUND CLOSE':'本轮结束',
'Protocol transparency':'协议透明度',
'Mechanics reflect the latest supplied Chinese whitepaper and protocol deck. No contract address, ABI, public audit report, or live data source was supplied for independent verification.':'机制内容依据最新提供的中文版白皮书与协议介绍资料；未提供合约地址、ABI、公开审计报告或实时数据源，暂无法独立验证',
'SOURCE STATUS / PENDING':'来源状态 / 等待中',
'THE GOLDEN CHAMBER':'黄金殿堂',
'REWARD MECHANISM · WHITEPAPER':'奖励机制 · 白皮书',
'GRAND PRIZE POOL':'大奖池',
'Awaiting verified contract data':'等待已验证的合约数据',
'The grand prize':'大奖',
'02 / The grand prize':'02 / 大奖',
'One chamber.':'一座殿堂',
'Two ways to win.':'两种获胜方式',
'The whitepaper describes a prize pool that rewards the final burner and the round’s leading participants. No pool balance or participant data is fabricated here.':'白皮书描述了一个奖励最后燃烧者和本轮领先参与者的奖池；此处不会虚构奖池余额或参与者数据',
'The last burner':'最后燃烧者',
'Project-reported share of the grand prize':'项目披露的大奖份额',
'Top 20 burners':'前 20 名燃烧者',
'Project-reported share distributed by rank':'项目披露的按排名分配份额',
'ALLOCATIONS AS STATED IN PROJECT MATERIALS':'分配比例依据项目资料',
'The game floor':'游戏大厅',
'03 / The game floor':'03 / 游戏大厅',
'Enter when':'进入游戏，当',
'the clock is real.':'倒计时真实运行',
'The game interface is ready for verified protocol data. Live countdowns, balances and transactions stay offline until the official contracts are known.':'游戏界面已准备好接入经验证的协议数据；在官方合约确认前，实时倒计时、余额与交易均保持离线',
'ROUND STATUS':'本轮状态',
'PREVIEW MODE':'预览模式',
'LIVE COUNTDOWN':'实时倒计时',
'Waiting for verified on-chain state':'等待已验证的链上状态',
'ROUND':'本轮',
'Live state unavailable':'实时状态不可用',
'INITIAL CLOCK':'初始时长',
'Whitepaper parameter':'白皮书参数',
'LAST BURNER':'最后燃烧者',
'No verified participant data':'暂无已验证的参与者数据',
'PRIZE POOL':'奖池',
'No verified balance':'暂无已验证余额',
'Participation':'参与',
'Amount to burn':'燃烧数量',
'The materials list minimums of 10,000 tokens below 0.001, 1,000 from 0.001 to 0.01, and 100 above 0.1. The 0.01–0.1 band and exact boundaries are unspecified. The separate 10,000-token timer threshold may not match every tier; contract rules need confirmation.':'资料列出的最低燃烧量为：代币价格低于 0.001 时 10,000 枚，0.001 至 0.01 时 1,000 枚，高于 0.1 时 100 枚；0.01–0.1 区间及精确边界均未说明；独立列出的 10,000 枚倒计时门槛未必适用于所有价格档；参与前需确认合约规则',
'Connect wallet to continue':'连接钱包以继续',
'No transaction can be submitted in preview mode.':'预览模式下无法提交交易',
'NETWORK':'网络',
'BNB SMART CHAIN':'BNB SMART CHAIN',
'CONTRACT':'合约',
'NOT PROVIDED':'未提供',
'See source status ↗':'查看来源状态 ↗',
'The golden treasury':'黄金金库',
'04 / The golden treasury':'04 / 黄金金库',
'Every allocation':'每一项分配',
'has a purpose.':'都有其意义',
'Figures below reflect the latest supplied Chinese whitepaper and protocol deck. They are project-reported information, not independently confirmed on-chain facts.':'以下数据依据最新提供的中文版白皮书与协议介绍资料，仅为项目披露信息，并非独立确认的链上事实',
'BURN':'燃烧',
'ALLOCATION':'分配',
'AS DESCRIBED':'白皮书所述',
'IN WHITEPAPER':'内容',
'1 BILLION TOKENS TOTAL SUPPLY':'总供应量 10 亿枚代币',
'3% BUY / 3% SELL TAX':'买入 3% / 卖出 3% 税费',
'Grand prize pool':'大奖池',
'60% last burner · 40% Top 20':'60% 最后燃烧者 · 40% 前 20 名',
'Instant dividend pool':'即时分红池',
'Distributed to eligible participants':'分配给符合条件的参与者',
'Permanent burn':'永久销毁',
'Removed from circulation':'从流通中移除',
'Top 20 dividends':'前 20 名分红',
'Leaderboard-based allocation':'按排行榜分配',
'Community development':'社区发展',
'Project-reported allocation':'项目披露的分配',
'Final 10% · use pending':'最后 10% · 用途待确认',
'Sources say market operations, audits & events or community development':'资料分别称市场运营、审计与活动或社区发展',
'The whitepaper assigns the final 10% to market operations, audits and events in one table, and to community development in its detailed section. The protocol deck marks its final use as pending confirmation.':'白皮书的一张表将最后 10% 列为市场运营、审计与活动，详细分配部分则称其用于社区发展；协议介绍资料将最终用途标为待确认',
'The buyback engine':'回购引擎',
'Acquire.':'获取',
'Burn & share.':'燃烧与分享',
'STATED FREQUENCY':'白皮书所述频率',
'per minute · whitepaper parameter':'每分钟 · 白皮书参数',
'Permanently burned':'永久销毁',
'Dividends by burn weight':'按燃烧权重分红',
'Tracker awaiting':'追踪器等待',
'verified transactions':'已验证交易',
'The whitepaper says 3% buy/sell taxes and a 5% BNB claim fee fund the buyback contract. The fee calculation base is left to the claim page and is not specified here.':'白皮书称买卖各 3% 的税费及 5% 的 BNB 领取费将用于回购合约；费用计算基数留待领取页面说明，此处未作规定',
'Exit accounting · whitepaper description':'退出核算 · 白皮书描述',
'Principal is recorded at the token value when a user participates; exit is described when counted returns reach 2× principal. The price source, counted reward types and partial-claim handling are not defined in the document.':'本金按用户参与时的代币价值记录；当计入收益达到本金的 2 倍时可退出；文件未定义价格来源、计入的奖励类型及部分领取的处理方式',
'IMPLEMENTATION DETAILS PENDING':'实现细节等待确认',
'Imperial ranking hall':'帝国排名大厅',
'05 / Imperial ranking hall':'05 / 帝国排名大厅',
'Earn your':'赢得你的',
'place in history.':'历史席位',
'Top 20 rankings, burn totals and reward allocations appear here once an official data source is connected.':'连接官方数据源后，这里将显示前 20 名排名、燃烧总量与奖励分配',
'THE HALL':'排名大厅',
'TOP':'前',
'RANK':'排名',
'PARTICIPANT':'参与者',
'BURNED':'已燃烧',
'WEIGHT':'权重',
'REWARD':'奖励',
'The hall is waiting.':'大厅正在等待',
'No verified leaderboard data is connected.':'尚未连接已验证的排行榜数据',
'DATA FEED STATUS · NOT PROVIDED':'数据源状态 · 未提供',
'ROUND DATA: UNAVAILABLE':'本轮数据：不可用',
'LAST SYNC: — — —':'上次同步：— — —',
'View explorer':'查看区块浏览器',
'The dividend streams':'分红流',
'06 / The dividend streams':'06 / 分红流',
'Two streams.':'两条分红流',
'One clear ledger.':'一份清晰账本',
'STREAM 01':'分红流 01',
'Instant dividends':'即时分红',
'A 30% share of the separate burn allocation is described for instant dividends, weighted by burning participation. Eligibility and claim mechanics need contract confirmation.':'白皮书描述，独立燃烧分配中的 30% 用于即时分红，并按燃烧参与度加权；资格与领取机制仍需合约确认',
'CLAIMABLE BALANCE —':'可领取余额 —',
'STREAM 02':'分红流 02',
'Buyback dividends':'回购分红',
'Half of the tokens acquired through buybacks are described as a separate dividend stream distributed by applicable burning weight.':'回购获得的代币中有一半被描述为独立分红流，并按适用的燃烧权重分配',
'CLAIM & LEDGER STATUS':'领取与账本状态',
'History is not connected':'历史记录尚未连接',
'The whitepaper describes a 5% claim fee payable separately in BNB. Its calculation base and BNB conversion method are unspecified; claim history requires verified contract events.':'白皮书描述了以 BNB 单独支付的 5% 领取费，但未说明计算基数与 BNB 折算方式；领取历史需要已验证的合约事件',
'Open dividend history':'打开分红历史',
'The protocol council':'协议议会',
'07 / The protocol council':'07 / 协议议会',
'A community':'一个社区',
'with a voice.':'拥有自己的声音',
'The whitepaper describes a DAO governance vision. Voting is not enabled here because the deployed governance contract and its live permissions were not supplied.':'白皮书描述了 DAO 治理愿景；由于未提供已部署的治理合约及其实时权限，此处尚未启用投票',
'WHITEPAPER STATES':'白皮书陈述',
'1 TOKEN = 1 VOTE':'1 枚代币 = 1 票',
'PROPOSED':'拟议',
'EXECUTION DELAY':'执行延迟',
'GOVERNANCE SCOPE':'治理范围',
'Parameters, proposals, the future.':'参数、提案与未来',
'The documents describe proposals covering staking parameters, dividend ratios, additional chains and ecosystem integration. They also describe renouncing contract permissions at launch; which parameters remain governable afterward is still unconfirmed. The deck cautions that proposal rights do not mean renounced contract code can still be changed.':'资料描述了涵盖质押参数、分红比例、额外链及生态整合的提案，也称上线时将放弃合约权限；此后仍可治理的参数范围尚待确认；介绍资料提醒，提案权并不意味着已放弃权限的合约代码仍可修改',
'ON-CHAIN VOTING · NOT CONNECTED':'链上投票 · 未连接',
'TECHNICAL & SECURITY CLAIMS':'技术与安全声明',
'Verify every layer.':'验证每一层',
'The documents describe modular contracts, commit-reveal participation, and randomness via Chainlink VRF or block data. They mention CertiK and Flap audit commissions, a Butterfly audit, and a Flap whitelist; the deck says public reports and completion status need verification. No audit reports or contract addresses were supplied here.':'资料描述了模块化合约、提交-揭示参与机制，以及通过 Chainlink VRF 或区块数据实现随机性；并提及已委托 CertiK 与 Flap 审计、Butterfly 审计及 Flap 白名单；介绍资料注明公开报告及完成状态仍待核验；本页面未收到审计报告或合约地址',
'PROJECT-REPORTED · DOCUMENTS NEEDED':'项目披露 · 需要文件',
'Beyond the chamber':'走出殿堂',
'08 / Beyond the chamber':'08 / 走出殿堂',
'A dynasty':'一个王朝',
'in the making.':'正在成形',
'The latest project materials place Lucky Sheep within the Butterfly ecosystem and name the Ten-Thousand-Coin Alliance and Iron Army Node. These relationships and reported community figures have not been independently verified. The whitepaper lists entry into Binance Alpha and pursuit of a Binance spot listing as goals, not confirmed listings.':'最新项目资料将幸运羊置于 Butterfly 生态中，并提及 Ten-Thousand-Coin Alliance 与 Iron Army Node；这些关系及披露的社区数据尚未经过独立验证；白皮书将进入 Binance Alpha 和争取币安现货上币列为目标，并非已确认的上线',
'Butterfly ecosystem':'Butterfly 生态',
'Relationship described in project materials':'项目资料中描述的关系',
'Ten-Thousand-Coin Alliance':'Ten-Thousand-Coin Alliance',
'Project-reported initiative':'项目披露的计划',
'Iron Army Node':'Iron Army Node',
'Materials say a 50,000-token transfer to a designated wallet grants node dividends and proposal rights':'资料称向指定钱包转入 50,000 枚代币即可获得节点分红与提案权',
'ONLINE COMMUNITIES':'线上社区',
'OFFLINE STUDIOS':'线下工作室',
'ECOSYSTEM PARTNERS':'生态合作伙伴',
'PROJECT-REPORTED SCALE · NOT INDEPENDENTLY VERIFIED':'项目披露规模 · 未独立验证',
'The royal archives':'王室档案',
'09 / The royal archives':'09 / 王室档案',
'A future':'一个未来',
'set in motion.':'正在启动',
'These phases and milestones come from the latest supplied whitepaper and protocol deck. All completion statuses are unverified; the dates are project targets.':'以下阶段与里程碑来自最新提供的白皮书与协议介绍资料；所有完成状态均未经验证；日期均为项目目标',
'Download latest whitepaper':'下载最新版白皮书',
'PROJECT MATERIALS ROADMAP':'项目资料路线图',
'COMPLETION STATUS UNVERIFIED':'完成状态未经验证',
'Foundation':'基础建设',
'Whitepaper release · community building · smart-contract development and internal audit':'发布白皮书 · 建设社区 · 智能合约开发与内部审计',
'STATUS':'状态',
'UNVERIFIED':'未经验证',
'Mainnet & genesis':'主网与创世',
'Mainnet launch · initial PancakeSwap liquidity · genesis round and fair launch on Butterfly Flap internal market':'主网上线 · PancakeSwap 初始流动性 · Butterfly Flap 内部市场创世轮及公平启动',
'Decentralization':'去中心化',
'Contract ownership renounced · DAO activated · BNB Smart Chain deployment':'放弃合约所有权 · 启用 DAO · 部署至 BNB Smart Chain',
'Community expansion':'社区扩张',
'Iron Army Node · team league · Ten-Thousand-Coin Alliance':'Iron Army Node · 战队联赛 · Ten-Thousand-Coin Alliance',
'Global ecosystem':'全球生态',
'Ten major ecosystems · global tour · market-facing applications':'十个主要生态 · 全球巡回 · 面向市场的应用',
'SOURCE LABEL':'来源标签',
'NEEDS CLARIFICATION':'需要澄清',
'The final phase is listed as Q4 2027–Q1 2028 in the latest materials. All roadmap dates are targets; completion is unverified.':'最新资料将最终阶段列为 Q4 2027–Q1 2028；所有路线图日期均为目标，完成状态未经核实',
'Resources & community':'资源与社区',
'10 / Resources & community':'10 / 资源与社区',
'The royal':'王室',
'archives.':'档案',
'The latest Chinese whitepaper and protocol deck are available below. Official social links are live; contract and explorer links have not been provided.':'下方提供最新版中文版白皮书与协议介绍资料；官方社交链接已启用；尚未提供合约及区块浏览器链接',
'PROJECT MATERIALS MENTION':'项目资料提及',
'Brands & platforms listed':'资料列出的品牌与平台',
'INSTITUTIONS NAMED':'资料提及的机构',
'Institutions listed in the materials':'项目资料列出的机构',
'Names are reproduced from the supplied project materials. Their appearance does not by itself confirm a formal partnership, investment, listing or endorsement.':'以上名称摘录自项目资料；名称出现本身并不代表正式合作、投资、上线或背书',
'Updated Chinese whitepaper · v1.0':'最新版中文版白皮书 · v1.0',
'PDF · November 2026':'PDF · 2026 年 11 月',
'Chinese protocol deck':'中文版协议介绍资料',
'PDF · investor and community edition':'PDF · 投资者与社区版',
'Earlier English whitepaper':'此前的英文白皮书',
'Previous supplied edition · DOCX':'先前提供的版本 · DOCX',
'Official X (Twitter)':'官方 X（Twitter）',
'Official Telegram':'官方 Telegram',
'Protocol documentation':'协议文档',
'URL not supplied':'未提供 URL',
'Verified contract':'已验证合约',
'Address not supplied':'未提供地址',
'Official community':'官方社区',
'Frequently asked':'常见问题',
'11 / Frequently asked':'11 / 常见问题',
'Questions from':'来自',
'the kingdom.':'王国的问题',
'Risk disclosure':'风险披露',
'The whitepaper describes Lucky Sheep as a zero-sum game and says participants may lose part of their principal. Smart-contract, market, liquidity, execution and regulatory risks also apply. Only commit assets you can afford to lose. The whitepaper says participation is not intended for U.S. or China residents, or where crypto or gaming is prohibited.':'白皮书将幸运羊描述为零和游戏，并称参与者可能损失部分本金；同时存在智能合约、市场、流动性、执行及监管风险；请仅投入你能够承受损失的资产；白皮书称美国或中国居民，以及禁止加密资产或博彩的地区不适合参与',
'What is Lucky Sheep?':'什么是幸运羊？',
'The whitepaper describes a decentralized last-burner game using a “burning means locking” model, a countdown and a grand prize. Custody and release rules for committed tokens need contract clarification.':'白皮书描述了一种采用“燃烧即锁定”模式、带有倒计时和大奖的去中心化最后燃烧者游戏；已锁定代币的托管与释放规则仍需合约说明',
'Can I participate from this page?':'我可以从此页面参与吗？',
'No. This preview has no verified contract addresses or wallet integration. The game controls are unavailable until the deployed protocol and callable functions are confirmed.':'不能；本预览没有已验证的合约地址或钱包集成；在已部署协议及可调用函数确认前，游戏控件不可用',
'Are the tokenomics independently verified?':'代币经济学经过独立验证吗？',
'The figures reflect the latest supplied Chinese whitepaper and protocol deck. They are project statements, not independently verified on-chain data; the contract address and transaction history were not supplied.':'这些数据依据最新提供的中文版白皮书与协议介绍资料；它们是项目声明，并非独立验证的链上数据；未提供合约地址及交易历史',
'Where can I find official links?':'在哪里可以找到官方链接？',
'The official X, Telegram and DeBox channels are linked in the navigation, footer and community resources. Contract and explorer links have not been supplied.':'导航栏、页脚及社区资源中已添加官方 X、Telegram 与 DeBox 链接；尚未提供合约及区块浏览器链接',
'PROTOCOL PREVIEW · 2026':'协议预览 · 2026',
'DATA SOURCE STATUS: PENDING':'数据源状态：等待中',
'BACK TO THE TOP ↑':'返回顶部 ↑',
'Project claims and parameters in the supplied whitepaper and protocol deck are shown for information only and have not been independently verified. Nothing here is a guarantee of performance or a solicitation to participate.':'所提供白皮书与协议介绍资料中的项目声明和参数仅供参考，未经独立验证；此处任何内容均不构成表现保证或参与邀约',
'This door is':'这扇门',
'not open yet.':'尚未开启',
'The latest whitepaper and protocol deck are available in the archives, and official social channels are linked. Verified contract addresses, callable functions and live-data sources were not supplied, so this action remains unavailable.':'档案中提供了最新版白皮书与协议介绍资料，并已添加官方社交频道链接；由于未提供已验证的合约地址、可调用函数及实时数据源，此操作暂不可用',
'Understood':'明白了'
};

const originalText = new WeakMap();
const originalAttributes = new WeakMap();

function normalize(value) {
  return value.replace(/\s+/g,'').trim();
}

function translateNode(node, language) {
  if (node.nodeType === Node.TEXT_NODE) {
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const source = normalize(originalText.get(node));
    if (!source || !zh[source]) return;
    const replacement = language ==='zh' ? zh[source] : source;
    const leading = originalText.get(node).match(/^\s*/)[0];
    const trailing = originalText.get(node).match(/\s*$/)[0];
    node.nodeValue = `${leading}${replacement}${trailing}`;
    return;
  }
  if (node.nodeType !== Node.ELEMENT_NODE) return;
  node.childNodes.forEach((child) => translateNode(child, language));
}

function translateAttribute(element, attribute, language, translation) {
  if (!originalAttributes.has(element)) originalAttributes.set(element, {});
  const originals = originalAttributes.get(element);
  if (!originals[attribute]) originals[attribute] = element.getAttribute(attribute);
  element.setAttribute(attribute, language ==='zh' ? translation : originals[attribute]);
}

function setLanguage(language) {
  const selected = language ==='en' ?'en' :'zh';
  document.documentElement.lang = selected ==='zh' ?'zh-CN' :'en';
  document.documentElement.dataset.language = selected;
  document.title = selected ==='zh' ? zh['Lucky Sheep — Be the Lucky Sheep. Take It All.'] :'Lucky Sheep — Be the Lucky Sheep. Take It All.';
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', selected ==='zh' ?'幸运羊——燃烧驱动游戏协议的电影感预览；成为幸运羊，赢得一切' :'Lucky Sheep — a cinematic preview of a burn-powered game protocol. Be the Lucky Sheep. Take it all.');
  translateNode(document.body, selected);
  const attrs = [
    ['.wordmark','aria-label','幸运羊主页'],
    ['.language-switcher','aria-label','语言'],
    ['.menu-toggle','aria-label', selected ==='zh' ? (menuToggle?.getAttribute('aria-expanded') ==='true' ?'关闭导航' :'打开导航') : (menuToggle?.getAttribute('aria-expanded') ==='true' ?'Close navigation' :'Open navigation')],
    ['.site-nav','aria-label','主导航'],
    ['.nav-social-links','aria-label','社交媒体频道'],
    ['.social-icon-link[href^="https://x.com"]','aria-label','幸运羊官方 X 账号'],
    ['.social-icon-link[href^="https://t.me"]','aria-label','幸运羊官方 Telegram 频道'],
    ['.social-icon-link[href^="https://m.debox.pro"]','aria-label','幸运羊官方 DeBox 社区'],
    ['.footer-social','aria-label','官方社交媒体'],
    ['.footer-social-link[href^="https://x.com"]','aria-label','幸运羊官方 X 账号'],
    ['.footer-social-link[href^="https://t.me"]','aria-label','幸运羊官方 Telegram 频道'],
    ['.footer-social-link[href^="https://m.debox.pro"]','aria-label','幸运羊官方 DeBox 社区'],
    ['.resource-social-link[href^="https://x.com"]','aria-label','幸运羊官方 X 账号'],
    ['.resource-social-link[href^="https://t.me"]','aria-label','幸运羊官方 Telegram 频道'],
    ['.resource-social-link[href^="https://m.debox.pro"]','aria-label','幸运羊官方 DeBox 社区'],
    ['.hero-art','aria-label','作为视觉参考提供的火焰公羊艺术图'],
    ['.intro-strip','aria-label','协议摘要'],
    ['.mechanism','aria-label','协议流程'],
    ['.dialog-close','aria-label','关闭对话框']
  ];
  attrs.forEach(([selector, attribute, value]) => {
    document.querySelectorAll(selector).forEach((element) => translateAttribute(element, attribute, selected, value));
  });
  languageButtons.forEach((button) => {
    const active = button.dataset.languageChoice === selected;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  sessionStorage.setItem(SESSION_LANGUAGE_KEY, selected);
}

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') ==='true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  const language = document.documentElement.dataset.language;
  menuToggle.setAttribute('aria-label', language ==='zh' ? (isOpen ?'关闭导航' :'打开导航') : (isOpen ?'Close navigation' :'Open navigation'));
  siteNav?.classList.toggle('is-open', !isOpen);
});

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded','false');
    menuToggle?.setAttribute('aria-label', document.documentElement.dataset.language ==='zh' ?'打开导航' :'Open navigation');
    siteNav.classList.remove('is-open');
  });
});

document.querySelectorAll('[data-unavailable]').forEach((control) => {
  control.addEventListener('click', () => dialog?.showModal());
});

dialog?.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
dialog?.querySelector('.dialog-ok')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

languageButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.languageChoice));
});

setLanguage(sessionStorage.getItem(SESSION_LANGUAGE_KEY) || 'zh');
