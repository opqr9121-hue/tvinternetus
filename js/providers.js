<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Internet Providers Available in Your ZIP Code | TV Internet US</title>

  <meta
    name="description"
    content="See internet and TV providers available in your ZIP code. Compare speeds, pricing, technology, and provider options."
  >

  <link rel="stylesheet" href="../css/style.css">
</head>

<body>

  <header class="site-header">
    <div class="container header-inner">

      <a href="../index.html" class="logo">
        TV Internet US
      </a>

      <nav class="main-nav">
        <a href="../index.html">Home</a>
        <a href="results.html">Internet Providers</a>
        <a href="guide.html">Guide</a>
        <a href="provider.html">Providers</a>
      </nav>

    </div>
  </header>


  <main>

    <section class="page-hero">
      <div class="container">

        <a href="../index.html" class="back-link">
          ← Back to Home
        </a>

        <h1>Internet Providers Available in Your Area</h1>

        <p id="locationText">
          Checking provider availability...
        </p>

      </div>
    </section>


    <section class="results-section">
      <div class="container">

        <div class="results-header">

          <div>
            <h2>Available Providers</h2>

            <p id="resultsSummary">
              Finding providers available at your ZIP code...
            </p>
          </div>

          <div class="zip-change">
            <a href="../index.html">
              Change ZIP Code
            </a>
          </div>

        </div>


        <div id="loadingMessage" class="loading-message">
          <h3>Checking availability...</h3>
          <p>Please wait while we find providers for your area.</p>
        </div>


        <div
          id="resultsGrid"
          class="results-grid"
          style="display: none;"
        ></div>


        <div
          id="noResults"
          class="no-results"
          style="display: none;"
        >

          <h2>No providers found</h2>

          <p>
            We couldn't find provider matches for this ZIP code.
            Try another ZIP code to check availability.
          </p>

          <a href="../index.html" class="btn">
            Check Another ZIP Code
          </a>

        </div>

      </div>
    </section>


    <section class="guide-cta">
      <div class="container">

        <h2>Need Help Choosing a Provider?</h2>

        <p>
          Learn more about internet technologies, speeds, pricing,
          and how to choose the right service for your household.
        </p>

        <a href="guide.html" class="btn">
          Read Full Guide
        </a>

      </div>
    </section>

  </main>


  <footer class="site-footer">
    <div class="container">

      <div class="footer-links">
        <a href="../index.html">Home</a>
        <a href="guide.html">Guide</a>
        <a href="provider.html">Providers</a>
        <a href="results.html">Internet Providers</a>
      </div>

      <p>
        © 2026 TV Internet US. All rights reserved.
      </p>

    </div>
  </footer>


  <script src="../js/providers.js"></script>
  <script src="../js/main.js"></script>


  <script>
    document.addEventListener('DOMContentLoaded', function () {

      const params = new URLSearchParams(window.location.search);
      const zip = params.get('zip');

      const loadingMessage = document.getElementById('loadingMessage');
      const resultsGrid = document.getElementById('resultsGrid');
      const noResults = document.getElementById('noResults');
      const locationText = document.getElementById('locationText');
      const resultsSummary = document.getElementById('resultsSummary');


      if (!zip) {

        loadingMessage.style.display = 'none';
        noResults.style.display = 'block';

        locationText.textContent = 'No ZIP code was provided.';

        resultsSummary.textContent =
          'Please return to the home page and enter your ZIP code.';

        return;
      }


      locationText.textContent =
        'Results for ZIP code ' + zip;


      let providers = [];


      try {

        if (typeof getProvidersForZip === 'function') {

          providers = getProvidersForZip(zip);

        } else if (typeof PROVIDERS !== 'undefined') {

          providers = PROVIDERS;

        }

      } catch (error) {

        console.error('Error loading providers:', error);

        providers = [];

      }


      loadingMessage.style.display = 'none';


      if (!providers || providers.length === 0) {

        resultsGrid.style.display = 'none';

        noResults.style.display = 'block';

        resultsSummary.textContent =
          'No providers were found for ZIP code ' + zip;

        return;
      }


      noResults.style.display = 'none';

      resultsGrid.style.display = 'grid';


      resultsSummary.textContent =
        providers.length +
        ' provider' +
        (providers.length === 1 ? '' : 's') +
        ' found for ZIP code ' +
        zip;


      providers.forEach(function (provider) {

        const card = document.createElement('article');

        card.className = 'provider-card';


        let logoPath = '';

        if (provider.logo) {

          logoPath = provider.logo;

          if (logoPath.startsWith('images/')) {

            logoPath = '../' + logoPath;

          }

        }


        let logoHTML = '';

        if (logoPath) {

          logoHTML = `
            <div class="provider-logo">
              <img
                src="${logoPath}"
                alt="${provider.name} logo"
                onerror="this.style.display='none'"
              >
            </div>
          `;

        }


        let featuredHTML = '';

        if (provider.featured) {

          featuredHTML = `
            <span class="featured-badge">
              ${provider.featuredLabel || 'Featured'}
            </span>
          `;

        }


        card.innerHTML = `

          ${featuredHTML}

          ${logoHTML}

          <div class="provider-card-content">

            <h3>
              ${provider.name || 'Internet Provider'}
            </h3>

            <div class="provider-tech">
              ${provider.tech || ''}
            </div>

            <p>
              ${provider.description || ''}
            </p>

            <div class="provider-info">

              <div>
                <strong>Max Speed</strong>
                <span>
                  ${provider.maxSpeed || 'Varies'}
                </span>
              </div>

              <div>
                <strong>Starting Price</strong>
                <span>
                  ${provider.priceFrom || 'Check availability'}
                </span>
              </div>

            </div>

            <div class="provider-actions">

              <a
                href="provider.html?id=${encodeURIComponent(provider.id)}"
                class="btn"
              >
                View Provider
              </a>

            </div>

          </div>

        `;


        resultsGrid.appendChild(card);

      });

    });
  </script>

</body>
</html>
