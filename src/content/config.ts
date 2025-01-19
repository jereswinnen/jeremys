import { defineCollection, z } from "astro:content";

// Schema for projects
const work = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      tagline: z.string(),
      description: z.string(),
      role: z.string(),
      startDate: z.string(),
      endDate: z.string(),
      linkLabel: z.string().optional(),
      linkAction: z.string().url().optional(),
      themeColor: z.string(),
      heroImage: z.string().optional(),
      artwork: z
        .array(
          z.object({
            src: z.string(),
            caption: z.string().optional(),
          })
        )
        .optional(),
      details: z
        .array(
          z.object({
            title: z.string(),
            content: z.string(),
          })
        )
        .optional(),
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
