import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    timeframe: z.string(),
    role: z.string(),
    team: z.string().optional(),
    collaboration: z.string().optional(),
    metadata: z.string().optional(),
    projectType: z.string(),
    platform: z.string(),
    users: z.string(),
    protected: z.boolean().default(false),
    company: z.string(),
    logo: z.string(),
    accent: z.string(),
    cover: z.string(),
  }),
});

export const collections = { caseStudies };
