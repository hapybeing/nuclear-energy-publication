// Interactive Fuel Cycle & Deep Geological Disposal Diagram

export function renderFuelCycleDiagram(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const stages = [
    {
      step: "01",
      title: "Mining & In-Situ Recovery (ISR)",
      desc: "Uranium is extracted predominantly via ISR (~60% globally), circulating oxygenated groundwater to dissolve uranium without surface excavation, minimizing tailings."
    },
    {
      step: "02",
      title: "Conversion & Gas Centrifuge Enrichment",
      desc: "Milled yellowcake (U3O8) is converted into UF6 gas and spun in high-speed centrifuges to elevate U-235 concentration from natural 0.7% to 3–5% LEU."
    },
    {
      step: "03",
      title: "Fuel Assembly Fabrication",
      desc: "Enriched uranium is baked into dense ceramic UO2 pellets, inserted into zircaloy cladding rods, and bundled into rigid nuclear fuel assemblies."
    },
    {
      step: "04",
      title: "Reactor Generation (3–5 Years in Core)",
      desc: "Assemblies generate steady electric power for 18–24 month refueling cycles. One fuel load powers a million people for years."
    },
    {
      step: "05",
      title: "Wet Storage Cooling Pool (3–10 Years)",
      desc: "Discharged spent assemblies cool under 12 meters of borated water, which provides radiation shielding and passive convective decay heat removal."
    },
    {
      step: "06",
      title: "Dry Cask Interim Storage (Decades)",
      desc: "Cooled assemblies are transferred to inert-gas filled stainless steel cylinders encased in 2-foot thick reinforced concrete, passively cooled by air drafts."
    },
    {
      step: "07",
      title: "Permanent Deep Geological Repository (Onkalo)",
      desc: "Final isolation 450 meters underground in ancient bedrock, encapsulated in 5cm pure copper canisters surrounded by swelling bentonite clay."
    }
  ];

  container.innerHTML = `
    <div class="diagram-stage">
      <div style="margin-bottom: 24px;">
        <span class="eyebrow eyebrow-forest">Complete Material Lifecycle</span>
        <h3 class="heading-subsection" style="margin-bottom: 4px;">The Nuclear Fuel Cycle: From Mineral to Permanent Bedrock</h3>
        <p class="body-editorial" style="font-size: 0.9rem; max-width: 720px;">
          Nuclear energy accounts for 100% of its byproducts. Follow the comprehensive lifecycle of uranium fuel through extraction, reactor operation, interim dry storage, and permanent deep geological isolation.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
        ${stages.map(s => `
          <div class="feature-card-editorial" style="padding: 20px; background: var(--bg-surface);">
            <div style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--brass-700); margin-bottom: 6px;">
              STAGE ${s.step}
            </div>
            <h5 style="font-size: 0.98rem; font-weight: 700; color: var(--charcoal-900); margin-bottom: 6px;">
              ${s.title}
            </h5>
            <p style="font-size: 0.84rem; color: var(--charcoal-600); line-height: 1.5;">
              ${s.desc}
            </p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
