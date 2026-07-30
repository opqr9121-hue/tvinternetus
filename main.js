document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initZipForm();
  renderProviderCards();
  renderResultsPage();
  renderProviderPage();
  renderStatesIndex();
  renderStatePage();
});

function getAssetPath(relativePath) {
  const inSubdir = /\/pages\//.test(window.location.pathname);
  return inSubdir ? `../${relativePath}` : relativePath;
}

function providerLogoHtml(provider, className = 'provider-logo-img') {
  const src = getAssetPath(provider.logo);
  return `<img src="${src}" alt="${provider.name} logo" class="${className}" loading="lazy">`;
}

function initNav() {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

function initZipForm() {
  const form = document.getElementById('zipForm');
  const input = document.getElementById('zipInput');
  const error = document.getElementById('formError');
  if (!form || !input) return;

  input.addEventListener('input', () => {
    input.value = input.value.replace(/\D/g, '').slice(0, 5);
    if (error) error.hidden = true;
  });

  form.addEventListener('submit', (e) => {
    const zip = input.value.trim();
    if (!/^\d{5}$/.test(zip)) {
      e.preventDefault();
      if (error) error.hidden = false;
      input.focus();
    }
  });
}

function renderProviderCards() {
  const grid = document.getElementById('providersGrid');
  if (!grid) return;

  grid.innerHTML = PROVIDERS.map(p => `
    <article class="provider-card${p.featured ? ' featured' : ''}">
      ${p.featured ? `<span class="provider-badge">${p.featuredLabel}</span>` : ''}
      <div class="provider-header">
        <div class="provider-logo">${providerLogoHtml(p)}</div>
        <div>
          <div class="provider-name">${p.name}</div>
          <span class="provider-tech">${p.tech}</span>
        </div>
      </div>
      <div class="provider-speed">Up to ${p.maxSpeed}</div>
      <p class="provider-desc">${p.description}</p>
      <div class="provider-price">From <strong>${p.priceFrom}</strong>*</div>
      <a href="pages/provider.html?id=${p.id}" class="btn btn-primary">Check ${p.name.split(' ')[0]} plans</a>
    </article>
  `).join('');
}

function renderResultsPage() {
  const resultsGrid = document.getElementById('resultsGrid');
  const zipDisplay = document.getElementById('zipDisplay');
  const resultsCount = document.getElementById('resultsCount');
  const noResults = document.getElementById('noResults');
  if (!resultsGrid) return;

  const params = new URLSearchParams(window.location.search);
  const zip = params.get('zip');

  if (!zip || !/^\d{5}$/.test(zip)) {
    window.location.href = '../index.html';
    return;
  }

  const city = getCityForZip(zip);
  const providers = getProvidersForZip(zip);

  if (zipDisplay) {
    zipDisplay.innerHTML = `📍 ${city} &mdash; ${zip}`;
  }

  if (resultsCount) {
    resultsCount.textContent = `${providers.length} provider${providers.length !== 1 ? 's' : ''} available in your area`;
  }

  if (providers.length === 0) {
    if (noResults) noResults.hidden = false;
    resultsGrid.innerHTML = '';
    return;
  }

  if (noResults) noResults.hidden = true;

  resultsGrid.innerHTML = providers.map((p, i) => `
    <article class="result-card">
      <div class="result-rank">${i + 1}</div>
      <div class="result-info">
        <h3 class="result-title">
          <span class="result-logo">${providerLogoHtml(p, 'result-logo-img')}</span>
          ${p.name}
        </h3>
        <div class="result-meta">
          <span class="${p.techClass}">${p.tech}</span>
          <span>Up to ${p.maxSpeed}</span>
        </div>
        <p class="result-desc">${p.description}</p>
      </div>
      <div class="result-action">
        <div class="result-price">From <strong>${p.priceFrom}</strong></div>
        <a href="provider.html?id=${p.id}&zip=${zip}" class="btn btn-primary">View Plans</a>
      </div>
    </article>
  `).join('');
}

function renderProviderPage() {
  const heroEl = document.getElementById('providerHero');
  const detailMain = document.getElementById('providerDetailMain');
  const detailSidebar = document.getElementById('providerDetailSidebar');
  if (!heroEl) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const zip = params.get('zip');
  const provider = getProviderById(id);

  if (!provider) {
    window.location.href = '../index.html';
    return;
  }

  heroEl.innerHTML = `
    <div class="provider-hero-inner">
      <div class="provider-hero-logo">${providerLogoHtml(provider, 'provider-hero-logo-img')}</div>
      <div>
        <h1>${provider.name}</h1>
        <span class="provider-tech">${provider.tech}</span>
        ${zip ? `<div class="zip-display" style="margin-top:12px">📍 Checking plans for ZIP ${zip}</div>` : ''}
      </div>
    </div>
  `;

  if (detailMain) {
    detailMain.innerHTML = `
      <h2>About ${provider.name}</h2>
      <p>${provider.overview}</p>
      <h2 style="margin-top:32px">Available Plans</h2>
      <ul class="plan-list">
        ${provider.plans.map(plan => `
          <li>
            <span>${plan.name} &mdash; ${plan.speed}</span>
            <strong>${plan.price}</strong>
          </li>
        `).join('')}
      </ul>
      <h2 style="margin-top:32px">Pros &amp; Cons</h2>
      <p><strong>Pros:</strong> ${provider.pros.join(' • ')}</p>
      <p><strong>Cons:</strong> ${provider.cons.join(' • ')}</p>
    `;
  }

  if (detailSidebar) {
    detailSidebar.innerHTML = `
      <h3>Quick Facts</h3>
      <div class="detail-stat"><span>Technology</span><span>${provider.tech}</span></div>
      <div class="detail-stat"><span>Max Speed</span><span>${provider.maxSpeed}</span></div>
      <div class="detail-stat"><span>Starting Price</span><span>${provider.priceFrom}</span></div>
      <a href="${zip ? `results.html?zip=${zip}` : '../index.html'}" class="btn btn-outline" style="width:100%;margin-bottom:12px">
        ${zip ? '← Back to Results' : '← Check Your ZIP'}
      </a>
      <a href="../index.html#zipForm" class="btn btn-primary" style="width:100%">Check Availability</a>
    `;
  }

  document.title = `${provider.name} Plans & Pricing – TV Internet US`;
}

function renderStatesIndex() {
  const grid = document.getElementById('statesGrid');
  if (!grid) return;

  grid.innerHTML = getStatesSorted().map(state => `
    <a href="state.html?state=${state.abbr}" class="state-card">
      <span class="state-abbr">${state.abbr}</span>
      <span class="state-name">${state.name}</span>
      <span class="state-meta">${state.providers.length} providers · ${state.coverage}% coverage</span>
    </a>
  `).join('');
}

function renderStatePage() {
  const heroEl = document.getElementById('stateHero');
  const statsEl = document.getElementById('stateStats');
  const providersEl = document.getElementById('stateProviders');
  const citiesEl = document.getElementById('stateCities');
  if (!heroEl) return;

  const params = new URLSearchParams(window.location.search);
  const abbr = params.get('state');
  const state = getStateByAbbr(abbr);

  if (!state) {
    window.location.href = 'index.html';
    return;
  }

  const providers = getProvidersForState(abbr);
  const sampleZips = getStateSampleZips(abbr);

  heroEl.innerHTML = `
    <h1>Internet Providers in ${state.name}</h1>
    <p>Compare broadband availability, speeds, and providers across ${state.name}.</p>
  `;

  if (statsEl) {
    statsEl.innerHTML = `
      <div class="state-stat-card">
        <strong>${state.coverage}%</strong>
        <span>Broadband coverage</span>
      </div>
      <div class="state-stat-card">
        <strong>${state.avgSpeed} Mbps</strong>
        <span>Avg. download speed</span>
      </div>
      <div class="state-stat-card">
        <strong>${providers.length}</strong>
        <span>Major providers</span>
      </div>
      <div class="state-stat-card">
        <strong>${state.topCity}</strong>
        <span>Largest market</span>
      </div>
    `;
  }

  if (providersEl) {
    providersEl.innerHTML = providers.map((p, i) => `
      <article class="result-card">
        <div class="result-rank">${i + 1}</div>
        <div class="result-info">
          <h3 class="result-title">
            <span class="result-logo">${providerLogoHtml(p, 'result-logo-img')}</span>
            ${p.name}
          </h3>
          <div class="result-meta">
            <span class="${p.techClass}">${p.tech}</span>
            <span>Up to ${p.maxSpeed}</span>
          </div>
          <p class="result-desc">${p.description}</p>
        </div>
        <div class="result-action">
          <div class="result-price">From <strong>${p.priceFrom}</strong></div>
          <a href="../provider.html?id=${p.id}" class="btn btn-primary">View Plans</a>
        </div>
      </article>
    `).join('');
  }

  if (citiesEl) {
    citiesEl.innerHTML = `
      <p>Check availability in popular ${state.name} ZIP codes:</p>
      <div class="zip-chips">
        ${sampleZips.map(zip => `
          <a href="../results.html?zip=${zip}" class="zip-chip">${zip}</a>
        `).join('')}
      </div>
    `;
  }

  document.title = `Internet Providers in ${state.name} – TV Internet US`;
}

function renderStatesHomeSection() {
  const grid = document.getElementById('statesHomeGrid');
  if (!grid) return;

  const featured = ['CA', 'TX', 'NY', 'FL', 'IL', 'PA', 'OH', 'GA'];
  grid.innerHTML = featured.map(abbr => {
    const state = getStateByAbbr(abbr);
    if (!state) return '';
    return `
      <a href="pages/states/state.html?state=${abbr}" class="state-card state-card-sm">
        <span class="state-abbr">${state.abbr}</span>
        <span class="state-name">${state.name}</span>
      </a>
    `;
  }).join('');
}

document.addEventListener('DOMContentLoaded', renderStatesHomeSection);
