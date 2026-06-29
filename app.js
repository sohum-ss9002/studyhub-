
// ===================== DEFAULT SYLLABUS =====================
const DEFAULT_CHAPTERS = {
  physics: [
    {name:'Kinematics',weight:'high'},{name:'Laws of Motion (NLM)',weight:'high'},{name:'Work Energy Power',weight:'high'},
    {name:'Centre of Mass',weight:'high'},{name:'Rotational Motion',weight:'high'},{name:'Gravitation',weight:'med'},
    {name:'Fluid Mechanics',weight:'med'},{name:'Thermodynamics',weight:'high'},{name:'Waves & Sound',weight:'med'},
    {name:'Electrostatics',weight:'high'},{name:'Current Electricity',weight:'high'},{name:'Magnetic Effects',weight:'high'},
    {name:'EMI & AC',weight:'high'},{name:'Optics',weight:'high'},{name:'Modern Physics',weight:'high'},
    {name:'Simple Harmonic Motion',weight:'high'},{name:'Elasticity',weight:'low'},{name:'Surface Tension',weight:'low'},
  ],
  chemistry: [
    {name:'Mole Concept',weight:'high'},{name:'Atomic Structure',weight:'high'},{name:'Chemical Bonding',weight:'high'},
    {name:'Thermodynamics (Chem)',weight:'high'},{name:'Equilibrium',weight:'high'},{name:'Electrochemistry',weight:'high'},
    {name:'Chemical Kinetics',weight:'high'},{name:'Coordination Compounds',weight:'high'},{name:'Organic Basics & IUPAC',weight:'high'},
    {name:'Hydrocarbons',weight:'high'},{name:'Haloalkanes',weight:'med'},{name:'Alcohols Phenols Ethers',weight:'med'},
    {name:'Aldehydes Ketones',weight:'high'},{name:'Amines',weight:'med'},{name:'Biomolecules',weight:'low'},
    {name:'Periodic Table & Properties',weight:'high'},{name:'p-Block Elements',weight:'high'},{name:'d & f Block',weight:'med'},
    {name:'Solutions',weight:'high'},{name:'Solid State',weight:'med'},{name:'Surface Chemistry',weight:'low'},
  ],
  maths: [
    {name:'Sets Relations Functions',weight:'med'},{name:'Trigonometry',weight:'high'},{name:'Complex Numbers',weight:'high'},
    {name:'Quadratic Equations',weight:'high'},{name:'Sequences & Series',weight:'high'},{name:'Permutation Combination',weight:'high'},
    {name:'Binomial Theorem',weight:'high'},{name:'Straight Lines',weight:'high'},{name:'Circles',weight:'high'},
    {name:'Conic Sections',weight:'high'},{name:'3D Geometry',weight:'high'},{name:'Vectors',weight:'high'},
    {name:'Limits Continuity',weight:'high'},{name:'Differentiation',weight:'high'},{name:'Integration',weight:'high'},
    {name:'Differential Equations',weight:'high'},{name:'Probability',weight:'high'},{name:'Matrices Determinants',weight:'high'},
    {name:'Mathematical Reasoning',weight:'low'},{name:'Statistics',weight:'low'},
  ]
};

function makeChapter(name, weight) {
  return { name, status:'not-started', weight, questions:0, confidence:0,
    subtasks:{ theory:false, exercises:false, pyqs:false, reading:false },
    revisionLink:'', lastRevised:null, completedDate:null,
    revisionSchedule:[], flashcards:[], lecturesTotal:0, lecturesCompleted:0,
    subtopics: (DEFAULT_SUBTOPICS[name]||[]).map(n=>makeSubtopic(n)) };
}

// Real JEE sub-topic breakdowns per chapter — used to auto-populate the Skill Tree.
// You can still add/remove individual sub-topics per chapter from the Skill Tree page.
// NCERT Class 12 (CBSE 2025-26) chapter lists for the Boards tab.
// Separate from the JEE chapter lists above — these track your notebook/NCERT
// completion for board exams specifically.
// NCERT chapter lists for the Boards tab, verified against CBSE 2025-26 rationalised syllabus.
// Physics/Chemistry/Maths are split by class (11 and 12) since both years matter for boards.
// English and P.E. are Class 12 only, per your request.
const BOARDS_CHAPTERS = {
  english: {
    12: [
      'The Last Lesson','Lost Spring','Deep Water','The Rattrap','Indigo',
      'Poets and Pancakes','The Interview','Going Places',
      'My Mother at Sixty-six','An Elementary School Classroom in a Slum','Keeping Quiet','A Thing of Beauty','Aunt Jennifer\'s Tigers',
      'The Third Level','The Tiger King','Journey to the End of the Earth','The Enemy','Should Wizard Hit Mommy','On the Face of It','Evans Tries an O-Level',
      'Memories of Childhood',
    ],
  },
  maths: {
    11: [
      'Sets','Relations and Functions','Trigonometric Functions','Complex Numbers and Quadratic Equations',
      'Linear Inequalities','Permutations and Combinations','Binomial Theorem','Sequences and Series',
      'Straight Lines','Conic Sections','Introduction to Three Dimensional Geometry','Limits and Derivatives',
      'Statistics','Probability',
    ],
    12: [
      'Relations and Functions','Inverse Trigonometric Functions','Matrices','Determinants',
      'Continuity and Differentiability','Application of Derivatives','Integrals','Application of Integrals',
      'Differential Equations','Vector Algebra','Three Dimensional Geometry','Linear Programming','Probability',
    ],
  },
  physics: {
    11: [
      'Units and Measurement','Motion in a Straight Line','Motion in a Plane','Laws of Motion',
      'Work, Energy and Power','System of Particles and Rotational Motion','Gravitation',
      'Mechanical Properties of Solids','Mechanical Properties of Fluids','Thermal Properties of Matter',
      'Thermodynamics','Kinetic Theory','Oscillations','Waves',
    ],
    12: [
      'Electric Charges and Fields','Electrostatic Potential and Capacitance','Current Electricity',
      'Moving Charges and Magnetism','Magnetism and Matter','Electromagnetic Induction','Alternating Current',
      'Electromagnetic Waves','Ray Optics and Optical Instruments','Wave Optics',
      'Dual Nature of Radiation and Matter','Atoms','Nuclei','Semiconductor Electronics',
    ],
  },
  chemistry: {
    11: [
      'Some Basic Concepts of Chemistry','Structure of Atom','Classification of Elements and Periodicity in Properties',
      'Chemical Bonding and Molecular Structure','Chemical Thermodynamics','Equilibrium','Redox Reactions',
      'Organic Chemistry: Some Basic Principles and Techniques','Hydrocarbons',
    ],
    12: [
      'Solutions','Electrochemistry','Chemical Kinetics','d and f Block Elements','Coordination Compounds',
      'Haloalkanes and Haloarenes','Alcohols, Phenols and Ethers','Aldehydes, Ketones and Carboxylic Acids',
      'Amines','Biomolecules',
    ],
  },
  pe: {
    12: [
      'Management of Sporting Events','Children and Women in Sports','Yoga as Preventive Measure',
      'Physical Education and Sports for CWSN','Sports and Nutrition','Test, Measurement and Evaluation',
      'Physiology and Injuries in Sports','Biomechanics and Sports','Psychology and Sports','Training in Sports',
    ],
  },
};

const DEFAULT_SUBTOPICS = {
  // PHYSICS
  'Kinematics': ['1D Motion','2D Motion','Relative Motion','Projectile Motion'],
  'Laws of Motion (NLM)': ['Newton\'s Laws Basics','Friction','Circular Motion Dynamics','Pseudo Force & Constraints'],
  'Work Energy Power': ['Work-Energy Theorem','Conservation of Energy','Power','Collisions'],
  'Centre of Mass': ['COM of Systems','COM of Continuous Bodies','Momentum Conservation','Variable Mass Systems'],
  'Rotational Motion': ['Moment of Inertia','Torque & Angular Momentum','Rolling Motion','Rotational Energy'],
  'Gravitation': ['Newton\'s Law of Gravitation','Gravitational Field & Potential','Satellite Motion','Kepler\'s Laws'],
  'Fluid Mechanics': ['Hydrostatics & Pressure','Buoyancy','Bernoulli\'s Theorem','Viscosity'],
  'Thermodynamics': ['Laws of Thermodynamics','Thermodynamic Processes','Heat Engines','Kinetic Theory of Gases'],
  'Waves & Sound': ['Wave Basics & Equations','Superposition & Standing Waves','Doppler Effect','Beats'],
  'Electrostatics': ['Coulomb\'s Law','Electric Field & Potential','Gauss\'s Law','Capacitors'],
  'Current Electricity': ['Ohm\'s Law & Resistance','Kirchhoff\'s Laws','RC Circuits','Wheatstone Bridge & Meter Bridge'],
  'Magnetic Effects': ['Magnetic Field due to Current','Force on Charges & Current','Ampere\'s Law','Magnetic Materials'],
  'EMI & AC': ['Electromagnetic Induction','Self & Mutual Inductance','AC Circuits','LCR Circuits & Resonance'],
  'Optics': ['Reflection & Mirrors','Refraction & Lenses','Wave Optics & Interference','Diffraction & Polarization'],
  'Modern Physics': ['Photoelectric Effect','Bohr\'s Model & Atomic Spectra','Nuclear Physics','X-Rays & Matter Waves'],
  'Simple Harmonic Motion': ['SHM Basics & Equations','Energy in SHM','Spring-Mass Systems','Pendulums'],
  'Elasticity': ['Stress & Strain','Young\'s Modulus','Elastic Potential Energy'],
  'Surface Tension': ['Surface Tension Basics','Capillarity','Excess Pressure in Drops/Bubbles'],

  // CHEMISTRY
  'Mole Concept': ['Mole & Molar Mass','Empirical & Molecular Formula','Stoichiometry','Equivalent Concept'],
  'Atomic Structure': ['Bohr Model & Spectra','Quantum Numbers','Orbitals & Electronic Configuration','de Broglie & Uncertainty'],
  'Chemical Bonding': ['Ionic & Covalent Bonding','VSEPR Theory','Hybridization','Molecular Orbital Theory'],
  'Thermodynamics (Chem)': ['Laws of Thermodynamics','Enthalpy & Hess\'s Law','Entropy & Gibbs Energy','Thermochemistry'],
  'Equilibrium': ['Chemical Equilibrium Basics','Le Chatelier\'s Principle','Ionic Equilibrium','pH, Buffers & Hydrolysis'],
  'Electrochemistry': ['Electrochemical Cells','Nernst Equation','Conductance','Electrolysis & Faraday\'s Laws'],
  'Chemical Kinetics': ['Rate Laws & Order','Integrated Rate Equations','Arrhenius Equation','Collision Theory'],
  'Coordination Compounds': ['Nomenclature & Isomerism','VBT & CFT','Magnetic Properties','Stability of Complexes'],
  'Organic Basics & IUPAC': ['IUPAC Nomenclature','Isomerism','Reaction Mechanisms Basics','Inductive & Resonance Effects'],
  'Hydrocarbons': ['Alkanes','Alkenes & Alkynes','Aromatic Hydrocarbons','Combustion & Reactions'],
  'Haloalkanes': ['Nomenclature & Preparation','SN1 & SN2 Reactions','Elimination Reactions','Grignard Reagent'],
  'Alcohols Phenols Ethers': ['Preparation Methods','Properties of Alcohols','Properties of Phenols','Ethers'],
  'Aldehydes Ketones': ['Preparation','Nucleophilic Addition Reactions','Aldol & Cannizzaro Reactions','Carboxylic Acids'],
  'Amines': ['Preparation of Amines','Basicity of Amines','Diazonium Salts','Reactions of Amines'],
  'Biomolecules': ['Carbohydrates','Proteins & Amino Acids','Nucleic Acids','Vitamins & Hormones'],
  'Periodic Table & Properties': ['Periodic Trends','Ionization Energy & Electron Affinity','Electronegativity','Periodicity in Properties'],
  'p-Block Elements': ['Group 13 & 14','Group 15 & 16','Group 17 (Halogens)','Group 18 (Noble Gases)'],
  'd & f Block': ['Transition Elements General Trends','Lanthanoids & Actinoids','Color & Magnetic Properties','Important Compounds'],
  'Solutions': ['Concentration Terms','Colligative Properties','Raoult\'s Law','Abnormal Molar Mass'],
  'Solid State': ['Crystal Lattices & Unit Cells','Packing Efficiency','Defects in Solids','Electrical & Magnetic Properties'],
  'Surface Chemistry': ['Adsorption','Catalysis','Colloids','Emulsions'],

  // MATHS
  'Sets Relations Functions': ['Sets & Venn Diagrams','Relations','Functions Basics','Types of Functions'],
  'Trigonometry': ['Trig Ratios & Identities','Trig Equations','Inverse Trig Functions','Properties of Triangles'],
  'Complex Numbers': ['Algebra of Complex Numbers','Argand Plane & Polar Form','De Moivre\'s Theorem','Roots of Complex Numbers'],
  'Quadratic Equations': ['Nature of Roots','Sum & Product of Roots','Quadratic Inequalities','Common Roots'],
  'Sequences & Series': ['Arithmetic Progression','Geometric Progression','AGP & Special Series','Sum to n Terms'],
  'Permutation Combination': ['Fundamental Counting Principle','Permutations','Combinations','Circular Permutations'],
  'Binomial Theorem': ['Binomial Expansion','General & Middle Term','Properties of Binomial Coefficients','Multinomial Theorem'],
  'Straight Lines': ['Slope & Equations of Lines','Angle Between Lines','Distance Formulas','Family of Lines'],
  'Circles': ['Equation of Circle','Tangents & Normals','Family of Circles','Pole & Polar'],
  'Conic Sections': ['Parabola','Ellipse','Hyperbola','Tangents & Normals to Conics'],
  '3D Geometry': ['Direction Cosines & Ratios','Equation of Line in 3D','Equation of Plane','Angle & Distance in 3D'],
  'Vectors': ['Vector Algebra Basics','Dot Product','Cross Product','Scalar & Vector Triple Product'],
  'Limits Continuity': ['Limits Basics','L\'Hopital & Standard Limits','Continuity','Differentiability'],
  'Differentiation': ['Differentiation Rules','Chain Rule','Implicit Differentiation','Applications of Derivatives'],
  'Integration': ['Indefinite Integration','Integration Techniques','Definite Integration','Area Under Curves'],
  'Differential Equations': ['Formation of DEs','Variable Separable Form','Linear Differential Equations','Homogeneous Equations'],
  'Probability': ['Basic Probability','Conditional Probability','Bayes\' Theorem','Probability Distributions'],
  'Matrices Determinants': ['Matrix Algebra','Determinants & Properties','Inverse of a Matrix','Solving Linear Equations'],
  'Mathematical Reasoning': ['Statements & Logical Connectives','Truth Tables','Tautology & Contradiction'],
  'Statistics': ['Mean, Median, Mode','Variance & Standard Deviation','Correlation'],
};

function makeSubtopic(name) {
  return { id:'sub'+Date.now()+Math.random().toString(36).slice(2,7), name, done:false };
}

const REVISION_INTERVALS_DAYS = [1, 3, 7, 14, 30];

function buildRevisionSchedule(completedDateISO) {
  const base = new Date(completedDateISO);
  return REVISION_INTERVALS_DAYS.map(days => {
    const due = new Date(base);
    due.setDate(due.getDate() + days);
    return { daysAfter: days, dueDate: due.toISOString(), done: false, doneDate: null };
  });
}

// ===================== STATE =====================
const STORAGE_KEY = 'studyhub_v2_sohum';

function defaultState() {
  return {
    xp:0, level:1, streak:0, longestStreak:0, lastStudied:null, studiedDays:[],
    joinDate: new Date().toISOString(),
    userName: 'Sohum',
    totalQuestions:0, totalPYQs:0, totalDPPs:0, todayHours:0, comeback:0, bossHp:100, currentBoss:'Kinematics',
    timerRunning:false, selectedSubject:null,
    subjectSeconds:{ physics:0, chemistry:0, maths:0 },
    todaySeconds:0, studyXpToday:0,
    chapters:{
      physics: DEFAULT_CHAPTERS.physics.map(c=>makeChapter(c.name,c.weight)),
      chemistry: DEFAULT_CHAPTERS.chemistry.map(c=>makeChapter(c.name,c.weight)),
      maths: DEFAULT_CHAPTERS.maths.map(c=>makeChapter(c.name,c.weight))
    },
    weeklyHours:[0,0,0,0,0,0,0],
    badges:{},
    dailyTasks:[],
    dailyGoalsChecked: {}, // { goalId: true } — which Daily Goals checkboxes are checked today; resets daily
    dayComplete:false,
    lastDayDate: null,
    coins: 0,
    totalQuestsCompleted: 0,
    dailyQuests: [],
    questsDate: null,
    unlockedItems: ['default_avatar','default_title','default_theme'],
    activeAvatar: '🧑‍🎓',
    activeTitle: 'JEE Aspirant',
    activeTheme: 'default',
    dayHistory: [], // archive of past days: { date, secondsStudied, tasksCompleted, questsCompleted, questsTotal, dayComplete }

    // ===== PHASE 6: LIFESTYLE + VISION =====
    sleepLog: {},   // { 'date string': hoursSlept }
    waterLog: {},   // { 'date string': glassesCount }
    detoxLog: {},   // { 'date string': true } — days marked as a dopamine-detox win (no doomscrolling etc.)
    visionBoard: [], // [{ id, text, icon }]
    futureYouUnlocked: [], // ids of milestone messages already revealed
    avatarEvolutionStage: 0, // auto-progresses with level, independent of shop-bought avatars
    notifications: [], // [{ id, icon, title, message, date, read }]
    climbCurrentStep: 0, // the step the figure is ACTUALLY standing on right now (0-based) — only moves via double-click, even if level has gone higher

    // ===== MOCK TESTS, QUIZZES, FORMULA SHEET, PYQ/DPP =====
    pyqCount: { physics:0, chemistry:0, maths:0 },
    dppCount: { physics:0, chemistry:0, maths:0 },
    mockTests: [], // [{ id, name, date, syllabus, marks:{physics,chemistry,maths}, maxMarks }]
    quizHistory: [], // [{ id, date, mode:'practice'|'timed', difficulty, subject, score, total }]
    monthlyPlans: {}, // { 'YYYY-M': { physics:[chapterName,...4], chemistry:[...4], maths:[...4] } }
    boardsCompleted: { english:{12:{}}, maths:{11:{},12:{}}, physics:{11:{},12:{}}, chemistry:{11:{},12:{}}, pe:{12:{}} }, // { subject: { classYear: { chapterName: {reading:bool, qa:bool} } } }
    boardsNotes: {}, // { 'subject-classYear-chapterName': { reading: '', qa: '' } }
    formulaSheet: [], // [{ id, chapterName, formulas:[{id,text}] }]
  };
}

let state = defaultState(); // placeholder until real data loads from persistent storage
let stateLoaded = false;

const QUEST_POOL = [
  { id:'study_2h', icon:'⏱️', name:'Study 2 hours today', coins:15, target:7200, check:()=>state.todaySeconds },
  { id:'study_4h', icon:'🔥', name:'Study 4 hours today', coins:30, target:14400, check:()=>state.todaySeconds },
  { id:'solve_10', icon:'❓', name:'Solve 10 questions', coins:15, target:10, check:()=>questsSolvedToday },
  { id:'solve_25', icon:'💯', name:'Solve 25 questions', coins:25, target:25, check:()=>questsSolvedToday },
  { id:'complete_chapter', icon:'📖', name:'Mark 1 chapter completed', coins:30, target:1, check:()=>questsChaptersCompletedToday },
  { id:'revise_one', icon:'🧠', name:'Log 1 revision', coins:15, target:1, check:()=>questsRevisionsToday },
  { id:'flashcard_5', icon:'🗂️', name:'Review 5 flashcards', coins:10, target:5, check:()=>questsFlashcardsViewedToday },
  { id:'all_subjects', icon:'⚛️', name:'Study all 3 subjects today', coins:25, target:3, check:()=>questsSubjectsTouchedToday() },
  { id:'log_task', icon:'📝', name:'Log 1 daily task', coins:15, target:1, check:()=>state.dailyTasks.length },
];

// Simple per-day counters for quest progress that aren't already tracked in state
let questsSolvedToday = 0, questsChaptersCompletedToday = 0, questsRevisionsToday = 0, questsFlashcardsViewedToday = 0;
let questsSubjectStartSeconds = { physics:0, chemistry:0, maths:0 };

function questsSubjectsTouchedToday() {
  return ['physics','chemistry','maths'].filter(s => state.subjectSeconds[s] > (questsSubjectStartSeconds[s]||0)).length;
}

function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateDailyQuests() {
  const dateSeed = new Date().toDateString().split('').reduce((a,c)=>a+c.charCodeAt(0),0);
  const pool = [...QUEST_POOL];
  const chosen = [];
  for (let i=0;i<3 && pool.length>0;i++) {
    const idx = Math.floor(seededRandom(dateSeed+i*97) * pool.length);
    chosen.push(pool.splice(idx,1)[0]);
  }
  state.dailyQuests = chosen.map(q=>({ id:q.id, icon:q.icon, name:q.name, coins:q.coins, target:q.target, claimed:false }));
  questsSolvedToday=0; questsChaptersCompletedToday=0; questsRevisionsToday=0; questsFlashcardsViewedToday=0;
  questsSubjectStartSeconds = { physics:state.subjectSeconds.physics, chemistry:state.subjectSeconds.chemistry, maths:state.subjectSeconds.maths };
}

function checkQuestClaims() {
  let anyClaimed = false;
  (state.dailyQuests||[]).forEach(q=>{
    if (q.claimed) return;
    const def = QUEST_POOL.find(d=>d.id===q.id);
    if (!def) return;
    const progress = def.check();
    if (progress >= q.target) {
      q.claimed = true;
      state.coins = (state.coins||0) + q.coins;
      state.totalQuestsCompleted = (state.totalQuestsCompleted||0) + 1;
      showToast('🪙', `Quest complete: ${q.name}! +${q.coins} coins`);
      anyClaimed = true;
    }
  });
  if (anyClaimed) { save(); renderQuests(); checkBadges(); }
}

function renderQuests() {
  const el = document.getElementById('daily-quests-list');
  if (!el) return;
  if (!state.dailyQuests || state.dailyQuests.length===0) { el.innerHTML='<div class="revision-empty">Quests are generating...</div>'; return; }
  el.innerHTML = state.dailyQuests.map(q=>{
    const def = QUEST_POOL.find(d=>d.id===q.id);
    const progress = def ? Math.min(q.target, def.check()) : 0;
    const pct = Math.round((progress/q.target)*100);
    return `<div class="quest-item ${q.claimed?'quest-done':''}">
      <div class="quest-icon">${q.icon}</div>
      <div class="quest-info">
        <div class="quest-name">${q.name}</div>
        <div class="quest-bar-bg"><div class="quest-bar-fill" style="width:${pct}%"></div></div>
      </div>
      <div class="quest-reward">${q.claimed?'✅':'🪙 '+q.coins}</div>
    </div>`;
  }).join('');
  const coinsEl = document.getElementById('nav-coins');
  if (coinsEl) coinsEl.textContent = '🪙 ' + (state.coins||0);
}

// ===================== SHOP =====================
const SHOP_AVATARS = [
  { id:'default_avatar', icon:'🧑‍🎓', name:'Student', price:0 },
  { id:'avatar_warrior', icon:'⚔️', name:'Warrior', price:50 },
  { id:'avatar_wizard', icon:'🧙', name:'Wizard', price:50 },
  { id:'avatar_rocket', icon:'🚀', name:'Rocketeer', price:75 },
  { id:'avatar_fire', icon:'🔥', name:'On Fire', price:75 },
  { id:'avatar_crown', icon:'👑', name:'Royalty', price:150 },
  { id:'avatar_diamond', icon:'💎', name:'Diamond', price:200 },
];
const SHOP_TITLES = [
  { id:'default_title', name:'JEE Aspirant', price:0 },
  { id:'title_warrior', name:'JEE Warrior', price:60 },
  { id:'title_slayer', name:'Chapter Slayer', price:60 },
  { id:'title_comeback', name:'The Comeback Kid', price:100 },
  { id:'title_future_iitian', name:'Future IITian', price:150 },
  { id:'title_legend', name:'Living Legend', price:250 },
];
const SHOP_THEMES = [
  { id:'default_theme', name:'Violet (Default)', price:0, colors:['#7c3aed','#06b6d4'] },
  { id:'theme_crimson', name:'Crimson', price:80, colors:['#ef4444','#f97316'] },
  { id:'theme_emerald', name:'Emerald', price:80, colors:['#10b981','#06b6d4'] },
  { id:'theme_gold', name:'Gold Rush', price:120, colors:['#f59e0b','#eab308'] },
  { id:'theme_ocean', name:'Deep Ocean', price:120, colors:['#0ea5e9','#6366f1'] },
];

function renderShop() {
  document.getElementById('shop-coins-display').textContent = '🪙 ' + (state.coins||0) + ' coins';
  renderShopSection('shop-avatars', SHOP_AVATARS, 'avatar');
  renderShopSection('shop-titles', SHOP_TITLES, 'title');
  renderShopSection('shop-themes', SHOP_THEMES, 'theme');
}

function renderShopSection(elId, items, type) {
  const el = document.getElementById(elId);
  el.innerHTML = items.map(item=>{
    const owned = state.unlockedItems.includes(item.id);
    const isActive = (type==='avatar' && state.activeAvatar===item.icon) ||
                      (type==='title' && state.activeTitle===item.name) ||
                      (type==='theme' && state.activeTheme===item.id);
    const display = type==='theme'
      ? `<div style="width:40px;height:40px;border-radius:50%;margin:0 auto 8px;background:linear-gradient(135deg,${item.colors[0]},${item.colors[1]})"></div>`
      : `<div class="shop-item-icon">${item.icon}</div>`;
    let btn;
    if (isActive) btn = `<button class="shop-item-btn" style="background:var(--accent3);color:#000" disabled>✓ Active</button>`;
    else if (owned) btn = `<button class="shop-item-btn" style="background:var(--accent4);color:#fff" onclick="equipShopItem('${type}','${item.id}')">Equip</button>`;
    else btn = `<button class="shop-item-btn" style="background:var(--surface);color:var(--text);border:1px solid var(--border)" onclick="buyShopItem('${type}','${item.id}')">Buy 🪙${item.price}</button>`;
    return `<div class="shop-item ${owned?'unlocked':''} ${isActive?'active-item':''}">
      ${display}
      <div class="shop-item-name">${type==='theme'?item.name:item.name}</div>
      <div class="shop-item-price">${owned?(isActive?'Active':'Owned'):'🪙 '+item.price}</div>
      ${btn}
    </div>`;
  }).join('');
}

function getShopCatalog(type) {
  return type==='avatar'?SHOP_AVATARS:type==='title'?SHOP_TITLES:SHOP_THEMES;
}

function buyShopItem(type, id) {
  const item = getShopCatalog(type).find(i=>i.id===id);
  if (!item) return;
  if (state.unlockedItems.includes(id)) { showToast('⚠️','Already owned!'); return; }
  if ((state.coins||0) < item.price) { showToast('⚠️','Not enough coins!'); return; }
  state.coins -= item.price;
  state.unlockedItems.push(id);
  equipShopItem(type, id);
  showToast('🛒', `Unlocked: ${item.icon||item.name}!`);
  save();
}

function refreshHeroIdentity() {
  const a = document.getElementById('hero-avatar');
  const t = document.getElementById('hero-title-tag');
  const navIcon = document.getElementById('nav-profile-icon');
  if (a) a.textContent = state.activeAvatar;
  if (t) t.textContent = state.activeTitle;
  if (navIcon) navIcon.textContent = state.activeAvatar || '🧑‍🎓';
}

function equipShopItem(type, id) {
  const item = getShopCatalog(type).find(i=>i.id===id);
  if (!item) return;
  if (type==='avatar') state.activeAvatar = item.icon;
  if (type==='title') state.activeTitle = item.name;
  if (type==='theme') { state.activeTheme = id; applyTheme(item); }
  save(); renderShop(); refreshHeroIdentity();
}

function applyTheme(item) {
  document.documentElement.style.setProperty('--accent', item.colors[0]);
  document.documentElement.style.setProperty('--accent2', item.colors[1]);
}

// ===================== SKILL TREE =====================
let expandedChapterKey = null; // 'physics-0' style key of currently expanded chapter, or null

function chapterMasteryDone(ch) {
  // A chapter counts as "done" for tree coloring purposes if it's marked completed,
  // OR (when it has subtopics defined) if every subtopic is checked off.
  if (ch.subtopics && ch.subtopics.length>0) return ch.subtopics.every(s=>s.done);
  return ch.status==='completed';
}

function renderSkillTree() {
  const container = document.getElementById('skill-tree-container');
  if (!container) return;
  const subjIcon = { physics:'⚛️', chemistry:'🧪', maths:'📐' };
  const subjName = { physics:'Physics', chemistry:'Chemistry', maths:'Maths' };
  container.innerHTML = ['physics','chemistry','maths'].map(subj=>{
    const chapters = state.chapters[subj];
    const doneCount = chapters.filter(c=>chapterMasteryDone(c)).length;
    const pct = chapters.length ? Math.round((doneCount/chapters.length)*100) : 0;
    const nodes = chapters.map((c,i)=>{
      const key = subj+'-'+i;
      const done = chapterMasteryDone(c);
      const hasSubs = c.subtopics && c.subtopics.length>0;
      const subsDoneCount = hasSubs ? c.subtopics.filter(s=>s.done).length : 0;
      const stateClass = done ? 'node-done' : (c.status==='in-progress' || (hasSubs && subsDoneCount>0)) ? 'node-progress' : '';
      const icon = done ? '✓' : (i+1);
      const connector = i < chapters.length-1 ? `<div class="skill-node-connector ${done?'connector-done':''}"></div>` : '';
      const isExpanded = expandedChapterKey===key;
      let subtopicRow = '';
      if (isExpanded) {
        if (hasSubs) {
          const subNodes = c.subtopics.map((s,si)=>`
            <div class="skill-subnode ${s.done?'sub-done':''}" onclick="toggleSubtopic('${subj}',${i},${si})">
              <div class="skill-subnode-dot">${s.done?'✓':''}</div>
              <div class="skill-subnode-label">${s.name}</div>
              <button class="skill-subnode-del" onclick="event.stopPropagation();removeSubtopic('${subj}',${i},${si})">✕</button>
            </div>`).join('');
          subtopicRow = `<div class="skill-subtree">
            ${subNodes}
            <div class="skill-subtopic-add-row">
              <input class="modal-input" id="new-subtopic-${key}" placeholder="Add sub-topic (e.g. Projectile Motion)" style="margin-bottom:0;font-size:0.8rem;padding:8px 10px">
              <button class="btn btn-secondary btn-sm" onclick="addSubtopic('${subj}',${i})">+ Add</button>
            </div>
          </div>`;
        } else {
          subtopicRow = `<div class="skill-subtree">
            <div style="font-size:0.78rem;color:var(--muted);margin-bottom:10px">No sub-topics yet for ${c.name}. Break it down into the topics you actually study (e.g. 1D Motion, 2D Motion, Relative Motion, Projectile Motion).</div>
            <div class="skill-subtopic-add-row">
              <input class="modal-input" id="new-subtopic-${key}" placeholder="Add sub-topic" style="margin-bottom:0;font-size:0.8rem;padding:8px 10px">
              <button class="btn btn-primary btn-sm" onclick="addSubtopic('${subj}',${i})">+ Add</button>
            </div>
          </div>`;
        }
      }
      return `<div class="skill-node-wrap">
        <div class="skill-node ${stateClass}" data-name="${c.name}${hasSubs?' ('+subsDoneCount+'/'+c.subtopics.length+')':''}" onclick="toggleSkillNodeExpand('${key}')">${icon}</div>
        ${connector}
        ${subtopicRow}
      </div>`;
    }).join('');
    return `<div class="skill-tree-subject">
      <div class="skill-tree-header">
        <div style="font-weight:700">${subjIcon[subj]} ${subjName[subj]}</div>
        <div class="skill-tree-pct" style="color:${pct>=75?'var(--accent4)':pct>=40?'var(--accent3)':'var(--muted)'}">${pct}% Mastery (${doneCount}/${chapters.length})</div>
      </div>
      <div class="skill-tree-track">${nodes}</div>
    </div>`;
  }).join('');
}

function toggleSkillNodeExpand(key) {
  expandedChapterKey = (expandedChapterKey===key) ? null : key;
  renderSkillTree();
}

function addSubtopic(subj, idx) {
  const key = subj+'-'+idx;
  const input = document.getElementById('new-subtopic-'+key);
  const name = input.value.trim();
  if (!name) { showToast('⚠️','Type a sub-topic name first!'); return; }
  state.chapters[subj][idx].subtopics.push(makeSubtopic(name));
  save(); renderSkillTree();
}

function removeSubtopic(subj, idx, subIdx) {
  state.chapters[subj][idx].subtopics.splice(subIdx,1);
  reconcileChapterFromSubtopics(subj, idx);
  save(); renderSkillTree(); renderChapters(); updateSubjectStats(); updateMonthYearProgress(); renderRevisionPage();
}

function toggleSubtopic(subj, idx, subIdx) {
  const ch = state.chapters[subj][idx];
  ch.subtopics[subIdx].done = !ch.subtopics[subIdx].done;
  reconcileChapterFromSubtopics(subj, idx);
  save(); renderSkillTree(); renderChapters(); updateSubjectStats(); updateMonthYearProgress(); renderRevisionPage();
}

// Keeps chapter.status in sync with its subtopics: once every subtopic is
// checked off, the chapter auto-completes (same effect as cycling status
// manually — XP, revision schedule, monthly targets, badges all fire).
// If a subtopic gets unchecked afterward, the chapter drops back to in-progress.
function reconcileChapterFromSubtopics(subj, idx) {
  const ch = state.chapters[subj][idx];
  if (!ch.subtopics || ch.subtopics.length===0) return; // no subtopics defined — don't touch status
  const allDone = ch.subtopics.every(s=>s.done);
  const anyDone = ch.subtopics.some(s=>s.done);
  if (allDone && ch.status!=='completed') {
    ch.status = 'completed';
    ch.lastRevised = new Date().toLocaleDateString();
    if (!ch.completedDate) {
      // First-ever full mastery of this chapter — award XP once. completedDate
      // is never cleared after this, so unchecking/rechecking subtopics later
      // can re-trigger 'completed' status without re-paying the XP.
      addXP(100);
      ch.completedDate = new Date().toISOString();
      ch.revisionSchedule = buildRevisionSchedule(ch.completedDate);
      questsChaptersCompletedToday++;
      checkQuestClaims();
      showToast('🌳', `${ch.name} fully mastered! +100 XP`);
    } else {
      showToast('🌳', `${ch.name} fully mastered again (already earned XP for this one).`);
    }
  } else if (!allDone && ch.status==='completed') {
    ch.status = anyDone ? 'in-progress' : 'not-started';
    ch.revisionSchedule = [];
  } else if (anyDone && ch.status==='not-started') {
    ch.status = 'in-progress';
  }
}


// ===== LIFESTYLE TRACKER =====
function todayKey() { return new Date().toDateString(); }

function adjustSleep(delta) {
  const key = todayKey();
  const current = state.sleepLog[key] || 0;
  state.sleepLog[key] = Math.max(0, Math.min(14, current + delta));
  document.getElementById('sleep-value').textContent = state.sleepLog[key];
  save();
}

function adjustWater(delta) {
  const key = todayKey();
  const current = state.waterLog[key] || 0;
  state.waterLog[key] = Math.max(0, Math.min(20, current + delta));
  document.getElementById('water-value').textContent = state.waterLog[key];
  if (state.waterLog[key] >= 8 && current < 8) { addXP(10); showToast('💧','8 glasses! +10 XP for staying hydrated'); }
  save();
}

function toggleDetox() {
  const key = todayKey();
  const isMarked = !!state.detoxLog[key];
  if (isMarked) { delete state.detoxLog[key]; }
  else { state.detoxLog[key] = true; addXP(20); showToast('📵','Clean day logged! +20 XP'); }
  renderLifestyleWidget();
  save();
}

// ===== PYQ / DPP TRACKER =====
function adjustPyq(subj, delta) {
  state.pyqCount[subj] = Math.max(0, (state.pyqCount[subj]||0) + delta);
  questsSolvedToday += delta>0 ? 1 : 0;
  renderPyqDppWidget();
  checkQuestClaims();
  save();
}

function adjustDpp(subj, delta) {
  state.dppCount[subj] = Math.max(0, (state.dppCount[subj]||0) + delta);
  questsSolvedToday += delta>0 ? 1 : 0;
  renderPyqDppWidget();
  checkQuestClaims();
  save();
}

function renderPyqDppWidget() {
  let total = 0;
  ['physics','chemistry','maths'].forEach(s=>{
    const pyqEl = document.getElementById('pyq-'+s);
    const dppEl = document.getElementById('dpp-'+s);
    if (pyqEl) pyqEl.textContent = state.pyqCount[s]||0;
    if (dppEl) dppEl.textContent = state.dppCount[s]||0;
    total += (state.pyqCount[s]||0) + (state.dppCount[s]||0);
  });
  const totalEl = document.getElementById('pyq-dpp-total');
  if (totalEl) totalEl.textContent = total;
}

// ===== MOCK TEST DASHBOARD =====
function addMockTest() {
  const name = document.getElementById('mock-name').value.trim();
  const date = document.getElementById('mock-date').value || new Date().toISOString().slice(0,10);
  const syllabus = document.getElementById('mock-syllabus').value.trim();
  const phy = parseFloat(document.getElementById('mock-phy').value) || 0;
  const chem = parseFloat(document.getElementById('mock-chem').value) || 0;
  const math = parseFloat(document.getElementById('mock-math').value) || 0;
  const maxMarks = parseFloat(document.getElementById('mock-max').value) || 300;
  if (!name) { showToast('⚠️','Give the test a name first!'); return; }
  state.mockTests.push({ id:'mock'+Date.now(), name, date, syllabus, marks:{physics:phy,chemistry:chem,maths:math}, maxMarks });
  state.mockTests.sort((a,b)=>new Date(a.date)-new Date(b.date));
  ['mock-name','mock-date','mock-syllabus','mock-phy','mock-chem','mock-math','mock-max'].forEach(id=>document.getElementById(id).value='');
  addXP(40);
  showToast('📊','Mock test logged! +40 XP');
  save(); renderMockTests();
}

function deleteMockTest(id) {
  state.mockTests = state.mockTests.filter(m=>m.id!==id);
  save(); renderMockTests();
}

function renderMockTests() {
  const listEl = document.getElementById('mock-test-list');
  if (state.mockTests.length===0) {
    listEl.innerHTML = '<div class="revision-empty">No mock tests logged yet. Add your first one above.</div>';
  } else {
    listEl.innerHTML = state.mockTests.slice().reverse().map(m=>{
      const total = m.marks.physics+m.marks.chemistry+m.marks.maths;
      const pct = Math.round((total/m.maxMarks)*100);
      return `<div class="card mb-16">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div>
            <div style="font-weight:700;font-size:0.9rem">${m.name}</div>
            <div style="font-size:0.72rem;color:var(--muted);margin-bottom:8px">${new Date(m.date).toLocaleDateString()}</div>
          </div>
          <div style="text-align:right">
            <div style="font-family:'Orbitron',monospace;font-weight:700;font-size:1.1rem;color:${pct>=70?'var(--accent4)':pct>=50?'var(--accent3)':'var(--danger)'}">${total}/${m.maxMarks}</div>
            <div style="font-size:0.7rem;color:var(--muted)">${pct}%</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:10px 0;font-size:0.78rem;text-align:center;color:var(--muted)">
          <div>⚛️ ${m.marks.physics}</div><div>🧪 ${m.marks.chemistry}</div><div>📐 ${m.marks.maths}</div>
        </div>
        ${m.syllabus?`<div style="font-size:0.72rem;color:var(--muted);border-top:1px solid var(--border);padding-top:8px;margin-top:6px">📋 Syllabus: ${m.syllabus}</div>`:''}
        <button class="skill-subnode-del" style="margin-top:8px" onclick="deleteMockTest('${m.id}')">🗑️ Delete</button>
      </div>`;
    }).join('');
  }
  renderMockTrendChart();
  renderMockPredictor();
}

function renderMockTrendChart() {
  if (charts.mock) charts.mock.destroy();
  const canvas = document.getElementById('mockTrendChart');
  if (!canvas) return;
  const tests = state.mockTests;
  const cd = {plugins:{legend:{labels:{color:'#94a3b8',font:{family:'Inter'}}}}};
  charts.mock = new Chart(canvas, {
    type:'line',
    data:{
      labels: tests.map(m=>new Date(m.date).toLocaleDateString('default',{month:'short',day:'numeric'})),
      datasets:[{
        label:'Score %',
        data: tests.map(m=>Math.round(((m.marks.physics+m.marks.chemistry+m.marks.maths)/m.maxMarks)*100)),
        borderColor:'#7c3aed', backgroundColor:'rgba(124,58,237,0.15)', fill:true, tension:0.3,
      }]
    },
    options:{...cd, scales:{x:{ticks:{color:'#64748b'},grid:{color:'#1e1e2e'}},y:{ticks:{color:'#64748b'},grid:{color:'#1e1e2e'},min:0,max:100}}}
  });
}

function renderMockPredictor() {
  const el = document.getElementById('mock-predictor-card');
  const tests = state.mockTests;
  if (tests.length<2) { el.innerHTML = '<div class="revision-empty">Log at least 2 mock tests to see a trend-based prediction.</div>'; return; }
  const pcts = tests.map(m=>((m.marks.physics+m.marks.chemistry+m.marks.maths)/m.maxMarks)*100);
  // Simple linear regression over test index to project trend toward JEE date
  const n = pcts.length;
  const xMean = (n-1)/2, yMean = pcts.reduce((a,b)=>a+b,0)/n;
  let num=0, den=0;
  pcts.forEach((y,x)=>{ num += (x-xMean)*(y-yMean); den += (x-xMean)**2; });
  const slope = den===0 ? 0 : num/den;
  const daysSinceFirst = (new Date(tests[n-1].date) - new Date(tests[0].date)) / (1000*60*60*24) || 1;
  const testsPerDay = n / Math.max(1,daysSinceFirst);
  const jee = new Date('2027-01-15');
  const daysRemaining = Math.max(0,(jee-new Date())/(1000*60*60*24));
  const projectedTestsRemaining = Math.round(testsPerDay * daysRemaining);
  const projectedPct = Math.max(0, Math.min(100, pcts[n-1] + slope * projectedTestsRemaining));
  const trendIcon = slope>0.5 ? '📈' : slope<-0.5 ? '📉' : '➡️';
  el.innerHTML = `
    <div style="text-align:center">
      <div style="font-size:0.78rem;color:var(--muted);margin-bottom:6px">Projected score by JEE (based on your trend)</div>
      <div style="font-family:'Orbitron',monospace;font-weight:700;font-size:1.8rem;color:var(--accent3)">${projectedPct.toFixed(1)}%</div>
      <div style="font-size:0.8rem;color:var(--muted);margin-top:6px">${trendIcon} Trend: ${slope>0?'+':''}${slope.toFixed(1)}% per test</div>
      <div style="font-size:0.72rem;color:var(--muted);margin-top:10px">This is a simple trend projection from your own ${n} mocks — not an official prediction. Keep logging tests for a more accurate picture.</div>
    </div>`;
}

// ===== QUIZ QUESTION BANK =====
// q: question text, options: 4 choices, correct: index (0-3)
const QUIZ_BANK = {
  physics: {
    easy: [
      {chapter:'Laws of Motion (NLM)', q:'What is the SI unit of force?', options:['Joule','Newton','Watt','Pascal'], correct:1},
      {chapter:'Laws of Motion (NLM)', q:'A body at rest has zero:', options:['Mass','Velocity','Weight','Volume'], correct:1},
      {chapter:'Gravitation', q:'Acceleration due to gravity on Earth is approximately:', options:['8.9 m/s²','9.8 m/s²','10.8 m/s²','11.2 m/s²'], correct:1},
      {chapter:'Kinematics', q:'Which quantity is a vector?', options:['Speed','Distance','Displacement','Energy'], correct:2},
      {chapter:'Current Electricity', q:'The SI unit of power is:', options:['Joule','Newton','Watt','Pascal'], correct:2},
      {chapter:'Work Energy Power', q:'Work done is zero when force and displacement are:', options:['Parallel','Perpendicular','Opposite','Equal'], correct:1},
      {chapter:'Fluid Mechanics', q:'The SI unit of pressure is:', options:['Newton','Pascal','Joule','Watt'], correct:1},
      {chapter:'Fluid Mechanics', q:'Which has the highest density?', options:['Wood','Water','Iron','Air'], correct:2},
      {chapter:'Waves & Sound', q:'The unit of frequency is:', options:['Second','Hertz','Meter','Newton'], correct:1},
      {chapter:'Kinematics', q:'A freely falling object has acceleration that is:', options:['Zero','Constant','Increasing','Decreasing'], correct:1},
      {chapter:'Kinematics', q:'Mass is measured in:', options:['Newton','Kilogram','Joule','Watt'], correct:1},
      {chapter:'Kinematics', q:'Which of these is a scalar quantity?', options:['Velocity','Force','Speed','Acceleration'], correct:2},
      {chapter:'Laws of Motion (NLM)', q:'The reaction force in Newton\'s third law is:', options:['Equal and same direction','Equal and opposite direction','Smaller and opposite','Larger and same direction'], correct:1},
      {chapter:'Waves & Sound', q:'Sound cannot travel through:', options:['Air','Water','Vacuum','Solids'], correct:2},
      {chapter:'Work Energy Power', q:'The energy possessed by a moving object is called:', options:['Potential energy','Kinetic energy','Heat energy','Chemical energy'], correct:1},
      {chapter:'Centre of Mass', q:'The centre of mass of two equal masses lies:', options:['Closer to one mass','At either mass','Exactly midway','Outside the system'], correct:2},
      {chapter:'Electrostatics', q:'Like charges:', options:['Attract each other','Repel each other','Have no effect','Cancel out'], correct:1},
      {chapter:'EMI & AC', q:'The phenomenon of generating EMF due to changing magnetic flux is called:', options:['Polarization','Electromagnetic induction','Refraction','Diffraction'], correct:1},
      {chapter:'Elasticity', q:'A material that returns to its original shape after the force is removed is called:', options:['Plastic','Elastic','Rigid','Brittle'], correct:1},
      {chapter:'Surface Tension', q:'Surface tension is the property of a liquid due to which it behaves like a:', options:['Solid','Stretched membrane','Gas','Plasma'], correct:1},
    ],
    mid: [
      {chapter:'Kinematics', q:'A ball is thrown vertically up with speed u. Time to reach max height is:', options:['u/g','2u/g','u/2g','g/u'], correct:0},
      {chapter:'Kinematics', q:'For a body in uniform circular motion, which is constant?', options:['Velocity','Speed','Acceleration direction','Displacement'], correct:1},
      {chapter:'Rotational Motion', q:'The moment of inertia of a ring about its axis is:', options:['MR²','½MR²','⅖MR²','⅔MR²'], correct:0},
      {chapter:'Work Energy Power', q:'In an elastic collision between equal masses (one initially at rest), the moving mass:', options:['Stops','Continues at same speed','Reverses direction','Doubles speed'], correct:0},
      {chapter:'Work Energy Power', q:'The work-energy theorem states that work done equals:', options:['Change in momentum','Change in kinetic energy','Change in potential energy','Change in force'], correct:1},
      {chapter:'Simple Harmonic Motion', q:'A spring obeys Hooke\'s law when force is:', options:['Proportional to extension','Inversely proportional to extension','Constant','Proportional to extension squared'], correct:0},
      {chapter:'Gravitation', q:'The escape velocity from Earth is approximately:', options:['7.9 km/s','9.8 km/s','11.2 km/s','15 km/s'], correct:2},
      {chapter:'Simple Harmonic Motion', q:'A body in SHM has maximum acceleration at:', options:['Mean position','Extreme position','Quarter position','It is always constant'], correct:1},
      {chapter:'Fluid Mechanics', q:'The buoyant force on a floating object equals:', options:['Weight of object','Weight of displaced fluid','Volume of object','Density of fluid'], correct:1},
      {chapter:'Kinematics', q:'For a projectile, the range is maximum at launch angle:', options:['30°','45°','60°','90°'], correct:1},
      {chapter:'Current Electricity', q:'The power dissipated in a resistor R carrying current I is:', options:['IR','I²R','I/R','I²/R'], correct:1},
      {chapter:'Optics', q:'In Young\'s double slit experiment, fringe width is proportional to:', options:['Wavelength','1/Wavelength','Slit width','Slit separation'], correct:0},
      {chapter:'Centre of Mass', q:'For an isolated system with no external force, the velocity of centre of mass:', options:['Always increases','Always decreases','Remains constant','Becomes zero'], correct:2},
      {chapter:'Electrostatics', q:'The electric field due to an infinite line charge varies with distance r as:', options:['1/r','1/r²','r','constant'], correct:0},
      {chapter:'EMI & AC', q:'Lenz\'s law is a consequence of conservation of:', options:['Charge','Momentum','Energy','Mass'], correct:2},
      {chapter:'Surface Tension', q:'The excess pressure inside a liquid drop of radius r is given by:', options:['2T/r','T/r','4T/r','T/2r'], correct:0},
    ],
    hard: [
      {chapter:'Kinematics', q:'A particle moves such that its position is x = t³ - 6t² + 9t. At what time is velocity zero?', options:['t=1,3','t=0,2','t=1,2','t=2,3'], correct:0},
      {chapter:'Rotational Motion', q:'A disc and a ring of same mass and radius roll down an incline. Which reaches the bottom first?', options:['Disc','Ring','Both together','Depends on incline angle'], correct:0},
      {chapter:'Laws of Motion (NLM)', q:'In a system of two blocks connected by a string over a pulley (Atwood machine) with masses m1>m2, the acceleration is:', options:['(m1-m2)g/(m1+m2)','(m1+m2)g/(m1-m2)','m1g/m2','g'], correct:0},
      {chapter:'Magnetic Effects', q:'A charged particle moves in a magnetic field B with velocity v perpendicular to B. Its path is:', options:['Straight line','Parabola','Circle','Ellipse'], correct:2},
      {chapter:'Gravitation', q:'For a satellite in circular orbit, if radius is doubled, orbital speed becomes:', options:['Same','Half','1/√2 times','√2 times'], correct:2},
      {chapter:'Electrostatics', q:'Two capacitors C and 2C are connected in series then in parallel. The ratio of equivalent capacitances (series:parallel) is:', options:['1:4.5','2:3','1:9','2:9'], correct:2},
      {chapter:'Laws of Motion (NLM)', q:'A ladder leans against a wall in equilibrium. The friction force at the wall acts:', options:['Always upward','Always downward','Depends on the normal forces','Zero if wall is frictionless'], correct:3},
      {chapter:'Thermodynamics', q:'In a Carnot engine operating between 400K and 300K, the efficiency is:', options:['25%','75%','33%','50%'], correct:0},
      {chapter:'Optics', q:'A convex lens of focal length f produces a real image when object distance is:', options:['Less than f','Equal to f','Greater than f','Equal to 2f only'], correct:2},
      {chapter:'Modern Physics', q:'The de Broglie wavelength of a particle is inversely proportional to its:', options:['Charge','Mass','Momentum','Energy'], correct:2},
      {chapter:'Centre of Mass', q:'The centre of mass of a uniform rod lies at:', options:['One end','Midpoint','Quarter point','Depends on material'], correct:1},
      {chapter:'Electrostatics', q:'Electric field inside a charged conductor in equilibrium is:', options:['Maximum','Zero','Equal to surface field','Infinite'], correct:1},
      {chapter:'EMI & AC', q:'In a purely inductive AC circuit, current:', options:['Leads voltage by 90°','Lags voltage by 90°','Is in phase with voltage','Leads by 45°'], correct:1},
      {chapter:'Elasticity', q:'Young\'s modulus is defined as the ratio of:', options:['Stress to strain','Strain to stress','Force to area','Force to extension'], correct:0},
    ],
  },
  chemistry: {
    easy: [
      {chapter:'Atomic Structure', q:'The atomic number of an element represents the number of:', options:['Neutrons','Protons','Electrons + Neutrons','Protons + Neutrons'], correct:1},
      {chapter:'Periodic Table & Properties', q:'Which is a noble gas?', options:['Nitrogen','Oxygen','Argon','Hydrogen'], correct:2},
      {chapter:'Equilibrium', q:'The pH of a neutral solution at 25°C is:', options:['0','7','14','1'], correct:1},
      {chapter:'Thermodynamics (Chem)', q:'Which of these is an exothermic process?', options:['Melting ice','Boiling water','Combustion','Sublimation of dry ice'], correct:2},
      {chapter:'Mole Concept', q:'The chemical formula of table salt is:', options:['NaOH','NaCl','KCl','CaCl₂'], correct:1},
      {chapter:'Atomic Structure', q:'Isotopes of an element have the same number of:', options:['Neutrons','Protons','Nucleons','Mass number'], correct:1},
      {chapter:'p-Block Elements', q:'Which gas is most abundant in Earth\'s atmosphere?', options:['Oxygen','Carbon dioxide','Nitrogen','Argon'], correct:2},
      {chapter:'d & f Block', q:'The chemical symbol for gold is:', options:['Go','Gd','Au','Ag'], correct:2},
      {chapter:'Equilibrium', q:'Which of these is an acid?', options:['NaOH','HCl','KOH','NH₃'], correct:1},
      {chapter:'Equilibrium', q:'A solution with pH less than 7 is:', options:['Basic','Neutral','Acidic','Amphoteric'], correct:2},
      {chapter:'Atomic Structure', q:'The number of electrons in a neutral hydrogen atom is:', options:['0','1','2','3'], correct:1},
      {chapter:'d & f Block', q:'Which is a metal?', options:['Sulfur','Carbon','Iron','Oxygen'], correct:2},
      {chapter:'Electrochemistry', q:'Rusting of iron is an example of:', options:['Reduction','Oxidation','Sublimation','Neutralization'], correct:1},
      {chapter:'Periodic Table & Properties', q:'The most electronegative element is:', options:['Oxygen','Fluorine','Chlorine','Nitrogen'], correct:1},
      {chapter:'Periodic Table & Properties', q:'Which has the smallest atomic radius?', options:['Na','Mg','Al','Cl'], correct:3},
      {chapter:'Solutions', q:'A solution containing the maximum amount of solute at a given temperature is called:', options:['Dilute','Saturated','Unsaturated','Supersaturated'], correct:1},
      {chapter:'Coordination Compounds', q:'In [Cu(NH₃)₄]²⁺, NH₃ acts as a:', options:['Ligand','Counter ion','Solvent','Catalyst'], correct:0},
      {chapter:'Aldehydes Ketones', q:'Aldehydes and ketones both contain which functional group?', options:['Hydroxyl','Carbonyl','Carboxyl','Amino'], correct:1},
      {chapter:'Amines', q:'Amines are derivatives of:', options:['Ammonia','Water','Methane','Benzene'], correct:0},
      {chapter:'Biomolecules', q:'Which of these is a carbohydrate?', options:['Glucose','Glycine','Cholesterol','Insulin'], correct:0},
      {chapter:'Surface Chemistry', q:'The phenomenon of accumulation of a substance at a surface is called:', options:['Absorption','Adsorption','Diffusion','Osmosis'], correct:1},
    ],
    mid: [
      {chapter:'Chemical Bonding', q:'According to VSEPR theory, the shape of NH₃ molecule is:', options:['Linear','Trigonal planar','Pyramidal','Tetrahedral'], correct:2},
      {chapter:'Periodic Table & Properties', q:'Which has the highest first ionization energy?', options:['Na','Mg','Al','Cl'], correct:3},
      {chapter:'Chemical Bonding', q:'The hybridization of carbon in ethyne (C₂H₂) is:', options:['sp','sp²','sp³','sp³d'], correct:0},
      {chapter:'Chemical Kinetics', q:'For a first order reaction, the unit of rate constant k is:', options:['mol L⁻¹ s⁻¹','s⁻¹','L mol⁻¹ s⁻¹','mol² L⁻² s⁻¹'], correct:1},
      {chapter:'p-Block Elements', q:'Which is the strongest acid among the following?', options:['HF','HCl','HBr','HI'], correct:3},
      {chapter:'d & f Block', q:'The oxidation state of Mn in KMnO₄ is:', options:['+5','+6','+7','+4'], correct:2},
      {chapter:'Chemical Bonding', q:'Which is an example of a Lewis acid?', options:['NH₃','BF₃','H₂O','OH⁻'], correct:1},
      {chapter:'Chemical Bonding', q:'The number of sigma and pi bonds in CO₂ are:', options:['2σ, 2π','1σ, 3π','3σ, 1π','4σ, 0π'], correct:0},
      {chapter:'Hydrocarbons', q:'Which of these shows maximum boiling point due to hydrogen bonding?', options:['CH₄','NH₃','H₂O','HF'], correct:2},
      {chapter:'Equilibrium', q:'The conjugate base of H₂O is:', options:['H₃O⁺','OH⁻','H⁺','O²⁻'], correct:1},
      {chapter:'d & f Block', q:'Which element shows maximum number of oxidation states?', options:['Fe','Mn','Cr','Cu'], correct:1},
      {chapter:'Mole Concept', q:'For an ideal gas, PV=nRT. If T is doubled at constant P, V becomes:', options:['Same','Half','Double','Quadruple'], correct:2},
      {chapter:'Solutions', q:'According to Raoult\'s law, the relative lowering of vapor pressure equals:', options:['Mole fraction of solvent','Mole fraction of solute','Molarity of solute','Molality of solute'], correct:1},
      {chapter:'Coordination Compounds', q:'The coordination number of Co in [Co(NH₃)₆]³⁺ is:', options:['4','6','8','2'], correct:1},
      {chapter:'Aldehydes Ketones', q:'The Cannizzaro reaction occurs with aldehydes that:', options:['Have alpha hydrogen','Lack alpha hydrogen','Are aromatic only','Are unsaturated only'], correct:1},
      {chapter:'Amines', q:'Aniline is a weaker base than methylamine because:', options:['Of resonance delocalizing the lone pair','Of higher molecular weight','It is aromatic','It has no lone pair'], correct:0},
      {chapter:'Biomolecules', q:'Proteins are polymers of:', options:['Glucose units','Amino acids','Fatty acids','Nucleotides'], correct:1},
      {chapter:'Surface Chemistry', q:'Physisorption, unlike chemisorption, is characterized by:', options:['High enthalpy of adsorption','Irreversibility','Low enthalpy of adsorption','Monolayer formation only'], correct:2},
    ],
    hard: [
      {chapter:'Haloalkanes', q:'In the reaction sequence, which carbocation is most stable?', options:['Methyl','Primary','Secondary','Tertiary'], correct:3},
      {chapter:'d & f Block', q:'The number of unpaired electrons in Fe³⁺ (d⁵) high spin configuration is:', options:['1','3','5','0'], correct:2},
      {chapter:'Equilibrium', q:'For the equilibrium N₂+3H₂⇌2NH₃, increasing pressure shifts equilibrium toward:', options:['Reactants','Products','No change','Depends on temperature'], correct:1},
      {chapter:'Organic Basics & IUPAC', q:'Which compound shows optical isomerism?', options:['CH₃CH₂OH','CH₃CHClCOOH','CH₃COOH','CH₃CH₃'], correct:1},
      {chapter:'Atomic Structure', q:'The de Broglie wavelength of an electron accelerated through potential V is proportional to:', options:['V','1/V','√V','1/√V'], correct:3},
      {chapter:'Solid State', q:'Which has the highest lattice energy?', options:['NaCl','MgO','KCl','CaO'], correct:1},
      {chapter:'Haloalkanes', q:'In SN1 reaction, the rate depends on:', options:['Concentration of substrate only','Concentration of nucleophile only','Both substrate and nucleophile','Neither'], correct:0},
      {chapter:'Alcohols Phenols Ethers', q:'The IUPAC name of CH₃-CH(OH)-CH₃ is:', options:['Propan-1-ol','Propan-2-ol','Propanal','Propanoic acid'], correct:1},
      {chapter:'d & f Block', q:'Which has maximum magnetic moment?', options:['Sc³⁺','Ti³⁺','V³⁺','Cr³⁺'], correct:3},
      {chapter:'Electrochemistry', q:'The number of moles of KMnO₄ needed to oxidize 1 mole of Fe²⁺ to Fe³⁺ in acidic medium is:', options:['1/5','1','5','1/3'], correct:0},
      {chapter:'Solutions', q:'For a binary solution showing positive deviation from Raoult\'s law, the boiling point:', options:['Increases','Decreases','Remains same','Cannot be determined'], correct:1},
      {chapter:'Coordination Compounds', q:'According to crystal field theory, the splitting in an octahedral field is denoted by Δ₀. For a tetrahedral field, Δₜ equals approximately:', options:['Δ₀','(4/9)Δ₀','2Δ₀','(9/4)Δ₀'], correct:1},
      {chapter:'Aldehydes Ketones', q:'In the haloform reaction, acetaldehyde reacts with excess NaOH/I₂ to give:', options:['Iodoform','Acetic acid','Acetone','Ethanol'], correct:0},
      {chapter:'Amines', q:'The Hinsberg test distinguishes between primary, secondary, and tertiary amines based on:', options:['Solubility in water','Reaction with benzenesulfonyl chloride','Boiling point','Color change with FeCl₃'], correct:1},
      {chapter:'Biomolecules', q:'The secondary structure of proteins is stabilized mainly by:', options:['Ionic bonds','Hydrogen bonds','Disulfide bonds','Van der Waals forces'], correct:1},
    ],
  },
  maths: {
    easy: [
      {chapter:'Trigonometry', q:'The value of sin(90°) is:', options:['0','1','-1','undefined'], correct:1},
      {chapter:'Straight Lines', q:'If a line has slope 0, it is:', options:['Vertical','Horizontal','Diagonal','Undefined'], correct:1},
      {chapter:'Differentiation', q:'The derivative of x² is:', options:['x','2x','x²','2'], correct:1},
      {chapter:'Sequences & Series', q:'The sum of first n natural numbers is:', options:['n(n+1)','n(n+1)/2','n²','n(n-1)/2'], correct:1},
      {chapter:'Permutation Combination', q:'How many ways can 3 people be arranged in a row?', options:['3','6','9','1'], correct:1},
      {chapter:'Complex Numbers', q:'The value of i² (where i=√-1) is:', options:['1','-1','i','0'], correct:1},
      {chapter:'Trigonometry', q:'The value of cos(0°) is:', options:['0','1','-1','undefined'], correct:1},
      {chapter:'Sets Relations Functions', q:'If f(x)=x+5, then f(0) equals:', options:['0','5','-5','1'], correct:1},
      {chapter:'Straight Lines', q:'The number of diagonals in a pentagon is:', options:['3','5','7','10'], correct:1},
      {chapter:'Quadratic Equations', q:'The roots of x²-4=0 are:', options:['±1','±2','±4','0,4'], correct:1},
      {chapter:'Differentiation', q:'log(1) equals:', options:['0','1','10','undefined'], correct:0},
      {chapter:'Straight Lines', q:'The slope of a line parallel to the x-axis is:', options:['Undefined','0','1','-1'], correct:1},
      {chapter:'Permutation Combination', q:'5! (5 factorial) equals:', options:['20','60','120','24'], correct:2},
      {chapter:'Straight Lines', q:'The midpoint of (0,0) and (4,6) is:', options:['(2,3)','(4,6)','(1,1.5)','(2,6)'], correct:0},
      {chapter:'Probability', q:'If P(A)=0.5, then P(not A) equals:', options:['0','0.5','1','-0.5'], correct:1},
      {chapter:'3D Geometry', q:'The distance of a point (x,y,z) from the origin is:', options:['x+y+z','√(x²+y²+z²)','x²+y²+z²','xyz'], correct:1},
      {chapter:'Vectors', q:'The magnitude of vector (3,4,0) is:', options:['3','4','5','7'], correct:2},
      {chapter:'Mathematical Reasoning', q:'The negation of the statement "It is raining" is:', options:['It is sunny','It is not raining','It might rain','It was raining'], correct:1},
      {chapter:'Statistics', q:'The mean of 2, 4, 6, 8, 10 is:', options:['5','6','7','8'], correct:1},
    ],
    mid: [
      {chapter:'Quadratic Equations', q:'The number of real roots of x²+1=0 is:', options:['0','1','2','Infinite'], correct:0},
      {chapter:'Integration', q:'∫x dx equals:', options:['x','x²','x²/2 + C','2x + C'], correct:2},
      {chapter:'Circles', q:'The eccentricity of a circle is:', options:['0','1','>1','<0'], correct:0},
      {chapter:'Probability', q:'If A and B are independent events, P(A∩B) equals:', options:['P(A)+P(B)','P(A)-P(B)','P(A)×P(B)','P(A)/P(B)'], correct:2},
      {chapter:'Binomial Theorem', q:'The number of terms in the expansion of (x+y)ⁿ is:', options:['n','n+1','n-1','2n'], correct:1},
      {chapter:'Differential Equations', q:'The general solution of dy/dx = y is:', options:['y=Ce^x','y=Cx','y=Ce^-x','y=x+C'], correct:0},
      {chapter:'Straight Lines', q:'The distance between points (1,2) and (4,6) is:', options:['3','4','5','7'], correct:2},
      {chapter:'Permutation Combination', q:'The number of ways to choose 2 items from 5 distinct items is:', options:['10','20','5','15'], correct:0},
      {chapter:'Trigonometry', q:'If tan θ = 1, then θ equals (in first quadrant):', options:['30°','45°','60°','90°'], correct:1},
      {chapter:'Sequences & Series', q:'The sum to infinity of a GP with first term a and ratio r (|r|<1) is:', options:['a/(1-r)','a/(1+r)','a(1-r)','ar'], correct:0},
      {chapter:'Differentiation', q:'The derivative of sin(x) is:', options:['cos(x)','-cos(x)','-sin(x)','tan(x)'], correct:0},
      {chapter:'Sets Relations Functions', q:'The number of solutions of |x|=3 is:', options:['1','2','0','3'], correct:1},
      {chapter:'3D Geometry', q:'Two lines with direction ratios (1,2,3) and (2,4,6) are:', options:['Perpendicular','Parallel','Skew','Intersecting at origin only'], correct:1},
      {chapter:'Vectors', q:'If a·b = 0 for nonzero vectors a and b, they are:', options:['Parallel','Perpendicular','Equal','Opposite'], correct:1},
      {chapter:'Mathematical Reasoning', q:'A statement that is always true regardless of truth values is called a:', options:['Contradiction','Tautology','Contingency','Negation'], correct:1},
      {chapter:'Statistics', q:'The variance of a data set measures:', options:['Central tendency','Spread of data','Total of data','Mode of data'], correct:1},
    ],
    hard: [
      {chapter:'Complex Numbers', q:'If z = x+iy and |z-1| = |z+1|, the locus of z is:', options:['x-axis','y-axis','Circle','Parabola'], correct:1},
      {chapter:'Permutation Combination', q:'The number of ways to select 3 letters from the word "EQUATION" such that at least one vowel is included:', options:['56','52','50','54'], correct:0},
      {chapter:'Conic Sections', q:'The equation of the tangent to the parabola y²=4ax at point (at², 2at) is:', options:['ty=x+at²','x=ty+at²','ty=x-at²','x+ty=at²'], correct:0},
      {chapter:'Limits Continuity', q:'lim(x→0) (sin3x)/x equals:', options:['1','3','0','1/3'], correct:1},
      {chapter:'Integration', q:'The area enclosed by |x|+|y|=1 is:', options:['1','2','4','√2'], correct:1},
      {chapter:'Straight Lines', q:'If the lines 2x+3y=5 and 3x-2y=7 are perpendicular condition check: their product of slopes is:', options:['1','-1','0','undefined'], correct:1},
      {chapter:'Permutation Combination', q:'The number of ways to arrange the letters of "MISSISSIPPI" is:', options:['11!/(4!4!2!)','11!','11!/4!','11!/(4!2!)'], correct:0},
      {chapter:'Differential Equations', q:'The differential equation of all circles passing through origin with centers on x-axis is:', options:['(x²-y²)dy=2xy dx','y²dx=2xy dy','(x²+y²)dx=2xy dy','2xy dx=y²dy'], correct:0},
      {chapter:'Matrices Determinants', q:'If A is a 3×3 matrix with |A|=5, then |2A| equals:', options:['10','20','40','5'], correct:2},
      {chapter:'Sequences & Series', q:'The sum of the series 1²+2²+3²+...+n² is:', options:['n(n+1)/2','n(n+1)(2n+1)/6','n²(n+1)²/4','n(n+1)(n+2)/6'], correct:1},
      {chapter:'3D Geometry', q:'The shortest distance between two skew lines is found using:', options:['Dot product only','Cross product of direction vectors','Sum of direction vectors','Angle bisector'], correct:1},
      {chapter:'Vectors', q:'The volume of a parallelepiped with edges a, b, c is given by:', options:['a·(b×c)','a×(b·c)','(a×b)·(a×c)','a·b·c'], correct:0},
      {chapter:'Mathematical Reasoning', q:'For statements p and q, "p→q" is logically equivalent to:', options:['p∧q','¬p∨q','p∨q','¬p∧¬q'], correct:1},
      {chapter:'Statistics', q:'For a frequency distribution, the formula for variance using assumed mean involves:', options:['Only the mean','Step deviation method','Only the mode','Only the median'], correct:1},
    ],
  },
};

let activeQuiz = null; // { subject, difficulty, mode, questions, currentIdx, score, selectedAnswer, timerInterval, timeLeft }
let activeQuizMode = 'practice';

function setQuizMode(mode) {
  document.getElementById('mode-practice').classList.toggle('active', mode==='practice');
  document.getElementById('mode-timed').classList.toggle('active', mode==='timed');
  activeQuizMode = mode;
}

function shuffleArray(arr) {
  const a = arr.slice();
  for (let i=a.length-1;i>0;i--) { const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}

let lastQuizQuestionTexts = {}; // key: 'subject-chapter-difficulty', value: array of question texts shown last time

function populateQuizChapterDropdown() {
  const subject = document.getElementById('quiz-subject').value;
  const sel = document.getElementById('quiz-chapter');
  // Collect every chapter name that actually has at least one question, across all difficulties for this subject
  const chaptersWithQuestions = new Set();
  ['easy','mid','hard'].forEach(diff=>{
    (QUIZ_BANK[subject][diff]||[]).forEach(q=>{ if (q.chapter) chaptersWithQuestions.add(q.chapter); });
  });
  const chapterList = state.chapters[subject].map(c=>c.name).filter(name=>chaptersWithQuestions.has(name));
  sel.innerHTML = '<option value="">All Chapters</option>' + chapterList.map(name=>`<option value="${name}">${name}</option>`).join('');
}

function startQuiz() {
  const subject = document.getElementById('quiz-subject').value;
  const difficulty = document.getElementById('quiz-difficulty').value;
  const chapter = document.getElementById('quiz-chapter').value; // '' means all chapters
  let bank = QUIZ_BANK[subject][difficulty];
  if (chapter) bank = bank.filter(q=>q.chapter===chapter);
  if (!bank || bank.length===0) {
    showToast('⚠️', chapter ? `No ${difficulty} questions for ${chapter} yet — try "All Chapters" or another difficulty.` : 'No questions available for this combo yet.');
    return;
  }
  const key = subject+'-'+(chapter||'all')+'-'+difficulty;
  const lastSet = lastQuizQuestionTexts[key] || [];
  // Prefer questions NOT shown last time, so back-to-back attempts on the same
  // subject+chapter+difficulty feel different. If the bank is too small to fully
  // avoid repeats, fill in with whatever's left after shuffling.
  const fresh = shuffleArray(bank.filter(q=>!lastSet.includes(q.q)));
  const repeats = shuffleArray(bank.filter(q=>lastSet.includes(q.q)));
  const questions = [...fresh, ...repeats].slice(0, Math.min(10, bank.length));
  lastQuizQuestionTexts[key] = questions.map(q=>q.q);
  activeQuiz = { subject, chapter, difficulty, mode:activeQuizMode, questions, currentIdx:0, score:0, selectedAnswer:null, timerInterval:null, timeLeft: difficulty==='hard'?180:difficulty==='mid'?120:90 };
  document.getElementById('quiz-setup').style.display='none';
  document.getElementById('quiz-results').style.display='none';
  document.getElementById('quiz-active').style.display='block';
  document.getElementById('quiz-timer-pill').style.display = activeQuiz.mode==='timed' ? 'inline' : 'none';
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const quiz = activeQuiz;
  const q = quiz.questions[quiz.currentIdx];
  document.getElementById('quiz-progress-pill').textContent = `Q${quiz.currentIdx+1} / ${quiz.questions.length}`;
  document.getElementById('quiz-question-text').textContent = q.q;
  document.getElementById('quiz-options-list').innerHTML = q.options.map((opt,i)=>`
    <div class="revision-item" style="cursor:pointer;margin-bottom:8px" onclick="selectQuizAnswer(${i})" id="quiz-opt-${i}">
      <div class="revision-item-info"><div class="revision-item-chap">${opt}</div></div>
    </div>`).join('');
  quiz.selectedAnswer = null;
  document.getElementById('quiz-next-btn').textContent = quiz.currentIdx === quiz.questions.length-1 ? 'Finish 🏁' : 'Next ➡';
  if (quiz.mode==='timed') {
    clearInterval(quiz.timerInterval);
    quiz.timeLeft = quiz.difficulty==='hard'?180:quiz.difficulty==='mid'?120:90;
    updateQuizTimerDisplay();
    quiz.timerInterval = setInterval(()=>{
      quiz.timeLeft--;
      updateQuizTimerDisplay();
      if (quiz.timeLeft<=0) { clearInterval(quiz.timerInterval); nextQuizQuestion(); }
    }, 1000);
  }
}

function updateQuizTimerDisplay() {
  const m = Math.floor(activeQuiz.timeLeft/60), s = activeQuiz.timeLeft%60;
  document.getElementById('quiz-timer-pill').textContent = `⏱️ ${m}:${s.toString().padStart(2,'0')}`;
}

function selectQuizAnswer(idx) {
  const quiz = activeQuiz;
  const q = quiz.questions[quiz.currentIdx];
  quiz.selectedAnswer = idx;
  document.querySelectorAll('[id^="quiz-opt-"]').forEach((el,i)=>{
    el.style.borderColor = '';
    el.style.background = '';
    if (quiz.mode==='practice') {
      if (i===q.correct) { el.style.borderColor='var(--accent4)'; el.style.background='rgba(16,185,129,0.08)'; }
      if (i===idx && idx!==q.correct) { el.style.borderColor='var(--danger)'; el.style.background='rgba(239,68,68,0.08)'; }
    } else {
      if (i===idx) { el.style.borderColor='var(--accent2)'; el.style.background='rgba(6,182,212,0.08)'; }
    }
  });
}

function nextQuizQuestion() {
  const quiz = activeQuiz;
  clearInterval(quiz.timerInterval);
  const q = quiz.questions[quiz.currentIdx];
  if (quiz.selectedAnswer === q.correct) quiz.score++;
  if (quiz.currentIdx < quiz.questions.length-1) {
    quiz.currentIdx++;
    renderQuizQuestion();
  } else {
    finishQuiz();
  }
}

function quitQuiz() {
  clearInterval(activeQuiz.timerInterval);
  backToQuizSetup();
}

function finishQuiz() {
  const quiz = activeQuiz;
  const pct = Math.round((quiz.score/quiz.questions.length)*100);
  state.quizHistory.push({ id:'quiz'+Date.now(), date:new Date().toISOString(), subject:quiz.subject, chapter:quiz.chapter||'', difficulty:quiz.difficulty, mode:quiz.mode, score:quiz.score, total:quiz.questions.length });
  questsSolvedToday += quiz.questions.length;
  addXP(quiz.score*5);
  checkQuestClaims();
  save();
  document.getElementById('quiz-active').style.display='none';
  document.getElementById('quiz-results').style.display='block';
  document.getElementById('quiz-score-text').textContent = `${quiz.score}/${quiz.questions.length}`;
  document.getElementById('quiz-score-sub').textContent = `${pct}% — ${quiz.subject}${quiz.chapter?' · '+quiz.chapter:''} (${quiz.difficulty}) · +${quiz.score*5} XP`;
}

function backToQuizSetup() {
  if (activeQuiz) clearInterval(activeQuiz.timerInterval);
  activeQuiz = null;
  document.getElementById('quiz-setup').style.display='block';
  document.getElementById('quiz-active').style.display='none';
  document.getElementById('quiz-results').style.display='none';
  populateQuizChapterDropdown();
}

function renderQuizHistory() {
  const el = document.getElementById('quiz-history-list');
  if (!state.quizHistory || state.quizHistory.length===0) { el.innerHTML = '<div class="revision-empty">No quizzes taken yet.</div>'; return; }
  el.innerHTML = state.quizHistory.slice().reverse().slice(0,10).map(q=>`
    <div class="revision-item" style="margin-bottom:8px">
      <div class="revision-item-info">
        <div class="revision-item-chap">${q.subject==='physics'?'⚛️':q.subject==='chemistry'?'🧪':'📐'} ${q.subject}${q.chapter?' · '+q.chapter:''} — ${q.difficulty}</div>
        <div class="revision-item-meta">${new Date(q.date).toLocaleDateString()} · ${q.mode==='timed'?'⏱️ Timed':'🧘 Practice'}</div>
      </div>
      <span class="revision-stage-pill">${q.score}/${q.total}</span>
    </div>`).join('');
}

// ===== FORMULA SHEET =====
function addFormulaSheetSlot() {
  const subject = document.getElementById('formula-subject-select').value;
  const chapterName = document.getElementById('formula-chapter-input').value.trim();
  if (!chapterName) { showToast('⚠️','Name the chapter first!'); return; }
  state.formulaSheet.push({ id:'fs'+Date.now(), subject, chapterName, content:'' });
  addXP(10);
  document.getElementById('formula-chapter-input').value='';
  save(); renderFormulaSheet();
  showToast('📐', `${chapterName} slot added!`);
}

function deleteFormulaSheetSlot(id) {
  state.formulaSheet = state.formulaSheet.filter(f=>f.id!==id);
  save(); renderFormulaSheet();
}

function saveFormulaContent(id) {
  const textarea = document.getElementById('fs-content-'+id);
  const item = state.formulaSheet.find(f=>f.id===id);
  if (item) {
    const hadContentBefore = item.content.trim().length>0;
    item.content = textarea.value;
    if (!hadContentBefore && item.content.trim().length>0) addXP(15);
    save(); showToast('✅','Saved!');
  }
}

function renderFormulaSheet() {
  const el = document.getElementById('formula-sheet-list');
  if (state.formulaSheet.length===0) { el.innerHTML = '<div class="revision-empty">No chapter slots yet — add one above.</div>'; return; }
  const subjIcon = {physics:'⚛️',chemistry:'🧪',maths:'📐'};
  el.innerHTML = state.formulaSheet.map(f=>`
    <div class="card mb-16">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
        <div style="font-weight:700;font-size:0.9rem">${subjIcon[f.subject]} ${f.chapterName}</div>
        <button class="skill-subnode-del" onclick="deleteFormulaSheetSlot('${f.id}')">🗑️ Delete</button>
      </div>
      <textarea class="modal-input" id="fs-content-${f.id}" placeholder="Type your formulas here..." style="min-height:120px;margin-bottom:8px;font-family:monospace;font-size:0.85rem">${f.content}</textarea>
      <button class="btn btn-secondary btn-sm" onclick="saveFormulaContent('${f.id}')">💾 Save</button>
    </div>`).join('');
}

function renderLifestyleWidget() {
  const key = todayKey();
  const sleepEl = document.getElementById('sleep-value');
  const waterEl = document.getElementById('water-value');
  const detoxBtn = document.getElementById('detox-btn');
  if (sleepEl) sleepEl.textContent = state.sleepLog[key] || 0;
  if (waterEl) waterEl.textContent = state.waterLog[key] || 0;
  if (detoxBtn) {
    const marked = !!state.detoxLog[key];
    detoxBtn.textContent = marked ? '✅ Clean Day Logged' : 'Mark Clean Day';
    detoxBtn.classList.toggle('btn-success', !marked);
    detoxBtn.style.background = marked ? 'var(--accent4)' : '';
  }
}

function openEndOfDayReview() {
  const key = todayKey();
  const hrs = Math.floor(state.todaySeconds/3600), mins = Math.floor((state.todaySeconds%3600)/60);
  const questsDone = (state.dailyQuests||[]).filter(q=>q.claimed).length;
  const questsTotal = (state.dailyQuests||[]).length;
  const chaptersCompletedToday = getAllChaptersFlat().filter(c=>c.completedDate && new Date(c.completedDate).toDateString()===key).length;
  const sleep = state.sleepLog[key]||0, water = state.waterLog[key]||0, detox = !!state.detoxLog[key];
  const subjBreakdown = ['physics','chemistry','maths'].map(s=>{
    const secs = state.subjectSeconds[s]||0;
    return `<div style="display:flex;justify-content:space-between;font-size:0.82rem;padding:4px 0"><span>${s==='physics'?'⚛️ Physics':s==='chemistry'?'🧪 Chemistry':'📐 Maths'}</span><span class="font-mono">${Math.floor(secs/3600)}h ${Math.floor((secs%3600)/60)}m</span></div>`;
  }).join('');

  const goalsDone = (state.dailyTasks||[]).length>=2;
  const overallVerdict = state.dayComplete ? '🎉 Great day — fully complete!' : goalsDone ? '👍 Solid day, almost there.' : '💪 Tomorrow\'s a fresh shot.';

  document.getElementById('eod-content').innerHTML = `
    <div style="text-align:center;margin-bottom:18px">
      <div style="font-size:1.6rem;margin-bottom:4px">${overallVerdict}</div>
      <div style="font-size:0.78rem;color:var(--muted)">${new Date().toLocaleDateString('default',{weekday:'long',month:'long',day:'numeric'})}</div>
    </div>
    <div style="background:var(--surface);border-radius:10px;padding:14px;margin-bottom:14px">
      <div style="font-weight:700;font-size:0.85rem;margin-bottom:8px">⏱️ Study Time — ${hrs}h ${mins}m total</div>
      ${subjBreakdown}
    </div>
    <div style="background:var(--surface);border-radius:10px;padding:14px;margin-bottom:14px;display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:0.82rem">
      <div>📝 Tasks logged: <b>${(state.dailyTasks||[]).length}</b></div>
      <div>🗺️ Quests: <b>${questsDone}/${questsTotal}</b></div>
      <div>📖 Chapters completed: <b>${chaptersCompletedToday}</b></div>
      <div>🔥 Streak: <b>${state.streak} days</b></div>
    </div>
    <div style="background:var(--surface);border-radius:10px;padding:14px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;font-size:0.8rem;text-align:center">
      <div>😴<br><b>${sleep}h</b><br><span style="color:var(--muted);font-size:0.72rem">sleep</span></div>
      <div>💧<br><b>${water}</b><br><span style="color:var(--muted);font-size:0.72rem">glasses</span></div>
      <div>📵<br><b>${detox?'✅':'—'}</b><br><span style="color:var(--muted);font-size:0.72rem">detox</span></div>
    </div>
  `;
  document.getElementById('end-of-day-modal').classList.add('open');
}

function resetDailyIfNewDay() {
  const today = new Date().toDateString();
  if (state.lastDayDate !== today) {
    // Archive the day that's ending (if there was one) before wiping today's slate.
    if (state.lastDayDate) {
      const questsTotal = (state.dailyQuests||[]).length;
      const questsCompleted = (state.dailyQuests||[]).filter(q=>q.claimed).length;
      state.dayHistory = state.dayHistory||[];
      state.dayHistory.push({
        date: state.lastDayDate,
        secondsStudied: state.todaySeconds||0,
        tasksCompleted: (state.dailyTasks||[]).length,
        questsCompleted, questsTotal,
        dayComplete: !!state.dayComplete,
      });
      if (state.dayHistory.length > 90) state.dayHistory = state.dayHistory.slice(-90); // keep last ~3 months
    }
    state.todaySeconds = 0;
    state.studyXpToday = 0;
    state.dailyTasks = [];
    state.dayComplete = false;
    state.dailyGoalsChecked = {}; // fresh goals each day — yesterday's checks shouldn't carry over
    state.lastDayDate = today;
    const dayIdx = (new Date().getDay() + 6) % 7;
    state.weeklyHours[dayIdx] = 0;
  }
  if (state.questsDate !== today) {
    state.questsDate = today;
    generateDailyQuests();
  } else {
    questsSubjectStartSeconds = { physics:0, chemistry:0, maths:0 }; // already progressed today; treat all current seconds as "today" for all-subjects quest
  }
}

// Live midnight watcher: if the dashboard stays open across midnight, this
// catches the rollover without needing a page refresh, so the day actually
// ends right at 12:00 AM instead of whenever you next reload.
function startMidnightWatcher() {
  setInterval(()=>{
    const today = new Date().toDateString();
    if (state.lastDayDate !== today || state.questsDate !== today) {
      resetDailyIfNewDay();
      save();
      updateXP(); updateStreak(); updateTimerDisplay();
      renderQuests(); renderDayStatus();
      // Visually clear yesterday's checked goals — resetDailyIfNewDay already
      // cleared the underlying state, but the DOM checkmarks need a manual
      // reset too since they're not re-rendered from scratch on every tick.
      document.querySelectorAll('.goal-check.done').forEach(el=>{
        el.classList.remove('done'); el.textContent='✓';
        if (el.nextElementSibling) el.nextElementSibling.classList.remove('done');
      });
      showToast('🌅','New day! Fresh quests and goals are up.');
    }
  }, 30000); // check every 30s — cheap, and catches midnight within half a minute
}


let currentSubjectView = 'physics';
let charts = {};

// ===================== PERSISTENT SAVE / LOAD =====================
// Uses the artifact's persistent storage (window.storage) instead of localStorage,
// which does NOT work inside Claude artifacts. Saves are debounced so rapid
// successive calls (e.g. timer ticks) don't spam the storage API, and a final
// save fires on tab close/hide so nothing is lost when you close the browser.

let saveTimeout = null;
let saveIndicatorTimeout = null;

function showSaveIndicator(status) {
  const el = document.getElementById('save-indicator');
  if (!el) return;
  clearTimeout(saveIndicatorTimeout);
  if (status === 'saving') {
    el.textContent = '⏳ Saving...';
    el.style.opacity = '1';
  } else if (status === 'saved') {
    el.textContent = '✅ Saved';
    el.style.opacity = '1';
    saveIndicatorTimeout = setTimeout(() => { el.style.opacity = '0'; }, 1500);
  } else if (status === 'error') {
    el.textContent = '⚠️ Save failed — retrying...';
    el.style.opacity = '1';
  }
}

async function writeStateNow(retryCount) {
  retryCount = retryCount || 0;
  try {
    showSaveIndicator('saving');
    await window.storage.set(STORAGE_KEY, JSON.stringify(state), false);
    showSaveIndicator('saved');
  } catch (e) {
    console.error('StudyHub save failed:', e);
    if (retryCount < 3) {
      // Transient errors (network blips, brief server hiccups) usually clear up
      // within a couple seconds — retry a few times before giving up, so a
      // single failed save doesn't quietly lose data.
      showSaveIndicator('error');
      setTimeout(()=>writeStateNow(retryCount+1), 1500 * (retryCount+1));
    } else {
      showSaveIndicator('error');
      console.error('StudyHub: save failed after 3 retries — data may not have persisted for this change.');
    }
  }
}

// Debounced save used by all in-app save() calls (frequent, low urgency)
function save() {
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(writeStateNow, 400);
}

// Immediate, un-debounced save used when the tab is closing/hiding —
// at that point we may not get another chance to run the debounced version.
function saveImmediately() {
  clearTimeout(saveTimeout);
  writeStateNow();
}

window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') saveImmediately();
});
window.addEventListener('pagehide', saveImmediately);

async function loadState() {
  try {
    const result = await window.storage.get(STORAGE_KEY, false);
    if (result && result.value) {
      const parsed = JSON.parse(result.value);
      state = Object.assign(defaultState(), parsed);
      migrateChapterFields();
    } else {
      state = defaultState();
    }
  } catch (e) {
    // Key doesn't exist yet (first-ever visit) or storage error — start fresh.
    state = defaultState();
  }
  stateLoaded = true;
}

// Older saved data (before revision/flashcard features existed) won't have
// revisionSchedule/flashcards on each chapter. Backfill them so nothing breaks,
// and give already-completed chapters a revision schedule starting from now
// (since we don't know their real completion date).
function migrateChapterFields() {
  ['physics','chemistry','maths'].forEach(subj=>{
    (state.chapters[subj]||[]).forEach(ch=>{
      if (!Array.isArray(ch.flashcards)) ch.flashcards = [];
      if (!Array.isArray(ch.revisionSchedule)) ch.revisionSchedule = [];
      if (!Array.isArray(ch.subtopics)) ch.subtopics = [];
      if (typeof ch.lecturesTotal !== 'number') ch.lecturesTotal = 0;
      if (typeof ch.lecturesCompleted !== 'number') ch.lecturesCompleted = 0;
      // Backfill the standard sub-topic breakdown for chapters that don't have any yet
      // (covers both brand-new saves and saves from before this feature existed).
      if (ch.subtopics.length===0 && DEFAULT_SUBTOPICS[ch.name]) {
        ch.subtopics = DEFAULT_SUBTOPICS[ch.name].map(n=>makeSubtopic(n));
        if (ch.status==='completed') ch.subtopics.forEach(s=>s.done=true); // already-completed chapters start fully checked
      }
      if (ch.status==='completed' && !ch.completedDate) {
        ch.completedDate = new Date().toISOString();
      }
      if (ch.status==='completed' && ch.revisionSchedule.length===0) {
        ch.revisionSchedule = buildRevisionSchedule(ch.completedDate);
      }
    });
  });

  // Boards data shape changed from { subject: {chapterName:true} } to
  // { subject: { classYear: {chapterName:true} } } to support Class 11 + 12
  // columns. If old flat data is detected, discard it rather than misreading
  // chapter names as class years (safer than silently corrupting progress).
  Object.keys(state.boardsCompleted||{}).forEach(subj=>{
    const bucket = state.boardsCompleted[subj];
    const looksOld = Object.keys(bucket).some(k => k!=='11' && k!=='12');
    if (looksOld) {
      const defaults = {english:{12:{}}, maths:{11:{},12:{}}, physics:{11:{},12:{}}, chemistry:{11:{},12:{}}, pe:{12:{}}};
      state.boardsCompleted[subj] = defaults[subj] || {};
    }
  });

  // A second shape change: each chapter's value went from a plain boolean
  // to {reading, qa} so reading and Q&A can be tracked separately. Convert
  // any old `true` values into both being done, so nothing looks like it
  // un-completed itself after this update.
  Object.values(state.boardsCompleted||{}).forEach(classBuckets=>{
    Object.values(classBuckets||{}).forEach(chapterMap=>{
      Object.keys(chapterMap||{}).forEach(chapName=>{
        if (chapterMap[chapName] === true) {
          chapterMap[chapName] = {reading:true, qa:true};
        }
      });
    });
  });
}

// ===================== PAGES =====================
function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
  document.getElementById('mobile-menu-overlay').classList.toggle('open');
}

function showPageMobile(page) {
  // Find the matching desktop tab (if any) so the active-state styling stays
  // in sync even though the click originated from the mobile menu.
  const desktopTabs = document.querySelectorAll('.nav-tabs .nav-tab');
  let matchedTab = null;
  desktopTabs.forEach(t=>{ if (t.getAttribute('onclick')?.includes(`'${page}'`)) matchedTab = t; });
  showPage(page, matchedTab);
  toggleMobileMenu();
}

function showPage(page, tabEl) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  if (tabEl) tabEl.classList.add('active');
  const profileIcon = document.getElementById('nav-profile-icon');
  if (profileIcon) profileIcon.style.borderColor = (page==='profile') ? 'var(--accent)' : 'var(--border)';
  if (page === 'chapters') renderChapters();
  if (page === 'analytics') renderCharts();
  if (page === 'achievements') renderBadges();
  if (page === 'syllabus') renderSyllabus();
  if (page === 'accountability') renderDayStatus();
  if (page === 'revision') { renderRevisionPage(); populateFlashcardChapterSelect(); }
  if (page === 'quests') renderQuests();
  if (page === 'skilltree') renderSkillTree();
  if (page === 'shop') renderShop();
  if (page === 'vision') { renderAvatarEvolution(); renderFutureYou(); renderVisionBoard(); }
  if (page === 'months') { populateMonthsSelector(); renderMonthPlan(); }
  if (page === 'mocktests') renderMockTests();
  if (page === 'quiz') { backToQuizSetup(); renderQuizHistory(); }
  if (page === 'formulasheet') renderFormulaSheet();
  if (page === 'boards') renderBoardsChapters();
  if (page === 'profile') renderProfile();
  if (page === 'notifications') renderNotifications();
}

// ===================== COUNTDOWN =====================
function updateCountdown() {
  const jee = new Date('2027-01-15');
  const diff = Math.ceil((jee - new Date()) / (1000*60*60*24));
  document.getElementById('countdown-days').textContent = diff;
}

// ===================== XP & LEVELS =====================
const LEVELS = [
  {min:0, name:'⚔️ ROOKIE SCHOLAR'},{min:2000, name:'📖 KNOWLEDGE SEEKER'},
  {min:6000, name:'🔥 CHAPTER SLAYER'},{min:13000, name:'⚡ FORMULA MASTER'},
  {min:23000, name:'🧠 PROBLEM CRUSHER'},{min:36000, name:'🏆 JEE WARRIOR'},
  {min:52000, name:'💎 ELITE SCHOLAR'},{min:72000, name:'👑 IIT DESTINED'},
];

// ===== FUTURE YOU MESSAGES =====
// Each unlocks once, permanently, the first time its condition is true.
// Written as if from a future version of Sohum who made it — meant to land
// at real milestones, not randomly.
const FUTURE_YOU_MESSAGES = [
  { id:'fy_first_xp', icon:'🌱', condition:()=>state.xp>=100,
    title:'The First Step',
    text:"Hey. You just started, and I know it doesn't feel like much yet — 100 XP, one small session. But I remember this exact moment. This is the day the comeback actually began, even if it didn't feel dramatic. Keep going." },
  { id:'fy_level2', icon:'📖', condition:()=>state.level>=2,
    title:'Knowledge Seeker',
    text:"You leveled up. I won't lie to you — it gets harder before it gets easier. But you're already proving to yourself that last year doesn't define this year. Stay consistent, not perfect." },
  { id:'fy_streak7', icon:'🔥', condition:()=>state.streak>=7,
    title:'One Week Strong',
    text:"Seven days straight. I know how many times you wanted to skip a day and didn't. That discipline you're building right now — that's the real skill. JEE marks fade, but this version of you doesn't." },
  { id:'fy_level4', icon:'⚡', condition:()=>state.level>=4,
    title:'Formula Master',
    text:"By now physics formulas probably don't scare you the way they used to. Remember how far back you started from. IIT Guwahati isn't a fantasy anymore — it's a math problem you're actively solving." },
  { id:'fy_streak30', icon:'🏔️', condition:()=>state.streak>=30,
    title:'Thirty Days',
    text:"A month. No excuses, no skipped days. I'm not going to pretend it's been easy — but you didn't need it to be easy, you needed it to be done. It is. Keep stacking days." },
  { id:'fy_level6', icon:'🏆', condition:()=>state.level>=6,
    title:'JEE Warrior',
    text:"You're a JEE Warrior now — not because of a badge, but because you actually showed up enough times to earn it. January 2027 is closer than it feels. Trust the process you built." },
  { id:'fy_mastery', icon:'🌳', condition:()=>['physics','chemistry','maths'].some(s=>{const ch=state.chapters[s];return ch.length>0 && ch.every(c=>c.status==='completed');}),
    title:'Full Mastery, One Subject',
    text:"You finished an entire subject. Every single chapter. I remember when that subject felt impossible. It isn't anymore — because you didn't wait to feel ready, you just kept finishing chapters one at a time." },
  { id:'fy_level8', icon:'👑', condition:()=>state.level>=8,
    title:'IIT Destined',
    text:"If you're reading this, you've put in more hours than almost anyone willing to admit they needed a comeback. Whatever the result ends up being — you already proved the version of you that gave up wasn't the real one." },
];

function checkFutureYouMessages() {
  let newUnlock = null;
  FUTURE_YOU_MESSAGES.forEach(msg=>{
    if (!state.futureYouUnlocked.includes(msg.id) && msg.condition()) {
      state.futureYouUnlocked.push(msg.id);
      newUnlock = msg;
    }
  });
  if (newUnlock) {
    save();
    showToast('💌', `New message unlocked: "${newUnlock.title}"`);
    renderFutureYou();
  }
}

// ===== AVATAR EVOLUTION =====
// A separate visual track from the shop avatars — this one evolves automatically
// with your level, so there's always something visually progressing even if
// you never spend a coin in the shop.
const AVATAR_EVOLUTION_STAGES = [
  { minLevel:1, icon:'🌱', name:'Seedling Scholar' },
  { minLevel:2, icon:'📖', name:'Focused Learner' },
  { minLevel:3, icon:'🔥', name:'Rising Slayer' },
  { minLevel:4, icon:'⚡', name:'Formula Master' },
  { minLevel:5, icon:'🧠', name:'Sharp Mind' },
  { minLevel:6, icon:'🏆', name:'JEE Warrior' },
  { minLevel:7, icon:'💎', name:'Elite Scholar' },
  { minLevel:8, icon:'👑', name:'IIT Destined' },
];

function getAvatarEvolutionStage() {
  let stage = AVATAR_EVOLUTION_STAGES[0];
  AVATAR_EVOLUTION_STAGES.forEach(s=>{ if (state.level >= s.minLevel) stage = s; });
  return stage;
}

function checkAvatarEvolution() {
  const stage = getAvatarEvolutionStage();
  const stageIdx = AVATAR_EVOLUTION_STAGES.indexOf(stage);
  if (stageIdx > state.avatarEvolutionStage) {
    state.avatarEvolutionStage = stageIdx;
    showToast('🦋', `Your avatar evolved: ${stage.icon} ${stage.name}!`);
    save();
  }
}

function renderAvatarEvolution() {
  const stage = getAvatarEvolutionStage();
  const stageIdx = AVATAR_EVOLUTION_STAGES.indexOf(stage);
  document.getElementById('avatar-evo-icon').textContent = stage.icon;
  document.getElementById('avatar-evo-name').textContent = stage.name;
  const next = AVATAR_EVOLUTION_STAGES[stageIdx+1];
  document.getElementById('avatar-evo-next').textContent = next
    ? `Reach Level ${next.minLevel} to evolve into ${next.icon} ${next.name}`
    : 'Maximum evolution reached — you\'re at the top form.';
  renderClimbVisual();
}

// ===== FUTURE YOU — THE CLIMB =====
// A simple SVG figure (light skin, muscular build, spiked hair) that climbs
// one stair step per level, 8 steps total matching the 8 LEVELS/avatar stages.
const CLIMB_TOTAL_STEPS = 8;

// Three.js scene state — kept outside renderClimbVisual so we only build the
// scene once and just update the figure's target position on later calls.
let climbScene = null, climbCamera = null, climbRenderer = null, climbControls = null;
let climbFigureGroup = null, climbAnimFrameId = null;
let climbTargetY = 0, climbTargetX = 0, climbTargetZ = 0;

const CLIMB_STEP_W = 1.6, CLIMB_STEP_H = 0.55, CLIMB_STEP_D = 1.4;

function getClimb3DStepPosition(stepIdx) {
  // Mirrors the old 2D layout logic but in 3D space: steps ascend along -Z
  // (into the scene) and +Y (upward), positioned for the figure's feet.
  return {
    x: 0,
    y: stepIdx * CLIMB_STEP_H + CLIMB_STEP_H/2 + 0.05,
    z: -stepIdx * CLIMB_STEP_D * 0.85,
  };
}

function buildClimb3DFigure() {
  // A simple low-poly figure built from primitives: light skin tone,
  // muscular torso (broad shoulders via a tapered cylinder), spiked hair
  // made from small cones. No external models needed.
  const group = new THREE.Group();
  const skin = new THREE.MeshStandardMaterial({ color: 0xf5cba7, roughness: 0.6 });
  const shirt = new THREE.MeshStandardMaterial({ color: 0x7c3aed, roughness: 0.5 });
  const pants = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.6 });
  const hair = new THREE.MeshStandardMaterial({ color: 0x161616, roughness: 0.4 });

  // legs
  const legGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.5, 8);
  const legL = new THREE.Mesh(legGeo, pants); legL.position.set(-0.1, 0.25, 0); group.add(legL);
  const legR = new THREE.Mesh(legGeo, pants); legR.position.set(0.1, 0.25, 0); group.add(legR);

  // torso — tapered cylinder for a broad-shoulders-to-waist muscular look
  const torsoGeo = new THREE.CylinderGeometry(0.32, 0.22, 0.55, 8);
  const torso = new THREE.Mesh(torsoGeo, shirt); torso.position.set(0, 0.78, 0); group.add(torso);

  // arms
  const armGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.45, 8);
  const armL = new THREE.Mesh(armGeo, skin); armL.position.set(-0.38, 0.78, 0); armL.rotation.z = 0.25; group.add(armL);
  const armR = new THREE.Mesh(armGeo, skin); armR.position.set(0.38, 0.78, 0); armR.rotation.z = -0.25; group.add(armR);

  // neck + head
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.08,0.08,0.1,8), skin); neck.position.set(0,1.1,0); group.add(neck);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 16, 16), skin); head.position.set(0,1.32,0); group.add(head);

  // spiked hair — 5 small cones fanned across the top of the head
  const spikePositions = [-0.16,-0.08,0,0.08,0.16];
  spikePositions.forEach((sx,idx)=>{
    const spike = new THREE.Mesh(new THREE.ConeGeometry(0.05, idx===2?0.22:0.16, 6), hair);
    spike.position.set(sx, 1.5 + (idx===2?0.04:0), 0);
    spike.rotation.z = sx*0.6;
    group.add(spike);
  });

  group.traverse(obj=>{ if(obj.isMesh){ obj.castShadow = true; obj.receiveShadow = true; } });
  return group;
}

function buildClimb3DStaircase(scene) {
  const stepMat1 = new THREE.MeshStandardMaterial({ color: 0x1a1a2e, roughness: 0.7 });
  const stepMat2 = new THREE.MeshStandardMaterial({ color: 0x16213e, roughness: 0.7 });
  const stepGeo = new THREE.BoxGeometry(CLIMB_STEP_W, CLIMB_STEP_H, CLIMB_STEP_D);
  for (let i=0;i<CLIMB_TOTAL_STEPS;i++) {
    const pos = getClimb3DStepPosition(i);
    // Each step is a riser block from the ground up to its own height, so it
    // looks like a real staircase rather than floating platforms.
    const riserGeo = new THREE.BoxGeometry(CLIMB_STEP_W, (i+1)*CLIMB_STEP_H, CLIMB_STEP_D);
    const riser = new THREE.Mesh(riserGeo, i%2===0?stepMat1:stepMat2);
    riser.position.set(pos.x, (i+1)*CLIMB_STEP_H/2, pos.z);
    riser.castShadow = true; riser.receiveShadow = true;
    scene.add(riser);
  }
}

function initClimb3DScene() {
  const container = document.getElementById('climb-3d-container');
  if (!container || typeof THREE === 'undefined') return false;

  climbScene = new THREE.Scene();
  climbCamera = new THREE.PerspectiveCamera(45, container.clientWidth/container.clientHeight, 0.1, 100);
  climbCamera.position.set(4, 3.5, 5);

  climbRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  climbRenderer.setSize(container.clientWidth, container.clientHeight);
  climbRenderer.shadowMap.enabled = true;
  container.innerHTML = '';
  container.appendChild(climbRenderer.domElement);

  // lighting
  climbScene.add(new THREE.AmbientLight(0x404060, 1.2));
  const dirLight = new THREE.DirectionalLight(0xffffff, 1.4);
  dirLight.position.set(5, 8, 5);
  dirLight.castShadow = true;
  climbScene.add(dirLight);
  const accentLight = new THREE.PointLight(0x7c3aed, 1.5, 15);
  accentLight.position.set(-3, 2, 2);
  climbScene.add(accentLight);

  buildClimb3DStaircase(climbScene);

  climbFigureGroup = buildClimb3DFigure();
  const initialStep = Math.min(state.climbCurrentStep||0, CLIMB_TOTAL_STEPS-1);
  const initialPos = getClimb3DStepPosition(initialStep);
  climbFigureGroup.position.set(initialPos.x, initialPos.y, initialPos.z);
  climbTargetX = initialPos.x; climbTargetY = initialPos.y; climbTargetZ = initialPos.z;
  climbScene.add(climbFigureGroup);

  climbControls = new THREE.OrbitControls(climbCamera, climbRenderer.domElement);
  climbControls.target.set(0, 1, -2);
  climbControls.enableDamping = true;
  climbControls.dampingFactor = 0.08;
  climbControls.minDistance = 3;
  climbControls.maxDistance = 12;
  climbControls.maxPolarAngle = Math.PI/2 + 0.3;
  climbControls.update();

  function animate() {
    climbAnimFrameId = requestAnimationFrame(animate);
    // Smoothly ease the figure toward its target step each frame — this is
    // what gives the "climbing" feel without needing sprite animation.
    if (climbFigureGroup) {
      climbFigureGroup.position.x += (climbTargetX - climbFigureGroup.position.x) * 0.06;
      climbFigureGroup.position.y += (climbTargetY - climbFigureGroup.position.y) * 0.06;
      climbFigureGroup.position.z += (climbTargetZ - climbFigureGroup.position.z) * 0.06;
    }
    climbControls.update();
    climbRenderer.render(climbScene, climbCamera);
  }
  animate();

  // Resize handling so the canvas matches its container on layout changes
  window.addEventListener('resize', ()=>{
    if (!container.clientWidth) return;
    climbCamera.aspect = container.clientWidth/container.clientHeight;
    climbCamera.updateProjectionMatrix();
    climbRenderer.setSize(container.clientWidth, container.clientHeight);
  });

  // Double-click the figure specifically (not just anywhere in the scene) to
  // trigger the climb — uses raycasting so OrbitControls' drag-to-rotate
  // still works normally everywhere else on the canvas.
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  climbRenderer.domElement.addEventListener('dblclick', (event)=>{
    const rect = climbRenderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, climbCamera);
    const hits = raycaster.intersectObject(climbFigureGroup, true);
    if (hits.length > 0) attemptClimb();
  });

  return true;
}

function renderClimbVisual() {
  const container = document.getElementById('climb-3d-container');
  if (!container) return;

  if (!climbScene) {
    const ok = initClimb3DScene();
    if (!ok) return; // Three.js not loaded yet — will retry next render call
  }

  // The figure only stands where state.climbCurrentStep says — NOT wherever
  // your level currently is. Reaching a new level just makes a climb
  // available; you have to double-click him to actually send him up.
  const currentStep = Math.min(state.climbCurrentStep||0, CLIMB_TOTAL_STEPS-1);
  const pos = getClimb3DStepPosition(currentStep);
  climbTargetX = pos.x; climbTargetY = pos.y; climbTargetZ = pos.z;

  const earnedStep = Math.min((state.level||1) - 1, CLIMB_TOTAL_STEPS-1);
  const label = document.getElementById('climb-stage-label');
  if (label) {
    if (earnedStep > currentStep) {
      label.textContent = `Step ${currentStep+1} of ${CLIMB_TOTAL_STEPS} — 🆙 New step unlocked! Double-click him to climb`;
      label.style.color = 'var(--accent3)';
    } else {
      label.textContent = `Step ${currentStep+1} of ${CLIMB_TOTAL_STEPS} — Level ${state.level||1}`;
      label.style.color = 'var(--accent3)';
    }
  }
}

function attemptClimb() {
  const earnedStep = Math.min((state.level||1) - 1, CLIMB_TOTAL_STEPS-1);
  const currentStep = state.climbCurrentStep||0;
  if (earnedStep <= currentStep) {
    showToast('🧗', 'Nothing to climb yet — level up first!');
    return;
  }
  state.climbCurrentStep = earnedStep; // jump straight to the earned step, even if multiple levels behind
  save();
  const pos = getClimb3DStepPosition(earnedStep);
  climbTargetX = pos.x; climbTargetY = pos.y; climbTargetZ = pos.z;

  // Fire the celebration once the easing animation has had time to land —
  // matches the ~0.06 lerp factor settling within roughly a second.
  setTimeout(()=>{
    fireClimbCelebration();
    renderClimbVisual(); // refresh label now that he's landed
  }, 1100);
}

function fireClimbCelebration() {
  const container = document.getElementById('climb-3d-container');
  if (!container) return;
  const burst = document.createElement('div');
  burst.style.cssText = 'position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:10;';
  container.style.position = 'relative';
  const colors = ['#7c3aed','#06b6d4','#f59e0b','#10b981','#ef4444'];
  let pieces = '';
  for (let i=0;i<40;i++) {
    const left = Math.random()*100;
    const delay = Math.random()*0.3;
    const color = colors[Math.floor(Math.random()*colors.length)];
    const isRibbon = Math.random()>0.5;
    pieces += `<div style="position:absolute;top:-10px;left:${left}%;width:${isRibbon?'4px':'8px'};height:${isRibbon?'16px':'8px'};background:${color};border-radius:${isRibbon?'2px':'50%'};animation:confettiFall ${1.4+Math.random()}s ${delay}s ease-in forwards;opacity:0.9"></div>`;
  }
  burst.innerHTML = pieces;
  container.appendChild(burst);
  showToast('🎉', 'He made it to the next step!');
  setTimeout(()=>burst.remove(), 2600);
}

function renderFutureYou() {
  const el = document.getElementById('future-you-list');
  const unlocked = FUTURE_YOU_MESSAGES.filter(m=>state.futureYouUnlocked.includes(m.id));
  const locked = FUTURE_YOU_MESSAGES.filter(m=>!state.futureYouUnlocked.includes(m.id));
  let html = '';
  unlocked.forEach(m=>{
    html += `<div class="card mb-16" style="border-color:var(--accent4)">
      <div style="display:flex;gap:12px;align-items:flex-start">
        <div style="font-size:1.8rem">${m.icon}</div>
        <div>
          <div style="font-weight:700;font-size:0.9rem;margin-bottom:6px">${m.title}</div>
          <div style="font-size:0.85rem;color:var(--muted);line-height:1.6">${m.text}</div>
        </div>
      </div>
    </div>`;
  });
  if (locked.length>0) {
    html += `<div class="revision-empty" style="text-align:left;padding:16px 4px">🔒 ${locked.length} more message${locked.length>1?'s':''} waiting at future milestones.</div>`;
  }
  el.innerHTML = html || '<div class="revision-empty">Keep going — your first message unlocks at 100 XP.</div>';
}

function addVisionItem() {
  const input = document.getElementById('vision-input');
  const text = input.value.trim();
  if (!text) { showToast('⚠️','Type something first!'); return; }
  state.visionBoard.push({ id:'vision'+Date.now(), text, icon:'🎯' });
  addXP(5);
  input.value='';
  save(); renderVisionBoard();
}

function removeVisionItem(id) {
  state.visionBoard = state.visionBoard.filter(v=>v.id!==id);
  save(); renderVisionBoard();
}

function renderVisionBoard() {
  const el = document.getElementById('vision-board-list');
  if (state.visionBoard.length===0) {
    el.innerHTML = '<div class="revision-empty" style="grid-column:1/-1">Nothing here yet — add what you\'re working toward above.</div>';
    return;
  }
  el.innerHTML = state.visionBoard.map(v=>`
    <div class="shop-item" style="text-align:left;position:relative">
      <button class="skill-subnode-del" style="position:absolute;top:8px;right:8px" onclick="removeVisionItem('${v.id}')">✕</button>
      <div class="shop-item-icon">${v.icon}</div>
      <div class="shop-item-name" style="font-size:0.8rem;line-height:1.4">${v.text}</div>
    </div>`).join('');
}

function addXP(amount) {
  state.xp += amount;
  state.comeback = Math.min(100, state.comeback + Math.floor(amount/10));
  updateXP();
  showToast('⚡', `+${amount} XP earned!`);
  checkBadges();
  checkFutureYouMessages();
  checkAvatarEvolution();
  save();
}

function updateXP() {
  let level = 0;
  for (let i = LEVELS.length-1; i >= 0; i--) { if (state.xp >= LEVELS[i].min) { level=i; break; } }
  const previousLevel = state.level || 1;
  state.level = level+1;
  if (state.level > previousLevel) {
    addNotification('🎉', 'Level Up!', `You reached Level ${state.level} — ${LEVELS[level].name}. Visit Vision to send Future You up the stairs!`);
  }
  const curr = LEVELS[level].min;
  const next = LEVELS[level+1] ? LEVELS[level+1].min : curr+10000;
  const pct = Math.min(100,((state.xp-curr)/(next-curr))*100);
  document.getElementById('xp-bar').style.width = pct+'%';
  document.getElementById('xp-current').textContent = state.xp+' XP';
  document.getElementById('xp-next').textContent = 'Next: '+next+' XP';
  document.getElementById('level-name').textContent = LEVELS[level].name+' — Level '+state.level;
  document.getElementById('level-badge').textContent = 'LVL '+state.level;
  document.getElementById('nav-xp').textContent = '⚡ '+state.xp+' XP';
  document.getElementById('comeback-score').textContent = state.comeback;
  document.getElementById('comeback-bar').style.width = state.comeback+'%';
}

// ===================== GOALS =====================
function toggleGoal(goalId, el, xp) {
  const textEl = el.nextElementSibling;
  const wasChecked = !!state.dailyGoalsChecked[goalId];
  if (wasChecked) {
    el.classList.remove('done'); textEl.classList.remove('done');
    delete state.dailyGoalsChecked[goalId];
    state.xp = Math.max(0,state.xp-xp); state.comeback = Math.max(0,state.comeback-Math.floor(xp/10));
    updateXP();
  } else {
    el.classList.add('done'); el.textContent='✓'; textEl.classList.add('done');
    state.dailyGoalsChecked[goalId] = true;
    addXP(xp);
  }
  save();
}

function renderDailyGoals() {
  const checked = state.dailyGoalsChecked || {};
  Object.keys(checked).forEach(goalId=>{
    const el = document.getElementById('goal-check-'+goalId);
    if (!el) return;
    el.classList.add('done');
    el.textContent = '✓';
    if (el.nextElementSibling) el.nextElementSibling.classList.add('done');
  });
}

// ===================== STREAK =====================
function markStudied() {
  const today = new Date().toDateString();
  if (state.lastStudied === today) { showToast('ℹ️','Already marked today! Keep going!'); return; }
  const daysSinceLastStudy = state.lastStudied
    ? Math.round((new Date(today) - new Date(state.lastStudied)) / (1000*60*60*24))
    : null;

  if (daysSinceLastStudy === 1) {
    // Studied yesterday — normal streak continuation
    state.streak += 1;
    showToast('🔥','Streak extended! '+state.streak+' days!');
  } else if (daysSinceLastStudy === 2 || daysSinceLastStudy === 3) {
    // Missed 1-2 days — streak is frozen (grace period), not reset. Picking
    // back up continues the SAME streak rather than starting over, as long
    // as the gap was 2 days max before this study session.
    state.streak += 1;
    showToast('🧊','Streak frozen and saved! Picked back up at '+state.streak+' days — don\'t push it again!');
  } else {
    // First-ever session, or missed 3+ days — streak resets
    state.streak = 1;
    if (daysSinceLastStudy && daysSinceLastStudy > 3) showToast('💔','Streak reset — missed too many days. Fresh start!');
    else showToast('🔥','Streak started! Day 1!');
  }

  state.longestStreak = Math.max(state.longestStreak||0, state.streak);
  state.lastStudied = today;
  if (!state.studiedDays.includes(today)) state.studiedDays.push(today);
  updateStreak(); addXP(30); save();
}

function updateStreak() {
  document.getElementById('stat-streak').textContent = state.streak;
  document.getElementById('streak-big').textContent = state.streak;
  const cal = document.getElementById('streak-calendar');
  cal.innerHTML = '';
  const days = ['S','M','T','W','T','F','S'];
  for (let i=6; i>=0; i--) {
    const d = new Date(); d.setDate(d.getDate()-i);
    const el = document.createElement('div');
    el.className = 'streak-day';
    if (state.studiedDays.includes(d.toDateString())) el.classList.add('studied');
    if (i===0) el.classList.add('today');
    el.textContent = days[d.getDay()];
    cal.appendChild(el);
  }
}

// ===================== CHAPTERS =====================
function renderChapters() {
  const list = document.getElementById('chapters-list');
  const chaps = state.chapters[currentSubjectView];
  list.innerHTML = '';
  chaps.forEach((ch, i) => {
    const statusIcon = ch.status==='completed'?'✓':ch.status==='in-progress'?'~':'○';
    const wc = ch.weight==='high'?'tag-high':ch.weight==='med'?'tag-med':'tag-low';
    const wt = ch.weight==='high'?'🔴 High':ch.weight==='med'?'🟡 Medium':'🟢 Low';
    const st = ch.subtasks || {theory:false,exercises:false,pyqs:false,reading:false};
    const completedSubs = Object.values(st).filter(Boolean).length;
    const allSubsDone = completedSubs === 4;
    const revLink = ch.revisionLink || '';

    const subtaskHTML = `
      <div class="chapter-subtasks" id="subtask-${currentSubjectView}-${i}">
        <div style="font-size:0.75rem;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:12px">
          Complete all 4 to finish the chapter (${completedSubs}/4)
          <div class="progress-mini" style="margin-top:6px"><div class="progress-mini-fill" style="width:${completedSubs*25}%"></div></div>
        </div>
        <div class="subtask-grid">
          <div class="subtask-item ${st.theory?'done':''}" onclick="toggleSubtask('${currentSubjectView}',${i},'theory')">
            <div class="subtask-check">${st.theory?'✓':''}</div>
            <div style="flex:1">
              <div class="subtask-label">📖 Theory</div>
              <div style="font-size:0.72rem;color:var(--muted);margin-bottom:6px">Read & understood</div>
              <div onclick="event.stopPropagation()" style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
                <div style="display:flex;align-items:center;gap:4px">
                  <span style="font-size:0.68rem;color:var(--muted)">Done</span>
                  <input type="number" min="0" value="${ch.lecturesCompleted||0}" id="lec-done-${currentSubjectView}-${i}" onchange="updateLectureNumbers('${currentSubjectView}',${i})" style="width:46px;padding:4px 6px;font-size:0.75rem;background:var(--surface);border:1px solid var(--border);border-radius:6px;color:var(--text);text-align:center">
                </div>
                <span style="font-size:0.75rem;color:var(--muted)">/</span>
                <div style="display:flex;align-items:center;gap:4px">
                  <input type="number" min="0" value="${ch.lecturesTotal||0}" id="lec-total-${currentSubjectView}-${i}" onchange="updateLectureNumbers('${currentSubjectView}',${i})" style="width:46px;padding:4px 6px;font-size:0.75rem;background:var(--surface);border:1px solid var(--border);border-radius:6px;color:var(--text);text-align:center">
                  <span style="font-size:0.68rem;color:var(--muted)">Total</span>
                </div>
                <span style="font-size:0.72rem;color:var(--accent2);font-weight:700">(${ch.lecturesCompleted||0}/${ch.lecturesTotal||0})</span>
              </div>
            </div>
          </div>
          <div class="subtask-item ${st.exercises?'done':''}" onclick="toggleSubtask('${currentSubjectView}',${i},'exercises')">
            <div class="subtask-check">${st.exercises?'✓':''}</div>
            <div><div class="subtask-label">✏️ Exercises</div><div style="font-size:0.72rem;color:var(--muted)">Attempted & checked</div></div>
          </div>
          <div class="subtask-item ${st.pyqs?'done':''}" onclick="toggleSubtask('${currentSubjectView}',${i},'pyqs')">
            <div class="subtask-check">${st.pyqs?'✓':''}</div>
            <div><div class="subtask-label">📚 PYQs</div><div style="font-size:0.72rem;color:var(--muted)">Solved & verified</div></div>
          </div>
          <div class="subtask-item ${st.reading?'done':''}" onclick="toggleSubtask('${currentSubjectView}',${i},'reading')">
            <div class="subtask-check">${st.reading?'✓':''}</div>
            <div><div class="subtask-label">📓 Chapter Reading</div><div style="font-size:0.72rem;color:var(--muted)">Complete reading done</div></div>
          </div>
        </div>
        <div style="margin-top:12px;padding-top:12px;border-top:1px solid var(--border)">
          <div style="font-size:0.75rem;color:var(--muted);margin-bottom:8px;text-transform:uppercase;letter-spacing:1px">🎬 Rapid Revision Video Link</div>
          ${revLink
            ? `<div style="display:flex;gap:8px;align-items:center">
                <a href="${revLink}" target="_blank" class="revision-link-saved">▶ Watch Revision Video</a>
                <button class="btn btn-secondary btn-sm" onclick="editRevLink('${currentSubjectView}',${i})">✏️ Edit</button>
               </div>`
            : `<div class="revision-link-row">
                <input class="revision-link-input" id="revlink-${currentSubjectView}-${i}" placeholder="Paste YouTube/video link here..." value="">
                <button class="btn btn-success btn-sm" onclick="saveRevLink('${currentSubjectView}',${i})">💾 Save</button>
               </div>`
          }
        </div>
        <div class="mt-16" style="display:flex;gap:8px">
          <button class="btn btn-secondary btn-sm" onclick="logChapterQuestions('${currentSubjectView}',${i})">+ Log Questions</button>
          <button class="btn btn-danger btn-sm" onclick="deleteChapter('${currentSubjectView}',${i})">🗑️ Delete</button>
        </div>
      </div>`;

    list.innerHTML += `
      <div class="chapter-item">
        <div class="chapter-item-header" onclick="toggleChapterExpand('${currentSubjectView}',${i})">
          <div class="chapter-status ${ch.status}" onclick="event.stopPropagation();cycleStatus('${currentSubjectView}',${i})">${statusIcon}</div>
          <div class="chapter-info">
            <div class="chapter-name">${ch.name}</div>
            <div class="chapter-meta">
              <span>Questions: ${ch.questions}</span>
              <span>Confidence: ${ch.confidence}%</span>
              <span style="color:${allSubsDone?'var(--accent4)':'var(--muted)'}">${completedSubs}/4 subtasks</span>
              ${ch.lastRevised?`<span>Last revised: ${ch.lastRevised}</span>`:''}
            </div>
          </div>
          <div class="chapter-actions">
            <span class="chapter-tag ${wc}">${wt}</span>
            <span class="chapter-expand-icon" id="expandicon-${currentSubjectView}-${i}">▼</span>
          </div>
        </div>
        ${subtaskHTML}
      </div>`;
  });
  updateSubjectStats(); updateMonthYearProgress();
}

function toggleChapterExpand(subj, i) {
  const el = document.getElementById(`subtask-${subj}-${i}`);
  const icon = document.getElementById(`expandicon-${subj}-${i}`);
  el.classList.toggle('open');
  icon.classList.toggle('open');
}

function updateLectureNumbers(subj, i) {
  const ch = state.chapters[subj][i];
  const doneInput = document.getElementById(`lec-done-${subj}-${i}`);
  const totalInput = document.getElementById(`lec-total-${subj}-${i}`);
  let done = parseInt(doneInput.value) || 0;
  let total = parseInt(totalInput.value) || 0;
  if (done < 0) done = 0;
  if (total < 0) total = 0;
  if (done > total) done = total; // can't have more completed than total

  const wasAllDone = ch.lecturesTotal>0 && ch.lecturesCompleted >= ch.lecturesTotal;
  const isNowAllDone = total>0 && done >= total;

  ch.lecturesCompleted = done;
  ch.lecturesTotal = total;
  doneInput.value = done;
  totalInput.value = total;
  save();

  if (isNowAllDone && !wasAllDone) {
    showToast('🎬', 'All lectures done for '+ch.name+'!');
    if (!ch.subtasks.theory) {
      // Reuse the normal subtask-toggle path so XP and chapter-completion
      // cascading stay consistent with checking it by hand.
      toggleSubtask(subj, i, 'theory');
      return; // toggleSubtask already calls save()/renderChapters()/reopen
    }
  }
  // Note: dropping below 100% later does NOT auto-uncheck Theory — if you've
  // already marked it done (by hand or via auto-complete), lowering the
  // total afterward shouldn't undo that.

  renderChapters();
  reopenChapterCard(subj, i);
}

function reopenChapterCard(subj, i) {
  setTimeout(()=>{
    const el = document.getElementById(`subtask-${subj}-${i}`);
    const icon = document.getElementById(`expandicon-${subj}-${i}`);
    if(el){el.classList.add('open');} if(icon){icon.classList.add('open');}
  },10);
}

function toggleSubtask(subj, i, task) {
  const ch = state.chapters[subj][i];
  if (!ch.subtasks) ch.subtasks = {theory:false,exercises:false,pyqs:false,reading:false};
  const wasChecked = ch.subtasks[task];
  ch.subtasks[task] = !wasChecked;
  const allDone = Object.values(ch.subtasks).every(Boolean);

  if (allDone && ch.status !== 'completed') {
    ch.status = 'completed';
    addXP(150);
    showToast('🏆', ch.name+' chapter COMPLETED! +150 XP!');
  } else if (!allDone && ch.status === 'completed') {
    ch.status = 'in-progress';
    // Chapter no longer fully complete — claw back the completion bonus so
    // toggling subtasks off and back on can't be used to re-earn it.
    state.xp = Math.max(0, state.xp - 150);
    state.comeback = Math.max(0, state.comeback - 15);
    updateXP();
  } else if (ch.status === 'not-started') {
    ch.status = 'in-progress';
  }

  // Award/remove the per-subtask XP only on the actual on/off transition,
  // never on repeated re-checking, so unchecking and rechecking nets zero.
  if (!wasChecked && ch.subtasks[task]) {
    addXP(20);
  } else if (wasChecked && !ch.subtasks[task]) {
    state.xp = Math.max(0, state.xp - 20);
    state.comeback = Math.max(0, state.comeback - 2);
    updateXP();
  }

  save();
  renderChapters();
  // Re-open the expanded section
  setTimeout(()=>{ 
    const el = document.getElementById(`subtask-${subj}-${i}`);
    const icon = document.getElementById(`expandicon-${subj}-${i}`);
    if(el){el.classList.add('open');} if(icon){icon.classList.add('open');}
  },10);
}

function saveRevLink(subj, i) {
  const input = document.getElementById(`revlink-${subj}-${i}`);
  if (input && input.value.trim()) {
    state.chapters[subj][i].revisionLink = input.value.trim();
    save(); renderChapters();
    showToast('🎬','Revision video saved!');
    setTimeout(()=>{ 
      const el=document.getElementById(`subtask-${subj}-${i}`);
      const icon=document.getElementById(`expandicon-${subj}-${i}`);
      if(el){el.classList.add('open');} if(icon){icon.classList.add('open');}
    },10);
  }
}

function editRevLink(subj, i) {
  state.chapters[subj][i].revisionLink = '';
  save(); renderChapters();
  setTimeout(()=>{ 
    const el=document.getElementById(`subtask-${subj}-${i}`);
    const icon=document.getElementById(`expandicon-${subj}-${i}`);
    if(el){el.classList.add('open');} if(icon){icon.classList.add('open');}
  },10);
}

function cycleStatus(subj, i) {
  const statuses = ['not-started','in-progress','completed'];
  const ch = state.chapters[subj][i];
  const idx = statuses.indexOf(ch.status);
  ch.status = statuses[(idx+1)%3];
  if (ch.status==='completed') {
    ch.lastRevised = new Date().toLocaleDateString();
    if (!ch.completedDate) {
      // First time this chapter has ever been completed — award XP once.
      // Cycling it off and back to completed again later does NOT re-pay,
      // preventing infinite XP farming by spamming the status cycle.
      addXP(100);
      ch.completedDate = new Date().toISOString();
      ch.revisionSchedule = buildRevisionSchedule(ch.completedDate);
      questsChaptersCompletedToday++;
      checkQuestClaims();
      showToast('🏆', ch.name+' completed! +100 XP');
    } else {
      showToast('🏆', ch.name+' marked completed again (already earned XP for this one).');
    }
    // Keep the skill tree consistent: if this chapter has sub-topics, marking
    // it complete here checks them all off too, so the two views never disagree.
    if (ch.subtopics && ch.subtopics.length>0) ch.subtopics.forEach(s=>s.done=true);
  } else {
    ch.revisionSchedule = []; // not meaningfully "completed" anymore, so no revision schedule
    // Note: completedDate is intentionally NOT cleared here anymore — it now
    // permanently marks "has this chapter ever been completed", which is what
    // stops the XP re-award above. Monthly/yearly targets below are filtered
    // to only count chapters currently in 'completed' status, so cycling out
    // correctly removes it from this month's count without erasing the
    // historical completion record.
  }
  save(); renderChapters(); updateSubjectStats(); updateMonthYearProgress(); renderRevisionPage(); renderSkillTree();
}

function showSubject(subj, el) {
  currentSubjectView = subj;
  document.querySelectorAll('.subject-tab').forEach(t=>t.classList.remove('active'));
  if(el) el.classList.add('active');
  renderChapters();
}

function deleteChapter(subj, i) {
  if (!confirm('Delete "'+state.chapters[subj][i].name+'"?')) return;
  state.chapters[subj].splice(i,1);
  save(); renderChapters(); updateSubjectStats(); renderSyllabus(); updateMonthYearProgress();
  showToast('🗑️','Chapter deleted.');
}

// ===== MONTHLY CHAPTER PLANS =====
function monthKey(date) { return date.getFullYear()+'-'+date.getMonth(); }

function populateMonthsSelector() {
  const sel = document.getElementById('months-selector');
  const now = new Date();
  const opts = [];
  // Current month through 9 months ahead — no past months, since plans are forward-looking only
  for (let i=0;i<=9;i++) {
    const d = new Date(now.getFullYear(), now.getMonth()+i, 1);
    const key = monthKey(d);
    const label = d.toLocaleString('default',{month:'long',year:'numeric'});
    opts.push(`<option value="${key}" ${i===0?'selected':''}>${i===0?'📍 ':''}${label}</option>`);
  }
  sel.innerHTML = opts.join('');
}

function renderMonthPlan() {
  const sel = document.getElementById('months-selector');
  if (!sel.value) return;
  const key = sel.value;
  const plan = state.monthlyPlans[key];
  const el = document.getElementById('month-plan-content');
  const subjIcon = {physics:'⚛️',chemistry:'🧪',maths:'📐'};

  if (!plan) {
    // No plan yet for this month — show the picker
    el.innerHTML = `
      <div class="card mb-16">
        <div class="card-title">No plan set for this month yet</div>
        <div style="font-size:0.8rem;color:var(--muted);margin-bottom:16px">Pick exactly 4 chapters per subject below.</div>
        ${['physics','chemistry','maths'].map(s=>`
          <div style="margin-bottom:16px">
            <div style="font-weight:600;font-size:0.85rem;margin-bottom:8px">${subjIcon[s]} ${s.charAt(0).toUpperCase()+s.slice(1)} <span id="picker-count-${s}" style="color:var(--muted);font-size:0.75rem">(0/4 selected)</span></div>
            <div id="picker-list-${s}" style="display:flex;flex-wrap:wrap;gap:8px"></div>
          </div>`).join('')}
        <button class="btn btn-primary" style="width:100%" onclick="saveMonthPlan('${key}')">Save This Month's Plan</button>
      </div>`;
    ['physics','chemistry','maths'].forEach(s=>renderChapterPicker(s));
  } else {
    // Plan exists — show it with live completion status
    el.innerHTML = `
      <div class="card mb-16">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <div class="card-title" style="margin-bottom:0">This Month's Plan</div>
          <button class="skill-subnode-del" onclick="clearMonthPlan('${key}')">🗑️ Reset Plan</button>
        </div>
        ${['physics','chemistry','maths'].map(s=>{
          const chapNames = plan[s]||[];
          const allChaps = state.chapters[s];
          const doneCount = chapNames.filter(name=>{
            const ch = allChaps.find(c=>c.name===name);
            return ch && ch.status==='completed';
          }).length;
          return `<div style="margin-bottom:16px">
            <div style="font-weight:600;font-size:0.85rem;margin-bottom:8px">${subjIcon[s]} ${s.charAt(0).toUpperCase()+s.slice(1)} <span style="color:var(--muted);font-size:0.75rem">(${doneCount}/4 done)</span></div>
            ${chapNames.map(name=>{
              const ch = allChaps.find(c=>c.name===name);
              const done = ch && ch.status==='completed';
              return `<div class="revision-item ${done?'':''}" style="margin-bottom:6px">
                <div class="revision-item-info"><div class="revision-item-chap">${done?'✅':'🔲'} ${name}</div></div>
              </div>`;
            }).join('')}
          </div>`;
        }).join('')}
      </div>`;
  }
}

function renderChapterPicker(subj) {
  const sel = document.getElementById('months-selector');
  const key = sel.value;
  const draftKey = 'draft-'+key+'-'+subj;
  if (!window._monthDraftPicks) window._monthDraftPicks = {};
  if (!window._monthDraftPicks[draftKey]) window._monthDraftPicks[draftKey] = [];
  const picks = window._monthDraftPicks[draftKey];

  const listEl = document.getElementById('picker-list-'+subj);
  listEl.innerHTML = state.chapters[subj].map(c=>{
    const selected = picks.includes(c.name);
    return `<div class="flashcard-chip ${selected?'active':''}" onclick="toggleMonthPick('${subj}','${c.name.replace(/'/g,"\\'")}')">${c.name}</div>`;
  }).join('');
  document.getElementById('picker-count-'+subj).textContent = `(${picks.length}/4 selected)`;
}

function toggleMonthPick(subj, chapterName) {
  const sel = document.getElementById('months-selector');
  const key = sel.value;
  const draftKey = 'draft-'+key+'-'+subj;
  const picks = window._monthDraftPicks[draftKey];
  const idx = picks.indexOf(chapterName);
  if (idx>-1) { picks.splice(idx,1); }
  else {
    if (picks.length>=4) { showToast('⚠️','Only 4 chapters allowed per subject!'); return; }
    picks.push(chapterName);
  }
  renderChapterPicker(subj);
}

function saveMonthPlan(key) {
  const plan = {};
  let valid = true;
  ['physics','chemistry','maths'].forEach(s=>{
    const draftKey = 'draft-'+key+'-'+s;
    const picks = (window._monthDraftPicks && window._monthDraftPicks[draftKey]) || [];
    if (picks.length!==4) valid = false;
    plan[s] = picks;
  });
  if (!valid) { showToast('⚠️','Pick exactly 4 chapters in each subject first!'); return; }
  state.monthlyPlans[key] = plan;
  save();
  showToast('📅','This month\'s plan is locked in!');
  renderMonthPlan();
}

function clearMonthPlan(key) {
  delete state.monthlyPlans[key];
  ['physics','chemistry','maths'].forEach(s=>{ if (window._monthDraftPicks) delete window._monthDraftPicks['draft-'+key+'-'+s]; });
  save(); renderMonthPlan();
}

// ===== BOARDS (NCERT CLASS 11 & 12) =====
let currentBoardsSubject = 'english';

function showBoardsSubject(subj, el) {
  currentBoardsSubject = subj;
  document.querySelectorAll('#boards-subject-tabs .subject-tab').forEach(t=>t.classList.remove('active'));
  if (el) el.classList.add('active');
  renderBoardsChapters();
}

function toggleBoardsChapter(classYear, chapterName, task) {
  const subj = currentBoardsSubject;
  if (!state.boardsCompleted[subj]) state.boardsCompleted[subj] = {};
  if (!state.boardsCompleted[subj][classYear]) state.boardsCompleted[subj][classYear] = {};
  const bucket = state.boardsCompleted[subj][classYear];
  if (!bucket[chapterName] || typeof bucket[chapterName] !== 'object') bucket[chapterName] = {reading:false, qa:false};
  const wasFullyDone = bucket[chapterName].reading && bucket[chapterName].qa;
  bucket[chapterName][task] = !bucket[chapterName][task];
  const nowFullyDone = bucket[chapterName].reading && bucket[chapterName].qa;
  if (nowFullyDone && !wasFullyDone) { addXP(15); showToast('✅', chapterName+' complete!'); }
  save();
  renderBoardsChapters();
}

function renderBoardsClassColumn(subj, classYear) {
  const chapters = (BOARDS_CHAPTERS[subj] && BOARDS_CHAPTERS[subj][classYear]) || [];
  const completed = (state.boardsCompleted[subj] && state.boardsCompleted[subj][classYear]) || {};
  const doneCount = chapters.filter(c=>{
    const entry = completed[c];
    return entry && typeof entry==='object' && entry.reading && entry.qa;
  }).length;
  const pct = chapters.length ? Math.round((doneCount/chapters.length)*100) : 0;
  const rows = chapters.map(name=>{
    const entry = (completed[name] && typeof completed[name]==='object') ? completed[name] : {reading:false, qa:false};
    const safeName = name.replace(/'/g,"\\'");
    const fullyDone = entry.reading && entry.qa;
    return `<div style="background:var(--surface);border:1px solid ${fullyDone?'var(--accent4)':'var(--border)'};border-radius:10px;padding:12px 14px;margin-bottom:10px">
      <div style="font-size:0.85rem;font-weight:600;margin-bottom:8px">${fullyDone?'✅':'🔲'} ${name}</div>
      <div class="subtask-grid" style="margin-bottom:0">
        <div class="subtask-item ${entry.reading?'done':''}" onclick="toggleBoardsChapter(${classYear},'${safeName}','reading')">
          <div class="subtask-check">${entry.reading?'✓':''}</div>
          <div><div class="subtask-label" style="font-size:0.78rem">📖 Chapter Reading</div></div>
        </div>
        <div class="subtask-item ${entry.qa?'done':''}" onclick="toggleBoardsChapter(${classYear},'${safeName}','qa')">
          <div class="subtask-check">${entry.qa?'✓':''}</div>
          <div><div class="subtask-label" style="font-size:0.78rem">❓ Q&amp;A</div></div>
        </div>
      </div>
    </div>`;
  }).join('');
  return `<div class="boards-class-col">
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
        <div class="card-title" style="margin-bottom:0">Class ${classYear}</div>
        <div class="revision-stage-pill">${doneCount}/${chapters.length} done</div>
      </div>
      <div class="subject-bar-bg" style="margin-bottom:16px"><div class="subject-bar-fill" style="width:${pct}%"></div></div>
      ${rows || '<div class="revision-empty">No chapters listed.</div>'}
    </div>
  </div>`;
}

function renderBoardsChapters() {
  const subj = currentBoardsSubject;
  const classYears = Object.keys(BOARDS_CHAPTERS[subj] || {}).sort(); // e.g. ['11','12'] or ['12']
  const el = document.getElementById('boards-content');
  el.innerHTML = `<div class="boards-classes-grid">${classYears.map(cy=>renderBoardsClassColumn(subj, cy)).join('')}</div>`;
}

function updateMonthYearProgress() {
  const allChaps = [...state.chapters.physics.map(c=>({...c,subj:'physics'})),
                     ...state.chapters.chemistry.map(c=>({...c,subj:'chemistry'})),
                     ...state.chapters.maths.map(c=>({...c,subj:'maths'}))];
  const now = new Date();
  const completedWithDate = allChaps.filter(c=>c.status==='completed' && c.completedDate);

  // This month
  const doneThisMonth = completedWithDate.filter(c=>{
    const d = new Date(c.completedDate);
    return d.getMonth()===now.getMonth() && d.getFullYear()===now.getFullYear();
  });
  const monthTarget = 12; // 4 chapters x 3 subjects
  const monthPct = Math.min(100, Math.round((doneThisMonth.length/monthTarget)*100));
  document.getElementById('month-progress-text').textContent = `${doneThisMonth.length} / ${monthTarget}`;
  document.getElementById('month-progress-bar').style.width = monthPct+'%';
  ['physics','chemistry','maths'].forEach(subj=>{
    const cnt = doneThisMonth.filter(c=>c.subj===subj).length;
    const id = subj==='physics'?'month-phy':subj==='chemistry'?'month-chem':'month-math';
    const el = document.getElementById(id);
    if (el) el.textContent = `${cnt}/4`;
  });

  // This year — target scales to months remaining before JEE (Jan 15, 2027), capped at total syllabus
  const doneThisYear = completedWithDate.filter(c=>new Date(c.completedDate).getFullYear()===now.getFullYear());
  const jee = new Date('2027-01-15');
  const monthsRemaining = Math.max(1, Math.round((jee - now) / (1000*60*60*24*30)));
  const yearTarget = Math.min(allChaps.length, monthsRemaining * 12);
  const yearPct = Math.min(100, Math.round((doneThisYear.length/yearTarget)*100));
  document.getElementById('year-progress-text').textContent = `${doneThisYear.length} / ${yearTarget}`;
  document.getElementById('year-progress-bar').style.width = yearPct+'%';
}

function openLogChapterModal() {
  populateLogChapterDropdown();
  populateLogChapterMonths();
  document.getElementById('log-chapter-modal').classList.add('open');
}

function populateLogChapterDropdown() {
  const subj = document.getElementById('log-chapter-subject').value;
  const sel = document.getElementById('log-chapter-chapter');
  sel.innerHTML = state.chapters[subj].map((c,i)=>
    `<option value="${i}">${c.name}${c.status==='completed'?' ✅':''}</option>`
  ).join('');
}

function populateLogChapterMonths() {
  const sel = document.getElementById('log-chapter-month');
  const now = new Date();
  const opts = [];
  for (let i=0;i<=9;i++) {
    const d = new Date(now.getFullYear(), now.getMonth()+i, 1);
    const label = d.toLocaleString('default',{month:'long',year:'numeric'});
    opts.push(`<option value="${d.getFullYear()}-${d.getMonth()}">${i===0?'This Month — ':''}${label}</option>`);
  }
  sel.innerHTML = opts.join('');
}

function confirmLogChapter() {
  const subj = document.getElementById('log-chapter-subject').value;
  const idx = parseInt(document.getElementById('log-chapter-chapter').value);
  const [year, month] = document.getElementById('log-chapter-month').value.split('-').map(Number);
  const ch = state.chapters[subj][idx];
  if (!ch) { showToast('⚠️','Pick a chapter first!'); return; }

  // Set completion date to the 15th of the chosen month (middle of month, avoids edge-of-month timezone issues)
  const completedDate = new Date(year, month, 15, 12).toISOString();
  const wasAlreadyCompleted = ch.status === 'completed';
  ch.status = 'completed';
  ch.completedDate = completedDate;
  ch.lastRevised = new Date(completedDate).toLocaleDateString();
  if (ch.revisionSchedule.length===0) ch.revisionSchedule = buildRevisionSchedule(completedDate);
  if (!wasAlreadyCompleted) addXP(100);

  save();
  closeModal('log-chapter-modal');
  renderChapters(); updateSubjectStats(); updateMonthYearProgress(); renderRevisionPage(); renderSkillTree();
  showToast('📅', `${ch.name} logged as completed!`);
}

function updateSubjectStats() {
  ['physics','chemistry','maths'].forEach(subj => {
    const chs = state.chapters[subj];
    const total = chs.length;
    const done = chs.filter(c=>c.status==='completed').length;
    const pct = total>0?Math.round((done/total)*100):0;
    const bpct = 100-pct;
    const px = subj==='physics'?'phy':subj==='chemistry'?'chem':'math';
    const el = id => document.getElementById(id);
    if(el(px+'-pct')) el(px+'-pct').textContent=pct+'%';
    if(el(px+'-bar')) el(px+'-bar').style.width=pct+'%';
    if(el(px+'-done')) el(px+'-done').textContent=done;
    if(el(px+'-total')) el(px+'-total').textContent=total;
    if(el(px+'-backlog-pct')) el(px+'-backlog-pct').textContent=bpct+'%';
    if(el(px+'-backlog-bar')) el(px+'-backlog-bar').style.width=bpct+'%';
  });
  const allChaps = [...state.chapters.physics,...state.chapters.chemistry,...state.chapters.maths];
  const totalDone = allChaps.filter(c=>c.status==='completed').length;
  const readiness = allChaps.length>0?Math.round((totalDone/allChaps.length)*100):0;
  document.getElementById('stat-chapters').textContent = totalDone;
  document.getElementById('stat-readiness').textContent = readiness+'%';
}

function openAddChapter() { document.getElementById('add-chapter-modal').classList.add('open'); }
function addChapter() {
  const name = document.getElementById('new-chapter-name').value.trim();
  const subj = document.getElementById('new-chapter-subject').value;
  const weight = document.getElementById('new-chapter-weight').value;
  if (!name) return;
  state.chapters[subj].push(makeChapter(name,weight));
  save(); closeModal('add-chapter-modal'); renderChapters();
  showToast('📚','Chapter added: '+name);
}

function logChapterQuestions(subj, i) {
  const n = parseInt(prompt('Questions solved for '+state.chapters[subj][i].name+':'));
  if (!isNaN(n)&&n>0) {
    state.chapters[subj][i].questions += n;
    state.totalQuestions += n;
    document.getElementById('stat-questions').textContent = state.totalQuestions;
    addXP(n*2); save(); renderChapters();
    showToast('📝','+'+n+' questions logged!');
  }
}

// ===================== BOSS BATTLE =====================
function attackBoss(dmg) {
  state.bossHp = Math.max(0,state.bossHp-dmg);
  document.getElementById('boss-hp').style.width = state.bossHp+'%';
  document.getElementById('boss-hp-text').textContent = 'Boss HP: '+state.bossHp+'% — '+(state.bossHp>0?'Keep fighting!':'BOSS DEFEATED! 🎉');
  addXP(dmg*3);
  if (state.bossHp===0) { showToast('🏆','BOSS DEFEATED! 🎉'); setTimeout(()=>{state.bossHp=100;document.getElementById('boss-hp').style.width='100%';},3000); }
  save();
}
function changeBoss() {
  const bosses=['Kinematics','NLM','Electrostatics','Integration','Organic Chemistry','Trigonometry','Thermodynamics','Waves'];
  const b = bosses[Math.floor(Math.random()*bosses.length)];
  state.currentBoss=b; state.bossHp=100;
  document.getElementById('boss-name').textContent='🔥 '+b+' — The Chapter Boss';
  document.getElementById('boss-hp').style.width='100%';
  document.getElementById('boss-hp-text').textContent='Boss HP: 100% — Defeat it by completing all chapter questions!';
  save();
}

// ===================== TIMER =====================
// ===================== INDEPENDENT PER-SUBJECT TIMERS =====================
// Each subject (physics/chemistry/maths) has its own interval and its own
// "current session" counter, so starting/switching one subject never touches
// another. Multiple can run at once if you really want (e.g. testing).
const timerIntervals = { physics:null, chemistry:null, maths:null };
const sessionSeconds = { physics:0, chemistry:0, maths:0 };

function startSubjectTimer(subj) {
  if (timerIntervals[subj]) return; // already running
  timerIntervals[subj] = setInterval(()=>{
    sessionSeconds[subj]++;
    state.subjectSeconds[subj] = (state.subjectSeconds[subj]||0) + 1;
    state.todaySeconds = (state.todaySeconds||0) + 1;
    const dayIdx = (new Date().getDay()+6)%7;
    state.weeklyHours[dayIdx] = Math.round(state.todaySeconds/3600*10)/10;
    updateTimerDisplay();
    const totalSecondsAllSubjects = sessionSeconds.physics + sessionSeconds.chemistry + sessionSeconds.maths;
    if (totalSecondsAllSubjects%3600===0) {
      const hoursCompleted = totalSecondsAllSubjects/3600;
      const xpForThisHour = hoursCompleted <= 4 ? 20 : 5;
      addXP(xpForThisHour); state.studyXpToday+=xpForThisHour;
      document.getElementById('timer-xp-today').textContent = state.studyXpToday;
      showToast('⏱️', hoursCompleted<=4 ? `${hoursCompleted}h studied! +${xpForThisHour} XP!` : `${hoursCompleted}h studied! Bonus +${xpForThisHour} XP for going beyond 4!`);
    }
    if (state.todaySeconds%30===0) checkQuestClaims();
    save();
  },1000);
  document.getElementById('card-'+subj).classList.add('active-subj');
  document.getElementById('start-'+subj).style.display='none';
  document.getElementById('pause-'+subj).style.display='inline-block';
  updateRunningCount();
}

function pauseSubjectTimer(subj) {
  if (timerIntervals[subj]) { clearInterval(timerIntervals[subj]); timerIntervals[subj]=null; }
  document.getElementById('card-'+subj).classList.remove('active-subj');
  document.getElementById('start-'+subj).style.display='inline-block';
  document.getElementById('pause-'+subj).style.display='none';
  updateRunningCount();
  save();
}

function resetSubjectTimer(subj) {
  pauseSubjectTimer(subj);
  sessionSeconds[subj] = 0;
  updateTimerDisplay();
}

function updateRunningCount() {
  const count = Object.values(timerIntervals).filter(Boolean).length;
  const el = document.getElementById('timer-running-count');
  if (el) el.textContent = count;
}

function updateTimerDisplay() {
  ['physics','chemistry','maths'].forEach(subj=>{
    const s = sessionSeconds[subj]||0;
    const h=Math.floor(s/3600).toString().padStart(2,'0');
    const m=Math.floor((s%3600)/60).toString().padStart(2,'0');
    const sec=(s%60).toString().padStart(2,'0');
    const clockEl = document.getElementById('clock-'+subj);
    if (clockEl) clockEl.textContent = h+':'+m+':'+sec;
    const ss=state.subjectSeconds[subj]||0;
    const sh=Math.floor(ss/3600), sm=Math.floor((ss%3600)/60), ssec=ss%60;
    const id=subj==='physics'?'timer-phy':subj==='chemistry'?'timer-chem':'timer-math';
    document.getElementById(id).textContent = sh>0 ? `${sh}h ${sm}m` : sm>0 ? `${sm}m ${ssec}s` : `${ssec}s`;
  });
  const ts=state.todaySeconds||0;
  const th=Math.floor(ts/3600), tm=Math.floor((ts%3600)/60), tsec=ts%60;
  document.getElementById('timer-total-today').textContent = th>0 ? `${th}h ${tm}m` : tm>0 ? `${tm}m ${tsec}s` : `${tsec}s`;
  document.getElementById('stat-hours').textContent=th+'h';
  document.getElementById('timer-xp-today').textContent=state.studyXpToday||0;
}

// ===================== QUESTIONS =====================
function logQuestions() { document.getElementById('log-questions-modal').classList.add('open'); }
function saveQuestions() {
  const n=parseInt(document.getElementById('questions-count').value);
  if (!isNaN(n)&&n>0) {
    state.totalQuestions+=n;
    questsSolvedToday+=n;
    document.getElementById('stat-questions').textContent=state.totalQuestions;
    addXP(n*2); save(); closeModal('log-questions-modal');
    showToast('📝','+'+n+' questions logged! +'+(n*2)+' XP');
    checkQuestClaims();
  }
}

// ===================== DAILY ACCOUNTABILITY =====================
function renderDayStatus() {
  const banner = document.getElementById('day-complete-banner');
  const list = document.getElementById('completed-tasks-list');
  if (state.dayComplete) banner.classList.add('show'); else banner.classList.remove('show');
  if (state.dailyTasks.length===0) {
    list.innerHTML='<div style="text-align:center;color:var(--muted);padding:32px;font-size:0.9rem">No tasks completed yet today. Submit your work above! 💪</div>';
  } else {
    list.innerHTML = state.dailyTasks.map((t,i)=>`
      <div style="background:var(--card);border:1px solid var(--accent4);border-radius:10px;padding:14px 18px;margin-bottom:8px;display:flex;align-items:center;gap:12px">
        <span style="font-size:1.4rem">✅</span>
        <div><div style="font-weight:600;font-size:0.9rem">${t.name}</div><div style="font-size:0.75rem;color:var(--muted)">${t.time} · ${t.problems} problems logged</div></div>
      </div>`).join('');
  }
  renderDayHistory();
}

function renderDayHistory() {
  const el = document.getElementById('day-history-list');
  if (!el) return;
  const history = (state.dayHistory||[]).slice().reverse().slice(0,14); // most recent 14 days
  if (history.length===0) {
    el.innerHTML = '<div style="text-align:center;color:var(--muted);padding:24px;font-size:0.85rem">No past days yet — this archives automatically once a day ends.</div>';
    return;
  }
  el.innerHTML = history.map(d=>{
    const hrs = Math.floor(d.secondsStudied/3600), mins = Math.floor((d.secondsStudied%3600)/60);
    return `<div style="background:var(--card);border:1px solid var(--border);border-radius:10px;padding:12px 18px;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;font-size:0.82rem">
      <div style="font-weight:600">${d.date}</div>
      <div style="display:flex;gap:16px;color:var(--muted)">
        <span>⏱️ ${hrs}h ${mins}m</span>
        <span>📝 ${d.tasksCompleted} tasks</span>
        <span>🗺️ ${d.questsCompleted}/${d.questsTotal} quests</span>
        <span>${d.dayComplete?'✅ Day Complete':'⬜ Incomplete'}</span>
      </div>
    </div>`;
  }).join('');
}

function logDailyTask() {
  const taskName = document.getElementById('task-name-input').value.trim();
  const count = parseInt(document.getElementById('task-count-input').value) || 0;
  if (!taskName) { showToast('⚠️','Please enter a task name!'); return; }
  if (count <= 0) { showToast('⚠️','Enter how many problems you solved!'); return; }
  state.dailyTasks.push({ name:taskName, time:new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}), problems:count });
  state.totalQuestions = (state.totalQuestions||0) + count;
  questsSolvedToday += count;
  addXP(50);
  document.getElementById('task-name-input').value='';
  document.getElementById('task-count-input').value='';
  renderDayStatus();
  showToast('✅','Task "'+taskName+'" logged! +50 XP');
  checkQuestClaims();
  if (state.dailyTasks.length>=2 && !state.dayComplete) {
    state.dayComplete=true;
    document.getElementById('day-complete-banner').classList.add('show');
    markStudied();
    addXP(100);
    showToast('🎉','DAY COMPLETE! +100 bonus XP!');
  }
  save();
}

// ===================== ANALYTICS =====================
function renderCharts() {
  const phySec=state.subjectSeconds.physics||0, chemSec=state.subjectSeconds.chemistry||0, mathSec=state.subjectSeconds.maths||0;
  const totalSec=phySec+chemSec+mathSec||1;
  const allChaps=[...state.chapters.physics,...state.chapters.chemistry,...state.chapters.maths];
  const completed=allChaps.filter(c=>c.status==='completed').length;
  const inProg=allChaps.filter(c=>c.status==='in-progress').length;
  const notStarted=allChaps.filter(c=>c.status==='not-started').length;
  const cd={plugins:{legend:{labels:{color:'#94a3b8',font:{family:'Inter'}}}}};

  if(charts.sp) charts.sp.destroy();
  charts.sp=new Chart(document.getElementById('chart-subject-pie'),{type:'doughnut',data:{labels:['Physics','Chemistry','Maths'],datasets:[{data:[Math.round(phySec/totalSec*100),Math.round(chemSec/totalSec*100),Math.round(mathSec/totalSec*100)],backgroundColor:['#ef4444','#7c3aed','#10b981'],borderWidth:0}]},options:{...cd,cutout:'65%'}});

  if(charts.cp) charts.cp.destroy();
  charts.cp=new Chart(document.getElementById('chart-chapter-pie'),{type:'doughnut',data:{labels:['Completed','In Progress','Not Started'],datasets:[{data:[completed,inProg,notStarted],backgroundColor:['#10b981','#f59e0b','#374151'],borderWidth:0}]},options:{...cd,cutout:'65%'}});

  if(charts.wk) charts.wk.destroy();
  charts.wk=new Chart(document.getElementById('chart-weekly'),{type:'bar',data:{labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],datasets:[{label:'Study Hours',data:state.weeklyHours,backgroundColor:'rgba(124,58,237,0.7)',borderRadius:8}]},options:{...cd,scales:{x:{ticks:{color:'#64748b'},grid:{color:'#1e1e2e'}},y:{ticks:{color:'#64748b'},grid:{color:'#1e1e2e'}}}}});

  if(charts.bl) charts.bl.destroy();
  charts.bl=new Chart(document.getElementById('chart-backlog'),{type:'doughnut',data:{labels:['Physics Backlog','Chemistry Backlog','Maths Backlog'],datasets:[{data:[state.chapters.physics.filter(c=>c.status!=='completed').length,state.chapters.chemistry.filter(c=>c.status!=='completed').length,state.chapters.maths.filter(c=>c.status!=='completed').length],backgroundColor:['#ef4444','#f59e0b','#7c3aed'],borderWidth:0}]},options:{...cd,cutout:'65%'}});
}

// ===================== SYLLABUS MANAGER =====================
const DEFAULT_SYLLABUS = JSON.parse(JSON.stringify(DEFAULT_CHAPTERS));

function renderSyllabus() {
  ['physics','chemistry','maths'].forEach(subj=>{
    const list=document.getElementById('syllabus-'+subj);
    const count=document.getElementById(subj==='physics'?'phy-syllabus-count':subj==='chemistry'?'chem-syllabus-count':'math-syllabus-count');
    if(count) count.textContent='('+state.chapters[subj].length+' chapters)';
    list.innerHTML='';
    state.chapters[subj].forEach((ch,i)=>{
      const item=document.createElement('div');
      item.className='syllabus-item';
      item.innerHTML=`<span class="syllabus-item-name" id="syl-name-${subj}-${i}">${ch.name}</span>
        <button class="btn btn-secondary btn-sm" onclick="syllabusEdit('${subj}',${i})" title="Rename">✏️</button>
        <button class="btn btn-danger btn-sm" onclick="syllabusDelete('${subj}',${i})" title="Delete">🗑️</button>`;
      list.appendChild(item);
    });
  });
}

function syllabusEdit(subj, i) {
  const nameEl=document.getElementById(`syl-name-${subj}-${i}`);
  const current=state.chapters[subj][i].name;
  nameEl.outerHTML=`<input class="syllabus-item-name-edit" id="syl-edit-${subj}-${i}" value="${current}" onblur="syllabusConfirmEdit('${subj}',${i})" onkeydown="if(event.key==='Enter')syllabusConfirmEdit('${subj}',${i})">`;
  document.getElementById(`syl-edit-${subj}-${i}`).focus();
}

function syllabusConfirmEdit(subj, i) {
  const input=document.getElementById(`syl-edit-${subj}-${i}`);
  if (!input) return;
  const newName=input.value.trim();
  if (newName) { state.chapters[subj][i].name=newName; save(); }
  renderSyllabus();
  if(currentSubjectView===subj) renderChapters();
}

function syllabusDelete(subj, i) {
  if (!confirm('Delete "'+state.chapters[subj][i].name+'"?')) return;
  state.chapters[subj].splice(i,1);
  save(); renderSyllabus(); updateSubjectStats(); updateMonthYearProgress();
  showToast('🗑️','Chapter deleted from syllabus.');
}

function syllabusAdd(subj) {
  const input=document.getElementById('syllabus-add-'+subj);
  const name=input.value.trim();
  if (!name) return;
  state.chapters[subj].push(makeChapter(name,'med'));
  input.value='';
  save(); renderSyllabus(); updateSubjectStats(); updateMonthYearProgress();
  showToast('📚','Chapter added: '+name);
}

function resetSyllabus() {
  if (!confirm('Reset ALL syllabus to default JEE syllabus? This will REMOVE custom chapters but keep completion data for matching chapters.')) return;
  ['physics','chemistry','maths'].forEach(subj=>{
    const existing=state.chapters[subj];
    const newList=DEFAULT_CHAPTERS[subj].map(def=>{
      const found=existing.find(e=>e.name===def.name);
      return found||makeChapter(def.name,def.weight);
    });
    state.chapters[subj]=newList;
  });
  save(); renderSyllabus(); updateSubjectStats(); updateMonthYearProgress();
  showToast('🔄','Syllabus reset to default JEE chapters!');
}

// ===================== REVISION (SPACED REPETITION) =====================
function getAllChaptersFlat() {
  return [
    ...state.chapters.physics.map((c,i)=>({...c,subj:'physics',idx:i})),
    ...state.chapters.chemistry.map((c,i)=>({...c,subj:'chemistry',idx:i})),
    ...state.chapters.maths.map((c,i)=>({...c,subj:'maths',idx:i}))
  ];
}

function daysBetween(a, b) { return Math.floor((b-a)/(1000*60*60*24)); }

function renderRevisionPage() {
  const now = new Date();
  const overdueEl = document.getElementById('revision-overdue');
  const todayEl = document.getElementById('revision-today');
  const upcomingEl = document.getElementById('revision-upcoming');
  if (!overdueEl) return; // page not in DOM yet

  const overdue = [], dueToday = [], upcoming = [];
  getAllChaptersFlat().forEach(ch=>{
    (ch.revisionSchedule||[]).forEach((stage, sIdx)=>{
      if (stage.done) return;
      const due = new Date(stage.dueDate);
      const diff = daysBetween(now, due); // negative = overdue
      const item = { ...ch, stage, stageIdx: sIdx };
      if (diff < 0) overdue.push(item);
      else if (diff === 0) dueToday.push(item);
      else if (diff <= 7) upcoming.push(item);
    });
  });

  const stageLabel = days => days===1?'Day 1':days===3?'Day 3':days===7?'Day 7':days===14?'Day 14':'Day 30';
  const subjIcon = s => s==='physics'?'⚛️':s==='chemistry'?'🧪':'📐';

  function renderList(el, items, emptyMsg, variantClass) {
    if (items.length===0) { el.innerHTML = `<div class="revision-empty">${emptyMsg}</div>`; return; }
    el.innerHTML = items.map(item=>`
      <div class="revision-item ${variantClass}">
        <div class="revision-item-info">
          <div class="revision-item-chap">${subjIcon(item.subj)} ${item.name}</div>
          <div class="revision-item-meta">Due: ${new Date(item.stage.dueDate).toLocaleDateString()}</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px">
          <span class="revision-stage-pill">${stageLabel(item.stage.daysAfter)}</span>
          <button class="btn btn-success btn-sm" onclick="completeRevision('${item.subj}',${item.idx},${item.stageIdx})">✅ Revised</button>
        </div>
      </div>`).join('');
  }

  renderList(overdueEl, overdue, 'Nothing overdue — you\'re on top of it! 🎉', 'overdue');
  renderList(todayEl, dueToday, 'No revisions due today.', 'due-today');
  renderList(upcomingEl, upcoming, 'Nothing in the next 7 days yet.', '');
}

function completeRevision(subj, idx, stageIdx) {
  const ch = state.chapters[subj][idx];
  const stage = ch.revisionSchedule[stageIdx];
  stage.done = true;
  stage.doneDate = new Date().toISOString();
  ch.lastRevised = new Date().toLocaleDateString();
  addXP(20);
  questsRevisionsToday++;
  showToast('🧠','Revision logged! +20 XP');
  save(); renderRevisionPage(); checkQuestClaims();
}

// ===================== FLASHCARDS =====================
let flashcardSubject = 'physics';
let flashcardChapterIdx = null;
let flashcardCurrentIdx = 0;

const STARTER_FLASHCARDS = {
  physics: [
    {front:"Newton's Second Law", back:'F = ma — net force equals mass times acceleration', type:'formula'},
    {front:'What is inertia?', back:'The tendency of an object to resist changes in its state of motion', type:'concept'},
  ],
  chemistry: [
    {front:'Ideal Gas Equation', back:'PV = nRT', type:'formula'},
    {front:'What is Avogadro\'s number?', back:'6.022 × 10²³ — number of particles in one mole', type:'concept'},
  ],
  maths: [
    {front:'Quadratic Formula', back:'x = [-b ± √(b²-4ac)] / 2a', type:'formula'},
    {front:'What is a derivative?', back:'The instantaneous rate of change of a function', type:'concept'},
  ],
};

function setFlashcardSubject(subj, el) {
  flashcardSubject = subj;
  document.querySelectorAll('#flashcard-subject-select .flashcard-chip').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  populateFlashcardChapterSelect();
}

function populateFlashcardChapterSelect() {
  const sel = document.getElementById('flashcard-chapter-select');
  const chapters = state.chapters[flashcardSubject];
  sel.innerHTML = chapters.map((c,i)=>`<option value="${i}">${c.name}</option>`).join('');
  flashcardChapterIdx = chapters.length>0 ? 0 : null;
  loadFlashcardDeck();
}

function loadFlashcardDeck() {
  const sel = document.getElementById('flashcard-chapter-select');
  flashcardChapterIdx = parseInt(sel.value);
  const ch = state.chapters[flashcardSubject][flashcardChapterIdx];
  if (!ch) return;
  // Seed starter cards once if this chapter has never had any cards and it's one of the first two chapters (avoid seeding every chapter with generic cards)
  if (ch.flashcards.length===0 && flashcardChapterIdx===0 && STARTER_FLASHCARDS[flashcardSubject]) {
    ch.flashcards = STARTER_FLASHCARDS[flashcardSubject].map((c,i)=>({id:'seed'+i, ...c}));
    save();
  }
  flashcardCurrentIdx = 0;
  renderFlashcardViewer();
}

function renderFlashcardViewer() {
  const ch = state.chapters[flashcardSubject][flashcardChapterIdx];
  const viewer = document.getElementById('flashcard-viewer');
  const empty = document.getElementById('flashcard-empty-state');
  if (!ch || ch.flashcards.length===0) {
    viewer.style.display='none'; empty.style.display='block';
    return;
  }
  viewer.style.display='block'; empty.style.display='none';
  const card = ch.flashcards[flashcardCurrentIdx];
  document.getElementById('flashcard-flip').classList.remove('flipped');
  document.getElementById('flashcard-front-text').textContent = card.front;
  document.getElementById('flashcard-back-text').textContent = card.back;
  document.getElementById('flashcard-type-front').textContent = card.type==='formula'?'🧮 formula':'💡 concept';
  document.getElementById('flashcard-type-back').textContent = card.type==='formula'?'🧮 formula':'💡 concept';
  document.getElementById('flashcard-progress').textContent = `${flashcardCurrentIdx+1} / ${ch.flashcards.length}`;
}

function flipFlashcard() {
  document.getElementById('flashcard-flip').classList.toggle('flipped');
  questsFlashcardsViewedToday++;
  checkQuestClaims();
}

function nextFlashcard() {
  const ch = state.chapters[flashcardSubject][flashcardChapterIdx];
  if (!ch || ch.flashcards.length===0) return;
  flashcardCurrentIdx = (flashcardCurrentIdx+1) % ch.flashcards.length;
  renderFlashcardViewer();
}

function prevFlashcard() {
  const ch = state.chapters[flashcardSubject][flashcardChapterIdx];
  if (!ch || ch.flashcards.length===0) return;
  flashcardCurrentIdx = (flashcardCurrentIdx-1+ch.flashcards.length) % ch.flashcards.length;
  renderFlashcardViewer();
}

function addFlashcard() {
  const front = document.getElementById('new-card-front').value.trim();
  const back = document.getElementById('new-card-back').value.trim();
  const type = document.getElementById('new-card-type').value;
  if (!front || !back) { showToast('⚠️','Fill in both front and back!'); return; }
  const ch = state.chapters[flashcardSubject][flashcardChapterIdx];
  if (!ch) { showToast('⚠️','Pick a chapter first!'); return; }
  ch.flashcards.push({ id:'card'+Date.now(), front, back, type });
  addXP(10);
  document.getElementById('new-card-front').value='';
  document.getElementById('new-card-back').value='';
  flashcardCurrentIdx = ch.flashcards.length-1;
  save(); renderFlashcardViewer();
  showToast('🗂️','Flashcard added!');
}

function deleteCurrentFlashcard() {
  const ch = state.chapters[flashcardSubject][flashcardChapterIdx];
  if (!ch || ch.flashcards.length===0) return;
  ch.flashcards.splice(flashcardCurrentIdx,1);
  flashcardCurrentIdx = Math.max(0, flashcardCurrentIdx-1);
  save(); renderFlashcardViewer();
}

// ===================== BADGES =====================
const BADGE_DEFS = [
  {id:'first_step',icon:'🌱',name:'First Step',desc:'Log your first study session',check:()=>state.todaySeconds>0},
  {id:'streak_3',icon:'🔥',name:'On Fire',desc:'3 day streak',check:()=>state.streak>=3},
  {id:'streak_7',icon:'💥',name:'Week Warrior',desc:'7 day streak',check:()=>state.streak>=7},
  {id:'streak_30',icon:'⚡',name:'Unstoppable',desc:'30 day streak',check:()=>state.streak>=30},
  {id:'xp_500',icon:'⭐',name:'Rising Star',desc:'Earn 500 XP',check:()=>state.xp>=500},
  {id:'xp_5000',icon:'🌟',name:'XP Machine',desc:'Earn 5000 XP',check:()=>state.xp>=5000},
  {id:'chapter_1',icon:'📖',name:'Chapter Cleared',desc:'Complete first chapter',check:()=>[...state.chapters.physics,...state.chapters.chemistry,...state.chapters.maths].filter(c=>c.status==='completed').length>=1},
  {id:'chapter_10',icon:'📚',name:'Chapter Hunter',desc:'Complete 10 chapters',check:()=>[...state.chapters.physics,...state.chapters.chemistry,...state.chapters.maths].filter(c=>c.status==='completed').length>=10},
  {id:'questions_100',icon:'❓',name:'Question Crusher',desc:'Solve 100 questions',check:()=>state.totalQuestions>=100},
  {id:'questions_1000',icon:'💯',name:'Problem Slayer',desc:'Solve 1000 questions',check:()=>state.totalQuestions>=1000},
  {id:'comeback',icon:'⚡',name:'The Comeback',desc:'Comeback score reaches 50',check:()=>state.comeback>=50},
  {id:'iit_bound',icon:'🏆',name:'IIT Bound',desc:'Complete 50% of syllabus',check:()=>{const a=[...state.chapters.physics,...state.chapters.chemistry,...state.chapters.maths];return a.filter(c=>c.status==='completed').length>=Math.floor(a.length/2);}},
  {id:'night_owl',icon:'🦉',name:'Night Owl',desc:'Study 3+ hours in one day',check:()=>state.todaySeconds>=10800},
  {id:'boss_slayer',icon:'⚔️',name:'Boss Slayer',desc:'Defeat a chapter boss',check:()=>state.bossHp===0},
  {id:'level_5',icon:'💎',name:'Diamond Scholar',desc:'Reach Level 5',check:()=>state.level>=5},
  {id:'guwahati',icon:'👑',name:'Guwahati Dreamer',desc:'Never stop believing',check:()=>state.xp>0},
  {id:'daily_complete',icon:'✅',name:'Day Master',desc:'Complete a full day',check:()=>state.dayComplete},
  {id:'subtask_master',icon:'🗂️',name:'Subtask Master',desc:'Complete all subtasks in a chapter',check:()=>[...state.chapters.physics,...state.chapters.chemistry,...state.chapters.maths].some(c=>c.subtasks&&Object.values(c.subtasks).every(Boolean))},
  {id:'coin_collector',icon:'🪙',name:'Coin Collector',desc:'Earn 100 Study Coins',check:()=>(state.coins||0)>=100},
  {id:'quest_master',icon:'🗺️',name:'Quest Master',desc:'Complete 10 daily quests total',check:()=>(state.totalQuestsCompleted||0)>=10},
  {id:'half_mastery',icon:'🌳',name:'Half Tree',desc:'Reach 50% mastery in any subject',check:()=>['physics','chemistry','maths'].some(s=>{const ch=state.chapters[s];return ch.length>0 && (ch.filter(c=>c.status==='completed').length/ch.length)>=0.5;})},
  {id:'full_mastery',icon:'🏔️',name:'Full Mastery',desc:'Reach 100% mastery in any subject',check:()=>['physics','chemistry','maths'].some(s=>{const ch=state.chapters[s];return ch.length>0 && ch.every(c=>c.status==='completed');})},
];

function checkBadges() {
  BADGE_DEFS.forEach(b=>{ if(!state.badges[b.id]&&b.check()){state.badges[b.id]=true;showToast('🏅','Badge unlocked: '+b.name+'!');} });
}
function renderBadges() {
  const grid=document.getElementById('badges-grid'); grid.innerHTML='';
  BADGE_DEFS.forEach(b=>{
    const earned=state.badges[b.id];
    grid.innerHTML+=`<div class="badge-item ${earned?'earned':''}"><div class="badge-icon">${b.icon}</div><div class="badge-name">${b.name}</div><div class="badge-desc">${b.desc}</div>${earned?'<div style="font-size:0.65rem;color:var(--accent4);margin-top:4px">✅ EARNED</div>':'<div style="font-size:0.65rem;color:var(--muted);margin-top:4px">🔒 Locked</div>'}</div>`;
  });
}

// ===================== PROFILE =====================
function renderProfile() {
  document.getElementById('profile-name-input').value = state.userName || 'Sohum';
  document.getElementById('profile-avatar').textContent = state.activeAvatar || '🧑‍🎓';
  document.getElementById('profile-title-display').textContent = state.activeTitle || 'JEE Aspirant';

  const allChaps = getAllChaptersFlat();
  const doneCount = allChaps.filter(c=>c.status==='completed').length;
  const pct = allChaps.length ? Math.round((doneCount/allChaps.length)*100) : 0;
  document.getElementById('profile-completion').textContent = pct + '%';

  document.getElementById('profile-longest-streak').textContent = state.longestStreak || 0;

  const joinDate = state.joinDate ? new Date(state.joinDate) : new Date();
  document.getElementById('profile-join-date').textContent = joinDate.toLocaleDateString('default',{month:'short',day:'numeric',year:'numeric'});

  const totalSecs = (state.subjectSeconds.physics||0)+(state.subjectSeconds.chemistry||0)+(state.subjectSeconds.maths||0);
  document.getElementById('profile-total-hours').textContent = Math.floor(totalSecs/3600) + 'h';

  const grid = document.getElementById('profile-badges-grid');
  grid.innerHTML = '';
  BADGE_DEFS.forEach(b=>{
    const earned = state.badges[b.id];
    if (earned) grid.innerHTML += `<div class="badge-item earned"><div class="badge-icon">${b.icon}</div><div class="badge-name">${b.name}</div></div>`;
  });
  if (Object.keys(state.badges||{}).length===0) {
    grid.innerHTML = '<div class="revision-empty" style="grid-column:1/-1">No achievements unlocked yet — keep studying!</div>';
  }
}

function updateProfileName() {
  const name = document.getElementById('profile-name-input').value.trim();
  state.userName = name || 'Sohum';
  save();
  showToast('👤','Name updated!');
}

function confirmResetProgress() {
  if (!confirm('This will permanently erase ALL your progress — chapters, XP, streaks, everything. This cannot be undone. Are you absolutely sure?')) return;
  if (!confirm('Really sure? Type-confirm by clicking OK one more time to wipe everything.')) return;
  state = defaultState();
  save();
  showToast('🔄','Progress reset. Starting fresh.');
  showPage('dashboard', document.querySelector('.nav-tab'));
  location.reload();
}

function exportProgressBackup() {
  const dataStr = JSON.stringify(state, null, 2);
  const blob = new Blob([dataStr], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `studyhub-backup-${new Date().toISOString().slice(0,10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('💾','Backup downloaded!');
}

// ===================== MODAL & TOAST =====================
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
function showToast(icon, msg) {
  const t=document.getElementById('toast');
  document.getElementById('toast-icon').textContent=icon;
  document.getElementById('toast-msg').textContent=msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3000);
}

// ===================== NOTIFICATIONS =====================
function addNotification(icon, title, message) {
  state.notifications = state.notifications || [];
  state.notifications.unshift({ id:'notif'+Date.now()+Math.random(), icon, title, message, date:new Date().toISOString(), read:false });
  if (state.notifications.length > 50) state.notifications = state.notifications.slice(0,50); // cap history
  save();
  updateNotificationBadge();
}

function updateNotificationBadge() {
  const badge = document.getElementById('notif-badge');
  if (!badge) return;
  const unreadCount = (state.notifications||[]).filter(n=>!n.read).length;
  if (unreadCount > 0) { badge.textContent = unreadCount > 9 ? '9+' : unreadCount; badge.style.display = 'flex'; }
  else { badge.style.display = 'none'; }
}

function renderNotifications() {
  const el = document.getElementById('notifications-list');
  if (!el) return;
  const list = state.notifications || [];
  if (list.length===0) { el.innerHTML = '<div class="revision-empty">No notifications yet — they\'ll show up here as you hit milestones.</div>'; return; }
  el.innerHTML = list.map(n=>`
    <div class="card mb-16" style="border-color:${n.read?'var(--border)':'var(--accent3)'};${n.read?'':'background:rgba(245,158,11,0.06)'}">
      <div style="display:flex;gap:12px;align-items:flex-start">
        <div style="font-size:1.6rem">${n.icon}</div>
        <div style="flex:1">
          <div style="font-weight:700;font-size:0.88rem;margin-bottom:4px">${n.title}${n.read?'':' <span style=\"color:var(--accent3);font-size:0.65rem\">● NEW</span>'}</div>
          <div style="font-size:0.82rem;color:var(--muted);line-height:1.5">${n.message}</div>
          <div style="font-size:0.68rem;color:var(--muted);margin-top:6px">${new Date(n.date).toLocaleString('default',{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'})}</div>
        </div>
      </div>
    </div>`).join('');
  // Visiting the page marks everything as read
  list.forEach(n=>n.read=true);
  save();
  updateNotificationBadge();
}

// ===================== QUOTES =====================
const quotes=['Every chapter you finish is a step closer to IIT Guwahati.','The comeback is always stronger than the setback.','You scored 91.4% in 10th. That genius is still in you.','6 months. Full syllabus. You\'ve got this, Sohum.','Don\'t watch lectures. Solve problems. That\'s the JEE way.','Set a 10-minute timer. Attack the problem. Move on.','IIT Guwahati is not a dream. It\'s a plan.','The syllabus is big. But you\'re bigger.'];

// ===================== INIT =====================
async function init() {
  await loadState();
  resetDailyIfNewDay();
  updateCountdown();
  updateXP();
  updateStreak();
  renderLifestyleWidget();
  renderPyqDppWidget();
  renderDailyGoals();
  updateSubjectStats(); updateMonthYearProgress();
  document.getElementById('stat-questions').textContent=state.totalQuestions;
  document.getElementById('hero-quote').textContent=quotes[Math.floor(Math.random()*quotes.length)];
  if(state.todaySeconds>0) updateTimerDisplay();
  checkBadges(); checkQuestClaims();
  const themeItem = SHOP_THEMES.find(t=>t.id===state.activeTheme);
  if (themeItem) applyTheme(themeItem);
  refreshHeroIdentity();
  updateNotificationBadge();
  const coinsEl = document.getElementById('nav-coins');
  if (coinsEl) coinsEl.textContent = '🪙 ' + (state.coins||0);
  save();
  document.getElementById('boot-screen').style.display='none';
  document.getElementById('app-root').style.display='block';
  setInterval(updateCountdown,60000);
  startMidnightWatcher();
}

// ===================== PASSWORD GATE =====================
const GATE_PASSWORD = 'jay_jagannath1971';
const GATE_SESSION_KEY = 'studyhub_gate_passed';

function checkGatePassword() {
  const input = document.getElementById('gate-password-input');
  const errorEl = document.getElementById('gate-error');
  if (input.value === GATE_PASSWORD) {
    sessionStorage.setItem(GATE_SESSION_KEY, 'true');
    document.getElementById('password-gate').style.display = 'none';
    document.getElementById('boot-screen').style.display = 'flex';
    init();
  } else {
    errorEl.style.display = 'block';
    input.value = '';
    input.focus();
  }
}

(function bootGate() {
  if (sessionStorage.getItem(GATE_SESSION_KEY) === 'true') {
    document.getElementById('password-gate').style.display = 'none';
    document.getElementById('boot-screen').style.display = 'flex';
    init();
  } else {
    document.getElementById('password-gate').style.display = 'flex';
    document.getElementById('gate-password-input').focus();
  }
})();
