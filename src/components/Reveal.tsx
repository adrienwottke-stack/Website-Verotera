"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Optional entrance delay in seconds. */
  delay?: number;
  /** Direction the element travels in from. */
  y?: number;
  className?: string;
}

/**
 * Lightweight scroll-reveal wrapper used across the subpages so they share
 * the same subtle fade-and-rise entrance as the landing-page sections.
 * Client component, but safe to nest server-rendered children inside.
 */
export default function Reveal({ children, delay = 0, y = 24, className = "" }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
