<template>
  <section
    class="relative py-20 bg-gradient-to-b from-deepBlue via-navBlack to-deepBlue overflow-hidden"
  >
    <!-- Elementos decorativos de fundo -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-1/4 left-1/4 w-64 h-64 bg-mainTheme rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondaryTheme rounded-full blur-3xl"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      <!-- Cabeçalho -->
      <div class="text-center mb-12">
        <div
          v-motion="animations.slideUp"
          class="inline-flex items-center gap-2 bg-gradient-to-r from-mainTheme/15 to-secondaryTheme/15 px-5 py-2 rounded-full mb-6"
        >
          <Icon name="lucide:heart" class="w-5 h-5 text-mainTheme" />
          <span class="text-sm font-medium text-white/80 tracking-wider">
            FAMÍLIA TF
          </span>
        </div>

        <h2
          v-motion="animations.slideUp"
          class="text-3xl lg:text-4xl font-bold text-white mb-4"
        >
          Nossa Comunidade
        </h2>

        <p
          v-motion="animations.slideUp"
          class="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed mb-8"
        >
          Conheça alguns membros do Time TF que estão transformando suas vidas
          através da disciplina, dedicação e método comprovado.
        </p>
      </div>

      <!-- Carousel de Membros -->
      <div class="relative mb-16 mt-4">
        <!-- Carousel -->
        <div v-motion="animations.slideRight">
          <ClientOnly>
            <Carousel
              v-model="currentSlide"
              :items-to-show="4"
              :wrap-around="true"
              :autoplay="3000"
              :pause-autoplay-on-hover="true"
              :transition="600"
              class="timeteam-slider"
            >
              <Slide v-for="(member, index) in timeMembers" :key="index">
                <div class="px-2">
                  <div
                    class="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-navBlack/80 to-deepBlue/80 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-mainTheme/30 hover:-translate-y-2"
                  >
                    <!-- Imagem do membro -->
                    <div
                      class="aspect-square relative overflow-hidden rounded-t-2xl"
                    >
                      <NuxtImg
                        :src="member.path"
                        :alt="`${member.name} - ${member.role}`"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        format="webp"
                        :modifiers="{ quality: 85 }"
                      />

                      <!-- Overlay gradiente -->
                      <div
                        class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                      />

                      <!-- Badge de membro -->
                      <div class="absolute top-4 left-4">
                        <div
                          class="bg-gradient-to-r from-mainTheme/90 to-blue-600/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm"
                        >
                          TF Member
                        </div>
                      </div>
                    </div>

                    <!-- Informações do membro -->
                    <div class="p-6">
                      <div class="flex items-center justify-between mb-3">
                        <h3
                          class="text-lg font-bold text-white group-hover:text-mainTheme transition-colors duration-300"
                        >
                          {{ member.name }}
                        </h3>
                        <div class="flex">
                          <Icon
                            v-for="i in 5"
                            :key="i"
                            name="lucide:star"
                            class="w-3 h-3 text-secondaryTheme fill-secondaryTheme"
                          />
                        </div>
                      </div>

                      <p class="text-white/70 text-sm mb-4">
                        {{ member.role }}
                      </p>

                      <div
                        class="flex items-center gap-2 text-xs text-white/60"
                      >
                        <Icon
                          name="lucide:heart"
                          class="w-3 h-3 text-mainTheme"
                        />
                        <span>Ativo na Comunidade</span>
                      </div>
                    </div>

                    <!-- Efeito de brilho no hover -->
                    <div
                      class="absolute inset-0 bg-gradient-to-br from-mainTheme/0 via-mainTheme/0 to-mainTheme/0 group-hover:via-mainTheme/5 group-hover:to-mainTheme/10 transition-all duration-500 pointer-events-none"
                    />
                  </div>
                </div>
              </Slide>

              <template #addons>
                <Navigation />
                <Pagination />
              </template>
            </Carousel>
          </ClientOnly>
        </div>
      </div>

      <!-- Mensagem final -->
      <div v-motion="animations.slideUp" class="text-center max-w-3xl mx-auto">
        <div class="inline-block relative">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-mainTheme/20 to-secondaryTheme/20 rounded-2xl blur-xl"
          ></div>
          <p class="text-white/70 text-lg relative z-10">
            Faça parte dessa família que cresce a cada dia, compartilhando
            conquistas, superando desafios e construindo uma versão melhor de si
            mesmo.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { animations } from "~/utils/animations";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

// Estado para controlar o slide atual
const currentSlide = ref(0);

// Dados dos membros do time
const timeMembers = [
  {
    path: "/img/time_TF/tf1.jpeg",
    name: "Membro TF",
    role: "Ativo há 8 meses",
  },
  {
    path: "/img/time_TF/tf2.jpeg",
    name: "Membro TF",
    role: "Transformação em andamento",
  },
  {
    path: "/img/time_TF/tf3.jpeg",
    name: "Membro TF",
    role: "Foco total nos objetivos",
  },
  {
    path: "/img/time_TF/tf4.jpeg",
    name: "Membro TF",
    role: "Disciplina e evolução",
  },
  {
    path: "/img/time_TF/tf5.jpeg",
    name: "Membro TF",
    role: "Resultados consistentes",
  },
  {
    path: "/img/time_TF/tf6.jpeg",
    name: "Membro TF",
    role: "Dedicação máxima",
  },
];
</script>

<style scoped>
/* Estilos para o carousel do time */
:deep(.carousel__slide) {
  padding: 10px 15px;
}

@media (max-width: 768px) {
  :deep(.carousel__slide) {
    padding: 10px 0;
  }
}

/* Ajustes responsivos para o carousel do time */
@media (max-width: 1280px) {
  :deep(.timeteam-slider .carousel__slide) {
    min-width: calc(33.333% - 20px);
  }
}

@media (max-width: 1024px) {
  :deep(.timeteam-slider .carousel__slide) {
    min-width: calc(50% - 20px);
  }
}

@media (max-width: 768px) {
  :deep(.timeteam-slider .carousel__slide) {
    min-width: calc(100% - 20px);
  }
}
</style>
