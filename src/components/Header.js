// Header Navigation Component

export function createHeader(currentPath = '#/') {
  const navItems = [
    { label: 'Home', path: '#/' },
    { label: 'Benefits', path: '#/benefits' },
    { label: 'How It Works', path: '#/how-it-works' },
    { label: 'Safety', path: '#/safety' },
    { label: 'Environment', path: '#/environment' },
    { label: 'Technology', path: '#/technology' },
    { label: 'Future', path: '#/future' },
    { label: 'Learn', path: '#/learn' }
  ];

  return `
    <header class="site-header" role="banner">
      <div class="container">
        <div class="header-inner">
          <!-- Logo: Atomic Orbital Symbol + Editorial Wordmark -->
          <a href="#/" class="site-logo" aria-label="Nuclear Energy Home">
            <svg class="logo-symbol" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round">
              <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(30 50 50)" stroke="var(--forest-700)"/>
              <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(90 50 50)" stroke="var(--forest-800)"/>
              <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(150 50 50)" stroke="var(--brass-600)"/>
              <circle cx="50" cy="50" r="7.5" fill="var(--forest-800)"/>
            </svg>
            <div class="logo-text-group">
              <span class="logo-title">NUCLEAR ENERGY</span>
              <span class="logo-subtitle">CLEANER PLANET. BRIGHTER TOMORROW.</span>
            </div>
          </a>

          <!-- Desktop Navigation Menu -->
          <nav class="nav-desktop" aria-label="Primary Navigation">
            ${navItems.map(item => `
              <a href="${item.path}" class="nav-link ${currentPath === item.path ? 'active' : ''}">
                ${item.label}
              </a>
            `).join('')}
          </nav>

          <!-- Primary CTA Button matching reference -->
          <div style="display: flex; align-items: center; gap: 14px;">
            <a href="#/learn" class="btn btn-primary btn-sm" style="display: inline-flex;">
              <span>Explore</span>
              <span class="arrow-icon">→</span>
            </a>

            <!-- Mobile Hamburger Button -->
            <button id="mobile-toggle-btn" class="mobile-menu-btn" aria-label="Toggle Navigation Menu" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobile-drawer" class="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
        <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 16px; border-bottom: 1px solid var(--border-subtle);">
          <span style="font-family: var(--font-sans); font-size: 0.8rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--brass-700);">Navigation</span>
          <button id="mobile-close-btn" style="font-size: 1.4rem; padding: 4px; color: var(--charcoal-900);">✕</button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${navItems.map(item => `
            <a href="${item.path}" class="mobile-nav-link ${currentPath === item.path ? 'active' : ''}">
              ${item.label}
            </a>
          `).join('')}
        </div>
        <div style="margin-top: auto; padding-top: 24px;">
          <a href="#/learn" class="btn btn-primary" style="width: 100%; text-align: center;">
            <span>Explore Scientific Library</span>
            <span class="arrow-icon">→</span>
          </a>
        </div>
      </div>
    </header>
  `;
}
