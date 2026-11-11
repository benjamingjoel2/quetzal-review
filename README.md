# Quetzal Review

A story-led, practical travel blog about Guatemala, published by Tourground.
Live at https://quetzalreview.tourground.com (Vercel project `quetzal-review`).

Static [Astro](https://astro.build) site. No client-side JavaScript, no cookies, no tracking.

## Commands

```bash
npm install
npm run dev          # local dev server
npm run build        # builds to dist/
npm run check:site   # after build: JSON-LD, internal links, one h1, alt text, required pages
```

## Writing a post

Add `src/content/posts/<slug>.md`. The frontmatter is validated by `src/content.config.ts`
(title, description, dates, categories, destinations, hero photo key, operator, related, sources).

House rules:

- No invented reviews, quotes, prices or statistics. Every number needs a cited source.
- Health, entry and safety facts link the official source inline and the post sets `factsLastChecked`.
- Paid placements set `advertisement: true`, which shows the "Advertisement feature" label.
- Photos: real, freely licensed images from Wikimedia Commons only, registered with author and licence in
  `src/data/photos.ts` (they appear automatically on `/photo-credits/`).
