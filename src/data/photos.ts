import type { ImageMetadata } from 'astro';
import type { PhotoKey } from './photo-keys';
import guatemala from '../assets/photos/guatemala.jpg';
import antigua from '../assets/photos/antigua.jpg';
import atitlan from '../assets/photos/atitlan.jpg';
import tikal from '../assets/photos/tikal.jpg';
import acatenango from '../assets/photos/acatenango.jpg';
import chichicastenango from '../assets/photos/chichicastenango.jpg';
import semuc from '../assets/photos/semuc.jpg';
import itinerary from '../assets/photos/itinerary.jpg';
import safety from '../assets/photos/safety.jpg';
import belize from '../assets/photos/belize.jpg';
import highlands from '../assets/photos/highlands.jpg';

export interface Photo {
  src: ImageMetadata;
  alt: string;
  caption: string;
  file: string; // Wikimedia Commons file name
  author: string;
  license: string;
  licenseUrl: string;
}

const commons = (file: string) =>
  `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replace(/ /g, '_'))}`;

const LICENSES: Record<string, string> = {
  'CC BY 2.0': 'https://creativecommons.org/licenses/by/2.0/',
  'CC BY 4.0': 'https://creativecommons.org/licenses/by/4.0/',
  'CC BY-SA 2.0': 'https://creativecommons.org/licenses/by-sa/2.0/',
  'CC BY-SA 3.0': 'https://creativecommons.org/licenses/by-sa/3.0/',
  'CC BY-SA 4.0': 'https://creativecommons.org/licenses/by-sa/4.0/',
  CC0: 'https://creativecommons.org/publicdomain/zero/1.0/',
};

function p(src: ImageMetadata, alt: string, caption: string, file: string, author: string, license: string): Photo {
  return { src, alt, caption, file, author, license, licenseUrl: LICENSES[license] };
}

export const PHOTOS: Record<PhotoKey, Photo> = {
  guatemala: p(guatemala, 'Volcano peaks rising above a sea of cloud at sunrise, seen from the slopes of Pacaya', 'Volcanoes above the clouds, seen from Pacaya', 'View from Volcano Pacaya, Guatemala.jpg', 'Christopher Crouzet', 'CC BY-SA 4.0'),
  antigua: p(antigua, 'The tiled rooftops and grid of streets of Antigua Guatemala at sunset, with Volcán de Agua behind', 'Antigua at sunset, with Volcán de Agua behind', 'Volcán Agua sunset.jpg', 'Bex Walton', 'CC BY 4.0'),
  atitlan: p(atitlan, 'Lake Atitlán at dawn, the water still and a volcano silhouetted against an orange sky', 'Dawn over Lake Atitlán', 'Sunrise on Lake Atitlan (6849876450).jpg', 'Murray Foubister', 'CC BY-SA 2.0'),
  tikal: p(tikal, 'Temple I at Tikal, a steep stepped pyramid rising above the Gran Plaza with rainforest around it', 'Temple I and the Gran Plaza, Tikal', 'Gran Plaza with Temple I - Tikal Archaeological Site - Peten - Guatemala (15684347430).jpg', 'Adam Jones', 'CC BY-SA 2.0'),
  acatenango: p(acatenango, 'Volcán de Fuego sending up a column of ash against a blue sky, framed by pine trees on a neighbouring slope', 'Fuego erupting, seen through the pines', 'Fuego volcano in Guatemala.jpg', 'SoylentGreen', 'CC BY-SA 4.0'),
  chichicastenango: p(chichicastenango, 'The white façade and stone steps of the church of Santo Tomás in Chichicastenango under a deep blue sky', 'The church of Santo Tomás, Chichicastenango', 'Chichicastenango Guatemala, March 2020 - Santo Tomas.jpg', 'Bruno Rijsman', 'CC BY-SA 2.0'),
  semuc: p(semuc, 'Terraced turquoise pools of Semuc Champey seen from above, surrounded by dense green forest', 'The pools of Semuc Champey from the lookout', 'Semuc Champey, Guatemala.jpg', 'Christopher Crouzet', 'CC BY-SA 3.0'),
  itinerary: p(itinerary, 'Lake Atitlán and its volcanoes seen from a hillside in Sololá', 'Lake Atitlán from above Sololá', 'Lago de Atitlan, Solola Guatemala, February 2020.jpg', 'Bruno Rijsman', 'CC BY-SA 2.0'),
  safety: p(safety, 'A quiet cobbled street in Antigua framed by the yellow Santa Catalina arch, with Volcán de Agua in the distance', 'Through the Santa Catalina arch, Antigua', 'Volcano Street, Antigua Guatemala, 2022-01-27.jpg', 'Not So Dusty', 'CC BY 2.0'),
  belize: p(belize, 'El Castillo, the tall stepped stone pyramid at Xunantunich in western Belize, under a bright sky', 'El Castillo at Xunantunich, Belize', 'Xunantunich El Castillo 2011.jpg', 'Kaldari', 'CC0'),
  highlands: p(highlands, 'The town of Zunil spread across a green highland valley beneath steep mountain slopes', 'Zunil, in the western highlands', 'Zunil guatemala panorama.JPG', 'chensiyuan', 'CC BY-SA 4.0'),
};

export function photoSource(photo: Photo) {
  return commons(photo.file);
}
