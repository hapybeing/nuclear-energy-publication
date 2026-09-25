// Technology Page: Reactor Generations, SMRs, Gen IV, and Fusion

import { REACTOR_FAMILIES } from '../data/reactors.js';

export function renderTechnologyPage() {
  const html = `
    <div class="page-container" style="padding-top: 48px; padding-bottom: 96px;">
      <!-- Hero -->
      <section class="container" style="margin-bottom: 56px;">
        <span class="eyebrow eyebrow-forest">Advanced Nuclear Engineering</span>
        <h1 class="heading-display">
          Reactor Technologies:<br/>
          From Gen III+ to Fast Neutrons & Fusion
        </h1>
        <p class="lead-text">
          Explore the engineering evolution of nuclear fission and fusion systems: coolant chemistries, neutron energy spectra, TRISO passive fuels, modular manufacturing, and magnetic plasma confinement.
        </p>
      </section>

      <!-- Generation Taxonomy Timeline -->
      <section class="container" style="margin-bottom: 64px;">
        <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-lg); padding: 32px;">
          <span class="eyebrow">TECHNOLOGY EVOLUTION</span>
          <h2 class="heading-section" style="font-size: 1.8rem; margin-bottom: 24px;">The Generations of Nuclear Power</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px;">
            <div style="background: var(--bg-subtle); padding: 18px; border-radius: var(--radius-sm); border-top: 3px solid var(--charcoal-400);">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--charcoal-500);">1950 – 1970</span>
              <h5 style="font-size: 1.05rem; font-weight: 700; margin: 6px 0;">Generation I</h5>
              <p style="font-size: 0.84rem; color: var(--charcoal-700);">Early prototype civilian power reactors: Shippingport, Magnox, Dresden 1. Proved commercial feasibility of electricity generation from nuclear fission.</p>
            </div>
            <div style="background: var(--bg-subtle); padding: 18px; border-radius: var(--radius-sm); border-top: 3px solid var(--forest-500);">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--forest-600);">1970 – 1995</span>
              <h5 style="font-size: 1.05rem; font-weight: 700; margin: 6px 0;">Generation II</h5>
              <p style="font-size: 0.84rem; color: var(--charcoal-700);">Large commercial workhorses built during global expansion: Westinghouse PWRs, GE BWR/4-6, French CP0/CP1 fleet, CANDU-6. High reliability, active safety redundancies.</p>
            </div>
            <div style="background: var(--bg-subtle); padding: 18px; border-radius: var(--radius-sm); border-top: 3px solid var(--forest-700);">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--forest-700);">1995 – PRESENT</span>
              <h5 style="font-size: 1.05rem; font-weight: 700; margin: 6px 0;">Generation III / III+</h5>
              <p style="font-size: 0.84rem; color: var(--charcoal-700);">Evolutionary advances with passive safety (AP1000, VVER-1200, EPR, APR-1400, ESBWR). 60-year design life, core catchers, aircraft impact resistance, simplified piping.</p>
            </div>
            <div style="background: var(--bg-subtle); padding: 18px; border-radius: var(--radius-sm); border-top: 3px solid var(--brass-600);">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--brass-700);">2020s & BEYOND</span>
              <h5 style="font-size: 1.05rem; font-weight: 700; margin: 6px 0;">Generation IV & SMRs</h5>
              <p style="font-size: 0.84rem; color: var(--charcoal-700);">High temperatures (&gt;750°C), non-water coolants (helium, liquid sodium, molten fluoride salts), closed actinide fuel cycles, factory fabrication, industrial process heat.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Detailed Reactor Family Directory -->
      <section class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px; margin-bottom: 32px;">
          <div style="max-width: 680px;">
            <span class="eyebrow eyebrow-forest">Comprehensive Technical Directory</span>
            <h2 class="heading-section">The 7 Primary Reactor Families</h2>
            <p class="body-editorial">
              Detailed engineering specifications, thermodynamic operating points, fuel forms, and current global deployment status across commercial and advanced nuclear architectures.
            </p>
          </div>
          <!-- Interactive Technology Filter Tabs -->
          <div style="display: flex; gap: 8px; flex-wrap: wrap;" id="reactor-filter-btns">
            <button class="btn btn-sm btn-primary filter-tech-btn" data-filter="all">All Systems</button>
            <button class="btn btn-sm btn-secondary filter-tech-btn" data-filter="commercial">Commercial (Gen III+)</button>
            <button class="btn btn-sm btn-secondary filter-tech-btn" data-filter="smr">SMRs & Micro</button>
            <button class="btn btn-sm btn-secondary filter-tech-btn" data-filter="gen4">Gen IV (Fast / High-Heat)</button>
            <button class="btn btn-sm btn-secondary filter-tech-btn" data-filter="fusion">Fusion</button>
          </div>
        </div>

        <div id="reactor-cards-list" style="display: flex; flex-direction: column; gap: 32px;">
          ${REACTOR_FAMILIES.map(r => `
            <div class="feature-card-editorial reactor-family-card" data-cat="${r.id === 'pwr' || r.id === 'bwr' || r.id === 'phwr' ? 'commercial' : (r.id === 'smr' ? 'smr' : (r.id === 'fusion' ? 'fusion' : 'gen4'))}" style="padding: 32px; border-left: 4px solid ${r.id === 'fusion' ? 'var(--brass-600)' : 'var(--forest-600)'};">
              <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 12px; margin-bottom: 8px;">
                <div>
                  <h3 style="font-family: var(--font-serif); font-size: 1.45rem; color: var(--charcoal-900); font-weight: 600;">${r.name}</h3>
                  <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--brass-700); font-weight: 600;">${r.generation}</span>
                </div>
                <span style="font-family: var(--font-mono); font-size: 0.78rem; background: var(--bg-subtle); color: var(--charcoal-800); padding: 4px 10px; border-radius: var(--radius-full); border: 1px solid var(--border-subtle);">
                  ${r.status}
                </span>
              </div>

              <p class="body-editorial" style="margin-bottom: 20px; font-size: 0.94rem;">${r.description}</p>

              <!-- Technical Specifications Grid -->
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; background: var(--bg-canvas); padding: 18px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); font-family: var(--font-mono); font-size: 0.82rem; margin-bottom: 18px;">
                <div>
                  <span style="color: var(--charcoal-500); display: block; margin-bottom: 4px;">COOLANT MEDIUM</span>
                  <strong style="color: var(--forest-900);">${r.coolant}</strong>
                </div>
                <div>
                  <span style="color: var(--charcoal-500); display: block; margin-bottom: 4px;">MODERATOR</span>
                  <strong style="color: var(--forest-900);">${r.moderator}</strong>
                </div>
                <div>
                  <span style="color: var(--charcoal-500); display: block; margin-bottom: 4px;">NEUTRON SPECTRUM</span>
                  <strong style="color: var(--forest-900);">${r.neutronSpectrum}</strong>
                </div>
                <div>
                  <span style="color: var(--charcoal-500); display: block; margin-bottom: 4px;">OUTLET TEMPERATURE</span>
                  <strong style="color: var(--forest-900);">${r.outletTemp}</strong>
                </div>
              </div>

              <!-- Advantages & Challenges -->
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; font-size: 0.88rem; line-height: 1.55;">
                <div style="border-left: 2px solid var(--forest-500); padding-left: 14px;">
                  <strong style="color: var(--forest-800); display: block; margin-bottom: 4px;">Technical Advantages:</strong>
                  <span style="color: var(--charcoal-700);">${r.advantages}</span>
                </div>
                <div style="border-left: 2px solid var(--brass-700); padding-left: 14px;">
                  <strong style="color: var(--brass-800); display: block; margin-bottom: 4px;">Current Challenges:</strong>
                  <span style="color: var(--charcoal-700);">${r.challenges}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    </div>
  `;

  if (typeof document !== "undefined") setTimeout(() => {
    const btns = document.querySelectorAll('.filter-tech-btn');
    const cards = document.querySelectorAll('.reactor-family-card');

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => {
          b.classList.remove('btn-primary');
          b.classList.add('btn-secondary');
        });
        btn.classList.remove('btn-secondary');
        btn.classList.add('btn-primary');

        const filter = btn.getAttribute('data-filter');
        cards.forEach(card => {
          const cat = card.getAttribute('data-cat');
          if (filter === 'all' || cat === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }, 0);

  return html;
}
