export const CATEGORY_SLUGS = [
  'destinations',
  'maya-culture',
  'volcanoes-hiking',
  'itineraries',
  'food',
  'travel-tips',
] as const;
export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

export const CATEGORIES: Record<CategorySlug, { name: string; intro: string }> = {
  destinations: {
    name: 'Destinations',
    intro: 'Where to go in Guatemala, place by place: what each one is like, how long to give it and how it fits into a route.',
  },
  'maya-culture': {
    name: 'Maya Culture',
    intro: 'Ancient Maya cities and the living Maya communities of today, with notes on visiting respectfully.',
  },
  'volcanoes-hiking': {
    name: 'Volcanoes & Hiking',
    intro: 'Volcano hikes and trails, with the official sources to check before you set off.',
  },
  itineraries: {
    name: 'Itineraries',
    intro: 'Day-by-day routes for a first trip and beyond, with honest notes on pacing.',
  },
  food: {
    name: 'Food',
    intro: 'What to eat and drink in Guatemala, from market comedores to coffee country.',
  },
  'travel-tips': {
    name: 'Travel Tips',
    intro: 'Practical planning: entry rules, health, safety and getting around, linked to official sources.',
  },
};

export const DESTINATION_SLUGS = [
  'antigua',
  'lake-atitlan',
  'tikal-peten',
  'chichicastenango',
  'semuc-champey',
  'highlands',
] as const;
export type DestinationSlug = (typeof DESTINATION_SLUGS)[number];

export const DESTINATIONS: Record<DestinationSlug, { name: string; intro: string }> = {
  antigua: {
    name: 'Antigua',
    intro: 'Cobbled streets, church ruins and three volcanoes on the skyline: the town most trips start from.',
  },
  'lake-atitlan': {
    name: 'Lake Atitlán',
    intro: 'A volcanic lake ringed by Maya villages, each with its own character and its own boat dock.',
  },
  'tikal-peten': {
    name: 'Tikal & Petén',
    intro: 'Rainforest and the great Maya city of Tikal in the lowland north, usually reached from Flores.',
  },
  chichicastenango: {
    name: 'Chichicastenango',
    intro: 'A K’iche’ Maya town in the highlands, known for its twice-weekly market and the church of Santo Tomás.',
  },
  'semuc-champey': {
    name: 'Semuc Champey',
    intro: 'Turquoise limestone pools in the forests of Alta Verapaz, at the end of a long road.',
  },
  highlands: {
    name: 'The Highlands',
    intro: 'Mountain towns, markets and Maya communities across Guatemala’s western highlands.',
  },
};

export const SITE = {
  name: 'Quetzal Review',
  url: 'https://quetzalreview.tourground.com',
  tagline: 'Story-led, practical travel writing about Guatemala',
  description:
    'Story-led, practical travel writing for people planning a trip to Guatemala: Maya sites, volcanoes, markets and lakes, with sources and a local operator for every trip. Published by Tourground.',
  email: 'quetzalreview@tourground.com',
  publisher: { name: 'Tourground', url: 'https://tourground.com' },
  directoryUrl: 'https://tourground.com/#/explore',
  locale: 'en_GB',
};

export const AUTHORS: Record<string, { name: string; role: string; bio: string }> = {
  desk: {
    name: 'Quetzal Review editors',
    role: 'Editorial desk, Tourground',
    bio: 'The Quetzal Review editors research and write every story from official and primary sources, which are listed at the end of each post, and review them when rules or advice change.',
  },
};
