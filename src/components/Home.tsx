"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  slideUp,
  scaleIn,
  fadeUp,
} from "@/components/animatedComponents/variants";
import { FiAward, FiChevronDown, FiArrowRight } from "react-icons/fi";
import { FaDumbbell } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    "Transformando vidas",
    "Resultados garantidos",
    "Metodologia comprovada",
    "Disciplina e evolução",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const stats = [
    { value: "10+", label: "Anos de Experiência" },
    { value: "2x", label: "Campeão Mens Physique" },
    { value: "100%", label: "Satisfação dos alunos" },
  ];

  return (
    <section className="bg-deepBlue relative flex min-h-screen items-center overflow-hidden px-7 pt-10">
      {/* Fundo animado */}
      <div className="from-deepBlue via-navBlack to-deepBlue absolute inset-0 bg-gradient-to-br">
        <div className="absolute inset-0 opacity-10">
          <div className="bg-mainTheme absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full opacity-20 mix-blend-screen blur-3xl filter" />
          <div className="bg-secondaryTheme absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full opacity-20 mix-blend-screen blur-3xl filter delay-1000" />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-12 py-12 lg:flex-row">
        {/* Coluna esquerda */}
        <div className="space-y-8 lg:w-1/2">
          <motion.div variants={slideUp} initial="hidden" animate="visible">
            <span className="from-mainTheme/20 to-secondaryTheme/20 border-mainTheme/30 inline-flex items-center gap-2 rounded-full border bg-gradient-to-r px-4 py-2 text-sm font-medium text-white/80">
              <FiAward className="text-secondaryTheme" />
              Personal Trainer Certificado
            </span>
          </motion.div>

          <motion.h1
            variants={slideUp}
            initial="hidden"
            animate="visible"
            className="text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="gradient-text2 lg:block">Talles</span>
            <span className="gradient-text lg:block">Furtado</span>
          </motion.h1>

          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="mb-2 flex items-center gap-3">
              <FaDumbbell className="text-secondaryTheme h-6 w-6" />
              <h2 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                Especialista em Hipertrofia e Emagrecimento
              </h2>
            </div>
            <div className="h-8 overflow-hidden">
              <p className="text-mainTheme text-lg font-semibold transition-all duration-500 sm:text-xl">
                {texts[currentTextIndex]}
              </p>
            </div>
          </motion.div>

          <motion.p
            variants={slideUp}
            initial="hidden"
            animate="visible"
            className="text-base leading-relaxed text-white/80 sm:text-lg"
          >
            <strong>Bacharel em Educação Física</strong>, atleta de
            fisiculturismo e praticante há mais de <strong>10 anos</strong>.
            Dedico minha carreira a transformar vidas através do esporte,
            combinando ciência, experiência prática e acompanhamento
            personalizado.
          </motion.p>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-4 sm:grid-cols-3"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-navBlack/50 rounded-lg border border-white/10 p-4 text-center backdrop-blur-sm"
              >
                <div className="text-mainTheme mb-1 text-2xl font-bold">
                  {stat.value}
                </div>
                <div className="text-xs text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={slideUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#planos"
              className="group from-mainTheme hover:to-mainTheme shadow-mainTheme/30 flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r to-blue-600 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:from-blue-500"
            >
              <span>Ver Planos</span>
              <FiArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=558198955665&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-xl border border-green-500/30 bg-gradient-to-r from-green-600 to-green-500 px-8 py-4 font-bold text-white transition-all duration-300 hover:from-green-500 hover:to-green-400"
            >
              <FaWhatsapp className="text-2xl" />
              <span>Fale no WhatsApp</span>
            </a>
          </motion.div>
        </div>

        {/* Coluna direita - Imagem */}
        <div className="flex justify-center lg:w-1/2">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="from-mainTheme to-secondaryTheme absolute inset-0 animate-pulse rounded-full bg-gradient-to-r opacity-20 blur-2xl" />
            <div className="border-mainTheme/30 animate-spin-slow absolute -inset-4 rounded-full border-2" />
            <Image
              src="/img/Img_Hero/profile2.png"
              alt="Talles Furtado - Personal Trainer"
              width={450}
              height={450}
              className="shadow-mainTheme/30 relative z-10 w-[280px] rounded-2xl border-4 border-white/10 shadow-2xl sm:w-[350px] lg:w-[450px]"
              priority
            />
            {/* Cards flutuantes */}
            <motion.div
              variants={slideUp}
              initial="hidden"
              animate="visible"
              className="bg-navBlack/80 absolute -bottom-6 -left-6 z-20 rounded-xl border border-white/10 p-4 shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="bg-mainTheme/20 flex h-10 w-10 items-center justify-center rounded-full">
                  <FaDumbbell className="text-mainTheme h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold text-white">+10 anos</div>
                  <div className="text-xs text-white/60">Experiência</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={slideUp}
              initial="hidden"
              animate="visible"
              className="bg-navBlack/80 absolute -top-6 -right-6 z-20 rounded-xl border border-white/10 p-4 shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="bg-secondaryTheme/20 flex h-10 w-10 items-center justify-center rounded-full">
                  <FiAward className="text-secondaryTheme h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold text-white">2x</div>
                  <div className="text-xs text-white/60">Campeão</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
      >
        <a
          href="#sobre"
          className="hover:text-mainTheme flex flex-col items-center text-white/60 transition-colors duration-300"
        >
          <span className="mb-2 text-sm">Saiba mais</span>
          <FiChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
