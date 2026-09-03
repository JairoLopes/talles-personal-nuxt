"use client";

import { motion } from "motion/react";
import { slideUp, scaleIn } from "@/components/animatedComponents/variants";
import TitleAnimated from "./animatedComponents/TitleAnimated";
import {
  FiShield,
  FiClock,
  FiVideo,
  FiShoppingBag,
  FiUsers,
  FiFileText,
  FiMessageCircle,
  FiTrendingUp,
  FiHeart,
} from "react-icons/fi";
import { FaDumbbell, FaBicycle, FaUtensils } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Beneficios() {
  const beneficiosData = [
    {
      icon: FiClock,
      title: "Suporte 24/7",
      description:
        "Acompanhamento completo em tempo real, sempre que precisar.",
      category: "suporte",
    },
    {
      icon: FiVideo,
      title: "Videochamadas",
      description:
        "Até duas sessões por semana para tirar dúvidas e ajustar o protocolo.",
      category: "suporte",
    },
    {
      icon: FiShoppingBag,
      title: "Descontos Exclusivos",
      description: "Suplementação com preços especiais na loja TF.",
      category: "vantagens",
    },
    {
      icon: FaDumbbell,
      title: "Treino Personalizado",
      description:
        "Sessões presenciais com acompanhamento técnico na sala de musculação.",
      category: "treino",
    },
    {
      icon: FaBicycle,
      title: "Treino Funcional",
      description: "Sessões em área externa e bike para variar o estímulo.",
      category: "treino",
    },
    {
      icon: FaUtensils,
      title: "Dieta Personalizada",
      description: "Plano alimentar individualizado",
      category: "nutricao",
    },
    {
      icon: FiUsers,
      title: "Indicação Premiada",
      description: "Indique amigos e ganhe descontos nos seus próximos planos.",
      category: "vantagens",
    },
    {
      icon: FiFileText,
      title: "Avaliação Completa",
      description: "Anamnese detalhada e avaliação física inicial.",
      category: "acompanhamento",
    },
    {
      icon: FiMessageCircle,
      title: "Correção com Vídeos",
      description:
        "Feedback visual com vídeos demonstrativos para aperfeiçoar a técnica.",
      category: "acompanhamento",
    },
    {
      icon: FiTrendingUp,
      title: "Ajustes Constantes",
      description: "Feedback semanal e ajustes conforme sua evolução.",
      category: "acompanhamento",
    },
    {
      icon: FiHeart,
      title: "Anamnese Digital",
      description:
        "Preenchimento completo do seu histórico de saúde e objetivos.",
      category: "acompanhamento",
    },
    {
      icon: FiShield,
      title: "Comunidade Exclusiva",
      description:
        "Acesso ao grupo do WhatsApp do Team TF para networking e suporte.",
      category: "comunidade",
    },
  ];

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

  const getCategoriaColor = (categoryId: string) => {
    const cat = categorias.find((c) => c.id === categoryId);
    return cat?.cor || "from-mainTheme/20 to-blue-600/20";
  };

  const getCategoriaNome = (categoryId: string) => {
    const cat = categorias.find((c) => c.id === categoryId);
    return cat?.nome || "Geral";
  };

  return (
    <section className="section-style from-deepBlue via-navBlack to-deepBlue bg-gradient-to-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="from-mainTheme/15 to-secondaryTheme/15 mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-5 py-2"
          >
            <FiShield className="text-mainTheme h-5 w-5" />
            <span className="text-sm font-medium tracking-wider text-white/80">
              VANTAGENS EXCLUSIVAS
            </span>
          </motion.div>

          <TitleAnimated>Benefícios do Time TF</TitleAnimated>

          <motion.p
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-white/70"
          >
            Ao fazer parte do nosso time, você tem acesso a uma estrutura
            completa pensada para potencializar seus resultados e transformar
            sua jornada fitness.
          </motion.p>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-navBlack/50 inline-flex items-center gap-4 rounded-2xl border border-white/10 px-8 py-4 backdrop-blur-sm"
          >
            <div className="gradient-text text-3xl font-bold">
              {beneficiosData.length}
            </div>
            <div className="text-left">
              <div className="font-semibold text-white">
                Benefícios Exclusivos
              </div>
              <div className="text-sm text-white/60">
                Para você alcançar seus objetivos
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {beneficiosData.map((beneficio, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group from-navBlack/80 to-deepBlue/80 hover:border-mainTheme/30 relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br backdrop-blur-sm transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className={`absolute top-0 right-0 h-16 w-16 bg-gradient-to-br ${getCategoriaColor(
                  beneficio.category,
                )} rounded-bl-2xl`}
              >
                <div className="absolute top-3 right-3 text-white/80">
                  <beneficio.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="p-6">
                <div className="absolute -bottom-4 -left-2 text-5xl font-bold text-white/5 transition-colors duration-500 group-hover:text-white/10">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="mb-4">
                  <div className="from-mainTheme/20 to-mainTheme/10 border-mainTheme/30 group-hover:border-mainTheme/50 flex h-14 w-14 items-center justify-center rounded-xl border bg-gradient-to-br transition-all duration-500 group-hover:scale-110">
                    <beneficio.icon className="text-mainTheme group-hover:text-secondaryTheme h-6 w-6 transition-colors duration-500" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="group-hover:text-mainTheme mb-3 text-xl font-bold text-white transition-colors duration-300">
                    {beneficio.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {beneficio.description}
                  </p>
                </div>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
                    <span className="text-xs text-white/60">
                      {getCategoriaNome(beneficio.category)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="from-mainTheme/0 via-mainTheme/0 to-mainTheme/0 group-hover:via-mainTheme/5 group-hover:to-mainTheme/10 pointer-events-none absolute inset-0 bg-gradient-to-br transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 border-t border-white/10 pt-12"
        >
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <h3 className="mb-4 text-2xl font-bold text-white lg:text-3xl">
                Pronto para Experimentar Todos Esses Benefícios?
              </h3>
              <p className="mx-auto max-w-2xl text-lg text-white/70">
                Junte-se ao Time TF e transforme sua jornada fitness com suporte
                especializado, recursos exclusivos e uma comunidade que te
                motiva a ir além.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#planos"
                className="from-mainTheme hover:to-mainTheme inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r to-blue-600 px-8 py-4 font-bold text-white transition-all duration-300 hover:from-blue-500"
              >
                <span>Ver Planos Disponíveis</span>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=558198955665&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="border-secondaryTheme text-secondaryTheme hover:bg-secondaryTheme/10 inline-flex items-center justify-center gap-3 rounded-xl border-2 px-8 py-4 font-bold transition-all duration-300"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Falar com o Talles</span>
              </a>
            </div>
            <div className="mt-12 border-t border-white/10 pt-8 text-center">
              <p className="text-sm text-white/60 italic">
                Mais de 1000 alunos já transformaram suas vidas com nossa
                metodologia. Agora é sua vez de fazer parte dessa história de
                sucesso.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
