# Persecution Index — Content Guide

The site behaves like a lightweight WordPress magazine archive while remaining fully static.

## Core taxonomy fields

Use the same spelling consistently. These fields automatically create clickable archive pages.

```yaml
country: "Chile"
genres:
  - "Black Metal"
  - "Esoteric Black Metal"
labels:
  - "VIRUPI"
  - "IXIOL"
releaseType: "Split"
releaseDate: "2026-09-25"
tags:
  - "Esoteric"
  - "Ritual"
  - "Satanic"
```

This automatically generates links such as:

- `/country/chile/`
- `/genre/black-metal/`
- `/genre/esoteric-black-metal/`
- `/label/virupi/`
- `/release-type/split/`
- `/tag/ritual/`
- `/year/2026/`

## Recommended taxonomy vocabulary

### Genres

Prefer stable genre names rather than inventing a new variation for every article.

Examples:

- Black Metal
- Death Metal
- Black/Death Metal
- Bestial Black Metal
- Death/Thrash Metal
- Doom/Death Metal
- Grindcore
- War Metal

### Tags

Tags are descriptors rather than primary genres. Keep them useful and reusable.

Examples:

- Raw
- Ritual
- Esoteric
- Hypnotic
- Old School
- Primitive
- Occult
- Experimental
- Hellenic Influence

Avoid creating near-duplicates such as `ritualistic`, `ritual atmosphere`, `ritual black metal` when `Ritual` already exists.

## News example

```yaml
---
title: "Band announces new album"
description: "Short original description."
pubDate: 2026-09-23
author: "Editorial Staff"
featured: false
image: "/images/releases/band-album.jpg"
band: "Band"
release: "Album"
country: "Chile"
genres:
  - "Death Metal"
labels:
  - "Example Records"
releaseType: "Album"
releaseDate: "2026-10-30"
formats:
  - "CD"
  - "12\" Vinyl"
tags:
  - "Old School"
  - "Raw"
---
```

## Review example

Reviews use the same taxonomy system and may additionally include:

```yaml
recommendedFor:
  - "Band A"
  - "Band B"
bandcamp: "https://..."
instagram: "https://..."
```

## Archive behavior

Every article displays a **Filed under** block. Clicking a term opens its archive page. Related entries are selected automatically according to shared genres, tags, labels, country and release type.

The `/browse/` page acts as the central archive index, similar to WordPress category/tag archive navigation.
