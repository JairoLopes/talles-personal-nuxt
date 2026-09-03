"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { slideUp } from "@/components/animatedComponents/variants";
import TitleAnimated from "./animatedComponents/TitleAnimated";
import Carousel from "./carousel/Carousel";

type MediaItem = {
  type: "image" | "video";
  path: string;
  legenda: string;
};

type CompetitionSection = {
  title: string;
  description: string;
  media: MediaItem[];
};

type Competition = {
  year: string;
  title: string;
  description: string;
  sections: CompetitionSection[];
};

export default function Conquistas() {
  const [activeCompetition, setActiveCompetition] = useState(0);

  const competitions: Competition[] = [
    {
      year: "2026",
      title: "Muscle Contest Nordeste • 18 de Abril de 2026",
      description:
        "Excelente desempenho no Muscle Contest Nordeste, exibindo um físico equilibrado e condicionamento de alto nível. A evolução na qualidade muscular e presença de palco refletem a consistência do trabalho e a aplicação disciplinada do protocolo.",
      sections: [
        {
          title: "Momento do Palco",
          description:
            "Registros do dia da competição: poses, comparações e a energia única que só o palco proporciona.",
          media: [
            {
              type: "video",
              path: "/img/Competicao2026/Palco/videoPalco.mp4",
              legenda: "Apresentação no Palco",
            },
            {
              type: "image",
              path: "/img/Competicao2026/Palco/compFrente.jpeg",
              legenda: "",
            },
            {
              type: "image",
              path: "/img/Competicao2026/Palco/compFrenteGrupo.jpeg",
              legenda: "Competidores",
            },
            {
              type: "image",
              path: "/img/Competicao2026/Palco/CompFrenteGrupo2.jpeg",
              legenda: "",
            },
            {
              type: "image",
              path: "/img/Competicao2026/Palco/medalhasFrente.jpeg",
              legenda: "Premiação",
            },
            {
              type: "image",
              path: "/img/Competicao2026/Palco/medalhasFrente2.jpeg",
              legenda: "",
            },
            {
              type: "image",
              path: "/img/Competicao2026/Palco/pose_costas.jpeg",
              legenda: "",
            },
            {
              type: "image",
              path: "/img/Competicao2026/Palco/pose_costas2.jpeg",
              legenda: "",
            },
            {
              type: "image",
              path: "/img/Competicao2026/Palco/pose_frente.jpeg",
              legenda: "",
            },
          ],
        },
        {
          title: "Preparação",
          description:
            "Bastidores da fase de preparação: treinos, poses de avaliação e todo o trabalho que antecede o grande dia.",
          media: [
            {
              type: "video",
              path: "/img/Competicao2026/Preparacao/preparacaoVideo1.mp4",
              legenda: "Treino de Preparação",
            },
            {
              type: "image",
              path: "/img/Competicao2026/Preparacao/poseCasaCostas.jpeg",
              legenda: "",
            },
            {
              type: "image",
              path: "/img/Competicao2026/Preparacao/poseCasaCostas2.jpeg",
              legenda: "",
            },
            {
              type: "image",
              path: "/img/Competicao2026/Preparacao/poseCasaFrente.jpeg",
              legenda: "Avaliação Frente",
            },
            {
              type: "image",
              path: "/img/Competicao2026/Preparacao/poseCasaFrente2.jpeg",
              legenda: "",
            },
            {
              type: "image",
              path: "/img/Competicao2026/Preparacao/poseCasaFrente3.jpeg",
              legenda: "Evolução",
            },
            {
              type: "image",
              path: "/img/Competicao2026/Preparacao/poseCasaFrente4.jpeg",
              legenda: "",
            },
            {
              type: "image",
              path: "/img/Competicao2026/Preparacao/poseCasaFrente5.jpeg",
              legenda: "",
            },
          ],
        },
      ],
    },
    {
      year: "2025",
      title: "Campeão Mens Physique 2025",
      description:
        "Conquista do título no campeonato CBCM, nas categorias sênior, estreante e novice.",
      sections: [
        {
          title: "Registros da Competição",
          description: "Momentos marcantes da conquista do título em 2025.",
          media: [
            {
              type: "video",
              path: "/video/compRecenteVideo.mp4",
              legenda: "Vídeo da Competição",
            },
            {
              type: "image",
              path: "/img/meusResultados/compRecente1.jpeg",
              legenda: "Shape de Palco",
            },
            {
              type: "image",
              path: "/img/meusResultados/CompRecente2.jpeg",
              legenda: "Top 1 Overall",
            },
          ],
        },
      ],
    },
    {
      year: "2024",
      title: "Campeão Mens Physique 2024",
      description:
        "Consagração em Pernambuco, validando todo o trabalho de base realizado durante o ano.",
      sections: [
        {
          title: "Registros da Competição",
          description: "Imagens e vídeos da vitória em 2024.",
          media: [
            {
              type: "video",
              path: "/video/talles_crop.mp4",
              legenda: "Vídeo da Competição",
            },
            {
              type: "image",
              path: "/img/meusResultados/Talles_Trofeu.jpeg",
              legenda: "Momento da Premiação",
            },
            {
              type: "image",
              path: "/img/meusResultados/campeonato_costas.jpg",
              legenda: "Expansão de Dorsal",
            },
          ],
        },
      ],
    },
  ];

  const currentComp = competitions[activeCompetition];

  return (
    <section className="section-style bg-cover bg-fixed bg-no-repeat lg:bg-[linear-gradient(to_right,rgb(13,12,12,0.85),rgb(13,12,12,0.99)),url('/img/Img_Feedback/fb3.jpg')]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4">
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <TitleAnimated>Conquistas</TitleAnimated>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            Há algum tempo venho me dedicando como atleta de fisiculturismo, e
            desde que comecei a aplicar o protocolo em meus treinos e rotina
            alimentar, venho conquistando resultados significativos,
            consequentemente premiações em campeonatos.
          </p>
        </motion.div>

        {/* Abas */}
        <div className="mx-auto mb-12 w-full max-w-4xl">
          <div className="flex justify-center">
            <div className="bg-navBlack/60 inline-flex rounded-xl border border-white/10 p-1 backdrop-blur-sm">
              {competitions.map((comp, index) => (
                <button
                  key={comp.year}
                  role="tab"
                  aria-selected={activeCompetition === index}
                  className={`cursor-pointer rounded-lg px-8 py-3 text-sm font-bold transition-all duration-300 sm:text-base ${
                    activeCompetition === index
                      ? comp.year === "2025"
                        ? "from-secondaryTheme text-deepBlue bg-gradient-to-r to-yellow-600 shadow-lg"
                        : "from-mainTheme bg-gradient-to-r to-blue-600 text-white shadow-lg"
                      : "text-white/50 hover:bg-white/5 hover:text-white/80"
                  }`}
                  onClick={() => setActiveCompetition(index)}
                >
                  {comp.year}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Conteúdo da aba */}
        <div className="min-h-[600px] w-full max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentComp.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-navBlack/70 rounded-2xl border border-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-10"
            >
              <div className="mb-10 text-center">
                <h3 className="mb-2 text-2xl font-black tracking-tight text-white uppercase sm:text-3xl">
                  Trajetória Vitoriosa
                </h3>
                <p className="text-secondaryTheme mb-6 text-sm font-medium sm:text-base">
                  Consecutividade nas conquistas comprova a eficácia do método
                  aplicado.
                </p>
                <div className="bg-mainTheme mx-auto mb-8 h-[2px] w-20" />
                <h4 className="mb-2 text-xl font-bold text-white">
                  {currentComp.title}
                </h4>
                <p className="mx-auto max-w-xl text-sm text-white/60">
                  {currentComp.description}
                </p>
              </div>

              {currentComp.sections.map((section, idx) => (
                <div key={idx} className="mb-12 last:mb-0">
                  <div className="mb-6 text-center">
                    <h5 className="mb-2 text-lg font-bold text-white sm:text-xl">
                      {section.title}
                    </h5>
                    <p className="mx-auto max-w-lg text-sm text-white/60">
                      {section.description}
                    </p>
                  </div>
                  <Carousel
                    slides={section.media.map((m) => ({
                      type: m.type,
                      src: m.path,
                      alt: m.legenda || "",
                      caption: m.legenda || "",
                    }))}
                    options={{ loop: true, autoplay: true, delay: 4000 }}
                    showArrows
                    showDots
                    imageAspectRatio="portrait"
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
