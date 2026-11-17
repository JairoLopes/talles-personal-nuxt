"use client";

import { useState, type ReactNode } from "react";

type Props = {
  years: string[];
  panels: ReactNode[];
};

/**
 * Controla somente a aba ativa. Os painéis são compostos no servidor e
 * recebidos como ReactNode, sem transferir os dados da seção para o cliente.
 */
export default function CompetitionTabs({ years, panels }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="mx-auto mb-12 w-full max-w-4xl">
        <div className="flex justify-center">
          <div
            role="tablist"
            aria-label="Competições"
            className="bg-navBlack/60 inline-flex max-w-full overflow-x-auto rounded-xl border border-white/10 p-1 backdrop-blur-sm"
          >
            {years.map((year, index) => (
              <button
                key={year}
                id={`competition-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-controls={`competition-panel-${index}`}
                className={`shrink-0 cursor-pointer rounded-lg px-4 py-3 text-sm font-bold whitespace-nowrap transition-all duration-300 sm:px-8 sm:text-base ${
                  activeIndex === index
                    ? year === "2025"
                      ? "from-secondaryTheme text-deepBlue bg-gradient-to-r to-yellow-600 shadow-lg"
                      : "from-secondaryTheme to-mainTheme text-deepBlue bg-gradient-to-r shadow-lg"
                    : "text-white/50 hover:bg-white/5 hover:text-white/80"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="min-h-[600px] w-full max-w-5xl">
        <div
          id={`competition-panel-${activeIndex}`}
          role="tabpanel"
          aria-labelledby={`competition-tab-${activeIndex}`}
          className="bg-navBlack/70 rounded-2xl border border-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-10"
        >
          {panels[activeIndex]}
        </div>
      </div>
    </>
  );
}
