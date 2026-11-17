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
import NavLink from "@/components/clients/navigation/NavLink";

/**
 * Navegação mobile em formato de bottom bar.
 *
 * Não há menu hambúrguer nem botão no topo. A barra permanece visível na
 * parte inferior e pode ser deslizada horizontalmente em aparelhos estreitos.
 */
export default function MobileMenu() {
  const navLinks = [
    {
      href: "#home",
      label: "Home",
      sectionId: "home",
      icon: <FiHome className="h-5 w-5 shrink-0" aria-hidden="true" />,
    },
    {
      href: "#sobre",
      label: "Sobre",
      sectionId: "sobre",
      icon: <FiUser className="h-5 w-5 shrink-0" aria-hidden="true" />,
    },
    {
      href: "#beneficios",
      label: "Benefícios",
      sectionId: "beneficios",
      icon: <FiShield className="h-5 w-5 shrink-0" aria-hidden="true" />,
    },
    {
      href: "#planos",
      label: "Planos",
      sectionId: "planos",
      icon: <FiTag className="h-5 w-5 shrink-0" aria-hidden="true" />,
    },
    {
      href: "#resultados",
      label: "Resultados",
      sectionId: "resultados",
      icon: <FiTrendingUp className="h-5 w-5 shrink-0" aria-hidden="true" />,
    },
    {
      href: "#conquistas",
      label: "Conquistas",
      sectionId: "conquistas",
      icon: <FiAward className="h-5 w-5 shrink-0" aria-hidden="true" />,
    },
    {
      href: "#feedback",
      label: "Feedback",
      sectionId: "feedback",
      icon: <FiMessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />,
    },
    {
      href: "#time",
      label: "Time",
      sectionId: "time",
      icon: <FiUsers className="h-5 w-5 shrink-0" aria-hidden="true" />,
    },
  ];

  return (
    <nav
      aria-label="Navegação mobile"
      className="bg-navBlack/95 shadow-4xl fixed right-0 bottom-0 left-0 z-50 border border-white/10 p-4 pt-7 lg:hidden"
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
