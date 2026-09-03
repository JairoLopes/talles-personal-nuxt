"use client";

import {
  FiAward,
  FiHome,
  FiMessageCircle,
  FiShield,
  FiTag,
  FiTrendingUp,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import NavLink from "./NavLink";

/**
 * Navegação mobile em formato de bottom bar.
 *
 * Não há menu hambúrguer nem botão no topo. A barra permanece visível na
 * parte inferior e pode ser deslizada horizontalmente em aparelhos estreitos.
 */
export default function MobileMenu() {
  const navLinks = [
    { href: "#home", label: "Home", sectionId: "home", icon: FiHome },
    { href: "#sobre", label: "Sobre", sectionId: "sobre", icon: FiUser },
    {
      href: "#beneficios",
      label: "Benefícios",
      sectionId: "beneficios",
      icon: FiShield,
    },
    { href: "#planos", label: "Planos", sectionId: "planos", icon: FiTag },
    {
      href: "#resultados",
      label: "Resultados",
      sectionId: "resultados",
      icon: FiTrendingUp,
    },
    {
      href: "#conquistas",
      label: "Conquistas",
      sectionId: "conquistas",
      icon: FiAward,
    },
    {
      href: "#feedback",
      label: "Feedback",
      sectionId: "feedback",
      icon: FiMessageCircle,
    },
    { href: "#time", label: "Time", sectionId: "time", icon: FiUsers },
  ];

  return (
    <nav
      aria-label="Navegação mobile"
      className="bg-navBlack/90 shadow-4xl fixed right-0 bottom-0 left-0 z-50 border border-white/10 p-4 pt-7 backdrop-blur-xl lg:hidden"
    >
      {/*
       * `overflow-x-auto` permite manter todos os destinos disponíveis sem
       * esmagar oito itens em uma tela pequena. Os itens mantêm largura mínima.
       */}
      <div className="flex gap-1 overflow-x-auto [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            titulo={link.label}
            sectionId={link.sectionId}
            icon={link.icon}
            className="min-w-17 shrink-0"
          />
        ))}
      </div>
    </nav>
  );
}
