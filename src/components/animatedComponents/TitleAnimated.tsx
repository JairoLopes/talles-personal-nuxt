"use client";
import { motion } from "motion/react";
import { zoom } from "@/components/animatedComponents/variants";

type Props = {
  children: React.ReactNode;
};

function TitleAnimated({ children }: Props) {
  return (
    <motion.h1
      variants={zoom}
      initial="hidden"
      whileInView="visible"
      className="text-myWhite my-7 text-center text-3xl font-semibold"
    >
      {children}
    </motion.h1>
  );
}

export default TitleAnimated;
