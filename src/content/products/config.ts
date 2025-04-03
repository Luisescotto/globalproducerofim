import { defineCollection, z } from "astro:content";

const products = defineCollection({
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        img: z.string(),
        category: z.string(),
        price: z.number(),
        priceBox: z.number()
    }),
})

export const collections = {products}