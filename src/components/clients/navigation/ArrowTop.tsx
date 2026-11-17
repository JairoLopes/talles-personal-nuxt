"use client";

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ArrowTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // A página usa #page-scroll como container real de rolagem.
    const scrollContainer = document.getElementById("page-scroll");

    if (!(scrollContainer instanceof HTMLElement)) return;

    const handleScroll = () => {
      setShow(scrollContainer.scrollTop > 300);
    };

    handleScroll();
    scrollContainer.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const scrollContainer = document.getElementById("page-scroll");

    if (scrollContainer instanceof HTMLElement) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return show ? (
    <button
      type="button"
      onClick={scrollToTop}
      className="bg-mainTheme text-deepBlue hover:bg-secondaryTheme fixed right-4 bottom-24 z-50 rounded-full p-3 shadow-lg transition-colors duration-300 lg:bottom-4"
      aria-label="Voltar ao topo"
    >
      <FiArrowUp className="h-6 w-6" />
    </button>
  ) : null;
}
