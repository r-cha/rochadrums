import { defineCollection, z } from "astro:content";

const guides = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    order: z.number().int().positive().default(1),
  }),
});

export const collections = {
  guides,
};
