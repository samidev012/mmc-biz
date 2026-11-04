"use client";

import { motion } from "framer-motion";

const animations = {
  "hero-left": {
    initial: { opacity: 0, x: -35 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.75 },
  },
  "hero-right": {
    initial: { opacity: 0, x: 35 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.75, delay: 0.15 },
  },
  "glow-one": {
    animate: { x: [0, 32, 0], y: [0, -20, 0], scale: [1, 1.12, 1] },
    transition: { duration: 12, repeat: Infinity, ease: "easeInOut" },
  },
  "glow-two": {
    animate: { x: [0, -28, 0], y: [0, 22, 0], scale: [1, 1.15, 1] },
    transition: { duration: 15, repeat: Infinity, ease: "easeInOut" },
  },
  reveal: {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.55 },
  },
  "reveal-row": {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.6 },
  },
  partner: {
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.45 },
  },
};

export default function AVMotion({ as = "div", animation, children, ...props }) {
  const Element = as === "article" ? motion.article : motion.div;
  return <Element {...animations[animation]} {...props}>{children}</Element>;
}
