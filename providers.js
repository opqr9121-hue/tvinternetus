const PROVIDERS = [
  {
    id: 'xfinity',
    name: 'Xfinity',
    logo: 'images/logos/xfinity.svg',
    tech: 'Cable',
    techClass: 'tech-cable',
    maxSpeed: '1200 Mbps',
    priceFrom: '$40/mo',
    description: 'Best for households streaming on multiple devices at once.',
    featured: true,
    featuredLabel: 'Most available',
    availability: 0.92
  },
  {
    id: 'att',
    name: 'AT&T Fiber',
    logo: 'images/logos/att.svg',
    tech: 'Fiber',
    techClass: 'tech-fiber',
    maxSpeed: '5000 Mbps',
    priceFrom: '$35/mo',
    description: 'Best for remote work, video calls, and large uploads.',
    availability: 0.78
  },
  {
    id: 'spectrum',
    name: 'Spectrum',
    logo: 'images/logos/spectrum.svg',
    tech: 'Cable',
    techClass: 'tech-cable',
    maxSpeed: '1000 Mbps',
    priceFrom: '$40/mo',
    description: 'Best for no-contract plans with no data caps.',
    availability: 0.85
  },
  {
    id: 'verizon',
    name: 'Verizon Fios',
    logo: 'images/logos/verizon.svg',
    tech: 'Fiber',
    techClass: 'tech-fiber',
    maxSpeed: '2300 Mbps',
    priceFrom: '$50/mo',
    description: 'Best for symmetrical upload/download speeds.',
    availability: 0.65
  },
  {
    id: 'tmobile',
    name: 'T-Mobile Home Internet',
    logo: 'images/logos/tmobile.svg',
    tech: '5G Wireless',
    techClass: 'tech-5g',
    maxSpeed: '245 Mbps',
    priceFrom: '$50/mo',
    description: 'Best for simple setup with no equipment fees.',
    availability: 0.70
  },
  {
    id: 'centurylink',
    name: 'CenturyLink',
    logo: 'images/logos/centurylink.svg',
    tech: 'Fiber / DSL',
    techClass: 'tech-dsl',
    maxSpeed: '940 Mbps',
    priceFrom: '$50/mo',
    description: 'Best for rural and semi-rural addresses.',
    availability: 0.55
  },
  {
    id: 'frontier',
    name: 'Frontier',
    logo: 'images/logos/frontier.svg',
    tech: 'Fiber',
    techClass: 'tech-fiber',
    maxSpeed: '5000 Mbps',
    priceFrom: '$29.99/mo',
    description: 'Best for gigabit fiber at competitive pricing.',
    availability: 0.60
  },
  {
    id: 'directv',
    name: 'DIRECTV STREAM',
    logo: 'images/logos/directv.svg',
    tech: 'TV Bundle',
    techClass: 'tech-cable',
    maxSpeed: '165+ live channels',
    priceFrom: '$89.99/mo',
    description: 'Best for pairing internet with live TV, no dish or contract.',
    availability: 0.88
  }
];

const PROVIDER_DETAILS = {
  xfinity: {
    overview: 'Xfinity by Comcast is one of the largest cable internet providers in the United States, serving millions of households with speeds up to 1.2 Gbps. Known for wide availability and bundled TV options.',
    plans: [
      { name: 'Connect', speed: '75 Mbps', price: '$30/mo' },
      { name: 'Connect More', speed: '200 Mbps', price: '$40/mo' },
      { name: 'Fast', speed: '400 Mbps', price: '$55/mo' },
      { name: 'Superfast', speed: '800 Mbps', price: '$70/mo' },
      { name: 'Gigabit', speed: '1200 Mbps', price: '$80/mo' }
    ],
    pros: ['Widest cable coverage in the US', 'No data caps on most plans', 'xFi gateway with advanced WiFi'],
    cons: ['Prices increase after promotional period', 'Equipment rental fees apply']
  },
  att: {
    overview: 'AT&T Fiber delivers symmetrical upload and download speeds using 100% fiber-optic technology. Ideal for households with heavy streaming, gaming, and remote work needs.',
    plans: [
      { name: 'Internet 300', speed: '300 Mbps', price: '$55/mo' },
      { name: 'Internet 500', speed: '500 Mbps', price: '$65/mo' },
      { name: 'Internet 1 Gig', speed: '1000 Mbps', price: '$80/mo' },
      { name: 'Internet 2 Gig', speed: '2000 Mbps', price: '$110/mo' },
      { name: 'Internet 5 Gig', speed: '5000 Mbps', price: '$180/mo' }
    ],
    pros: ['Symmetrical fiber speeds', 'No data caps', 'Price lock guarantee available'],
    cons: ['Limited to fiber-served areas', 'Installation may require appointment']
  },
  spectrum: {
    overview: 'Spectrum offers contract-free cable internet with no data caps. A popular choice for renters and households that want flexibility without long-term commitments.',
    plans: [
      { name: 'Internet', speed: '300 Mbps', price: '$49.99/mo' },
      { name: 'Internet Ultra', speed: '500 Mbps', price: '$69.99/mo' },
      { name: 'Internet Gig', speed: '1000 Mbps', price: '$89.99/mo' }
    ],
    pros: ['No contracts required', 'Free modem included', 'No data caps'],
    cons: ['Prices rise after 12 months', 'Upload speeds are slower than fiber']
  },
  verizon: {
    overview: 'Verizon Fios is a 100% fiber-optic network offering some of the fastest and most reliable internet in the Northeast and Mid-Atlantic regions.',
    plans: [
      { name: '300 Mbps', speed: '300 Mbps', price: '$49.99/mo' },
      { name: '500 Mbps', speed: '500 Mbps', price: '$69.99/mo' },
      { name: '1 Gig', speed: '1000 Mbps', price: '$89.99/mo' },
      { name: '2 Gig', speed: '2300 Mbps', price: '$119.99/mo' }
    ],
    pros: ['True fiber with symmetrical speeds', 'Highly reliable network', 'Whole-home WiFi options'],
    cons: ['Limited geographic availability', 'Router rental fee on some plans']
  },
  tmobile: {
    overview: 'T-Mobile Home Internet uses the nation\'s largest 5G network to deliver home broadband without cables or installation appointments. Simple plug-and-play setup.',
    plans: [
      { name: 'Home Internet', speed: 'Up to 245 Mbps', price: '$50/mo' },
      { name: 'Home Internet Plus', speed: 'Up to 415 Mbps', price: '$70/mo' }
    ],
    pros: ['No equipment fees', 'No annual contract', 'Easy self-installation'],
    cons: ['Speed varies by location', 'Not ideal for heavy upload users']
  },
  centurylink: {
    overview: 'CenturyLink (now Lumen) serves both urban and rural areas with fiber and DSL options, making it a key provider for addresses outside major metro areas.',
    plans: [
      { name: 'Simply Unlimited Internet', speed: '100 Mbps', price: '$50/mo' },
      { name: 'Fiber Internet', speed: '940 Mbps', price: '$65/mo' }
    ],
    pros: ['Strong rural coverage', 'Price for Life on select plans', 'No data caps on fiber'],
    cons: ['DSL speeds can be slow', 'Customer service ratings vary']
  },
  frontier: {
    overview: 'Frontier FiberOptic is expanding rapidly, offering some of the most competitively priced gigabit fiber plans in the market with no data caps.',
    plans: [
      { name: 'Fiber 500', speed: '500 Mbps', price: '$49.99/mo' },
      { name: 'Fiber 1 Gig', speed: '1000 Mbps', price: '$64.99/mo' },
      { name: 'Fiber 2 Gig', speed: '2000 Mbps', price: '$99.99/mo' },
      { name: 'Fiber 5 Gig', speed: '5000 Mbps', price: '$154.99/mo' }
    ],
    pros: ['Aggressive fiber pricing', 'No data caps', 'Free installation on select plans'],
    cons: ['Availability still expanding', 'Legacy DSL areas remain']
  },
  directv: {
    overview: 'DIRECTV STREAM combines live TV streaming with internet bundle options, offering 165+ channels without a satellite dish or long-term contract.',
    plans: [
      { name: 'Entertainment', speed: '75+ channels', price: '$69.99/mo' },
      { name: 'Choice', speed: '105+ channels', price: '$89.99/mo' },
      { name: 'Ultimate', speed: '140+ channels', price: '$104.99/mo' },
      { name: 'Premier', speed: '165+ channels', price: '$149.99/mo' }
    ],
    pros: ['No satellite dish needed', 'Cloud DVR included', 'Works on all major devices'],
    cons: ['Requires strong internet connection', 'Regional sports fees may apply']
  }
};

/**
 * Simulate provider availability for a ZIP code.
 * Uses ZIP digits as a seed for consistent results per ZIP.
 */
function getProvidersForZip(zip) {
  const seed = zip.split('').reduce((acc, d) => acc + parseInt(d, 10), 0);
  return PROVIDERS
    .map((p, i) => {
      const hash = (seed * (i + 3) * 7) % 100;
      const available = hash < p.availability * 100;
      return { ...p, available, score: hash };
    })
    .filter(p => p.available)
    .sort((a, b) => b.score - a.score);
}

function getProviderById(id) {
  const provider = PROVIDERS.find(p => p.id === id);
  const details = PROVIDER_DETAILS[id];
  if (!provider) return null;
  return { ...provider, ...details };
}

function getCityForZip(zip) {
  const cities = {
    '10001': 'New York, NY',
    '90210': 'Beverly Hills, CA',
    '60601': 'Chicago, IL',
    '77001': 'Houston, TX',
    '33101': 'Miami, FL',
    '98101': 'Seattle, WA',
    '80201': 'Denver, CO',
    '30301': 'Atlanta, GA',
    '02101': 'Boston, MA',
    '19101': 'Philadelphia, PA'
  };
  return cities[zip] || `ZIP ${zip}`;
}
