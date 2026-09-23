# Sepulchral Index — prototype

A deployable Astro prototype for an independent extreme metal journal and archive based in Chile.

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

Recommended settings:

- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`
- Node.js: 22

Before public launch, change `site` in `astro.config.mjs` from `https://example.com` to the real domain.

## Content

Articles live in `src/content/` as Markdown files with structured frontmatter.

- `reviews/`
- `news/`
- `interviews/`
- `features/`

The content schema is defined in `src/content.config.ts`.

## Rename the project

"Sepulchral Index" is provisional. Search/replace the name in:

- `package.json`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/layouts/BaseLayout.astro`
- `src/pages/rss.xml.js`
- `src/pages/about.astro`

The architecture itself does not depend on the final brand name.

## Next recommended steps

1. Choose final name and domain.
2. Replace all placeholder editorial content.
3. Add official cover/band images with permission or supplied press assets.
4. Connect repository to Cloudflare Pages.
5. Enable Cloudflare Web Analytics.
6. Add custom domain.
7. Later: band/label collections, search and a Git-based CMS.
