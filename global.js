S
Copiar

/* ============================================================
   GLOBAL.JS — La Marinada · Sitges
   Language switcher + nav scroll
   ============================================================ */
 
function setLang(lang) {
  document.body.className = 'lang-' + lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-lbtn]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lbtn === lang);
  });
  sessionStorage.setItem('marinada-lang', lang);
}
 
(function init() {
  const saved = sessionStorage.getItem('marinada-lang') || 'es';
  setLang(saved);
})();
 
(function initNav() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
 
  const isTransparent = nav.classList.contains('transparent');
 
  // Pages without transparent hero (e.g. carta) get a permanent solid background
  if (!isTransparent) {
    nav.classList.add('solid');
    return;
  }
 
  // Hero pages: fade from transparent to solid on scroll
  function check() {
    nav.classList.toggle('scrolled', window.scrollY > 70);
  }
  window.addEventListener('scroll', check, { passive: true });
  check();
})();