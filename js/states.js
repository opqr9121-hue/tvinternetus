// states.js
// State-level broadband data used by the homepage preview grid
// and the full States page (pages/states/index.html).
//
// DATA SOURCE: "coverage" = fiber-availability percentage, and
// "providerCount" = major-provider count, both sourced from FCC
// Broadband Data Collection (Q1 2026 filing) via InternetProviders.ai's
// 2026 state broadband report. These are real, cited figures.
//
// NOTE: The "providers" list per state is an estimate (dominant provider
// confirmed by source, remaining providers inferred from typical regional
// coverage) since a full verified ISP roster per state wasn't available.
// Replace with your own Broadband Map API lookups over time if you want
// per-state provider lists to be fully verified.

const STATES_DATA = [
  {
    "name": "Alabama",
    "abbr": "AL",
    "topCity": "Birmingham",
    "coverage": 42,
    "providerCount": 3,
    "providers": [
      "att",
      "tmobile",
      "spectrum"
    ]
  },
  {
    "name": "Alaska",
    "abbr": "AK",
    "topCity": "Anchorage",
    "coverage": 28,
    "providerCount": 4,
    "providers": [
      "spectrum",
      "tmobile",
      "att",
      "xfinity"
    ]
  },
  {
    "name": "Arizona",
    "abbr": "AZ",
    "topCity": "Phoenix",
    "coverage": 55,
    "providerCount": 3,
    "providers": [
      "centurylink",
      "tmobile",
      "spectrum"
    ]
  },
  {
    "name": "Arkansas",
    "abbr": "AR",
    "topCity": "Little Rock",
    "coverage": 38,
    "providerCount": 5,
    "providers": [
      "att",
      "tmobile",
      "spectrum",
      "xfinity"
    ]
  },
  {
    "name": "California",
    "abbr": "CA",
    "topCity": "Los Angeles",
    "coverage": 62,
    "providerCount": 7,
    "providers": [
      "xfinity",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "Colorado",
    "abbr": "CO",
    "topCity": "Denver",
    "coverage": 58,
    "providerCount": 8,
    "providers": [
      "xfinity",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "Connecticut",
    "abbr": "CT",
    "topCity": "Bridgeport",
    "coverage": 61,
    "providerCount": 8,
    "providers": [
      "xfinity",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "Delaware",
    "abbr": "DE",
    "topCity": "Wilmington",
    "coverage": 52,
    "providerCount": 6,
    "providers": [
      "xfinity",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "District of Columbia",
    "abbr": "DC",
    "topCity": "Washington",
    "coverage": 78,
    "providerCount": 8,
    "providers": [
      "xfinity",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "Florida",
    "abbr": "FL",
    "topCity": "Miami",
    "coverage": 59,
    "providerCount": 6,
    "providers": [
      "xfinity",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "Georgia",
    "abbr": "GA",
    "topCity": "Atlanta",
    "coverage": 51,
    "providerCount": 7,
    "providers": [
      "att",
      "tmobile",
      "spectrum",
      "xfinity"
    ]
  },
  {
    "name": "Hawaii",
    "abbr": "HI",
    "topCity": "Honolulu",
    "coverage": 45,
    "providerCount": 5,
    "providers": [
      "spectrum",
      "tmobile",
      "att",
      "xfinity"
    ]
  },
  {
    "name": "Idaho",
    "abbr": "ID",
    "topCity": "Boise",
    "coverage": 35,
    "providerCount": 5,
    "providers": [
      "centurylink",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "Illinois",
    "abbr": "IL",
    "topCity": "Chicago",
    "coverage": 54,
    "providerCount": 8,
    "providers": [
      "xfinity",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "Indiana",
    "abbr": "IN",
    "topCity": "Indianapolis",
    "coverage": 47,
    "providerCount": 7,
    "providers": [
      "xfinity",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "Iowa",
    "abbr": "IA",
    "topCity": "Des Moines",
    "coverage": 40,
    "providerCount": 5,
    "providers": [
      "centurylink",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "Kansas",
    "abbr": "KS",
    "topCity": "Wichita",
    "coverage": 44,
    "providerCount": 2,
    "providers": [
      "att",
      "tmobile"
    ]
  },
  {
    "name": "Kentucky",
    "abbr": "KY",
    "topCity": "Louisville",
    "coverage": 39,
    "providerCount": 3,
    "providers": [
      "spectrum",
      "tmobile",
      "att"
    ]
  },
  {
    "name": "Louisiana",
    "abbr": "LA",
    "topCity": "New Orleans",
    "coverage": 43,
    "providerCount": 4,
    "providers": [
      "att",
      "tmobile",
      "spectrum",
      "xfinity"
    ]
  },
  {
    "name": "Maine",
    "abbr": "ME",
    "topCity": "Portland",
    "coverage": 36,
    "providerCount": 4,
    "providers": [
      "spectrum",
      "tmobile",
      "att",
      "xfinity"
    ]
  },
  {
    "name": "Maryland",
    "abbr": "MD",
    "topCity": "Baltimore",
    "coverage": 60,
    "providerCount": 6,
    "providers": [
      "xfinity",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "Massachusetts",
    "abbr": "MA",
    "topCity": "Boston",
    "coverage": 63,
    "providerCount": 3,
    "providers": [
      "xfinity",
      "tmobile",
      "spectrum"
    ]
  },
  {
    "name": "Michigan",
    "abbr": "MI",
    "topCity": "Detroit",
    "coverage": 48,
    "providerCount": 6,
    "providers": [
      "xfinity",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "Minnesota",
    "abbr": "MN",
    "topCity": "Minneapolis",
    "coverage": 51,
    "providerCount": 5,
    "providers": [
      "centurylink",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "Mississippi",
    "abbr": "MS",
    "topCity": "Jackson",
    "coverage": 33,
    "providerCount": 8,
    "providers": [
      "att",
      "tmobile",
      "spectrum",
      "xfinity"
    ]
  },
  {
    "name": "Missouri",
    "abbr": "MO",
    "topCity": "Kansas City",
    "coverage": 46,
    "providerCount": 6,
    "providers": [
      "spectrum",
      "tmobile",
      "att",
      "xfinity"
    ]
  },
  {
    "name": "Montana",
    "abbr": "MT",
    "topCity": "Billings",
    "coverage": 25,
    "providerCount": 6,
    "providers": [
      "centurylink",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "Nebraska",
    "abbr": "NE",
    "topCity": "Omaha",
    "coverage": 42,
    "providerCount": 4,
    "providers": [
      "centurylink",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "Nevada",
    "abbr": "NV",
    "topCity": "Las Vegas",
    "coverage": 52,
    "providerCount": 5,
    "providers": [
      "centurylink",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "New Hampshire",
    "abbr": "NH",
    "topCity": "Manchester",
    "coverage": 41,
    "providerCount": 6,
    "providers": [
      "xfinity",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "New Jersey",
    "abbr": "NJ",
    "topCity": "Newark",
    "coverage": 66,
    "providerCount": 4,
    "providers": [
      "verizon",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "New Mexico",
    "abbr": "NM",
    "topCity": "Albuquerque",
    "coverage": 30,
    "providerCount": 6,
    "providers": [
      "centurylink",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "New York",
    "abbr": "NY",
    "topCity": "New York City",
    "coverage": 64,
    "providerCount": 5,
    "providers": [
      "verizon",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "North Carolina",
    "abbr": "NC",
    "topCity": "Charlotte",
    "coverage": 53,
    "providerCount": 8,
    "providers": [
      "spectrum",
      "tmobile",
      "att",
      "xfinity"
    ]
  },
  {
    "name": "North Dakota",
    "abbr": "ND",
    "topCity": "Fargo",
    "coverage": 38,
    "providerCount": 5,
    "providers": [
      "centurylink",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "Ohio",
    "abbr": "OH",
    "topCity": "Columbus",
    "coverage": 55,
    "providerCount": 11,
    "providers": [
      "spectrum",
      "tmobile",
      "att",
      "xfinity"
    ]
  },
  {
    "name": "Oklahoma",
    "abbr": "OK",
    "topCity": "Oklahoma City",
    "coverage": 40,
    "providerCount": 4,
    "providers": [
      "att",
      "tmobile",
      "spectrum",
      "xfinity"
    ]
  },
  {
    "name": "Oregon",
    "abbr": "OR",
    "topCity": "Portland",
    "coverage": 50,
    "providerCount": 8,
    "providers": [
      "xfinity",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "Pennsylvania",
    "abbr": "PA",
    "topCity": "Philadelphia",
    "coverage": 53,
    "providerCount": 7,
    "providers": [
      "xfinity",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "Rhode Island",
    "abbr": "RI",
    "topCity": "Providence",
    "coverage": 65,
    "providerCount": 7,
    "providers": [
      "centurylink",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "South Carolina",
    "abbr": "SC",
    "topCity": "Charleston",
    "coverage": 46,
    "providerCount": 4,
    "providers": [
      "spectrum",
      "tmobile",
      "att",
      "xfinity"
    ]
  },
  {
    "name": "South Dakota",
    "abbr": "SD",
    "topCity": "Sioux Falls",
    "coverage": 34,
    "providerCount": 3,
    "providers": [
      "centurylink",
      "tmobile",
      "spectrum"
    ]
  },
  {
    "name": "Tennessee",
    "abbr": "TN",
    "topCity": "Nashville",
    "coverage": 49,
    "providerCount": 6,
    "providers": [
      "att",
      "tmobile",
      "spectrum",
      "xfinity"
    ]
  },
  {
    "name": "Texas",
    "abbr": "TX",
    "topCity": "Houston",
    "coverage": 57,
    "providerCount": 6,
    "providers": [
      "att",
      "tmobile",
      "spectrum",
      "xfinity"
    ]
  },
  {
    "name": "Utah",
    "abbr": "UT",
    "topCity": "Salt Lake City",
    "coverage": 68,
    "providerCount": 7,
    "providers": [
      "xfinity",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "Vermont",
    "abbr": "VT",
    "topCity": "Burlington",
    "coverage": 37,
    "providerCount": 4,
    "providers": [
      "centurylink",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "Virginia",
    "abbr": "VA",
    "topCity": "Virginia Beach",
    "coverage": 59,
    "providerCount": 7,
    "providers": [
      "xfinity",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "Washington",
    "abbr": "WA",
    "topCity": "Seattle",
    "coverage": 56,
    "providerCount": 10,
    "providers": [
      "xfinity",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "West Virginia",
    "abbr": "WV",
    "topCity": "Charleston",
    "coverage": 27,
    "providerCount": 10,
    "providers": [
      "frontier",
      "tmobile",
      "spectrum",
      "att"
    ]
  },
  {
    "name": "Wisconsin",
    "abbr": "WI",
    "topCity": "Milwaukee",
    "coverage": 49,
    "providerCount": 7,
    "providers": [
      "spectrum",
      "tmobile",
      "att",
      "xfinity"
    ]
  },
  {
    "name": "Wyoming",
    "abbr": "WY",
    "topCity": "Cheyenne",
    "coverage": 22,
    "providerCount": 8,
    "providers": [
      "centurylink",
      "tmobile",
      "spectrum",
      "att"
    ]
  }
];

function getStatesSorted() {
  return STATES_DATA.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

function slugifyStateName(name) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

// Auto-populate the homepage preview grid (#statesHomeGrid) if present.
document.addEventListener("DOMContentLoaded", function () {
  const homeGrid = document.getElementById("statesHomeGrid");
  if (!homeGrid) return;

  const preview = getStatesSorted().slice(0, 12);

  homeGrid.innerHTML = preview
    .map(function (state) {
      return (
        '<a class="state-card-home" href="pages/internet-in-' +
        slugifyStateName(state.name) +
        '.html">' +
        '<strong>' + state.name + '</strong>' +
        '<span>' + state.coverage + '% fiber availability</span>' +
        '</a>'
      );
    })
    .join("");
});
