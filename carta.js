/* ============================================================
   CARTA.JS — La Marinada · Sitges
   Category nav scroll + intersection highlight
   ============================================================ */

function scrollToCategory(id, btn) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

(function initObserver() {
  const ids  = ['entrantes', 'pescados', 'carnes', 'postres'];
  const btns = document.querySelectorAll('.cat-btn');

  const sections = [];
  ids.forEach(id => document.querySelectorAll('#' + id).forEach(el => sections.push(el)));

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const idx = ids.indexOf(entry.target.id);
      if (idx < 0) return;
      btns.forEach((b, i) => b.classList.toggle('active', i === idx));
    });
  }, { rootMargin: '-25% 0px -65% 0px' });

  sections.forEach(el => obs.observe(el));
})();
