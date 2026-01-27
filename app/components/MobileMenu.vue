<template>
  <div
    class="flex flex-col items-center justify-center gap-3 fixed top-0 left-0 w-full h-full bg-navBlack backdrop-blur-lg z-40 transition-all duration-300 ease-in-out"
    :class="{
      'opacity-100 pointer-events-auto h-screen': menuOpen,
      'opacity-0 pointer-events-none h-0': !menuOpen,
    }"
  >
    <!-- Botão para fechar o menu (ícone X) -->
    <button
      @click="$emit('close')"
      class="absolute top-8 right-4 text-white focus:outline-none cursor-pointer"
      aria-label="Fechar menu"
    >
      <Icon name="lucide:x" size="30" class="stroke-2" />
    </button>

    <!-- Links do menu móvel -->
    <a
      v-for="(link, index) in mobileLinks"
      :key="link.href"
      :href="link.href"
      @click="$emit('close')"
      class="text-2xl font-semibold text-white mt-4 transform transition-transform"
      :class="{
        'opacity-100 translate-y-0': menuOpen,
        'opacity-0 -translate-y-32': !menuOpen,
      }"
      :style="`transition-duration: ${300 + index * 100}ms`"
    >
      {{ link.label }}
    </a>
  </div>
</template>

<script setup lang="ts">
// Define as props do componente
defineProps<{
  menuOpen: boolean;
}>();

// Define os eventos que o componente emite
defineEmits<{
  close: [];
}>();

// Dados dos links do menu móvel
const mobileLinks = [
  { href: "#home", label: "Home" },
  { href: "#formacao", label: "Sobre" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#planos", label: "Planos" },
  { href: "#resultados", label: "Resultados" },
  { href: "#conquistas", label: "Conquistas" },
  { href: "#feedback", label: "Feedback" },
];
</script>
