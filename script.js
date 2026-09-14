/* ============================================================
   FIRST MONTHSARY — script.js (Redesign v2)
   ============================================================ */
'use strict';

/* ══════════════════════════════════════════════════════════
   CONFIG — personalize here before sharing
══════════════════════════════════════════════════════════ */
const CONFIG = {
  typeSpeed: 30,
};

/* ══════════════════════════════════════════════════════════
   MONTHSARY MESSAGES
   ─────────────────────────────────────────────────────
   To add a new monthsary, copy an object below and add it
   to the array. The envelope + badge update automatically.
═════════════════════════════════════════════════════ */
const MONTHSARY_MESSAGES = [
  {
    num: 1,
    label: 'First Monthsary',
    date: 'June 14, 2026',
    letter: [
      "My baby,",
      "",
      "For these past few months of knowing you, I never really expected this kind of feeling to happen. I didn\u2019t think one person could change the way I do things\u2014the effort I give you, the way my days feel, and how time seems different whenever we\u2019re yapping or just near each other.",
      "",
      "Thank you for every laugh, every \u201calulut\u201d moment, and every time you chose to stay even when I annoy you too much. Every single one of those moments has meant a lot to me.",
      "",
      "I'm still trying my best to be the best for you, and I hope I can keep making you happy and annoyed.",
      "",
      "You literally turned my black and white world into color. I hope you like what I made for you.",
      "",
      "Happy first monthsary, to my prettiest baby.",
      "",
      "I love you so much."
    ].join('\n')
  },

   {
     num: 2,
     label: 'Second Monthsary',
     date: 'July 14, 2026',
     letter: [
        "My baby,",
        "",
        "Can't believe it's already been two months since we met, and yet we're still choosing each other. Even though we always have fights, say hurtful words, and sometimes get to the point where it feels like one of us might leave, we still choose to stay and fix things afterward.",
        "",
        "Even this month, I still choose to be the better man for you, to understand you more, and to keep learning how to love you better. I just hope that no matter how many fights or arguments we have, at the end of the day, you and I will still choose to be together.",
        "",
        "Happy second monthsary, to my prettiest baby.",
     ].join('\n')
   },

   {
     num: 3,
     label: 'Third Monthsary',
     date: 'August 14, 2026',
     letter: [
       "My baby,",
       "",
       "Yohooo, it's been three months already, and we're still here! Yey! It feels like it's been so long since we first met lol. ",
       "",
       "Even this month, and for many more months to come, I'll always continue to love you. I'll keep updating this website I made until the homepage is full of messages from me to you.",
       "",
       "I hope you never stop loving me (and being freaky lol) the same way I love you. Also I hope we can continue to grow together, and that we can keep making (and making out) each other happy.",
        "",
        "Still the man you met four months ago, and will continue to be the better man that you deserve. Happy third monthsary, to my prettiest baby.",
     ].join('\n')
   },

   {
  num: 4,
  label: 'Fourth Monthsary',
  date: 'September 14, 2026',
  letter: [
    "My baby,",
    "",
    "Yohooo, four months already! Damn, bilis ng panahon. I hope we grow together more and more, and learn from our mistakes before. I know our arguments is often but I hope we can still choose to stay together and fix things after.",
    "",
    "Even our arguments, I still choose to love you regardless of what happened. I hope you still choose to love me after our arguments, no matter how many times i annoy you because that's how many times I love you and wanna fuck you lol.",
    "",
    "Happy fourth monthsary, to my prettiest baby.",
  ].join('\n')
},
];


/* ══════════════════════════════════════════════════════════
   50 LOVE REASONS (no emojis)
══════════════════════════════════════════════════════════ */
const REASONS = [
  "The way you show the real you, the weirdiness and all.",
  "The way you show your freakiness without any shame.",
  "How you listen \u2014 really listen \u2014 when I yap.",
  "The way you boost my confidence and call me handsome.",
  "How you make me feel appreciated.",
  "The way you enjoy the little things, like your cravings, and my lame ass joke.",
  "How you make me feel like I matter.",
  "The way you were so excited talking to me even when you're tired.",
  "The joy in your eyes whenever we met.",
  "Even you're mad at me you still care and choose to stay.",
  "How you make me to be a better person.",
  "How I annoy you too much but you still stay.",
  "Your patience whenever I mess up (I'm sorry).",
  "How you celebrate small things with genuine joy.",
  "The way you teach me things like a wife.",
  "Your curiosity \u2014 the way you want to understand everything.",
  "How you love me so deeply and not make me jealous.",
  "The way you laugh when I found your ticklish spot.",
  "Your voice. The sound of it.",
  "How you fight for everyday moments.",
  "The way you kiss me.",
  "The way you touch me.",
  "The way you make me feel understood.",
  "Your sensitivity \u2014 it tells me how deeply you feel.",
  "How perfectly you are for me.",
  "The way you yap on something random.",
  "The way you show something random and say \u201clook at this\u201d.",
  "The way you make me laugh when I least expect it.",
  "The way you make me feel important to you.",
  "How you trust me, and how seriously I take that trust.",
  "The way you support me when I need it most.",
  "How you care for me even when I\u2019m at my worst.",
  "The way you make my days better just by random moments.",
  "The way you care about me and make me feel cared for.",
  "How you dream and talk about our future together.",
  "The way you show love and affection whenever you want, without caring about the time or place.",
  "How you make me feel like I am never too much.",
  "Your slangs and the way you use them that makes me want copy them.",
  "The way you scold me when I do something wrong but you still love me even you block me for a while.",
  "How you make me feel chosen, every single day.",
  "Your sense of humor that matches mine.",
  "Every time you call me cute and handsome.",
  "Every I love you and I miss you that you say randomly.",
  "How you miss me when we\u2019re not together, even if it\u2019s just for a few hours.",
  "Your clinginess that I like so much.",
  "Your hugs that make me feel I don't want to let go.",
  "How we can yap for hours and be alulut together.",
  "The way you have become someone I cannot imagine without.",
  "How grateful I am to have you in my life.",
  "Everything about you are perfect to me, and I want to be yours forever.",
];

/* ══════════════════════════════════════════════════════════
   REDUCED MOTION — skip all animations if user prefers
══════════════════════════════════════════════════════════ */
const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ══════════════════════════════════════════════════════════
   PARTICLE SYSTEM (Canvas)
   Throttled on low-end devices (≤4 logical cores → 25 particles)
══════════════════════════════════════════════════════════ */
const canvas = document.getElementById('bgCanvas');
const ctx    = canvas.getContext('2d');

let particles = [];

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
function debounce(fn, delay) {
  let t = null;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}

const handleResize = debounce(() => {
  resizeCanvas();
  repositionWindowsMobile();
  initMonthsary();
  if (typeof initMonthsaryWalk === 'function') initMonthsaryWalk();
}, 200);
window.addEventListener('resize', handleResize);

const PARTICLE_COUNT = REDUCED_MOTION ? 0
  : ((navigator.hardwareConcurrency || 4) <= 4 ? 25 : 55);

class Particle {
  constructor(init = false) {
    this.reset(init);
  }
  reset(init = false) {
    this.x     = Math.random() * canvas.width;
    this.y     = init ? Math.random() * canvas.height : canvas.height + 10;
    this.r     = Math.random() * 3 + 1.5;
    this.vy    = -(Math.random() * 0.35 + 0.12);
    this.vx    = (Math.random() - 0.5) * 0.2;
    this.alpha = Math.random() * 0.3 + 0.08;
    // Soft greens
    const hues = [75, 85, 65, 95, 105];
    this.hue   = hues[Math.floor(Math.random() * hues.length)];
    this.sat   = Math.random() * 30 + 40;
    this.lum   = Math.random() * 20 + 65;
    this.wobble      = Math.random() * Math.PI * 2;
    this.wobbleSpeed = Math.random() * 0.018 + 0.008;
  }
  update() {
    this.wobble += this.wobbleSpeed;
    this.x += this.vx + Math.sin(this.wobble) * 0.25;
    this.y += this.vy;
    if (this.y < -20) this.reset(false);
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alpha})`;
    ctx.fill();
  }
}

for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle(true));

function animateCanvas() {
  if (PARTICLE_COUNT === 0) return; // skip entirely if no particles
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateCanvas);
}
animateCanvas();

/* ══════════════════════════════════════════════════════════
   INTRO SEQUENCE
══════════════════════════════════════════════════════════ */
const introScreen    = document.getElementById('introScreen');
const heartContainer = document.getElementById('heartContainer');
const introHeart     = document.getElementById('introHeart');

let introComplete = false;

function handleHeartClick() {
  if (introComplete) return;
  introComplete = true;

  introHeart.classList.add('clicked');

  setTimeout(() => {
    introScreen.classList.add('fade-out');
    setTimeout(() => {
      introScreen.style.display = 'none';
      revealDesktop();
    }, 820);
  }, 300);
}

introHeart.addEventListener('click', handleHeartClick);
introHeart.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleHeartClick(); }
});
introHeart.addEventListener('touchend', e => { e.preventDefault(); handleHeartClick(); });

/* ══════════════════════════════════════════════════════════
   DESKTOP REVEAL — staggered window entrance
══════════════════════════════════════════════════════════ */
/* ── Windows to auto-open after intro (empty = open only when clicked) ── */
const WIN_ORDER  = [];
const WIN_DELAYS = [];

function revealDesktop() {
  WIN_ORDER.forEach((winId, i) => {
    setTimeout(() => openWindow(winId, false), WIN_DELAYS[i]);
  });
  updateNavActive(null);
  // Spawn floating monthsary envelopes & walking countdown
  setTimeout(initMonthsary, 400);
  setTimeout(initMonthsaryWalk, 600);
}

/* ══════════════════════════════════════════════════════════
   WINDOW MANAGER
══════════════════════════════════════════════════════════ */
let zBase = 100;

function focusWindow(win) {
  document.querySelectorAll('.win').forEach(w => w.classList.remove('focused'));
  win.classList.add('focused');
  win.style.zIndex = ++zBase;
}

function openWindow(winId, focus = true) {
  const win = document.getElementById(`win-${winId}`);
  if (!win) return;
  win.style.display = '';
  win.classList.remove('closing', 'minimized');
  // Trigger animation
  void win.offsetWidth;
  win.classList.add('open');
  if (focus) focusWindow(win);
  updateNavActive(winId);

  if (winId === 'memories' && !galleryInited) initGallery();
}

function closeWindow(winId) {
  const win = document.getElementById(`win-${winId}`);
  if (!win) return;
  win.classList.add('closing');
  setTimeout(() => {
    win.style.display = 'none';
    win.classList.remove('closing', 'open', 'focused');
    updateNavActive(null);
  }, 290);
}

function minimizeWindow(winId) {
  const win = document.getElementById(`win-${winId}`);
  if (!win) return;
  win.style.opacity = '0';
  win.style.pointerEvents = 'none';
  setTimeout(() => { win.style.display = 'none'; win.style.opacity = ''; win.style.pointerEvents = ''; }, 300);
}

function updateNavActive(activeWinId) {
  document.querySelectorAll('.fn-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.win === activeWinId);
  });
}

// Dot buttons: close / minimize
document.querySelectorAll('.wd-close').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    closeWindow(btn.dataset.target);
  });
});
document.querySelectorAll('.wd-min').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    minimizeWindow(btn.dataset.target);
  });
});

// Focus on click inside window
document.querySelectorAll('.win').forEach(win => {
  win.addEventListener('mousedown',  () => focusWindow(win), true);
  win.addEventListener('touchstart', () => focusWindow(win), { passive: true, capture: true });
});

// ── Floating nav ───────────────────────────────────────────
document.querySelectorAll('.fn-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const winId = btn.dataset.win;
    const win   = document.getElementById(`win-${winId}`);
    if (!win || !win.classList.contains('open') || win.style.display === 'none') {
      openWindow(winId);
    } else if (win.classList.contains('focused')) {
      minimizeWindow(winId);
    } else {
      focusWindow(win);
      updateNavActive(winId);
    }
  });
});

// ── Keyboard: Escape closes focused window ─────────────────
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  const focused = document.querySelector('.win.focused');
  if (focused) closeWindow(focused.dataset.win);
});

/* ══════════════════════════════════════════════════════════
   DRAG (mouse + touch)
══════════════════════════════════════════════════════════ */
document.querySelectorAll('[data-drag]').forEach(bar => {
  const winId = bar.dataset.drag;
  const win   = document.getElementById(`win-${winId}`);

  let dragging = false;
  let startX, startY, initLeft, initTop;

  function isMobile() { return window.innerWidth <= 700; }

  function dragStart(cx, cy) {
    if (isMobile()) return;
    dragging = true;
    const rect = win.getBoundingClientRect();
    initLeft   = rect.left;
    initTop    = rect.top;
    startX     = cx;
    startY     = cy;
    win.style.left      = `${initLeft}px`;
    win.style.top       = `${initTop}px`;
    win.style.right     = 'auto';
    win.style.transform = 'none';
    focusWindow(win);
  }

  function dragMove(cx, cy) {
    if (!dragging) return;
    const dx = cx - startX;
    const dy = cy - startY;
    const nl = Math.max(0, Math.min(initLeft + dx, window.innerWidth  - win.offsetWidth));
    const nt = Math.max(0, Math.min(initTop  + dy, window.innerHeight - 60));
    win.style.left = `${nl}px`;
    win.style.top  = `${nt}px`;
  }

  function dragEnd() { dragging = false; }

  bar.addEventListener('mousedown', e => {
    if (e.target.classList.contains('wd')) return;
    dragStart(e.clientX, e.clientY);
  });
  document.addEventListener('mousemove', e => dragMove(e.clientX, e.clientY));
  document.addEventListener('mouseup',   dragEnd);

  bar.addEventListener('touchstart', e => {
    if (e.target.classList.contains('wd')) return;
    const t = e.touches[0];
    dragStart(t.clientX, t.clientY);
  }, { passive: true });
  document.addEventListener('touchmove', e => {
    if (!dragging) return;
    const t = e.touches[0];
    dragMove(t.clientX, t.clientY);
  }, { passive: true });
  document.addEventListener('touchend', dragEnd);
});

/* ══════════════════════════════════════════════════════════
   WIN 1 — TYPING ANIMATION (for monthsary modal)
══════════════════════════════════════════════════════════ */
let typingStarted = false;
let typingTimer   = null;

function startTyping(text, targetElId, footerId) {
  if (typingTimer) clearInterval(typingTimer);
  typingStarted = true;
  const el     = document.getElementById(targetElId);
  const footer = document.getElementById(footerId);
  let idx      = 0;

  el.textContent = '';
  if (footer) footer.style.display = 'none';

  typingTimer = setInterval(() => {
    if (idx < text.length) {
      el.textContent += text[idx++];
    } else {
      clearInterval(typingTimer);
      if (footer) {
        setTimeout(() => {
          footer.style.display = '';
          footer.classList.add('visible');
        }, 500);
      }
    }
  }, 30);
}

/* ══════════════════════════════════════════════════════════
   MONTHSARY ENVELOPE SYSTEM
══════════════════════════════════════════════════════════ */
const MS_SEALS = ['\u2665', '\u2661', '\u2764'];

function ordinalSuffix(n) {
  const s = ['th','st','nd','rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// ── Manila date helpers for envelope gating ─────────────────
function parseMonthsaryDate(dateStr) {
  const MONTHS = { January:0, February:1, March:2, April:3, May:4, June:5, July:6, August:7, September:8, October:9, November:10, December:11 };
  const m = String(dateStr).match(/([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})/);
  if (!m) return null;
  const month = MONTHS[m[1]];
  if (month === undefined) return null;
  return new Date(Date.UTC(parseInt(m[3], 10), month, parseInt(m[2], 10), 0, 0, 0));
}

function getManilaTodayMidnightUtc() {
  const now = getManilaNow();
  return new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0));
}

let _midnightTimer = null;
function scheduleMonthsaryMidnightCheck() {
  if (_midnightTimer) clearTimeout(_midnightTimer);
  const nowManila = getManilaNow();
  const nextMidnight = new Date(nowManila);
  nextMidnight.setHours(24, 0, 0, 0);
  const msUntil = nextMidnight - nowManila + 1200;
  _midnightTimer = setTimeout(() => {
    initMonthsary();
    if (typeof initMonthsaryWalk === 'function') initMonthsaryWalk();
    scheduleMonthsaryMidnightCheck();
  }, msUntil);
}

function initMonthsary() {
  const layer   = document.getElementById('monthsaryLayer');
  const counter = document.getElementById('msCounter');
  if (!layer) return;

  // Clear existing envelopes to avoid duplicates on resize
  layer.innerHTML = '';

  // ── DATE GATE: only show envelopes whose date <= today Manila midnight ──
  const todayMidnight = getManilaTodayMidnightUtc();
  const visibleMessages = MONTHSARY_MESSAGES
    .map((msg, origIdx) => ({ msg, origIdx }))
    .filter(({ msg }) => {
      const d = parseMonthsaryDate(msg.date);
      return d && d.getTime() <= todayMidnight.getTime();
    });

  // Update standalone counter pill — counts visible only (so tomorrow 3→4)
  if (counter) {
    const n = visibleMessages.length;
    if (n === 0) {
      counter.textContent = '';
      counter.classList.remove('visible');
    } else {
      counter.textContent = n === 1 ? '1 monthsary' : `${n} monthsaries`;
      setTimeout(() => counter.classList.add('visible'), 800);
    }
  }

  // Safe percentage coordinates (tested for mobile 320px to wide desktop 4K)
  // Keeps all envelopes within safe visible zones far away from edges and the bottom walk bar
  const isMobile = window.innerWidth <= 700;
  const positions = isMobile ? [
    { left: '10%', top: '16%', dur: '6s',   delay: '0s' },
    { left: '64%', top: '14%', dur: '6.8s', delay: '-2s' },
    { left: '38%', top: '34%', dur: '6.2s', delay: '-3.5s' },
    { left: '12%', top: '48%', dur: '7.2s', delay: '-1s' },
    { left: '62%', top: '50%', dur: '6.5s', delay: '-4s' },
  ] : [
    { left: '8%',  top: '18%', dur: '7s',   delay: '0s' },
    { left: '74%', top: '14%', dur: '7.5s', delay: '-2.5s' },
    { left: '42%', top: '36%', dur: '6.8s', delay: '-4s' },
    { left: '14%', top: '54%', dur: '8s',   delay: '-1.5s' },
    { left: '72%', top: '52%', dur: '7.2s', delay: '-3.5s' },
  ];

  visibleMessages.forEach(({ msg, origIdx }, displayIdx) => {
    const pos = positions[displayIdx % positions.length];
    const env = document.createElement('div');
    env.className = 'ms-envelope';
    env.setAttribute('role', 'button');
    env.setAttribute('tabindex', '0');
    env.setAttribute('aria-label', `Open ${msg.label}`);
    env.style.left = pos.left;
    env.style.top  = pos.top;
    env.style.animationDuration = pos.dur;
    env.style.animationDelay    = pos.delay;

    env.innerHTML = `
      <div class="ms-env-card">
        <span class="ms-env-seal">${MS_SEALS[origIdx % MS_SEALS.length]}</span>
      </div>
      <span class="ms-env-label">${ordinalSuffix(msg.num)}</span>
    `;
    env.addEventListener('click', () => openMonthsaryLetter(origIdx));
    env.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openMonthsaryLetter(origIdx); }
    });
    layer.appendChild(env);
  });

  scheduleMonthsaryMidnightCheck();
}

function openMonthsaryLetter(idx) {
  const msg    = MONTHSARY_MESSAGES[idx];
  const modal  = document.getElementById('monthsaryModal');
  const ordEl  = document.getElementById('msOrdinal');
  const dateEl = document.getElementById('msDate');
  
  ordEl.textContent  = msg.label;
  dateEl.textContent = msg.date;

  modal.style.display = '';
  void modal.offsetWidth;
  modal.classList.add('open');

  // Start typing the letter
  startTyping(msg.letter, 'msTyped', 'msFooter');
  spawnBurst(modal);
}

function pulseEnvelopes() {
  document.querySelectorAll('.ms-envelope').forEach(env => {
    env.style.animation = 'none';
    void env.offsetWidth;
    env.style.animation = '';
    env.style.filter = 'drop-shadow(0 0 12px rgba(186, 142, 161, 0.9))';
    setTimeout(() => { env.style.filter = ''; }, 1200);
  });
}

// Monthsary modal close
document.getElementById('msClose')?.addEventListener('click', () => {
  const modal = document.getElementById('monthsaryModal');
  modal.classList.remove('open');
  setTimeout(() => { modal.style.display = 'none'; }, 450);
  if (typingTimer) { clearInterval(typingTimer); typingTimer = null; }
});


/* ══════════════════════════════════════════════════════════
   WIN 2 — GALLERY
══════════════════════════════════════════════════════════ */
let galleryInited = false;
let galIndex      = 0;
const GAL_TOTAL   = 5;

function initGallery() {
  if (galleryInited) return;
  galleryInited = true;

  // Build nav dots
  const dotsEl = document.getElementById('galDots');
  for (let i = 0; i < GAL_TOTAL; i++) {
    const d = document.createElement('button');
    d.className = 'gal-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('role', 'tab');
    d.setAttribute('aria-label', `Photo ${i + 1}`);
    d.dataset.idx = i;
    d.addEventListener('click', () => goToSlide(i));
    dotsEl.appendChild(d);
  }

  document.getElementById('galPrev').addEventListener('click', () => goToSlide(galIndex - 1));
  document.getElementById('galNext').addEventListener('click', () => goToSlide(galIndex + 1));

  // ── Polaroid flip on click / tap ────────────────────────
  document.querySelectorAll('.pol-card').forEach((card, idx) => {
    function flipCard(e) {
      // Don't flip when tapping the nav arrows
      if (e.target.closest('.gal-arrow') || e.target.closest('.gal-dots')) return;
      
      const isFlippingOpen = !card.classList.contains('flipped');
      card.classList.toggle('flipped');
      
      if (isFlippingOpen) {
        if      (idx === 0) spawnFireworks(card);
        else if (idx === 2) spawnSigmaEffect(card);
        else if (idx === 3) spawnPawsEffect(card);
        else if (idx === 4) spawnHeartsEffect(card);
        else spawnBurst(card);
      }
    }
    card.addEventListener('click', flipCard);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flipCard(e); }
    });
  });
}

function goToSlide(idx) {
  // Un-flip current card when sliding away
  const cards = document.querySelectorAll('.pol-card');
  if (cards[galIndex]) cards[galIndex].classList.remove('flipped');

  galIndex = ((idx % GAL_TOTAL) + GAL_TOTAL) % GAL_TOTAL;
  document.getElementById('galTrack').style.transform = `translateX(-${galIndex * 100}%)`;
  document.querySelectorAll('.gal-dot').forEach((d, i) => {
    d.classList.toggle('active', i === galIndex);
  });
}

/* ══════════════════════════════════════════════════════════
   FLOATING REASONS
══════════════════════════════════════════════════════════ */
let reasonsPool = [...REASONS].sort(() => Math.random() - 0.5);
let reasonIdx   = 0;

function spawnFloatingReason() {
  if (reasonsPool.length === 0) return;
  const reason = reasonsPool[reasonIdx];
  reasonIdx = (reasonIdx + 1) % reasonsPool.length;

  const el = document.createElement('div');
  el.className = 'floating-reason';
  el.textContent = reason;
  
  // Random horizontal position, keeping it mostly away from edges
  el.style.left = `${Math.random() * 60 + 20}vw`; 
  
  // Random duration between 15 and 25 seconds
  const dur = Math.random() * 10 + 15; 
  el.style.animationDuration = `${dur}s`;

  document.getElementById('desktop').appendChild(el);

  setTimeout(() => {
    el.remove();
  }, dur * 1000 + 500);
}

// Spawn first one soon, then every 8 seconds — only if motion is OK
if (!REDUCED_MOTION) {
  setTimeout(spawnFloatingReason, 3000);
  setInterval(spawnFloatingReason, 8000);
}

/* (Open Me window removed — envelope logic no longer needed) */

/* ══════════════════════════════════════════════════════════
   PARTICLE BURST (on interactions)
══════════════════════════════════════════════════════════ */
function spawnBurst(originEl) {
  const rect = originEl.getBoundingClientRect();
  const cx   = rect.left + rect.width  / 2;
  const cy   = rect.top  + rect.height / 2;
  const count = 10;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'float-particle';
    const size  = Math.random() * 5 + 3;
    const angle = (i / count) * Math.PI * 2 + Math.random() * 0.4;
    const dist  = Math.random() * 55 + 30;
    const dx    = Math.cos(angle) * dist;
    const hues  = [75, 85, 65, 95, 105];
    const hue   = hues[Math.floor(Math.random() * hues.length)];
    const dur   = Math.random() * 0.8 + 0.6;

    el.style.cssText = `
      left: ${cx - size / 2}px;
      top: ${cy - size / 2}px;
      width: ${size}px;
      height: ${size}px;
      background: hsla(${hue}, 60%, 72%, 0.8);
      --dx: ${dx}px;
      animation-duration: ${dur}s;
      position: fixed;
      z-index: 9999;
      pointer-events: none;
      border-radius: 50%;
      animation: particleRise ${dur}s ease forwards;
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), dur * 1000 + 50);
  }
}

/* ══════════════════════════════════════════════════════════
   FIREWORKS EFFECT (For Polaroid 1)
══════════════════════════════════════════════════════════ */
function spawnFireworks(originEl) {
  const rect = originEl.getBoundingClientRect();
  const baseCx = rect.left + rect.width / 2;
  const baseCy = rect.top + rect.height / 2;
  
  // Fire 5 bursts over 1 second, centered around the photo
  for (let j = 0; j < 5; j++) {
    setTimeout(() => {
      const cx = baseCx + (Math.random() * 180 - 90);
      const cy = baseCy + (Math.random() * 180 - 90);
      createFireworkBurst(cx, cy);
    }, Math.random() * 1000);
  }
}

function createFireworkBurst(cx, cy) {
  const count = 45; 
  const baseHue = Math.random() * 360; 
  
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    const size  = Math.random() * 6 + 4; // Larger particles
    const angle = (i / count) * Math.PI * 2 + Math.random() * 0.2;
    const dist  = Math.random() * 180 + 80; // Wider spread
    const dx    = Math.cos(angle) * dist;
    const dy    = Math.sin(angle) * dist - 40;
    const hue   = baseHue + Math.random() * 50 - 25;
    const dur   = Math.random() * 1.5 + 1.2; // Slower explosion (1.2s to 2.7s)

    el.style.cssText = `
      left: ${cx - size/2}px;
      top: ${cy - size/2}px;
      width: ${size}px;
      height: ${size}px;
      background: hsla(${hue}, 90%, 65%, 1);
      box-shadow: 0 0 12px hsla(${hue}, 90%, 65%, 0.8);
      --dx: ${dx}px;
      --dy: ${dy}px;
      position: fixed;
      z-index: 9999;
      pointer-events: none;
      border-radius: 50%;
      animation: fireworkExplode ${dur}s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), dur * 1000 + 50);
  }
}

/* ══════════════════════════════════════════════════════════
   RESPONSIVE HELPER
══════════════════════════════════════════════════════════ */
function repositionWindowsMobile() {
  if (window.innerWidth <= 700) {
    document.querySelectorAll('.win').forEach(win => {
      win.style.left      = '';
      win.style.right     = '';
      win.style.top       = '';
      win.style.transform = '';
    });
  }
}

/* ══════════════════════════════════════════════════════════
   FOREVER EASTER EGG (Slideshow & Certificate)
══════════════════════════════════════════════════════════ */
const easterEggIcon = document.getElementById('easterEggIcon');
const foreverModal  = document.getElementById('foreverModal');
const fsSlides      = document.querySelectorAll('.fs-slide');
const fsNext        = document.getElementById('fsNext');
const foreverSlideshow = document.getElementById('foreverSlideshow');
const foreverCertificate = document.getElementById('foreverCertificate');
const fcClose       = document.getElementById('fcClose');

const holdBtn  = document.getElementById('fsHoldBtn');
const ringFill = document.getElementById('fsRingFill');

let fsIndex = 0;
let holdStartTime = 0;
const HOLD_DURATION = 5000;
const CIRCUMFERENCE = 283;

function sealOurFate() {
  foreverSlideshow.style.display = 'none';
  foreverCertificate.style.display = 'block';
  setTimeout(() => foreverCertificate.classList.add('active'), 50);
  // Big fireworks celebration for the certificate
  for (let j = 0; j < 8; j++) {
    setTimeout(() => {
      const cx = Math.random() * window.innerWidth * 0.8 + window.innerWidth * 0.1;
      const cy = Math.random() * window.innerHeight * 0.7 + window.innerHeight * 0.1;
      createFireworkBurst(cx, cy);
    }, j * 250);
  }
}

function updateRing() {
  if (!holdBtn.classList.contains('holding')) return;
  const elapsed = Date.now() - holdStartTime;
  const progress = Math.min(elapsed / HOLD_DURATION, 1);
  ringFill.style.strokeDashoffset = CIRCUMFERENCE - (progress * CIRCUMFERENCE);
  
  if (progress >= 1) {
    endHold();
    sealOurFate();
  } else {
    requestAnimationFrame(updateRing);
  }
}

function startHold(e) {
  if (e.cancelable) e.preventDefault();
  holdBtn.classList.add('holding');
  holdStartTime = Date.now();
  requestAnimationFrame(updateRing);
}

function endHold() {
  if (!holdBtn) return;
  holdBtn.classList.remove('holding');
  ringFill.style.strokeDashoffset = CIRCUMFERENCE;
}

if (easterEggIcon && foreverModal) {
  easterEggIcon.addEventListener('click', () => {
    foreverModal.classList.add('open');
    spawnBurst(easterEggIcon);
    
    fsIndex = 0;
    fsSlides.forEach((s, i) => s.classList.toggle('active', i === 0));
    fsNext.style.display = '';
    foreverSlideshow.style.display = 'flex';
    foreverCertificate.style.display = 'none';
    foreverCertificate.classList.remove('active');
    if (ringFill) ringFill.style.strokeDashoffset = CIRCUMFERENCE;
  });
  
  fsNext.addEventListener('click', () => {
    fsSlides[fsIndex].classList.remove('active');
    fsIndex++;
    
    if (fsIndex < fsSlides.length) {
      fsSlides[fsIndex].classList.add('active');
      if (fsIndex === fsSlides.length - 1) {
        fsNext.style.display = 'none';
      }
    }
  });

  if (holdBtn) {
    holdBtn.addEventListener('mousedown', startHold);
    holdBtn.addEventListener('touchstart', startHold, {passive: false});
    window.addEventListener('mouseup', endHold);
    window.addEventListener('touchend', endHold);
  }

  fcClose.addEventListener('click', () => {
    foreverModal.classList.remove('open');
  });
}

/* ══════════════════════════════════════════════════════════
   CLOCK (taskbar removed, keep for optional use)
══════════════════════════════════════════════════════════ */
  // (No taskbar clock in this redesign — removed as requested)

/* ══════════════════════════════════════════════════════════
   POLAROID SPECIAL EFFECTS
══════════════════════════════════════════════════════════ */

// ─ Polaroid 3: Sigma / GIGACHAD ──────────────────────────
function spawnSigmaEffect(originEl) {
  const rect   = originEl.getBoundingClientRect();
  const cx     = rect.left + rect.width / 2;
  const cy     = rect.top  + rect.height / 2;
  const glyphs = ['\u03A3', '\u26A1', '\u{1F4AA}', 'CHAD', '\u{1F608}', '\u26A1', '\u03A3'];

  glyphs.forEach((g, i) => {
    setTimeout(() => {
      const el  = document.createElement('div');
      const ang = (i / glyphs.length) * Math.PI * 2;
      const dx  = Math.cos(ang) * (80 + Math.random() * 60);
      const dy  = Math.sin(ang) * (80 + Math.random() * 60) - 30;
      el.textContent = g;
      el.style.cssText = `
        position: fixed;
        left: ${cx}px; top: ${cy}px;
        font-size: ${g.length > 2 ? 16 : 28}px;
        font-weight: 900;
        color: #c0c0c0;
        text-shadow: 0 0 8px rgba(180,180,180,0.8);
        pointer-events: none;
        z-index: 9999;
        white-space: nowrap;
        --dx: ${dx}px; --dy: ${dy}px;
        animation: fireworkExplode 1.4s cubic-bezier(0.25,1,0.5,1) forwards;
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 1500);
    }, i * 80);
  });
}

// ─ Polaroid 4: Dogs & Cats ───────────────────────────
function spawnPawsEffect(originEl) {
  const rect   = originEl.getBoundingClientRect();
  const cx     = rect.left + rect.width / 2;
  const cy     = rect.top  + rect.height / 2;
  const glyphs = ['\u{1F436}', '\u{1F431}', '\uD83D\uDC3E', '\u{1F436}', '\u{1F431}', '\uD83D\uDC3E', '\u{1F436}', '\u{1F431}'];

  glyphs.forEach((g, i) => {
    setTimeout(() => {
      const el  = document.createElement('div');
      const ang = (i / glyphs.length) * Math.PI * 2;
      const dx  = Math.cos(ang) * (100 + Math.random() * 70);
      const dy  = Math.sin(ang) * (100 + Math.random() * 70) - 40;
      el.textContent = g;
      el.style.cssText = `
        position: fixed;
        left: ${cx}px; top: ${cy}px;
        font-size: 30px;
        pointer-events: none;
        z-index: 9999;
        --dx: ${dx}px; --dy: ${dy}px;
        animation: fireworkExplode 1.4s cubic-bezier(0.25,1,0.5,1) forwards;
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 1500);
    }, i * 70);
  });
}

// ─ Polaroid 5: Floating Hearts ────────────────────────
function spawnHeartsEffect(originEl) {
  const rect   = originEl.getBoundingClientRect();
  const cx     = rect.left + rect.width / 2;
  const cy     = rect.top  + rect.height / 2;
  const hearts = ['\u2764\uFE0F', '\uD83E\uDD0D', '\uD83D\uDC95', '\u2665', '\u2764\uFE0F', '\uD83D\uDC9E', '\u2665', '\uD83D\uDC95', '\u2764\uFE0F', '\uD83E\uDD0D'];

  hearts.forEach((h, i) => {
    setTimeout(() => {
      const el   = document.createElement('div');
      const ang  = (i / hearts.length) * Math.PI * 2;
      const dist = 80 + Math.random() * 90;
      const dx   = Math.cos(ang) * dist;
      const dy   = Math.sin(ang) * dist - 50;
      const size = 22 + Math.random() * 16;
      el.textContent = h;
      el.style.cssText = `
        position: fixed;
        left: ${cx}px; top: ${cy}px;
        font-size: ${size}px;
        pointer-events: none;
        z-index: 9999;
        --dx: ${dx}px; --dy: ${dy}px;
        animation: fireworkExplode 1.6s cubic-bezier(0.25,1,0.5,1) forwards;
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 1700);
    }, i * 60);
  });
}

/* ══════════════════════════════════════════════════════════
   WALKING MONTHSARY COUNTDOWN
══════════════════════════════════════════════════════════ */

// ── 1. Manila Time & Date Calculations ────────────────────
function getManilaNow() {
  const now = new Date();
  // Asia/Manila is UTC+8
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  return new Date(utc + (3600000 * 8));
}

function getNextMonthsaryDate() {
  const now = getManilaNow();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  let targetYear = year;
  let targetMonth = month;

  // Reset on the 15th so the next countdown starts after the 14th has passed
  if (day >= 15) {
    targetMonth++;
    if (targetMonth > 11) {
      targetMonth = 0;
      targetYear++;
    }
  }

  // Returns UTC date corresponding to Manila midnight of the 14th
  return new Date(Date.UTC(targetYear, targetMonth, 14, 0, 0, 0));
}

function getDaysUntilNext() {
  const now = getManilaNow();
  const todayMidnight = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0));
  const nextTarget = getNextMonthsaryDate();
  return Math.round((nextTarget - todayMidnight) / 86400000);
}

function getNextMonthsaryNumber() {
  const target = getNextMonthsaryDate();
  const targetYear = target.getUTCFullYear();
  const targetMonth = target.getUTCMonth(); // 0 = Jan, 5 = June
  // Month 1 was June 14, 2026 (year: 2026, month: 5)
  return (targetYear - 2026) * 12 + (targetMonth - 5) + 1;
}

// ── 2. Fallback Generic Monthsary Letter ───────────────────
function triggerGenericMonthsaryLetter(num, dateStr) {
  const modal  = document.getElementById('monthsaryModal');
  const ordEl  = document.getElementById('msOrdinal');
  const dateEl = document.getElementById('msDate');
  if (!modal || !ordEl || !dateEl) return;

  ordEl.textContent  = `Happy ${ordinalSuffix(num)} Monthsary!`;
  dateEl.textContent = dateStr;

  modal.style.display = '';
  void modal.offsetWidth;
  modal.classList.add('open');

  const fallbackLetter = [
    "My baby,",
    "",
    `Happy ${ordinalSuffix(num)} monthsary to us!`,
    "",
    "Another month of being together, loving you, and annoying each other. Thank you for choosing to stay by my side through everything.",
    "",
    "I'm so lucky to have you, and I love you more and more each day.",
    "",
    "Always your annoying man"
  ].join('\n');

  startTyping(fallbackLetter, 'msTyped', 'msFooter');
  spawnBurst(modal);
}

// ── 3. Meeting Celebration Event ──────────────────────────
function celebrateMeeting(monthsaryNum, dateStr, autoTriggerModal = false) {
  const heart = document.getElementById('mwHeart');

  // Confetti / Fireworks bursts
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const cx = (window.innerWidth * 0.2) + Math.random() * (window.innerWidth * 0.6);
      const cy = (window.innerHeight * 0.2) + Math.random() * (window.innerHeight * 0.5);
      if (typeof createFireworkBurst === 'function') {
        createFireworkBurst(cx, cy);
      }
    }, i * 220);
  }

  // Heart particle burst
  if (heart && typeof spawnBurst === 'function') {
    spawnBurst(heart);
  }

  // Auto-trigger monthsary letter modal
  if (autoTriggerModal) {
    setTimeout(() => {
      const msgIndex = MONTHSARY_MESSAGES.findIndex(m => m.num === monthsaryNum);
      if (msgIndex !== -1 && typeof openMonthsaryLetter === 'function') {
        openMonthsaryLetter(msgIndex);
      } else {
        triggerGenericMonthsaryLetter(monthsaryNum, dateStr);
      }
    }, 1500);
  }
}

// ── 4. Main Init & Positioning ────────────────────────────
function initMonthsaryWalk() {
  const container = document.getElementById('monthsaryWalk');
  const label     = document.getElementById('mwLabel');
  const me        = document.getElementById('mwMe');
  const her       = document.getElementById('mwHer');
  const trackArea = document.getElementById('mwTrackArea');

  if (!container || !label || !me || !her || !trackArea) return;

  const daysUntil    = getDaysUntilNext();
  const monthsaryNum = getNextMonthsaryNumber();
  const targetDate   = getNextMonthsaryDate();
  const dateStr      = targetDate.toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC'
  });

  const WALK_VISIBLE_DAYS = 30;

  // Only visible when next monthsary is <= 30 days away
  if (daysUntil > WALK_VISIBLE_DAYS) {
    container.classList.remove('visible', 'meeting');
    return;
  }

  container.classList.add('visible');

  // Progress from 0 (30 days away) to 1 (0 days away)
  const progress = 1 - (daysUntil / WALK_VISIBLE_DAYS);

  if (daysUntil === 0) {
    // ── Meeting day (14th) ──
    container.classList.add('meeting');
    label.textContent = `Happy ${ordinalSuffix(monthsaryNum)} Monthsary!`;

    // Position in center facing each other
    me.style.left   = 'calc(50% - 32px)';
    me.style.right  = 'auto';
    her.style.left  = 'calc(50% + 2px)';
    her.style.right = 'auto';

    // Check if already celebrated today to avoid spamming every refresh
    const now = getManilaNow();
    const todayKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const lastCeleb = localStorage.getItem('lastCelebratedMonthsary');

    if (lastCeleb !== todayKey) {
      localStorage.setItem('lastCelebratedMonthsary', todayKey);
      setTimeout(() => celebrateMeeting(monthsaryNum, dateStr, true), 1000);
    }
  } else {
    // ── Approaching each other (1 to 30 days away) ──
    container.classList.remove('meeting');
    if (daysUntil === 1) {
      label.textContent = `1 day until our ${ordinalSuffix(monthsaryNum)} monthsary...`;
    } else {
      label.textContent = `${daysUntil} days until our ${ordinalSuffix(monthsaryNum)} monthsary...`;
    }

    // Walking positions (percentage from edges):
    // At 30 days (progress = 0): me at 4% left, her at 4% right
    // At 1 day (progress = 0.967): me at 37% left, her at 37% right
    const walkOffset = 4 + (38 * progress);
    me.style.left   = `${walkOffset}%`;
    me.style.right  = 'auto';
    her.style.right = `${walkOffset}%`;
    her.style.left  = 'auto';
  }

  // Interactive click on track or characters
  trackArea.onclick = () => {
    if (daysUntil === 0) {
      celebrateMeeting(monthsaryNum, dateStr, true);
    } else {
      if (typeof spawnBurst === 'function') spawnBurst(trackArea);
      me.style.transform = 'translateY(-10px) scale(1.1)';
      her.style.transform = 'translateY(-10px) scale(1.1)';
      setTimeout(() => {
        me.style.transform = '';
        her.style.transform = '';
      }, 350);
    }
  };
}
