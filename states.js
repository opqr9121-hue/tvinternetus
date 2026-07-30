const STATES = [
  { abbr: 'AL', name: 'Alabama', providers: ['att', 'spectrum', 'xfinity', 'centurylink'], coverage: 89, avgSpeed: 142, topCity: 'Birmingham' },
  { abbr: 'AK', name: 'Alaska', providers: ['centurylink', 'tmobile', 'frontier'], coverage: 72, avgSpeed: 98, topCity: 'Anchorage' },
  { abbr: 'AZ', name: 'Arizona', providers: ['centurylink', 'xfinity', 'spectrum', 'tmobile', 'frontier'], coverage: 94, avgSpeed: 186, topCity: 'Phoenix' },
  { abbr: 'AR', name: 'Arkansas', providers: ['att', 'centurylink', 'xfinity', 'spectrum'], coverage: 86, avgSpeed: 128, topCity: 'Little Rock' },
  { abbr: 'CA', name: 'California', providers: ['xfinity', 'att', 'spectrum', 'frontier', 'tmobile', 'verizon'], coverage: 97, avgSpeed: 224, topCity: 'Los Angeles' },
  { abbr: 'CO', name: 'Colorado', providers: ['xfinity', 'centurylink', 'spectrum', 'tmobile', 'att'], coverage: 95, avgSpeed: 198, topCity: 'Denver' },
  { abbr: 'CT', name: 'Connecticut', providers: ['xfinity', 'verizon', 'spectrum', 'frontier'], coverage: 98, avgSpeed: 212, topCity: 'Hartford' },
  { abbr: 'DE', name: 'Delaware', providers: ['verizon', 'xfinity', 'spectrum'], coverage: 97, avgSpeed: 205, topCity: 'Wilmington' },
  { abbr: 'DC', name: 'District of Columbia', providers: ['xfinity', 'verizon', 'att', 'tmobile'], coverage: 99, avgSpeed: 238, topCity: 'Washington' },
  { abbr: 'FL', name: 'Florida', providers: ['xfinity', 'att', 'spectrum', 'frontier', 'tmobile', 'centurylink'], coverage: 96, avgSpeed: 192, topCity: 'Miami' },
  { abbr: 'GA', name: 'Georgia', providers: ['xfinity', 'att', 'spectrum', 'tmobile', 'frontier'], coverage: 94, avgSpeed: 178, topCity: 'Atlanta' },
  { abbr: 'HI', name: 'Hawaii', providers: ['spectrum', 'tmobile', 'centurylink'], coverage: 91, avgSpeed: 156, topCity: 'Honolulu' },
  { abbr: 'ID', name: 'Idaho', providers: ['centurylink', 'xfinity', 'tmobile', 'frontier'], coverage: 88, avgSpeed: 134, topCity: 'Boise' },
  { abbr: 'IL', name: 'Illinois', providers: ['xfinity', 'att', 'spectrum', 'frontier', 'tmobile'], coverage: 96, avgSpeed: 201, topCity: 'Chicago' },
  { abbr: 'IN', name: 'Indiana', providers: ['xfinity', 'att', 'spectrum', 'frontier', 'tmobile'], coverage: 92, avgSpeed: 168, topCity: 'Indianapolis' },
  { abbr: 'IA', name: 'Iowa', providers: ['centurylink', 'xfinity', 'mediacom', 'tmobile'], coverage: 90, avgSpeed: 152, topCity: 'Des Moines' },
  { abbr: 'KS', name: 'Kansas', providers: ['att', 'xfinity', 'spectrum', 'centurylink', 'tmobile'], coverage: 91, avgSpeed: 162, topCity: 'Wichita' },
  { abbr: 'KY', name: 'Kentucky', providers: ['att', 'spectrum', 'xfinity', 'frontier', 'tmobile'], coverage: 89, avgSpeed: 148, topCity: 'Louisville' },
  { abbr: 'LA', name: 'Louisiana', providers: ['att', 'xfinity', 'spectrum', 'centurylink', 'tmobile'], coverage: 90, avgSpeed: 154, topCity: 'New Orleans' },
  { abbr: 'ME', name: 'Maine', providers: ['spectrum', 'frontier', 'xfinity', 'tmobile'], coverage: 87, avgSpeed: 138, topCity: 'Portland' },
  { abbr: 'MD', name: 'Maryland', providers: ['verizon', 'xfinity', 'att', 'spectrum', 'tmobile'], coverage: 98, avgSpeed: 218, topCity: 'Baltimore' },
  { abbr: 'MA', name: 'Massachusetts', providers: ['xfinity', 'verizon', 'att', 'spectrum', 'frontier'], coverage: 98, avgSpeed: 226, topCity: 'Boston' },
  { abbr: 'MI', name: 'Michigan', providers: ['xfinity', 'att', 'spectrum', 'frontier', 'tmobile'], coverage: 93, avgSpeed: 172, topCity: 'Detroit' },
  { abbr: 'MN', name: 'Minnesota', providers: ['xfinity', 'centurylink', 'spectrum', 'tmobile', 'frontier'], coverage: 94, avgSpeed: 184, topCity: 'Minneapolis' },
  { abbr: 'MS', name: 'Mississippi', providers: ['att', 'xfinity', 'centurylink', 'tmobile'], coverage: 84, avgSpeed: 118, topCity: 'Jackson' },
  { abbr: 'MO', name: 'Missouri', providers: ['att', 'xfinity', 'spectrum', 'centurylink', 'tmobile'], coverage: 92, avgSpeed: 166, topCity: 'Kansas City' },
  { abbr: 'MT', name: 'Montana', providers: ['centurylink', 'charter', 'tmobile', 'frontier'], coverage: 78, avgSpeed: 102, topCity: 'Billings' },
  { abbr: 'NE', name: 'Nebraska', providers: ['centurylink', 'xfinity', 'spectrum', 'tmobile'], coverage: 89, avgSpeed: 146, topCity: 'Omaha' },
  { abbr: 'NV', name: 'Nevada', providers: ['xfinity', 'centurylink', 'spectrum', 'tmobile', 'att'], coverage: 95, avgSpeed: 194, topCity: 'Las Vegas' },
  { abbr: 'NH', name: 'New Hampshire', providers: ['xfinity', 'consolidated', 'verizon', 'tmobile'], coverage: 93, avgSpeed: 176, topCity: 'Manchester' },
  { abbr: 'NJ', name: 'New Jersey', providers: ['verizon', 'xfinity', 'optimum', 'att', 'tmobile'], coverage: 99, avgSpeed: 242, topCity: 'Newark' },
  { abbr: 'NM', name: 'New Mexico', providers: ['xfinity', 'centurylink', 'tmobile', 'frontier'], coverage: 85, avgSpeed: 124, topCity: 'Albuquerque' },
  { abbr: 'NY', name: 'New York', providers: ['verizon', 'xfinity', 'spectrum', 'frontier', 'att', 'tmobile'], coverage: 98, avgSpeed: 232, topCity: 'New York City' },
  { abbr: 'NC', name: 'North Carolina', providers: ['att', 'xfinity', 'spectrum', 'frontier', 'tmobile'], coverage: 94, avgSpeed: 182, topCity: 'Charlotte' },
  { abbr: 'ND', name: 'North Dakota', providers: ['midco', 'centurylink', 'tmobile'], coverage: 86, avgSpeed: 132, topCity: 'Fargo' },
  { abbr: 'OH', name: 'Ohio', providers: ['att', 'xfinity', 'spectrum', 'frontier', 'tmobile'], coverage: 95, avgSpeed: 188, topCity: 'Columbus' },
  { abbr: 'OK', name: 'Oklahoma', providers: ['att', 'xfinity', 'cableone', 'tmobile', 'centurylink'], coverage: 88, avgSpeed: 142, topCity: 'Oklahoma City' },
  { abbr: 'OR', name: 'Oregon', providers: ['xfinity', 'centurylink', 'frontier', 'tmobile', 'spectrum'], coverage: 93, avgSpeed: 178, topCity: 'Portland' },
  { abbr: 'PA', name: 'Pennsylvania', providers: ['xfinity', 'verizon', 'att', 'spectrum', 'frontier', 'tmobile'], coverage: 96, avgSpeed: 196, topCity: 'Philadelphia' },
  { abbr: 'RI', name: 'Rhode Island', providers: ['xfinity', 'verizon', 'cox', 'tmobile'], coverage: 97, avgSpeed: 208, topCity: 'Providence' },
  { abbr: 'SC', name: 'South Carolina', providers: ['att', 'xfinity', 'spectrum', 'frontier', 'tmobile'], coverage: 91, avgSpeed: 158, topCity: 'Charleston' },
  { abbr: 'SD', name: 'South Dakota', providers: ['midco', 'centurylink', 'tmobile'], coverage: 85, avgSpeed: 126, topCity: 'Sioux Falls' },
  { abbr: 'TN', name: 'Tennessee', providers: ['att', 'xfinity', 'spectrum', 'frontier', 'tmobile'], coverage: 92, avgSpeed: 164, topCity: 'Nashville' },
  { abbr: 'TX', name: 'Texas', providers: ['att', 'xfinity', 'spectrum', 'frontier', 'tmobile', 'centurylink'], coverage: 95, avgSpeed: 198, topCity: 'Houston' },
  { abbr: 'UT', name: 'Utah', providers: ['xfinity', 'centurylink', 'google', 'tmobile', 'frontier'], coverage: 96, avgSpeed: 206, topCity: 'Salt Lake City' },
  { abbr: 'VT', name: 'Vermont', providers: ['consolidated', 'xfinity', 'vtel', 'tmobile'], coverage: 84, avgSpeed: 122, topCity: 'Burlington' },
  { abbr: 'VA', name: 'Virginia', providers: ['xfinity', 'verizon', 'att', 'spectrum', 'frontier', 'tmobile'], coverage: 96, avgSpeed: 204, topCity: 'Virginia Beach' },
  { abbr: 'WA', name: 'Washington', providers: ['xfinity', 'centurylink', 'frontier', 'tmobile', 'wave'], coverage: 96, avgSpeed: 210, topCity: 'Seattle' },
  { abbr: 'WV', name: 'West Virginia', providers: ['frontier', 'xfinity', 'spectrum', 'tmobile'], coverage: 82, avgSpeed: 112, topCity: 'Charleston' },
  { abbr: 'WI', name: 'Wisconsin', providers: ['att', 'xfinity', 'spectrum', 'tmobile', 'centurylink'], coverage: 93, avgSpeed: 174, topCity: 'Milwaukee' },
  { abbr: 'WY', name: 'Wyoming', providers: ['centurylink', 'spectrum', 'tmobile'], coverage: 80, avgSpeed: 108, topCity: 'Cheyenne' }
];

function getStateByAbbr(abbr) {
  return STATES.find(s => s.abbr.toLowerCase() === abbr.toLowerCase());
}

function getStatesSorted() {
  return [...STATES].sort((a, b) => a.name.localeCompare(b.name));
}

function getProvidersForState(abbr) {
  const state = getStateByAbbr(abbr);
  if (!state) return [];
  return state.providers
    .map(id => getProviderById(id))
    .filter(Boolean);
}

function getStateSampleZips(abbr) {
  const samples = {
    CA: ['90210', '94102', '92101'],
    TX: ['77001', '75201', '78701'],
    NY: ['10001', '11201', '14201'],
    FL: ['33101', '32801', '33602'],
    IL: ['60601', '60614', '62701'],
    PA: ['19101', '15201', '18101'],
    OH: ['43201', '44101', '45202'],
    GA: ['30301', '31401', '30901'],
    NC: ['28202', '27601', '27101'],
    MI: ['48201', '49503', '48933']
  };
  return samples[abbr] || [`${abbr}0001`.slice(0, 5)];
}
