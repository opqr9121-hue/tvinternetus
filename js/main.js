document.addEventListener("DOMContentLoaded", function () {

  // Get provider ID from the URL
  const params = new URLSearchParams(window.location.search);
  const providerId = params.get("id");

  // Find provider information
  const provider = getProviderById(providerId);

  // Find the empty sections in provider.html
  const hero = document.getElementById("providerHero");
  const detailMain = document.getElementById("providerDetailMain");
  const detailSidebar = document.getElementById("providerDetailSidebar");

  // If provider was not found
  if (!provider) {
    hero.innerHTML = `
      <div class="container">
        <h1>Provider Not Found</h1>
        <p>We could not find information for this provider.</p>
        <a href="results.html" class="btn">Back to Providers</a>
      </div>
    `;

    detailMain.innerHTML = `
      <div class="container">
        <p>Please return to the provider results and select a provider.</p>
      </div>
    `;

    return;
  }

  // Display provider hero
  hero.innerHTML = `
    <div class="container">

      <a href="results.html" class="back-link">
        ← Back to Providers
      </a>

      <h1>${provider.name}</h1>

      <p>${provider.overview || provider.description || ""}</p>

    </div>
  `;


  // Create plans HTML
  let plansHTML = "";

  if (provider.plans && provider.plans.length > 0) {

    plansHTML = `
      <h2>Available Plans</h2>

      <div class="plans-grid">

        ${provider.plans.map(function (plan) {

          return `
            <div class="plan-card">

              <h3>${plan.name}</h3>

              <p>
                <strong>Speed:</strong>
                ${plan.speed}
              </p>

              <p>
                <strong>Price:</strong>
                ${plan.price}
              </p>

              <a
                href="#"
                class="btn"
              >
                Check Availability
              </a>

            </div>
          `;

        }).join("")}

      </div>
    `;

  }


  // Display main provider information
  detailMain.innerHTML = `

    <div class="provider-information">

      <h2>About ${provider.name}</h2>

      <p>
        ${provider.overview || provider.description || ""}
      </p>

      ${plansHTML}

    </div>

  `;


  // Pros
  let prosHTML = "";

  if (provider.pros && provider.pros.length > 0) {

    prosHTML = `
      <h3>Pros</h3>

      <ul>
        ${provider.pros.map(function (item) {
          return `<li>${item}</li>`;
        }).join("")}
      </ul>
    `;

  }


  // Cons
  let consHTML = "";

  if (provider.cons && provider.cons.length > 0) {

    consHTML = `
      <h3>Cons</h3>

      <ul>
        ${provider.cons.map(function (item) {
          return `<li>${item}</li>`;
        }).join("")}
      </ul>
    `;

  }


  // Display sidebar
  detailSidebar.innerHTML = `

    <div class="provider-sidebar-card">

      <h2>${provider.name}</h2>

      <p>
        <strong>Technology:</strong>
        ${provider.tech || "N/A"}
      </p>

      <p>
        <strong>Maximum Speed:</strong>
        ${provider.maxSpeed || "N/A"}
      </p>

      <p>
        <strong>Starting Price:</strong>
        ${provider.priceFrom || "N/A"}
      </p>

      ${prosHTML}

      ${consHTML}

    </div>

  `;

});
