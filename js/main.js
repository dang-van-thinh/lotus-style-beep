/* ════════════════════════════════════
   BEEPEC — Main Script
════════════════════════════════════ */

// ── Header shadow on scroll ──
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 8
    ? '0 2px 24px rgba(0,0,0,0.08)'
    : '';
}, { passive: true });


// ── Scroll reveal ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Called after dynamic content is injected to observe new .reveal elements
window.initReveal = function (root) {
  (root || document).querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
};


// ── Before/After sliders ──
// Exposed globally so services.js can call after dynamic render
window.initBASliders = function (root) {
  (root || document).querySelectorAll('.ba-card').forEach(card => {
    if (card._baInit) return; // skip already-initialized cards
    card._baInit = true;

    const input = card.querySelector('.ba-input');
    const after = card.querySelector('.ba-after');
    const line  = card.querySelector('.ba-line');
    if (!input) return;

    function update(v) {
      after.style.clipPath = `inset(0 ${100 - v}% 0 0)`;
      line.style.left      = v + '%';
    }

    input.addEventListener('input', function () { update(this.value); });
    input.addEventListener('touchmove', function (e) {
      const rect = card.getBoundingClientRect();
      const x    = e.touches[0].clientX - rect.left;
      const v    = Math.min(100, Math.max(0, (x / rect.width) * 100));
      this.value = v;
      update(v);
    }, { passive: true });
  });
};

// Init on first load for static pages (portfolio.html etc.)
window.initBASliders();


// ── Portfolio filter ──
function filterWork(cat, btn) {
  document.querySelectorAll('.filter-tab').forEach(t => {
    t.style.background  = '';
    t.style.color       = '';
    t.style.borderColor = '';
  });
  btn.style.background  = 'var(--orange)';
  btn.style.color       = '#fff';
  btn.style.borderColor = 'transparent';

  document.querySelectorAll('#portfolio-grid [data-cat]').forEach(card => {
    const show = cat === 'all' || card.dataset.cat === cat;
    if (show) {
      card.style.display = '';
      card.style.opacity = '0';
      requestAnimationFrame(() => {
        card.style.transition = 'opacity 0.3s ease-out';
        card.style.opacity    = '1';
      });
    } else {
      card.style.transition = 'opacity 0.25s ease-out';
      card.style.opacity    = '0';
      setTimeout(() => { card.style.display = 'none'; }, 260);
    }
  });
}

(function initFirstTab() {
  const first = document.querySelector('.filter-tab');
  if (!first) return;
  first.style.background  = 'var(--orange)';
  first.style.color       = '#fff';
  first.style.borderColor = 'transparent';
})();


// ── Footer email form ──
function handleFooterForm(e) {
  e.preventDefault();
  const btn   = document.getElementById('footer-btn');
  const input = e.target.querySelector('input[type=email]');
  btn.textContent      = 'Sent ✓';
  btn.style.background = '#22c55e';
  input.value          = '';
  setTimeout(() => {
    btn.textContent      = 'Send';
    btn.style.background = '';
  }, 3000);
}
