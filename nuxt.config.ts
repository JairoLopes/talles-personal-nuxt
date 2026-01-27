// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxt/image", "@vueuse/motion/nuxt", "@vueuse/nuxt", "vue3-carousel-nuxt"],
  app: {
    head: {
      title: "Talles Furtado - Personal Trainer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Transforme seu corpo com a metodologia do Personal Trainer Talles Furtado. Especialista em hipertrofia e emagrecimento.",
        },
        {
          name: "keywords",
          content:
            "personal trainer, hipertrofia, emagrecimento, musculação, treino, dieta, Talles Furtado",
        },
        { property: "og:title", content: "Talles Furtado - Personal Trainer" },
        {
          property: "og:description",
          content:
            "Transforme seu corpo com a metodologia do Personal Trainer Talles Furtado.",
        },
        { property: "og:image", content: "/img/Seo_img/t1.jpeg" },
        { property: "og:type", content: "website" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/img/Logo/dumbell.ico",
        },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
        },
      ],
    },
  },
});