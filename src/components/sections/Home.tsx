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
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-5 pt-20 pb-8 sm:px-8 sm:pt-24 lg:px-12 lg:pt-16 lg:pb-4">
      {/*
       * A Home permanece transparente para o `.bg-luxury` global aparecer.
       * Os brilhos abaixo apenas acrescentam profundidade e são estáticos.
       */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="bg-secondaryTheme/10 absolute top-1/4 right-[6%] h-[26rem] w-[26rem] rounded-full blur-[120px] sm:h-[34rem] sm:w-[34rem]" />
        <div className="bg-mainTheme/10 absolute -bottom-24 -left-20 h-80 w-80 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Faixa 1: selo alinhado à esquerda e filete decorativo até a borda. */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-4 sm:gap-6"
        >
          <span className="border-secondaryTheme/20 inline-flex items-center gap-2 rounded-full border bg-white/5 px-4 py-2 text-xs font-medium text-white/75 backdrop-blur-xl sm:text-sm">
            <FiAward className="text-secondaryTheme" />
            Personal Trainer Certificado
          </span>
          <span
            aria-hidden
            className="via-secondaryTheme/25 hidden h-px flex-1 bg-gradient-to-r from-transparent to-transparent sm:block"
          />
        </motion.div>

        {/*
         * Faixa 2: palco editorial. No mobile a ordem é nome -> retrato -> bio;
         * no desktop o retrato ocupa as duas linhas à direita (row-span-2).
         */}
        <div className="mt-6 grid gap-8 sm:mt-8 lg:mt-6 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-4">
          <div className="relative z-20 lg:col-span-7 lg:row-start-1 lg:flex lg:flex-col">
            <motion.h1
              variants={slideUp}
              initial="hidden"
              animate="visible"
              className="text-[clamp(3.25rem,10vw,8.75rem)] leading-[0.84] font-black tracking-tighter"
            >
              <span className="gradient-text2 block">Talles</span>
              <span className="gradient-text block lg:pl-[14%]">Furtado</span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.15 }}
              className="mt-6 border-t border-white/10 pt-4 lg:mt-8 lg:pt-5"
            >
              <div className="flex items-start gap-3">
                <FaDumbbell className="text-secondaryTheme mt-0.5 h-4 w-4 flex-shrink-0" />
                <h2 className="text-sm font-semibold tracking-[0.08em] text-white/85 sm:text-base lg:text-lg">
                  Especialista em Hipertrofia e Emagrecimento
                </h2>
              </div>

              {/* Altura fixa evita que a troca do texto rotativo mova a bio. */}
              <div className="mt-3 flex h-7 items-center gap-2 overflow-hidden">
                <span
                  aria-hidden
                  className="bg-secondaryTheme h-1.5 w-1.5 flex-shrink-0 rounded-full"
                />
                <p className="text-mainTheme text-base font-medium sm:text-lg">
                  {texts[currentTextIndex]}
                </p>
              </div>
            </motion.div>
          </div>

          {/*
           * Retrato editorial: o PNG tem fundo transparente, então ele é
           * recortado sobre um arco — sem card retangular. A moldura usa um
           * gradiente dourado de 1px obtido por máscara (o miolo fica vazado
           * para o fundo global aparecer) e o glow estático fica atrás.
           */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="relative mx-auto w-full max-w-[280px] sm:max-w-[330px] lg:col-span-5 lg:row-span-2 lg:row-start-1 lg:max-w-[360px] lg:self-end"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-[radial-gradient(circle_at_50%_38%,rgba(250,204,21,0.16),transparent_65%)] blur-2xl"
            />

            {/* Miolo em vidro sutil: dá profundidade ao arco sem fechar um card opaco. */}
            <div
              aria-hidden
              className="from-secondaryTheme/[0.10] absolute inset-x-2 top-10 bottom-0 rounded-t-[12rem] rounded-b-[2rem] bg-gradient-to-b via-white/[0.02] to-transparent backdrop-blur-[2px]"
            />

            {/*
             * Moldura de 1px com gradiente: a máscara de duas camadas mantém
             * apenas o anel do padding, deixando o miolo vazado para o fundo.
             * Vai em style porque o atalho `mask` do Tailwind pode sobrescrever
             * a composição dependendo da ordem das utilidades geradas.
             */}
            <div
              aria-hidden
              className="from-secondaryTheme/70 via-secondaryTheme/25 absolute inset-x-2 top-10 bottom-0 rounded-t-[12rem] rounded-b-[2rem] bg-gradient-to-b to-white/10 p-px"
              style={{
                mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                maskComposite: "exclude",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
              }}
            />

            <div
              aria-hidden
              className="absolute inset-x-6 top-16 bottom-5 rounded-t-[10rem] rounded-b-[1.75rem] border border-white/10"
            />
            <div
              aria-hidden
              className="absolute bottom-1 left-1/2 h-5 w-3/4 -translate-x-1/2 rounded-[100%] bg-black/50 blur-xl"
            />

            <Image
              src="/img/Img_Hero/profile2.png"
              alt="Talles Furtado - Personal Trainer"
              width={696}
              height={914}
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 330px, 360px"
              className="relative z-10 mx-auto h-auto w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
              priority
            />

            {/* Widgets em alturas diferentes para uma leitura de dashboard. */}
            <motion.div
              variants={slideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.35 }}
              className="bg-navBlack/70 border-secondaryTheme/20 hover:border-secondaryTheme/40 absolute top-[40%] left-0 z-20 rounded-xl border p-2.5 shadow-xl backdrop-blur-xl transition-colors duration-300 sm:-left-4 sm:p-3"
            >
              <div className="flex items-center gap-2.5">
                <div className="bg-secondaryTheme/15 flex h-8 w-8 items-center justify-center rounded-full">
                  <FiAward className="text-secondaryTheme h-4 w-4" />
                </div>
                <div className="text-left">
                  <div className="text-secondaryTheme text-sm font-bold">
                    2x
                  </div>
                  <div className="text-[10px] text-white/50">Campeão</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={slideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="bg-navBlack/70 border-secondaryTheme/20 hover:border-secondaryTheme/40 absolute right-0 bottom-[12%] z-20 rounded-xl border p-2.5 shadow-xl backdrop-blur-xl transition-colors duration-300 sm:-right-4 sm:p-3"
            >
              <div className="flex items-center gap-2.5">
                <div className="bg-mainTheme/15 flex h-8 w-8 items-center justify-center rounded-full">
                  <FaDumbbell className="text-mainTheme h-4 w-4" />
                </div>
                <div className="text-left">
                  <div className="text-secondaryTheme text-sm font-bold">
                    +10 anos
                  </div>
                  <div className="text-[10px] text-white/50">Experiência</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="max-w-xl text-base leading-relaxed text-white/60 lg:col-span-7 lg:row-start-2 lg:mt-2 lg:max-w-lg"
          >
            <strong className="font-semibold text-white/85">
              Bacharel em Educação Física
            </strong>
            , atleta de fisiculturismo e praticante há mais de{" "}
            <strong className="font-semibold text-white/85">10 anos</strong>.
            Dedico minha carreira a transformar vidas através do esporte,
            combinando ciência, experiência prática e acompanhamento
            personalizado.
          </motion.p>
        </div>

        {/* Faixa 3: indicadores minimalistas + CTAs ancorando a base. */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="mt-8 border-t border-white/10 pt-5 sm:mt-10 sm:pt-6 lg:mt-8"
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-8">
            <div className="grid grid-cols-3 divide-x divide-white/10 lg:col-span-7">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`${index === 0 ? "pr-3" : index === 1 ? "px-3" : "pl-3"} sm:px-5`}
                >
                  <div className="text-secondaryTheme text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[9px] leading-tight font-medium tracking-[0.1em] text-balance text-white/40 uppercase sm:text-[10px] sm:tracking-[0.14em] lg:text-[11px]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end lg:border-l lg:border-white/10 lg:pl-8">
              <a
                href="#planos"
                className="group from-secondaryTheme hover:to-secondaryTheme text-deepBlue focus-visible:ring-secondaryTheme focus-visible:ring-offset-deepBlue to-mainTheme flex items-center justify-center gap-3 rounded-full bg-gradient-to-r px-7 py-3.5 text-sm font-bold shadow-lg transition-all duration-300 hover:from-yellow-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.35)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-[0.98] sm:text-base"
              >
                <span>Ver Planos</span>
                <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=558198955665&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="group hover:border-secondaryTheme/40 focus-visible:ring-secondaryTheme focus-visible:ring-offset-deepBlue flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-[0.98] sm:text-base"
              >
                <FaWhatsapp className="text-lg text-green-400 transition-transform duration-300 group-hover:scale-110" />
                <span>Fale no WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Indicador de rolagem: no fluxo, abaixo da faixa de indicadores. */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.45 }}
          className="mt-4 flex justify-center sm:mt-5"
        >
          <a
            href="#sobre"
            className="hover:text-secondaryTheme focus-visible:ring-secondaryTheme focus-visible:ring-offset-deepBlue flex flex-col items-center text-white/40 transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <span className="mb-1.5 text-[11px] tracking-[0.16em]">
              Saiba mais
            </span>
            <FiChevronDown className="h-4 w-4 animate-bounce motion-reduce:animate-none" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
