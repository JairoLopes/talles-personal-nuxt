"use client";

import { motion } from "motion/react";
import { slideUp } from "@/components/animatedComponents/variants";
import Image from "next/image";
import {
  FiInstagram,
  FiExternalLink,
  FiShoppingBag,
  FiCode,
  FiHeart,
} from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="from-navBlack to-deepBlue border-t border-white/10 bg-gradient-to-b">
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Grid principal */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Coluna 1: Logo e descrição */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="bg-mainTheme/20 absolute inset-0 rounded-full blur-lg" />
                <Image
                  src="/img/Logo/A4.png"
                  alt="Talles Furtado Personal Trainer"
                  width={64}
                  height={64}
                  className="relative"
                  style={{ width: "auto", height: "auto" }} // força a manutenção da proporção
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Talles Furtado</h3>
                <p className="text-sm text-white/60">Personal Trainer</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Transformando vidas através do esporte há mais de 10 anos.
              Especialista em hipertrofia, emagrecimento e preparação física.
            </p>
          </div>

          {/* Coluna 2: Redes Sociais */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 text-lg font-bold text-white">
              <FiInstagram className="text-secondaryTheme h-5 w-5" />
              Redes Sociais
            </h3>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/talles.furtado/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl bg-white/5 p-3 transition-all duration-300 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-600/20 transition-transform group-hover:scale-110">
                  <FiInstagram className="h-6 w-6 text-pink-500" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-white">Talles Personal</div>
                  <div className="text-sm text-white/60">Siga no Instagram</div>
                </div>
                <FiExternalLink className="group-hover:text-mainTheme h-4 w-4 text-white/40" />
              </a>
              <a
                href="https://www.instagram.com/nutricionistajulialopes/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl bg-white/5 p-3 transition-all duration-300 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-600/20 transition-transform group-hover:scale-110">
                  <FiInstagram className="h-6 w-6 text-green-500" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-white">Júlia Nutri</div>
                  <div className="text-sm text-white/60">
                    Nutricionista Parceira
                  </div>
                </div>
                <FiExternalLink className="group-hover:text-mainTheme h-4 w-4 text-white/40" />
              </a>
            </div>
          </div>

          {/* Coluna 3: Loja */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 text-lg font-bold text-white">
              <FiShoppingBag className="text-secondaryTheme h-5 w-5" />
              Nossa Loja
            </h3>
            <div className="group from-navBlack/80 to-deepBlue/80 hover:border-mainTheme/30 relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br p-6 transition-all duration-500">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="relative">
                  <div className="from-secondaryTheme/20 absolute inset-0 rounded-full bg-gradient-to-r to-yellow-500/20 blur-lg" />
                  <Image
                    src="/img/Logo/TF_Suplementos.png"
                    alt="TF Suplementos"
                    width={128}
                    height={128}
                    className="relative"
                  />
                </div>
                <div>
                  <h4 className="mb-2 font-bold text-white">TF Suplementos</h4>
                  <p className="mb-4 text-sm text-white/70">
                    Suplementação de qualidade com descontos especiais para
                    alunos
                  </p>
                  <a
                    href="https://www.instagram.com/tfsuplementos_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="from-secondaryTheme text-deepBlue hover:to-secondaryTheme inline-flex items-center gap-2 rounded-lg bg-gradient-to-r to-yellow-500 px-6 py-2 text-sm font-bold transition-all duration-300 hover:from-yellow-500"
                  >
                    <FiInstagram className="h-4 w-4" />
                    Seguir Loja
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 4 pode ser vazia ou adicionar algo */}
        </div>

        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Desenvolvedor */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="from-mainTheme/10 via-mainTheme/5 relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r to-transparent p-6 md:p-8"
        >
          <div className="bg-mainTheme/5 absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full" />
          <div className="bg-secondaryTheme/5 absolute bottom-0 left-0 h-32 w-32 -translate-x-16 translate-y-16 rounded-full" />
          <div className="relative z-10">
            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
              <div className="flex items-center gap-4">
                <div className="border-mainTheme/30 from-mainTheme/20 to-mainTheme/10 flex h-16 w-16 items-center justify-center rounded-xl border bg-gradient-to-br">
                  <FiCode className="text-mainTheme h-8 w-8" />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-bold text-white">
                    Site Desenvolvido por
                  </h4>
                  <div className="flex items-center gap-2">
                    <FiHeart className="fill-secondaryTheme text-secondaryTheme h-4 w-4" />
                    <a
                      href="https://jairolopes-dev.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gradient-text inline-block text-lg font-bold transition-transform hover:scale-105"
                    >
                      Jairo Lopes
                    </a>
                  </div>
                  <p className="mt-2 text-sm text-white/60">
                    Desenvolvedor web, especialista em
                    <span className="font-semibold text-emerald-600">
                      {" "}
                      Next.js/ React
                    </span>
                  </p>
                </div>
              </div>
              <a
                href="https://jairolopes-dev.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group from-mainTheme hover:to-mainTheme flex items-center gap-3 rounded-lg bg-gradient-to-r to-blue-600 px-6 py-3 font-bold text-white transition-all duration-300 hover:from-blue-500"
              >
                <span>Ver Portfólio</span>
                <FiExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <div className="mt-6 border-t border-white/10 pt-6 text-center">
              <p className="text-sm text-white/50">
                Este site foi desenvolvido com atenção aos detalhes, performance
                e experiência do usuário.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center text-sm text-white/50 md:text-left">
              © {year} Talles Furtado Personal Trainer. Todos os direitos
              reservados.
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#home"
                className="hover:text-mainTheme text-sm text-white/50 transition-colors"
              >
                Voltar ao topo
              </a>
              <a
                href="#planos"
                className="hover:text-mainTheme text-sm text-white/50 transition-colors"
              >
                Planos
              </a>
              <a
                href="#sobre"
                className="hover:text-mainTheme text-sm text-white/50 transition-colors"
              >
                Sobre
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
