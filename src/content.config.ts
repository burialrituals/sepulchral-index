import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const common = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  author: z.string().default('Editorial Staff'),
  featured: z.boolean().default(false),
  image: z.string().optional(),
});

const releaseFields = {
  band: z.string().optional(),
  release: z.string().optional(),
  country: z.string().optional(),
  city: z.string().optional(),
  genres: z.array(z.string()).default([]),
  label: z.string().optional(),
  releaseType: z.string().optional(),
  formats: z.array(z.string()).default([]),
  releaseDate: z.string().optional(),
};

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/reviews' }),
  schema: common.extend({
    band: z.string(),
    release: z.string(),
    country: z.string(),
    city: z.string().optional(),
    genres: z.array(z.string()),
    label: z.string().optional(),
    releaseType: z.string().optional(),
    formats: z.array(z.string()).default([]),
    releaseDate: z.string().optional(),
    bandcamp: z.string().url().optional(),
    instagram: z.string().url().optional(),
    oratorivm: z.string().url().optional(),
    recommendedFor: z.array(z.string()).default([]),
  })
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
  schema: common.extend({
    ...releaseFields,
    sourceUrl: z.string().url().optional(),
  })
});

const interviews = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/interviews' }),
  schema: common.extend({
    band: z.string(),
    country: z.string(),
    genres: z.array(z.string()).default([]),
  })
});

const features = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/features' }),
  schema: common.extend({
    country: z.string().optional(),
    topic: z.string().optional(),
  })
});

export const collections = { reviews, news, interviews, features };
