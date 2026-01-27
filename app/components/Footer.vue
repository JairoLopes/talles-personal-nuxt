<template>
  <footer
    id="footer"
    class="bg-gradient-to-b from-navBlack to-deepBlue border-t border-white/10"
  >
    <div
      class="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
    >
      <!-- Grid principal -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12"
      >
        <!-- Coluna 1: Logo e descrição -->
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <div class="relative">
              <div
                class="absolute inset-0 bg-mainTheme/20 rounded-full blur-lg"
              ></div>
              <NuxtImg
                src="/img/Logo/A4.png"
                alt="Talles Furtado Personal Trainer"
                class="relative w-16 h-16"
                loading="lazy"
                format="webp"
                :modifiers="{ quality: 85 }"
              />
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">Talles Furtado</h3>
              <p class="text-white/60 text-sm">Personal Trainer</p>
            </div>
          </div>

          <p class="text-white/70 text-sm leading-relaxed">
            Transformando vidas através do esporte há mais de 10 anos.
            Especialista em hipertrofia, emagrecimento e preparação física.
          </p>
        </div>

        <!-- Coluna 2: Redes Sociais -->
        <div class="space-y-6">
          <h3 class="text-lg font-bold text-white flex items-center gap-2">
            <Icon name="lucide:instagram" class="w-5 h-5 text-secondaryTheme" />
            Redes Sociais
          </h3>

          <div class="space-y-4">
            <a
              href="https://www.instagram.com/talles.furtado/"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <div
                class="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-600/20 flex items-center justify-center group-hover:scale-110 transition-transform"
              >
                <Icon name="lucide:instagram" class="w-6 h-6 text-pink-500" />
              </div>
              <div class="flex-1">
                <div class="font-medium text-white">Talles Personal</div>
                <div class="text-white/60 text-sm">Siga no Instagram</div>
              </div>
              <Icon
                name="lucide:external-link"
                class="w-4 h-4 text-white/40 group-hover:text-mainTheme"
              />
            </a>

            <a
              href="https://www.instagram.com/nutricionistajulialopes/"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <div
                class="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-600/20 flex items-center justify-center group-hover:scale-110 transition-transform"
              >
                <Icon name="lucide:instagram" class="w-6 h-6 text-green-500" />
              </div>
              <div class="flex-1">
                <div class="font-medium text-white">Júlia Nutri</div>
                <div class="text-white/60 text-sm">Nutricionista Parceira</div>
              </div>
              <Icon
                name="lucide:external-link"
                class="w-4 h-4 text-white/40 group-hover:text-mainTheme"
              />
            </a>
          </div>
        </div>

        <!-- Coluna 3: Loja -->
        <div class="space-y-6">
          <h3 class="text-lg font-bold text-white flex items-center gap-2">
            <Icon
              name="lucide:shopping-bag"
              class="w-5 h-5 text-secondaryTheme"
            />
            Nossa Loja
          </h3>

          <div
            class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-navBlack/80 to-deepBlue/80 border border-white/10 hover:border-mainTheme/30 transition-all duration-500 p-6"
          >
            <div class="flex flex-col items-center text-center space-y-4">
              <div class="relative">
                <div
                  class="absolute inset-0 bg-gradient-to-r from-secondaryTheme/20 to-yellow-500/20 rounded-full blur-lg"
                ></div>
                <NuxtImg
                  src="/img/Logo/TF_Suplementos.png"
                  alt="TF Suplementos"
                  class="relative w-32 h-32 object-contain"
                  loading="lazy"
                  format="webp"
                  :modifiers="{ quality: 85 }"
                />
              </div>

              <div>
                <h4 class="font-bold text-white mb-2">TF Suplementos</h4>
                <p class="text-white/70 text-sm mb-4">
                  Suplementação de qualidade com descontos especiais para alunos
                </p>
                <a
                  href="https://www.instagram.com/tfsuplementos_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 bg-gradient-to-r from-secondaryTheme to-yellow-500 hover:from-yellow-500 hover:to-secondaryTheme text-deepBlue font-bold py-2 px-6 rounded-lg transition-all duration-300 text-sm"
                >
                  <Icon name="lucide:instagram" class="w-4 h-4" />
                  Seguir Loja
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Divisor -->
      <div
        class="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"
      ></div>

      <!-- Seção do Desenvolvedor -->
      <div
        v-motion="animations.slideUp"
        class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-mainTheme/10 via-mainTheme/5 to-transparent border border-white/10 p-6 md:p-8"
      >
        <!-- Elementos decorativos -->
        <div
          class="absolute top-0 right-0 w-32 h-32 bg-mainTheme/5 rounded-full -translate-y-16 translate-x-16"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-32 h-32 bg-secondaryTheme/5 rounded-full translate-y-16 -translate-x-16"
        ></div>

        <div class="relative z-10">
          <div
            class="flex flex-col lg:flex-row items-center justify-between gap-6"
          >
            <!-- Informações do desenvolvedor -->
            <div class="flex items-center gap-4">
              <div
                class="w-16 h-16 rounded-xl bg-gradient-to-br from-mainTheme/20 to-mainTheme/10 border border-mainTheme/30 flex items-center justify-center"
              >
                <Icon name="lucide:code" class="w-8 h-8 text-mainTheme" />
              </div>
              <div>
                <h4 class="text-lg font-bold text-white mb-1">
                  Site Desenvolvido por
                </h4>
                <div class="flex items-center gap-2">
                  <Icon
                    name="lucide:heart"
                    class="w-4 h-4 text-secondaryTheme fill-secondaryTheme"
                  />
                  <a
                    href="https://jairolopes-dev.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="gradient-text font-bold text-lg hover:scale-105 transition-transform inline-block"
                  >
                    Jairo Lopes
                  </a>
                </div>
                <p class="text-white/60 text-sm mt-2">
                  Desenvolvedor Front-end, especialista em
                  <span class="text-emerald-600 font-semibold">Vue.js</span>
                </p>
              </div>
            </div>

            <!-- Botão para portfólio -->
            <a
              href="https://jairolopes-dev.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center gap-3 bg-gradient-to-r from-mainTheme to-blue-600 hover:from-blue-500 hover:to-mainTheme text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
            >
              <span>Ver Portfólio</span>
              <Icon
                name="lucide:external-link"
                class="w-4 h-4 group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          <!-- Mensagem adicional -->
          <div class="mt-6 pt-6 border-t border-white/10 text-center">
            <p class="text-white/50 text-sm">
              Este site foi desenvolvido com atenção aos detalhes, performance e
              experiência do usuário.
            </p>
          </div>
        </div>
      </div>

      <!-- Rodapé inferior -->
      <div class="mt-8 pt-8 border-t border-white/10">
        <div
          class="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div class="text-white/50 text-sm text-center md:text-left">
            © {{ new Date().getFullYear() }} Talles Furtado Personal Trainer.
            Todos os direitos reservados.
          </div>

          <div class="flex items-center gap-6">
            <a
              href="#home"
              class="text-white/50 hover:text-mainTheme transition-colors text-sm"
            >
              Voltar ao topo
            </a>
            <a
              href="#planos"
              class="text-white/50 hover:text-mainTheme transition-colors text-sm"
            >
              Planos
            </a>
            <a
              href="#formacao"
              class="text-white/50 hover:text-mainTheme transition-colors text-sm"
            >
              Sobre
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { animations } from "~/utils/animations";
</script>
