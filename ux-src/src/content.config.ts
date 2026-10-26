import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    emoji: z.string(),
    theme: z.string(),
    summary: z.string(),
    horse: z.string(),
    era: z.enum(['current', 'earlier']).default('current'),
    place: z.string().optional(),
    stats: z
      .array(z.object({ emoji: z.string(), value: z.string(), label: z.string() }))
      .default([]),
  }),
});

export const collections = { work };
