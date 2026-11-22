import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

type HeadingTag = 'h1' | 'h2' | 'h3';

interface SkewHeadingProps {
  as?: HeadingTag;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
}

const EASE_EDITORIAL: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function SkewHeading({
  as = 'h2',
  children,
  className = '',
  delay = 0,
  immediate = false,
}: SkewHeadingProps) {
  const prefersReducedMotion = useReducedMotion();

  const initial = prefersReducedMotion
    ? { opacity: 1, x: 0, skewX: 0 }
    : { opacity: 0, x: -40, skewX: -12 };

  const target = { opacity: 1, x: 0, skewX: 0 };

  const transition = {
    duration: prefersReducedMotion ? 0 : 0.72,
    delay: prefersReducedMotion ? 0 : delay,
    ease: EASE_EDITORIAL,
  };

  const motionProps = immediate
    ? { initial, animate: target, transition }
    : {
        initial,
        whileInView: target,
        viewport: { once: true, amount: 0.2 },
        transition,
      };

  const baseClass = `font-display font-bold uppercase tracking-wider leading-[1.15] ${className}`;

  if (as === 'h1') {
    return (
      <motion.h1 {...motionProps} className={baseClass}>
        {children}
      </motion.h1>
    );
  }
  if (as === 'h3') {
    return (
      <motion.h3 {...motionProps} className={baseClass}>
        {children}
      </motion.h3>
    );
  }
  return (
    <motion.h2 {...motionProps} className={baseClass}>
      {children}
    </motion.h2>
  );
}
