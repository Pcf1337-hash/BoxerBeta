"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { useInViewOnce } from "@/lib/hooks";

const stats = [
  { label: "Jahre Erfahrung", value: "16" },
  { label: "Betreute Hunde", value: "2.400+" },
  { label: "Stammgäste", value: "78%" },
];

const quoteWords = "Ich kümmere mich um deinen Hund wie um meinen eigenen.".split(" ");

const customEase = [0.22, 1, 0.36, 1] as const;

function SplitWordReveal({ words, className }: { words: string[]; className?: string }) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInViewOnce(ref, { margin: "-50px" });

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: prefersReducedMotion ? 0 : i * 0.06,
            ease: customEase,
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}

export function Manuela() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInViewOnce(ref, { margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.header
          ref={ref}
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: customEase }}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground">
            Deine Gastgeberin
          </h2>
        </motion.header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
          {/* Large Portrait - Left Column (spans 2 rows on desktop) */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: customEase }}
            className="relative aspect-[3/4] overflow-hidden rounded-2xl md:row-span-2 md:aspect-auto"
          >
            <Image
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop&crop=face"
              alt="Manuela Büscher - Inhaberin des Boxerhof"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            {/* Name overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="font-serif text-xl md:text-2xl font-medium text-white">
                Manuela Büscher
              </p>
              <p className="mt-1 text-sm text-white/80">Inhaberin seit 2009</p>
            </div>
          </motion.div>

          {/* Quote - Right Top */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: customEase }}
            className="flex items-center rounded-2xl bg-primary/10 p-6 md:col-span-2 md:p-8 lg:p-10"
          >
            <blockquote>
              <SplitWordReveal
                words={quoteWords}
                className="font-serif text-xl md:text-2xl lg:text-3xl font-medium leading-snug tracking-tight text-foreground"
              />
              <footer className="mt-4">
                <span className="text-sm text-foreground/60">— Manuela</span>
              </footer>
            </blockquote>
          </motion.div>

          {/* Stats - Right Middle */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: customEase }}
            className="grid grid-cols-3 gap-4 rounded-2xl bg-muted p-6 md:col-span-2 md:p-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion ? 0 : 0.4 + index * 0.1,
                  ease: customEase,
                }}
                className="flex flex-col items-center text-center"
              >
                <span className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-primary">
                  {stat.value}
                </span>
                <span className="mt-1 text-xs md:text-sm text-foreground/60">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bio Text */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease: customEase }}
          className="mt-8 max-w-2xl"
        >
          <p className="text-base md:text-lg leading-relaxed text-foreground/70">
            Als gelernte Tierpflegerin habe ich 2009 meinen Traum verwirklicht: 
            Ein Ort, an dem Hunde nicht verwahrt werden, sondern leben. 
            Der Boxerhof ist mein Zuhause, und jeder Gast wird Teil unserer Familie.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
