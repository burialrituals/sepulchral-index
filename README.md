# Sepulchral Index — V2

Astro site for an independent extreme metal journal and archive based in Chile.

## What changed in V2

- Reduced and rebalanced hero section.
- New archival/index visual language (`INDEX / 001`, `CHILE / MMXXVI`).
- Real cover art integrated into cards and articles.
- Featured layout redesigned around Deathwards — *Realms of Sin*.
- Editorial review cards redesigned with a stronger lead-card hierarchy.
- `From Chile` promoted to a dedicated visual section and now includes news, reviews, interviews and features.
- Latest Interviews section is supported and appears automatically when interview content exists.
- News redesigned as image-led signal cards.
- Article pages now display their release artwork.
- Header marker changed from `PROVISIONAL` to `EST. MMXXVI`.
- Microtypography and metadata system refined.
- About page Lineage text updated.
- Editorial independence section removed.
- Placeholder editorial articles removed.
- Cloudflare Pages canonical URL configured.

## Included real editorial entries

- PROFANATION — *Ultra-Noise Warfare* — short review.
- Deathwards — *Realms of Sin* — From Chile / featured news.
- Nuclearhammer — *XAOS 333* — release news.
- *Thy Stellar Form* — upcoming release news via Invictus Productions.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The generated site is written to `dist/`.

## Cloudflare Pages

- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`
- Node.js: 22

## Updating your current Git repository

Copy the contents of this V2 folder over your existing local `sepulchral-index` project, then run:

```bash
git add .
git commit -m "Sepulchral Index V2"
git push
```

Cloudflare Pages should deploy the new version automatically.

## Content

Articles live in `src/content/` as Markdown files with structured frontmatter:

- `reviews/`
- `news/`
- `interviews/`
- `features/`

Release images currently live in `public/images/releases/`.
