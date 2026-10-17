"use client";
import { motion } from "motion/react";

// Reduced motion is handled once by <MotionConfig reducedMotion="user"> in app/page.js,
// so server and client always render the same markup

const EASE = [0.22, 1, 0.36, 1];

// Fades and un-blurs its content as it scrolls into view
export function Reveal({ children, delay = 0, y = 24, className, as = "div" }) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </Comp>
  );
}

// Headline that blurs in word by word on first render
export function BlurText({
  text,
  className,
  as = "h1",
  delay = 0,
  stagger = 0.045,
}) {
  const Comp = motion[as];
  const words = text.split(" ");
  return (
    <Comp className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          style={{ display: "inline-block", whiteSpace: "pre" }}
          initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: delay + i * stagger, ease: EASE }}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </Comp>
  );
}
