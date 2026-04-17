/* ============================================================
   INDEX.JS — La Marinada · Sitges
   Hero: horizon shimmer lines + foam dots
   ============================================================ */

(function initHorizon() {
  const container = document.getElementById('horizon-lines');
  if (!container) return;

  // Only 3 very subtle lines
  const positions = [40, 58, 72];
  positions.forEach((top, i) => {
    const line = document.createElement('div');
    line.className = 'h-line';
    line.style.cssText = `
      top: ${top}%;
      --dur:   ${10 + i * 2}s;
      --delay: ${i * 1.5}s;
      --drift: ${-12 - i * 6}px;
    `;
    container.appendChild(line);
  });
})();

(function initFoamDots() {
  const container = document.getElementById('foam-dots');
  if (!container) return;

  const drifts = [-40, -20, 0, 20, 40];
  for (let i = 0; i < 18; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    const size = 1.5 + Math.random() * 2.5;
    dot.style.cssText = `
      left:    ${Math.random() * 100}%;
      bottom:  ${Math.random() * 25}%;
      width:   ${size}px;
      height:  ${size}px;
      --dur:   ${10 + Math.random() * 8}s;
      --delay: ${Math.random() * 10}s;
      --drift: ${drifts[Math.floor(Math.random() * drifts.length)]}px;
    `;
    container.appendChild(dot);
  }
})();
