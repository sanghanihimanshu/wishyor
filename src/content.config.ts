import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx', '**/*.mdoc'], base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

const reference = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx', '**/*.mdoc'], base: "./src/content/reference" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

const researchPapers = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/researchPapers" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    readLink: z.string().optional(),
    btnTitle: z.string().optional(),
    btnLink: z.string().optional(),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx', '**/*.mdoc'], base: "./src/content/case-studies" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    content: z.string(),
    industry: z.string().optional(),
  }),
});

export const collections = { articles, reference, researchPapers , caseStudies };
