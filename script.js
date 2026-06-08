/* ============================================================
   FIRST MONTHSARY — script.js (Redesign v2)
   ============================================================ */
'use strict';

/* ══════════════════════════════════════════════════════════
   CONFIG — personalize here before sharing
══════════════════════════════════════════════════════════ */
const CONFIG = {
  // The welcome message typed in Window 1
  // Use \n for line breaks
  message: [
    "My baby,",
    "",
    "For these past few months of knowing you, I never really expected this kind of feeling to happen. I didn\u2019t think one person could change the way I do things the effort I give you, the way my days feel, and how time seems different whenever we\u2019re yapping or just near each other.",
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
  ].join('\n'),

  typeSpeed: 30, // ms per character (lower = faster)
};

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
   PARTICLE SYSTEM (Canvas)
══════════════════════════════════════════════════════════ */
const canvas = document.getElementById('bgCanvas');
const ctx    = canvas.getContext('2d');

let particles = [];

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', () => {
  resizeCanvas();
  repositionWindowsMobile();
});

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

for (let i = 0; i < 55; i++) particles.push(new Particle(true));

function animateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateCanvas);
}
animateCanvas();

/* ══════════════════════════════════════════════════════════
   INTRO SEQUENCE
══════════════════════════════════════════════════════════ */
const introScreen   = document.getElementById('introScreen');
const loadingText   = document.getElementById('loadingText');
const heartContainer = document.getElementById('heartContainer');
const introHeart    = document.getElementById('introHeart');

let introComplete = false;

function runIntro() {
  // Phase 1: Type "Loading..."
  const loadStr = 'Loading\u2026';
  let charIdx = 0;

  setTimeout(() => {
    const typeInterval = setInterval(() => {
      if (charIdx < loadStr.length) {
        loadingText.textContent += loadStr[charIdx++];
      } else {
        clearInterval(typeInterval);

        // Phase 2: Pause, then fade loading text
        setTimeout(() => {
          loadingText.classList.add('fade');

          // Phase 3: Transition screen background, reveal heart
          setTimeout(() => {
            introScreen.classList.add('revealing');
            heartContainer.classList.add('visible');
          }, 520);

        }, 750);
      }
    }, 85);
  }, 650);
}

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

runIntro();

/* ══════════════════════════════════════════════════════════
   DESKTOP REVEAL — staggered window entrance
══════════════════════════════════════════════════════════ */
const WIN_ORDER = [];
const WIN_DELAYS = [];

function revealDesktop() {
  WIN_ORDER.forEach((winId, i) => {
    setTimeout(() => openWindow(winId, false), WIN_DELAYS[i]);
  });
  updateNavActive(null);
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

  // Special init
  if (winId === 'baby'     && !typingStarted) startTyping();
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
   WIN 1 — TYPING ANIMATION
══════════════════════════════════════════════════════════ */
let typingStarted = false;

function startTyping() {
  typingStarted = true;
  const el     = document.getElementById('lwTyped');
  const cursor = document.getElementById('lwCursor');
  const footer = document.getElementById('lwFooter');
  const msg    = CONFIG.message;
  let idx      = 0;

  el.textContent = '';
  cursor.style.display = 'inline';
  footer.classList.remove('visible');

  function typeNext() {
    if (idx < msg.length) {
      el.textContent += msg[idx];
      idx++;
      const body = el.closest('.win-body');
      if (body) body.scrollTop = body.scrollHeight;
      const delay = CONFIG.typeSpeed + (msg[idx - 1] === '\n' ? 160 : 0);
      setTimeout(typeNext, delay);
    } else {
      // Done — show footer
      setTimeout(() => {
        footer.classList.add('visible');
      }, 600);
    }
  }
  typeNext();
}

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
        if (idx === 0) spawnFireworks(card);
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

// Spawn first one soon, then every 8 seconds
setTimeout(spawnFloatingReason, 3000);
setInterval(spawnFloatingReason, 8000);

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
  spawnBurst(foreverModal);
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
