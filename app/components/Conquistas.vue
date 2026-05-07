<!--
  =====================================================================
  Conquistas.vue - Seção de Conquistas do Personal Trainer
  Exibe as premiações e registros de competições em abas por ano.
  A aba "2026" contém carrosséis separados para "Palco" e "Preparação".
  =====================================================================
-->
<template>
  <section
    id="conquistas"
    class="section-style lg:bg-[linear-gradient(to_right,rgb(13,12,12,0.85),rgb(13,12,12,0.99)),url('/img/Img_Feedback/fb3.jpg')] bg-no-repeat bg-fixed bg-cover"
  >
    <div class="flex flex-col items-center w-full max-w-6xl mx-auto px-4">
      <!-- ========== CABEÇALHO ========== -->
      <div class="text-center mb-10" v-motion="animations.slideUp">
        <h2 class="h2-style">Conquistas</h2>
        <p
          class="text-white/80 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed"
        >
          Há algum tempo venho me dedicando como atleta de fisiculturismo, e
          desde que comecei a aplicar o protocolo em meus treinos e rotina
          alimentar, venho conquistando resultados significativos,
          consequentemente premiações em campeonatos.
        </p>
      </div>

      <!-- ========== ABAS DE NAVEGAÇÃO POR ANO ========== -->
      <div class="w-full max-w-4xl mx-auto mb-12">
        <div class="flex justify-center">
          <div
            class="inline-flex rounded-xl bg-navBlack/60 backdrop-blur-sm p-1 border border-white/10"
            role="tablist"
          >
            <!-- Botão de cada ano -->
            <button
              v-for="(competition, index) in competitions"
              :key="competition.year"
              role="tab"
              :aria-selected="activeCompetition === index"
              :class="[
                'px-8 py-3 rounded-lg font-bold transition-all duration-300 text-sm sm:text-base cursor-pointer',
                activeCompetition === index
                  ? competition.year === '2025'
                    ? 'bg-gradient-to-r from-secondaryTheme to-yellow-600 text-deepBlue shadow-lg'
                    : 'bg-gradient-to-r from-mainTheme to-blue-600 text-white shadow-lg'
                  : 'text-white/50 hover:text-white/80 hover:bg-white/5',
              ]"
              @click="activeCompetition = index"
            >
              {{ competition.year }}
            </button>
          </div>
        </div>
      </div>

      <!-- ========== CONTEÚDO DA ABA SELECIONADA ========== -->
      <div class="w-full max-w-5xl min-h-[600px]">
        <Transition name="fade" mode="out-in">
          <div
            v-if="currentComp"
            :key="currentComp.year"
            class="bg-navBlack/70 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-white/10 shadow-2xl"
          >
            <!-- Título e descrição da competição -->
            <div class="text-center mb-10">
              <h3
                class="text-2xl sm:text-3xl font-black text-white mb-2 uppercase tracking-tight"
              >
                Trajetória Vitoriosa
              </h3>
              <p
                class="text-secondaryTheme font-medium mb-6 text-sm sm:text-base"
              >
                Consecutividade nas conquistas comprova a eficácia do método
                aplicado.
              </p>
              <div class="h-[2px] w-20 bg-mainTheme mx-auto mb-8"></div>
              <h4 class="text-xl font-bold text-white mb-2">
                {{ currentComp.title }}
              </h4>
              <p class="text-white/60 text-sm max-w-xl mx-auto">
                {{ currentComp.description }}
              </p>
            </div>

            <!-- Seções de mídia (carrosséis) -->
            <div
              v-for="(section, sIdx) in currentComp.sections"
              :key="sIdx"
              class="mb-12 last:mb-0"
            >
              <!-- Subtítulo da seção -->
              <div class="text-center mb-6">
                <h5 class="text-lg sm:text-xl font-bold text-white mb-2">
                  {{ section.title }}
                </h5>
                <p class="text-white/60 text-sm max-w-lg mx-auto">
                  {{ section.description }}
                </p>
              </div>

              <!-- Carrossel de mídia (ClientOnly evita problemas de SSR) -->
              <ClientOnly>
                <Carousel
                  v-bind="getCarouselConfig(section.media.length)"
                  class="conquistas-slider"
                >
                  <Slide v-for="(media, mIdx) in section.media" :key="mIdx">
                    <div class="px-2 h-full">
                      <div
                        class="group relative overflow-hidden rounded-xl bg-navBlack border border-white/10 h-full"
                      >
                        <!-- Se for imagem -->
                        <template v-if="media.type === 'image'">
                          <div
                            class="aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden"
                          >
                            <NuxtImg
                              :src="media.path"
                              :alt="media.legenda || ''"
                              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              loading="lazy"
                              format="webp"
                              :modifiers="{ quality: 80 }"
                            />
                            <!-- Overlay com legenda (aparece no hover em desktop) -->
                            <div
                              class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                            >
                              <p
                                class="text-white text-xs font-bold uppercase tracking-widest"
                              >
                                {{ media.legenda }}
                              </p>
                            </div>
                          </div>
                        </template>

                        <!-- Se for vídeo -->
                        <template v-else-if="media.type === 'video'">
                          <div
                            class="aspect-[9/16] sm:aspect-[3/4] relative bg-black"
                          >
                            <video
                              :src="media.path"
                              class="w-full h-full object-cover"
                              autoplay
                              muted
                              loop
                              playsinline
                              preload="metadata"
                            ></video>
                            <!-- Overlay gradiente sutil -->
                            <div
                              class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"
                            ></div>
                          </div>
                        </template>
                      </div>
                    </div>
                  </Slide>

                  <!-- Adicionais do carrossel (setas e paginação) -->
                  <template #addons>
                    <Navigation />
                    <Pagination />
                  </template>
                </Carousel>
              </ClientOnly>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// ========== IMPORTAÇÕES ==========
import { ref, computed } from "vue";
import { animations } from "~/utils/animations";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

// ========== INTERFACES (TIPAGEM) ==========

/** Representa um único item de mídia (imagem ou vídeo) */
interface MediaItem {
  /** Tipo de mídia: 'image' para fotos, 'video' para vídeos */
  type: "image" | "video";
  /** Caminho do arquivo a partir da pasta /public */
  path: string;
  /** Texto descritivo (legenda) exibido ao passar o mouse */
  legenda: string;
}

/** Representa uma seção de mídia dentro da competição */
interface CompetitionSection {
  /** Título da seção (ex: "Palco", "Preparação") */
  title: string;
  /** Breve descrição do contexto da seção */
  description: string;
  /** Lista de itens de mídia (fotos e vídeos) */
  media: MediaItem[];
}

/** Representa uma competição (aba) */
interface Competition {
  /** Ano da competição (ex: "2026") */
  year: string;
  /** Título principal da competição */
  title: string;
  /** Descrição geral da competição */
  description: string;
  /** Uma ou mais seções de mídia */
  sections: CompetitionSection[];
}

// ========== ESTADO REATIVO ==========

/** Índice da aba atualmente ativa (0 = 2026, 1 = 2025, 2 = 2024) */
const activeCompetition = ref(0);

// ========== DADOS DAS COMPETIÇÕES ==========

const competitions: Competition[] = [
  // 2026 - Muscle Contest Nordeste (duas seções: Palco e Preparação)
  {
    year: "2026",
    title: "Muscle Contest Nordeste • 18 de Abril de 2026",
    description:
      "Excelente desempenho no Muscle Contest Nordeste, exibindo um físico equilibrado e condicionamento de alto nível. A evolução na qualidade muscular e presença de palco refletem a consistência do trabalho e a aplicação disciplinada do protocolo.",
    sections: [
      {
        title: "Momento do Palco",
        description:
          "Registros do dia da competição: poses, comparações e a energia única que só o palco proporciona.",
        media: [
          {
            type: "video",
            path: "/img/Competicao2026/Palco/videoPalco.mp4",
            legenda: "Apresentação no Palco",
          },
          {
            type: "image",
            path: "/img/Competicao2026/Palco/compFrente.jpeg",
            legenda: "",
          },
          {
            type: "image",
            path: "/img/Competicao2026/Palco/compFrenteGrupo.jpeg",
            legenda: "Competidores",
          },
          {
            type: "image",
            path: "/img/Competicao2026/Palco/CompFrenteGrupo2.jpeg",
            legenda: "",
          },
          {
            type: "image",
            path: "/img/Competicao2026/Palco/medalhasFrente.jpeg",
            legenda: "Premiação",
          },
          {
            type: "image",
            path: "/img/Competicao2026/Palco/medalhasFrente2.jpeg",
            legenda: "",
          },
          {
            type: "image",
            path: "/img/Competicao2026/Palco/pose_costas.jpeg",
            legenda: "",
          },
          {
            type: "image",
            path: "/img/Competicao2026/Palco/pose_costas2.jpeg",
            legenda: "",
          },
          {
            type: "image",
            path: "/img/Competicao2026/Palco/pose_frente.jpeg",
            legenda: "",
          },
        ],
      },
      {
        title: "Preparação",
        description:
          "Bastidores da fase de preparação: treinos, poses de avaliação e todo o trabalho que antecede o grande dia.",
        media: [
          {
            type: "video",
            path: "/img/Competicao2026/Preparacao/preparacaoVideo1.mp4",
            legenda: "Treino de Preparação",
          },
          {
            type: "image",
            path: "/img/Competicao2026/Preparacao/poseCasaCostas.jpeg",
            legenda: "",
          },
          {
            type: "image",
            path: "/img/Competicao2026/Preparacao/poseCasaCostas2.jpeg",
            legenda: "",
          },
          {
            type: "image",
            path: "/img/Competicao2026/Preparacao/poseCasaFrente.jpeg",
            legenda: "Avaliação Frente",
          },
          {
            type: "image",
            path: "/img/Competicao2026/Preparacao/poseCasaFrente2.jpeg",
            legenda: "",
          },
          {
            type: "image",
            path: "/img/Competicao2026/Preparacao/poseCasaFrente3.jpeg",
            legenda: "Evolução",
          },
          {
            type: "image",
            path: "/img/Competicao2026/Preparacao/poseCasaFrente4.jpeg",
            legenda: "",
          },
          {
            type: "image",
            path: "/img/Competicao2026/Preparacao/poseCasaFrente5.jpeg",
            legenda: "",
          },
        ],
      },
    ],
  },

  // 2025
  {
    year: "2025",
    title: "Campeão Mens Physique 2025",
    description:
      "Conquista do título no campeonato CBCM, nas categorias sênior, estreante e novice.",
    sections: [
      {
        title: "Registros da Competição",
        description: "Momentos marcantes da conquista do título em 2025.",
        media: [
          {
            type: "video",
            path: "/video/compRecenteVideo.mp4",
            legenda: "Vídeo da Competição",
          },
          {
            type: "image",
            path: "/img/meusResultados/compRecente1.jpeg",
            legenda: "Shape de Palco",
          },
          {
            type: "image",
            path: "/img/meusResultados/CompRecente2.jpeg",
            legenda: "Top 1 Overall",
          },
        ],
      },
    ],
  },

  // 2024
  {
    year: "2024",
    title: "Campeão Mens Physique 2024",
    description:
      "Consagração em Pernambuco, validando todo o trabalho de base realizado durante o ano.",
    sections: [
      {
        title: "Registros da Competição",
        description: "Imagens e vídeos da vitória em 2024.",
        media: [
          {
            type: "video",
            path: "/video/talles_crop.mp4",
            legenda: "Vídeo da Competição",
          },
          {
            type: "image",
            path: "/img/meusResultados/Talles_Trofeu.jpeg",
            legenda: "Momento da Premiação",
          },
          {
            type: "image",
            path: "/img/meusResultados/campeonato_costas.jpg",
            legenda: "Expansão de Dorsal",
          },
        ],
      },
    ],
  },
];

// ========== COMPUTED ==========

const currentComp = computed(
  () => competitions[activeCompetition.value] || competitions[0],
);

// ========== MÉTODOS ==========

/**
 * Retorna a configuração do carrossel com base na quantidade de itens.
 * Usa `as const` nos literais para compatibilidade de tipos estrita.
 */
function getCarouselConfig(totalItems: number) {
  return {
    itemsToShow: 1.2,
    wrapAround: true,
    autoplay: 4000,
    pauseAutoplayOnHover: true,
    transition: 600,
    snapAlign: "center" as const, // literal type
    breakpoints: {
      // A partir de 640px: mostra 2 itens
      640: {
        itemsToShow: Math.min(2, totalItems),
        snapAlign: "start" as const,
      },
      // A partir de 1024px: mostra até 3 itens
      1024: {
        itemsToShow: Math.min(3, totalItems),
        snapAlign: "start" as const,
      },
    },
  };
}
</script>

<style scoped>
/* ========== TRANSIÇÃO DE FADE ENTRE ABAS ========== */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from {
  opacity: 0;
  transform: scale(0.98) translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: scale(0.98) translateY(-20px);
}

/* ========== ESTILIZAÇÃO DOS BOTÕES DE NAVEGAÇÃO DO CARROSSEL ========== */
:deep(.carousel__prev),
:deep(.carousel__next) {
  background-color: var(--color-mainTheme, #1e90ff);
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  transition: all 0.3s ease;
  margin: 0 -5px;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  transform: scale(1.15);
  background-color: white;
  color: black;
}

/* ========== ESTILIZAÇÃO DOS INDICADORES DE PAGINAÇÃO (DOTS) ========== */
:deep(.carousel__pagination-button::after) {
  background-color: rgba(255, 255, 255, 0.3);
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

:deep(.carousel__pagination-button--active::after) {
  background-color: var(--color-mainTheme, #1e90ff);
  width: 25px;
  border-radius: 10px;
}

/* ========== AJUSTES RESPONSIVOS EXTRAS ========== */
@media (max-width: 640px) {
  :deep(.conquistas-slider .carousel__slide) {
    min-width: calc(85% - 16px);
  }
}
</style>
