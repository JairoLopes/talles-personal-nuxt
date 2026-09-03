"use client";

import Image from "next/image";
import NavLink from "@/components/NavLink";

/**
 * Navbar tradicional para telas grandes.
 *
 * No mobile ela é completamente ocultada. A navegação mobile foi deslocada
 * para uma barra fixa inferior para não ocupar espaço no topo da tela.
 */
export default function Navbar() {
  const navLinks = [
    { href: "#home", label: "Home", sectionId: "home" },
    { href: "#sobre", label: "Sobre", sectionId: "sobre" },
    { href: "#beneficios", label: "Benefícios", sectionId: "beneficios" },
    { href: "#planos", label: "Planos", sectionId: "planos" },
    { href: "#resultados", label: "Resultados", sectionId: "resultados" },
    { href: "#conquistas", label: "Conquistas", sectionId: "conquistas" },
    { href: "#feedback", label: "Feedback", sectionId: "feedback" },
    { href: "#time", label: "Time", sectionId: "time" },
  ];

  return (
    <nav className="bg-navBlack fixed top-0 z-40 hidden w-full border-b border-white/10 backdrop-blur-lg lg:block">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between gap-8">
          {/* Logo desktop */}
          <a href="#home" className="flex shrink-0 items-center">
            <Image
              src="/img/Logo/A10.png"
              alt="Talles Furtado"
              width={224}
              height={56}
              className="h-12 w-auto"
              priority
            />
          </a>

          {/*
           * Os links observam o mesmo estado do Zustand usado pelo menu mobile.
           * Assim, somente a seção realmente visível recebe o destaque.
           */}
          <div className="flex min-w-0 items-center justify-end gap-5 font-extrabold xl:gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                titulo={link.label}
                sectionId={link.sectionId}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
