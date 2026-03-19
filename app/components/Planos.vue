<template>
  <section
    id="planos"
    class="section-style lg:bg-[linear-gradient(to_right,rgb(13,12,12,0.97),rgb(13,12,12,0.9)),url('/img/img_Plans/plans_bg.jpg')] bg-no-repeat bg-fixed bg-cover"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Título principal -->
      <h2 v-motion="animations.slideUp" class="h2-style">Planos</h2>

      <!-- Container de títulos de Promoções -->
      <div
        class="flex flex-col gap-2 text-center justify-center items-center mb-10"
      >
        <h3
          v-motion="animations.slideUp"
          class="gradient-text font-bold text-xl md:text-2xl"
        >
          Escolha o plano ideal para sua jornada
        </h3>
        <p
          v-motion="animations.slideUp"
          class="text-myWhite/70 text-sm md:text-base max-w-2xl mx-auto"
        >
          Todos os planos incluem dieta personalizada e suporte completo para
          você alcançar seus objetivos.
        </p>
      </div>

      <!-- Grid de planos -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        <div
          v-for="(plano, index) in planosData"
          :key="index"
          v-motion="animations.scaleIn"
          :class="`flex flex-col relative bg-gradient-to-b from-navBlack/90 to-deepBlue/90 h-full rounded-2xl border ${
            plano.popular
              ? 'border-secondaryTheme/50 shadow-xl shadow-secondaryTheme/10'
              : 'border-white/10'
          } hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-mainTheme/10`"
        >
          <!-- Destaque para plano popular -->
          <div
            v-if="plano.popular"
            class="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10"
          >
            <span
              class="bg-gradient-to-r from-secondaryTheme to-yellow-500 text-deepBlue font-bold px-5 py-1.5 rounded-full text-sm shadow-lg"
            >
              MAIS POPULAR
            </span>
          </div>

          <!-- Badge "+ dieta" -->
          <div v-if="plano.dieta" class="absolute -top-2 -right-2 z-10">
            <span
              class="bg-gradient-to-r from-mainTheme to-blue-600 text-white font-bold px-3 py-1 rounded-lg text-xs shadow-lg"
            >
              + DIETA
            </span>
          </div>

          <!-- Conteúdo do card -->
          <div class="flex flex-col p-6 md:p-7 grow">
            <!-- Cabeçalho do card -->
            <div class="text-center mb-6">
              <h2
                :class="`text-2xl font-bold ${
                  plano.popular ? 'text-secondaryTheme' : 'text-myWhite'
                } mb-2`"
              >
                {{ plano.plano }}
              </h2>

              <!-- Valor com destaque -->
              <div class="mb-4">
                <div
                  :class="`text-4xl md:text-5xl font-extrabold ${
                    plano.tipoPlano === 'Plano promocional'
                      ? plano.popular
                        ? 'text-secondaryTheme'
                        : 'text-mainTheme'
                      : 'text-myWhite'
                  }`"
                >
                  R$ {{ plano.valor.toFixed(2).replace(".", ",") }}
                </div>

                <!-- Subtítulo do preço — reutilizado para exibir indicador de desconto sem alterar altura -->
                <p
                  v-if="plano.desconto"
                  class="inline-flex items-center gap-1.5 mt-1 px-2.5 py-0.5 rounded-full bg-mainTheme/15 border border-mainTheme/30 text-mainTheme text-xs font-semibold tracking-wide animate-pulse"
                >
                  <Icon name="lucide:tag" class="w-3 h-3 flex-shrink-0" />
                  {{ plano.desconto }}
                </p>
                <p v-else class="text-white/60 text-sm mt-1">
                  {{
                    plano.plano.includes("Mensal")
                      ? "por mês"
                      : "pagamento único"
                  }}
                </p>
              </div>
            </div>

            <!-- Lista de benefícios -->
            <div class="mb-8 grow p-2">
              <h4 class="text-white/80 font-semibold mb-4 text-center text-sm">
                INCLUI:
              </h4>

              <ul class="space-y-3">
                <li
                  v-for="(beneficio, idx) in plano.beneficios"
                  :key="idx"
                  class="flex items-start gap-3"
                >
                  <Icon
                    name="lucide:check-circle"
                    :class="`w-5 h-5 ${
                      beneficio.includes('+ 2 meses')
                        ? 'text-emerald-400'
                        : 'text-secondaryTheme'
                    } flex-shrink-0 mt-0.5`"
                  />
                  <span class="text-white/70 text-sm">{{ beneficio }}</span>
                </li>
              </ul>
            </div>

            <!-- Botão de ação -->
            <a
              :href="plano.whats"
              target="_blank"
              rel="noopener noreferrer"
              :class="`block w-full py-3.5 rounded-xl font-bold text-center transition-all duration-300 ${
                plano.popular
                  ? 'bg-gradient-to-r from-secondaryTheme to-yellow-600 hover:from-yellow-500 hover:to-secondaryTheme text-deepBlue'
                  : 'bg-gradient-to-r from-mainTheme to-blue-600 hover:from-blue-500 hover:to-mainTheme text-white'
              } active:scale-95`"
            >
              ASSINAR AGORA
            </a>

            <!-- Indicador de economia para planos promocionais -->
            <div
              v-if="
                plano.tipoPlano === 'Plano promocional' &&
                plano.plano !== 'Mensal'
              "
              class="mt-4 text-center"
            >
              <p class="text-secondaryTheme text-sm font-medium">
                Economia garantida em relação ao plano mensal
              </p>
            </div>
          </div>

          <!-- Decoração de canto sutil -->
          <div
            :class="`absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 rounded-tr-2xl ${
              plano.popular ? 'border-secondaryTheme/30' : 'border-mainTheme/30'
            }`"
          ></div>
          <div
            :class="`absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 rounded-bl-2xl ${
              plano.popular ? 'border-secondaryTheme/30' : 'border-mainTheme/30'
            }`"
          ></div>
        </div>
      </div>

      <!-- Rodapé informativo -->
      <div
        v-motion="animations.slideUp"
        class="mt-12 pt-8 border-t border-white/10"
      >
        <div class="text-center">
          <h4 class="text-white font-semibold mb-3">
            Dúvidas ou precisa de um plano personalizado?
          </h4>
          <p class="text-white/70 text-sm mb-4">
            Entre em contato diretamente pelo WhatsApp para conversarmos sobre
            suas necessidades específicas.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=558198955665&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 active:scale-95"
          >
            <Icon name="logos:whatsapp-icon" class="text-xl" />
            FALE DIRETAMENTE COMIGO
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { animations, createStagger } from "~/utils/animations";

// Dados dos planos atualizados
const planosData = [
  {
    plano: "Mensal",
    valor: 150.0,
    tipoPlano: "Plano padrão",
    dieta: true,
    popular: false,
    desconto: null,
    beneficios: [
      "Treino personalizado",
      "Dieta inclusa",
      "Suporte por WhatsApp",
      "Atualização mensal",
    ],
    whats:
      "https://wa.me/558198955665/?text=Tenho%20interesse%20em%20assinar%20o%20plano%20mensal",
  },
  {
    plano: "Trimestral",
    valor: 300,
    tipoPlano: "Plano promocional",
    dieta: true,
    popular: false,
    desconto: null,
    beneficios: [
      "Treino personalizado",
      "Dieta inclusa",
      "Suporte por WhatsApp",
      "Atualização mensal",
      "Economia de 10%",
    ],
    whats:
      "https://wa.me/558198955665/?text=Tenho%20interesse%20em%20assinar%20o%20plano%20trimestral",
  },
  {
    plano: "Semestral",
    valor: 499.99,
    tipoPlano: "Plano promocional",
    dieta: true,
    popular: true,
    desconto: "Clique e ganhe desconto exclusivo",
    beneficios: [
      "Treino personalizado",
      "Dieta inclusa",
      "Suporte por WhatsApp",
      "Atualização mensal",
      "Economia de 25%",
    ],
    whats:
      "https://wa.me/558198955665/?text=Tenho%20interesse%20em%20assinar%20o%20plano%20semestral",
  },
  {
    plano: "Anual",
    valor: 800.0,
    tipoPlano: "Plano promocional",
    dieta: true,
    popular: false,
    desconto: null,
    beneficios: [
      "Treino personalizado",
      "Dieta inclusa",
      "Suporte por WhatsApp",
      "Atualização mensal",
      "Economia de 33%",
    ],
    whats:
      "https://wa.me/558198955665/?text=Tenho%20interesse%20em%20assinar%20o%20plano%20anual",
  },
  {
    plano: "1 ano e 6 meses",
    valor: 1200.0,
    tipoPlano: "Plano promocional",
    dieta: true,
    popular: false,
    desconto: null,
    beneficios: [
      "Treino personalizado",
      "Dieta inclusa",
      "Suporte por WhatsApp",
      "Atualização mensal",
      "Economia de 40%",
      "+ 2 meses de consultoria grátis",
    ],
    whats:
      "https://wa.me/558198955665/?text=Tenho%20interesse%20em%20assinar%20o%20plano%20de%201%20Ano%20e%206%20meses",
  },
  {
    plano: "2 anos",
    valor: 1600.0,
    tipoPlano: "Plano promocional",
    dieta: true,
    popular: false,
    desconto: null,
    beneficios: [
      "Treino personalizado",
      "Dieta inclusa",
      "Suporte por WhatsApp",
      "Atualização mensal",
      "Economia de 56%",
      "+ 2 meses de consultoria grátis",
    ],
    whats:
      "https://wa.me/558198955665/?text=Tenho%20interesse%20em%20assinar%20o%20plano%20de%202%20anos",
  },
];
</script>
