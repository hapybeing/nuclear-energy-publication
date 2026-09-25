// Home Page Component (12 Editorial Acts)

import { createMetricStrip } from '../components/MetricStrip.js';
import { renderFissionSimulator } from '../diagrams/fission-diagram.js';
import { renderPelletCalculator } from '../diagrams/pellet-calculator.js';
import { IMAGES } from '../data/images.js';

export function renderHomePage() {
  const html = `
    <!-- Act 1: Hero Section matching reference composition -->
    <section class="hero-section" style="padding-top: 56px; padding-bottom: 72px;">
      <div class="container">
        <div style="max-width: 820px; margin-bottom: 40px;">
          <h1 class="heading-display">
            Reliable Energy<br/>
            for a <span class="italic-serif text-forest">Brighter,</span><br/>
            Healthier Planet
          </h1>
          <p class="lead-text" style="margin-bottom: 32px;">
            Nuclear energy provides clean, reliable, and abundant electricity, helping to power modern life while reducing pollution and building a more sustainable future.
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 16px;">
            <a href="#/benefits" class="btn btn-primary">
              <span>Discover the Benefits</span>
              <span class="arrow-icon">→</span>
            </a>
            <a href="#/how-it-works" class="btn btn-secondary">
              <span>See How It Works</span>
            </a>
          </div>
        </div>

        <!-- Hero Panoramic Image -->
        <div class="split-image-card" style="width: 100%; height: auto; max-height: 560px; margin-top: 16px;">
          <img src="${IMAGES.hero}" alt="Panoramic SolarPunk mountain valley with futuristic city and modern clean nuclear power station" loading="eager" width="1920" height="1080">
        </div>
      </div>
    </section>

    <!-- Act 2: Quick Metrics Strip -->
    ${createMetricStrip()}

    <!-- Act 3: Why Nuclear Energy Matters (Split with Solarpunk Interior) -->
    <section class="split-section">
      <div class="container">
        <div class="split-grid">
          <!-- Left: Solarpunk Living Room Overlooking Green City -->
          <div class="split-image-card">
            <img src="${IMAGES.interior}" alt="Modern comfortable solarpunk living space with floor-to-ceiling glass overlooking a lush green futuristic city" loading="lazy" width="1200" height="900">
          </div>

          <!-- Right: Editorial Content & 2x2 Feature Grid -->
          <div>
            <span class="eyebrow">WHY NUCLEAR ENERGY MATTERS</span>
            <h2 class="heading-section">
              Real Benefits<br/>
              for People and the Planet
            </h2>
            <p class="body-editorial" style="margin-bottom: 24px;">
              Nuclear energy is a powerful tool for a cleaner, healthier, and more prosperous world. It provides the energy we need today while helping to build a better tomorrow.
            </p>

            <div class="features-2x2">
              <!-- Feature 1: Low Emissions -->
              <div class="feature-card-editorial">
                <div class="feature-card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                  </svg>
                </div>
                <h5>Low Emissions</h5>
                <p>Generates electricity with minimal greenhouse gas emissions (5.1–12 g CO₂/kWh, UNECE 2021).</p>
              </div>

              <!-- Feature 2: High Energy Density -->
              <div class="feature-card-editorial">
                <div class="feature-card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <ellipse cx="12" cy="5" rx="9" ry="3"/>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                  </svg>
                </div>
                <h5>High Energy Density</h5>
                <p>Produces an enormous amount of power from a tiny ceramic fuel pellet equivalent to 1 ton of coal.</p>
              </div>

              <!-- Feature 3: Reliable and Stable -->
              <div class="feature-card-editorial">
                <div class="feature-card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h5>Reliable and Stable</h5>
                <p>Provides consistent power >92% of the year, completely independent of seasonal weather conditions.</p>
              </div>

              <!-- Feature 4: Supports Economic Growth -->
              <div class="feature-card-editorial">
                <div class="feature-card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="20" x2="18" y2="10"/>
                    <line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="14"/>
                  </svg>
                </div>
                <h5>Supports Economic Growth</h5>
                <p>Creates long-term, high-skilled engineering jobs and anchors stable regional prosperity for 60–80 years.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Act 4: How Nuclear Energy Works (Editorial Split + Architectural Pipeline) -->
    <section class="split-section" style="background-color: var(--bg-surface); border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle);">
      <div class="container">
        <div class="split-grid" style="align-items: flex-start;">
          <!-- Left: Narrative -->
          <div>
            <span class="eyebrow">HOW NUCLEAR ENERGY WORKS</span>
            <h2 class="heading-section">
              From Atoms to Electricity
            </h2>
            <p class="body-editorial" style="margin-bottom: 24px;">
              Nuclear power plants use a process called nuclear fission, where the nucleus of an atom, usually uranium, is split to release heat. This heat turns water into steam, which drives a turbine to generate electricity.
            </p>
            <a href="#/how-it-works" class="btn btn-primary">
              <span>Learn the Process</span>
              <span class="arrow-icon">→</span>
            </a>
          </div>

          <!-- Right: Architectural Station Pipeline Visual -->
          <div>
            <div class="split-image-card" style="margin-bottom: 20px;">
              <img src="${IMAGES.plantPipeline}" alt="Architectural rendering of nuclear power plant with process flow steps" loading="lazy" width="1200" height="700">
            </div>

            <!-- 4 Numbered Steps -->
            <div class="process-steps-grid">
              <div class="step-card">
                <div class="step-number">1. Nuclear Fission</div>
                <h5>Heat Release</h5>
                <p>Atoms of U-235 are split inside the core to release intense thermal energy.</p>
              </div>
              <div class="step-card">
                <div class="step-number">2. Steam Generation</div>
                <h5>Thermal Transfer</h5>
                <p>High-pressure hot water heats secondary water in a separate circuit into steam.</p>
              </div>
              <div class="step-card">
                <div class="step-number">3. Turbine Rotation</div>
                <h5>Kinetic Power</h5>
                <p>High-pressure steam expands across turbine blades at 1,800 RPM.</p>
              </div>
              <div class="step-card">
                <div class="step-number">4. Clean Electricity</div>
                <h5>Grid Delivery</h5>
                <p>Generators send clean electric power to homes, hospitals, and heavy industry.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Act 5: Interactive Fission & Energy Density Laboratory -->
    <section class="split-section">
      <div class="container">
        <div style="text-align: center; max-width: 720px; margin: 0 auto 36px auto;">
          <span class="eyebrow eyebrow-forest">Hands-On Science Exploration</span>
          <h2 class="heading-section">Interact with the Fundamental Physics</h2>
          <p class="body-editorial">
            Experience the microscopic dynamics of induced nuclear fission and calculate the massive thermodynamic energy density of uranium fuel.
          </p>
        </div>

        <div id="home-fission-mount"></div>
        <div id="home-pellet-mount" style="margin-top: 32px;"></div>
      </div>
    </section>

    <!-- Act 6: A Cleaner, Healthier World (Dark Botanical Forest Section with Photo Trio) -->
    <section class="dark-forest-section">
      <div class="container">
        <div style="max-width: 720px;">
          <span class="eyebrow" style="color: var(--brass-400);">A CLEANER, HEALTHIER WORLD</span>
          <h2 class="heading-section" style="color: #FFFFFF;">
            Positive Impact Beyond Energy
          </h2>
          <p class="lead-text" style="color: var(--text-inverse-muted); margin-bottom: 28px;">
            Nuclear energy helps reduce air pollution, combat climate change, and protect natural ecosystems, contributing to a healthier planet for current and future generations.
          </p>
          <a href="#/environment" class="btn btn-white">
            <span>Explore the Environmental Benefits</span>
            <span class="arrow-icon">→</span>
          </a>
        </div>

        <!-- 3 Photo Cards matching reference -->
        <div class="photo-cards-trio">
          <!-- Card 1: Lower GHG Emissions -->
          <div class="photo-card">
            <div class="photo-card-img-wrap">
              <img src="${IMAGES.envMountains}" alt="Snow-capped alpine peaks reflecting in crystal mountain lake" loading="lazy" width="800" height="600">
            </div>
            <div class="photo-card-body">
              <h4>Lower Greenhouse Gas Emissions</h4>
              <p>Helps fight climate change by producing very low emissions (5.1–12 g CO₂/kWh across entire lifecycle).</p>
            </div>
          </div>

          <!-- Card 2: Cleaner Air -->
          <div class="photo-card">
            <div class="photo-card-img-wrap">
              <img src="${IMAGES.envForest}" alt="Pristine evergreen forest river with mossy boulders" loading="lazy" width="800" height="600">
            </div>
            <div class="photo-card-body">
              <h4>Cleaner Air</h4>
              <p>Generates electricity without combustion soot, reducing PM2.5 and nitrogen oxide fine particulates.</p>
            </div>
          </div>

          <!-- Card 3: Preserves Natural Habitats -->
          <div class="photo-card">
            <div class="photo-card-img-wrap">
              <img src="${IMAGES.envWildlife}" alt="Wild stag in sunlit mountain meadow" loading="lazy" width="800" height="600">
            </div>
            <div class="photo-card-body">
              <h4>Preserves Natural Habitats</h4>
              <p>Produces massive energy from a tiny footprint (~1.8 km²/GW), conserving vital biodiversity and wild forests.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Act 7: Safety Callout Banner matching reference -->
    <section class="callout-strip">
      <div class="container">
        <div class="callout-flex">
          <div style="max-width: 760px;">
            <span class="eyebrow">SAFETY AND RESPONSIBILITY</span>
            <h3 class="heading-subsection" style="margin-bottom: 8px;">Safe, Regulated, and Continuously Improving</h3>
            <p class="body-editorial" style="font-size: 0.95rem;">
              Nuclear energy is one of the most tightly regulated industries in the world. Plants are designed with multiple layers of safety systems, and ongoing research continues to make them even safer and more efficient.
            </p>
          </div>
          <a href="#/safety" class="btn btn-primary" style="flex-shrink: 0;">
            <span>Learn About Safety</span>
            <span class="arrow-icon">→</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Act 8: Scientific Honesty — Challenges, Economics & Tradeoffs -->
    <section class="split-section">
      <div class="container">
        <div style="max-width: 760px; margin-bottom: 36px;">
          <span class="eyebrow eyebrow-forest">Rigorous Scientific Perspective</span>
          <h2 class="heading-section">Transparent Realities: Economic & Technical Tradeoffs</h2>
          <p class="body-editorial">
            A scientifically honest assessment must address the genuine economic, political, and material hurdles that nuclear energy projects navigate in the modern world.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
          <div class="feature-card-editorial">
            <div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--brass-700); text-transform: uppercase; margin-bottom: 6px;">FINANCIAL CAPITAL</div>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 8px;">High Upfront Capital & Financing Costs</h4>
            <p style="font-size: 0.88rem; color: var(--charcoal-700); line-height: 1.6;">
              First-of-a-kind (FOAK) Gen III+ reactors in Western nations have suffered extended construction schedules (7–14 years) and high overnight capital costs ($6,000–$10,000/kW), increasing financing risk. By contrast, programmatic serialized buildouts (such as South Korea's APR-1400 and historical French programs) achieve costs below $3,000/kW through supply-chain standardization.
            </p>
          </div>

          <div class="feature-card-editorial">
            <div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--brass-700); text-transform: uppercase; margin-bottom: 6px;">WASTE ISOLATION</div>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 8px;">Long-Term High-Level Waste Stewardship</h4>
            <p style="font-size: 0.88rem; color: var(--charcoal-700); line-height: 1.6;">
              While high-level spent fuel is compact (the total civilian fuel ever generated in US history would fit on a single football field 10 yards deep), it remains hazardous for thousands of years. Finland's Onkalo repository proves permanent deep geological isolation in crystalline bedrock is feasible, but political consent remains challenging in several nations.
            </p>
          </div>

          <div class="feature-card-editorial">
            <div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--brass-700); text-transform: uppercase; margin-bottom: 6px;">NON-PROLIFERATION</div>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 8px;">Strict Non-Proliferation Safeguards</h4>
            <p style="font-size: 0.88rem; color: var(--charcoal-700); line-height: 1.6;">
              Uranium enrichment and fuel reprocessing facilities involve dual-use technologies. International civilian nuclear energy operates under binding International Atomic Energy Agency (IAEA) comprehensive safeguards and Additional Protocols to prevent the diversion of fissile material.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Act 9: Closing Banner matching reference (A Brighter Tomorrow Is Within Reach) -->
    <section style="position: relative; background-color: #0E1B13; color: #FFFFFF; overflow: hidden; padding: 110px 0;">
      <!-- Sunset Backdrop Image -->
      <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0.55; z-index: 1;">
        <img src="${IMAGES.futureSunset}" alt="Golden sunset over a clean solarpunk coastal city" style="width: 100%; height: 100%; object-fit: cover;">
      </div>

      <div class="container" style="position: relative; z-index: 2; max-width: 780px;">
        <h2 class="heading-display" style="color: #FFFFFF; margin-bottom: 20px;">
          A Brighter Tomorrow<br/>
          Is Within Reach
        </h2>
        <p class="lead-text" style="color: #E8EFEA; margin-bottom: 36px;">
          Nuclear energy can help build a cleaner, healthier, and more prosperous world. By learning more and supporting informed discussion, we can unlock its full potential.
        </p>
        <a href="#/learn" class="btn btn-primary" style="background-color: var(--forest-900); border: 1px solid rgba(255,255,255,0.25);">
          <span>Start Exploring</span>
          <span class="arrow-icon">→</span>
        </a>
      </div>
    </section>
  `;

  if (typeof document !== "undefined") setTimeout(() => {
    renderFissionSimulator('home-fission-mount');
    renderPelletCalculator('home-pellet-mount');
  }, 0);

  return html;
}
