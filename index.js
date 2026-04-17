/* ============================================================
   INDEX.JS — La Marinada · Sitges
   Hero: horizon shimmer lines + foam dots
   ============================================================ */

(function initHorizon() {
  const container = document.getElementById('horizon-lines');
  if (!container) return;

  const positions = [25, 38, 52, 63, 73, 82];
  positions.forEach((top, i) => {
    const line = document.createElement('div');
    line.className = 'h-line';
    line.style.cssText = `
      top: ${top}%;
      --dur:   ${7 + i * 1.3}s;
      --delay: ${i * 0.8}s;
      --drift: ${-15 - i * 5}px;
    `;
    container.appendChild(line);
  });
})();

(function initFoamDots() {
  const container = document.getElementById('foam-dots');
  if (!container) return;

  const drifts = [-40, -20, 0, 20, 40];
  for (let i = 0; i < 22; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    const size = 1.5 + Math.random() * 3;
    dot.style.cssText = `
      left:    ${Math.random() * 100}%;
      bottom:  ${Math.random() * 30}%;
      width:   ${size}px;
      height:  ${size}px;
      --dur:   ${9 + Math.random() * 7}s;
      --delay: ${Math.random() * 8}s;
      --drift: ${drifts[Math.floor(Math.random() * drifts.length)]}px;
    `;
    container.appendChild(dot);
  }
})();
