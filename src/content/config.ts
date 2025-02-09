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
    heroArtwork: z.string().optional(),
    linkLabel: z.string(),
    linkAction: z.string(),
    blocks: z.array(
      z.discriminatedUnion("type", [
        z.object({
          type: z.literal("image"),
          src: z.string(),
          caption: z.string().optional(),
          colSpan: z.number().optional(),
          mdColSpan: z.number().optional(),
          lgColSpan: z.number().optional(),
        }),
        z.object({
          type: z.literal("context"),
          title: z.string().optional(),
          content: z.string(),
          highlighted: z.boolean().optional().default(false),
          colSpan: z.number().optional(),
          mdColSpan: z.number().optional(),
          lgColSpan: z.number().optional(),
        }),
      ]),
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

// Schema for story entries
const stories = defineCollection({
  type: "content",
  schema: z.discriminatedUnion("type", [
    z.object({
      type: z.literal("image"),
      content: z.string(),
      date: z.date(),
      imageSrc: z.string(),
    }),
    z.object({
      type: z.literal("noImage"),
      content: z.string(),
      date: z.date(),
    }),
  ]),
});

export const collections = {
  work: work,
  notes: notes,
  links: links,
  music: music,
  stories: stories,
};
