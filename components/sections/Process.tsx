'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useInViewOnce } from '@/lib/hooks';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { MessageCircle, Calendar, Heart } from 'lucide-react';
import { easings } from '@/lib/motion';

const steps = [
  {
    number: '01',
    title: 'Kennenlernen',
    description: 'Kostenloses Vorgespräch — wir lernen dich und deinen Hund kennen.',
    icon: MessageCircle,
  },
  {
    number: '02',
    title: 'Schnuppertag',
    description: 'Dein Hund testet uns. Ein halber Tag, um zu schauen, ob alles passt.',
    icon: Calendar,
  },
  {
    number: '03',
    title: 'Aufenthalt',
    description: 'Wir kümmern uns — mit Liebe, Aufmerksamkeit und viel frischer Luft.',
    icon: Heart,
  },
];

interface TimelineStepProps {
  step: typeof steps[0];
  index: number;
  prefersReducedMotion: boolean;
}

function TimelineStep({ step, index, prefersReducedMotion }: TimelineStepProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInViewOnce(ref, { margin: '-100px' });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -32 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: prefersReducedMotion ? 0 : index * 0.15,
        ease: easings.out,
      }}
      className="relative flex gap-6 md:gap-8 pb-16 last:pb-0 z-10"
    >
      {/* Circle Icon */}
      <motion.div
        initial={prefersReducedMotion ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{
          duration: 0.5,
          delay: prefersReducedMotion ? 0 : index * 0.15 + 0.1,
          ease: easings.out,
        }}
        className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary text-background shadow-md flex-shrink-0"
      >
        <Icon className="h-5 w-5 md:h-6 md:w-6" />
      </motion.div>

      {/* Content */}
      <div className="flex-grow pt-1.5 md:pt-2">
        <span className="font-mono text-xs md:text-sm font-semibold tracking-wider text-primary/70 uppercase">
          Schritt {step.number}
        </span>
        <h3 className="mt-1 font-serif text-xl md:text-2xl font-medium tracking-tight text-foreground">
          {step.title}
        </h3>
        <p className="mt-2 text-sm md:text-base leading-relaxed text-muted-foreground max-w-xl">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export function Process() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end center'],
  });

  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 lg:py-40 bg-muted overflow-hidden"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal y={24} className="mb-12 md:mb-16 lg:mb-20 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground">
            So funktioniert&apos;s
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            In drei einfachen Schritten zum entspannten Urlaub für dich und deinen Hund.
          </p>
        </ScrollReveal>

        {/* Timeline Content */}
        <div className="relative pl-12 md:pl-16">
          {/* Continuous SVG Line down the left side */}
          {!prefersReducedMotion && (
            <div className="absolute left-6 md:left-[28px] top-6 bottom-6 w-[2px] -translate-x-1/2 -z-0">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="100%"
                  stroke="var(--color-border)"
                  strokeWidth="2"
                  className="opacity-40"
                />
                <motion.line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="100%"
                  stroke="var(--color-primary)"
                  strokeWidth="2"
                  style={{
                    pathLength: lineProgress,
                  }}
                />
              </svg>
            </div>
          )}

          {steps.map((step, index) => (
            <TimelineStep
              key={step.number}
              step={step}
              index={index}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
