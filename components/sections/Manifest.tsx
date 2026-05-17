"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

const manifestText =
  "Manuela Büscher führt den Boxerhof seit 2009. Ohne Boxen. Ohne Käfige. Mit echten Zimmern, echten Betten, echten Spaziergängen über 4.000 Quadratmeter.";

const words = manifestText.split(" ");

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.span
      className="inline-block mr-[0.25em] text-foreground"
      style={{ opacity: prefersReducedMotion ? 1 : opacity }}
    >
      {word}
    </motion.span>
  );
}

export function Manifest() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] flex items-center justify-center py-24 sm:py-32 lg:py-40"
      aria-label="Manifest"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.p
          className="font-serif text-[clamp(1.75rem,5vw,4rem)] leading-[1.2] tracking-tight text-balance"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {words.map((word, index) => {
            const start = index / words.length;
            const end = start + 1 / words.length;
            return (
              <Word
                key={index}
                word={word}
                progress={scrollYProgress}
                range={[start, end]}
              />
            );
          })}
        </motion.p>
      </div>
    </section>
  );
}
