import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORY_SLUGS, DESTINATION_SLUGS } from './data/taxonomy';
import { PHOTO_KEYS } from './data/photo-keys';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    author: z.string().default('desk'),
    categories: z.array(z.enum(CATEGORY_SLUGS)).min(1),
    destinations: z.array(z.enum(DESTINATION_SLUGS)).default([]),
    hero: z.enum(PHOTO_KEYS),
    featured: z.boolean().default(false),
    startHere: z.boolean().default(false),
    factsLastChecked: z.coerce.date().optional(),
    // Paid placements must set this; the page then shows "Advertisement feature".
    advertisement: z.boolean().default(false),
    operator: z.object({
      name: z.string(),
      url: z.string().url(),
      pitch: z.string(),
    }),
    related: z.array(z.string()).default([]),
    sources: z
      .array(
        z.object({
          title: z.string(),
          publisher: z.string(),
          url: z.string().url(),
          accessed: z.coerce.date(),
        }),
      )
      .default([]),
  }),
});

export const collections = { posts };
