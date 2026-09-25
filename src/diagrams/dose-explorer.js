// Interactive Radiation Dosimetry & Health Scale

export function renderDoseExplorer(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const doseItems = [
    { source: "Eating a single banana (Potassium-40)", dose: 0.0001, unit: "mSv", context: "Everyday food ingestion naturally contains radioactive isotopes." },
    { source: "Dental X-ray (digital)", dose: 0.005, unit: "mSv", context: "Targeted localized diagnostic procedure." },
    { source: "Living 1 year within 80 km of a nuclear power plant", dose: 0.00009, unit: "mSv", context: "EPA average: orders of magnitude lower than eating a banana." },
    { source: "Transatlantic commercial flight (cosmic ray exposure)", dose: 0.04, unit: "mSv", context: "Atmospheric thinning at 35,000 feet allows cosmic radiation." },
    { source: "Annual average global natural background radiation", dose: 2.4, unit: "mSv", context: "Cosmic rays, radon gas, soil radionuclides, building materials." },
    { source: "Single chest CT scan", dose: 7.0, unit: "mSv", context: "Standard medical 3D imaging." },
    { source: "Annual occupational safety limit for nuclear energy workers", dose: 20.0, unit: "mSv", context: "International Commission on Radiological Protection (ICRP) limit." },
    { source: "Lowest acute dose with clinically observable temporary blood changes", dose: 100.0, unit: "mSv", context: "Threshold below which no epidemiological cancer increase is detectable." }
  ];

  container.innerHTML = `
    <div class="diagram-stage">
      <div style="margin-bottom: 20px;">
        <span class="eyebrow eyebrow-forest">Radiological Science</span>
        <h3 class="heading-subsection" style="margin-bottom: 4px;">Contextualizing Ionizing Radiation Dosimetry</h3>
        <p class="body-editorial" style="font-size: 0.9rem; max-width: 720px;">
          Radiation is a natural omnipresent physical phenomenon. Humans absorb ~2.4 mSv annually from our soil, air, food, and cosmic rays. Compare everyday natural exposures with medical diagnostic exams and regulatory limits.
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 12px;">
        ${doseItems.map(item => `
          <div style="background: var(--bg-subtle); border-radius: var(--radius-sm); padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; border-left: 3px solid ${item.dose > 10 ? '#C59B27' : 'var(--forest-600)'};">
            <div style="max-width: 520px;">
              <strong style="font-size: 0.92rem; color: var(--charcoal-900); display: block;">${item.source}</strong>
              <span style="font-size: 0.8rem; color: var(--charcoal-600);">${item.context}</span>
            </div>
            <div style="font-family: var(--font-mono); font-weight: 700; font-size: 1.05rem; color: var(--forest-900); background: #FFFFFF; padding: 6px 14px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
              ${item.dose} ${item.unit}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
