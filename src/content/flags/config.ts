import { defineCollection, z } from "astro:content";

const flags = defineCollection({
    schema: z.object({
        flagImg: z.string(),
        flagAlt: z.string()
    }),
})

export const collections = {flags}