import React from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';

const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_SMOOTH,
    },
  },
};

const reducedItemVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

interface FadeInStaggerProps {
  children: React.ReactNode;
  className?: string;
}

export function FadeInStagger({ children, className = '' }: FadeInStaggerProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={containerVariants}
      initial={prefersReducedMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface FadeInItemProps {
  children: React.ReactNode;
  className?: string;
}

export function FadeInItem({ children, className = '' }: FadeInItemProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={prefersReducedMotion ? reducedItemVariants : itemVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
