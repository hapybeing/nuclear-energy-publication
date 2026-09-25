// Interactive Nuclear Fuel Pellet Energy Density Calculator

export function renderPelletCalculator(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let pelletCount = 1;

  function render() {
    // 1 pellet = 7g UO2 (~3.5% enriched)
    // Equiv to: 1,000 kg coal, 564 liters oil, 480 m3 gas, avoids ~2.4 metric tons CO2 vs coal
    const coalKg = pelletCount * 1000;
    const oilLiters = pelletCount * 564;
    const gasM3 = pelletCount * 480;
    const avoidedCO2Tons = (pelletCount * 2.4).toFixed(1);
    const mwhGenerated = (pelletCount * 5).toFixed(1); // ~5,000 kWh per pellet

    container.innerHTML = `
      <div class="diagram-stage" style="background: var(--bg-surface); border: 1px solid var(--border-brass);">
        <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 12px; margin-bottom: 20px;">
          <div>
            <span class="eyebrow">Thermodynamic Scale</span>
            <h3 class="heading-subsection" style="margin-bottom: 4px;">Uranium Fuel Pellet Energy Equivalency</h3>
            <p class="body-editorial" style="font-size: 0.9rem;">
              Nuclear fission harnesses the strong fundamental force rather than chemical molecular bonds, resulting in an energy density roughly <strong>2,000,000 times</strong> that of fossil fuels.
            </p>
          </div>
        </div>

        <!-- Slider Control -->
        <div style="background: var(--bg-warm); padding: 20px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); margin-bottom: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <label for="pellet-slider" style="font-weight: 700; font-size: 0.95rem; color: var(--forest-900);">
              Quantity of Uranium Fuel Pellets (7g each):
            </label>
            <span style="font-family: var(--font-mono); font-size: 1.25rem; font-weight: 700; color: var(--forest-800); background: #FFFFFF; padding: 4px 14px; border-radius: 4px; border: 1px solid var(--border-medium);">
              ${pelletCount} pellet${pelletCount > 1 ? 's' : ''} (${pelletCount * 7} grams)
            </span>
          </div>
          <input type="range" id="pellet-slider" min="1" max="100" value="${pelletCount}" style="width: 100%; accent-color: var(--forest-800); cursor: pointer;">
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--charcoal-500); font-family: var(--font-mono); margin-top: 4px;">
            <span>1 pellet</span>
            <span>25 pellets</span>
            <span>50 pellets</span>
            <span>100 pellets (~700g)</span>
          </div>
        </div>

        <!-- Equivalency Results Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 16px;">
          <!-- Coal -->
          <div class="feature-card-editorial" style="padding: 16px; border-left: 3px solid var(--charcoal-700);">
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--charcoal-500); margin-bottom: 4px;">EQUIVALENT COAL</div>
            <div style="font-size: 1.4rem; font-weight: 800; color: var(--charcoal-900);">${coalKg.toLocaleString()} kg</div>
            <p style="font-size: 0.8rem; color: var(--charcoal-600); margin-top: 4px;">(~${(coalKg / 1000).toFixed(1)} metric tons of black coal)</p>
          </div>

          <!-- Oil -->
          <div class="feature-card-editorial" style="padding: 16px; border-left: 3px solid var(--brass-700);">
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--charcoal-500); margin-bottom: 4px;">EQUIVALENT CRUDE OIL</div>
            <div style="font-size: 1.4rem; font-weight: 800; color: var(--charcoal-900);">${oilLiters.toLocaleString()} L</div>
            <p style="font-size: 0.8rem; color: var(--charcoal-600); margin-top: 4px;">(~${Math.round(oilLiters / 159)} barrels of crude oil)</p>
          </div>

          <!-- Natural Gas -->
          <div class="feature-card-editorial" style="padding: 16px; border-left: 3px solid #4A8FB3;">
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--charcoal-500); margin-bottom: 4px;">NATURAL GAS</div>
            <div style="font-size: 1.4rem; font-weight: 800; color: var(--charcoal-900);">${gasM3.toLocaleString()} m³</div>
            <p style="font-size: 0.8rem; color: var(--charcoal-600); margin-top: 4px;">(~${Math.round(gasM3 * 35.31).toLocaleString()} cubic feet)</p>
          </div>

          <!-- Avoided CO2 -->
          <div class="feature-card-editorial" style="padding: 16px; border-left: 3px solid var(--forest-600);">
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--forest-600); margin-bottom: 4px;">AVOIDED CO₂ EMISSIONS</div>
            <div style="font-size: 1.4rem; font-weight: 800; color: var(--forest-800);">${avoidedCO2Tons} Tons</div>
            <p style="font-size: 0.8rem; color: var(--charcoal-600); margin-top: 4px;">(~${mwhGenerated} MWh clean electricity)</p>
          </div>
        </div>
      </div>
    `;

    document.getElementById('pellet-slider')?.addEventListener('input', (e) => {
      pelletCount = parseInt(e.target.value);
      render();
    });
  }

  render();
}
