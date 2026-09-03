"use client";

import { motion } from "motion/react";
import { slideUp, slideRight } from "@/components/animatedComponents/variants";
import TitleAnimated from "./animatedComponents/TitleAnimated";
import Carousel from "./carousel/Carousel";
import { FiHeart } from "react-icons/fi";

export default function TimeTF() {
  const members = [
    {
      path: "/img/time_TF/tf1.jpeg",
      name: "Membro TF",
      role: "Ativo há 8 meses",
    },
    {
      path: "/img/time_TF/tf2.jpeg",
      name: "Membro TF",
      role: "Transformação em andamento",
    },
    {
      path: "/img/time_TF/tf3.jpeg",
      name: "Membro TF",
      role: "Foco total nos objetivos",
    },
    {
      path: "/img/time_TF/tf4.jpeg",
      name: "Membro TF",
      role: "Disciplina e evolução",
    },
    {
      path: "/img/time_TF/tf5.jpeg",
      name: "Membro TF",
      role: "Resultados consistentes",
    },
    {
      path: "/img/time_TF/tf6.jpeg",
      name: "Membro TF",
      role: "Dedicação máxima",
    },
  ];

  const slides = members.map((m) => ({
    type: "image" as const,
    src: m.path,
    alt: m.name,
    caption: `${m.name} - ${m.role}`,
  }));

  return (
    <section className="from-deepBlue via-navBlack to-deepBlue relative overflow-hidden bg-gradient-to-b py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="bg-mainTheme absolute top-1/4 left-1/4 h-64 w-64 rounded-full blur-3xl" />
        <div className="bg-secondaryTheme absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="from-mainTheme/15 to-secondaryTheme/15 mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-5 py-2"
          >
            <FiHeart className="text-mainTheme h-5 w-5" />
            <span className="text-sm font-medium tracking-wider text-white/80">
              FAMÍLIA TF
            </span>
          </motion.div>
          <TitleAnimated>Nossa Comunidade</TitleAnimated>
          <motion.p
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-white/70"
          >
            Conheça alguns membros do Time TF que estão transformando suas vidas
            através da disciplina, dedicação e método comprovado.
          </motion.p>
        </div>

        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mt-4 mb-16"
        >
          <Carousel
            slides={slides}
            options={{ loop: true, autoplay: true, delay: 3000 }}
            showArrows
            showDots
            imageAspectRatio="square"
            slideClassName="px-2"
          />
        </motion.div>

        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="relative inline-block">
            <div className="from-mainTheme/20 to-secondaryTheme/20 absolute -inset-1 rounded-2xl bg-gradient-to-r blur-xl" />
            <p className="relative z-10 text-lg text-white/70">
              Faça parte dessa família que cresce a cada dia, compartilhando
              conquistas, superando desafios e construindo uma versão melhor de
              si mesmo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
