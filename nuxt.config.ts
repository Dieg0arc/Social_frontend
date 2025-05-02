// nuxt.config.ts
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxt/content", "@nuxt/image", "@nuxt/ui"],

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/": { redirect: "/login" },
  },

  typescript: {
    strict: true,
    typeCheck: true,
  },

  // Agregamos esta configuración para la compatibilidad
  nitro: {
    compressPublicAssets: true,
    compatibilityDate: "2025-05-01",
  },

  // Configuramos auto-imports para importar composables y stores automáticamente
  imports: {
    dirs: ["stores", "composables"],
  },

  compatibilityDate: "2025-05-01",
});
