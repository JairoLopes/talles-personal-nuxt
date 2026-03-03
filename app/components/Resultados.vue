<template>
  <section id="resultados" class="section-style">
    <div class="w-full max-w-7xl mx-auto px-4">
      <div class="text-center mb-12">
        <div
          v-motion="animations.slideUp"
          class="inline-flex items-center gap-2 bg-gradient-to-r from-mainTheme/15 to-secondaryTheme/15 px-4 py-1.5 rounded-full mb-4"
        >
          <Icon name="lucide:trending-up" class="w-4 h-4 text-mainTheme" />
          <span class="text-sm font-medium text-white/80">
            RESULTADOS COMPROVADOS
          </span>
        </div>

        <h1 v-motion="animations.slideUp" class="h2-style mb-4">
          Transformações Reais
        </h1>

        <p
          v-motion="animations.slideUp"
          class="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed"
        >
          Veja os resultados alcançados pelos meus alunos e pela aplicação
          consistente da minha metodologia.
        </p>
      </div>

      <div
        v-motion="animations.slideUp"
        class="relative bg-gradient-to-r from-mainTheme/10 to-secondaryTheme/10 border border-white/10 rounded-2xl p-8 mb-16 overflow-hidden"
      >
        <div
          class="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div class="lg:w-2/3">
            <h2
              class="text-2xl lg:text-3xl font-bold text-white mb-3 flex items-center gap-3"
            >
              <Icon name="lucide:users" class="w-8 h-8 text-secondaryTheme" />
              Vem pro Time TF!
            </h2>
            <p class="text-white/80 text-lg">
              Seguindo minha metodologia, somada à sua disciplina e constância,
              seremos capazes de obter resultados significativos em um tempo que
              nem você esperaria.
            </p>
          </div>
          <div class="lg:w-1/3 flex justify-center">
            <div
              class="inline-flex items-center gap-2 bg-gradient-to-r from-secondaryTheme to-yellow-500 text-deepBlue font-bold px-6 py-3 rounded-xl shadow-lg"
            >
              <Icon name="lucide:star" class="w-5 h-5" />
              <span>Junte-se a nós</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-24">
        <div
          v-motion="animations.slideUp"
          class="flex items-center justify-between mb-8"
        >
          <div>
            <h2 class="text-2xl lg:text-3xl font-bold text-white mb-2">
              Resultados dos Alunos
            </h2>
            <p class="text-white/60">
              Transformações reais alcançadas com dedicação e método
            </p>
          </div>
        </div>

        <div v-motion="animations.slideRight">
          <ClientOnly>
            <Carousel v-bind="carouselAlunosConfig" class="resultados-slider">
              <Slide v-for="(aluno, index) in alunosData" :key="index">
                <div class="px-2 w-full">
                  <div
                    class="group relative overflow-hidden rounded-xl bg-navBlack/50 border border-white/10 hover:border-mainTheme/30 transition-all duration-300"
                  >
                    <div class="aspect-[4/5] relative overflow-hidden">
                      <NuxtImg
                        :src="aluno.path"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                      />
                    </div>
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

      <div
        class="py-12 bg-white/5 rounded-3xl border border-white/5 px-4 sm:px-8"
      >
        <div v-motion="animations.slideUp" class="text-center mb-12">
          <div
            class="inline-flex items-center gap-2 bg-mainTheme/10 px-4 py-1.5 rounded-full mb-4"
          >
            <Icon name="lucide:shield-check" class="w-4 h-4 text-mainTheme" />
            <span
              class="text-sm font-bold text-mainTheme uppercase tracking-widest"
            >
              O Exemplo vem de cima
            </span>
          </div>
          <h2 class="text-3xl lg:text-4xl font-black text-white mb-4">
            Meus Resultados Pessoais
          </h2>
          <p class="text-white/60 max-w-2xl mx-auto text-base sm:text-lg">
            Não vendo apenas um protocolo, vendo um estilo de vida que eu mesmo
            sigo. A consistência na metodologia é o que garante o topo do pódio.
          </p>
        </div>

        <div v-motion="animations.slideLeft">
          <ClientOnly>
            <Carousel
              v-bind="carouselMeusResultadosConfig"
              class="meus-resultados-slider"
            >
              <Slide v-for="(resultado, index) in meusResultados" :key="index">
                <div class="px-4 py-8 w-full">
                  <div
                    class="relative group overflow-hidden rounded-2xl bg-navBlack border border-white/10 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(var(--mainTheme-rgb),0.3)]"
                  >
                    <div class="aspect-[3/4] relative overflow-hidden">
                      <NuxtImg
                        :src="resultado.path"
                        :alt="resultado.titulo"
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 bg-gradient-to-t from-deepBlue via-transparent to-transparent opacity-90"
                      />

                      <div class="absolute top-4 right-4 z-20">
                        <div
                          class="bg-gradient-to-r from-mainTheme to-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-xl"
                        >
                          Metodologia TF
                        </div>
                      </div>

                      <div
                        class="absolute bottom-0 left-0 right-0 p-6 text-left transform transition-transform duration-500"
                      >
                        <div
                          class="w-10 h-1 bg-mainTheme mb-4 rounded-full"
                        ></div>
                        <h3
                          class="text-xl font-black text-white mb-2 uppercase tracking-tight"
                        >
                          {{ resultado.titulo }}
                        </h3>
                        <p class="text-white/70 text-sm leading-relaxed">
                          {{ resultado.descricao }}
                        </p>
                      </div>
                    </div>
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

        <div
          v-motion="animations.slideUp"
          class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="bg-navBlack/40 border border-white/5 p-6 rounded-2xl text-center"
          >
            <div :class="['text-4xl font-black mb-1', stat.color]">
              {{ stat.value }}
            </div>
            <div
              class="text-white/50 text-xs uppercase font-bold tracking-widest"
            >
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { animations } from "~/utils/animations";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

// Configuração do Carousel de Alunos (Mais itens)
const carouselAlunosConfig = {
  itemsToShow: 1.2,
  wrapAround: true,
  autoplay: 3000,
  snapAlign: "center",
  breakpoints: {
    640: { itemsToShow: 2.5, snapAlign: "start" },
    1024: { itemsToShow: 4, snapAlign: "start" },
  },
};

// Configuração do Carousel "Meus Resultados" (Destaque)
const carouselMeusResultadosConfig = {
  itemsToShow: 1.1, // Mostra um pouco do próximo no mobile
  wrapAround: true,
  gap: 20,
  snapAlign: "center",
  breakpoints: {
    768: { itemsToShow: 2 },
    1024: { itemsToShow: 3 },
  },
};

const alunosData = [
  { path: "/img/img_Resultado_Alunos/first.jpeg" },
  { path: "/img/img_Resultado_Alunos/lastAlunoVerso.jpeg" },
  { path: "/img/img_Resultado_Alunos/lastAlunoFrente.jpeg" },
  { path: "/img/img_Resultado_Alunos/felipe.png" },
  { path: "/img/img_Resultado_Alunos/tai.jpeg" },
  { path: "/img/img_Resultado_Alunos/barbara.jpeg" },
  { path: "/img/img_Resultado_Alunos/julio.png" },
  { path: "/img/img_Resultado_Alunos/alunoNovo1.jpeg" },
  { path: "/img/img_Resultado_Alunos/alunoNovo2.jpeg" },
  { path: "/img/img_Resultado_Alunos/alunoNovo3.jpeg" },
  { path: "/img/img_Resultado_Alunos/alunoNovo4.jpeg" },
];

const meusResultados = [
  {
    path: "/img/profile/t26.jpeg",
    titulo: "Performance Atleta",
    descricao:
      "Foto atual: Março/2026 - Pico de densidade muscular e maturidade alcançada através do protocolo de competição.",
  },
  {
    path: "/img/profile/t3.jpeg",
    titulo: "Performance Atleta",
    descricao:
      "Pico de densidade muscular e maturidade alcançada através do protocolo de competição.",
  },
  {
    path: "/img/profile/t2.jpeg",
    titulo: "Off-Season Controlado",
    descricao:
      "Ganho de volume com qualidade, mantendo a linha estética e saúde metabólica.",
  },
  {
    path: "/img/profile/t1.jpeg",
    titulo: "Condicionamento Extremo",
    descricao:
      "Fase de finalização onde a precisão da dieta revela cada detalhe da musculatura.",
  },
];

const stats = [
  { value: "+50", label: "Alunos Transformados", color: "text-mainTheme" },
  { value: "100%", label: "Satisfação do Time", color: "text-secondaryTheme" },
  { value: "2x", label: "Campeão Mens Physique", color: "text-mainTheme" },
];
</script>

<style scoped>
/* Estilização dos Botões de Navegação */
:deep(.carousel__prev),
:deep(.carousel__next) {
  background-color: var(--mainTheme); /* Ajuste conforme sua cor principal */
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0 -10px;
  transition: all 0.3s ease;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  transform: scale(1.1);
  background-color: white;
  color: black;
}

/* Estilização da Paginação (Dots) */
:deep(.carousel__pagination-button::after) {
  background-color: rgba(255, 255, 255, 0.2);
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

:deep(.carousel__pagination-button--active::after) {
  background-color: var(--mainTheme);
  width: 25px;
  border-radius: 10px;
}

/* Efeito de foco no slide central no desktop */
@media (min-width: 1024px) {
  .meus-resultados-slider :deep(.carousel__slide--active) {
    transform: scale(1.05);
    z-index: 10;
  }
  .meus-resultados-slider :deep(.carousel__slide) {
    transition:
      transform 0.5s ease,
      opacity 0.5s ease;
    opacity: 0.5;
  }
  .meus-resultados-slider :deep(.carousel__slide--visible) {
    opacity: 1;
  }
}
</style>
