// Interactive 5-Layer Defense-in-Depth Barrier Explorer

export function renderDefenseDepthDiagram(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const barriers = [
    {
      level: "Barrier 1",
      name: "Ceramic Uranium Dioxide (UO₂) Fuel Pellet Matrix",
      thickness: "Sintered cylindrical pellet (~10mm diameter)",
      temperatureLimit: "Melting point ~2,865°C (5,189°F)",
      retentionRate: ">99% of all solid and volatile fission products",
      description: "Fission occurs inside high-density sintered ceramic fuel pellets. The rigid fluorite crystalline matrix locks inside over 99% of all generated radioactive isotopes (strontium, cesium, barium, rare earths) directly at the atomic scale."
    },
    {
      level: "Barrier 2",
      name: "Hermetic Zircaloy / SiC Fuel Rod Cladding",
      thickness: "0.57 mm zirconium-niobium alloy tube",
      temperatureLimit: "Steam oxidation limit ~1,204°C (2,200°F)",
      retentionRate: "Complete seal against primary coolant contact",
      description: "Pellets are stacked inside vacuum-sealed, pressurized zirconium-alloy cladding tubes with welded end plugs. This prevents radioactive fission gases (krypton, xenon, volatile iodine) from ever entering the circulating primary water."
    },
    {
      level: "Barrier 3",
      name: "Massive Forged Steel Reactor Pressure Vessel (RPV)",
      thickness: "15 to 25 cm (6–10 inches) low-alloy forged steel",
      temperatureLimit: "Design pressure 172 bar, temp 350°C",
      retentionRate: "Encloses entire primary coolant inventory",
      description: "A monolithic seamless forged steel vessel internally clad with corrosion-resistant stainless steel. It houses the entire core and circulating high-pressure water, designed to withstand design-basis thermal shock, seismic events, and severe overpressures."
    },
    {
      level: "Barrier 4",
      name: "Prestressed Reinforced Concrete Containment Structure",
      thickness: "1.0 to 1.8 meters (3–6 feet) post-tensioned concrete with steel liner",
      temperatureLimit: "Internal design pressure 4.5–6.0 bar gauge",
      retentionRate: "Leak-tight boundary against severe accident release",
      description: "A colossal cylindrical structure reinforced with high-strength post-tensioned steel tendons and an internal 6mm continuous welded steel liner. Engineered to withstand direct commercial airliner crashes, seismic accelerations, tornadoes, and internal hydrogen explosions."
    },
    {
      level: "Barrier 5",
      name: "Exclusion Zone & Emergency Planning Perimeter",
      thickness: "1 km dedicated exclusion zone; 10–16 km emergency buffer",
      temperatureLimit: "Monitored atmospheric dispersion boundary",
      retentionRate: "Public radiological buffer & 24/7 environmental sensor array",
      description: "The spatial barrier: restricted industrial boundaries with continuous multi-channel radiation detectors, automated meteorological telemetry, and dedicated rapid-response emergency protocols."
    }
  ];

  container.innerHTML = `
    <div class="diagram-stage">
      <div style="margin-bottom: 24px;">
        <span class="eyebrow eyebrow-forest">Nuclear Safety Philosophy</span>
        <h3 class="heading-subsection" style="margin-bottom: 6px;">The 5 Concentric Physical Containment Barriers</h3>
        <p class="body-editorial" style="font-size: 0.92rem; max-width: 720px;">
          Nuclear safety does not rely on a single system or human decision. Under the IAEA Defense-in-Depth doctrine, radioactive isotopes must breach five independent, consecutive physical structures before reaching the public environment.
        </p>
      </div>

      <!-- Interactive Barrier Selector Tabs -->
      <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px;" id="barrier-tabs">
        ${barriers.map((b, idx) => `
          <button class="btn btn-secondary btn-sm barrier-tab-btn ${idx === 0 ? 'active' : ''}" data-idx="${idx}" style="font-size: 0.8rem;">
            <span>${b.level}</span>
          </button>
        `).join('')}
      </div>

      <!-- Active Barrier Detail Card -->
      <div id="barrier-content-card" style="background: var(--bg-subtle); border: 1px solid var(--border-medium); border-radius: var(--radius-sm); padding: 28px;">
        <!-- Injected via script -->
      </div>
    </div>
  `;

  const tabs = container.querySelectorAll('.barrier-tab-btn');
  const card = document.getElementById('barrier-content-card');

  function renderCard(idx) {
    const b = barriers[idx];
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
        <div>
          <span style="font-family: var(--font-mono); font-size: 0.78rem; font-weight: 700; color: var(--brass-700); text-transform: uppercase;">
            ${b.level} of 5 Physical Barriers
          </span>
          <h4 style="font-size: 1.3rem; font-weight: 700; color: var(--forest-900); margin-top: 2px;">
            ${b.name}
          </h4>
        </div>
      </div>

      <p class="body-editorial" style="font-size: 0.95rem; margin-bottom: 24px; line-height: 1.65;">
        ${b.description}
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; font-family: var(--font-mono); font-size: 0.82rem;">
        <div style="background: var(--bg-surface); padding: 12px 16px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
          <div style="color: var(--charcoal-500); margin-bottom: 4px;">DIMENSIONS / THICKNESS</div>
          <strong style="color: var(--forest-900);">${b.thickness}</strong>
        </div>
        <div style="background: var(--bg-surface); padding: 12px 16px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
          <div style="color: var(--charcoal-500); margin-bottom: 4px;">ENGINEERING DESIGN LIMIT</div>
          <strong style="color: var(--forest-900);">${b.temperatureLimit}</strong>
        </div>
        <div style="background: var(--bg-surface); padding: 12px 16px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
          <div style="color: var(--charcoal-500); margin-bottom: 4px;">ISOLATION EFFECTIVENESS</div>
          <strong style="color: var(--forest-900);">${b.retentionRate}</strong>
        </div>
      </div>
    `;
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderCard(parseInt(tab.getAttribute('data-idx')));
    });
  });

  renderCard(0);
}
