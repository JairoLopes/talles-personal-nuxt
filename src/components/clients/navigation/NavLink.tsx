"use client";

import type { MouseEvent, ReactNode } from "react";
import { useActiveSectionStore } from "@/store/useActiveSectionStore";

type Props = {
  href: string;
  titulo: string;
  sectionId: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
};

export default function NavLink({
  href,
  titulo,
  sectionId,
  onClick,
  className = "",
  icon,
}: Props) {
  const activeSection = useActiveSectionStore((state) => state.activeSection);
  const isActive = activeSection === sectionId;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      // O #page-scroll é o container real de scroll. `scrollIntoView` encontra
      // esse ancestral e preserva a navegação suave das âncoras existentes.
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    onClick?.();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      aria-current={isActive ? "page" : undefined}
      className={`${className} ${
        isActive
          ? "text-secondaryTheme font-bold underline decoration-2 underline-offset-4"
          : "text-gray-300 hover:text-white"
      } ${
        icon
          ? "flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-[10px] leading-none transition-colors duration-300"
          : "transition-colors duration-300"
      }`}
    >
      {icon}
      <span className={icon ? "whitespace-nowrap" : undefined}>{titulo}</span>
    </a>
  );
}
