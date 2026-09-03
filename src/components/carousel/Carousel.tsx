"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Slide = {
  type: "image" | "video";
  src: string;
  alt?: string;
  caption?: string;
};

type CarouselOptions = {
  loop?: boolean;
  autoplay?: boolean;
  delay?: number;
  slidesToScroll?: number;
  align?: "start" | "center" | "end";
  breakpoints?: {
    [key: number]: { slidesToShow: number; slidesToScroll?: number };
  };
};

type Props = {
  slides?: Slide[];
  children?: ReactNode;
  options?: CarouselOptions;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
  slideClassName?: string;
  imageAspectRatio?: "square" | "portrait" | "landscape";
};

export default function Carousel({
  slides = [],
  children,
  options = {},
  showArrows = true,
  showDots = true,
  className = "",
  slideClassName = "",
  imageAspectRatio = "portrait",
}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const autoplayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const mergedOptions: EmblaOptionsType = {
    loop: true,
    align: "start",
    slidesToScroll: 1,
    ...options,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(mergedOptions);

  /** Cancela qualquer avanço automático que esteja agendado. */
  const stopAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  }, []);

  /**
   * Agenda somente UM próximo avanço.
   *
   * Isso é preferível a `setInterval`, porque podemos cancelar e reiniciar o
   * relógio facilmente quando o usuário começa a arrastar o carrossel.
   */
  const startAutoplay = useCallback(() => {
    if (!emblaApi || !options.autoplay) return;

    stopAutoplay();

    autoplayTimerRef.current = setInterval(() => {
      emblaApi.scrollNext();
    }, options.delay ?? 4000);
  }, [emblaApi, options.autoplay, options.delay, stopAutoplay]);

  /** Reinicia a contagem depois de uma interação manual. */
  const restartAutoplay = useCallback(() => {
    stopAutoplay();
    startAutoplay();
  }, [startAutoplay, stopAutoplay]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      restartAutoplay();
    },
    [emblaApi, restartAutoplay],
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    restartAutoplay();
  }, [emblaApi, restartAutoplay]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    restartAutoplay();
  }, [emblaApi, restartAutoplay]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // Atualiza os dots sempre que o Embla for inicializado/reinicializado.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    /**
     * Assim que o dedo/mouse começa a arrastar, o autoplay é interrompido.
     * Sem isso, o timer antigo pode trocar o slide no meio do gesto.
     */
    const handlePointerDown = () => stopAutoplay();

    /**
     * Ao soltar, o usuário recebe tempo suficiente para ler o novo slide antes
     * de o autoplay voltar a funcionar.
     */
    const handlePointerUp = () => restartAutoplay();

    emblaApi.on("pointerDown", handlePointerDown);
    emblaApi.on("pointerUp", handlePointerUp);

    if (options.autoplay) {
      startAutoplay();
    }

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("pointerDown", handlePointerDown);
      emblaApi.off("pointerUp", handlePointerUp);
      stopAutoplay();
    };
  }, [
    emblaApi,
    onSelect,
    options.autoplay,
    restartAutoplay,
    startAutoplay,
    stopAutoplay,
  ]);

  const aspectClass =
    imageAspectRatio === "square"
      ? "aspect-square"
      : imageAspectRatio === "landscape"
        ? "aspect-[4/3]"
        : "aspect-[3/4]";

  const renderSlides = () => {
    if (children) return children;
    if (!slides.length) return null;

    return slides.map((slide, index) => (
      <div
        key={index}
        className={`min-w-0 flex-[0_0_100%] px-2 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] ${slideClassName}`}
      >
        <div
          className={`${aspectClass} relative overflow-hidden rounded-xl bg-black`}
        >
          {slide.type === "image" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={slide.src}
              alt={slide.alt || ""}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <video
              src={slide.src}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          )}

          {slide.caption && (
            <div className="absolute right-0 bottom-0 left-0 bg-black/50 p-2 text-sm text-white">
              {slide.caption}
            </div>
          )}
        </div>
      </div>
    ));
  };

  const slideCount = React.Children.count(children) || slides.length;

  return (
    <div className={`relative ${className}`}>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex touch-pan-y">{renderSlides()}</div>
      </div>

      {showArrows && slideCount > 1 && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            className="hover:bg-mainTheme absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition"
            aria-label="Previous slide"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="hover:bg-mainTheme absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition"
            aria-label="Next slide"
          >
            <FiChevronRight size={24} />
          </button>
        </>
      )}

      {showDots && slideCount > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === selectedIndex
                  ? "bg-mainTheme w-6"
                  : "bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === selectedIndex ? "true" : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}
