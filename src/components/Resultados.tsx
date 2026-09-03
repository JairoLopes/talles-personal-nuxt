"use client";

import { motion } from "motion/react";
import {
  slideUp,
  slideRight,
  slideLeft,
} from "@/components/animatedComponents/variants";
import TitleAnimated from "./animatedComponents/TitleAnimated";
import Carousel from "./carousel/Carousel";
import { FiTrendingUp, FiUsers, FiStar } from "react-icons/fi";
import { FaShieldAlt } from "react-icons/fa";

export default function Resultados() {
  // Dados para carrossel de alunos
  const alunosSlides = [
    {
      type: "image" as const,
      src: "/img/img_Resultado_Alunos/Aluno2026_2.jpeg",
    },
    { type: "image" as const, src: "/img/img_Resultado_Alunos/first.jpeg" },
    {
      type: "image" as const,
      src: "/img/img_Resultado_Alunos/Aluno2026_1.jpeg",
    },
    {
      type: "image" as const,
      src: "/img/img_Resultado_Alunos/lastAlunoVerso.jpeg",
    },
    {
      type: "image" as const,
      src: "/img/img_Resultado_Alunos/Aluno2026_3.jpeg",
    },
    {
      type: "image" as const,
      src: "/img/img_Resultado_Alunos/lastAlunoFrente.jpeg",
    },
    {
      type: "image" as const,
      src: "/img/img_Resultado_Alunos/Aluno2026_4.jpeg",
    },
    { type: "image" as const, src: "/img/img_Resultado_Alunos/felipe.png" },
    { type: "image" as const, src: "/img/img_Resultado_Alunos/tai.jpeg" },
    { type: "image" as const, src: "/img/img_Resultado_Alunos/barbara.jpeg" },
    { type: "image" as const, src: "/img/img_Resultado_Alunos/julio.png" },
    {
      type: "image" as const,
      src: "/img/img_Resultado_Alunos/alunoNovo1.jpeg",
    },
    {
      type: "image" as const,
      src: "/img/img_Resultado_Alunos/alunoNovo2.jpeg",
    },
    {
      type: "image" as const,
      src: "/img/img_Resultado_Alunos/alunoNovo3.jpeg",
    },
    {
      type: "image" as const,
      src: "/img/img_Resultado_Alunos/alunoNovo4.jpeg",
    },
  ];

  // Dados para carrossel "Meus Resultados"
  const meusResultadosSlides = [
    {
      type: "image" as const,
      src: "/img/profile/t26.jpeg",
      caption: "Performance Atleta - Março/2026",
    },
    {
      type: "image" as const,
      src: "/img/profile/t3.jpeg",
      caption: "Performance Atleta",
    },
    {
      type: "image" as const,
      src: "/img/profile/t2.jpeg",
      caption: "Off-Season Controlado",
    },
    {
      type: "image" as const,
      src: "/img/profile/t1.jpeg",
      caption: "Condicionamento Extremo",
    },
  ];

  const stats = [
    { value: "+50", label: "Alunos Transformados", color: "text-mainTheme" },
    {
      value: "100%",
      label: "Satisfação do Time",
      color: "text-secondaryTheme",
    },
    { value: "2x", label: "Campeão Mens Physique", color: "text-mainTheme" },
  ];

  return (
    <section className="section-style bg-deepBlue">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="mb-12 text-center">
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="from-mainTheme/15 to-secondaryTheme/15 mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-4 py-1.5"
          >
            <FiTrendingUp className="text-mainTheme h-4 w-4" />
            <span className="text-sm font-medium text-white/80">
              RESULTADOS COMPROVADOS
            </span>
          </motion.div>
          <TitleAnimated>Transformações Reais</TitleAnimated>
          <motion.p
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70"
          >
            Veja os resultados alcançados pelos meus alunos e pela aplicação
            consistente da minha metodologia.
          </motion.p>
        </div>

        {/* Banner de chamada */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="from-mainTheme/10 to-secondaryTheme/10 relative mb-16 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r p-8"
        >
          <div className="relative z-10 flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="lg:w-2/3">
              <h2 className="mb-3 flex items-center gap-3 text-2xl font-bold text-white lg:text-3xl">
                <FiUsers className="text-secondaryTheme h-8 w-8" />
                Vem pro Time TF!
              </h2>
              <p className="text-lg text-white/80">
                Seguindo minha metodologia, somada à sua disciplina e
                constância, seremos capazes de obter resultados significativos
                em um tempo que nem você esperaria.
              </p>
            </div>
            <div className="flex justify-center lg:w-1/3">
              <div className="from-secondaryTheme text-deepBlue inline-flex items-center gap-2 rounded-xl bg-gradient-to-r to-yellow-500 px-6 py-3 font-bold shadow-lg">
                <FiStar className="h-5 w-5" />
                <span>Junte-se a nós</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Carrossel Alunos */}
        <div className="mb-24">
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8 flex items-center justify-between"
          >
            <div>
              <h2 className="mb-2 text-2xl font-bold text-white lg:text-3xl">
                Resultados dos Alunos
              </h2>
              <p className="text-white/60">
                Transformações reais alcançadas com dedicação e método
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Carousel
              slides={alunosSlides}
              options={{ loop: true, autoplay: true, delay: 3000 }}
              showArrows
              showDots
              imageAspectRatio="portrait"
            />
          </motion.div>
        </div>

        {/* Meus Resultados */}
        <div className="rounded-3xl border border-white/5 bg-white/5 px-4 py-12 sm:px-8">
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="bg-mainTheme/10 mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5">
              <FaShieldAlt className="text-mainTheme h-4 w-4" />
              <span className="text-mainTheme text-sm font-bold tracking-widest uppercase">
                O Exemplo vem de cima
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-black text-white lg:text-4xl">
              Meus Resultados Pessoais
            </h2>
            <p className="mx-auto max-w-2xl text-base text-white/60 sm:text-lg">
              Não vendo apenas um protocolo, vendo um estilo de vida que eu
              mesmo sigo. A consistência na metodologia é o que garante o topo
              do pódio.
            </p>
          </motion.div>

          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Carousel
              slides={meusResultadosSlides}
              options={{ loop: true, autoplay: true, delay: 4000 }}
              showArrows
              showDots
              imageAspectRatio="portrait"
              slideClassName="py-4"
            />
          </motion.div>

          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-navBlack/40 rounded-2xl border border-white/5 p-6 text-center"
              >
                <div className={`mb-1 text-4xl font-black ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-xs font-bold tracking-widest text-white/50 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
