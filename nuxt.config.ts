// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@vueuse/motion/nuxt",
    "@vueuse/nuxt",
    "vue3-carousel-nuxt",
  ],
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
        // Open Graph (WhatsApp, Facebook, LinkedIn)
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://talles-personal.vercel.app" },
        { property: "og:title", content: "Talles Furtado | Personal Trainer" },
        {
          property: "og:description",
          content:
          "Transforme seu corpo com o Time TF. Treinos e dietas personalizadas.",
        },
        {
          property: "og:image",
          content: "https://talles-personal.vercel.app/img/Seo_img/t1.jpeg",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },

        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Talles Furtado | Personal Trainer" },
        {
          name: "twitter:description",
          content: "Consultoria fitness e treinos personalizados.",
        },
        {
          name: "twitter:image",
          content: "https://talles-personal.vercel.app/img/Seo_img/t1.jpeg",
        },
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
