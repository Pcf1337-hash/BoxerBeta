'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { ChevronDown } from 'lucide-react';
import { easings, durations } from '@/lib/motion';

const faqs = [
  {
    question: 'Wie lange im Voraus muss ich buchen?',
    answer:
      'Wir empfehlen eine Buchung mindestens 2-4 Wochen im Voraus, besonders in der Ferienzeit. Kurzfristige Anfragen sind je nach Verfügbarkeit möglich — ruf einfach an.',
  },
  {
    question: 'Welche Hunde nehmt ihr auf?',
    answer:
      'Wir nehmen alle Rassen und Größen auf, solange dein Hund sozialverträglich ist. Bei Unsicherheiten klären wir das im kostenlosen Vorgespräch und Schnuppertag.',
  },
  {
    question: 'Was ist im Preis enthalten?',
    answer:
      'Unterkunft im eigenen Zimmer, tägliche Spaziergänge auf unserem 4.000 qm Gelände, Futter (oder du bringst eigenes mit), Spielzeit und ganz viel Zuwendung.',
  },
  {
    question: 'Könnt ihr Medikamente geben?',
    answer:
      'Ja, wir können Medikamente nach Anweisung verabreichen. Bitte bringe die Medikamente mit genauer Dosierungsanleitung vom Tierarzt mit.',
  },
  {
    question: 'Ist mein Hund versichert?',
    answer:
      'Wir haben eine Betriebshaftpflichtversicherung. Zusätzlich empfehlen wir dir, eine eigene Hundehaftpflicht abzuschließen, falls noch nicht vorhanden.',
  },
  {
    question: 'Wie funktioniert eine Stornierung?',
    answer:
      'Bis 7 Tage vor Aufenthalt: kostenfrei. Bis 3 Tage vorher: 50% der Buchungssumme. Kurzfristiger: volle Buchungssumme. Bei Krankheit des Hundes finden wir eine Lösung.',
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const prefersReduced = useReducedMotion();

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal y={24} className="mb-12 md:mb-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground">
            Häufige Fragen
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Alles, was du wissen musst — und wenn nicht, ruf einfach an.
          </p>
        </ScrollReveal>

        {/* Accordion */}
        <ScrollReveal staggerChildren={0.06} className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-border transition-colors duration-300"
                style={{
                  backgroundColor: isOpen ? 'var(--color-muted)' : 'var(--color-card)',
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left md:px-6 md:py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-[-2px] cursor-pointer w-full"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-foreground pr-4 text-sm md:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={prefersReduced ? { opacity: 1, height: 'auto' } : { height: 0, opacity: 0 }}
                      animate={prefersReduced ? { opacity: 1, height: 'auto' } : { height: 'auto', opacity: 1 }}
                      exit={prefersReduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: durations.fast, ease: easings.out }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 pt-0 md:px-6 md:pb-5">
                        <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
