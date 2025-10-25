import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: ["@nuxt/content", "@nuxt/icon"],

	vite: {
		plugins: [tailwindcss()],
	},
	css: ["~/assets/main.css", "~/assets/tailwind.css"],

	app: {
		pageTransition: { name: "page", mode: "out-in" },
		layoutTransition: { name: 'layout', mode: 'out-in' },
		head: {
			title: "Orange Craft MC",
			htmlAttrs: {
				lang: "zh_CN",
			},
			link: [
				{ rel: "icon", type: "image/x-icon", href: "/logo.jpg" },
			],
		},
	},
});
