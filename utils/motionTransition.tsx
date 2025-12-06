// utils/motionTransition.ts
import type { Variants } from "motion/react";

export const transitionVariantsPage: Variants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

export const fadeIn = (position: "right" | "bottom"): Variants => ({
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      // type: "spring", // si quieres especificar, este sí es válido
      duration: 1.4,
      delay: 0.5,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
  hidden: {
    y: position === "bottom" ? -80 : 0,
    x: position === "right" ? 80 : 0,
    opacity: 0,
    transition: {
      // type: "spring",
      duration: 1.4,
      delay: 0.5,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});
