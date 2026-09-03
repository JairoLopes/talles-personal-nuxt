"use client";

import { motion } from "motion/react";
import {
  slideUp,
  scaleIn,
  fadeLeft,
  popIn,
} from "@/components/animatedComponents/variants";
import TitleAnimated from "./animatedComponents/TitleAnimated";
import { FiAward, FiCheckCircle, FiTarget } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Sobre() {
  const formacaoData = [
    {
      icon: FaGraduationCap,
      title: "Formação Acadêmica",
      items: [
        "Bacharel em Educação Física",
        "Especialista em hipertrofia e emagrecimento",
      ],
    },
    {
      icon: FiTarget,
      title: "Foco Principal",
      items: [
        "Hipertrofia Muscular",
        "Emagrecimento Eficiente",
        "Condicionamento Físico",
        "Preparação para Competições",
      ],
    },
  ];

  const servicosData = [
    {
      icon: "video",
      title: "Consultoria Online",
      description:
        "Acompanhamento completo via WhatsApp com treinos personalizados e ajustes semanais",
    },
    {
      icon: "users",
      title: "Treinamento Presencial",
      description:
        "Acompanhamento individual em academia com correção técnica e periodização avançada",
    },
  ];

  const metodologiaData = [
    {
      icon: "dumbbell",
      title: "Treinos Personalizados",
      description:
        "Protocolos desenvolvidos especificamente para seu biotipo, objetivos e disponibilidade",
    },
    {
      icon: "clock",
      title: "Adaptável à Rotina",
      description:
        "Seja em casa, na academia ou onde preferir - seu treino se adapta ao seu estilo de vida",
    },
    {
      icon: "message-circle",
      title: "Suporte Diário",
      description:
        "Acompanhamento constante via WhatsApp para dúvidas, ajustes e motivação",
    },
    {
      icon: "calendar",
      title: "Atualização Mensal",
      description:
        "Treinos revisados e atualizados mensalmente para evitar platô e manter evolução constante",
    },
  ];

  const cursosData = [
    {
      icon: "book-open",
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
      icon: "book-open",
      title: "Treinamento e Recursos Ergogênicos no Esporte",
      date: "Março 2026",
      topics: [
        "Variáveis e métodos de treinamento avançados",
        "Dieta e nutrição voltada para esporte de alto rendimento",
        "Aplicações estratégicas de recursos ergogênicos",
        "Posicionamento, tráfego pago e marketing para personais",
      ],
    },
    {
      icon: "book-open",
      title: "Peptídeos e Esteroides - Alta Performance",
      date: "Abril 2026",
      topics: [
        "Aplicações de peptídeos no esporte",
        "Esteroides anabolizantes: mecanismos e protocolos",
        "Estratégias avançadas para alta performance",
      ],
    },
  ];

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

  return (
    <section className="section-style from-deepBlue to-navBlack bg-gradient-to-b">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="from-mainTheme/15 to-secondaryTheme/15 mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-5 py-2"
          >
            <FiAward className="text-mainTheme h-5 w-5" />
            <span className="text-sm font-medium tracking-wider text-white/80">
              FORMAÇÃO E EXPERIÊNCIA
            </span>
          </motion.div>

          <TitleAnimated>Sobre Mim</TitleAnimated>

          <motion.p
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70"
          >
            Com mais de uma década dedicada ao fitness, combino formação
            acadêmica sólida com experiência prática de atleta para entregar
            resultados reais e duradouros.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-12">
            <div className="space-y-8">
              {formacaoData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="from-navBlack/80 to-deepBlue/80 hover:border-mainTheme/30 rounded-2xl border border-white/10 bg-gradient-to-br p-8 backdrop-blur-sm transition-all duration-300"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="from-mainTheme/20 to-mainTheme/10 border-mainTheme/30 flex h-14 w-14 items-center justify-center rounded-xl border bg-gradient-to-br">
                      <item.icon className="text-mainTheme h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {item.items.map((listItem, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FiCheckCircle className="text-secondaryTheme mt-1 h-5 w-5 flex-shrink-0" />
                        <span className="text-white/80">{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl p-8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30,144,255,0.1), rgba(255,204,0,0.05))",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="bg-mainTheme/10 absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full" />
              <div className="relative z-10">
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Minha Filosofia
                </h3>
                <p className="leading-relaxed text-white/80">
                  Acredito que a transformação física vai além da estética - é
                  sobre
                  <strong className="text-secondaryTheme"> disciplina</strong>,
                  <strong className="text-mainTheme"> consistência</strong> e
                  <strong className="text-secondaryTheme">
                    {" "}
                    superação pessoal
                  </strong>
                  . Meu objetivo é guiar cada aluno não apenas para resultados
                  visíveis, mas para uma relação saudável e duradoura com o
                  exercício físico.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-12">
            <div>
              <motion.div
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-8 flex items-center gap-3"
              >
                <div className="from-mainTheme to-secondaryTheme h-0.5 w-12 bg-gradient-to-r" />
                <h3 className="gradient-text text-2xl font-bold lg:text-3xl">
                  Serviços Oferecidos
                </h3>
                <div className="from-secondaryTheme to-mainTheme h-0.5 w-12 bg-gradient-to-r" />
              </motion.div>

              <div className="space-y-6">
                {servicosData.map((servico, index) => (
                  <motion.div
                    key={index}
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="group bg-navBlack/50 hover:border-mainTheme/50 rounded-xl border border-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="flex items-start gap-4">
                      <div className="from-mainTheme/20 to-secondaryTheme/20 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br transition-transform duration-300 group-hover:scale-110">
                        {/* ícone seria importado do react-icons, mas aqui usamos um placeholder */}
                        <span className="text-3xl">💪</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-2 text-xl font-bold text-white">
                          {servico.title}
                        </h4>
                        <p className="text-white/70">{servico.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.div
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-8 flex items-center gap-3"
              >
                <div className="from-secondaryTheme to-mainTheme h-0.5 w-12 bg-gradient-to-r" />
                <h3 className="gradient-text text-2xl font-bold lg:text-3xl">
                  Metodologia
                </h3>
                <div className="from-mainTheme to-secondaryTheme h-0.5 w-12 bg-gradient-to-r" />
              </motion.div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {metodologiaData.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={popIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group from-navBlack/60 to-deepBlue/60 hover:border-mainTheme/30 rounded-xl border border-white/10 bg-gradient-to-b p-6 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="from-mainTheme/20 to-mainTheme/10 mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br transition-transform duration-300 group-hover:scale-110">
                      <span className="text-3xl">🏋️</span>
                    </div>
                    <h4 className="mb-3 text-lg font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-white/70">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="from-mainTheme/10 to-secondaryTheme/10 rounded-2xl border border-white/10 bg-gradient-to-r p-8 text-center"
            >
              <h4 className="mb-4 text-xl font-bold text-white">
                Pronto para Transformar Seu Corpo?
              </h4>
              <p className="mb-6 text-white/70">
                Entre em contato para uma avaliação personalizada e descubra
                como posso ajudar você a alcançar seus objetivos.
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=558198955665&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="from-mainTheme hover:to-mainTheme inline-flex items-center gap-3 rounded-xl bg-gradient-to-r to-blue-600 px-8 py-4 font-bold text-white transition-all duration-300 hover:from-blue-500"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Agendar Consultoria</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Cursos e Certificações */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 border-t border-white/10 pt-12"
        >
          <div className="mb-10 text-center">
            <h3 className="mb-4 text-2xl font-bold text-white lg:text-3xl">
              Cursos e Certificações
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-white/70">
              Busco constantemente pelo que há de mais recente na ciência para
              aplicar as melhores evidências nos treinos dos meus alunos.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
            {cursosData.map((curso, index) => (
              <motion.div
                key={index}
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group from-navBlack/80 to-deepBlue/80 hover:border-mainTheme/30 relative rounded-2xl border border-white/10 bg-gradient-to-br p-8 backdrop-blur-sm transition-all duration-300"
              >
                <div className="from-mainTheme/10 to-secondaryTheme/10 pointer-events-none absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-gradient-to-br opacity-0 transition-all duration-500 group-hover:opacity-100" />
                <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div className="from-mainTheme/20 to-mainTheme/10 border-mainTheme/30 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border bg-gradient-to-br">
                    <span className="text-2xl">📘</span>
                  </div>
                  <span className="self-start rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold tracking-widest text-white/60 uppercase sm:self-auto">
                    {curso.date}
                  </span>
                </div>
                <h4 className="group-hover:text-mainTheme mb-5 text-xl leading-snug font-bold text-white transition-colors duration-300">
                  {curso.title}
                </h4>
                <ul className="space-y-3">
                  {curso.topics.map((topico, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FiCheckCircle className="text-secondaryTheme mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed text-white/70">
                        {topico}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experiência Complementar */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 border-t border-white/10 pt-12"
        >
          <div className="mx-auto max-w-5xl">
            <h3 className="mb-12 text-center text-2xl font-bold text-white lg:text-3xl">
              Experiência Complementar
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {experiencias.map((item, index) => (
                <motion.div
                  key={index}
                  variants={slideUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${item.color} rounded-2xl border border-white/10 p-8 text-center transition-transform duration-300 hover:-translate-y-2`}
                >
                  <h4 className="mb-4 text-xl font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="text-white/80">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
