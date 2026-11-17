"use client";

import { useEffect } from "react";
import { useActiveSectionStore } from "@/store/useActiveSectionStore";

/**
 * IDs que participam da navegação.
 *
 * O footer não entra aqui porque não possui um item correspondente no menu.
 */
const SECTION_IDS = [
  "home",
  "sobre",
  "beneficios",
  "planos",
  "resultados",
  "conquistas",
  "feedback",
  "time",
] as const;

/**
 * Atualiza globalmente qual seção está ativa na navegação.
 *
 * Em vez de ler `offsetTop` de todas as seções a cada frame de scroll (o que
 * força o navegador a recalcular o layout no meio da rolagem), usamos um
 * IntersectionObserver com uma faixa de leitura no terço superior da tela.
 * O navegador só avisa quando a seção que cruza essa faixa muda, então o
 * trabalho por frame cai a zero.
 */
export default function SectionObserver() {
  const setActiveSection = useActiveSectionStore(
    (state) => state.setActiveSection,
  );

  useEffect(() => {
    const scrollContainer = document.getElementById("page-scroll");

    if (!(scrollContainer instanceof HTMLElement)) return;

    // Selecionamos SOMENTE as seções externas. Alguns componentes internos
    // também possuem IDs, e não queremos que esses IDs interfiram na navegação.
    const sections = SECTION_IDS.map((id) =>
      scrollContainer.querySelector<HTMLElement>(
        `:scope > section#${CSS.escape(id)}`,
      ),
    ).filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    /**
     * A faixa de leitura fica a ~35% do topo da área visível. O rootMargin
     * encolhe a raiz até sobrar uma faixa fina nessa altura: a seção que
     * atravessa a faixa é a seção ativa.
     *
     * `root` é o próprio container de rolagem, porque a página não rola no
     * documento — ela rola dentro de #page-scroll.
     */
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        root: scrollContainer,
        rootMargin: "-35% 0px -64% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [setActiveSection]);

  // Este componente não renderiza UI. Ele existe apenas para sincronizar o
  // scroll da página com o estado global usado pelas navbars.
  return null;
}
