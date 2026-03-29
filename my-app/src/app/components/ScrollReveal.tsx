"use client";

import { motion } from "framer-motion";
import { Children, type ReactNode } from "react";

export const SCROLL_REVEAL_VIEWPORT = { once: true } as const;

export const SCROLL_REVEAL_TRANSITION = {
  duration: 0.6,
  ease: "easeOut" as const,
};

type ScrollRevealProps = React.ComponentProps<typeof motion.div> & {
  delay?: number;
};

export function ScrollReveal({
  children,
  delay = 0,
  style,
  ...rest
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ...SCROLL_REVEAL_TRANSITION, delay }}
      viewport={SCROLL_REVEAL_VIEWPORT}
      style={{ width: "100%", ...style }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type StaggerRevealProps = {
  children: ReactNode;
  /** Fördröjning för första barnet */
  startDelay?: number;
  /** Steg mellan varje barn */
  stepDelay?: number;
  className?: string;
};

/**
 * Varje direkt barn får egen whileInView med ökande delay (rubrik → brödtext → CTA i ordning).
 */
export function StaggerReveal({
  children,
  startDelay = 0,
  stepDelay = 0.12,
  className,
}: StaggerRevealProps) {
  let index = 0;
  return (
    <div className={className} style={{ width: "100%" }}>
      {Children.map(children, (child) => {
        if (child === null || child === undefined || child === false) {
          return null;
        }
        const delay = startDelay + index * stepDelay;
        index += 1;
        return (
          <ScrollReveal key={`stagger-${index}`} delay={delay}>
            {child}
          </ScrollReveal>
        );
      })}
    </div>
  );
}
