import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

// Starting-point collections for the GraphCMS migration (item 5 fills these in).
// Schemas mirror the verified shape of old_data.json (2 workshops, 10 events).
// Entry files go in src/content/{workshops,events}/ — one JSON per record.

const workshops = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/workshops" }),
  schema: z.object({
    cmsId: z.string().optional(),
    name: z.string(),
    slug: z.string(),
    description: z.object({
      html: z.string(),
      markdown: z.string().optional(),
      text: z.string().optional(),
    }),
    materials: z.string().url().optional(),
    prework: z.string().url().optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/events" }),
  schema: z.object({
    cmsId: z.string().optional(),
    startTime: z.coerce.date(),
    endTime: z.coerce.date(),
    participants: z.number().nullable().optional(),
    facebook: z.string().url().nullable().optional(),
    evenea: z.string().url().nullable().optional(),
    address: z.object({
      name: z.string().nullable().optional(),
      country: z.string().optional(),
      city: z.string().optional(),
      street: z.string().optional(),
      zipCode: z.string().nullable().optional(),
    }),
    workshop: reference("workshops"),
  }),
});

export const collections = { workshops, events };
