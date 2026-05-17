'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const manifestText =
  'Manuela Büscher führt den Boxerhof seit 2009. Ohne Boxen. Ohne Käfige. Mit echten Zimmern, echten Betten, echten Spaziergängen über 4.000 Quadratmeter.';

const words = manifestText.split(' ');

interface ManifestWordProps {
  word: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
}

function ManifestWord({ word, index, total, progress }: ManifestWordProps) {
  const start = index / total;
  const end = Math.min(1, start + 1.5 / total);
  const opacity = useTransform(progress, [start, end], [0.15, 1]);

  return (
    <motion.span
      className="inline-block mr-[0.25em] text-foreground"
      style={{ opacity }}
    >
      {word}
    </motion.span>
  );
}

export function Manifest() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] w-full"
      aria-label="Manifest"
    >
      {/* Sticky container that spans exactly the viewport height */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {prefersReduced ? (
            // Static fallback for reduced-motion
            <p className="font-serif text-[clamp(1.75rem,4.5vw,3.5rem)] leading-[1.2] tracking-tight text-balance text-foreground">
              {manifestText}
            </p>
          ) : (
            <p className="font-serif text-[clamp(1.75rem,4.5vw,3.5rem)] leading-[1.2] tracking-tight text-balance">
              {words.map((word, index) => (
                <ManifestWord
                  key={index}
                  word={word}
                  index={index}
                  total={words.length}
                  progress={scrollYProgress}
                />
              ))}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
