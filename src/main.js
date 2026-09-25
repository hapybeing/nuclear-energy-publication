// Main Application Entrypoint & Client Router

import { createHeader } from './components/Header.js';
import { createFooter } from './components/Footer.js';
import { renderHomePage } from './pages/HomePage.js';
import { renderBenefitsPage } from './pages/BenefitsPage.js';
import { renderHowItWorksPage } from './pages/HowItWorksPage.js';
import { renderSafetyPage } from './pages/SafetyPage.js';
import { renderEnvironmentPage } from './pages/EnvironmentPage.js';
import { renderTechnologyPage } from './pages/TechnologyPage.js';
import { renderFuturePage } from './pages/FuturePage.js';
import { renderLearnPage } from './pages/LearnPage.js';

const routes = {
  '#/': {
    title: 'Nuclear Energy | Reliable Energy for a Brighter, Healthier Planet',
    render: renderHomePage
  },
  '#/benefits': {
    title: 'Documented Benefits | Nuclear Energy',
    render: renderBenefitsPage
  },
  '#/how-it-works': {
    title: 'How It Works: Atoms to Electricity | Nuclear Energy',
    render: renderHowItWorksPage
  },
  '#/safety': {
    title: 'Safety & Defense in Depth | Nuclear Energy',
    render: renderSafetyPage
  },
  '#/environment': {
    title: 'Environmental Implications & Lifecycle Ecology | Nuclear Energy',
    render: renderEnvironmentPage
  },
  '#/technology': {
    title: 'Reactor Technologies & Advanced Systems | Nuclear Energy',
    render: renderTechnologyPage
  },
  '#/future': {
    title: 'The Nuclear Frontier: Industrial Heat, Hydrogen & Water | Nuclear Energy',
    render: renderFuturePage
  },
  '#/learn': {
    title: 'Learning Hub, Glossary & Traceable Citations | Nuclear Energy',
    render: renderLearnPage
  }
};

function navigate() {
  const hash = window.location.hash || '#/';
  // Normalize path
  const matchedRoute = routes[hash] || routes['#/'];

  document.title = matchedRoute.title;

  const app = document.getElementById('app');
  if (!app) return;

  // Render Layout
  app.innerHTML = `
    ${createHeader(hash)}
    <main id="main-content" role="main">
      ${matchedRoute.render()}
    </main>
    ${createFooter()}
  `;

  // Bind Mobile Drawer
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const closeBtn = document.getElementById('mobile-close-btn');
  const drawer = document.getElementById('mobile-drawer');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
      if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
    });
  }

  // Close drawer on link click
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (drawer) drawer.classList.remove('open');
      if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Scroll to top or anchor
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('hashchange', navigate);
window.addEventListener('DOMContentLoaded', navigate);

// Run immediately if DOM already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  navigate();
}
