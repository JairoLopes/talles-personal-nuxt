<template>
  <button
    v-show="showArrow"
    class="fixed bottom-3 right-0 z-40 md:hidden p-3 pt-5 transition-all duration-300"
    :class="{
      'opacity-100': showArrow,
      'opacity-0 pointer-events-none': !showArrow,
    }"
    @click.prevent="scrollToTop"
  >
    <Icon name="ic:baseline-arrow-upward" class="text-3xl animate-bounce" />
  </button>
</template>

<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";

// 2.função para obter a posição Y do scroll
const { y } = useWindowScroll();

// 3. Define o limite de scroll (em pixels) para mostrar o botão
const scrollThreshold = 300;

// 4. Compute uma variável reativa baseada na posição do scroll
const showArrow = computed(() => y.value > scrollThreshold);

// 5. Função para rolar suavemente ao topo
const scrollToTop = () => {
  // Alterar o valor reativo 'y.value' fará a janela rolar para essa posição
  y.value = 0;
};
</script>
