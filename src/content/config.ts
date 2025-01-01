import { defineCollection, z } from "astro:content";

// Schema for projects
const work = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      tagline: z.string(),
      linkLabel: z.string().optional(),
      linkAction: z.string().url().optional(),
      description: z.string(),
      themeColor: z.string(),
      role: z.array(
        z.object({
          tag: z.string(),
        })
      ),
      artwork: z.array(
        z.object({
          src: z.string(),
          caption: z.string().optional(),
        })
      ),
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
