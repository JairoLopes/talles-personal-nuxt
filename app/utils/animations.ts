// utils/animations.ts

const easing = {
  standard: "cubic-bezier(0.4, 0.0, 0.2, 1)",
  smooth: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
} as const;

// Agora SEM a propriedade 'appear' - será controlada globalmente
export const animations = {
  scaleIn: {
    initial: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 600, ease: easing.smooth },
    },
  },

  slideUp: {
    initial: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 700, ease: easing.standard },
    },
  },

  fadeIn: {
    initial: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 500, ease: easing.standard },
    },
  },

  slideLeft: {
    initial: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 600, ease: easing.smooth },
    },
  },

  slideRight: {
    initial: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 600, ease: easing.smooth },
    },
  },

  popIn: {
    initial: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 180, damping: 12 },
    },
  },

  rotateIn: {
    initial: { opacity: 0, rotateX: -15, scale: 0.95 },
    visible: {
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: { duration: 800, ease: easing.smooth },
    },
  },
};

export type AnimationName = keyof typeof animations;

// Stagger simplificado
export function createStagger(
  animationName: AnimationName,
  staggerDelay = 120,
) {
  const baseAnimation = animations[animationName];

  return (index: number) => ({
    ...baseAnimation,
    visible: {
      ...baseAnimation.visible,
      transition: {
        ...baseAnimation.visible.transition,
        delay: index * staggerDelay,
      },
    },
  });
}

// Versão SIMPLES do stagger para uso direto
export const staggerAnimations = {
  slideUp: createStagger("slideUp"),
  scaleIn: createStagger("scaleIn"),
  fadeIn: createStagger("fadeIn"),
  slideLeft: createStagger("slideLeft"),
};
