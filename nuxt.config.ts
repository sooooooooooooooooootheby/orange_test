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
		layoutTransition: { name: "layout", mode: "out-in" },
		head: {
			title: "Orange Craft MC",
			htmlAttrs: {
				lang: "zh_CN",
			},
			link: [{ rel: "icon", type: "image/x-icon", href: "/logo.jpg" }],
		},
	},

	runtimeConfig: {
		databaseHost: process.env.DB_HOST,
		databaseUser: process.env.DB_USER,
		databasePassword: process.env.DB_PASSWORD,
		databaseDatabase: process.env.DB_NAME,
		databaseCharset: process.env.DB_CHARSET,
	},

	content: {
		preview: {
			api: "https://api.nuxt.studio",
		},
	},
});
