// Safety Page: Defense in Depth, Passive Systems, Dosimetry & Accident Post-Mortems

import { renderDefenseDepthDiagram } from '../diagrams/defense-depth-diagram.js';
import { renderDoseExplorer } from '../diagrams/dose-explorer.js';
import { ACCIDENT_ANALYSES } from '../data/accidents.js';

export function renderSafetyPage() {
  const html = `
    <div class="page-container" style="padding-top: 48px; padding-bottom: 96px;">
      <!-- Hero -->
      <section class="container" style="margin-bottom: 56px;">
        <span class="eyebrow eyebrow-forest">Rigorous Protection Engineering</span>
        <h1 class="heading-display">
          Safety Systems &<br/>
          Defense in Depth
        </h1>
        <p class="lead-text">
          Civilian nuclear power incorporates the most conservative safety margins, multi-layer physical containment barriers, and stringent regulatory oversight in modern heavy engineering.
        </p>
      </section>

      <!-- Interactive 5-Barrier Explorer -->
      <section class="container" style="margin-bottom: 72px;">
        <div id="safety-defense-mount"></div>
      </section>

      <!-- Radiation Dosimetry Context -->
      <section class="container" style="margin-bottom: 80px;">
        <div id="safety-dose-mount"></div>
      </section>

      <!-- Scientific Transparency: Detailed Accident Post-Mortems -->
      <section class="container">
        <div style="max-width: 820px; margin-bottom: 36px;">
          <span class="eyebrow">HISTORICAL POST-MORTEMS</span>
          <h2 class="heading-section">Objective Analysis of Historical Accidents</h2>
          <p class="body-editorial">
            True scientific maturity requires examining past failures without equivocation. The three major accidents in commercial civilian nuclear history led directly to profound structural, procedural, and technological evolutions in reactor design.
          </p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 32px;">
          ${ACCIDENT_ANALYSES.map(acc => `
            <div class="feature-card-editorial" style="padding: 32px; background: var(--bg-surface); border: 1px solid var(--border-subtle);">
              <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 12px; margin-bottom: 16px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 16px;">
                <div>
                  <span style="font-family: var(--font-mono); font-size: 0.78rem; font-weight: 700; color: var(--brass-700); text-transform: uppercase;">
                    INES LEVEL ${acc.inesLevel} ACCIDENT (${acc.year})
                  </span>
                  <h3 style="font-size: 1.4rem; font-weight: 700; color: var(--forest-900); margin-top: 2px;">
                    ${acc.name}
                  </h3>
                  <span style="font-size: 0.85rem; color: var(--charcoal-500);">${acc.location} | Reactor: ${acc.reactorType}</span>
                </div>
              </div>

              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; font-size: 0.88rem; line-height: 1.6;">
                <div>
                  <strong style="color: var(--charcoal-900); display: block; margin-bottom: 4px;">Root Causes & Initiating Sequence:</strong>
                  <p style="color: var(--charcoal-700);">${acc.rootCauses}</p>
                </div>
                <div>
                  <strong style="color: var(--charcoal-900); display: block; margin-bottom: 4px;">Containment Structural Performance:</strong>
                  <p style="color: var(--charcoal-700);">${acc.containmentPerformance}</p>
                </div>
                <div>
                  <strong style="color: var(--charcoal-900); display: block; margin-bottom: 4px;">Health & Epidemiological Findings (UNSCEAR / WHO):</strong>
                  <p style="color: var(--charcoal-700);">${acc.epidemiologicalHealthImpact}</p>
                </div>
                <div>
                  <strong style="color: var(--charcoal-900); display: block; margin-bottom: 4px;">Engineering Legacy & Global Retrofits:</strong>
                  <p style="color: var(--charcoal-700);">${acc.engineeringLegacy}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    </div>
  `;

  if (typeof document !== "undefined") setTimeout(() => {
    renderDefenseDepthDiagram('safety-defense-mount');
    renderDoseExplorer('safety-dose-mount');
  }, 0);

  return html;
}
