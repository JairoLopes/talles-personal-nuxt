"use client";
import { useEffect, useRef } from "react";
import { useActiveSectionStore } from "@/store/useActiveSectionStore";

export function useSectionObserver(sectionId: string) {
  const ref = useRef<HTMLElement | null>(null);
  const setActiveSection = useActiveSectionStore(
    (state) => state.setActiveSection,
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(sectionId);
        }
      },
      {
        rootMargin: "0px 0px -50% 0px",
        threshold: 0.5,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [sectionId, setActiveSection]);

  return ref;
}
