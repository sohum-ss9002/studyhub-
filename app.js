
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
    revisionSchedule:[], flashcards:[],
    subtopics: (DEFAULT_SUBTOPICS[name]||[]).map(n=>makeSubtopic(n)) };
}

// Real JEE sub-topic breakdowns per chapter — used to auto-populate the Skill Tree.
// You can still add/remove individual sub-topics per chapter from the Skill Tree page.
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
    xp:0, level:1, streak:0, lastStudied:null, studiedDays:[],
    totalQuestions:0, todayHours:0, comeback:0, bossHp:100, currentBoss:'Kinematics',
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
  if (a) a.textContent = state.activeAvatar;
  if (t) t.textContent = state.activeTitle;
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
    addXP(100);
    ch.lastRevised = new Date().toLocaleDateString();
    if (!ch.completedDate) {
      ch.completedDate = new Date().toISOString();
      ch.revisionSchedule = buildRevisionSchedule(ch.completedDate);
    }
    questsChaptersCompletedToday++;
    checkQuestClaims();
    showToast('🌳', `${ch.name} fully mastered! +100 XP`);
  } else if (!allDone && ch.status==='completed') {
    ch.status = anyDone ? 'in-progress' : 'not-started';
    ch.completedDate = null;
    ch.revisionSchedule = [];
  } else if (anyDone && ch.status==='not-started') {
    ch.status = 'in-progress';
  }
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

async function writeStateNow() {
  try {
    showSaveIndicator('saving');
    await window.storage.set(STORAGE_KEY, JSON.stringify(state), false);
    showSaveIndicator('saved');
  } catch (e) {
    console.error('StudyHub save failed:', e);
    showSaveIndicator('error');
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
    if (e.message && e.message.includes('not configured')) {
      showSetupWarning();
    }
    // Key doesn't exist yet (first-ever visit) or storage error — start fresh.
    state = defaultState();
  }
  stateLoaded = true;
}

function showSetupWarning() {
  const banner = document.createElement('div');
  banner.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#dc2626;color:#fff;text-align:center;padding:10px;font-size:0.85rem;z-index:99999;font-family:Inter,sans-serif;';
  banner.innerHTML = '⚠️ Supabase isn\'t set up yet — your progress won\'t save. Open <code style="background:rgba(0,0,0,0.3);padding:2px 6px;border-radius:4px">storage.js</code> and follow the setup comment at the top.';
  document.body.prepend(banner);
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
}

// ===================== PAGES =====================
function showPage(page, tabEl) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  if (tabEl) tabEl.classList.add('active');
  if (page === 'chapters') renderChapters();
  if (page === 'analytics') renderCharts();
  if (page === 'achievements') renderBadges();
  if (page === 'syllabus') renderSyllabus();
  if (page === 'accountability') renderDayStatus();
  if (page === 'revision') { renderRevisionPage(); populateFlashcardChapterSelect(); }
  if (page === 'quests') renderQuests();
  if (page === 'skilltree') renderSkillTree();
  if (page === 'shop') renderShop();
}

// ===================== COUNTDOWN =====================
function updateCountdown() {
  const jee = new Date('2027-01-15');
  const diff = Math.ceil((jee - new Date()) / (1000*60*60*24));
  document.getElementById('countdown-days').textContent = diff;
}

// ===================== XP & LEVELS =====================
const LEVELS = [
  {min:0, name:'⚔️ ROOKIE SCHOLAR'},{min:500, name:'📖 KNOWLEDGE SEEKER'},
  {min:1500, name:'🔥 CHAPTER SLAYER'},{min:3000, name:'⚡ FORMULA MASTER'},
  {min:6000, name:'🧠 PROBLEM CRUSHER'},{min:10000, name:'🏆 JEE WARRIOR'},
  {min:15000, name:'💎 ELITE SCHOLAR'},{min:25000, name:'👑 IIT DESTINED'},
];

function addXP(amount) {
  state.xp += amount;
  state.comeback = Math.min(100, state.comeback + Math.floor(amount/10));
  updateXP();
  showToast('⚡', `+${amount} XP earned!`);
  checkBadges();
  save();
}

function updateXP() {
  let level = 0;
  for (let i = LEVELS.length-1; i >= 0; i--) { if (state.xp >= LEVELS[i].min) { level=i; break; } }
  state.level = level+1;
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
function toggleGoal(el, xp) {
  const textEl = el.nextElementSibling;
  if (el.classList.contains('done')) {
    el.classList.remove('done'); textEl.classList.remove('done');
    state.xp = Math.max(0,state.xp-xp); state.comeback = Math.max(0,state.comeback-Math.floor(xp/10));
    updateXP();
  } else {
    el.classList.add('done'); el.textContent='✓'; textEl.classList.add('done');
    addXP(xp);
  }
  save();
}

// ===================== STREAK =====================
function markStudied() {
  const today = new Date().toDateString();
  if (state.lastStudied === today) { showToast('ℹ️','Already marked today! Keep going!'); return; }
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  state.streak = state.lastStudied === yesterday.toDateString() ? state.streak+1 : 1;
  state.lastStudied = today;
  if (!state.studiedDays.includes(today)) state.studiedDays.push(today);
  updateStreak(); addXP(30); save();
  showToast('🔥','Streak extended! '+state.streak+' days!');
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
            <div><div class="subtask-label">📖 Theory</div><div style="font-size:0.72rem;color:var(--muted)">Read & understood</div></div>
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

function toggleSubtask(subj, i, task) {
  const ch = state.chapters[subj][i];
  if (!ch.subtasks) ch.subtasks = {theory:false,exercises:false,pyqs:false,reading:false};
  ch.subtasks[task] = !ch.subtasks[task];
  const allDone = Object.values(ch.subtasks).every(Boolean);
  if (allDone && ch.status !== 'completed') {
    ch.status = 'completed';
    addXP(150);
    showToast('🏆', ch.name+' chapter COMPLETED! +150 XP!');
  } else if (!allDone && ch.status === 'completed') {
    ch.status = 'in-progress';
  } else if (ch.status === 'not-started') {
    ch.status = 'in-progress';
  }
  if (ch.subtasks[task]) addXP(20);
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
    addXP(100);
    ch.lastRevised = new Date().toLocaleDateString();
    if (!ch.completedDate) {
      ch.completedDate = new Date().toISOString(); // first completion only
      ch.revisionSchedule = buildRevisionSchedule(ch.completedDate);
      questsChaptersCompletedToday++;
      checkQuestClaims();
    }
    // Keep the skill tree consistent: if this chapter has sub-topics, marking
    // it complete here checks them all off too, so the two views never disagree.
    if (ch.subtopics && ch.subtopics.length>0) ch.subtopics.forEach(s=>s.done=true);
  } else {
    ch.completedDate = null; // cycled back out of completed — no longer counts toward month/year targets
    ch.revisionSchedule = []; // not meaningfully "completed" anymore, so no revision schedule
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
  for (let i=0;i<12;i++) {
    const d = new Date(now.getFullYear(), now.getMonth()-i, 1);
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
      addXP(50); state.studyXpToday+=50;
      document.getElementById('timer-xp-today').textContent = state.studyXpToday;
      showToast('⏱️','1 hour studied! +50 XP!');
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
    const sh=Math.floor(ss/3600), sm=Math.floor((ss%3600)/60);
    const id=subj==='physics'?'timer-phy':subj==='chemistry'?'timer-chem':'timer-math';
    document.getElementById(id).textContent=sh+'h '+sm+'m';
  });
  const ts=state.todaySeconds||0;
  const th=Math.floor(ts/3600), tm=Math.floor((ts%3600)/60);
  document.getElementById('timer-total-today').textContent=th+'h '+tm+'m';
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

// ===================== MODAL & TOAST =====================
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
function showToast(icon, msg) {
  const t=document.getElementById('toast');
  document.getElementById('toast-icon').textContent=icon;
  document.getElementById('toast-msg').textContent=msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3000);
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
  updateSubjectStats(); updateMonthYearProgress();
  document.getElementById('stat-questions').textContent=state.totalQuestions;
  document.getElementById('hero-quote').textContent=quotes[Math.floor(Math.random()*quotes.length)];
  if(state.todaySeconds>0) updateTimerDisplay();
  checkBadges(); checkQuestClaims();
  const themeItem = SHOP_THEMES.find(t=>t.id===state.activeTheme);
  if (themeItem) applyTheme(themeItem);
  refreshHeroIdentity();
  const coinsEl = document.getElementById('nav-coins');
  if (coinsEl) coinsEl.textContent = '🪙 ' + (state.coins||0);
  save();
  document.getElementById('boot-screen').style.display='none';
  document.getElementById('app-root').style.display='block';
  setInterval(updateCountdown,60000);
  startMidnightWatcher();
}
init();
