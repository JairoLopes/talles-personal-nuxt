<template>
  <section
    id="conquistas"
    class="section-style lg:bg-[linear-gradient(to_right,rgb(13,12,12,0.85),rgb(13,12,12,0.99)),url('/img/Img_Feedback/fb3.jpg')] bg-no-repeat bg-fixed bg-cover"
  >
    <div class="flex flex-col items-center w-full max-w-6xl mx-auto px-4">
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

      <div class="w-full max-w-4xl mx-auto mb-12">
        <div class="flex justify-center">
          <div
            class="inline-flex rounded-xl bg-navBlack/60 backdrop-blur-sm p-1 border border-white/10"
            role="tablist"
          >
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

      <div class="w-full max-w-5xl min-h-[600px]">
        <Transition name="fade" mode="out-in">
          <div
            v-if="currentComp"
            :key="currentComp.year"
            class="bg-navBlack/70 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-white/10 shadow-2xl"
          >
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
                aplicado. Cada ano representa um novo nível de excelência
                alcançado.
              </p>

              <div class="h-[2px] w-20 bg-mainTheme mx-auto mb-8"></div>

              <h4 class="text-xl font-bold text-white mb-2">
                {{ currentComp.title }}
              </h4>
              <p class="text-white/60 text-sm max-w-xl mx-auto">
                {{ currentComp.description }}
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div class="md:col-span-5 lg:col-span-4">
                <div
                  class="relative overflow-hidden rounded-2xl border border-white/10 aspect-[9/16] bg-black shadow-inner"
                >
                  <video
                    :key="currentComp.video"
                    class="w-full h-full object-cover"
                    :src="currentComp.video"
                    autoplay
                    muted
                    loop
                    playsinline
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"
                  ></div>
                </div>
              </div>

              <div
                class="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div
                  v-for="(item, pIdx) in currentComp.photos"
                  :key="pIdx"
                  class="group relative overflow-hidden rounded-xl aspect-[4/5] bg-navBlack"
                >
                  <NuxtImg
                    :src="item.path"
                    :alt="item.legenda"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div
                    class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4"
                  >
                    <p
                      class="text-white text-xs font-bold uppercase tracking-widest"
                    >
                      {{ item.legenda }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { animations } from "~/utils/animations";

// Interfaces para tipagem e segurança (Evita erros de TS)
interface Photo {
  path: string;
  legenda: string;
}

interface Competition {
  year: string;
  title: string;
  description: string;
  video: string;
  photos: Photo[];
}

const activeCompetition = ref(0);

const competitions: Competition[] = [
  {
    year: "2025",
    title: "Campeão Mens Physique 2025",
    description:
      "Conquista do título no campeonato CBCM, nas categorias sênior, estreante e novice.",
    video: "/video/compRecenteVideo.mp4",
    photos: [
      {
        path: "/img/meusResultados/compRecente1.jpeg",
        legenda: "Shape de Palco",
      },
      {
        path: "/img/meusResultados/CompRecente2.jpeg",
        legenda: "Top 1 Overall",
      },
    ],
  },
  {
    year: "2024",
    title: "Campeão Mens Physique 2024",
    description:
      "Consagração em Pernambuco, validando todo o trabalho de base realizado durante o ano.",
    video: "/video/talles_crop.mp4",
    photos: [
      {
        path: "/img/meusResultados/Talles_Trofeu.jpeg",
        legenda: "Momento da Premiação",
      },
      {
        path: "/img/meusResultados/campeonato_costas.jpg",
        legenda: "Expansão de Dorsal",
      },
    ],
  },
];

// O uso de '|| competitions[0]' garante que currentComp nunca seja undefined para o TS
const currentComp = computed(
  () => competitions[activeCompetition.value] || competitions[0],
);
</script>

<style scoped>
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
</style>
