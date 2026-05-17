'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { Magnetic } from '@/components/motion/Magnetic';
import { Phone, Mail, MapPin, Loader2, CheckCircle2 } from 'lucide-react';
import { easings } from '@/lib/motion';

export function Contact() {
  const prefersReduced = useReducedMotion();
  const [formState, setFormState] = useState({
    name: '',
    hundename: '',
    email: '',
    nachricht: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API request or construct mailto fallback
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormState({ name: '', hundename: '', email: '', nachricht: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-primary/5">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal y={24} className="mb-12 md:mb-16 lg:mb-20 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-foreground">
            Lerne uns kennen.
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Ein Anruf, eine Nachricht — und wir sprechen über deinen Hund.
          </p>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Info */}
          <ScrollReveal y={32} delay={0.1} className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <a
                href="tel:+4957319999999"
                className="group flex items-start gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-2 transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-background flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefon</p>
                  <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    +49 5731 99 999 99
                  </p>
                </div>
              </a>

              <a
                href="mailto:hallo@boxerhof.de"
                className="group flex items-start gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-2 transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-background flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-Mail</p>
                  <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    hallo@boxerhof.de
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Adresse</p>
                  <p className="text-lg font-medium text-foreground leading-relaxed">
                    Hofweg 12<br />
                    32547 Bad Oeynhausen
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button Wrapped in Magnetic */}
            <div>
              <Magnetic range={50}>
                <a
                  href="tel:+4957319999999"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-medium text-background transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background shadow-md hover:shadow-lg"
                >
                  Kostenloses Vorgespräch anfragen
                </a>
              </Magnetic>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal
            y={32}
            delay={0.2}
            className="rounded-2xl bg-card p-6 md:p-8 border border-border shadow-sm"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <CheckCircle2 className="h-16 w-16 text-primary mb-4" />
                  <h3 className="font-serif text-2xl font-medium text-foreground mb-2">
                    Nachricht gesendet!
                  </h3>
                  <p className="text-muted-foreground max-w-sm">
                    Vielen Dank für deine Nachricht. Wir werden uns so schnell wie möglich bei dir melden!
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm text-primary font-medium hover:underline cursor-pointer"
                  >
                    Eine weitere Nachricht senden
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  exit={{ opacity: 0 }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Dein Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        required
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="Max Mustermann"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="hundename"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Name deines Hundes
                      </label>
                      <input
                        type="text"
                        id="hundename"
                        name="hundename"
                        value={formState.hundename}
                        onChange={(e) => setFormState({ ...formState, hundename: e.target.value })}
                        required
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="Bello"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      E-Mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="max@beispiel.de"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="nachricht"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Nachricht
                    </label>
                    <textarea
                      id="nachricht"
                      name="nachricht"
                      value={formState.nachricht}
                      onChange={(e) => setFormState({ ...formState, nachricht: e.target.value })}
                      rows={4}
                      className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Erzähl uns von deinem Hund..."
                    />
                  </div>

                  <div className="flex justify-end pt-2">
                    <Magnetic strength={0.25} range={50}>
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="inline-flex items-center justify-center rounded-lg bg-foreground px-8 py-3.5 text-base font-medium text-background transition-colors hover:bg-foreground/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 cursor-pointer shadow-md w-full sm:w-auto"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Wird gesendet...
                          </>
                        ) : (
                          'Nachricht senden'
                        )}
                      </button>
                    </Magnetic>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
