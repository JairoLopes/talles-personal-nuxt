import CompetitionTabs from "@/components/clients/competitions/CompetitionTabs";
import Carousel from "@/components/clients/carousel/Carousel";

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
  const competitions: Competition[] = [
    // A competição mais recente abre a lista de abas, mantendo a mesma estrutura
    // de 2026/4. As mídias usam a pasta com a grafia oficial "ComperticaoParte2";
    // os vídeos recebem autoplay, muted, loop e playsInline pelo Carousel.
    {
      year: "2026/10",
      title: "Muscle Contest Nordeste • 31 de Outubro de 2026",
      description:
        "Participação e excelente desempenho no Muscle Contest Nordeste em Recife, consolidando ainda mais o físico em alta performance.",
      sections: [
        {
          title: "Momento do Palco",
          description:
            "Registros da competição em Recife: apresentação, comparações e a energia do palco no Muscle Contest Nordeste.",
          media: [
            {
              type: "video",
              path: "/img/Competicao2026/ComperticaoParte2/competicaoVideo2.mp4",
              legenda: "Apresentação no Palco",
            },
            {
              type: "video",
              path: "/img/Competicao2026/ComperticaoParte2/competicaoVideo3.mp4",
              legenda: "Comparação no Palco",
            },
            {
              type: "image",
              path: "/img/Competicao2026/ComperticaoParte2/fotoCompeticao1.jpg",
              legenda: "",
            },
            {
              type: "image",
              path: "/img/Competicao2026/ComperticaoParte2/fotoCompeticao2.jpg",
              legenda: "",
            },
            {
              type: "image",
              path: "/img/Competicao2026/ComperticaoParte2/fotoCompeticao3.jpg",
              legenda: "",
            },
            {
              type: "image",
              path: "/img/Competicao2026/ComperticaoParte2/fotoCompeticao4.jpg",
              legenda: "",
            },
          ],
        },
        {
          title: "Preparação",
          description:
            "Bastidores da rotina de preparação: treinos, avaliações e todo o trabalho que antecede a subida ao palco.",
          media: [
            {
              type: "image",
              path: "/img/Competicao2026/ComperticaoParte2/fotoAcademia1.jpg",
              legenda: "",
            },
            {
              type: "image",
              path: "/img/Competicao2026/ComperticaoParte2/fotoBanheiro1.jpg",
              legenda: "",
            },
            {
              type: "image",
              path: "/img/Competicao2026/ComperticaoParte2/fotoBanheiro2.jpg",
              legenda: "",
            },
            {
              type: "image",
              path: "/img/Competicao2026/ComperticaoParte2/fotoCasa1.jpg",
              legenda: "",
            },
            {
              type: "image",
              path: "/img/Competicao2026/ComperticaoParte2/tallesFotoCostas_26.jpeg",
              legenda: "",
            },
          ],
        },
      ],
    },
    {
      year: "2026/4",
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

  return (
    <section className="section-style">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4">
        <div className="mb-10 text-center">
          <h1 className="text-myWhite my-7 text-center text-3xl font-semibold">
            Conquistas
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            Há algum tempo venho me dedicando como atleta de fisiculturismo, e
            desde que comecei a aplicar o protocolo em meus treinos e rotina
            alimentar, venho conquistando resultados significativos,
            consequentemente premiações em campeonatos.
          </p>
        </div>

        <CompetitionTabs
          years={competitions.map((competition) => competition.year)}
          panels={competitions.map((competition) => (
            <div key={competition.year}>
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
                  {competition.title}
                </h4>
                <p className="mx-auto max-w-xl text-sm text-white/60">
                  {competition.description}
                </p>
              </div>

              {competition.sections.map((section, idx) => (
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
            </div>
          ))}
        />
      </div>
    </section>
  );
}
