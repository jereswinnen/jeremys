import { defineCollection, z } from "astro:content";

// Schema for projects
const work = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    tagline: z.string().optional(),
    description: z.string().optional(),
    role: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    heroArtwork: z.string().optional(),
    artwork: z
      .array(
        z.object({
          src: z.string(),
          caption: z.string().optional(),
          colSpan: z.number().optional(),
          mdColSpan: z.number().optional(),
          lgColSpan: z.number().optional(),
        }),
      )
      .optional(),
  }),
});

// Schema for articles
const articles = defineCollection({
  type: "content",
  schema: z.object({
    theme: z.string().optional(),
    title: z.string(),
    date: z.date(),
    draft: z.boolean().default(false),
  }),
});

// Schema for notes
const notes = defineCollection({
  type: "content",
  schema: z.object({
    theme: z.string().optional(),
    title: z.string(),
    date: z.date(),
    draft: z.boolean().default(false),
  }),
});

// Schema for link posts
const links = defineCollection({
  type: "content",
  schema: z.object({
    theme: z.string().optional(),
    date: z.date(),
    title: z.string(),
    url: z.string().url(),
    draft: z.boolean().default(false),
  }),
});

// Schema for book posts
const books = defineCollection({
  type: "content",
  schema: z.object({
    theme: z.string().optional(),
    date: z.date(),
    title: z.string(),
    author: z.string(),
    cover: z.string(),
    rating: z.string().optional(),
    url: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Schema for music entries
const music = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    artist: z.string(),
    date: z.date(),
    albumCover: z.string(),
  }),
});

export const collections = {
  work: work,
  articles: articles,
  notes: notes,
  links: links,
  books: books,
  music: music,
};
