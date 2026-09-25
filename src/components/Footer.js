// Footer Component matching editorial aesthetic

export function createFooter() {
  return `
    <footer class="site-footer" role="contentinfo">
      <div class="container">
        <div class="footer-top">
          <!-- Column 1: Brand & Editorial Mission -->
          <div class="footer-brand">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <svg style="width: 32px; height: 32px;" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round">
                <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(30 50 50)" stroke="#A0CCA8"/>
                <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(90 50 50)" stroke="#78B383"/>
                <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(150 50 50)" stroke="#E8C366"/>
                <circle cx="50" cy="50" r="7.5" fill="#E8C366"/>
              </svg>
              <span style="font-family: var(--font-sans); font-size: 1.1rem; font-weight: 800; letter-spacing: 0.1em; color: #FFFFFF;">
                NUCLEAR ENERGY
              </span>
            </div>
            <p>
              An authoritative scientific educational publication exploring the physics, engineering, safety, environmental balance, economics, and future systems of nuclear energy.
            </p>
          </div>

          <!-- Column 2: Science & Engineering -->
          <div class="footer-col">
            <h6>Foundations</h6>
            <ul class="footer-links">
              <li><a href="#/how-it-works">Induced Fission</a></li>
              <li><a href="#/how-it-works">Steam Turbine Cycle</a></li>
              <li><a href="#/safety">Defense in Depth</a></li>
              <li><a href="#/environment">Lifecycle Emissions</a></li>
              <li><a href="#/technology">Reactor Families</a></li>
            </ul>
          </div>

          <!-- Column 3: The Frontier -->
          <div class="footer-col">
            <h6>The Frontier</h6>
            <ul class="footer-links">
              <li><a href="#/technology">Small Modular Reactors (SMRs)</a></li>
              <li><a href="#/technology">Generation IV Systems</a></li>
              <li><a href="#/future">Industrial High Heat</a></li>
              <li><a href="#/future">Clean Hydrogen (SOEC)</a></li>
              <li><a href="#/future">Commercial Fusion</a></li>
            </ul>
          </div>

          <!-- Column 4: Reference & Transparency -->
          <div class="footer-col">
            <h6>Documentation</h6>
            <ul class="footer-links">
              <li><a href="#/learn">Traceable Citations Library</a></li>
              <li><a href="#/learn">Nuclear Glossary (40+ Terms)</a></li>
              <li><a href="#/safety">Accident Post-Mortems</a></li>
              <li><a href="#/environment">Deep Geological Repositories</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div>
            <span>© 2026 Nuclear Energy Editorial Publication. Written & Designed for Public Scientific Understanding.</span>
          </div>
          <div style="display: flex; gap: 20px;">
            <span>Data grounded in IAEA, IEA, IPCC, UNECE & Peer-Reviewed Literature</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}
