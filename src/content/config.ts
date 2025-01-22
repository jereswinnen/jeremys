import { defineCollection, z } from "astro:content";

// Schema for projects
const work = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    role: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    linkLabel: z.string(),
    linkAction: z.string(),
    blocks: z.array(
      z.discriminatedUnion("type", [
        z.object({
          type: z.literal("image"),
          src: z.string(),
          caption: z.string(),
          colSpan: z.number().optional(),
          mdColSpan: z.number().optional(),
          lgColSpan: z.number().optional(),
        }),
        z.object({
          type: z.literal("context"),
          title: z.string(),
          content: z.string(),
          colSpan: z.number().optional(),
          mdColSpan: z.number().optional(),
          lgColSpan: z.number().optional(),
        }),
      ])
    ),
  }),
});

// Schema for regular notes/articles
const notes = defineCollection({
  type: "content",
  schema: z.object({
    theme: z.string().optional(),
    title: z.string(),
    publishDate: z.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Schema for link posts
const links = defineCollection({
  type: "content",
  schema: z.object({
    theme: z.string().optional(),
    title: z.string(),
    publishDate: z.date(),
    url: z.string().url(),
    note: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  work: work,
  notes: notes,
  links: links,
};
