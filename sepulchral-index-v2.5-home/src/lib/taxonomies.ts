export const TAXONOMIES = [
  { key: 'genre', label: 'Genres' },
  { key: 'country', label: 'Countries' },
  { key: 'label', label: 'Labels' },
  { key: 'release-type', label: 'Release Types' },
  { key: 'tag', label: 'Tags' },
  { key: 'year', label: 'Years' },
] as const;

export type TaxonomyKey = typeof TAXONOMIES[number]['key'];

export function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function valuesFor(entry: any, key: TaxonomyKey): string[] {
  const d = entry.data ?? {};
  if (key === 'genre') return d.genres ?? [];
  if (key === 'country') return d.country ? [d.country] : [];
  if (key === 'label') return d.labels ?? (d.label ? [d.label] : []);
  if (key === 'release-type') return d.releaseType ? [d.releaseType] : [];
  if (key === 'tag') return d.tags ?? [];
  if (key === 'year') {
    const raw = d.releaseDate || d.pubDate;
    if (!raw) return [];
    const text = raw instanceof Date ? String(raw.getFullYear()) : String(raw);
    const match = text.match(/\b(19|20)\d{2}\b/);
    return match ? [match[0]] : [];
  }
  return [];
}

export function hrefFor(key: TaxonomyKey, value: string) {
  return `/${key}/${slugify(value)}/`;
}

export function labelForCollection(collection: string) {
  return collection === 'reviews' ? 'Review'
    : collection === 'news' ? 'News'
    : collection === 'interviews' ? 'Interview'
    : 'Feature';
}

export function hrefForEntry(entry: any) {
  return `/${entry.collection}/${entry.id}/`;
}

export function allTaxonomyLinks(entry: any) {
  const order: TaxonomyKey[] = ['country','genre','label','release-type','tag','year'];
  return order.flatMap((key) =>
    valuesFor(entry, key).map((value) => ({ key, value, href: hrefFor(key, value) }))
  );
}

export function relatedScore(source: any, candidate: any) {
  if (source.collection === candidate.collection && source.id === candidate.id) return -1;
  let score = 0;
  const sourceGenres = new Set(valuesFor(source, 'genre'));
  const sourceTags = new Set(valuesFor(source, 'tag'));
  const sourceLabels = new Set(valuesFor(source, 'label'));
  for (const x of valuesFor(candidate, 'genre')) if (sourceGenres.has(x)) score += 3;
  for (const x of valuesFor(candidate, 'tag')) if (sourceTags.has(x)) score += 2;
  for (const x of valuesFor(candidate, 'label')) if (sourceLabels.has(x)) score += 2;
  if (source.data.country && source.data.country === candidate.data.country) score += 2;
  if (source.data.releaseType && source.data.releaseType === candidate.data.releaseType) score += 1;
  return score;
}
