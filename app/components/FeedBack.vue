<!--
  =====================================================================
  FeedBack.vue - Seção de Depoimentos dos Alunos
  Exibe um carrossel responsivo com feedbacks reais e estatísticas.
  Refatorado para usar a mesma lógica e estilos de Conquistas.vue.
  =====================================================================
-->
<template>
  <section
    id="feedback"
    class="section-style bg-gradient-to-b from-navBlack to-deepBlue overflow-hidden"
  >
    <div class="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
      <!-- ========== CABEÇALHO ========== -->
      <div class="text-center mb-12 md:mb-16">
        <!-- Badge "DEPOIMENTOS REAIS" -->
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

        <!-- Título da seção -->
        <h2 v-motion="animations.slideUp" class="h2-style mb-6">
          Feedback dos Alunos
        </h2>

        <!-- Descrição -->
        <p
          v-motion="animations.slideUp"
          class="text-white/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8 md:mb-12"
        >
          Veja o que nossos alunos têm a dizer sobre a experiência de
          transformação com a metodologia personalizada do Time TF.
        </p>

        <!-- Estatísticas (Satisfação, Avaliação, Suporte) -->
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

      <!-- ========== CARROSSEL DE DEPOIMENTOS (REFATORADO) ========== -->
      <div class="relative mb-16 md:mb-20">
        <!-- Indicador de slide atual (preservado do layout original) -->
        <div class="flex justify-center mb-8">
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

        <!--
          ClientOnly evita problemas de SSR com a biblioteca do carrossel.
          A configuração é gerada dinamicamente por uma computed (carouselConfig),
          da mesma forma que em Conquistas.vue.
        -->
        <ClientOnly>
          <Carousel
            v-model="currentSlide"
            v-bind="carouselConfig"
            class="feedback-slider"
          >
            <!-- Cada depoimento é um Slide -->
            <Slide v-for="(testimonial, index) in testimonials" :key="index">
              <div class="px-2 sm:px-3">
                <!-- Animação escalonada (stagger) para cada card -->
                <div v-motion="testimonialStagger(index)" class="group h-full">
                  <!-- Card do depoimento -->
                  <div
                    class="h-full bg-gradient-to-b from-navBlack/80 to-deepBlue/80 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 hover:border-mainTheme/30 transition-all duration-500 hover:shadow-xl md:hover:shadow-2xl hover:shadow-mainTheme/10 flex flex-col"
                  >
                    <!-- Cabeçalho: autor + rating + badge de resultado -->
                    <div
                      class="flex flex-col sm:flex-row sm:items-start justify-between mb-4 md:mb-6 gap-3"
                    >
                      <!-- Avatar + nome + estrelas -->
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
                          <!-- Estrelas de avaliação -->
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

                      <!-- Badge do resultado (ex: "3kg em 2 semanas") -->
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

                    <!-- Corpo do depoimento (texto com aspas decorativas) -->
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

                    <!-- Rodapé do card -->
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

            <!-- Adicionais do carrossel: setas de navegação e pontos de paginação -->
            <template #addons>
              <Navigation />
              <Pagination />
            </template>
          </Carousel>
        </ClientOnly>
      </div>

      <!-- ========== SEÇÃO "TIME TF - FAMÍLIA EM EVOLUÇÃO" ========== -->
      <div
        v-motion="animations.slideUp"
        class="relative overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-mainTheme/10 to-secondaryTheme/10 border border-white/10 p-6 md:p-8 lg:p-12 mb-12 md:mb-16"
      >
        <!-- Elementos decorativos -->
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

      <!-- ========== CTA FINAL ========== -->
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
// ========== IMPORTAÇÕES ==========
import { animations, createStagger } from "~/utils/animations";

// Cria um efeito stagger (animação em cascata) para os cards do carrossel.
// Cada card recebe um delay incremental baseado no índice, criando uma entrada suave.
const testimonialStagger = createStagger("slideUp", 100);

// ========== ESTADO REATIVO ==========

/** Índice do slide atualmente ativo no carrossel (começa em 0). */
const currentSlide = ref(0);

// ========== DADOS (STATS E DEPOIMENTOS) ==========

/**
 * Estatísticas exibidas acima do carrossel.
 * Cada objeto contém um valor (string) e um label descritivo.
 */
const stats = [
  { value: "100%", label: "Satisfação" },
  { value: "5.0", label: "Avaliação Média" },
  { value: "24/7", label: "Suporte" },
];

/**
 * Lista de depoimentos dos alunos.
 * Cada depoimento contém:
 * - text: o depoimento em si
 * - rating: número de estrelas (1 a 5)
 * - author: nome do aluno
 * - result: um resumo do resultado alcançado (exibido como badge)
 */
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

// ========== CONFIGURAÇÃO DINÂMICA DO CARROSSEL ==========

/**
 * Gera a configuração do carrossel com base no número de depoimentos.
 * Usa os mesmos princípios de Conquistas.vue:
 * - 1.2 itens no mobile (para mostrar um pedaço do próximo)
 * - 2 itens a partir de 640px
 * - 3 itens a partir de 1024px
 *
 * O uso de `Math.min` impede que o carrossel tente mostrar mais itens do que existem.
 */
const carouselConfig = computed(() => ({
  itemsToShow: 1.2, // Mostra 1 slide inteiro + 20% do próximo (efeito "peek")
  wrapAround: true, // Loop infinito
  autoplay: 4000, // Troca automática a cada 4 segundos
  pauseAutoplayOnHover: true, // Pausa ao passar o mouse
  transition: 600, // Duração da transição em ms
  snapAlign: "center" as const, // Alinhamento central no mobile

  // Breakpoints responsivos (igual a Conquistas.vue)
  breakpoints: {
    640: {
      itemsToShow: Math.min(2, testimonials.length), // Máximo 2 itens
      snapAlign: "start" as const,
    },
    1024: {
      itemsToShow: Math.min(3, testimonials.length), // Máximo 3 itens
      snapAlign: "start" as const,
    },
  },
}));
</script>

<style scoped>
/* 
  ========== ESTILOS DO CARROSSEL ==========
  Consistente com a estilização de Conquistas.vue.
  Usa `:deep()` para alcançar elementos internos do componente Carousel.
*/

/* Botões de navegação (setas) */
:deep(.carousel__prev),
:deep(.carousel__next) {
  background-color: var(--color-mainTheme, #1e90ff);
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0 -10px;
  transition: all 0.3s ease;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  transform: scale(1.15);
  background-color: white;
  color: black;
}

/* Pontos de paginação (bolinhas) */
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

/* Ajuste para evitar conflitos de overflow no slide */
.feedback-slider :deep(.carousel__slide) {
  padding: 10px 0;
}
</style>
