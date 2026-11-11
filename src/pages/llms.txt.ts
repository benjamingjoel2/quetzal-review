import { CATEGORIES, DESTINATIONS, SITE } from '../data/taxonomy';
import { getPosts, postUrl, formatDate } from '../lib/site';

export async function GET() {
  const posts = await getPosts();
  const u = (p: string) => `${SITE.url}${p}`;
  const body = `# ${SITE.name}

> ${SITE.description}

Every story lists its sources and shows when it was published and last updated. Health, entry and safety facts link to the official source and show when they were last checked. Quetzal Review does not publish invented reviews, quotes, prices or statistics. Any paid placement is labelled "Advertisement feature".

Publisher: Tourground (${SITE.publisher.url}). Contact: ${SITE.email}.

## Stories

${posts.map((p) => `- [${p.data.title}](${u(postUrl(p))}): ${p.data.description} (updated ${formatDate(p.data.updatedDate)})`).join('\n')}

## Categories

${Object.entries(CATEGORIES).map(([s, c]) => `- [${c.name}](${u(`/category/${s}/`)}): ${c.intro}`).join('\n')}

## Destinations

${Object.entries(DESTINATIONS).map(([s, d]) => `- [${d.name}](${u(`/destinations/${s}/`)}): ${d.intro}`).join('\n')}

## About

- [About](${u('/about/')}): Who publishes Quetzal Review and how stories are written.
- [Authors](${u('/authors/')}): The editorial desk.
- [Disclosure](${u('/disclosure/')}): How Tourground makes money and how operators are chosen.
- [Photo credits](${u('/photo-credits/')}): Authors and licences for every photograph.
- [RSS feed](${u('/rss.xml')})
- [Sitemap](${u('/sitemap.xml')})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
