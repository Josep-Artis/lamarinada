/* ============================================================
   CARTA.JS — La Marinada · Sitges
   Category nav scroll + active highlighting
   ============================================================ */

function scrollToCategory(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({ behavior: 'smooth', block: 'start' });

  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

// Intersection observer — highlight cat-btn as you scroll
(function initObserver() {
  const sections = document.querySelectorAll('.cat-section');
  const buttons  = document.querySelectorAll('.cat-btn');
  if (!sections.length || !buttons.length) return;

  const map = {};
  buttons.forEach(btn => {
    const fn = btn.getAttribute('onclick') || '';
    const m  = fn.match(/'([^']+)'/);
    if (m) map[m[1]] = btn;
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        buttons.forEach(b => b.classList.remove('active'));
        if (map[id]) map[id].classList.add('active');
      }
    });
  }, { threshold: 0.25, rootMargin: '-100px 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
})();
