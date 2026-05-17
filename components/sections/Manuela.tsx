'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, animate } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { SplitText } from '@/components/motion/SplitText';
import { easings } from '@/lib/motion';

const stats = [
  { label: 'Jahre Erfahrung', value: '16' },
  { label: 'Betreute Hunde', value: '2.400+' },
  { label: 'Stammgäste', value: '78%' },
];

interface CountUpProps {
  value: string;
}

function CountUp({ value }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState('0');
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setDisplayValue(value);
      return;
    }
    if (!isInView) return;

    // Parse the numeric part and suffix (e.g. "2.400+" -> 2400, "+")
    const cleanValue = value.replace(/\./g, '');
    const match = cleanValue.match(/^([\d,]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const numericVal = parseInt(match[1].replace(/,/g, ''), 10);
    const suffix = match[2];
    const hasDot = value.includes('.');

    const controls = animate(0, numericVal, {
      duration: 2.0,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        const rounded = Math.round(latest);
        let formatted = rounded.toString();
        if (hasDot) {
          formatted = rounded.toLocaleString('de-DE');
        }
        setDisplayValue(`${formatted}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [isInView, value, prefersReduced]);

  return <span ref={ref}>{displayValue}</span>;
}

export function Manuela() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal y={24} className="mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground">
            Deine Gastgeberin
          </h2>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
          {/* Large Portrait - Left Column (spans 2 rows on desktop) */}
          <ScrollReveal
            y={32}
            delay={0.1}
            className="relative aspect-[3/4] overflow-hidden rounded-2xl md:row-span-2 md:aspect-auto min-h-[400px] shadow-lg border border-border group"
          >
            <div
              className={`absolute inset-0 transition-transform duration-700 ease-out-expo ${
                prefersReduced ? '' : 'group-hover:scale-[1.03]'
              }`}
            >
              <Image
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop&crop=face"
                alt="Manuela Büscher - Inhaberin des Boxerhof"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            {/* Name overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="font-serif text-xl md:text-2xl font-medium text-white">
                Manuela Büscher
              </p>
              <p className="mt-1 text-sm text-white/80">Inhaberin seit 2009</p>
            </div>
          </ScrollReveal>

          {/* Quote - Right Top */}
          <ScrollReveal
            y={32}
            delay={0.2}
            className="flex items-center rounded-2xl bg-primary/10 border border-primary/5 p-6 md:col-span-2 md:p-8 lg:p-10 shadow-sm"
          >
            <blockquote>
              <SplitText
                text="Ich kümmere mich um deinen Hund wie um meinen eigenen."
                mode="word"
                className="font-serif text-xl md:text-2xl lg:text-3xl font-medium leading-snug tracking-tight text-foreground block"
                staggerDelay={0.12}
                duration={1.0}
              />
              <footer className="mt-4">
                <span className="text-sm text-muted-foreground">— Manuela</span>
              </footer>
            </blockquote>
          </ScrollReveal>

          {/* Stats - Right Middle */}
          <ScrollReveal
            y={32}
            delay={0.3}
            className="grid grid-cols-3 gap-4 rounded-2xl bg-card border border-border p-6 md:col-span-2 md:p-8 shadow-sm"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <span className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-primary">
                  <CountUp value={stat.value} />
                </span>
                <span className="mt-1 text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </ScrollReveal>
        </div>

        {/* Bio Text */}
        <ScrollReveal y={20} delay={0.4} className="mt-8 max-w-2xl">
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            Als gelernte Tierpflegerin habe ich 2009 meinen Traum verwirklicht: 
            Ein Ort, an dem Hunde nicht verwahrt werden, sondern leben. 
            Der Boxerhof ist mein Zuhause, und jeder Gast wird Teil unserer Familie.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
