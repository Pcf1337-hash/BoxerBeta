'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { SplitText } from '@/components/motion/SplitText';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scroll-linked transforms
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [1, 0]);
  const textY = useTransform(scrollYProgress, [0.3, 0.6], [0, -40]);

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
          fetchPriority="high"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8f5OhHgAFvQIpqQJ4hQAAAABJRU5ErkJggg=="
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
          {/* Headline with SplitText word stagger */}
          <h1 className="font-serif text-[clamp(3rem,12vw,12rem)] font-normal leading-[0.9] tracking-tight text-balance">
            <SplitText text="Kein Käfig. Nur" mode="word" delay={0.1} />{' '}
            <SplitText text="Zuhause." mode="word" className="text-accent" delay={0.4} />
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground sm:text-xl">
            <SplitText text="Hundepension auf 4.000 qm in Bad Oeynhausen. Seit 2009." mode="word" delay={0.6} />
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
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
                ease: 'easeInOut',
              }}
            >
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
