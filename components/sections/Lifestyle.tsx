'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { stagger } from '@/lib/motion';

// GSAP Imports
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useLenis } from 'lenis/react';

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&h=800&fit=crop',
    alt: 'Hunde spielen auf der Wiese',
  },
  {
    src: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=1200&h=800&fit=crop',
    alt: 'Waldspaziergang mit Hunden',
  },
  {
    src: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=1200&h=800&fit=crop',
    alt: 'Hund entspannt im Schatten',
  },
  {
    src: 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=1200&h=800&fit=crop',
    alt: 'Naturlandschaft am Hof',
  },
  {
    src: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&h=800&fit=crop',
    alt: 'Hund am Bach',
  },
  {
    src: 'https://images.unsplash.com/photo-1553882809-a4f57e59501d?w=1200&h=800&fit=crop',
    alt: 'Friedliche Abendstimmung',
  },
];

const captionWords = ['4.000 qm.', 'Wiese.', 'Wald.', 'Bach.', 'Schatten.', 'Frieden.'];

export function Lifestyle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  // Sync Lenis with ScrollTrigger
  useLenis(ScrollTrigger.update);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // GSAP Horizontal scroll and pin effect
  useGSAP(
    () => {
      // Disable GSAP pinning on mobile or if reduced motion is active
      if (isMobile || prefersReduced || !trackRef.current || !containerRef.current) return;

      const track = trackRef.current;
      const distance = track.scrollWidth - window.innerWidth;

      const anim = gsap.to(track, {
        x: -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${distance}`,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        anim.scrollTrigger?.kill();
        anim.kill();
      };
    },
    { scope: containerRef, dependencies: [isMobile, prefersReduced] }
  );

  // If prefers-reduced-motion is active, render a simple static photo grid
  if (prefersReduced) {
    return (
      <section className="relative py-24 bg-muted" aria-label="Das Hofleben - Bildergalerie">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground">
              Das Hofleben
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              {captionWords.join(' ')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div key={index} className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Mobile Fallback: Vertical layout with scroll reveal
  if (isMobile) {
    return (
      <section className="relative py-16 bg-muted overflow-hidden" aria-label="Das Hofleben - Bildergalerie">
        <div className="px-4">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground">
              Das Hofleben
            </h2>
            <p className="mt-4 flex flex-wrap items-center justify-center gap-2 text-base font-serif text-muted-foreground">
              {captionWords.map((word, i) => (
                <span key={i}>{word}</span>
              ))}
            </p>
          </div>

          <ScrollReveal staggerChildren={stagger.default} className="flex flex-col gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>
    );
  }

  // Desktop pinned horizontal scroll
  return (
    <section
      ref={containerRef}
      className="relative h-screen bg-muted overflow-hidden"
      style={{ transform: 'translateZ(0)' }} // prevents iOS / Safari pin stutter
      aria-label="Das Hofleben - Bildergalerie"
    >
      <div className="flex h-screen flex-col justify-between py-16 md:py-20">
        {/* Header */}
        <div className="flex flex-col items-center justify-center px-4">
          <h2 className="font-serif text-4xl lg:text-5xl font-medium tracking-tight text-foreground text-center">
            Das Hofleben
          </h2>
          <p className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xl lg:text-2xl font-serif text-muted-foreground">
            {captionWords.map((word, i) => (
              <span key={i} className="inline-block">
                {word}
              </span>
            ))}
          </p>
        </div>

        {/* GSAP Horizontal Scroll Track */}
        <div className="relative flex-grow flex items-center overflow-hidden my-auto">
          <div
            ref={trackRef}
            className="flex items-center gap-8 pl-[10vw] pr-[10vw]"
            style={{ willChange: 'transform' }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="relative h-[50vh] w-[45vw] flex-shrink-0 overflow-hidden rounded-2xl shadow-xl transition-shadow duration-300 hover:shadow-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>

        {/* Small Bottom Info */}
        <div className="text-center text-xs uppercase tracking-widest text-muted-foreground/60 px-4">
          Scrollen zum Erkunden
        </div>
      </div>
    </section>
  );
}
