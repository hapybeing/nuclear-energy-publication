// Benefits Page: Decarbonization, Air Quality, Grid Firmness & Energy Density

import { renderCarbonMortalityChart } from '../diagrams/carbon-mortality-chart.js';
import { renderPelletCalculator } from '../diagrams/pellet-calculator.js';

export function renderBenefitsPage() {
  const html = `
    <div class="page-container" style="padding-top: 48px; padding-bottom: 96px;">
      <!-- Hero -->
      <section class="container" style="margin-bottom: 64px;">
        <span class="eyebrow eyebrow-forest">Documented Global Advantages</span>
        <h1 class="heading-display">
          Documented Benefits<br/>
          for Deep Decarbonization & Clean Air
        </h1>
        <p class="lead-text">
          Independent assessments by the United Nations, IPCC, and the International Energy Agency document nuclear energy as a cornerstone of clean, reliable, and high-density energy systems worldwide.
        </p>
      </section>

      <!-- Comparative Benchmark Chart Mount -->
      <section class="container" style="margin-bottom: 72px;">
        <div id="benefits-chart-mount"></div>
      </section>

      <!-- Core Editorial Columns -->
      <section class="container" style="margin-bottom: 80px;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px;">
          <!-- Benefit 1: Clean Air & Health -->
          <div class="feature-card-editorial" style="padding: 32px;">
            <div class="feature-card-icon" style="width: 48px; height: 48px; margin-bottom: 18px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
              </svg>
            </div>
            <h3 style="font-size: 1.35rem; font-weight: 700; margin-bottom: 12px; color: var(--forest-900);">
              Public Health & Air Pollution Avoidance
            </h3>
            <p class="body-editorial" style="margin-bottom: 16px;">
              Ambient fine particulate matter (PM2.5) and nitrogen oxide emissions from fossil fuel combustion cause over 4.2 million premature human deaths annually worldwide (World Health Organization). Nuclear generation releases virtually zero toxic combustion products during electricity generation.
            </p>
            <p style="font-size: 0.85rem; color: var(--charcoal-600); line-height: 1.5; border-top: 1px solid var(--border-subtle); padding-top: 12px;">
              <strong>Lancet Medical Study:</strong> A seminal benchmark in <em>The Lancet</em> (Markandya & Wilkinson, 2007) documented that nuclear electricity causes <strong>0.03 deaths per TWh</strong>, compared to 24.6 for coal and 2.8 for gas—matching wind and solar as the safest energy technologies known to civilization.
            </p>
          </div>

          <!-- Benefit 2: Grid Firmness -->
          <div class="feature-card-editorial" style="padding: 32px;">
            <div class="feature-card-icon" style="width: 48px; height: 48px; margin-bottom: 18px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>
            <h3 style="font-size: 1.35rem; font-weight: 700; margin-bottom: 12px; color: var(--forest-900);">
              24/7 Dispatchability & Physical Grid Inertia
            </h3>
            <p class="body-editorial" style="margin-bottom: 16px;">
              Modern electrical grids require rotational inertia—massive spinning turbines that physically resist instantaneous frequency deviations caused by sudden transmission trips. Nuclear power stations operate at an average <strong>92.6% capacity factor</strong> (US EIA 2023), delivering steady clean energy day and night.
            </p>
            <p style="font-size: 0.85rem; color: var(--charcoal-600); line-height: 1.5; border-top: 1px solid var(--border-subtle); padding-top: 12px;">
              <strong>Flexibility in Practice:</strong> Modern French and German reactors routinely perform daily load-following, ramping output between 50% and 100% at rates up to 5% of nominal power per minute to accommodate renewable solar surges.
            </p>
          </div>

          <!-- Benefit 3: Material Efficiency -->
          <div class="feature-card-editorial" style="padding: 32px;">
            <div class="feature-card-icon" style="width: 48px; height: 48px; margin-bottom: 18px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <ellipse cx="12" cy="5" rx="9" ry="3"/>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
              </svg>
            </div>
            <h3 style="font-size: 1.35rem; font-weight: 700; margin-bottom: 12px; color: var(--forest-900);">
              Critical Mineral & Material Economy
            </h3>
            <p class="body-editorial" style="margin-bottom: 16px;">
              Because of its extreme thermodynamic energy density, nuclear power consumes dramatically fewer metric tons of concrete, steel, glass, and critical minerals (copper, nickel, neodymium, lithium) per terawatt-hour produced than any other low-carbon alternative.
            </p>
            <p style="font-size: 0.85rem; color: var(--charcoal-600); line-height: 1.5; border-top: 1px solid var(--border-subtle); padding-top: 12px;">
              <strong>United Nations UNECE Assessment:</strong> The 2021 UN Life Cycle Analysis determined nuclear energy has the <strong>lowest material requirement</strong> per unit of electricity produced, drastically mitigating the global ecological disruption of mineral mining.
            </p>
          </div>
        </div>
      </section>

      <!-- Energy Density Calculator Mount -->
      <section class="container">
        <div id="benefits-pellet-mount"></div>
      </section>
    </div>
  `;

  if (typeof document !== "undefined") setTimeout(() => {
    renderCarbonMortalityChart('benefits-chart-mount');
    renderPelletCalculator('benefits-pellet-mount');
  }, 0);

  return html;
}
