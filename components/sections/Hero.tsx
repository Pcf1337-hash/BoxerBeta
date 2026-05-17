"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { ChevronDown } from "lucide-react";

const words = ["Kein", "Käfig.", "Nur", "Zuhause."];

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4,
      },
    },
  };

  const scrollIndicatorVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1, duration: 0.6 },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
      aria-label="Hero"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          scale: prefersReducedMotion ? 1 : imageScale,
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&q=80"
          alt="Ein entspannter Hund liegt gemütlich auf dem Sofa"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
        style={{
          opacity: prefersReducedMotion ? 1 : textOpacity,
          y: prefersReducedMotion ? 0 : textY,
        }}
      >
        <div className="max-w-5xl text-center">
          {/* Headline with stagger reveal */}
          <motion.h1
            className="font-serif text-[clamp(3rem,12vw,15rem)] font-normal leading-[0.9] tracking-tight text-balance"
            variants={prefersReducedMotion ? {} : containerVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={prefersReducedMotion ? {} : wordVariants}
                className={`inline-block ${
                  index === 3 ? "text-accent" : "text-foreground"
                } ${index < words.length - 1 ? "mr-[0.25em]" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground sm:text-xl"
            variants={prefersReducedMotion ? {} : subtitleVariants}
            initial="hidden"
            animate="visible"
          >
            Hundepension auf 4.000 qm in Bad Oeynhausen. Seit 2009.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          variants={prefersReducedMotion ? {} : scrollIndicatorVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              scroll
            </span>
            <motion.div
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      y: [0, 8, 0],
                    }
              }
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
