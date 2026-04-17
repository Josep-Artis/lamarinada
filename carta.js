/* ============================================================
   CARTA.JS — La Marinada · Sitges
   Category nav scroll + active highlighting
   ============================================================ */

function scrollToCategory(id, btn) {
  // Find the visible section matching current language
  const all = document.querySelectorAll('#' + id);
  let target = null;
  all.forEach(el => {
    if (getComputedStyle(el).display !== 'none') target = el;
  });
  if (!target) return;

  const navH = (document.querySelector('.main-nav')?.offsetHeight || 60)
             + (document.querySelector('.cat-nav')?.offsetHeight || 50)
             + 16;
  const top = target.getBoundingClientRect().top + window.scrollY - navH;
  window.scrollTo({ top, behavior: 'smooth' });

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
      if (entry.isIntersecting && getComputedStyle(entry.target).display !== 'none') {
        const id = entry.target.id;
        buttons.forEach(b => b.classList.remove('active'));
        if (map[id]) map[id].classList.add('active');
      }
    });
  }, { threshold: 0.25, rootMargin: '-100px 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
})();
