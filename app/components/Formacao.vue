<template>
  <section
    id="formacao"
    class="section-style bg-gradient-to-b from-deepBlue to-navBlack"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-16">
        <div
          v-motion="animations.slideUp"
          class="inline-flex items-center gap-2 bg-gradient-to-r from-mainTheme/15 to-secondaryTheme/15 px-5 py-2 rounded-full mb-6"
        >
          <Icon name="lucide:award" class="w-5 h-5 text-mainTheme" />
          <span class="text-sm font-medium text-white/80 tracking-wider">
            FORMAÇÃO E EXPERIÊNCIA
          </span>
        </div>

        <h2 v-motion="animations.slideUp" class="h2-style mb-6">Sobre Mim</h2>

        <p
          v-motion="animations.slideUp"
          class="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed"
        >
          Com mais de uma década dedicada ao fitness, combino formação acadêmica
          sólida com experiência prática de atleta para entregar resultados
          reais e duradouros.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="space-y-12">
          <div class="space-y-8">
            <div
              v-for="(item, index) in formacaoData"
              :key="index"
              v-motion="formacaoStagger(index)"
              class="bg-gradient-to-br from-navBlack/80 to-deepBlue/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-mainTheme/30 transition-all duration-300"
            >
              <div class="flex items-center gap-4 mb-6">
                <div
                  class="w-14 h-14 rounded-xl bg-gradient-to-br from-mainTheme/20 to-mainTheme/10 border border-mainTheme/30 flex items-center justify-center"
                >
                  <Icon :name="item.icon" class="w-6 h-6 text-mainTheme" />
                </div>
                <h3 class="text-xl font-bold text-white">{{ item.title }}</h3>
              </div>

              <ul class="space-y-4">
                <li
                  v-for="(listItem, idx) in item.items"
                  :key="idx"
                  class="flex items-start gap-3"
                >
                  <Icon
                    name="lucide:check-circle"
                    class="w-5 h-5 text-secondaryTheme mt-1 flex-shrink-0"
                  />
                  <span class="text-white/80">{{ listItem }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div
            v-motion="animations.slideUp"
            class="relative overflow-hidden rounded-2xl p-8"
            style="
              background: linear-gradient(
                135deg,
                rgba(30, 144, 255, 0.1),
                rgba(255, 204, 0, 0.05)
              );
              border: 1px solid rgba(255, 255, 255, 0.1);
            "
          >
            <div
              class="absolute top-0 right-0 w-32 h-32 bg-mainTheme/10 rounded-full -translate-y-16 translate-x-16"
            ></div>
            <div class="relative z-10">
              <h3 class="text-2xl font-bold text-white mb-4">
                Minha Filosofia
              </h3>
              <p class="text-white/80 leading-relaxed">
                Acredito que a transformação física vai além da estética - é
                sobre
                <strong class="text-secondaryTheme"> disciplina</strong>,
                <strong class="text-mainTheme"> consistência</strong> e
                <strong class="text-secondaryTheme"> superação pessoal</strong>.
                Meu objetivo é guiar cada aluno não apenas para resultados
                visíveis, mas para uma relação saudável e duradoura com o
                exercício físico.
              </p>
            </div>
          </div>
        </div>

        <div class="space-y-12">
          <div>
            <div
              v-motion="animations.slideUp"
              class="flex items-center gap-3 mb-8"
            >
              <div
                class="w-12 h-0.5 bg-gradient-to-r from-mainTheme to-secondaryTheme"
              ></div>
              <h3 class="gradient-text font-bold text-2xl lg:text-3xl">
                Serviços Oferecidos
              </h3>
              <div
                class="w-12 h-0.5 bg-gradient-to-r from-secondaryTheme to-mainTheme"
              ></div>
            </div>

            <div class="space-y-6">
              <div
                v-for="(servico, index) in servicosData"
                :key="index"
                v-motion="servicosStagger(index)"
                class="group bg-navBlack/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-mainTheme/50 transition-all duration-300 hover:translate-x-2"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-16 h-16 rounded-xl bg-gradient-to-br from-mainTheme/20 to-secondaryTheme/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  >
                    <Icon
                      :name="servico.icon"
                      class="w-8 h-8 text-mainTheme group-hover:text-secondaryTheme transition-colors duration-300"
                    />
                  </div>
                  <div class="flex-1">
                    <h4 class="text-xl font-bold text-white mb-2">
                      {{ servico.title }}
                    </h4>
                    <p class="text-white/70">{{ servico.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              v-motion="animations.slideUp"
              class="flex items-center gap-3 mb-8"
            >
              <div
                class="w-12 h-0.5 bg-gradient-to-r from-secondaryTheme to-mainTheme"
              ></div>
              <h3 class="gradient-text font-bold text-2xl lg:text-3xl">
                Metodologia
              </h3>
              <div
                class="w-12 h-0.5 bg-gradient-to-r from-mainTheme to-secondaryTheme"
              ></div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div
                v-for="(item, index) in metodologiaData"
                :key="index"
                v-motion="metodologiaStagger(index)"
                class="group bg-gradient-to-b from-navBlack/60 to-deepBlue/60 border border-white/10 rounded-xl p-6 hover:border-mainTheme/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  class="w-14 h-14 rounded-xl bg-gradient-to-br from-mainTheme/20 to-mainTheme/10 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon
                    :name="item.icon"
                    class="w-6 h-6 text-mainTheme group-hover:text-secondaryTheme transition-colors duration-300"
                  />
                </div>
                <h4 class="text-lg font-bold text-white mb-3">
                  {{ item.title }}
                </h4>
                <p class="text-white/70 text-sm leading-relaxed">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>

          <div
            v-motion="animations.scaleIn"
            class="bg-gradient-to-r from-mainTheme/10 to-secondaryTheme/10 border border-white/10 rounded-2xl p-8 text-center"
          >
            <h4 class="text-xl font-bold text-white mb-4">
              Pronto para Transformar Seu Corpo?
            </h4>
            <p class="text-white/70 mb-6">
              Entre em contato para uma avaliação personalizada e descubra como
              posso ajudar você a alcançar seus objetivos.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=558198955665&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-3 bg-gradient-to-r from-mainTheme to-blue-600 hover:from-blue-500 hover:to-mainTheme text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              <Icon name="logos:whatsapp-icon" class="text-2xl" />
              <span>Agendar Consultoria</span>
            </a>
          </div>
        </div>
      </div>

      <div
        v-motion="animations.slideUp"
        class="mt-20 pt-12 border-t border-white/10"
      >
        <div class="text-center mb-10">
          <h3 class="text-2xl lg:text-3xl font-bold text-white mb-4">
            Cursos e Certificações
          </h3>
          <p class="text-white/70 max-w-2xl mx-auto text-lg">
            Busco constantemente pelo que há de mais recente na ciência para
            aplicar as melhores evidências nos treinos dos meus alunos.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div
            v-for="(curso, index) in cursosData"
            :key="index"
            v-motion="cursosStagger(index)"
            class="relative group bg-gradient-to-br from-navBlack/80 to-deepBlue/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-mainTheme/30 transition-all duration-300"
          >
            <div
              class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-mainTheme/10 to-secondaryTheme/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
            ></div>

            <div
              class="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4"
            >
              <div
                class="w-14 h-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-mainTheme/20 to-mainTheme/10 border border-mainTheme/30 flex items-center justify-center"
              >
                <Icon
                  :name="curso.icon"
                  class="w-6 h-6 text-mainTheme group-hover:text-secondaryTheme transition-colors duration-300"
                />
              </div>
              <span
                class="bg-white/5 text-white/60 text-xs font-bold px-3 py-1.5 rounded-full border border-white/10 tracking-widest uppercase self-start sm:self-auto"
              >
                {{ curso.date }}
              </span>
            </div>

            <h4
              class="text-xl font-bold text-white mb-5 group-hover:text-mainTheme transition-colors duration-300 leading-snug"
            >
              {{ curso.title }}
            </h4>

            <ul class="space-y-3">
              <li
                v-for="(topico, idx) in curso.topics"
                :key="idx"
                class="flex items-start gap-3"
              >
                <Icon
                  name="lucide:check-circle"
                  class="w-5 h-5 text-secondaryTheme mt-0.5 flex-shrink-0"
                />
                <span class="text-white/70 text-sm leading-relaxed">{{
                  topico
                }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        v-motion="animations.slideUp"
        class="mt-20 pt-12 border-t border-white/10"
      >
        <div class="max-w-5xl mx-auto">
          <h3
            class="text-2xl lg:text-3xl font-bold text-white text-center mb-12"
          >
            Experiência Complementar
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="(item, index) in experiencias"
              :key="index"
              v-motion="experienciasStagger(index)"
              :class="`bg-gradient-to-br ${item.color} border border-white/10 rounded-2xl p-8 text-center hover:-translate-y-2 transition-transform duration-300`"
            >
              <h4 class="text-xl font-bold text-white mb-4">
                {{ item.title }}
              </h4>
              <p class="text-white/80">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { animations, createStagger } from "~/utils/animations";

// Criar staggers para diferentes seções
const formacaoStagger = createStagger("scaleIn", 200);
const servicosStagger = createStagger("slideLeft", 200);
const metodologiaStagger = createStagger("popIn", 100);
const cursosStagger = createStagger("slideUp", 150);
const experienciasStagger = createStagger("slideUp", 100);

// Dados de formação
const formacaoData = [
  {
    icon: "lucide:graduation-cap",
    title: "Formação Acadêmica",
    items: [
      "Bacharel em Educação Física",
      "Especialista em hipertrofia e emagrecimento",
    ],
  },
  {
    icon: "lucide:target",
    title: "Foco Principal",
    items: [
      "Hipertrofia Muscular",
      "Emagrecimento Eficiente",
      "Condicionamento Físico",
      "Preparação para Competições",
    ],
  },
];

// Dados de serviços
const servicosData = [
  {
    icon: "lucide:video",
    title: "Consultoria Online",
    description:
      "Acompanhamento completo via WhatsApp com treinos personalizados e ajustes semanais",
  },
  {
    icon: "lucide:users",
    title: "Treinamento Presencial",
    description:
      "Acompanhamento individual em academia com correção técnica e periodização avançada",
  },
];

// Dados de metodologia
const metodologiaData = [
  {
    icon: "lucide:dumbbell",
    title: "Treinos Personalizados",
    description:
      "Protocolos desenvolvidos especificamente para seu biotipo, objetivos e disponibilidade",
  },
  {
    icon: "lucide:clock",
    title: "Adaptável à Rotina",
    description:
      "Seja em casa, na academia ou onde preferir - seu treino se adapta ao seu estilo de vida",
  },
  {
    icon: "lucide:message-circle",
    title: "Suporte Diário",
    description:
      "Acompanhamento constante via WhatsApp para dúvidas, ajustes e motivação",
  },
  {
    icon: "lucide:calendar",
    title: "Atualização Mensal",
    description:
      "Treinos revisados e atualizados mensalmente para evitar platô e manter evolução constante",
  },
];

// Dados de cursos e certificações (Novos Certificados)
const cursosData = [
  {
    icon: "lucide:book-open",
    title: "ENAF - 4º Congresso Brasileiro de Musculação",
    date: "Maio 2025",
    topics: [
      "Estudo da amplitude de movimento na musculação",
      "Métodos de intensificação (MX10) e exercícios com/sem falha",
      "Shape feminino, benefícios do treinamento recorrente",
      "Periodização de treino de força",
    ],
  },
  {
    icon: "lucide:book-open",
    title: "Treinamento e Recursos Ergogênicos no Esporte",
    date: "Março 2026",
    topics: [
      "Variáveis e métodos de treinamento avançados",
      "Dieta e nutrição voltada para esporte de alto rendimento",
      "Aplicações estratégicas de recursos ergogênicos",
      "Posicionamento, tráfego pago e marketing para personais",
    ],
  },
];

// Dados de experiência complementar
const experiencias = [
  {
    title: "Atleta Competitivo",
    description:
      "2x Campeão Mens Physique com experiência em preparação para competições",
    color: "from-mainTheme/20 to-blue-600/20",
  },
  {
    title: "+10 Anos de Prática",
    description:
      "Experiência pessoal intensa em musculação e métodos de treinamento",
    color: "from-secondaryTheme/20 to-yellow-500/20",
  },
  {
    title: "Liderança de Equipe",
    description: "Coordenação do Time TF com dezenas de alunos transformados",
    color: "from-mainTheme/20 to-secondaryTheme/20",
  },
];
</script>
