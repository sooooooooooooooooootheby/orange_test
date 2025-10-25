import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/icon'],

  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/tailwind.css"],
})