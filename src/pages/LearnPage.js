// Learn Page: Searchable Nuclear Glossary, Educational Modules & Traceable Sources Library

import { GLOSSARY } from '../data/glossary.js';
import { CITATIONS } from '../data/citations.js';

export function renderLearnPage() {
  const html = `
    <div class="page-container" style="padding-top: 48px; padding-bottom: 96px;">
      <!-- Hero -->
      <section class="container" style="margin-bottom: 56px;">
        <span class="eyebrow eyebrow-forest">Scientific Reference Hub</span>
        <h1 class="heading-display">
          Learning Library &<br/>
          Traceable Scientific Sources
        </h1>
        <p class="lead-text">
          Explore technical nuclear terminology, fundamental physics principles, and verified primary sources from the International Atomic Energy Agency, IPCC, United Nations, and peer-reviewed scientific journals.
        </p>
      </section>

      <!-- Searchable Glossary Section -->
      <section class="container" style="margin-bottom: 80px;">
        <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 16px; margin-bottom: 24px;">
          <div>
            <span class="eyebrow">TERMINOLOGY GUIDE</span>
            <h2 class="heading-section">Nuclear Physics & Engineering Glossary</h2>
          </div>
          <input type="text" id="glossary-search-input" placeholder="Search terminology (e.g., Criticality, SMR, Fission)..." style="padding: 10px 18px; border: 1px solid var(--border-medium); border-radius: var(--radius-full); font-size: 0.88rem; width: 320px; font-family: var(--font-sans); outline: none;">
        </div>

        <div id="glossary-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">
          ${GLOSSARY.map(g => `
            <div class="glossary-card feature-card-editorial" data-term="${g.term.toLowerCase()} ${g.definition.toLowerCase()}" style="padding: 22px;">
              <h4 style="font-size: 1.12rem; font-weight: 700; color: var(--forest-900); margin-bottom: 8px;">
                ${g.term}
              </h4>
              <p style="font-size: 0.86rem; color: var(--charcoal-700); line-height: 1.6;">
                ${g.definition}
              </p>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Traceable Primary Sources & Literature Catalog -->
      <section class="container">
        <div style="margin-bottom: 32px;">
          <span class="eyebrow">TRANSPARENT SCIENTIFIC CITATIONS</span>
          <h2 class="heading-section">Traceable Primary Literature & Reports</h2>
          <p class="body-editorial">
            Every quantitative claim and technical statement on this website is verifiable. Inspect the original multilateral studies, UN assessments, and peer-reviewed journal papers below:
          </p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 24px;">
          ${CITATIONS.map(c => `
            <div class="feature-card-editorial" style="padding: 28px; background: var(--bg-surface); border: 1px solid var(--border-subtle);">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px; margin-bottom: 12px;">
                <div>
                  <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--forest-900); margin-bottom: 4px;">
                    ${c.title}
                  </h4>
                  <div style="font-size: 0.85rem; color: var(--charcoal-600);">
                    <strong>${c.author}</strong> (${c.year}) • <em>${c.publication}</em>
                    ${c.doi ? `• <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--brass-700);">DOI: ${c.doi}</span>` : ''}
                  </div>
                </div>
                <a href="${c.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="flex-shrink: 0;">
                  <span>Access Original Report</span>
                  <span class="arrow-icon">↗</span>
                </a>
              </div>

              <div style="background: var(--bg-subtle); border-radius: var(--radius-sm); padding: 14px 18px; font-size: 0.85rem; color: var(--charcoal-700); line-height: 1.6;">
                <strong style="color: var(--charcoal-900);">Documented Key Findings:</strong> ${c.keyFindings}
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    </div>
  `;

  if (typeof document !== "undefined") setTimeout(() => {
    const input = document.getElementById('glossary-search-input');
    const cards = document.querySelectorAll('.glossary-card');
    if (input && cards) {
      input.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        cards.forEach(card => {
          const content = card.getAttribute('data-term');
          if (content.includes(query)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    }
  }, 0);

  return html;
}
