export const PHOTO_KEYS = [
  'guatemala',
  'antigua',
  'atitlan',
  'tikal',
  'acatenango',
  'chichicastenango',
  'semuc',
  'itinerary',
  'safety',
  'belize',
  'highlands',
] as const;
export type PhotoKey = (typeof PHOTO_KEYS)[number];
