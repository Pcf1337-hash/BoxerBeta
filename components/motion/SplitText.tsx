'use client';

import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { easings, durations, stagger } from '@/lib/motion';

interface SplitTextProps {
  text: string;
  mode?: 'word' | 'char';
  className?: string;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
}

export function SplitText({
  text,
  mode = 'word',
  className,
  delay = 0,
  duration = durations.base,
  staggerDelay = stagger.default,
}: SplitTextProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) return <span className={className}>{text}</span>;

  if (mode === 'word') {
    const words = text.split(' ');
    return (
      <motion.span
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-15%' }}
        transition={{ staggerChildren: staggerDelay, delayChildren: delay }}
        aria-label={text}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            aria-hidden
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration, ease: easings.out },
              },
            }}
          >
            {word}
            {i < words.length - 1 && '\u00A0'}
          </motion.span>
        ))}
      </motion.span>
    );
  } else {
    const chars = text.split('');
    return (
      <motion.span
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-15%' }}
        transition={{ staggerChildren: staggerDelay * 0.5, delayChildren: delay }}
        aria-label={text}
      >
        {chars.map((char, i) => (
          <motion.span
            key={i}
            aria-hidden
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: duration * 0.8, ease: easings.out },
              },
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    );
  }
}
