// How It Works Page: Atomic Physics, Reaction Kinetics & Thermodynamic Cycles

import { renderFissionSimulator } from '../diagrams/fission-diagram.js';
import { renderSteamCycleDiagram } from '../diagrams/steam-cycle-diagram.js';

export function renderHowItWorksPage() {
  const html = `
    <div class="page-container" style="padding-top: 48px; padding-bottom: 96px;">
      <!-- Hero -->
      <section class="container" style="margin-bottom: 56px;">
        <span class="eyebrow eyebrow-forest">Fundamental Physics & Engineering</span>
        <h1 class="heading-display">
          How Nuclear Energy Works:<br/>
          From Atomic Nuclei to the Grid
        </h1>
        <p class="lead-text">
          Nuclear electricity transforms the binding energy of the atomic nucleus into controlled thermal heat, mechanical shaft rotation, and alternating electrical current with zero combustion.
        </p>
      </section>

      <!-- Interactive Fission Stage -->
      <section class="container" style="margin-bottom: 72px;">
        <div id="hiw-fission-mount"></div>
      </section>

      <!-- Deep Dive 1: Nuclear Physics Foundations -->
      <section class="container" style="margin-bottom: 80px;">
        <div style="max-width: 820px; margin-bottom: 36px;">
          <h2 class="heading-section">The Nuclear Force & The Mass Defect</h2>
          <p class="body-editorial" style="font-size: 1.05rem;">
            When protons and neutrons bind together into an atomic nucleus, a tiny fraction of their mass is converted into binding energy according to Einstein's mass-energy equivalency:
          </p>
          <div style="background: var(--bg-subtle); border-left: 4px solid var(--brass-600); padding: 18px 24px; border-radius: var(--radius-sm); margin: 20px 0; font-family: var(--font-mono); font-size: 1.15rem; color: var(--forest-900);">
            E = Δm · c²
          </div>
          <p class="body-editorial">
            For a heavy nucleus like Uranium-235, the binding energy per nucleon is approximately 7.6 MeV. When it absorbs a thermal neutron, it splits into two middle-mass nuclei (such as Barium-141 and Krypton-92) where the binding energy per nucleon is higher (~8.5 MeV). The resulting mass defect of <strong>0.215 atomic mass units (u)</strong> manifests instantaneously as ~200 MeV of thermal kinetic energy—predominantly the high-velocity recoil of fission fragments.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
          <div class="feature-card-editorial">
            <h5 style="color: var(--forest-900); font-size: 1.05rem; margin-bottom: 8px;">U-235 vs U-238 Isotopes</h5>
            <p style="font-size: 0.88rem; color: var(--charcoal-600); line-height: 1.55;">
              Natural uranium consists of 99.28% U-238 and only 0.72% U-235. Because U-235 has an odd number of neutrons (143), an added neutron provides extra pairing energy that pushes the compound nucleus over the fission barrier with zero activation energy.
            </p>
          </div>

          <div class="feature-card-editorial">
            <h5 style="color: var(--forest-900); font-size: 1.05rem; margin-bottom: 8px;">Neutron Moderation</h5>
            <p style="font-size: 0.88rem; color: var(--charcoal-600); line-height: 1.55;">
              Fission emits neutrons at high velocities (~20,000 km/s, 2 MeV). To induce subsequent fissions efficiently, these fast neutrons collide with lightweight hydrogen nuclei in ordinary water (moderator), slowing down to thermal speeds (~2,200 m/s, 0.025 eV).
            </p>
          </div>

          <div class="feature-card-editorial">
            <h5 style="color: var(--forest-900); font-size: 1.05rem; margin-bottom: 8px;">The Delayed Neutron Lifeline</h5>
            <p style="font-size: 0.88rem; color: var(--charcoal-600); line-height: 1.55;">
              About 0.65% of neutrons are emitted not at fission, but seconds to minutes later as daughter fragments decay. This minute fraction lengthens the reactor response time from microseconds to tens of seconds, making peaceful mechanical control possible.
            </p>
          </div>
        </div>
      </section>

      <!-- Interactive Steam Cycle Diagram Mount -->
      <section class="container" style="margin-bottom: 72px;">
        <div id="hiw-steam-mount"></div>
      </section>

      <!-- Reactor Core Internal Control Systems -->
      <section class="container">
        <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 40px; box-shadow: var(--shadow-subtle);">
          <span class="eyebrow eyebrow-forest">Inherent Stability Physics</span>
          <h2 class="heading-section" style="margin-bottom: 16px;">Passive Negative Reactivity Coefficients</h2>
          <p class="body-editorial" style="margin-bottom: 24px;">
            Commercial light water reactors are governed by fundamental laws of thermal physics that naturally shut down fission if temperatures rise, preventing runaway reactions:
          </p>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
            <div>
              <h5 style="font-size: 1rem; font-weight: 700; color: var(--charcoal-900); margin-bottom: 6px;">
                Doppler Broadening (Fuel Temperature Coefficient)
              </h5>
              <p style="font-size: 0.86rem; color: var(--charcoal-600); line-height: 1.55;">
                As uranium fuel heats up, the thermal agitation of U-238 nuclei increases, broadening their neutron resonance absorption bands. This absorbs more neutrons parasitically, immediately damping the chain reaction within milliseconds.
              </p>
            </div>

            <div>
              <h5 style="font-size: 1rem; font-weight: 700; color: var(--charcoal-900); margin-bottom: 6px;">
                Negative Moderator Density Coefficient
              </h5>
              <p style="font-size: 0.86rem; color: var(--charcoal-600); line-height: 1.55;">
                If coolant water overheats or begins to form voids (steam bubbles), its density drops. Fewer hydrogen atoms are present to moderate fast neutrons, the thermal neutron flux drops, and reactor power decreases automatically.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;

  if (typeof document !== "undefined") setTimeout(() => {
    renderFissionSimulator('hiw-fission-mount');
    renderSteamCycleDiagram('hiw-steam-mount');
  }, 0);

  return html;
}
