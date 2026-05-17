"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { useInViewOnce } from "@/lib/hooks";
import { MessageCircle, Calendar, Heart } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Kennenlernen",
    description: "Kostenloses Vorgespräch — wir lernen dich und deinen Hund kennen.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Schnuppertag",
    description: "Dein Hund testet uns. Ein halber Tag, um zu schauen, ob alles passt.",
    icon: Calendar,
  },
  {
    number: "03",
    title: "Aufenthalt",
    description: "Wir kümmern uns — mit Liebe, Aufmerksamkeit und viel frischer Luft.",
    icon: Heart,
  },
];

const customEase = [0.22, 1, 0.36, 1] as const;

function TimelineStep({
  step,
  index,
  isLast,
  lineProgress,
}: {
  step: typeof steps[0];
  index: number;
  isLast: boolean;
  lineProgress: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInViewOnce(ref, { margin: "-50px" });
  const Icon = step.icon;

  // Calculate this step's line progress (0-1 for each segment)
  const stepLineProgress = Math.max(0, Math.min(1, (lineProgress * 3) - index));

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: prefersReducedMotion ? 0 : index * 0.15,
        ease: customEase,
      }}
      className="relative flex gap-6 pb-12 last:pb-0 md:gap-8"
    >
      {/* Timeline Line & Circle */}
      <div className="relative flex flex-col items-center">
        {/* Circle */}
        <motion.div
          initial={prefersReducedMotion ? { scale: 1 } : { scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{
            duration: 0.5,
            delay: prefersReducedMotion ? 0 : index * 0.15 + 0.2,
            ease: customEase,
          }}
          className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-background md:h-14 md:w-14"
        >
          <Icon className="h-5 w-5 md:h-6 md:w-6" />
        </motion.div>

        {/* Connecting Line */}
        {!isLast && (
          <div className="relative mt-4 h-full w-0.5 bg-foreground/10">
            <motion.div
              className="absolute inset-x-0 top-0 bg-primary"
              style={{
                height: prefersReducedMotion ? "100%" : `${stepLineProgress * 100}%`,
              }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pt-1">
        <span className="font-mono text-sm text-primary/70">{step.number}</span>
        <h3 className="mt-1 font-serif text-xl font-medium tracking-tight text-foreground md:text-2xl">
          {step.title}
        </h3>
        <p className="mt-2 text-base leading-relaxed text-foreground/70 md:text-lg">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export function Process() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInViewOnce(headerRef, { margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  // Get the raw number value for the timeline
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 lg:py-40 bg-muted"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.header
          ref={headerRef}
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: customEase }}
          className="mb-12 md:mb-16 lg:mb-20 text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground">
            So funktioniert&apos;s
          </h2>
          <p className="mt-4 text-base md:text-lg text-foreground/60 max-w-xl mx-auto">
            In drei einfachen Schritten zum entspannten Urlaub für dich und deinen Hund.
          </p>
        </motion.header>

        {/* Timeline */}
        <TimelineContent lineProgress={lineProgress} />
      </div>
    </section>
  );
}

// Separate component to use the motion value
function TimelineContent({ lineProgress }: { lineProgress: ReturnType<typeof useTransform<number, number>> }) {
  const prefersReducedMotion = useReducedMotion();
  
  // Use a ref to track the current value
  const progressValue = useTransform(lineProgress, (v) => v);
  
  return (
    <div className="relative">
      {steps.map((step, index) => (
        <TimelineStepWithProgress
          key={step.number}
          step={step}
          index={index}
          isLast={index === steps.length - 1}
          progressMotion={progressValue}
          prefersReducedMotion={prefersReducedMotion ?? false}
        />
      ))}
    </div>
  );
}

function TimelineStepWithProgress({
  step,
  index,
  isLast,
  progressMotion,
  prefersReducedMotion,
}: {
  step: typeof steps[0];
  index: number;
  isLast: boolean;
  progressMotion: ReturnType<typeof useTransform<number, number>>;
  prefersReducedMotion: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInViewOnce(ref, { margin: "-50px" });
  const Icon = step.icon;

  // Calculate this step's line progress (0-1 for each segment)
  const stepLineProgress = useTransform(progressMotion, (v) => Math.max(0, Math.min(1, (v * 3) - index)));

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: prefersReducedMotion ? 0 : index * 0.15,
        ease: customEase,
      }}
      className="relative flex gap-6 pb-12 last:pb-0 md:gap-8"
    >
      {/* Timeline Line & Circle */}
      <div className="relative flex flex-col items-center">
        {/* Circle */}
        <motion.div
          initial={prefersReducedMotion ? { scale: 1 } : { scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{
            duration: 0.5,
            delay: prefersReducedMotion ? 0 : index * 0.15 + 0.2,
            ease: customEase,
          }}
          className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-background md:h-14 md:w-14"
        >
          <Icon className="h-5 w-5 md:h-6 md:w-6" />
        </motion.div>

        {/* Connecting Line */}
        {!isLast && (
          <div className="relative mt-4 h-full w-0.5 bg-foreground/10">
            <motion.div
              className="absolute inset-x-0 top-0 bg-primary"
              style={{
                height: useTransform(stepLineProgress, (v) => `${v * 100}%`),
              }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pt-1">
        <span className="font-mono text-sm text-primary/70">{step.number}</span>
        <h3 className="mt-1 font-serif text-xl font-medium tracking-tight text-foreground md:text-2xl">
          {step.title}
        </h3>
        <p className="mt-2 text-base leading-relaxed text-foreground/70 md:text-lg">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
