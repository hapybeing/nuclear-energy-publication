// Interactive PWR / BWR Three-Loop Thermodynamic Steam Cycle Diagram

export function renderSteamCycleDiagram(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const componentData = {
    core: {
      title: "Reactor Pressure Vessel & Core",
      loop: "Primary Loop (Hermetic)",
      temp: "315°C (599°F)",
      pressure: "155 bar (2,250 psi)",
      role: "Contains ~193 nuclear fuel assemblies of sintered ceramic UO2 pellets clad in zircaloy. Water is kept at extreme pressure so it reaches 315°C without boiling, transporting intense fission heat to the steam generators."
    },
    pressurizer: {
      title: "Hydraulic Pressurizer",
      loop: "Primary Loop Surge Control",
      temp: "345°C saturated",
      pressure: "155 bar constant",
      role: "Maintains constant primary system pressure using electric immersion heaters (to raise pressure) and cold water spray nozzles (to condense steam and reduce pressure), preventing bulk boiling inside the core."
    },
    sg: {
      title: "U-Tube Steam Generator",
      loop: "Heat Exchanger Interface",
      temp: "290°C secondary steam",
      pressure: "65 bar secondary",
      role: "Transfers heat from the high-pressure primary radioactive water through thousands of inverted nickel-chromium alloy (Alloy 690) U-tubes to the clean secondary water, turning it into dry saturated steam with zero fluid contact."
    },
    turbine: {
      title: "Turbine-Generator Set",
      loop: "Secondary Power Loop",
      temp: "Expands from 290°C to 35°C",
      pressure: "Drops from 65 bar to 0.05 bar (vacuum)",
      role: "Steam expands through high-pressure and low-pressure turbine stages, rotating a massive steel rotor shaft at 1,500 or 1,800 RPM. A synchronous 4-pole electric generator converts this rotational kinetic energy into 1,000–1,600 MWe of electricity."
    },
    condenser: {
      title: "Surface Condenser",
      loop: "Interface to Tertiary Heat Sink",
      temp: "33°C condensate",
      pressure: "0.05 bar (deep vacuum)",
      role: "Condenses expanded exhaust steam back into pure liquid water across titanium/stainless steel tubes cooled by river, ocean, or cooling tower water. Returning liquid water to high pressure requires orders of magnitude less pumping energy than compressing steam."
    },
    cooling: {
      title: "Natural Draft Cooling Tower",
      loop: "Tertiary Ultimate Heat Sink",
      temp: "20°C ambient return",
      pressure: "Atmospheric",
      role: "Hyperboloid concrete structure creating a chimney effect that draws upward ambient air currents to evaporate a tiny fraction (~2%) of tertiary water, releasing non-radioactive clean water vapor plumes while recycling the cooled water."
    }
  };

  container.innerHTML = `
    <div class="diagram-stage">
      <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 12px; margin-bottom: 20px;">
        <div>
          <span class="eyebrow eyebrow-forest">Thermodynamic Architecture</span>
          <h3 class="heading-subsection" style="margin-bottom: 4px;">Three Independent Cooling Circuits (PWR Closed-Loop Cycle)</h3>
          <p class="body-editorial" style="font-size: 0.9rem; max-width: 680px;">
            Commercial Pressurized Water Reactors isolate radioactivity through three physically separated thermodynamic loops. Click any highlighted component below to inspect its operational physics and thermodynamic parameters.
          </p>
        </div>
      </div>

      <!-- Interactive SVG Schematic -->
      <div style="background: #0E1B13; border-radius: var(--radius-md); padding: 24px; border: 1px solid rgba(255,255,255,0.08); position: relative; overflow-x: auto;">
        <svg viewBox="0 0 960 480" width="100%" height="auto" style="min-width: 760px; display: block;" id="steam-schematic-svg">
          <!-- Background Loop Guides -->
          <!-- Loop 1: Primary (Red/Orange hot pressurized) -->
          <path d="M 170 280 L 260 280 L 260 240 L 320 240" fill="none" stroke="#E66A4E" stroke-width="7" stroke-linecap="round"/>
          <path d="M 320 360 L 240 360 L 240 330 L 170 330" fill="none" stroke="#4A8FB3" stroke-width="7" stroke-linecap="round"/>
          
          <!-- Loop 2: Secondary Steam (Cyan / Blue) -->
          <path d="M 350 160 L 520 160 L 520 220" fill="none" stroke="#68C7E8" stroke-width="7" stroke-linecap="round"/>
          <path d="M 640 360 L 410 360 L 350 360" fill="none" stroke="#3D7EAA" stroke-width="6" stroke-linecap="round"/>
          
          <!-- Loop 3: Tertiary Cooling (Green/Teal) -->
          <path d="M 580 390 L 780 390 L 780 330" fill="none" stroke="#48A878" stroke-width="5" stroke-dasharray="8 6"/>
          <path d="M 780 430 L 580 430" fill="none" stroke="#2B724F" stroke-width="5" stroke-dasharray="8 6"/>

          <!-- 1. Containment Outline -->
          <path d="M 70 420 L 70 180 Q 240 40 410 180 L 410 420 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.2)" stroke-width="2" stroke-dasharray="6 4"/>
          <text x="90" y="80" fill="rgba(255,255,255,0.4)" font-family="Plus Jakarta Sans" font-size="11" font-weight="600" letter-spacing="1">PRESTRESSED CONCRETE CONTAINMENT</text>

          <!-- 2. Reactor Pressure Vessel (RPV) -->
          <g class="diagram-interactive-node" data-target="core" style="cursor: pointer;">
            <rect x="110" y="210" width="80" height="170" rx="24" fill="#1C3829" stroke="#C59B27" stroke-width="2.5"/>
            <!-- Fuel assemblies core -->
            <rect x="125" y="260" width="50" height="90" rx="4" fill="#0B1E14" stroke="#4B916A" stroke-width="1.5"/>
            <line x1="135" y1="260" x2="135" y2="350" stroke="#E8C366" stroke-width="2"/>
            <line x1="150" y1="260" x2="150" y2="350" stroke="#E8C366" stroke-width="2"/>
            <line x1="165" y1="260" x2="165" y2="350" stroke="#E8C366" stroke-width="2"/>
            <!-- Control rods mechanism above -->
            <rect x="135" y="170" width="30" height="40" fill="#2E4C3B" stroke="#8EBAA0" stroke-width="1"/>
            <text x="150" y="405" fill="#FAF8F5" font-family="Plus Jakarta Sans" font-size="12" font-weight="700" text-anchor="middle">Reactor Core</text>
            <text x="150" y="420" fill="#E8C366" font-family="JetBrains Mono" font-size="10" text-anchor="middle">315°C | 155 bar</text>
          </g>

          <!-- 3. Pressurizer -->
          <g class="diagram-interactive-node" data-target="pressurizer" style="cursor: pointer;">
            <rect x="220" y="150" width="40" height="80" rx="14" fill="#1A3326" stroke="#E66A4E" stroke-width="2"/>
            <line x1="240" y1="230" x2="240" y2="280" stroke="#E66A4E" stroke-width="3"/>
            <text x="240" y="138" fill="#E8C366" font-family="Plus Jakarta Sans" font-size="10" font-weight="600" text-anchor="middle">Pressurizer</text>
          </g>

          <!-- 4. Steam Generator (SG) -->
          <g class="diagram-interactive-node" data-target="sg" style="cursor: pointer;">
            <rect x="310" y="150" width="80" height="230" rx="20" fill="#152B20" stroke="#68C7E8" stroke-width="2.5"/>
            <!-- Inverted U-tubes -->
            <path d="M 330 350 L 330 220 Q 350 190 370 220 L 370 350" fill="none" stroke="#E8C366" stroke-width="3"/>
            <text x="350" y="405" fill="#FAF8F5" font-family="Plus Jakarta Sans" font-size="12" font-weight="700" text-anchor="middle">Steam Generator</text>
            <text x="350" y="420" fill="#68C7E8" font-family="JetBrains Mono" font-size="10" text-anchor="middle">Heat Exchanger</text>
          </g>

          <!-- 5. Turbine & Generator -->
          <g class="diagram-interactive-node" data-target="turbine" style="cursor: pointer;">
            <!-- Turbine housing (HP & LP stages) -->
            <polygon points="500,200 580,180 580,260 500,240" fill="#1C3829" stroke="#E8C366" stroke-width="2"/>
            <polygon points="590,170 680,150 680,290 590,270" fill="#1C3829" stroke="#E8C366" stroke-width="2"/>
            <!-- Shaft -->
            <line x1="500" y1="220" x2="760" y2="220" stroke="#FAF8F5" stroke-width="5"/>
            <!-- Generator -->
            <rect x="690" y="180" width="70" height="80" rx="8" fill="#C59B27" stroke="#FAF8F5" stroke-width="2"/>
            <text x="725" y="225" fill="#141A16" font-family="Plus Jakarta Sans" font-size="11" font-weight="800" text-anchor="middle">GEN</text>
            <!-- High voltage line out -->
            <path d="M 760 220 L 810 220 L 840 180" fill="none" stroke="#E8C366" stroke-width="3" stroke-dasharray="5 3"/>
            <text x="600" y="130" fill="#FAF8F5" font-family="Plus Jakarta Sans" font-size="12" font-weight="700" text-anchor="middle">Turbine-Generator Set</text>
            <text x="600" y="146" fill="#C59B27" font-family="JetBrains Mono" font-size="10" text-anchor="middle">1,800 RPM | 1,200 MWe</text>
          </g>

          <!-- 6. Condenser -->
          <g class="diagram-interactive-node" data-target="condenser" style="cursor: pointer;">
            <rect x="560" y="320" width="120" height="90" rx="8" fill="#13261C" stroke="#48A878" stroke-width="2"/>
            <line x1="570" y1="350" x2="670" y2="350" stroke="#48A878" stroke-width="2"/>
            <line x1="570" y1="370" x2="670" y2="370" stroke="#48A878" stroke-width="2"/>
            <text x="620" y="430" fill="#FAF8F5" font-family="Plus Jakarta Sans" font-size="11" font-weight="700" text-anchor="middle">Surface Condenser</text>
            <text x="620" y="445" fill="#48A878" font-family="JetBrains Mono" font-size="10" text-anchor="middle">0.05 bar (Vacuum)</text>
          </g>

          <!-- 7. Cooling Tower -->
          <g class="diagram-interactive-node" data-target="cooling" style="cursor: pointer;">
            <!-- Hyperboloid tower silhouette -->
            <path d="M 830 420 Q 860 300 850 210 L 920 210 Q 910 300 940 420 Z" fill="#20382B" stroke="#8EBAA0" stroke-width="2"/>
            <!-- Vapor cloud -->
            <ellipse cx="885" cy="180" rx="35" ry="18" fill="rgba(255,255,255,0.3)"/>
            <ellipse cx="895" cy="160" rx="45" ry="20" fill="rgba(255,255,255,0.2)"/>
            <text x="885" y="445" fill="#FAF8F5" font-family="Plus Jakarta Sans" font-size="11" font-weight="700" text-anchor="middle">Cooling Tower</text>
            <text x="885" y="460" fill="#8EBAA0" font-family="JetBrains Mono" font-size="10" text-anchor="middle">Clean Vapor</text>
          </g>
        </svg>
      </div>

      <!-- Dynamic Component Telemetry Detail Card -->
      <div id="steam-detail-card" style="margin-top: 24px; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 24px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px; margin-bottom: 12px;">
          <div>
            <span id="comp-loop-badge" style="display: inline-block; font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: #E66A4E; text-transform: uppercase; margin-bottom: 4px;">Primary Loop (Hermetic)</span>
            <h4 id="comp-title" style="font-size: 1.25rem; font-weight: 700; color: var(--forest-900);">Reactor Pressure Vessel & Core</h4>
          </div>
          <div style="display: flex; gap: 16px; font-family: var(--font-mono); font-size: 0.85rem;">
            <div style="background: var(--bg-subtle); padding: 6px 12px; border-radius: var(--radius-sm);">
              <span style="color: var(--charcoal-500);">Operating Temp:</span> <strong id="comp-temp" style="color: var(--forest-900);">315°C (599°F)</strong>
            </div>
            <div style="background: var(--bg-subtle); padding: 6px 12px; border-radius: var(--radius-sm);">
              <span style="color: var(--charcoal-500);">System Pressure:</span> <strong id="comp-press" style="color: var(--forest-900);">155 bar (2,250 psi)</strong>
            </div>
          </div>
        </div>
        <p id="comp-role" class="body-editorial" style="font-size: 0.95rem; line-height: 1.6;">
          Contains ~193 nuclear fuel assemblies of sintered ceramic UO2 pellets clad in zircaloy. Water is kept at extreme pressure so it reaches 315°C without boiling, transporting intense fission heat to the steam generators.
        </p>
      </div>
    </div>
  `;

  // Bind interactive clicks to nodes
  const nodes = container.querySelectorAll('.diagram-interactive-node');
  const titleEl = document.getElementById('comp-title');
  const loopEl = document.getElementById('comp-loop-badge');
  const tempEl = document.getElementById('comp-temp');
  const pressEl = document.getElementById('comp-press');
  const roleEl = document.getElementById('comp-role');

  nodes.forEach(node => {
    node.addEventListener('click', () => {
      const key = node.getAttribute('data-target');
      const data = componentData[key];
      if (!data) return;

      titleEl.innerText = data.title;
      loopEl.innerText = data.loop;
      tempEl.innerText = data.temp;
      pressEl.innerText = data.pressure;
      roleEl.innerText = data.role;

      // Highlight active node
      nodes.forEach(n => n.querySelector('rect, polygon')?.setAttribute('stroke-width', '2'));
      node.querySelector('rect, polygon')?.setAttribute('stroke-width', '4');
    });
  });
}
