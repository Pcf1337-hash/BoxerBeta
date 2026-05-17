'use client';

import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { easings, durations } from '@/lib/motion';
import { type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
  staggerChildren?: number;
  viewportOnce?: boolean;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = durations.base,
  y = 20,
  x = 0,
  scale = 1,
  staggerChildren = 0,
  viewportOnce = true,
}: ScrollRevealProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const variants = {
    hidden: {
      opacity: 0,
      y: y,
      x: x,
      scale: scale,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: duration,
        ease: easings.out,
        delay: delay,
        staggerChildren: staggerChildren || undefined,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewportOnce, margin: '-10%' }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
