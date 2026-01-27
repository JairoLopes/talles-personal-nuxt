<template>
  <div>
    <!-- Componente principal que será renderizado -->
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Talles Personal Trainer - Transformação e Resultados",
  ogTitle: "Talles Personal Trainer - Consultoria Online",
  description:
    "Metodologia exclusiva para hipertrofia e definição muscular. Veja resultados reais e junte-se ao time.",
  ogDescription: "Metodologia exclusiva para hipertrofia e definição muscular.",
  ogImage: "/img/og-image.jpg", // Imagem que aparece ao partilhar no WhatsApp/Instagram
  twitterCard: "summary_large_image",
});
</script>

<style>
/* Estilos globais para scroll suave */
html {
  scroll-behavior: smooth;
}

/* Remove scroll horizontal em todos os dispositivos */
body {
  overflow-x: hidden;
}
</style>
