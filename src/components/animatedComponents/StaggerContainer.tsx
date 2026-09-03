"use client";
import { motion } from "motion/react";

type Props = {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
};

export default function StaggerContainer({
  children,
  className = "",
  staggerChildren = 0.1,
  delayChildren = 0,
}: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Item filho para usar dentro do StaggerContainer
export const StaggerItem = motion.div;
