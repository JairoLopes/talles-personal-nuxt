<template>
  <section
    id="feedback"
    class="section-style bg-gradient-to-b from-navBlack to-deepBlue overflow-hidden"
  >
    <div class="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
      <!-- Cabeçalho -->
      <div class="text-center mb-12 md:mb-16">
        <div
          v-motion="animations.slideUp"
          class="inline-flex items-center gap-2 bg-gradient-to-r from-mainTheme/15 to-secondaryTheme/15 px-4 py-1.5 md:px-5 md:py-2 rounded-full mb-4 md:mb-6"
        >
          <Icon
            name="lucide:thumbs-up"
            class="w-4 h-4 md:w-5 md:h-5 text-mainTheme"
          />
          <span
            class="text-xs md:text-sm font-medium text-white/80 tracking-wider"
          >
            DEPOIMENTOS REAIS
          </span>
        </div>

        <h2
          v-motion="animations.slideUp"
          class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6"
        >
          Feedback dos Alunos
        </h2>

        <p
          v-motion="animations.slideUp"
          class="text-white/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8 md:mb-12"
        >
          Veja o que nossos alunos têm a dizer sobre a experiência de
          transformação com a metodologia personalizada do Time TF.
        </p>

        <!-- Estatísticas -->
        <div
          v-motion="animations.scaleIn"
          class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div
            v-for="(stat, index) in stats"
            :key="index"
            class="text-center bg-navBlack/50 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 lg:p-6 border border-white/10"
          >
            <div
              class="text-xl sm:text-2xl md:text-3xl font-bold gradient-text mb-1 md:mb-2"
            >
              {{ stat.value }}
            </div>
            <div class="text-white/70 text-xs sm:text-sm md:text-base">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>

      <!-- Carousel de Depoimentos COM BREAKPOINTS RESPONSIVOS -->
      <div class="relative mb-16 md:mb-20">
        <!-- Indicador de slide atual -->
        <div class="flex justify-center mb-6">
          <div
            class="inline-flex items-center gap-2 bg-navBlack/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
          >
            <Icon name="lucide:message-circle" class="w-4 h-4 text-mainTheme" />
            <span class="text-white/80 text-sm">
              Depoimento
              <span class="font-bold text-mainTheme">{{
                currentSlide + 1
              }}</span>
              de
              <span class="font-bold text-secondaryTheme">{{
                testimonials.length
              }}</span>
            </span>
          </div>
        </div>

        <!-- Carousel -->
        <div class="w-full overflow-hidden px-2">
          <ClientOnly>
            <Carousel
              v-model="currentSlide"
              :wrap-around="true"
              :autoplay="5000"
              :pause-autoplay-on-hover="true"
              :transition="600"
              :breakpoints="carouselBreakpoints"
              class="feedback-slider"
            >
              <Slide v-for="(testimonial, index) in testimonials" :key="index">
                <div class="px-2 sm:px-3">
                  <div
                    v-motion="testimonialStagger(index)"
                    class="group h-full"
                  >
                    <div
                      class="h-full bg-gradient-to-b from-navBlack/80 to-deepBlue/80 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 hover:border-mainTheme/30 transition-all duration-500 hover:shadow-xl md:hover:shadow-2xl hover:shadow-mainTheme/10 flex flex-col"
                    >
                      <!-- Cabeçalho do depoimento -->
                      <div
                        class="flex flex-col sm:flex-row sm:items-start justify-between mb-4 md:mb-6 gap-3"
                      >
                        <div class="flex items-center gap-3">
                          <div
                            class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-mainTheme/20 to-mainTheme/10 border border-mainTheme/30 flex items-center justify-center flex-shrink-0"
                          >
                            <Icon
                              name="lucide:quote"
                              class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-mainTheme"
                            />
                          </div>
                          <div class="flex-1 min-w-0">
                            <div
                              class="text-white font-bold text-sm sm:text-base md:text-lg truncate"
                            >
                              {{ testimonial.author }}
                            </div>
                            <div class="flex items-center gap-1 mt-1">
                              <Icon
                                v-for="i in 5"
                                :key="i"
                                name="lucide:star"
                                :class="`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ${
                                  i <= testimonial.rating
                                    ? 'text-secondaryTheme fill-secondaryTheme'
                                    : 'text-white/30'
                                }`"
                              />
                            </div>
                          </div>
                        </div>

                        <!-- Badge de resultado -->
                        <div
                          class="self-start sm:self-center bg-gradient-to-r from-secondaryTheme/20 to-yellow-500/20 border border-secondaryTheme/30 rounded-full px-2 py-1 sm:px-3 sm:py-1"
                        >
                          <span
                            class="text-secondaryTheme text-xs sm:text-sm font-medium truncate"
                          >
                            {{ testimonial.result }}
                          </span>
                        </div>
                      </div>

                      <!-- Texto do depoimento -->
                      <div class="relative flex-grow">
                        <div
                          class="absolute -top-3 -left-3 text-4xl sm:text-5xl md:text-6xl text-mainTheme/20"
                        >
                          "
                        </div>
                        <p
                          class="text-white/80 leading-relaxed text-sm sm:text-base md:text-lg relative z-10 line-clamp-5 md:line-clamp-6"
                        >
                          {{ testimonial.text }}
                        </p>
                        <div
                          class="absolute -bottom-3 -right-3 text-4xl sm:text-5xl md:text-6xl text-mainTheme/20 rotate-180"
                        >
                          "
                        </div>
                      </div>

                      <!-- Rodapé do depoimento -->
                      <div class="mt-6 pt-4 md:pt-6 border-t border-white/10">
                        <div class="flex items-center justify-between">
                          <div
                            class="flex items-center gap-2 text-white/60 text-xs sm:text-sm"
                          >
                            <Icon
                              name="lucide:users"
                              class="w-3 h-3 sm:w-4 sm:h-4"
                            />
                            <span class="truncate">Time TF Member</span>
                          </div>
                          <div class="text-white/40 text-xs sm:text-sm">
                            ⭐⭐⭐⭐⭐
                          </div>
                        </div>
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
      </div>

      <!-- Seção Time TF -->
      <div
        v-motion="animations.slideUp"
        class="relative overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-mainTheme/10 to-secondaryTheme/10 border border-white/10 p-6 md:p-8 lg:p-12 mb-12 md:mb-16"
      >
        <div
          class="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-mainTheme/5 rounded-full -translate-y-16 translate-x-16 md:-translate-y-32 md:translate-x-32"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-secondaryTheme/5 rounded-full translate-y-16 -translate-x-16 md:translate-y-32 md:-translate-x-32"
        ></div>

        <div class="relative z-10 text-center">
          <div class="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <Icon
              name="lucide:award"
              class="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-secondaryTheme"
            />
            <h3
              class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white"
            >
              Time TF - Família em Evolução
            </h3>
            <Icon
              name="lucide:award"
              class="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-mainTheme"
            />
          </div>

          <p
            class="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8"
          >
            Vem com a gente fazer parte desse time incrível! Troque experiências
            em nossos encontros presenciais, faça novos amigos e junte-se à
            família Talles Furtado. Aqui, cada vitória é comemorada juntos e
            cada desafio é superado em equipe.
          </p>

          <div class="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send/?phone=558198955665&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-3 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-lg md:rounded-xl transition-all duration-300"
            >
              <Icon
                name="logos:whatsapp-icon"
                class="text-lg md:text-xl lg:text-2xl"
              />
              <span class="text-sm sm:text-base md:text-lg">
                Entrar para o Time
              </span>
            </a>
          </div>
        </div>
      </div>

      <!-- CTA Final -->
      <div v-motion="animations.slideUp" class="text-center">
        <h4
          class="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 md:mb-4"
        >
          Sua História de Transformação Começa Aqui
        </h4>
        <p
          class="text-white/70 mb-6 md:mb-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg"
        >
          Junte-se aos dezenas de alunos que já transformaram suas vidas e
          compartilhe sua própria jornada de sucesso conosco.
        </p>

        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <div
            class="hidden md:block w-16 lg:w-20 h-0.5 bg-gradient-to-r from-transparent to-mainTheme"
          ></div>
          <a
            href="#planos"
            class="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-mainTheme to-blue-600 hover:from-blue-500 hover:to-mainTheme text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg md:rounded-xl transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <Icon name="lucide:star" class="w-4 h-4 md:w-5 md:h-5" />
            <span class="text-sm sm:text-base md:text-lg">
              Começar Minha Jornada
            </span>
          </a>
          <div
            class="hidden md:block w-16 lg:w-20 h-0.5 bg-gradient-to-r from-mainTheme to-transparent"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { animations, createStagger } from "~/utils/animations";

// Criar stagger para os depoimentos
const testimonialStagger = createStagger("slideUp", 100);

// Estado para controlar o slide atual
const currentSlide = ref(0);

// Depoimentos
const testimonials = [
  {
    text: "Mano, o treino desse mês ta insano! Fiz o treino de costas ontem e hoje o de peito, só nesses primeiros já deeu pra sentir a intensidade bem maior e as mudanças no meu corpo também, esse ta sendo o melhor desse ano! Simbora pra cima.",
    rating: 5,
    author: "Aluno TF",
    result: "Intensidade aumentada",
  },
  {
    text: "Talles, quero te dizer que eu estou amando meus treinos, e estou dando meu melhor, não ta sendo fácil pra mim, mas com sua ajuda nos treinos eu sei que vou conseguir, e olhe que eu ja perdi 3 quilos em 2 semanas. Obrigado por me ajudar, você é o melhor.",
    rating: 5,
    author: "Aluno TF",
    result: "3kg em 2 semanas",
  },
  {
    text: "Treinos bem intensos e pesados, adaptado de acordo com a necessidade e objetivo de cada aluno. Sem falar no excelente profissional, super atencioso, incentivador e acima de tudo, uma grande inspiração pra nós alunos!",
    rating: 5,
    author: "Aluno TF",
    result: "Treino personalizado",
  },
  {
    text: "Acho que nunca suei tanto na minha vida durante o treino, sai com as pernas bambas e bumbum redondinho, foi ótimo. Se continuar nesse ritmo, acho que o resultado vem rápido hahaha.",
    rating: 5,
    author: "Aluna TF",
    result: "Resultados visíveis",
  },
  {
    text: "Eii, quero lhe agradecer viu, por sempre estar me incentivando, mantendo firme nos treinos dolorosos da vida, os melhores treinos, a melhor consultoria, sem igual. Tamo junto meu querido.",
    rating: 5,
    author: "Aluno TF",
    result: "Acompanhamento constante",
  },
];

// Estatísticas de feedback
const stats = [
  { value: "100%", label: "Satisfação" },
  { value: "5.0", label: "Avaliação Média" },
  { value: "24/7", label: "Suporte" },
];

// Breakpoints responsivos para o carousel de feedback
const carouselBreakpoints = {
  320: {
    itemsToShow: 1,
    snapAlign: "center",
  },
  640: {
    itemsToShow: 1.2,
    snapAlign: "start",
  },
  768: {
    itemsToShow: 2,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 3,
    snapAlign: "start",
  },
};
</script>

<style scoped>
/* Estilos responsivos para o carousel */
:deep(.carousel__slide) {
  padding: 10px;
}

:deep(.carousel__pagination-button::after) {
  background-color: rgba(255, 255, 255, 0.3);
}

:deep(.carousel__pagination-button--active::after) {
  background-color: var(--color-mainTheme);
}

/* Ajustes responsivos para o carousel de feedback */
@media (max-width: 640px) {
  :deep(.feedback-slider .carousel__slide) {
    min-width: calc(85% - 20px);
  }

  :deep(.carousel__viewport) {
    overflow: visible;
  }
}

@media (max-width: 768px) {
  :deep(.feedback-slider .carousel__slide) {
    min-width: calc(50% - 20px);
  }
}

@media (max-width: 1024px) {
  :deep(.feedback-slider .carousel__slide) {
    min-width: calc(33.333% - 20px);
  }
}

/* Ajuste para centralização em telas pequenas */
@media (max-width: 640px) {
  :deep(.carousel) {
    padding: 0 20px;
  }

  :deep(.carousel__slide) {
    display: flex;
    justify-content: center;
  }
}
</style>
