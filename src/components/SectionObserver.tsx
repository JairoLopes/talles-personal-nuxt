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
 * Em vez de criar um IntersectionObserver separado dentro de cada componente,
 * observamos o container real de scroll da página. Isso é especialmente
 * importante porque o projeto usa `overflow-y-auto` em #page-scroll.
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

    let frameId = 0;

    /**
     * Escolhe a seção cujo topo está mais próximo de uma linha de referência
     * situada aproximadamente no terço superior da área visível.
     *
     * Esse método funciona melhor que depender de `threshold: 0.5`, porque
     * algumas seções do site podem ser maiores que a própria viewport.
     */
    const updateActiveSection = () => {
      const referencePosition =
        scrollContainer.scrollTop + scrollContainer.clientHeight * 0.35;

      let closestSection = sections[0];
      let smallestDistance = Number.POSITIVE_INFINITY;

      for (const section of sections) {
        const distance = Math.abs(section.offsetTop - referencePosition);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestSection = section;
        }
      }

      setActiveSection(closestSection.id);
    };

    const handleScroll = () => {
      // Evita disparar dezenas de atualizações de estado durante um único
      // frame de rolagem.
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveSection);
    };

    // Define a seção inicial sem esperar a primeira interação do usuário.
    updateActiveSection();

    scrollContainer.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(frameId);
      scrollContainer.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [setActiveSection]);

  // Este componente não renderiza UI. Ele existe apenas para sincronizar o
  // scroll da página com o estado global usado pelas navbars.
  return null;
}
