// Checks the built site in dist/: required pages, JSON-LD types, internal links, labelled ads.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const errors = [];
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const html = walk(DIST).filter((f) => f.endsWith('.html'));

const required = ['about', 'authors', 'disclosure', 'privacy', 'cookies', 'terms', 'photo-credits', 'posts'].map((p) => `${DIST}/${p}/index.html`);
for (const f of [...required, `${DIST}/index.html`, `${DIST}/llms.txt`, `${DIST}/rss.xml`, `${DIST}/sitemap.xml`, `${DIST}/robots.txt`]) {
  if (!existsSync(f)) errors.push(`missing ${f}`);
}

const exists = (path) => {
  const clean = decodeURI(path.split('#')[0].split('?')[0]);
  return existsSync(join(DIST, clean)) || existsSync(join(DIST, clean, 'index.html'));
};

for (const f of html) {
  const s = readFileSync(f, 'utf8');
  const blocks = [...s.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)];
  const types = new Set(blocks.flatMap((b) => JSON.parse(b[1])['@graph'].map((n) => n['@type'])));
  for (const t of ['Organization', 'WebSite', 'BreadcrumbList']) if (!types.has(t)) errors.push(`${f}: no ${t} JSON-LD`);
  if (f.includes('/posts/') && !f.endsWith('posts/index.html') && !types.has('BlogPosting')) errors.push(`${f}: no BlogPosting`);
  if (!s.includes('Published by Tourground')) errors.push(`${f}: footer lacks "Published by Tourground"`);
  if ((s.match(/<h1[\s>]/g) || []).length !== 1) errors.push(`${f}: expected exactly one h1`);
  for (const m of s.matchAll(/href="(\/[^"]*)"/g)) if (!exists(m[1])) errors.push(`${f}: broken link ${m[1]}`);
  for (const m of s.matchAll(/<img(?![^>]*\balt(=|[\s>]))[^>]*>/g)) errors.push(`${f}: img without alt`);
}
const posts = html.filter((f) => /posts\/[^/]+\/index\.html$/.test(f));
console.log(`${html.length} HTML pages, ${posts.length} posts checked`);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('All checks passed');
