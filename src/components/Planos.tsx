"use client";

import { motion } from "motion/react";
import { slideUp, scaleIn } from "@/components/animatedComponents/variants";
import TitleAnimated from "./animatedComponents/TitleAnimated";
import { FiCheckCircle, FiTag } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Planos() {
  const planosData = [
    {
      plano: "Mensal",
      valor: 150.0,
      tipoPlano: "Plano padrão",
      dieta: true,
      popular: false,
      desconto: null,
      beneficios: [
        "Treino personalizado",
        "Dieta inclusa",
        "Suporte por WhatsApp",
        "Atualização mensal",
      ],
      whats:
        "https://wa.me/558198955665/?text=Tenho%20interesse%20em%20assinar%20o%20plano%20mensal",
    },
    {
      plano: "Trimestral",
      valor: 300,
      tipoPlano: "Plano promocional",
      dieta: true,
      popular: false,
      desconto: null,
      beneficios: [
        "Treino personalizado",
        "Dieta inclusa",
        "Suporte por WhatsApp",
        "Atualização mensal",
        "Economia de 10%",
      ],
      whats:
        "https://wa.me/558198955665/?text=Tenho%20interesse%20em%20assinar%20o%20plano%20trimestral",
    },
    {
      plano: "Semestral",
      valor: 550,
      tipoPlano: "Plano promocional",
      dieta: true,
      popular: true,
      desconto: "Garanta já sua vaga",
      beneficios: [
        "Treino personalizado",
        "Dieta inclusa",
        "Suporte por WhatsApp",
        "Atualização mensal",
        "Economia de 25%",
      ],
      whats:
        "https://wa.me/558198955665/?text=Tenho%20interesse%20em%20assinar%20o%20plano%20semestral",
    },
    {
      plano: "Anual",
      valor: 900.0,
      tipoPlano: "Plano promocional",
      dieta: true,
      popular: true,
      desconto: "Garanta já sua vaga!",
      beneficios: [
        "Treino personalizado",
        "Dieta inclusa",
        "Suporte por WhatsApp",
        "Atualização mensal",
        "Economia de 33%",
      ],
      whats:
        "https://wa.me/558198955665/?text=Tenho%20interesse%20em%20assinar%20o%20plano%20anual",
    },
    {
      plano: "1 ano e 6 meses",
      valor: 1200.0,
      tipoPlano: "Plano promocional",
      dieta: true,
      popular: false,
      desconto: null,
      beneficios: [
        "Treino personalizado",
        "Dieta inclusa",
        "Suporte por WhatsApp",
        "Atualização mensal",
        "Economia de 40%",
        "+ 2 meses de consultoria grátis",
      ],
      whats:
        "https://wa.me/558198955665/?text=Tenho%20interesse%20em%20assinar%20o%20plano%20de%201%20Ano%20e%206%20meses",
    },
    {
      plano: "2 anos",
      valor: 1600.0,
      tipoPlano: "Plano promocional",
      dieta: true,
      popular: false,
      desconto: null,
      beneficios: [
        "Treino personalizado",
        "Dieta inclusa",
        "Suporte por WhatsApp",
        "Atualização mensal",
        "Economia de 56%",
        "+ 2 meses de consultoria grátis",
      ],
      whats:
        "https://wa.me/558198955665/?text=Tenho%20interesse%20em%20assinar%20o%20plano%20de%202%20anos",
    },
  ];

  return (
    <section className="section-style bg-cover bg-fixed bg-no-repeat lg:bg-[linear-gradient(to_right,rgb(13,12,12,0.97),rgb(13,12,12,0.9)),url('/img/img_Plans/plans_bg.jpg')]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <TitleAnimated>Planos</TitleAnimated>

        <div className="mb-10 flex flex-col items-center justify-center gap-2 text-center">
          <motion.h3
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="gradient-text text-xl font-bold md:text-2xl"
          >
            Escolha o plano ideal para sua jornada
          </motion.h3>
          <motion.p
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-myWhite/70 mx-auto max-w-2xl text-sm md:text-base"
          >
            Todos os planos incluem dieta personalizada e suporte completo para
            você alcançar seus objetivos.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {planosData.map((plano, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`from-navBlack/90 to-deepBlue/90 relative flex h-full flex-col rounded-2xl border bg-gradient-to-b ${
                plano.popular
                  ? "border-secondaryTheme/50 shadow-secondaryTheme/10 shadow-xl"
                  : "border-white/10"
              } hover:shadow-mainTheme/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
            >
              {plano.popular && (
                <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 transform">
                  <span className="from-secondaryTheme text-deepBlue rounded-full bg-gradient-to-r to-yellow-500 px-5 py-1.5 text-sm font-bold shadow-lg">
                    MAIS POPULAR
                  </span>
                </div>
              )}
              {plano.dieta && (
                <div className="absolute -top-2 -right-2 z-10">
                  <span className="from-mainTheme rounded-lg bg-gradient-to-r to-blue-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
                    + DIETA
                  </span>
                </div>
              )}
              <div className="flex grow flex-col p-6 md:p-7">
                <div className="mb-6 text-center">
                  <h2
                    className={`text-2xl font-bold ${
                      plano.popular ? "text-secondaryTheme" : "text-myWhite"
                    } mb-2`}
                  >
                    {plano.plano}
                  </h2>
                  <div className="mb-4">
                    <div
                      className={`text-4xl font-extrabold md:text-5xl ${
                        plano.tipoPlano === "Plano promocional"
                          ? plano.popular
                            ? "text-secondaryTheme"
                            : "text-mainTheme"
                          : "text-myWhite"
                      }`}
                    >
                      R$ {plano.valor.toFixed(2).replace(".", ",")}
                    </div>
                    {plano.desconto ? (
                      <p className="bg-mainTheme/15 border-mainTheme/30 text-mainTheme mt-1 inline-flex animate-pulse items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide">
                        <FiTag className="h-3 w-3 flex-shrink-0" />
                        {plano.desconto}
                      </p>
                    ) : (
                      <p className="mt-1 text-sm text-white/60">
                        {plano.plano.includes("Mensal")
                          ? "por mês"
                          : "pagamento único"}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-8 grow p-2">
                  <h4 className="mb-4 text-center text-sm font-semibold text-white/80">
                    INCLUI:
                  </h4>
                  <ul className="space-y-3">
                    {plano.beneficios.map((beneficio, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FiCheckCircle
                          className={`h-5 w-5 ${
                            beneficio.includes("+ 2 meses")
                              ? "text-emerald-400"
                              : "text-secondaryTheme"
                          } mt-0.5 flex-shrink-0`}
                        />
                        <span className="text-sm text-white/70">
                          {beneficio}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={plano.whats}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full rounded-xl py-3.5 text-center font-bold transition-all duration-300 ${
                    plano.popular
                      ? "from-secondaryTheme hover:to-secondaryTheme text-deepBlue bg-gradient-to-r to-yellow-600 hover:from-yellow-500"
                      : "from-mainTheme hover:to-mainTheme bg-gradient-to-r to-blue-600 text-white hover:from-blue-500"
                  } active:scale-95`}
                >
                  ASSINAR AGORA
                </a>
                {plano.tipoPlano === "Plano promocional" &&
                  plano.plano !== "Mensal" && (
                    <div className="mt-4 text-center">
                      <p className="text-secondaryTheme text-sm font-medium">
                        Economia garantida em relação ao plano mensal
                      </p>
                    </div>
                  )}
              </div>
              <div
                className={`absolute top-0 right-0 h-16 w-16 rounded-tr-2xl border-t-2 border-r-2 ${
                  plano.popular
                    ? "border-secondaryTheme/30"
                    : "border-mainTheme/30"
                }`}
              />
              <div
                className={`absolute bottom-0 left-0 h-16 w-16 rounded-bl-2xl border-b-2 border-l-2 ${
                  plano.popular
                    ? "border-secondaryTheme/30"
                    : "border-mainTheme/30"
                }`}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 border-t border-white/10 pt-8"
        >
          <div className="text-center">
            <h4 className="mb-3 font-semibold text-white">
              Dúvidas ou precisa de um plano personalizado?
            </h4>
            <p className="mb-4 text-sm text-white/70">
              Entre em contato diretamente pelo WhatsApp para conversarmos sobre
              suas necessidades específicas.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=558198955665&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-green-500 px-6 py-3 font-bold text-white transition-all duration-300 hover:from-green-500 hover:to-green-400 active:scale-95"
            >
              <FaWhatsapp className="text-xl" />
              FALE DIRETAMENTE COMIGO
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
