"use client";

import { motion } from "motion/react";
import { slideUp, scaleIn } from "@/components/animatedComponents/variants";
import TitleAnimated from "./animatedComponents/TitleAnimated";
import Carousel from "./carousel/Carousel";
import {
  FiThumbsUp,
  FiMessageCircle,
  FiUsers,
  FiStar,
  FiAward,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function FeedBack() {
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

  const stats = [
    { value: "100%", label: "Satisfação" },
    { value: "5.0", label: "Avaliação Média" },
    { value: "24/7", label: "Suporte" },
  ];

  return (
    <section className="section-style from-navBlack to-deepBlue overflow-hidden bg-gradient-to-b">
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="from-mainTheme/15 to-secondaryTheme/15 mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-4 py-1.5 md:mb-6 md:px-5 md:py-2"
          >
            <FiThumbsUp className="text-mainTheme h-4 w-4 md:h-5 md:w-5" />
            <span className="text-xs font-medium tracking-wider text-white/80 md:text-sm">
              DEPOIMENTOS REAIS
            </span>
          </motion.div>

          <TitleAnimated>Feedback dos Alunos</TitleAnimated>

          <motion.p
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mb-8 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base md:mb-12 md:text-lg"
          >
            Veja o que nossos alunos têm a dizer sobre a experiência de
            transformação com a metodologia personalizada do Time TF.
          </motion.p>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mb-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:mb-16 md:gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-navBlack/50 rounded-lg border border-white/10 p-3 text-center backdrop-blur-sm md:rounded-xl md:p-4 lg:p-6"
              >
                <div className="gradient-text mb-1 text-xl font-bold sm:text-2xl md:mb-2 md:text-3xl">
                  {stat.value}
                </div>
                <div className="text-xs text-white/70 sm:text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Carrossel de depoimentos */}
        <div className="relative mb-16 md:mb-20">
          <div className="mb-8 flex justify-center">
            <div className="bg-navBlack/50 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 backdrop-blur-sm">
              <FiMessageCircle className="text-mainTheme h-4 w-4" />
              <span className="text-sm text-white/80">
                Depoimento {testimonials.length} de {testimonials.length}
              </span>
            </div>
          </div>

          <Carousel
            options={{ loop: true, autoplay: true, delay: 4000 }}
            showArrows
            showDots
            imageAspectRatio="square"
            className="feedback-slider"
            slideClassName="px-2 sm:px-3"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="px-2 sm:px-3" // removido flex-[0_0_100%] porque o Carousel já controla o tamanho
              >
                <div className="from-navBlack/80 to-deepBlue/80 hover:border-mainTheme/30 hover:shadow-mainTheme/10 flex h-full flex-col rounded-xl border border-white/10 bg-gradient-to-b p-4 backdrop-blur-sm transition-all duration-500 hover:shadow-xl sm:p-6 md:rounded-2xl md:p-8 md:hover:shadow-2xl">
                  <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-start md:mb-6">
                    <div className="flex items-center gap-3">
                      <div className="from-mainTheme/20 to-mainTheme/10 border-mainTheme/30 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border bg-gradient-to-br sm:h-12 sm:w-12 md:h-14 md:w-14">
                        <FiMessageCircle className="text-mainTheme h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-bold text-white sm:text-base md:text-lg">
                          {testimonial.author}
                        </div>
                        <div className="mt-1 flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <FiStar
                              key={i}
                              className={`h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 ${
                                i < testimonial.rating
                                  ? "text-secondaryTheme fill-secondaryTheme"
                                  : "text-white/30"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="from-secondaryTheme/20 border-secondaryTheme/30 self-start rounded-full border bg-gradient-to-r to-yellow-500/20 px-2 py-1 sm:self-center sm:px-3 sm:py-1">
                      <span className="text-secondaryTheme truncate text-xs font-medium sm:text-sm">
                        {testimonial.result}
                      </span>
                    </div>
                  </div>
                  <div className="relative flex-grow">
                    <div className="text-mainTheme/20 absolute -top-3 -left-3 text-4xl sm:text-5xl md:text-6xl">
                      &quot;
                    </div>
                    <p className="relative z-10 line-clamp-5 text-sm leading-relaxed text-white/80 sm:text-base md:line-clamp-6 md:text-lg">
                      {testimonial.text}
                    </p>
                    <div className="text-mainTheme/20 absolute -right-3 -bottom-3 rotate-180 text-4xl sm:text-5xl md:text-6xl">
                      &quot;
                    </div>
                  </div>
                  <div className="mt-6 border-t border-white/10 pt-4 md:pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-white/60 sm:text-sm">
                        <FiUsers className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="truncate">Time TF Member</span>
                      </div>
                      <div className="text-xs text-white/40 sm:text-sm">
                        ⭐⭐⭐⭐⭐
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Seção Time TF - Família em Evolução */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="from-mainTheme/10 to-secondaryTheme/10 relative mb-12 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-r p-6 md:mb-16 md:rounded-2xl md:p-8 lg:rounded-3xl lg:p-12"
        >
          <div className="bg-mainTheme/5 absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full md:h-64 md:w-64 md:translate-x-32 md:-translate-y-32" />
          <div className="bg-secondaryTheme/5 absolute bottom-0 left-0 h-32 w-32 -translate-x-16 translate-y-16 rounded-full md:h-64 md:w-64 md:-translate-x-32 md:translate-y-32" />
          <div className="relative z-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 md:mb-6 md:gap-3">
              <FiAward className="text-secondaryTheme h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8" />
              <h3 className="text-lg font-bold text-white sm:text-xl md:text-2xl lg:text-3xl">
                Time TF - Família em Evolução
              </h3>
              <FiAward className="text-mainTheme h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8" />
            </div>
            <p className="mx-auto mb-6 max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base md:mb-8 md:text-lg">
              Vem com a gente fazer parte desse time incrível! Troque
              experiências em nossos encontros presenciais, faça novos amigos e
              junte-se à família Talles Furtado. Aqui, cada vitória é comemorada
              juntos e cada desafio é superado em equipe.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row md:gap-4">
              <a
                href="https://api.whatsapp.com/send/?phone=558198955665&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-green-600 to-green-500 px-4 py-3 font-bold text-white transition-all duration-300 hover:from-green-500 hover:to-green-400 sm:px-6 sm:py-3 md:gap-3 md:rounded-xl md:px-8 md:py-4"
              >
                <FaWhatsapp className="text-lg md:text-xl lg:text-2xl" />
                <span className="text-sm sm:text-base md:text-lg">
                  Entrar para o Time
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h4 className="mb-3 text-lg font-bold text-white sm:text-xl md:mb-4 md:text-2xl">
            Sua História de Transformação Começa Aqui
          </h4>
          <p className="mx-auto mb-6 max-w-2xl text-sm text-white/70 sm:text-base md:mb-8 md:text-lg">
            Junte-se aos dezenas de alunos que já transformaram suas vidas e
            compartilhe sua própria jornada de sucesso conosco.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-6">
            <div className="to-mainTheme hidden h-0.5 w-16 bg-gradient-to-r from-transparent md:block lg:w-20" />
            <a
              href="#planos"
              className="from-mainTheme hover:to-mainTheme inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r to-blue-600 px-6 py-3 font-bold text-white transition-all duration-300 hover:from-blue-500 sm:w-auto md:gap-3 md:rounded-xl md:px-8 md:py-4"
            >
              <FiStar className="h-4 w-4 md:h-5 md:w-5" />
              <span className="text-sm sm:text-base md:text-lg">
                Começar Minha Jornada
              </span>
            </a>
            <div className="from-mainTheme hidden h-0.5 w-16 bg-gradient-to-r to-transparent md:block lg:w-20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
