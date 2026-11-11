import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE, CATEGORIES } from '../data/taxonomy';
import { getPosts, postUrl } from '../lib/site';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.advertisement ? `Advertisement feature: ${p.data.title}` : p.data.title,
      description: p.data.description,
      link: postUrl(p),
      pubDate: p.data.pubDate,
      categories: p.data.categories.map((c) => CATEGORIES[c].name),
      author: `${SITE.email} (Quetzal Review editors)`,
    })),
    customData: '<language>en-gb</language><copyright>Tourground</copyright>',
  });
}
