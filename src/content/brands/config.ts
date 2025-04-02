import { defineCollection, z } from "astro:content";

const brands = defineCollection({
    schema: z.object({
        brandImg: z.string(),
        brandAlt: z.string()
    }),
})

export const collections = {brands}