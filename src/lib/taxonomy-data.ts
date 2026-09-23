import { getCollection } from 'astro:content';
import { slugify, valuesFor, type TaxonomyKey } from './taxonomies';

export async function getAllEntries() {
  const [reviews, news, interviews, features] = await Promise.all([
    getCollection('reviews'),
    getCollection('news'),
    getCollection('interviews'),
    getCollection('features'),
  ]);
  return [...reviews, ...news, ...interviews, ...features];
}

export async function getTaxonomyStaticPaths(key: TaxonomyKey) {
  const entries = await getAllEntries();
  const grouped = new Map<string, { value: string; entries: any[] }>();
  for (const entry of entries) {
    for (const value of valuesFor(entry, key)) {
      const slug = slugify(value);
      if (!grouped.has(slug)) grouped.set(slug, { value, entries: [] });
      grouped.get(slug)!.entries.push(entry);
    }
  }
  return [...grouped.entries()].map(([slug, data]) => ({
    params: { slug },
    props: { taxonomyKey: key, value: data.value, entries: data.entries },
  }));
}

export async function getTaxonomyIndex(key: TaxonomyKey) {
  const entries = await getAllEntries();
  const counts = new Map<string, { value: string; count: number }>();
  for (const entry of entries) {
    for (const value of valuesFor(entry, key)) {
      const slug = slugify(value);
      const current = counts.get(slug);
      counts.set(slug, { value, count: (current?.count ?? 0) + 1 });
    }
  }
  return [...counts.entries()]
    .map(([slug, data]) => ({ slug, ...data }))
    .sort((a,b) => b.count - a.count || a.value.localeCompare(b.value));
}
