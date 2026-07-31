// states.js
// Provides state-level coverage data used by the homepage preview grid
// and the full States page (pages/states/index.html).
//
// NOTE: coverage % and avgSpeed values below are placeholder estimates.
// Replace with real figures (e.g. from the Broadband Map API) when ready.

const STATES_DATA = [
  {
    "name": "Alabama",
    "abbr": "AL",
    "topCity": "Birmingham",
    "coverage": 81,
    "avgSpeed": 300,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv"
    ]
  },
  {
    "name": "Alaska",
    "abbr": "AK",
    "topCity": "Anchorage",
    "coverage": 86,
    "avgSpeed": 400,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv"
    ]
  },
  {
    "name": "Arizona",
    "abbr": "AZ",
    "topCity": "Phoenix",
    "coverage": 85,
    "avgSpeed": 400,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv",
      "frontier"
    ]
  },
  {
    "name": "Arkansas",
    "abbr": "AR",
    "topCity": "Little Rock",
    "coverage": 81,
    "avgSpeed": 900,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv"
    ]
  },
  {
    "name": "California",
    "abbr": "CA",
    "topCity": "Los Angeles",
    "coverage": 95,
    "avgSpeed": 300,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv",
      "frontier"
    ]
  },
  {
    "name": "Colorado",
    "abbr": "CO",
    "topCity": "Denver",
    "coverage": 96,
    "avgSpeed": 600,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv"
    ]
  },
  {
    "name": "Connecticut",
    "abbr": "CT",
    "topCity": "Bridgeport",
    "coverage": 79,
    "avgSpeed": 300,
    "providers": [
      "xfinity",
      "verizon",
      "spectrum",
      "tmobile",
      "frontier"
    ]
  },
  {
    "name": "Delaware",
    "abbr": "DE",
    "topCity": "Wilmington",
    "coverage": 80,
    "avgSpeed": 400,
    "providers": [
      "xfinity",
      "verizon",
      "spectrum",
      "tmobile"
    ]
  },
  {
    "name": "District of Columbia",
    "abbr": "DC",
    "topCity": "Washington",
    "coverage": 85,
    "avgSpeed": 750,
    "providers": [
      "xfinity",
      "verizon",
      "spectrum",
      "tmobile"
    ]
  },
  {
    "name": "Florida",
    "abbr": "FL",
    "topCity": "Miami",
    "coverage": 97,
    "avgSpeed": 300,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv",
      "frontier"
    ]
  },
  {
    "name": "Georgia",
    "abbr": "GA",
    "topCity": "Atlanta",
    "coverage": 95,
    "avgSpeed": 400,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv"
    ]
  },
  {
    "name": "Hawaii",
    "abbr": "HI",
    "topCity": "Honolulu",
    "coverage": 95,
    "avgSpeed": 600,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv"
    ]
  },
  {
    "name": "Idaho",
    "abbr": "ID",
    "topCity": "Boise",
    "coverage": 85,
    "avgSpeed": 600,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv"
    ]
  },
  {
    "name": "Illinois",
    "abbr": "IL",
    "topCity": "Chicago",
    "coverage": 96,
    "avgSpeed": 500,
    "providers": [
      "xfinity",
      "centurylink",
      "spectrum",
      "tmobile"
    ]
  },
  {
    "name": "Indiana",
    "abbr": "IN",
    "topCity": "Indianapolis",
    "coverage": 78,
    "avgSpeed": 1000,
    "providers": [
      "xfinity",
      "centurylink",
      "spectrum",
      "tmobile",
      "frontier"
    ]
  },
  {
    "name": "Iowa",
    "abbr": "IA",
    "topCity": "Des Moines",
    "coverage": 83,
    "avgSpeed": 900,
    "providers": [
      "xfinity",
      "centurylink",
      "spectrum",
      "tmobile"
    ]
  },
  {
    "name": "Kansas",
    "abbr": "KS",
    "topCity": "Wichita",
    "coverage": 91,
    "avgSpeed": 500,
    "providers": [
      "xfinity",
      "centurylink",
      "spectrum",
      "tmobile"
    ]
  },
  {
    "name": "Kentucky",
    "abbr": "KY",
    "topCity": "Louisville",
    "coverage": 86,
    "avgSpeed": 400,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv"
    ]
  },
  {
    "name": "Louisiana",
    "abbr": "LA",
    "topCity": "New Orleans",
    "coverage": 84,
    "avgSpeed": 1000,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv"
    ]
  },
  {
    "name": "Maine",
    "abbr": "ME",
    "topCity": "Portland",
    "coverage": 88,
    "avgSpeed": 300,
    "providers": [
      "xfinity",
      "verizon",
      "spectrum",
      "tmobile"
    ]
  },
  {
    "name": "Maryland",
    "abbr": "MD",
    "topCity": "Baltimore",
    "coverage": 80,
    "avgSpeed": 600,
    "providers": [
      "xfinity",
      "verizon",
      "spectrum",
      "tmobile"
    ]
  },
  {
    "name": "Massachusetts",
    "abbr": "MA",
    "topCity": "Boston",
    "coverage": 81,
    "avgSpeed": 500,
    "providers": [
      "xfinity",
      "verizon",
      "spectrum",
      "tmobile"
    ]
  },
  {
    "name": "Michigan",
    "abbr": "MI",
    "topCity": "Detroit",
    "coverage": 89,
    "avgSpeed": 750,
    "providers": [
      "xfinity",
      "centurylink",
      "spectrum",
      "tmobile",
      "frontier"
    ]
  },
  {
    "name": "Minnesota",
    "abbr": "MN",
    "topCity": "Minneapolis",
    "coverage": 86,
    "avgSpeed": 1000,
    "providers": [
      "xfinity",
      "centurylink",
      "spectrum",
      "tmobile"
    ]
  },
  {
    "name": "Mississippi",
    "abbr": "MS",
    "topCity": "Jackson",
    "coverage": 79,
    "avgSpeed": 900,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv"
    ]
  },
  {
    "name": "Missouri",
    "abbr": "MO",
    "topCity": "Kansas City",
    "coverage": 92,
    "avgSpeed": 750,
    "providers": [
      "xfinity",
      "centurylink",
      "spectrum",
      "tmobile"
    ]
  },
  {
    "name": "Montana",
    "abbr": "MT",
    "topCity": "Billings",
    "coverage": 81,
    "avgSpeed": 600,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv"
    ]
  },
  {
    "name": "Nebraska",
    "abbr": "NE",
    "topCity": "Omaha",
    "coverage": 80,
    "avgSpeed": 750,
    "providers": [
      "xfinity",
      "centurylink",
      "spectrum",
      "tmobile"
    ]
  },
  {
    "name": "Nevada",
    "abbr": "NV",
    "topCity": "Las Vegas",
    "coverage": 87,
    "avgSpeed": 1000,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv"
    ]
  },
  {
    "name": "New Hampshire",
    "abbr": "NH",
    "topCity": "Manchester",
    "coverage": 97,
    "avgSpeed": 1000,
    "providers": [
      "xfinity",
      "verizon",
      "spectrum",
      "tmobile"
    ]
  },
  {
    "name": "New Jersey",
    "abbr": "NJ",
    "topCity": "Newark",
    "coverage": 89,
    "avgSpeed": 750,
    "providers": [
      "xfinity",
      "verizon",
      "spectrum",
      "tmobile"
    ]
  },
  {
    "name": "New Mexico",
    "abbr": "NM",
    "topCity": "Albuquerque",
    "coverage": 84,
    "avgSpeed": 900,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv"
    ]
  },
  {
    "name": "New York",
    "abbr": "NY",
    "topCity": "New York City",
    "coverage": 80,
    "avgSpeed": 300,
    "providers": [
      "xfinity",
      "verizon",
      "spectrum",
      "tmobile",
      "frontier"
    ]
  },
  {
    "name": "North Carolina",
    "abbr": "NC",
    "topCity": "Charlotte",
    "coverage": 85,
    "avgSpeed": 1000,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv"
    ]
  },
  {
    "name": "North Dakota",
    "abbr": "ND",
    "topCity": "Fargo",
    "coverage": 87,
    "avgSpeed": 300,
    "providers": [
      "xfinity",
      "centurylink",
      "spectrum",
      "tmobile"
    ]
  },
  {
    "name": "Ohio",
    "abbr": "OH",
    "topCity": "Columbus",
    "coverage": 85,
    "avgSpeed": 1000,
    "providers": [
      "xfinity",
      "centurylink",
      "spectrum",
      "tmobile"
    ]
  },
  {
    "name": "Oklahoma",
    "abbr": "OK",
    "topCity": "Oklahoma City",
    "coverage": 81,
    "avgSpeed": 600,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv"
    ]
  },
  {
    "name": "Oregon",
    "abbr": "OR",
    "topCity": "Portland",
    "coverage": 86,
    "avgSpeed": 600,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv"
    ]
  },
  {
    "name": "Pennsylvania",
    "abbr": "PA",
    "topCity": "Philadelphia",
    "coverage": 89,
    "avgSpeed": 400,
    "providers": [
      "xfinity",
      "verizon",
      "spectrum",
      "tmobile",
      "frontier"
    ]
  },
  {
    "name": "Rhode Island",
    "abbr": "RI",
    "topCity": "Providence",
    "coverage": 89,
    "avgSpeed": 500,
    "providers": [
      "xfinity",
      "verizon",
      "spectrum",
      "tmobile"
    ]
  },
  {
    "name": "South Carolina",
    "abbr": "SC",
    "topCity": "Charleston",
    "coverage": 84,
    "avgSpeed": 900,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv"
    ]
  },
  {
    "name": "South Dakota",
    "abbr": "SD",
    "topCity": "Sioux Falls",
    "coverage": 86,
    "avgSpeed": 900,
    "providers": [
      "xfinity",
      "centurylink",
      "spectrum",
      "tmobile"
    ]
  },
  {
    "name": "Tennessee",
    "abbr": "TN",
    "topCity": "Nashville",
    "coverage": 80,
    "avgSpeed": 750,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv"
    ]
  },
  {
    "name": "Texas",
    "abbr": "TX",
    "topCity": "Houston",
    "coverage": 83,
    "avgSpeed": 750,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv",
      "frontier"
    ]
  },
  {
    "name": "Utah",
    "abbr": "UT",
    "topCity": "Salt Lake City",
    "coverage": 85,
    "avgSpeed": 400,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv"
    ]
  },
  {
    "name": "Vermont",
    "abbr": "VT",
    "topCity": "Burlington",
    "coverage": 92,
    "avgSpeed": 600,
    "providers": [
      "xfinity",
      "verizon",
      "spectrum",
      "tmobile"
    ]
  },
  {
    "name": "Virginia",
    "abbr": "VA",
    "topCity": "Virginia Beach",
    "coverage": 86,
    "avgSpeed": 900,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv"
    ]
  },
  {
    "name": "Washington",
    "abbr": "WA",
    "topCity": "Seattle",
    "coverage": 95,
    "avgSpeed": 400,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv"
    ]
  },
  {
    "name": "West Virginia",
    "abbr": "WV",
    "topCity": "Charleston",
    "coverage": 88,
    "avgSpeed": 1000,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv",
      "frontier"
    ]
  },
  {
    "name": "Wisconsin",
    "abbr": "WI",
    "topCity": "Milwaukee",
    "coverage": 79,
    "avgSpeed": 400,
    "providers": [
      "xfinity",
      "centurylink",
      "spectrum",
      "tmobile"
    ]
  },
  {
    "name": "Wyoming",
    "abbr": "WY",
    "topCity": "Cheyenne",
    "coverage": 79,
    "avgSpeed": 1000,
    "providers": [
      "att",
      "spectrum",
      "centurylink",
      "tmobile",
      "directv"
    ]
  }
];

function getStatesSorted() {
  return STATES_DATA.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

function getStateByAbbr(abbr) {
  return STATES_DATA.find(function (s) {
    return s.abbr === abbr;
  });
}

// Auto-populate the homepage preview grid (#statesHomeGrid) if present.
document.addEventListener("DOMContentLoaded", function () {
  const homeGrid = document.getElementById("statesHomeGrid");
  if (!homeGrid) return;

  const preview = getStatesSorted().slice(0, 12);

  homeGrid.innerHTML = preview
    .map(function (state) {
      return (
        '<a class="state-card-home" href="pages/results.html?state=' +
        state.abbr +
        '">' +
        '<strong>' + state.name + '</strong>' +
        '<span>' + state.coverage + '% coverage</span>' +
        '</a>'
      );
    })
    .join("");
});
