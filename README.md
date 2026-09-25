# Persecution Index — V2.14

Astro site for an independent extreme metal journal & archive based in Chile.

## V2.2 highlights

- WordPress-like archive navigation without WordPress.
- Clickable taxonomy pages for **genres, countries, labels, release types, tags and years**.
- New `/browse/` archive directory with term counts.
- Article pages now show clickable `Filed under` taxonomy chips.
- Related entries are generated automatically from shared genres, tags, labels, country and release type.
- Homepage includes archive widgets for top genres, countries and labels.
- Added real Chilean entries:
  - Putrefactio / Solipnosis — *Antesala al Paroxismo*.
  - ABISMA — *Promo Demo 2026*.
- Release artwork is displayed with `object-fit: contain` to avoid unwanted cropping.
- Footer remains:
  - **Persecution Index**
  - *Independent extreme metal journal & archive based in Chile.*
- Placeholder editorial content remains removed.
- Node version target raised to 22.19.0+.

## Current real editorial entries

- PROFANATION — *Ultra-Noise Warfare* — review.
- Deathwards — *Realms of Sin* — featured / From Chile.
- Nuclearhammer — *XAOS 333* — news.
- *Thy Stellar Form* — upcoming release news.
- Putrefactio / Solipnosis — *Antesala al Paroxismo* — From Chile / news.
- ABISMA — *Promo Demo 2026* — From Chile / news.

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
- Node.js: **22.19.0 or newer**

The repository includes `.node-version` with `22.19.0`.

## Updating your current Git repository

Replace your project files with this version while keeping your existing `.git` directory, then run:

```bash
git add -A
git commit -m "Persecution Index V2.2 taxonomies"
git push
```

Cloudflare Pages should deploy automatically.

## Content

Articles live in `src/content/` as Markdown files:

- `reviews/`
- `news/`
- `interviews/`
- `features/`

Images live in `public/images/`.

See `CONTENT_GUIDE.md` for the publishing and taxonomy format.


## V2.10
Related entries now use an isolated fixed-size card layout, independent from featured/large ContentCard styles.


## V2.11

- Added NEKUS / BLOODSOAKED NECROVOID — *Funerary Rites of Ancient Doom*.
- Added Ripper — *Towards Rebirth*.
- Ripper release information is intentionally displayed as **2026** without an exact day/month.


## V2.12

- Reduced the homepage hero title size on mobile screens so “Documenting the underground beyond the feed.” remains readable without oversized wrapping.
- Desktop and section-page heading sizes remain unchanged.


## V2.13

- Added Embrace of Thorns / Invocation — *Invoking the Noumenon / Crushing the Feeble Messianic Embrace*.
- Set the new split announcement as the homepage **Featured** entry.
- Deathwards remains in the archive and From Chile section but is no longer the featured item.


## V2.14

- Replaced the Embrace of Thorns / Invocation split artwork with the corrected cover.
- The homepage Featured section now displays **two equal editorial blocks**: Embrace of Thorns / Invocation and Deathwards.
- Both Featured blocks highlight their shared **30 October 2026** release date.
- Featured cards render as two columns on desktop and stack cleanly on mobile.
