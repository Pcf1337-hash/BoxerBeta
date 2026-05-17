"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { motion, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { useInViewOnce } from "@/lib/hooks";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Wie lange im Voraus muss ich buchen?",
    answer:
      "Wir empfehlen eine Buchung mindestens 2-4 Wochen im Voraus, besonders in der Ferienzeit. Kurzfristige Anfragen sind je nach Verfügbarkeit möglich — ruf einfach an.",
  },
  {
    question: "Welche Hunde nehmt ihr auf?",
    answer:
      "Wir nehmen alle Rassen und Größen auf, solange dein Hund sozialverträglich ist. Bei Unsicherheiten klären wir das im kostenlosen Vorgespräch und Schnuppertag.",
  },
  {
    question: "Was ist im Preis enthalten?",
    answer:
      "Unterkunft im eigenen Zimmer, tägliche Spaziergänge auf unserem 4.000 qm Gelände, Futter (oder du bringst eigenes mit), Spielzeit und ganz viel Zuwendung.",
  },
  {
    question: "Könnt ihr Medikamente geben?",
    answer:
      "Ja, wir können Medikamente nach Anweisung verabreichen. Bitte bringe die Medikamente mit genauer Dosierungsanleitung vom Tierarzt mit.",
  },
  {
    question: "Ist mein Hund versichert?",
    answer:
      "Wir haben eine Betriebshaftpflichtversicherung. Zusätzlich empfehlen wir dir, eine eigene Hundehaftpflicht abzuschließen, falls noch nicht vorhanden.",
  },
  {
    question: "Wie funktioniert eine Stornierung?",
    answer:
      "Bis 7 Tage vor Aufenthalt: kostenfrei. Bis 3 Tage vorher: 50% der Buchungssumme. Kurzfristiger: volle Buchungssumme. Bei Krankheit des Hundes finden wir eine Lösung.",
  },
];

const customEase = [0.22, 1, 0.36, 1] as const;

export function Faq() {
  const prefersReducedMotion = useReducedMotion();
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headerInView = useInViewOnce(headerRef, { margin: "-100px" });
  const contentInView = useInViewOnce(contentRef, { margin: "-50px" });

  return (
    <section className="relative py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.header
          ref={headerRef}
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: customEase }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground">
            Häufige Fragen
          </h2>
          <p className="mt-4 text-base md:text-lg text-foreground/60">
            Alles, was du wissen musst — und wenn nicht, ruf einfach an.
          </p>
        </motion.header>

        {/* Accordion */}
        <motion.div
          ref={contentRef}
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: customEase }}
        >
          <AccordionPrimitive.Root type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion ? 0 : index * 0.08,
                  ease: customEase,
                }}
              >
                <AccordionPrimitive.Item
                  value={`item-${index}`}
                  className="overflow-hidden rounded-xl border border-foreground/10 bg-background transition-colors data-[state=open]:bg-muted/50"
                >
                  <AccordionPrimitive.Header>
                    <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between px-5 py-4 text-left md:px-6 md:py-5">
                      <span className="font-medium text-foreground pr-4 text-sm md:text-base">
                        {faq.question}
                      </span>
                      <ChevronDown className="h-5 w-5 flex-shrink-0 text-foreground/50 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="px-5 pb-4 pt-0 md:px-6 md:pb-5">
                      <p className="text-sm md:text-base leading-relaxed text-foreground/70">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionPrimitive.Content>
                </AccordionPrimitive.Item>
              </motion.div>
            ))}
          </AccordionPrimitive.Root>
        </motion.div>
      </div>
    </section>
  );
}
