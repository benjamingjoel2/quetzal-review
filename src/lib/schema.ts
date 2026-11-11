import { SITE } from '../data/taxonomy';
import { abs } from './site';

export const ORG_ID = `${SITE.url}/#publisher`;
export const SITE_ID = `${SITE.url}/#website`;

export function baseGraph() {
  return [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: SITE.publisher.name,
      url: SITE.publisher.url,
      email: SITE.email,
      logo: { '@type': 'ImageObject', url: abs('/favicon-512.png'), width: 512, height: 512 },
    },
    {
      '@type': 'WebSite',
      '@id': SITE_ID,
      name: SITE.name,
      url: `${SITE.url}/`,
      description: SITE.description,
      inLanguage: 'en-GB',
      publisher: { '@id': ORG_ID },
    },
  ];
}

export type Crumb = { name: string; path: string };

export function breadcrumbs(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}
