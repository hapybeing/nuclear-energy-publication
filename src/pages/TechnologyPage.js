// Technology Page: Reactor Families, SMRs & Generation IV Systems

import { REACTOR_FAMILIES } from '../data/reactors.js';

export function renderTechnologyPage() {
  const html = `
    <div class="page-container" style="padding-top: 48px; padding-bottom: 96px;">
      <!-- Hero -->
      <section class="container" style="margin-bottom: 56px;">
        <span class="eyebrow eyebrow-forest">Advanced Nuclear Architecture</span>
        <h1 class="heading-display">
          Reactor Technologies:<br/>
          From Gen III+ to Advanced SMRs
        </h1>
        <p class="lead-text">
          Nuclear reactor engineering spans diverse thermodynamic approaches, neutron energy spectra, and innovative coolant media—from high-pressure water to liquid sodium, helium gas, and molten fluorides.
        </p>
      </section>

      <!-- Reactor Families Technical Grid -->
      <section class="container" style="margin-bottom: 72px;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 28px;">
          ${REACTOR_FAMILIES.map(r => `
            <div class="feature-card-editorial" style="padding: 28px; background: var(--bg-surface); border: 1px solid var(--border-subtle); display: flex; flex-direction: column;">
              <div style="margin-bottom: 16px;">
                <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--brass-700); text-transform: uppercase;">
                  ${r.generation} • ${r.neutronSpectrum} Spectrum
                </span>
                <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--forest-900); margin-top: 4px;">
                  ${r.name}
                </h3>
              </div>

              <!-- Technical Specifications Table -->
              <div style="background: var(--bg-subtle); border-radius: var(--radius-sm); padding: 14px; font-family: var(--font-mono); font-size: 0.8rem; margin-bottom: 18px; display: flex; flex-direction: column; gap: 8px;">
                <div style="display: flex; justify-content: space-between;">
                  <span style="color: var(--charcoal-500);">Coolant:</span>
                  <strong style="color: var(--charcoal-900);">${r.coolant}</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                  <span style="color: var(--charcoal-500);">Moderator:</span>
                  <strong style="color: var(--charcoal-900);">${r.moderator}</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                  <span style="color: var(--charcoal-500);">Thermal Efficiency:</span>
                  <strong style="color: var(--forest-700);">${r.thermalEfficiency}</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                  <span style="color: var(--charcoal-500);">Typical Output:</span>
                  <strong style="color: var(--charcoal-900);">${r.typicalPower}</strong>
                </div>
              </div>

              <div style="font-size: 0.86rem; color: var(--charcoal-700); margin-bottom: 16px; flex-grow: 1;">
                <p style="margin-bottom: 8px;"><strong>Passive Safety Design:</strong> ${r.passiveFeatures}</p>
                <p><strong>Strategic Value:</strong> ${r.keyAdvantage}</p>
              </div>

              <div style="border-top: 1px solid var(--border-subtle); padding-top: 12px; font-size: 0.78rem; color: var(--charcoal-500);">
                <strong>Benchmark Designs:</strong> ${r.flagshipModels.join(', ')}
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Advanced SMR Paradigm Shift -->
      <section class="container">
        <div style="background: var(--bg-surface); border: 1px solid var(--border-brass); border-radius: var(--radius-md); padding: 40px; box-shadow: var(--shadow-subtle);">
          <span class="eyebrow">THE MODULAR REVOLUTION</span>
          <h2 class="heading-section">Why Small Modular Reactors (SMRs) Matter</h2>
          <p class="body-editorial" style="margin-bottom: 24px;">
            Historically, nuclear reactors pursued economies of unit scale (1,000–1,600 MWe per unit) to dilute fixed regulatory overhead, creating gargantuan multi-billion dollar capital projects. SMRs invert this model by pursuing <strong>economies of factory manufacturing series</strong>.
          </p>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
            <div>
              <h5 style="font-size: 1.05rem; font-weight: 700; color: var(--forest-900); margin-bottom: 6px;">
                Factory Standardization & Quality
              </h5>
              <p style="font-size: 0.86rem; color: var(--charcoal-600); line-height: 1.6;">
                Reactor pressure vessels and steam components are precision-manufactured under controlled factory conditions rather than field-welded in outdoor weather, dramatically reducing construction defects and lead times.
              </p>
            </div>

            <div>
              <h5 style="font-size: 1.05rem; font-weight: 700; color: var(--forest-900); margin-bottom: 6px;">
                Coal-to-Nuclear Infrastructure Repowering
              </h5>
              <p style="font-size: 0.86rem; color: var(--charcoal-600); line-height: 1.6;">
                SMR modules (50–300 MWe) match the exact thermal and electric ratings of retired coal power plants, allowing developers to reuse existing high-voltage switchyards, water permits, and steam turbine infrastructure while preserving local union employment.
              </p>
            </div>

            <div>
              <h5 style="font-size: 1.05rem; font-weight: 700; color: var(--forest-900); margin-bottom: 6px;">
                Infinite Passive Decay Heat Sinks
              </h5>
              <p style="font-size: 0.86rem; color: var(--charcoal-600); line-height: 1.6;">
                With high surface-area-to-volume ratios, SMR cores can dissipate all post-shutdown radioactive decay heat through natural convective water currents or radiative cooling to the atmosphere without pumps, operator intervention, or offsite electricity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;

  return html;
}
