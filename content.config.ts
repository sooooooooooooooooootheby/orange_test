import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
        index: defineCollection({
			type: "page",
			source: "index.md",
		}),
    },
});
