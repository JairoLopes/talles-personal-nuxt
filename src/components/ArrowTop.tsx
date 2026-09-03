"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="bg-mainTheme fixed right-4 bottom-24 z-50 rounded-full p-3 text-white shadow-lg transition-colors duration-300 hover:bg-blue-600 lg:bottom-4"
          aria-label="Voltar ao topo"
        >
          <FiArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
