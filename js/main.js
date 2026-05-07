/* ============================================================
   FORMSPREE — sostituire con il proprio endpoint
   1. Vai su https://formspree.io e registrati con tprandini@proton.me
   2. Crea un nuovo form e copia l'ID (es. xabcdefg)
   3. Sostituisci YOUR_FORMSPREE_ID qui sotto
   ============================================================ */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mpqbllkj'; // <-- sostituire

/* ============================================================
   INIT AOS — fade-in scroll animations
   ============================================================ */
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 60,
});

/* ============================================================
   THEME TOGGLE — persistenza in localStorage
   ============================================================ */
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const stored = localStorage.getItem('tp-theme');
if (stored) root.setAttribute('data-theme', stored);
themeToggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('tp-theme', next);
});

/* ============================================================
   SCROLL PROGRESS BAR + NAV STATE
   ============================================================ */
const scrollProgress = document.getElementById('scrollProgress');
const nav = document.getElementById('nav');
function onScroll() {
  const h = document.documentElement;
  const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
  scrollProgress.style.width = (scrolled * 100) + '%';
  nav.classList.toggle('scrolled', h.scrollTop > 12);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ============================================================
   SCROLL REVEAL via IntersectionObserver
   (per le skill bars e altri elementi non-AOS)
   ============================================================ */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in-view');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.skill').forEach(el => io.observe(el));

/* ============================================================
   COUNTER ANIMATION — statistiche
   ============================================================ */
const counterIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = parseInt(el.dataset.target, 10);
    const dur = 1400;
    const start = performance.now();
    function tick(now) {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(eased * target);
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    counterIO.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('.counter').forEach(el => counterIO.observe(el));

/* ============================================================
   TYPING EFFECT — hero
   ============================================================ */
const phrases = ['Full Stack Developer', 'Web Designer', 'Problem Solver'];
const typedTextEl = document.getElementById('typedText');
let phraseIdx = 0, charIdx = 0, deleting = false;
function typeLoop() {
  const current = phrases[phraseIdx];
  if (!deleting) {
    typedTextEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1500);
      return;
    }
  } else {
    typedTextEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, deleting ? 40 : 80);
}
typeLoop();

/* ============================================================
   CUSTOM CURSOR — solo desktop con pointer fine
   ============================================================ */
const isFine = window.matchMedia('(pointer: fine)').matches && window.innerWidth > 860;
if (isFine) {
  document.body.classList.add('has-cursor');
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;
  window.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  });
  function loop() {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  }
  loop();
  document.querySelectorAll('a, button, input, textarea, .stack-item, .project, .stat-card').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
  });
  document.addEventListener('mouseleave', () => { dot.style.opacity = 0; ring.style.opacity = 0; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = 1; ring.style.opacity = 0.6; });
}

/* ============================================================
   PROJECT CARDS — mouse tracking per glow effect
   ============================================================ */
document.querySelectorAll('.project').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width) * 100;
    const my = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mx', mx + '%');
    card.style.setProperty('--my', my + '%');
  });
});

/* ============================================================
   CONTACT FORM — invio via EmailJS con fallback simulato
   ============================================================ */
const form   = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = form.querySelector('button');
  const original = btn.innerHTML;
  btn.innerHTML = 'Invio in corso…'; btn.disabled = true;
  status.classList.remove('show', 'error');

  // Compila i campi nascosti prima dell'invio
  const nome    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const oggetto = document.getElementById('subject').value.trim();
  document.getElementById('formReplyTo').value  = email;
  document.getElementById('formSubject').value  =
    `📩 Messaggio da ${nome}${oggetto ? ' — ' + oggetto : ''}`;

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      status.textContent = '✓ Messaggio inviato. Ti rispondo entro 24h.';
      status.classList.add('show');
      btn.innerHTML = '✓ Inviato';
      setTimeout(() => {
        form.reset();
        btn.innerHTML = original; btn.disabled = false;
        setTimeout(() => status.classList.remove('show'), 2400);
      }, 1400);
    } else {
      const data = await res.json();
      throw new Error(data?.errors?.map(e => e.message).join(', ') || 'Errore sconosciuto');
    }
  } catch (err) {
    status.textContent = '✕ Errore nell\'invio. Riprova o scrivimi direttamente a tprandini@proton.me';
    status.classList.add('show', 'error');
    btn.innerHTML = original; btn.disabled = false;
  }
});

/* ============================================================
   SMOOTH ANCHOR SCROLL con offset navbar
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1 && id !== '#') {
      const t = document.querySelector(id);
      if (t) {
        e.preventDefault();
        const y = t.getBoundingClientRect().top + window.pageYOffset - 60;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  });
});

/* Anno corrente nel footer */
document.getElementById('year').textContent = new Date().getFullYear();
