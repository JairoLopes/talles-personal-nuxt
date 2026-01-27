<template>
  <section
    id="home"
    class="min-h-screen relative overflow-hidden bg-deepBlue pt-10 px-7"
  >
    <!-- Background com gradiente animado -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-deepBlue via-navBlack to-deepBlue"
    >
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute top-1/4 left-1/4 w-96 h-96 bg-mainTheme rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"
        ></div>
        <div
          class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondaryTheme rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000"
        ></div>
      </div>
    </div>

    <!-- Container principal -->
    <div
      class="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-12"
    >
      <!-- Coluna esquerda - Conteúdo textual -->
      <div class="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
        <div v-motion="animations.slideUp" class="max-w-2xl">
          <!-- Badge de profissional -->
          <div
            v-motion="animations.scaleIn"
            class="inline-flex items-center gap-2 bg-gradient-to-r from-mainTheme/20 to-secondaryTheme/20 border border-mainTheme/30 px-4 py-2 rounded-full mb-6"
          >
            <Icon name="lucide:award" class="w-4 h-4 text-secondaryTheme" />
            <span class="text-sm font-medium text-white/80"
              >Personal Trainer Certificado</span
            >
          </div>

          <!-- Título principal -->
          <h1
            v-motion="animations.slideUp"
            class="text-center lg:text-left text-4xl sm:text-5xl space-x-3 lg:text-6xl xl:text-7xl font-bold leading-tight mb-4"
          >
            <span class="gradient-text2 lg:block">Talles</span>
            <span class="gradient-text lg:block">Furtado</span>
          </h1>

          <!-- Subtítulo -->
          <div v-motion="animations.fadeIn" class="mb-6">
            <div class="flex items-center gap-3 mb-2">
              <Icon
                name="lucide:dumbbell"
                class="w-6 h-6 text-secondaryTheme"
              />
              <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                Especialista em Hipertrofia e Emagrecimento
              </h2>
            </div>

            <!-- Texto rotativo com transição -->
            <div class="h-8 overflow-hidden">
              <transition name="text-rotate" mode="out-in">
                <p
                  :key="currentTextIndex"
                  class="text-lg text-center lg:text-left sm:text-xl text-mainTheme font-semibold"
                >
                  {{ texts[currentTextIndex] }}
                </p>
              </transition>
            </div>
          </div>

          <!-- Descrição -->
          <p
            v-motion="animations.slideUp"
            class="text-white/80 text-base sm:text-lg leading-relaxed mb-8"
          >
            <strong>Bacharel em Educação Física</strong>, atleta de
            fisiculturismo e praticante há mais de <strong>10 anos</strong>.
            Dedico minha carreira a transformar vidas através do esporte,
            combinando ciência, experiência prática e acompanhamento
            personalizado.
          </p>

          <!-- Estatísticas -->
          <div
            v-motion="animations.slideUp"
            class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
          >
            <div
              v-for="(stat, index) in stats"
              :key="stat.label"
              v-motion="staggerAnimations.scaleIn(index)"
              class="text-center bg-navBlack/50 backdrop-blur-sm rounded-lg p-4 border border-white/10"
            >
              <div class="text-2xl font-bold text-mainTheme mb-1">
                {{ stat.value }}
              </div>
              <div class="text-xs text-white/70">{{ stat.label }}</div>
            </div>
          </div>

          <!-- Botões de ação -->
          <div
            v-motion="animations.slideUp"
            class="flex flex-col sm:flex-row gap-4"
          >
            <!-- Botão para ver planos -->
            <a
              href="#planos"
              class="group flex items-center justify-center gap-3 bg-gradient-to-r from-mainTheme to-blue-600 hover:from-blue-500 hover:to-mainTheme text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-mainTheme/30"
            >
              <span>Ver Planos</span>
              <Icon
                name="lucide:arrow-right"
                class="w-5 h-5 group-hover:translate-x-1 transition-transform"
              />
            </a>

            <!-- Botão do WhatsApp -->
            <a
              href="https://api.whatsapp.com/send/?phone=558198955665&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 border border-green-500/30"
            >
              <Icon name="logos:whatsapp-icon" class="text-2xl" />
              <span>Fale no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Coluna direita - Imagem -->
      <div class="lg:w-1/2 flex justify-center items-center">
        <div v-motion="animations.scaleIn" class="relative">
          <!-- Moldura decorativa -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-mainTheme to-secondaryTheme rounded-full blur-2xl opacity-20 animate-pulse"
          ></div>
          <div
            class="absolute -inset-4 border-2 border-mainTheme/30 rounded-full animate-spin-slow"
          ></div>

          <!-- Imagem principal -->
          <div v-motion="animations.scaleIn" class="relative z-10">
            <NuxtImg
              src="/img/Img_Hero/profile2.png"
              alt="Talles Furtado - Personal Trainer"
              sizes="sm:350px lg:450px"
              class="w-[280px] sm:w-[350px] lg:w-[450px] rounded-2xl shadow-2xl shadow-mainTheme/30 border-4 border-white/10"
              format="webp"
              :modifiers="{ quality: 85 }"
            />
          </div>

          <!-- Card flutuante - Experiência -->
          <div
            v-motion="animations.slideLeft"
            class="absolute -bottom-6 -left-6 bg-navBlack/80 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow-xl"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-mainTheme/20 flex items-center justify-center"
              >
                <Icon name="lucide:dumbbell" class="w-5 h-5 text-mainTheme" />
              </div>
              <div>
                <div class="text-white font-bold">+10 anos</div>
                <div class="text-white/60 text-xs">Experiência</div>
              </div>
            </div>
          </div>

          <!-- Card flutuante - Campeonatos -->
          <div
            v-motion="animations.slideLeft"
            class="absolute -top-6 -right-6 bg-navBlack/80 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow-xl"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-secondaryTheme/20 flex items-center justify-center"
              >
                <Icon name="lucide:award" class="w-5 h-5 text-secondaryTheme" />
              </div>
              <div>
                <div class="text-white font-bold">2x</div>
                <div class="text-white/60 text-xs">Campeão</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Indicador de scroll -->
    <div
      v-motion="animations.fadeIn"
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <a
        href="#formacao"
        class="flex flex-col items-center text-white/60 hover:text-mainTheme transition-colors duration-300"
      >
        <span class="text-sm mb-2">Saiba mais</span>
        <div v-motion="animations.slideUp" class="animate-bounce">
          <Icon name="lucide:chevron-down" class="w-6 h-6" />
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
// Dados para o texto rotativo
const currentTextIndex = ref(0);
const texts = [
  "Transformando vidas",
  "Resultados garantidos",
  "Metodologia comprovada",
  "Disciplina e evolução",
];

// Dados para estatísticas
const stats = [
  { value: "10+", label: "Anos de Experiência" },
  { value: "2x", label: "Campeão Mens Physique" },
  { value: "100%", label: "Satisfação dos alunos" },
];

// Intervalo para rotacionar textos
let interval: ReturnType<typeof setInterval>;

onMounted(() => {
  interval = setInterval(() => {
    currentTextIndex.value = (currentTextIndex.value + 1) % texts.length;
  }, 3000);
});

onUnmounted(() => {
  if (interval) clearInterval(interval);
});
</script>
