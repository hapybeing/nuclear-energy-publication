// 4-Item Quick Metric Strip matching visual reference

export function createMetricStrip() {
  return `
    <section class="metric-strip-wrapper" aria-label="Key Advantages at a Glance">
      <div class="container">
        <div class="metric-strip-grid">
          <!-- Item 1: Clean Air -->
          <div class="metric-strip-item">
            <svg class="metric-strip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
            </svg>
            <div class="metric-strip-content">
              <h5>Clean Air</h5>
              <p>Produces electricity with very low greenhouse gas emissions.</p>
            </div>
          </div>

          <!-- Item 2: Reliable Power -->
          <div class="metric-strip-item">
            <svg class="metric-strip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
            <div class="metric-strip-content">
              <h5>Reliable Power</h5>
              <p>Delivers steady, around-the-clock electricity independent of weather.</p>
            </div>
          </div>

          <!-- Item 3: Supports Modern Life -->
          <div class="metric-strip-item">
            <svg class="metric-strip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <div class="metric-strip-content">
              <h5>Supports Modern Life</h5>
              <p>Powers homes, hospitals, schools, and heavy industries.</p>
            </div>
          </div>

          <!-- Item 4: A More Sustainable Future -->
          <div class="metric-strip-item">
            <svg class="metric-strip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 10v6"/>
              <path d="M12 14c1.66 0 3-1.34 3-3 0-2-3-5-3-5s-3 3-3 5c0 1.66 1.34 3 3 3Z"/>
              <path d="M7 20h10"/>
              <path d="M9 16c-2 0-4 1-4 4"/>
              <path d="M15 16c2 0 4 1 4 4"/>
            </svg>
            <div class="metric-strip-content">
              <h5>A More Sustainable Future</h5>
              <p>Helps reduce dependence on fossil fuels and conserves ecosystems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
