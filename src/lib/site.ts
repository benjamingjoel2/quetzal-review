import { getCollection, type CollectionEntry } from 'astro:content';
import { SITE } from '../data/taxonomy';

export type Post = CollectionEntry<'posts'>;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts');
  return posts.sort(
    (a, b) =>
      b.data.pubDate.valueOf() - a.data.pubDate.valueOf() || a.data.title.localeCompare(b.data.title),
  );
}

export const postUrl = (p: Post | string) => `/posts/${typeof p === 'string' ? p : p.id}/`;
export const abs = (path: string) => new URL(path, SITE.url).href;

export function wordCount(body = ''): number {
  const text = body
    .replace(/^---[\s\S]*?---/, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`]/g, ' ');
  return text.split(/\s+/).filter(Boolean).length;
}

export const readingMinutes = (body?: string) => Math.max(1, Math.round(wordCount(body) / 220));

const fmt = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export const formatDate = (d: Date) => fmt.format(d);
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);

export const hostOf = (url: string) => new URL(url).hostname.replace(/^www\./, '');
