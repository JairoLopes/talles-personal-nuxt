"use client";
import { motion } from "motion/react";
import { slideUp } from "./variants";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function SlideUp({
  children,
  className = "",
  delay = 0,
}: Props) {
  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
