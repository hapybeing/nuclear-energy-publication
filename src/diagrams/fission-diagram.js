// Interactive Nuclear Fission & Chain Reaction Simulator

export function renderFissionSimulator(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="diagram-stage">
      <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
        <div>
          <span class="eyebrow eyebrow-forest">Interactive Physics Simulator</span>
          <h3 class="heading-subsection" style="margin-bottom: 4px;">Induced Nuclear Fission & Energy Release</h3>
          <p class="body-editorial" style="font-size: 0.9rem; max-width: 640px;">
            When a low-energy thermal neutron strikes a <sup>235</sup>U nucleus, it forms an excited compound <sup>236</sup>U* state that oscillates and splits within 10<sup>-14</sup> seconds, releasing ~200 MeV of kinetic & gamma energy and 2–3 free neutrons.
          </p>
        </div>
        <div style="display: flex; gap: 8px;">
          <button id="trigger-fission-btn" class="btn btn-primary btn-sm">
            <span>Fire Thermal Neutron</span>
            <span class="arrow-icon">→</span>
          </button>
          <button id="reset-fission-btn" class="btn btn-secondary btn-sm">Reset</button>
        </div>
      </div>

      <div style="position: relative; width: 100%; height: 380px; background: #0E1B13; border-radius: var(--radius-md); overflow: hidden; border: 1px solid rgba(255,255,255,0.08);">
        <canvas id="fission-canvas" width="800" height="380" style="width: 100%; height: 100%; display: block;"></canvas>
        <div id="fission-readout" style="position: absolute; bottom: 16px; left: 16px; right: 16px; background: rgba(14, 27, 19, 0.85); backdrop-filter: blur(8px); border: 1px solid rgba(197, 155, 39, 0.3); border-radius: var(--radius-sm); padding: 10px 16px; display: flex; justify-content: space-between; align-items: center; color: #FAF8F5; font-size: 0.84rem; font-family: var(--font-mono);">
          <span>State: <strong id="fission-state-text" style="color: #E8C366;">Ready (Thermal equilibrium)</strong></span>
          <span>Energy Released: <strong id="fission-energy-text" style="color: #4B916A;">0.0 MeV</strong></span>
          <span>k-factor: <strong id="fission-k-text" style="color: #C59B27;">1.000 (Critical)</strong></span>
        </div>
      </div>

      <div style="margin-top: 18px; display: grid; grid-template-columns: 1fr; gap: 16px;">
        <div style="background: var(--bg-subtle); padding: 14px 18px; border-radius: var(--radius-sm); font-size: 0.85rem; color: var(--charcoal-700);">
          <strong style="color: var(--charcoal-900);">Fission Mass-Energy Balance:</strong>
          <span style="font-family: var(--font-mono); margin-left: 8px;"><sup>1</sup>n + <sup>235</sup>U → <sup>236</sup>U* → <sup>141</sup>Ba + <sup>92</sup>Kr + 3 <sup>1</sup>n + 200.2 MeV (Δm = 0.215 u)</span>
        </div>
      </div>
    </div>
  `;

  const canvas = document.getElementById('fission-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const fireBtn = document.getElementById('trigger-fission-btn');
  const resetBtn = document.getElementById('reset-fission-btn');
  const stateText = document.getElementById('fission-state-text');
  const energyText = document.getElementById('fission-energy-text');

  let state = 'idle'; // idle, approaching, compound, splitting, fragments, complete
  let progress = 0;
  let animId = null;

  function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function draw() {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Coordinate centers
    const cx = w * 0.45;
    const cy = h * 0.45;

    // Draw ambient background grid/orbitals
    ctx.strokeStyle = 'rgba(75, 145, 106, 0.12)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cx, cy, 140, 0, Math.PI * 2);
    ctx.arc(cx, cy, 90, 0, Math.PI * 2);
    ctx.stroke();

    if (state === 'idle') {
      // Draw target U-235 nucleus
      drawNucleus(cx, cy, 38, 'U-235', '#2A6347');
      // Draw incoming neutron on left
      drawNeutron(w * 0.12, cy, 'Incident n');
    } else if (state === 'approaching') {
      const nx = w * 0.12 + (cx - 45 - w * 0.12) * progress;
      drawNucleus(cx, cy, 38, 'U-235', '#2A6347');
      drawNeutron(nx, cy, 'Thermal n');
    } else if (state === 'compound') {
      // Oscillating compound nucleus U-236
      const stretch = 1 + 0.3 * Math.sin(progress * Math.PI * 6);
      drawCompoundNucleus(cx, cy, 42 * stretch, 42 / stretch, 'U-236*', '#C59B27');
    } else if (state === 'splitting' || state === 'fragments') {
      // Fission fragments separating: Ba-141 and Kr-92
      const dist = progress * 160;
      const baX = cx - dist * 0.6;
      const baY = cy - dist * 0.4;
      const krX = cx + dist * 0.8;
      const krY = cy + dist * 0.3;

      // Energy burst shockwave
      ctx.strokeStyle = `rgba(232, 195, 102, ${Math.max(0, 1 - progress * 1.2)})`;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(cx, cy, progress * 240, 0, Math.PI * 2);
      ctx.stroke();

      // Draw fragments
      drawNucleus(baX, baY, 28, 'Ba-141', '#3A7D5C');
      drawNucleus(krX, krY, 22, 'Kr-92', '#529E78');

      // Free prompt neutrons emitted
      const nDist = progress * 210;
      drawNeutron(cx + nDist * 0.3, cy - nDist * 0.8, 'n (fast)');
      drawNeutron(cx + nDist * 0.9, cy - nDist * 0.3, 'n (fast)');
      drawNeutron(cx - nDist * 0.7, cy + nDist * 0.6, 'n (fast)');
    }

    if (state !== 'idle') {
      progress += 0.02;
      if (state === 'approaching' && progress >= 1) {
        state = 'compound';
        progress = 0;
        stateText.innerText = 'Excited Compound Nucleus (U-236*)';
      } else if (state === 'compound' && progress >= 1) {
        state = 'splitting';
        progress = 0;
        stateText.innerText = 'Nuclear Scission & Energy Pulse (~200 MeV)';
        energyText.innerText = '200.2 MeV';
      } else if (state === 'splitting' && progress >= 1) {
        state = 'fragments';
        stateText.innerText = 'Fission Products & 3 Prompt Neutrons Released';
      }
    }

    animId = requestAnimationFrame(draw);
  }

  function drawNucleus(x, y, radius, label, color) {
    ctx.save();
    const grad = ctx.createRadialGradient(x - radius * 0.3, y - radius * 0.3, radius * 0.1, x, y, radius);
    grad.addColorStop(0, '#E8F2EC');
    grad.addColorStop(0.4, color);
    grad.addColorStop(1, '#0C2016');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#8EBAA0';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#FAF8F5';
    ctx.font = '600 12px Plus Jakarta Sans, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, x, y);
    ctx.restore();
  }

  function drawCompoundNucleus(x, y, rx, ry, label, color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#FFE8A3';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#141A16';
    ctx.font = '700 12px Plus Jakarta Sans, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, x, y);
    ctx.restore();
  }

  function drawNeutron(x, y, label) {
    ctx.save();
    ctx.fillStyle = '#E8C366';
    ctx.beginPath();
    ctx.arc(x, y, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#FAF8F5';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#E8C366';
    ctx.font = '500 10px JetBrains Mono, monospace';
    ctx.textAlign = 'center';
    ctx.fillText(label, x, y - 12);
    ctx.restore();
  }

  fireBtn.addEventListener('click', () => {
    state = 'approaching';
    progress = 0;
    stateText.innerText = 'Thermal Neutron In Flight (~2,200 m/s)';
    energyText.innerText = '0.025 eV kinetic';
  });

  resetBtn.addEventListener('click', () => {
    state = 'idle';
    progress = 0;
    stateText.innerText = 'Ready (Thermal equilibrium)';
    energyText.innerText = '0.0 MeV';
  });

  draw();
}
