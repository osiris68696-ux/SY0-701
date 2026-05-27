const STORAGE_KEY = "sy0-701-practice-state-v7";
const questions = window.QUESTION_BANK || [];

const uiText = {
  zh: {
    total: "總題數",
    done: "已作答",
    score: "正確率",
    wrong: "錯題",
    all: "全部",
    wrongOnly: "錯題",
    flagged: "收藏",
    jump: "跳題",
    prev: "上一題",
    check: "檢查答案",
    reveal: "顯示答案",
    next: "下一題",
    random: "隨機",
    reset: "重置",
    reference: "參考互動樣式",
    chooseOne: "選擇 1 個答案",
    chooseMany: "可複選",
    selectFirst: "請先選擇答案。",
    correct: "答對了。",
    incorrect: "答錯了。",
    answerIs: "正確答案",
    unsupported: "這題在 PDF 中是 Hotspot/Simulation 或缺少正解文字，保留題目供複習，無法自動評分。",
    source: "英文原題",
  },
  en: {
    total: "Total",
    done: "Answered",
    score: "Score",
    wrong: "Wrong",
    all: "All",
    wrongOnly: "Wrong",
    flagged: "Flagged",
    jump: "Jump",
    prev: "Previous",
    check: "Check",
    reveal: "Reveal",
    next: "Next",
    random: "Random",
    reset: "Reset",
    reference: "Reference style",
    chooseOne: "Choose one answer",
    chooseMany: "Multiple select",
    selectFirst: "Select an answer first.",
    correct: "Correct.",
    incorrect: "Incorrect.",
    answerIs: "Correct answer",
    unsupported: "This PDF item is a Hotspot/Simulation or has no extracted answer, so it is kept for review and cannot be auto-graded.",
    source: "English source",
  },
};

const glossary = new Map(Object.entries({
  "Accept": "接受",
  "Access card": "門禁卡",
  "Access control": "存取控制",
  "Access management": "存取管理",
  "Account lockout": "帳號鎖定",
  "Active": "主動式",
  "Adaptive identity": "自適應身分",
  "Application": "應用程式",
  "Authentication": "驗證",
  "Authentication tokens": "驗證權杖",
  "Availability": "可用性",
  "Avoid": "避免",
  "Bastion host": "堡壘主機",
  "Biometrics": "生物辨識",
  "Blackmail": "勒索",
  "Brand impersonation": "品牌冒充",
  "Brute-force": "暴力破解",
  "Buffer overflow": "緩衝區溢位",
  "Bug bounty": "漏洞獎勵計畫",
  "Business email compromise": "商務電子郵件詐騙",
  "Capacity planning": "容量規劃",
  "Change management procedure": "變更管理程序",
  "Cloud provider": "雲端服務提供者",
  "Cold site": "冷備援站台",
  "Confidentiality": "機密性",
  "Conflict of interest policy": "利益衝突政策",
  "Containment": "圍堵",
  "Content categorization": "內容分類",
  "Cross-site scripting": "跨站腳本攻擊",
  "Cryptographic": "密碼學相關",
  "Dashboard": "儀表板",
  "Data classification": "資料分類",
  "Data controller": "資料控制者",
  "Data custodian": "資料保管者",
  "Data masking": "資料遮罩",
  "Data processor": "資料處理者",
  "Data sovereignty": "資料主權",
  "Digital forensics": "數位鑑識",
  "Disaster recovery plan": "災難復原計畫",
  "Disinformation": "假訊息",
  "DLP": "資料外洩防護",
  "DNS service": "DNS 服務",
  "DoS attack": "阻斷服務攻擊",
  "Due diligence": "盡職調查",
  "Encryption": "加密",
  "Endpoint": "端點",
  "Espionage": "間諜活動",
  "Firewall": "防火牆",
  "Full disk": "全磁碟",
  "Generator": "發電機",
  "Geolocation policy": "地理位置政策",
  "Hacktivist": "駭客行動主義者",
  "Hash collision": "雜湊碰撞",
  "Hashing": "雜湊",
  "Hashing algorithm": "雜湊演算法",
  "Hot site": "熱備援站台",
  "Impersonation": "冒充",
  "Impossible travel": "不可能移動",
  "Incident response": "事件回應",
  "Input validation": "輸入驗證",
  "Insider threat": "內部威脅",
  "Intellectual property": "智慧財產",
  "Intrusion prevention system": "入侵防禦系統",
  "Jailbreaking": "越獄",
  "Jump server": "跳板伺服器",
  "Key stretching": "金鑰延展",
  "Least privilege": "最小權限",
  "Load balancer": "負載平衡器",
  "Memory injection": "記憶體注入",
  "MFA": "多因素驗證",
  "Multifactor authentication": "多因素驗證",
  "Nation-state": "國家級行為者",
  "Network segmentation": "網路分段",
  "Non-repudiation": "不可否認性",
  "Obfuscation": "混淆",
  "Organized crime": "組織犯罪",
  "Password complexity": "密碼複雜度",
  "Password spraying": "密碼噴灑",
  "Password vaulting": "密碼保管庫",
  "Patching": "修補",
  "Penetration testing": "滲透測試",
  "Permissions assignment": "權限指派",
  "Philosophical beliefs": "理念信念",
  "Phishing": "網路釣魚",
  "Pretexting": "藉口詐騙",
  "Privacy": "隱私",
  "Proxy server": "代理伺服器",
  "Recovery": "復原",
  "Red team": "紅隊",
  "Redundancy": "備援",
  "Revenge": "報復",
  "Right-to-audit clause": "稽核權條款",
  "Risk analysis": "風險分析",
  "Risk register": "風險登錄表",
  "Risk tolerance": "風險容忍度",
  "Risk transfer": "風險轉移",
  "Rootkit": "Rootkit",
  "Rules of engagement": "交戰規則",
  "Salting": "加鹽",
  "Sandbox environment": "沙箱環境",
  "Secure cookies": "安全 Cookie",
  "Security awareness training": "資安意識訓練",
  "Security guard": "保全人員",
  "SIEM": "安全資訊與事件管理",
  "Side loading": "側載",
  "Simulated phishing campaign": "模擬釣魚演練",
  "Single sign-on": "單一登入",
  "Situational awareness": "情境意識",
  "Smishing": "簡訊釣魚",
  "Snapshots": "快照",
  "Social engineering": "社交工程",
  "SOW": "工作說明書",
  "SQL injection": "SQL 注入",
  "SSO": "單一登入",
  "Steganography": "隱寫術",
  "Supply chain": "供應鏈",
  "Supply chain analysis": "供應鏈分析",
  "Threat hunting": "威脅獵捕",
  "Tokenization": "權杖化",
  "Typosquatting": "錯字網域搶註",
  "Unskilled attacker": "低技能攻擊者",
  "Version control": "版本控制",
  "Vishing": "語音釣魚",
  "VPN": "虛擬私人網路",
  "WAF": "Web 應用程式防火牆",
  "Warm site": "溫備援站台",
  "Watering-hole": "水坑攻擊",
  "Whistleblower": "吹哨者",
  "Worm": "蠕蟲",
  "Zero Trust": "零信任",
}));

glossary.set("Hardening", "強化");
glossary.set("Employee monitoring", "員工監控");
glossary.set("Configuration enforcement", "組態強制執行");
glossary.set("Disaster recovery plan", "災難復原計畫");
glossary.set("Incident response procedure", "事件回應程序");
glossary.set("Business continuity plan", "營運持續計畫");
glossary.set("Open-source intelligence", "開源情報");
glossary.set("Nation-state", "國家級行為者");
glossary.set("Input validation", "輸入驗證");
glossary.set("Code signing", "程式碼簽章");
glossary.set("Change control request", "變更控制請求");
glossary.set("Root cause analysis", "根因分析");
glossary.set("Audit findings", "稽核發現");
glossary.set("Reputation damage", "聲譽損害");
glossary.set("Geographic dispersion", "地理分散");
glossary.set("Tabletop exercise", "桌上演練");

const phraseRules = [
  [/Which of the following/gi, "下列哪一項"],
  [/best describes/gi, "最能描述"],
  [/best protects/gi, "最能保護"],
  [/most likely/gi, "最可能"],
  [/should the administrator implement/gi, "管理員應實作"],
  [/should the organization use/gi, "組織應使用"],
  [/security analyst/gi, "資安分析師"],
  [/security administrator/gi, "資安管理員"],
  [/organization/gi, "組織"],
  [/company/gi, "公司"],
  [/employee/gi, "員工"],
  [/attack/gi, "攻擊"],
  [/vulnerability/gi, "弱點"],
  [/network/gi, "網路"],
  [/data/gi, "資料"],
  [/access/gi, "存取"],
  [/password/gi, "密碼"],
  [/cloud/gi, "雲端"],
  [/incident/gi, "事件"],
  [/risk/gi, "風險"],
  [/logs/gi, "記錄"],
  [/\(Choose two\.\)/gi, "（選擇兩項）"],
  [/\(Choose three\.\)/gi, "（選擇三項）"],
];

let state = loadState();
let filter = "all";
let activeQuestions = buildActiveQuestions();
state.mode = "setup";

const els = {
  startScreen: document.getElementById("start-screen"),
  examScreen: document.getElementById("exam-screen"),
  resultScreen: document.getElementById("result-screen"),
  countSelect: document.getElementById("question-count-select"),
  timeSelect: document.getElementById("time-select"),
  langSelect: document.getElementById("language-select"),
  scopeSelect: document.getElementById("scope-select"),
  randomize: document.getElementById("randomize-select"),
  setupCount: document.getElementById("setup-question-count"),
  setupTime: document.getElementById("setup-time"),
  list: document.getElementById("question-list"),
  title: document.getElementById("question-title"),
  topic: document.getElementById("topic-label"),
  text: document.getElementById("question-text"),
  source: document.getElementById("english-source"),
  options: document.getElementById("options"),
  feedback: document.getElementById("feedback"),
  flag: document.getElementById("flag-button"),
  jump: document.getElementById("jump-input"),
  statTotal: document.getElementById("stat-total"),
  statDone: document.getElementById("stat-done"),
  statScore: document.getElementById("stat-score"),
  statWrong: document.getElementById("stat-wrong"),
  progressQuestion: document.getElementById("progress-question"),
  progressAnswered: document.getElementById("progress-answered"),
  progressTime: document.getElementById("progress-time"),
  progressBarFill: document.getElementById("progress-bar-fill"),
  resultPassLabel: document.getElementById("result-pass-label"),
  resultScore: document.getElementById("result-score"),
  resultSummary: document.getElementById("result-summary"),
  resultCorrect: document.getElementById("result-correct"),
  resultCount: document.getElementById("result-count"),
  resultPercent: document.getElementById("result-percent"),
  wrongAnalysis: document.getElementById("wrong-analysis"),
};

function loadState() {
  const fallback = {
    mode: "setup",
    index: 0,
    language: "zh",
    selected: {},
    results: {},
    flagged: [],
    examIds: questions.slice(0, 45).map((q) => q.id),
    settings: { count: 45, time: 60, scope: "all", randomize: false },
  };
  try {
    return { ...fallback, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function t(key) {
  return uiText[state.language][key];
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildActiveQuestions() {
  const ids = new Set(state.examIds?.length ? state.examIds : questions.slice(0, 45).map((q) => q.id));
  const selected = questions.filter((q) => ids.has(q.id));
  return selected.length ? selected : questions.slice(0, 45);
}

function startExam() {
  const settings = {
    count: Number(els.countSelect.value),
    time: Number(els.timeSelect.value),
    scope: els.scopeSelect.value,
    randomize: els.randomize.checked,
  };
  let pool = questions;
  if (settings.scope === "wrong") {
    pool = questions.filter((q) => state.results[q.id] === false);
  } else if (settings.scope === "flagged") {
    pool = questions.filter((q) => state.flagged.includes(q.id));
  }
  if (!pool.length) pool = questions;
  const picked = settings.randomize ? shuffle(pool).slice(0, settings.count) : pool.slice(0, settings.count);

  state.mode = "exam";
  state.index = 0;
  state.language = els.langSelect.value;
  state.settings = settings;
  state.examIds = picked.map((q) => q.id);
  activeQuestions = buildActiveQuestions();
  saveState();
  render();
}

function arraysEqual(a, b) {
  return [...a].sort().join("") === [...b].sort().join("");
}

function selectedFor(id) {
  return state.selected[id] || [];
}

function applyPhraseRules(text) {
  let output = text;
  for (const [pattern, replacement] of phraseRules) {
    output = output.replace(pattern, replacement);
  }
  return output;
}

function renderOptionText(text) {
  if (state.language === "en") return text;
  const normalized = text.replace(/\.$/, "");
  const translated = glossary.get(text) || glossary.get(normalized);
  return translated ? `${translated} (${text})` : text;
}

function renderQuestionText(question) {
  return question;
}

function syncSetupControls() {
  const settings = state.settings || {};
  els.countSelect.value = String(settings.count || 45);
  els.timeSelect.value = String(settings.time ?? 60);
  els.langSelect.value = state.language || "zh";
  els.scopeSelect.value = settings.scope || "all";
  els.randomize.checked = settings.randomize === true;
  els.setupCount.textContent = els.countSelect.value;
  els.setupTime.textContent = els.timeSelect.value === "0" ? "∞" : els.timeSelect.value;
}

function updateLanguage() {
  document.documentElement.lang = state.language === "zh" ? "zh-Hant" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.getElementById("lang-zh").classList.toggle("active", state.language === "zh");
  document.getElementById("lang-en").classList.toggle("active", state.language === "en");
}

function renderStats() {
  const ids = new Set(activeQuestions.map((q) => q.id));
  const relevantResults = Object.entries(state.results).filter(([id]) => ids.has(Number(id)));
  const answered = relevantResults.length;
  const correct = relevantResults.filter(([, value]) => value === true).length;
  const wrong = relevantResults.filter(([, value]) => value === false).length;
  const selectedCount = activeQuestions.filter((q) => selectedFor(q.id).length > 0).length;
  els.statTotal.textContent = activeQuestions.length;
  els.statDone.textContent = answered;
  els.statScore.textContent = answered ? `${Math.round((correct / answered) * 100)}%` : "0%";
  els.statWrong.textContent = wrong;
  els.progressQuestion.textContent = `題目 ${state.index + 1} / ${activeQuestions.length}`;
  els.progressAnswered.textContent = `已作答 ${selectedCount} / ${activeQuestions.length}`;
  els.progressTime.textContent = state.settings?.time ? `剩餘 ${String(state.settings.time).padStart(2, "0")}:00` : "不限時間";
  els.progressBarFill.style.width = `${activeQuestions.length ? ((state.index + 1) / activeQuestions.length) * 100 : 0}%`;
}

function filteredQuestions() {
  if (filter === "wrong") return activeQuestions.filter((q) => state.results[q.id] === false);
  if (filter === "flagged") return activeQuestions.filter((q) => state.flagged.includes(q.id));
  return activeQuestions;
}

function currentQuestion() {
  if (state.index >= activeQuestions.length) state.index = Math.max(activeQuestions.length - 1, 0);
  return activeQuestions[state.index] || questions[0];
}

function renderList() {
  const qNow = currentQuestion();
  els.list.innerHTML = "";
  filteredQuestions().forEach((q) => {
    const sequence = activeQuestions.findIndex((item) => item.id === q.id) + 1;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "q-chip";
    button.textContent = sequence;
    button.classList.toggle("current", qNow.id === q.id);
    button.classList.toggle("answered", selectedFor(q.id).length > 0);
    button.classList.toggle("correct", state.mode === "result" && state.results[q.id] === true);
    button.classList.toggle("wrong", state.mode === "result" && state.results[q.id] === false);
    button.classList.toggle("flagged", state.flagged.includes(q.id));
    button.classList.toggle("unsupported", q.unsupported);
    button.addEventListener("click", () => {
      state.index = activeQuestions.findIndex((item) => item.id === q.id);
      saveState();
      render();
    });
    els.list.appendChild(button);
  });
}

function answerText(q) {
  const parts = q.answer.map((label) => {
    const option = q.options.find((item) => item.label === label);
    return option ? `${label}. ${renderOptionText(option.text)}` : label;
  });
  return `${t("answerIs")}: ${parts.join(" / ")}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function optionDisplay(q, labels) {
  if (!labels.length) return "未作答";
  return labels.map((label) => {
    const option = q.options.find((item) => item.label === label);
    return option ? `${label}. ${renderOptionText(option.text)}` : label;
  }).join(" / ");
}

function explainQuestion(q) {
  const answerOptions = q.answer
    .map((label) => q.options.find((option) => option.label === label)?.text || "")
    .join(" ")
    .toLowerCase();
  const prompt = q.question.toLowerCase();
  const combined = `${prompt} ${answerOptions}`;

  const rules = [
    {
      test: /jump server|bastion host/,
      title: "跳板伺服器 / 堡壘主機",
      why: "當管理者不能直接連到受保護的伺服器區段時，應透過受控的中介主機進入。這能集中記錄、控管與限制管理連線。",
      tip: "題目出現 administrative access、internal resources、minimizing traffic、prevent direct access，優先聯想到 Jump server 或 Bastion host。",
    },
    {
      test: /smishing|text message|sms/,
      title: "簡訊釣魚與冒充",
      why: "透過簡訊要求憑證、付款或禮品卡通常屬於 Smishing；若訊息假冒主管、部門或可信任身分，還包含 Impersonation。",
      tip: "看到 text message/SMS 就先判斷 Smishing；看到 pretending/claiming to be 就判斷 Impersonation。",
    },
    {
      test: /phishing|brand impersonation|credential/,
      title: "釣魚與憑證竊取",
      why: "要求使用者點連結並輸入登入資訊，是典型的 Phishing。若攻擊者假冒知名服務或品牌，則是 Brand impersonation。",
      tip: "題目提到 email link、login information、credential verification，通常是在考 Phishing。",
    },
    {
      test: /side loading|approved software repository/,
      title: "側載風險",
      why: "從官方或核准來源以外安裝軟體，可能繞過安全檢查並引入惡意程式，這種行為稱為 Side loading。",
      tip: "看到 outside approved repository、untrusted app source，優先選 Side loading。",
    },
    {
      test: /sso|single sign-on|domain credentials/,
      title: "單一登入",
      why: "SSO 讓使用者用既有網域或身分提供者的憑證存取多個 SaaS 應用，減少需要維護的帳密數量。",
      tip: "題目問 reduce credentials、domain credentials、SaaS access，通常選 SSO。",
    },
    {
      test: /waf|buffer overflow|website|web application/,
      title: "Web 應用程式防火牆",
      why: "WAF 用來保護 Web 應用程式，能偵測並阻擋常見 Web 攻擊流量。若題目限定 internet-facing website 或 web application，WAF 通常比一般防火牆更精準。",
      tip: "看到 website/web application + exploit/attack，先確認是否需要 WAF。",
    },
    {
      test: /multifactor authentication|mfa|suspicious ip|password/,
      title: "多因素驗證",
      why: "即使密碼外洩，MFA 仍要求第二個驗證因素，可降低異常登入或帳號盜用成功率。",
      tip: "題目問如何防止 stolen password、suspicious login succeeding，優先考慮 MFA。",
    },
    {
      test: /least privilege/,
      title: "最小權限",
      why: "Least privilege 只授予完成工作所需的最低權限，可降低誤用或遭入侵後的影響範圍。",
      tip: "看到 only specific users have access、permissions needed for job role，通常是 Least privilege。",
    },
    {
      test: /risk register/,
      title: "風險登錄表",
      why: "Risk register 用來記錄風險、負責人、處理方式與門檻，是風險管理追蹤文件。",
      tip: "題目問 document risks、responsible parties、thresholds，選 Risk register。",
    },
    {
      test: /transfer|cyber insurance/,
      title: "風險轉移",
      why: "購買保險或把部分責任交由第三方承擔，是將風險財務影響轉移出去，不是消除風險。",
      tip: "看到 insurance，幾乎就是 Risk transfer。",
    },
    {
      test: /input validation|sql injection|cross-site scripting|injection/,
      title: "輸入驗證",
      why: "Injection 與 XSS 多半源於未正確處理使用者輸入。Input validation 可限制輸入格式與內容，降低惡意資料被執行的機率。",
      tip: "看到 form field、SQL injection、XSS、injection attacks，優先考慮 Input validation。",
    },
    {
      test: /change management|change control|patch/,
      title: "變更管理",
      why: "在正式環境套用修補或調整防火牆規則前，應先走 change management/change control，確保核准、測試與回復計畫完整。",
      tip: "題目問 production system 的 patch 或 firewall rule 第一件事，通常是 change request。",
    },
    {
      test: /root cause analysis/,
      title: "根因分析",
      why: "Root cause analysis 的目的不是只處理表面症狀，而是找出根本原因，避免同類事件再次發生。",
      tip: "看到 prevent future incidents of the same nature，就是 Root cause analysis 的目的。",
    },
    {
      test: /http:\/\/|non-encrypted|encrypted websites/,
      title: "未加密網站辨識",
      why: "HTTP 流量未使用 TLS 加密；HTTPS 通常使用 443。若要阻擋非加密網站，URL 字串中最直接的特徵是 http://。",
      tip: "題目問 prohibit non-encrypted websites，選 http://。",
    },
  ];

  const matched = rules.find((rule) => rule.test.test(combined));
  if (matched) return matched;

  const correct = optionDisplay(q, q.answer);
  return {
    title: "關鍵概念判斷",
    why: `本題正確選項是 ${correct}。作答時應先抓題目中的關鍵限制條件，再選擇最直接滿足該需求的控制、攻擊類型或治理文件。`,
    tip: "Security+ 題目通常在考最精準的名詞對應；先排除太廣泛、太事後或不符合情境的選項。",
  };
}

function renderQuestion() {
  const q = currentQuestion();
  const selected = selectedFor(q.id);
  const result = state.results[q.id];

  els.title.textContent = state.language === "zh" ? `第 ${state.index + 1} 題` : `Question #${state.index + 1}`;
  els.topic.textContent = `Topic ${q.topic} · ${q.multiSelect ? t("chooseMany") : t("chooseOne")}`;
  els.text.textContent = renderQuestionText(q.question);
  els.text.style.fontWeight = "400";
  els.text.style.fontSize = "17px";
  els.text.style.lineHeight = "1.7";
  els.source.textContent = `${t("source")}: ${q.question}`;
  els.source.classList.toggle("visible", false);
  els.flag.textContent = "標記複查";
  els.flag.classList.toggle("marked", state.flagged.includes(q.id));
  els.options.innerHTML = "";

  q.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    button.disabled = q.unsupported;
    button.innerHTML = `<span class="label">${option.label}</span><span>${renderOptionText(option.text)}</span>`;
    button.classList.toggle("selected", selected.includes(option.label));
    if (state.mode === "result" && result !== undefined) {
      button.classList.toggle("correct", q.answer.includes(option.label));
      button.classList.toggle("incorrect", selected.includes(option.label) && !q.answer.includes(option.label));
    }
    button.addEventListener("click", () => selectOption(q, option.label));
    els.options.appendChild(button);
  });

  if (q.unsupported) {
    els.feedback.className = "feedback warn";
    els.feedback.textContent = t("unsupported");
  } else if (state.mode === "result" && result === true) {
    els.feedback.className = "feedback good";
    els.feedback.textContent = `${t("correct")} ${answerText(q)}`;
  } else if (state.mode === "result" && result === false) {
    els.feedback.className = "feedback bad";
    els.feedback.textContent = `${t("incorrect")} ${answerText(q)}`;
  } else {
    els.feedback.className = "feedback";
    els.feedback.textContent = q.multiSelect ? t("chooseMany") : t("chooseOne");
  }

  document.getElementById("prev-button").disabled = state.index === 0;
  document.getElementById("next-button").disabled = state.index === activeQuestions.length - 1;
  document.getElementById("check-button").disabled = q.unsupported;
  document.getElementById("reveal-button").disabled = q.unsupported;
}

function selectOption(q, label) {
  if (q.unsupported) return;
  const current = new Set(selectedFor(q.id));
  if (q.multiSelect) {
    current.has(label) ? current.delete(label) : current.add(label);
  } else {
    current.clear();
    current.add(label);
  }
  state.selected[q.id] = [...current];
  if (state.mode !== "result") delete state.results[q.id];
  saveState();
  render();
}

function checkCurrent() {
  const q = currentQuestion();
  if (q.unsupported) return;
  const selected = selectedFor(q.id);
  if (!selected.length) {
    els.feedback.className = "feedback warn";
    els.feedback.textContent = t("selectFirst");
    return;
  }
  state.results[q.id] = arraysEqual(selected, q.answer);
  saveState();
  render();
}

function revealCurrent() {
  const q = currentQuestion();
  if (q.unsupported) return;
  state.selected[q.id] = [...q.answer];
  state.results[q.id] = true;
  saveState();
  render();
}

function move(delta) {
  state.index = Math.min(Math.max(state.index + delta, 0), activeQuestions.length - 1);
  saveState();
  render();
}

function gradeExam() {
  activeQuestions.forEach((q) => {
    if (q.unsupported) return;
    state.results[q.id] = arraysEqual(selectedFor(q.id), q.answer);
  });
}

function submitExam() {
  gradeExam();
  state.mode = "result";
  saveState();
  render();
}

window.submitExam = submitExam;

function renderResult() {
  const gradable = activeQuestions.filter((q) => !q.unsupported);
  const correct = gradable.filter((q) => state.results[q.id] === true).length;
  const total = gradable.length || activeQuestions.length;
  const percent = total ? Math.round((correct / total) * 100) : 0;
  const score = Math.round(percent * 10);
  const passed = score >= 750;

  els.resultPassLabel.textContent = passed ? "通過" : "未通過";
  els.resultPassLabel.classList.toggle("passed", passed);
  els.resultScore.textContent = score;
  els.resultSummary.textContent = `答對 ${correct} / ${total} (${percent}%)。`;
  els.resultCorrect.textContent = correct;
  els.resultCount.textContent = total;
  els.resultPercent.textContent = `${percent}%`;
  els.wrongAnalysis.innerHTML = "";

  const wrongItems = activeQuestions.filter((q) => !q.unsupported && state.results[q.id] === false);
  if (!wrongItems.length) {
    els.wrongAnalysis.innerHTML = `<p class="empty-analysis">沒有錯題。</p>`;
    return;
  }

  wrongItems.forEach((q) => {
    const sequence = activeQuestions.findIndex((item) => item.id === q.id) + 1;
    const explanation = explainQuestion(q);
    const selected = selectedFor(q.id);
    const card = document.createElement("article");
    card.className = "analysis-card";
    card.innerHTML = `
      <h3>錯題 ${sequence} | 得分 0 / 1</h3>
      <p class="analysis-question">第 ${sequence} 題 ${q.multiSelect ? "（複選題）" : "（選擇題）"}</p>
      <p>${escapeHtml(q.question)}</p>
      <div class="answer-box">
        <p><strong>你的答案：</strong>${escapeHtml(optionDisplay(q, selected))}</p>
        <p><strong>${escapeHtml(answerText(q))}</strong></p>
      </div>
      <div class="explanation-box">
        <p><strong>解析：${escapeHtml(explanation.title)}</strong></p>
        <ul>
          <li>${escapeHtml(explanation.why)}</li>
        </ul>
        <p><strong>考試小技巧：</strong>${escapeHtml(explanation.tip)}</p>
      </div>
    `;
    els.wrongAnalysis.appendChild(card);
  });
}

function render() {
  activeQuestions = buildActiveQuestions();
  syncSetupControls();
  const inExam = state.mode === "exam";
  const inResult = state.mode === "result";
  document.body.dataset.mode = state.mode;
  els.startScreen.classList.toggle("hidden", inExam || inResult);
  els.examScreen.classList.toggle("hidden", !inExam);
  els.resultScreen.classList.toggle("hidden", !inResult);
  if (inResult) {
    renderResult();
    return;
  }
  if (!inExam) return;
  updateLanguage();
  renderStats();
  renderList();
  renderQuestion();
}

document.getElementById("start-button").addEventListener("click", startExam);
document.getElementById("back-to-setup").addEventListener("click", () => {
  state.mode = "setup";
  saveState();
  render();
});

[els.countSelect, els.timeSelect].forEach((select) => {
  select.addEventListener("change", syncSetupControls);
});

els.langSelect.addEventListener("change", () => {
  state.language = els.langSelect.value;
  saveState();
});

document.getElementById("lang-zh").addEventListener("click", () => {
  state.language = "zh";
  saveState();
  render();
});

document.getElementById("lang-en").addEventListener("click", () => {
  state.language = "en";
  saveState();
  render();
});

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    filter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((node) => {
      node.classList.toggle("active", node === button);
    });
    renderList();
  });
});

els.jump.addEventListener("change", () => {
  const index = Number(els.jump.value) - 1;
  if (index >= 0) {
    state.index = index;
    els.jump.value = "";
    saveState();
    render();
  }
});

els.flag.addEventListener("click", () => {
  const id = currentQuestion().id;
  state.flagged = state.flagged.includes(id)
    ? state.flagged.filter((item) => item !== id)
    : [...state.flagged, id];
  saveState();
  render();
});

document.getElementById("check-button").addEventListener("click", checkCurrent);
document.getElementById("reveal-button").addEventListener("click", revealCurrent);
document.getElementById("prev-button").addEventListener("click", () => move(-1));
document.getElementById("next-button").addEventListener("click", () => move(1));
document.getElementById("random-button").addEventListener("click", () => {
  state.index = Math.floor(Math.random() * activeQuestions.length);
  saveState();
  render();
});
document.getElementById("reset-button").addEventListener("click", () => {
  state.selected = {};
  state.results = {};
  state.index = 0;
  saveState();
  render();
});
document.getElementById("submit-button").addEventListener("click", submitExam);
document.getElementById("restart-button").addEventListener("click", () => {
  state.selected = {};
  state.results = {};
  state.index = 0;
  state.mode = "setup";
  saveState();
  render();
});
document.getElementById("review-wrong-button").addEventListener("click", () => {
  filter = "wrong";
  state.mode = "exam";
  state.index = activeQuestions.findIndex((q) => state.results[q.id] === false);
  if (state.index < 0) state.index = 0;
  saveState();
  render();
});

document.addEventListener("keydown", (event) => {
  if (state.mode !== "exam" || event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement) return;
  const q = currentQuestion();
  const key = event.key.toUpperCase();
  if (["A", "B", "C", "D", "E", "F", "G", "H"].includes(key)) {
    const option = q.options.find((item) => item.label === key);
    if (option) selectOption(q, key);
  } else if (event.key === "Enter") {
    checkCurrent();
  } else if (event.key === "ArrowRight") {
    move(1);
  } else if (event.key === "ArrowLeft") {
    move(-1);
  }
});

render();
