<template>
  <section
    id="beneficios"
    class="section-style bg-gradient-to-b from-deepBlue via-navBlack to-deepBlue"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <!-- Cabeçalho -->
      <div class="text-center mb-16">
        <div
          v-motion="animations.slideUp"
          class="inline-flex items-center gap-2 bg-gradient-to-r from-mainTheme/15 to-secondaryTheme/15 px-5 py-2 rounded-full mb-6"
        >
          <Icon name="lucide:shield" class="w-5 h-5 text-mainTheme" />
          <span class="text-sm font-medium text-white/80 tracking-wider"
            >VANTAGENS EXCLUSIVAS</span
          >
        </div>

        <h2 v-motion="animations.slideUp" class="h2-style mb-6">
          Benefícios do Time TF
        </h2>

        <p
          v-motion="animations.slideUp"
          class="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed mb-12"
        >
          Ao fazer parte do nosso time, você tem acesso a uma estrutura completa
          pensada para potencializar seus resultados e transformar sua jornada
          fitness.
        </p>

        <!-- Contador de benefícios -->
        <div
          v-motion="animations.scaleIn"
          class="inline-flex items-center gap-4 bg-navBlack/50 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-4"
        >
          <div class="text-3xl font-bold gradient-text">
            {{ beneficiosData.length }}
          </div>
          <div class="text-left">
            <div class="text-white font-semibold">Benefícios Exclusivos</div>
            <div class="text-white/60 text-sm">
              Para você alcançar seus objetivos
            </div>
          </div>
        </div>
      </div>

      <!-- Grid de Benefícios -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <div
          v-for="(beneficio, index) in beneficiosData"
          :key="index"
          v-motion="beneficiosStagger(index)"
          class="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navBlack/80 to-deepBlue/80 backdrop-blur-sm transition-all duration-500 hover:border-mainTheme/30 hover:-translate-y-2"
        >
          <!-- Indicador de categoria -->
          <div
            :class="`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${getCategoriaColor(beneficio.category)} rounded-bl-2xl`"
          >
            <div class="absolute top-3 right-3 text-white/80">
              <Icon :name="beneficio.icon" class="w-6 h-6" />
            </div>
          </div>

          <div class="p-6">
            <!-- Número do benefício -->
            <div
              class="text-5xl font-bold text-white/5 absolute -bottom-4 -left-2 group-hover:text-white/10 transition-colors duration-500"
            >
              {{ String(index + 1).padStart(2, "0") }}
            </div>

            <!-- Ícone -->
            <div class="mb-4">
              <div
                class="w-14 h-14 rounded-xl bg-gradient-to-br from-mainTheme/20 to-mainTheme/10 border border-mainTheme/30 flex items-center justify-center group-hover:scale-110 group-hover:border-mainTheme/50 transition-all duration-500"
              >
                <Icon
                  :name="beneficio.icon"
                  class="w-6 h-6 text-mainTheme group-hover:text-secondaryTheme transition-colors duration-500"
                />
              </div>
            </div>

            <!-- Conteúdo -->
            <div class="relative z-10">
              <h3
                class="text-xl font-bold text-white mb-3 group-hover:text-mainTheme transition-colors duration-300"
              >
                {{ beneficio.title }}
              </h3>
              <p class="text-white/70 text-sm leading-relaxed">
                {{ beneficio.description }}
              </p>
            </div>

            <!-- Badge de categoria -->
            <div class="mt-6 pt-4 border-t border-white/10">
              <div
                class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5"
              >
                <span class="text-xs text-white/60">{{
                  getCategoriaNome(beneficio.category)
                }}</span>
              </div>
            </div>
          </div>

          <!-- Efeito de brilho no hover -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-mainTheme/0 via-mainTheme/0 to-mainTheme/0 group-hover:via-mainTheme/5 group-hover:to-mainTheme/10 transition-all duration-500 pointer-events-none"
          />
        </div>
      </div>

      <!-- CTA Final -->
      <div
        v-motion="animations.slideUp"
        class="mt-20 pt-12 border-t border-white/10"
      >
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-10">
            <h3 class="text-2xl lg:text-3xl font-bold text-white mb-4">
              Pronto para Experimentar Todos Esses Benefícios?
            </h3>
            <p class="text-white/70 text-lg max-w-2xl mx-auto">
              Junte-se ao Time TF e transforme sua jornada fitness com suporte
              especializado, recursos exclusivos e uma comunidade que te motiva
              a ir além.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#planos"
              class="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-mainTheme to-blue-600 hover:from-blue-500 hover:to-mainTheme text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              <span>Ver Planos Disponíveis</span>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=558198955665&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-3 border-2 border-secondaryTheme text-secondaryTheme hover:bg-secondaryTheme/10 font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              <Icon name="logos:whatsapp-icon" class="text-2xl" />
              <span>Falar com o Talles</span>
            </a>
          </div>

          <!-- Depoimento ou informação adicional -->
          <div class="mt-12 pt-8 border-t border-white/10 text-center">
            <p class="text-white/60 text-sm italic">
              "Mais de 50 alunos já transformaram suas vidas com nossa
              metodologia. Agora é sua vez de fazer parte dessa história de
              sucesso."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { animations, createStagger } from "~/utils/animations";

// Criar stagger para os benefícios
const beneficiosStagger = createStagger("slideUp", 50);

// Dados dos benefícios
const beneficiosData = [
  {
    icon: "lucide:clock",
    title: "Suporte 24/7",
    description: "Acompanhamento completo em tempo real, sempre que precisar.",
    category: "suporte",
  },
  {
    icon: "lucide:video",
    title: "Videochamadas",
    description:
      "Até duas sessões por semana para tirar dúvidas e ajustar o protocolo.",
    category: "suporte",
  },
  {
    icon: "lucide:shopping-bag",
    title: "Descontos Exclusivos",
    description: "Suplementação com preços especiais na loja TF.",
    category: "vantagens",
  },
  {
    icon: "lucide:dumbbell",
    title: "Treino Personalizado",
    description:
      "Sessões presenciais com acompanhamento técnico na sala de musculação.",
    category: "treino",
  },
  {
    icon: "lucide:bike",
    title: "Treino Funcional",
    description: "Sessões em área externa e bike para variar o estímulo.",
    category: "treino",
  },
  {
    icon: "lucide:utensils",
    title: "Dieta Personalizada",
    description: "Plano alimentar individualizado",
    category: "nutricao",
  },
  {
    icon: "lucide:users",
    title: "Indicação Premiada",
    description: "Indique amigos e ganhe descontos nos seus próximos planos.",
    category: "vantagens",
  },
  {
    icon: "lucide:file-text",
    title: "Avaliação Completa",
    description: "Anamnese detalhada e avaliação física inicial.",
    category: "acompanhamento",
  },
  {
    icon: "lucide:message-circle",
    title: "Correção com Vídeos",
    description:
      "Feedback visual com vídeos demonstrativos para aperfeiçoar a técnica.",
    category: "acompanhamento",
  },
  {
    icon: "lucide:trending-up",
    title: "Ajustes Constantes",
    description: "Feedback semanal e ajustes conforme sua evolução.",
    category: "acompanhamento",
  },
  {
    icon: "lucide:heart",
    title: "Anamnese Digital",
    description:
      "Preenchimento completo do seu histórico de saúde e objetivos.",
    category: "acompanhamento",
  },
  {
    icon: "lucide:shield",
    title: "Comunidade Exclusiva",
    description:
      "Acesso ao grupo do WhatsApp do Team TF para networking e suporte.",
    category: "comunidade",
  },
];

// Categorias
const categorias = [
  { id: "suporte", nome: "Suporte", cor: "from-blue-500/20 to-blue-600/20" },
  { id: "treino", nome: "Treino", cor: "from-mainTheme/20 to-blue-600/20" },
  {
    id: "acompanhamento",
    nome: "Acompanhamento",
    cor: "from-secondaryTheme/20 to-yellow-500/20",
  },
  {
    id: "vantagens",
    nome: "Vantagens",
    cor: "from-green-500/20 to-emerald-600/20",
  },
  {
    id: "nutricao",
    nome: "Nutrição",
    cor: "from-orange-500/20 to-orange-600/20",
  },
  {
    id: "comunidade",
    nome: "Comunidade",
    cor: "from-purple-500/20 to-purple-600/20",
  },
];

// Funções auxiliares
const getCategoriaColor = (categoryId: string) => {
  const categoria = categorias.find((cat) => cat.id === categoryId);
  return categoria?.cor || "from-mainTheme/20 to-blue-600/20";
};

const getCategoriaNome = (categoryId: string) => {
  const categoria = categorias.find((cat) => cat.id === categoryId);
  return categoria?.nome || "Geral";
};
</script>
