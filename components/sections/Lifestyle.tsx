"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&h=800&fit=crop",
    alt: "Hunde spielen auf der Wiese",
  },
  {
    src: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=1200&h=800&fit=crop",
    alt: "Waldspaziergang mit Hunden",
  },
  {
    src: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=1200&h=800&fit=crop",
    alt: "Hund entspannt im Schatten",
  },
  {
    src: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=1200&h=800&fit=crop",
    alt: "Naturlandschaft am Hof",
  },
  {
    src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&h=800&fit=crop",
    alt: "Hund am Bach",
  },
  {
    src: "https://images.unsplash.com/photo-1553882809-a4f57e59501d?w=1200&h=800&fit=crop",
    alt: "Friedliche Abendstimmung",
  },
];

const captionWords = ["4.000 qm.", "Wiese.", "Wald.", "Bach.", "Schatten.", "Frieden."];

export function Lifestyle() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate total width of all images for horizontal scroll
  // Each image is roughly 60vw wide with gap, so we need to move the container left
  const totalScrollWidth = images.length * 65; // percentage of viewport width per image
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["0%", `-${totalScrollWidth - 100}%`]
  );

  // Stagger caption word opacity
  const captionOpacities = captionWords.map((_, i) => {
    const start = 0.1 + i * 0.12;
    const end = start + 0.15;
    return useTransform(scrollYProgress, [start, end], [0.2, 1]);
  });

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh]"
      aria-label="Das Hofleben - Bildergalerie"
    >
      {/* Sticky container */}
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden bg-muted">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center px-4 pt-16 pb-8 md:pt-20 md:pb-10">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground text-center">
            Das Hofleben
          </h2>
          
          {/* Caption with scroll-linked word reveal */}
          <p className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-lg md:text-xl lg:text-2xl font-serif text-foreground/70">
            {captionWords.map((word, i) => (
              <motion.span
                key={i}
                style={{ opacity: prefersReducedMotion ? 1 : captionOpacities[i] }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </div>

        {/* Horizontal scrolling gallery */}
        <div className="relative flex-1 overflow-hidden">
          <motion.div
            style={{ x }}
            className="absolute inset-y-0 left-0 flex items-center gap-4 px-4 md:gap-6 md:px-8"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="relative h-[60vh] w-[85vw] flex-shrink-0 overflow-hidden rounded-2xl md:h-[65vh] md:w-[60vw] lg:w-[50vw]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 85vw, (max-width: 1024px) 60vw, 50vw"
                />
                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll progress indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="h-1 w-32 overflow-hidden rounded-full bg-foreground/10">
            <motion.div
              className="h-full bg-primary"
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
