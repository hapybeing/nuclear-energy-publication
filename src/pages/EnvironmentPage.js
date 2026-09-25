// Environment Page: Lifecycle Ecology, Footprint & Waste Isolation

import { renderCarbonMortalityChart } from '../diagrams/carbon-mortality-chart.js';
import { renderFuelCycleDiagram } from '../diagrams/fuel-cycle-diagram.js';

export function renderEnvironmentPage() {
  const html = `
    <div class="page-container" style="padding-top: 48px; padding-bottom: 96px;">
      <!-- Hero -->
      <section class="container" style="margin-bottom: 56px;">
        <span class="eyebrow eyebrow-forest">Holistic Environmental Assessment</span>
        <h1 class="heading-display">
          Environmental Ecology &<br/>
          Lifecycle Balance
        </h1>
        <p class="lead-text">
          Evaluating energy technologies requires rigorous cradle-to-grave accounting: raw mineral extraction, land occupation, freshwater withdrawal, thermal ecology, and permanent byproduct containment.
        </p>
      </section>

      <!-- Multi-Metric Chart Mount -->
      <section class="container" style="margin-bottom: 72px;">
        <div id="env-chart-mount"></div>
      </section>

      <!-- Fuel Cycle & Waste Pathway Mount -->
      <section class="container" style="margin-bottom: 80px;">
        <div id="env-fuel-mount"></div>
      </section>

      <!-- Deep Dive: Spent Fuel & Geological Repositories -->
      <section class="container" style="margin-bottom: 80px;">
        <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 40px; box-shadow: var(--shadow-subtle);">
          <span class="eyebrow">BYPRODUCT STEWARDSHIP</span>
          <h2 class="heading-section">The Physics and Scale of Nuclear Waste</h2>
          <p class="body-editorial" style="margin-bottom: 24px;">
            Unlike combustion industries that discharge their waste gases directly into the shared global atmosphere, the civilian nuclear industry physically isolates and monitors 100% of its high-level waste.
          </p>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 28px;">
            <div>
              <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--forest-900); margin-bottom: 8px;">
                Extreme Volumetric Compactness
              </h4>
              <p style="font-size: 0.88rem; color: var(--charcoal-700); line-height: 1.6;">
                Because uranium's energy density is so vast, a commercial 1,000 MWe reactor generates only about <strong>20 to 30 metric tons</strong> of spent fuel annually. By comparison, an equivalent coal-fired facility burns 3,000,000 tons of coal and releases 7,000,000 tons of CO₂, along with hundreds of thousands of tons of toxic fly ash containing heavy metals and natural radioactive radium.
              </p>
            </div>

            <div>
              <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--forest-900); margin-bottom: 8px;">
                Finland's Onkalo Geological Repository
              </h4>
              <p style="font-size: 0.88rem; color: var(--charcoal-700); line-height: 1.6;">
                Located on Olkiluoto island, Finland's <strong>Onkalo</strong> facility is the world's first operational permanent deep geological repository for spent nuclear fuel. Operating under the Finnish radiation regulator (STUK), spent fuel is enclosed in corrosion-resistant copper canisters with cast-iron structural inserts, embedded in swelling bentonite clay 450 meters down within 1.9-billion-year-old stable crystalline granite bedrock.
              </p>
            </div>

            <div>
              <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--forest-900); margin-bottom: 8px;">
                Closing the Fuel Cycle (Reprocessing)
              </h4>
              <p style="font-size: 0.88rem; color: var(--charcoal-700); line-height: 1.6;">
                Spent fuel is not 'waste' in the traditional sense: <strong>~96% of the original potential energy</strong> remains unspent (consisting of 95% U-238 and 1% unburned U-235/Pu-239). Facilities like Orano La Hague in France separate this fissile inventory into MOX (Mixed Oxide) fuel, reducing final high-level vitrified glass volume by 75% and radiotoxicity duration by a factor of ten.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;

  if (typeof document !== "undefined") setTimeout(() => {
    renderCarbonMortalityChart('env-chart-mount');
    renderFuelCycleDiagram('env-fuel-mount');
  }, 0);

  return html;
}
