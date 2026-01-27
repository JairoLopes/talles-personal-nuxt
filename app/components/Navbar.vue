<template>
  <nav
    class="fixed top-0 w-full z-40 bg-navBlack backdrop-blur-lg border-b-1 border-white/10"
  >
    <div class="max-w-5xl mx-auto px-4 p-3">
      <div class="flex justify-between items-center h-16">
        <!-- LOGO - Links para as imagens de logo -->
        <a href="#home">
          <!-- Logo para desktop -->
          <img
            src="/img/Logo/A10.png"
            alt="Logo Talles Furtado"
            class="hidden mobNav:block w-56"
            loading="lazy"
          />
          <!-- Logo para mobile -->
          <img
            src="/img/Logo/A4.png"
            alt="Logo Talles Furtado"
            class="w-13 block mobNav:hidden"
            loading="lazy"
          />
        </a>

        <!-- Container do ícone hamburguer (mobile) -->
        <div
          id="burger-zip"
          class="w-7 h-5 cursor-pointer z-40 lg:hidden"
          @click="$emit('toggleMenu')"
          aria-label="Abrir menu"
        >
          <Icon name="lucide:menu" size="30" />
        </div>

        <!-- Menu de navegação para desktop -->
        <div class="hidden lg:flex items-center space-x-8 font-extrabold">
          <!-- Links de navegação -->
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-gray-300 hover:text-gray-300 hover:drop-shadow-lg transition-all relative group py-2"
          >
            {{ link.label }}
            <!-- Efeito de underline animado -->
            <span
              class="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-mainTheme group-hover:w-full transition-all duration-500 -translate-x-1/2"
            ></span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// Define as props do componente
defineProps<{
  menuOpen: boolean;
}>();

// Define os eventos que o componente emite
defineEmits<{
  toggleMenu: [];
}>();

// Dados dos links de navegação
const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#formacao", label: "Formação" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#planos", label: "Planos" },
  { href: "#resultados", label: "Resultados" },
  { href: "#conquistas", label: "Conquistas" },
  { href: "#feedback", label: "Feedback" },
];
</script>
