document.addEventListener("DOMContentLoaded", function () {

  /*
  ============================================
  AFFILIATE LINKS
  ============================================
  */

  const AFFILIATE_LINKS = {

    xfinity:
      "https://yazing.com/deals/xfinity/SufyanMughal989",

    att:
      "https://yazing.com/deals/att-internet/SufyanMughal989",

    tmobile:
      "https://yazing.com/deals/t-mobile/SufyanMughal989",

    verizon:
      "https://yazing.com/deals/verizonwireless/SufyanMughal989",

    frontier:
      "https://yazing.com/deals/frontiercommunications/SufyanMughal989",

    directv:
      "https://yazing.com/deals/directv/SufyanMughal989",

    optimum:
      "https://yazing.com/deals/optimum/SufyanMughal989"

  };


  /*
  ============================================
  OFFICIAL PROVIDER WEBSITES
  ============================================
  */

  const OFFICIAL_LINKS = {

    xfinity:
      "https://www.xfinity.com/learn/internet-service",

    att:
      "https://www.att.com/internet/fiber/",

    tmobile:
      "https://www.t-mobile.com/home-internet",

    verizon:
      "https://www.verizon.com/home/internet/",

    frontier:
      "https://frontier.com/",

    directv:
      "https://www.directv.com/",

    optimum:
      "https://www.optimum.com/internet"

  };


  /*
  ============================================
  GET PROVIDER ID FROM URL
  Example:
  provider.html?id=xfinity
  ============================================
  */

  const params = new URLSearchParams(window.location.search);
  const providerId = params.get("id");


  /*
  ============================================
  FIND PAGE ELEMENTS
  ============================================
  */

  const hero =
    document.getElementById("providerHero");

  const detailMain =
    document.getElementById("providerDetailMain");

  const detailSidebar =
    document.getElementById("providerDetailSidebar");


  /*
  ============================================
  CHECK PAGE ELEMENTS
  ============================================
  */

  if (!hero || !detailMain || !detailSidebar) {

    console.error(
      "Provider page elements were not found."
    );

    return;
  }


  /*
  ============================================
  NO PROVIDER ID
  ============================================
  */

  if (!providerId) {

    hero.innerHTML = `

      <div class="container">

        <a
          href="results.html"
          class="back-link"
        >
          ← Back to Providers
        </a>

        <h1>Provider Not Found</h1>

        <p>
          No provider was selected.
        </p>

      </div>

    `;

    detailMain.innerHTML = "";
    detailSidebar.innerHTML = "";

    return;
  }


  /*
  ============================================
  FIND PROVIDER DATA
  ============================================
  */

  let provider = null;


  if (
    typeof window.getProviderById ===
    "function"
  ) {

    provider =
      window.getProviderById(providerId);

  }


  /*
  ============================================
  FALLBACK PROVIDER LOOKUP
  ============================================
  */

  if (
    !provider &&
    window.PROVIDERS
  ) {

    const basicProvider =
      window.PROVIDERS.find(function (item) {

        return item.id === providerId;

      });


    const providerDetails =

      window.PROVIDER_DETAILS &&
      window.PROVIDER_DETAILS[providerId]

        ? window.PROVIDER_DETAILS[providerId]

        : {};


    if (basicProvider) {

      provider = {

        ...basicProvider,

        ...providerDetails

      };

    }

  }


  /*
  ============================================
  PROVIDER NOT FOUND
  ============================================
  */

  if (!provider) {

    hero.innerHTML = `

      <div class="container">

        <a
          href="results.html"
          class="back-link"
        >
          ← Back to Providers
        </a>

        <h1>Provider Not Found</h1>

        <p>
          We could not find information for:
          <strong>${providerId}</strong>
        </p>

      </div>

    `;

    detailMain.innerHTML = "";
    detailSidebar.innerHTML = "";

    return;
  }


  /*
  ============================================
  GET LINKS
  ============================================
  */

  const affiliateLink =
    AFFILIATE_LINKS[provider.id] || null;


  const officialLink =
    OFFICIAL_LINKS[provider.id] || "#";


  /*
  ============================================
  PROVIDER LOGO
  ============================================
  */

  let logoPath =
    provider.logo || "";


  if (
    logoPath.startsWith("images/")
  ) {

    logoPath =
      "../" + logoPath;

  }


  /*
  ============================================
  PROVIDER HERO
  ============================================
  */

  hero.innerHTML = `

    <div class="container">

      <a
        href="results.html"
        class="back-link"
      >
        ← Back to Providers
      </a>


      <div class="provider-hero-content">


        ${
          logoPath

            ? `

              <div
                class="provider-hero-logo"
              >

                <img
                  src="${logoPath}"
                  alt="${provider.name} logo"
                  style="max-width:220px;"
                >

              </div>

            `

            : ""
        }


        <h1>
          ${provider.name}
        </h1>


        <p>
          ${
            provider.overview ||
            provider.description ||
            ""
          }
        </p>


        ${
          affiliateLink

            ? `

              <a
                href="${affiliateLink}"
                class="btn"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
              >
                Check Availability
              </a>

            `

            : `

              <a
                href="${officialLink}"
                class="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Availability
              </a>

            `
        }


        ${
          affiliateLink

            ? `

              <p
                style="
                  font-size:0.85rem;
                  margin-top:10px;
                "
              >
                We may earn a commission
                if you purchase through
                this link.
              </p>

            `

            : ""
        }


      </div>

    </div>

  `;


  /*
  ============================================
  PROVIDER PLANS
  ============================================
  */

  let plansHTML = "";


  if (
    provider.plans &&
    provider.plans.length > 0
  ) {

    plansHTML = `

      <section
        class="provider-plans"
      >

        <h2>
          ${provider.name}
          Internet Plans
        </h2>


        <div
          class="plans-grid"
        >


          ${

            provider.plans.map(

              function (plan) {

                return `

                  <article
                    class="plan-card"
                  >

                    <h3>
                      ${plan.name}
                    </h3>


                    <p>

                      <strong>
                        Speed:
                      </strong>

                      ${plan.speed}

                    </p>


                    <p>

                      <strong>
                        Price:
                      </strong>

                      ${plan.price}

                    </p>


                    ${
                      affiliateLink

                        ? `

                          <a
                            href="${affiliateLink}"
                            class="btn"
                            target="_blank"
                            rel="nofollow sponsored noopener noreferrer"
                          >
                            Check Availability
                          </a>

                        `

                        : `

                          <a
                            href="${officialLink}"
                            class="btn"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Check Availability
                          </a>

                        `
                    }


                  </article>

                `;

              }

            ).join("")

          }


        </div>

      </section>

    `;

  }


  /*
  ============================================
  MAIN PROVIDER INFORMATION
  ============================================
  */

  detailMain.innerHTML = `

    <section
      class="provider-information"
    >

      <h2>
        About ${provider.name}
      </h2>


      <p>
        ${
          provider.overview ||
          provider.description ||
          ""
        }
      </p>


      ${
        affiliateLink

          ? `

            <p>

              <a
                href="${affiliateLink}"
                class="btn"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
              >
                See ${provider.name} Deals
              </a>

            </p>

          `

          : ""
      }


    </section>


    ${plansHTML}

  `;


  /*
  ============================================
  PROS
  ============================================
  */

  let prosHTML = "";


  if (
    provider.pros &&
    provider.pros.length > 0
  ) {

    prosHTML = `

      <div
        class="provider-pros"
      >

        <h3>
          Pros
        </h3>


        <ul>

          ${

            provider.pros.map(

              function (item) {

                return `
                  <li>
                    ${item}
                  </li>
                `;

              }

            ).join("")

          }

        </ul>

      </div>

    `;

  }


  /*
  ============================================
  CONS
  ============================================
  */

  let consHTML = "";


  if (
    provider.cons &&
    provider.cons.length > 0
  ) {

    consHTML = `

      <div
        class="provider-cons"
      >

        <h3>
          Cons
        </h3>


        <ul>

          ${

            provider.cons.map(

              function (item) {

                return `
                  <li>
                    ${item}
                  </li>
                `;

              }

            ).join("")

          }

        </ul>

      </div>

    `;

  }


  /*
  ============================================
  SIDEBAR
  ============================================
  */

  detailSidebar.innerHTML = `

    <aside
      class="provider-sidebar-card"
    >

      <h2>
        ${provider.name}
      </h2>


      <p>

        <strong>
          Technology:
        </strong>

        ${
          provider.tech ||
          "N/A"
        }

      </p>


      <p>

        <strong>
          Maximum Speed:
        </strong>

        ${
          provider.maxSpeed ||
          "N/A"
        }

      </p>


      <p>

        <strong>
          Starting Price:
        </strong>

        ${
          provider.priceFrom ||
          "N/A"
        }

      </p>


      ${
        affiliateLink

          ? `

            <a
              href="${affiliateLink}"
              class="btn"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
            >
              Get ${provider.name} Deal
            </a>

          `

          : `

            <a
              href="${officialLink}"
              class="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit ${provider.name}
            </a>

          `
      }


      ${
        affiliateLink

          ? `

            <p
              style="
                font-size:0.8rem;
                margin-top:10px;
              "
            >
              Affiliate link:
              We may earn a commission
              from qualifying purchases.
            </p>

          `

          : ""
      }


      ${prosHTML}


      ${consHTML}


    </aside>

  `;

});
