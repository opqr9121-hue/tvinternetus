<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Internet Providers | TV Internet US</title>
  <link rel="stylesheet" href="../css/style.css">
</head>

<body>

<header class="site-header">
  <div class="container header-inner">
    <a href="../index.html" class="logo">TV Internet US</a>

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
      <a href="../index.html" class="back-link">← Back to Home</a>
      <h1>Internet Providers Available in Your Area</h1>
      <p id="locationText">Checking your ZIP code...</p>
    </div>
  </section>

  <section class="results-section">
    <div class="container">

      <h2>Available Providers</h2>

      <p id="resultsSummary">
        Checking provider availability...
      </p>

      <div id="resultsGrid" class="results-grid"></div>

      <div id="noResults" style="display:none;">
        <h2>No Providers Found</h2>
        <p>No providers were found for this ZIP code.</p>
        <a href="../index.html" class="btn">Check Another ZIP Code</a>
      </div>

    </div>
  </section>

</main>

<footer class="site-footer">
  <div class="container">
    <p>© 2026 TV Internet US. All rights reserved.</p>
  </div>
</footer>

<script src="../js/providers.js"></script>

<script>
document.addEventListener("DOMContentLoaded", function () {

  const zip = new URLSearchParams(window.location.search).get("zip");

  const locationText = document.getElementById("locationText");
  const resultsSummary = document.getElementById("resultsSummary");
  const resultsGrid = document.getElementById("resultsGrid");
  const noResults = document.getElementById("noResults");

  if (!zip) {
    locationText.textContent = "No ZIP code provided.";
    resultsSummary.textContent = "Please return to the home page and enter your ZIP code.";
    noResults.style.display = "block";
    return;
  }

  locationText.textContent = "Results for ZIP code " + zip;

  let providers = [];

  try {
    if (typeof getProvidersForZip === "function") {
      providers = getProvidersForZip(zip);
    }
  } catch (error) {
    console.error("Provider loading error:", error);
  }

  if (!providers || providers.length === 0) {
    resultsSummary.textContent =
      "No providers found for ZIP code " + zip + ".";

    noResults.style.display = "block";
    return;
  }

  resultsSummary.textContent =
    providers.length +
    " provider" +
    (providers.length === 1 ? "" : "s") +
    " found for ZIP code " +
    zip;

  providers.forEach(function (provider) {

    const card = document.createElement("article");
    card.className = "provider-card";

    let logoPath = provider.logo || "";

    if (logoPath.startsWith("images/logos/")) {
      logoPath = "../images/" +
        logoPath.replace("images/logos/", "");
    } else if (logoPath.startsWith("images/")) {
      logoPath = "../" + logoPath;
    }

    card.innerHTML = `
      <div class="provider-logo">
        ${
          logoPath
          ? `<img src="${logoPath}" alt="${provider.name} logo" style="max-width:180px;">`
          : ""
        }
      </div>

      <h3>${provider.name || "Internet Provider"}</h3>

      <p>${provider.description || ""}</p>

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

      <a
        href="provider.html?id=${encodeURIComponent(provider.id)}"
        class="btn"
      >
        View Provider
      </a>
    `;

    resultsGrid.appendChild(card);
  });

});
</script>

</body>
</html>
