import dynamic from "next/dynamic";
import Home from "@/components/sections/Home";
import Sobre from "@/components/sections/Sobre";
import ArrowTop from "@/components/clients/navigation/ArrowTop";
import Footer from "@/components/sections/Footer";

/**
 * Componente simples reutilizado pelos imports dinâmicos.
 *
 * O objetivo é evitar repetir o mesmo JSX em cada `loading`.
 */
const LoadingSection = () => (
  <div className="flex h-screen items-center justify-center text-white">
    Carregando...
  </div>
);

// Mantemos lazy loading nas seções mais pesadas, como carrosséis e galerias.
const Beneficios = dynamic(() => import("@/components/sections/Beneficios"), {
  loading: LoadingSection,
});

const Planos = dynamic(() => import("@/components/sections/Planos"), {
  loading: LoadingSection,
});

const Resultados = dynamic(() => import("@/components/sections/Resultados"), {
  loading: LoadingSection,
});

const Conquistas = dynamic(() => import("@/components/sections/Conquistas"), {
  loading: LoadingSection,
});

const FeedBack = dynamic(() => import("@/components/sections/FeedBack"), {
  loading: LoadingSection,
});

const TimeTF = dynamic(() => import("@/components/sections/TimeTF"), {
  loading: LoadingSection,
});

export default function Page() {
  return (
    /*
     * O gradiente global fica no <body>, que não é o container de rolagem.
     * Assim ele permanece ancorado à viewport sem `background-attachment:
     * fixed`, que obrigava o navegador a repintar o fundo a cada frame.
     * As seções continuam transparentes para deixar o gradiente aparecer.
     */
    <div
      id="page-scroll"
      className="h-full w-full min-w-0 snap-y snap-proximity overflow-x-hidden overflow-y-auto overscroll-x-none overscroll-y-contain"
    >
      {/*
       * Cada seção externa possui um ID único.
       * O SectionObserver usa estes elementos para descobrir qual seção está
       * atualmente mais próxima da área de leitura e atualizar a navbar.
       */}
      <section id="home" className="min-h-screen snap-start">
        <Home />
      </section>

      <section id="sobre" className="min-h-screen snap-start">
        <Sobre />
      </section>

      <section id="beneficios" className="min-h-screen snap-start">
        <Beneficios />
      </section>

      <section id="planos" className="min-h-screen snap-start">
        <Planos />
      </section>

      <section id="resultados" className="min-h-screen snap-start">
        <Resultados />
      </section>

      <section id="conquistas" className="min-h-screen snap-start">
        <Conquistas />
      </section>

      <section id="feedback" className="min-h-screen snap-start">
        <FeedBack />
      </section>

      <section id="time" className="min-h-screen snap-start">
        <TimeTF />
      </section>

      {/* O footer continua fora da lista de navegação principal. */}
      <footer className="snap-start">
        <Footer />
      </footer>

      <ArrowTop />
    </div>
  );
}
