/* ============================================================
   GLOBAL.JS — La Marinada · Sitges
   Nav scroll behavior + language switcher
   ============================================================ */

// ─── NAV SCROLL ───
(function initNav() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  // Pages without hero (carta, begudes) start solid — don't change on scroll
  const isTransparent = nav.classList.contains('transparent');
  if (!isTransparent) return;

  function onScroll() {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ─── LANGUAGE SWITCHER ───
function setLang(lang) {
  document.body.className = document.body.className
    .replace(/lang-\w+/, '') + ' lang-' + lang;

  // Update active button
  document.querySelectorAll('[data-lbtn]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lbtn === lang);
  });

  // Persist
  try { localStorage.setItem('lm-lang', lang); } catch(e) {}
}

// Restore saved language
(function restoreLang() {
  try {
    const saved = localStorage.getItem('lm-lang');
    if (saved && ['ca','es','en'].includes(saved)) setLang(saved);
    else setLang('es');
  } catch(e) { setLang('es'); }
})();
