import { CATEGORY_SLUGS, DESTINATION_SLUGS, SITE } from '../data/taxonomy';
import { getPosts, postUrl, isoDate } from '../lib/site';

export async function GET() {
  const posts = await getPosts();
  const latest = isoDate(new Date(Math.max(...posts.map((p) => p.data.updatedDate.valueOf()))));
  const pages: { path: string; lastmod: string }[] = [
    { path: '/', lastmod: latest },
    { path: '/posts/', lastmod: latest },
    ...CATEGORY_SLUGS.map((c) => ({ path: `/category/${c}/`, lastmod: latest })),
    ...DESTINATION_SLUGS.map((d) => ({ path: `/destinations/${d}/`, lastmod: latest })),
    ...posts.map((p) => ({ path: postUrl(p), lastmod: isoDate(p.data.updatedDate) })),
    ...['about', 'authors', 'disclosure', 'privacy', 'cookies', 'terms', 'photo-credits'].map((s) => ({ path: `/${s}/`, lastmod: '2026-11-11' })),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${SITE.url}${p.path}</loc><lastmod>${p.lastmod}</lastmod></url>`).join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
