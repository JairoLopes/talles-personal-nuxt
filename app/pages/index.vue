<template>
  <div class="relative min-h-screen bg-deepBlue text-myWhite overflow-x-hidden">
    <Navbar :menu-open="menuOpen" @toggle-menu="menuOpen = !menuOpen" />
    <MobileMenu :menu-open="menuOpen" @close="menuOpen = false" />

    <Home />

    <HydrationFormacao :hydrate-on-visible="{ rootMargin: '200px' }" />

    <HydrationBeneficios :hydrate-on-visible="{ rootMargin: '200px' }" />

    <HydrationPlanos :hydrate-on-visible="{ rootMargin: '200px' }" />

    <HydrationResultados :hydrate-on-visible="{ rootMargin: '1200px' }" />

    <HydrationConquistas :hydrate-on-visible="{ rootMargin: '1200px' }" />

    <HydrationFeedBack :hydrate-on-visible="{ rootMargin: '1200px' }" />

    <HydrationTimeTf :hydrate-on-visible="{ rootMargin: '1200px' }" />

    <HydrationFooter :hydrate-on-visible="{ rootMargin: '200px' }" />

    <ArrowTop />
  </div>
</template>

<script setup lang="ts">
// --- ESTADO REATIVO ---
const menuOpen = ref(false);

// --- LAZY HYDRATION DEFINITIONS ---

// FORMAÇÃO
const HydrationFormacao = defineLazyHydrationComponent(
  "visible",
  () => import("~/components/Formacao.vue"),
);

// BENEFÍCIOS
const HydrationBeneficios = defineLazyHydrationComponent(
  "visible",
  () => import("~/components/Beneficios.vue"),
);

// PLANOS
const HydrationPlanos = defineLazyHydrationComponent(
  "visible",
  () => import("~/components/Planos.vue"),
);

// RESULTADOS
const HydrationResultados = defineLazyHydrationComponent(
  "visible",
  () => import("~/components/Resultados.vue"),
);

// CONQUISTAS
const HydrationConquistas = defineLazyHydrationComponent(
  "visible",
  () => import("~/components/Conquistas.vue"),
);

// FEEDBACK
const HydrationFeedBack = defineLazyHydrationComponent(
  "visible",
  () => import("~/components/FeedBack.vue"),
);

// TIME TF
const HydrationTimeTf = defineLazyHydrationComponent(
  "visible",
  () => import("~/components/TimeTf.vue"),
);

// FOOTER
const HydrationFooter = defineLazyHydrationComponent(
  "visible",
  () => import("~/components/Footer.vue"),
);

// --- LÓGICA DE MENU E ACESSIBILIDADE ---

// Bloqueia o scroll quando o menu mobile está ativo
watch(menuOpen, (val) => {
  if (import.meta.client) {
    document.body.style.overflow = val ? "hidden" : "";
  }
});

// --- SEO META ---
useSeoMeta({
  title: "Talles Trainer | Metodologia de Resultados",
  description:
    "Consultoria esportiva e protocolos personalizados de treinamento para atletas e iniciantes.",
  ogImage: "/img/og-image.jpg",
});
</script>
