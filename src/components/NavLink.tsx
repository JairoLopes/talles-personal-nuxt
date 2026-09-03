"use client";

import type { ComponentType, MouseEvent, SVGProps } from "react";
import { useActiveSectionStore } from "@/store/useActiveSectionStore";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type Props = {
  href: string;
  titulo: string;
  sectionId: string;
  onClick?: () => void;
  className?: string;
  icon?: IconComponent;
};

export default function NavLink({
  href,
  titulo,
  sectionId,
  onClick,
  className = "",
  icon: Icon,
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
        Icon
          ? "flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-[10px] leading-none transition-colors duration-300"
          : "transition-colors duration-300"
      }`}
    >
      {Icon && <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />}
      <span className={Icon ? "whitespace-nowrap" : undefined}>{titulo}</span>
    </a>
  );
}
