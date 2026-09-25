// Interactive Multi-Metric Energy Benchmark Chart (Carbon, Mortality, Land, Reliability)

import { SYSTEM_METRICS } from '../data/metrics.js';

export function renderCarbonMortalityChart(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const dataset = [
    { name: "Nuclear", carbon: 12, mortality: 0.03, land: 0.1, capacity: 92.6, color: "#173826" },
    { name: "Wind (On/Off)", carbon: 11.5, mortality: 0.04, land: 1.0, capacity: 35.4, color: "#4B916A" },
    { name: "Solar PV", carbon: 44.5, mortality: 0.04, land: 2.1, capacity: 24.8, color: "#D8AA3B" },
    { name: "Hydroelectric", carbon: 24, mortality: 0.24, land: 5.4, capacity: 41.5, color: "#4A8FB3" },
    { name: "Natural Gas CC", carbon: 490, mortality: 2.82, land: 0.2, capacity: 56.6, color: "#745612" },
    { name: "Coal", carbon: 820, mortality: 24.62, land: 0.2, capacity: 42.1, color: "#354039" }
  ];

  let currentMetric = 'carbon'; // 'carbon', 'mortality', 'land', 'capacity'

  const metricMeta = {
    carbon: {
      title: "Lifecycle Greenhouse Gas Emissions",
      unit: "g CO₂-equivalent per kilowatt-hour (g/kWh)",
      source: "IPCC AR6 WG3 (2022) Chapter 6 & UNECE (2021) LCA Synthesis",
      key: "carbon",
      lowerIsBetter: true
    },
    mortality: {
      title: "Human Mortality Rate per Energy Produced",
      unit: "Deaths per Terawatt-hour (accidents + fine air pollution PM2.5)",
      source: "Markandya & Wilkinson (The Lancet, 2007) & Our World in Data (2024)",
      key: "mortality",
      lowerIsBetter: true
    },
    land: {
      title: "Land Occupation Footprint",
      unit: "Square meters per Megawatt-hour produced (m²/MWh)",
      source: "UNECE (2021) Life Cycle Assessment of Electricity Generation Options",
      key: "land",
      lowerIsBetter: true
    },
    capacity: {
      title: "Average Annual Capacity Factor",
      unit: "Percentage of maximum theoretical full-power output (%)",
      source: "U.S. Energy Information Administration (EIA) Electric Power Monthly (2023)",
      key: "capacity",
      lowerIsBetter: false
    }
  };

  function update() {
    const meta = metricMeta[currentMetric];
    const maxVal = Math.max(...dataset.map(d => d[meta.key]));

    container.innerHTML = `
      <div class="diagram-stage">
        <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 14px; margin-bottom: 24px;">
          <div>
            <span class="eyebrow eyebrow-forest">Empirical Comparative Analysis</span>
            <h3 class="heading-subsection" style="margin-bottom: 4px;">${meta.title}</h3>
            <p class="body-editorial" style="font-size: 0.88rem; color: var(--charcoal-600);">
              Unit: <strong>${meta.unit}</strong> | Source: <em>${meta.source}</em>
            </p>
          </div>

          <!-- Metric Selector Buttons -->
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <button class="btn btn-sm ${currentMetric === 'carbon' ? 'btn-primary' : 'btn-secondary'}" data-m="carbon">Emissions (CO₂)</button>
            <button class="btn btn-sm ${currentMetric === 'mortality' ? 'btn-primary' : 'btn-secondary'}" data-m="mortality">Safety (Deaths/TWh)</button>
            <button class="btn btn-sm ${currentMetric === 'land' ? 'btn-primary' : 'btn-secondary'}" data-m="land">Land Use</button>
            <button class="btn btn-sm ${currentMetric === 'capacity' ? 'btn-primary' : 'btn-secondary'}" data-m="capacity">Capacity Factor</button>
          </div>
        </div>

        <!-- Rendered Bar Chart -->
        <div style="display: flex; flex-direction: column; gap: 14px; padding: 16px 0;">
          ${dataset.map(item => {
            const val = item[meta.key];
            const pct = Math.max(2, (val / maxVal) * 100);
            return `
              <div>
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px; font-size: 0.88rem;">
                  <strong style="color: var(--charcoal-900);">${item.name}</strong>
                  <span style="font-family: var(--font-mono); font-weight: 600; color: ${item.name === 'Nuclear' ? 'var(--forest-700)' : 'var(--charcoal-700)'};">
                    ${val.toLocaleString()} ${currentMetric === 'capacity' ? '%' : ''}
                  </span>
                </div>
                <div style="width: 100%; height: 24px; background: var(--bg-subtle); border-radius: 4px; overflow: hidden; position: relative;">
                  <div style="height: 100%; width: ${pct}%; background-color: ${item.color}; border-radius: 4px; transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <div style="margin-top: 20px; font-size: 0.8rem; color: var(--charcoal-500); border-top: 1px solid var(--border-subtle); padding-top: 14px;">
          Note: Full lifecycle emissions include upstream mining, concrete construction, transportation, operation, and ultimate decommissioning.
        </div>
      </div>
    `;

    // Rebind clicks
    container.querySelectorAll('button[data-m]').forEach(btn => {
      btn.addEventListener('click', () => {
        currentMetric = btn.getAttribute('data-m');
        update();
      });
    });
  }

  update();
}
