document.addEventListener("DOMContentLoaded", function () {

  const params = new URLSearchParams(window.location.search);
  const providerId = params.get("id");

  const hero = document.getElementById("providerHero");
  const detailMain = document.getElementById("providerDetailMain");
  const detailSidebar = document.getElementById("providerDetailSidebar");

  // Check that the provider ID exists
  if (!providerId) {
    hero.innerHTML = `
      <div class="container">
        <h1>Provider Not Found</h1>
        <p>No provider ID was provided in the URL.</p>
      </div>
    `;
    return;
  }

  // Find provider directly from PROVIDERS
  const provider = window.PROVIDERS
    ? window.PROVIDERS.find(function (item) {
        return item.id === providerId;
      })
    : null;

  // Find detailed provider information
  const details = window.PROVIDER_DETAILS
    ? window.PROVIDER_DETAILS[providerId]
    : null;

  // If provider cannot be found
  if (!provider) {

    hero.innerHTML = `
      <div class="container">
        <h1>Provider Not Found</h1>
        <p>Provider ID: ${providerId}</p>
        <a href="results.html" class="btn">
          Back to Providers
        </a>
      </div>
    `;

    detailMain.innerHTML = "";
    detailSidebar.innerHTML = "";

    return;
  }

  // Combine provider and details
  const data = {
    ...provider,
    ...(details || {})
  };


  // PROVIDER HERO
  hero.innerHTML = `
    <div class="container">

      <a href="results.html" class="back-link">
        ← Back to Providers
      </a>

      <h1>${data.name}</h1>

      <p>
        ${data.overview || data.description || ""}
      </p>

    </div>
  `;


  // PLANS
  let plansHTML = "";

  if (data.plans && data.plans.length) {

    plansHTML = `
      <section class="provider-plans">

        <h2>${data.name} Internet Plans</h2>

        <div class="plans-grid">

          ${data.plans.map(function (plan) {

            return `
              <article class="plan-card">

                <h3>${plan.name}</h3>

                <p>
                  <strong>Speed:</strong>
                  ${plan.speed}
                </p>

                <p>
                  <strong>Price:</strong>
                  ${plan.price}
                </p>

                <a href="#" class="btn">
                  Check Availability
                </a>

              </article>
            `;

          }).join("")}

        </div>

      </section>
    `;

  }


  // MAIN CONTENT
  detailMain.innerHTML = `

    <section>

      <h2>About ${data.name}</h2>

      <p>
        ${data.overview || data.description || ""}
      </p>

    </section>

    ${plansHTML}

  `;


  // PROS
  let prosHTML = "";

  if (data.pros && data.pros.length) {

    prosHTML = `
      <h3>Pros</h3>

      <ul>
        ${data.pros.map(function (item) {
          return `<li>${item}</li>`;
        }).join("")}
      </ul>
    `;

  }


  // CONS
  let consHTML = "";

  if (data.cons && data.cons.length) {

    consHTML = `
      <h3>Cons</h3>

      <ul>
        ${data.cons.map(function (item) {
          return `<li>${item}</li>`;
        }).join("")}
      </ul>
    `;

  }


  // SIDEBAR
  detailSidebar.innerHTML = `

    <aside class="provider-sidebar-card">

      <h2>${data.name}</h2>

      <p>
        <strong>Technology:</strong>
        ${data.tech || "N/A"}
      </p>

      <p>
        <strong>Maximum Speed:</strong>
        ${data.maxSpeed || "N/A"}
      </p>

      <p>
        <strong>Starting Price:</strong>
        ${data.priceFrom || "N/A"}
      </p>

      ${prosHTML}

      ${consHTML}

    </aside>

  `;

});
