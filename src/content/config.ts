import { defineCollection, z } from "astro:content";

// Schema for projects
const projectsCollection = defineCollection({
  type: "data", // Using data since we'll store in JSON
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      tagline: z.string(),
      externalLink: z.string().url().optional(),
      description: z.string(),
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
    }),
});

// Schema for regular notes/articles
const notesCollection = defineCollection({
  type: "content", // Using content since we'll write in Markdown
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Schema for link posts
const linksCollection = defineCollection({
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
  projects: projectsCollection,
  notes: notesCollection,
  links: linksCollection,
};
