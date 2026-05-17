"use client";

import { motion, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";
import { useInViewOnce } from "@/lib/hooks";
import { Phone, Mail, MapPin } from "lucide-react";

const customEase = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const headerInView = useInViewOnce(headerRef, { margin: "-100px" });
  const formInView = useInViewOnce(formRef, { margin: "-50px" });

  const [formState, setFormState] = useState({
    name: "",
    hundename: "",
    email: "",
    nachricht: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formState);
  };

  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-primary/5">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.header
          ref={headerRef}
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: customEase }}
          className="mb-12 md:mb-16 lg:mb-20 text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-foreground">
            Lerne uns kennen.
          </h2>
          <p className="mt-4 text-base md:text-lg text-foreground/60 max-w-xl mx-auto">
            Ein Anruf, eine Nachricht — und wir sprechen über deinen Hund.
          </p>
        </motion.header>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: customEase }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              <a
                href="tel:+4957319999999"
                className="group flex items-start gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-background">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Telefon</p>
                  <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    +49 5731 99 999 99
                  </p>
                </div>
              </a>

              <a
                href="mailto:hallo@boxerhof.de"
                className="group flex items-start gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-background">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">E-Mail</p>
                  <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    hallo@boxerhof.de
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Adresse</p>
                  <p className="text-lg font-medium text-foreground">
                    Hofweg 12<br />
                    32547 Bad Oeynhausen
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="tel:+4957319999999"
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-medium text-background transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              Kostenloses Vorgespräch anfragen
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: customEase }}
            className="rounded-2xl bg-background p-6 md:p-8 border border-foreground/5"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
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
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    required
                    className="w-full rounded-lg border border-foreground/10 bg-muted/50 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
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
                    onChange={(e) =>
                      setFormState({ ...formState, hundename: e.target.value })
                    }
                    required
                    className="w-full rounded-lg border border-foreground/10 bg-muted/50 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
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
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  required
                  className="w-full rounded-lg border border-foreground/10 bg-muted/50 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
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
                  onChange={(e) =>
                    setFormState({ ...formState, nachricht: e.target.value })
                  }
                  rows={4}
                  className="w-full resize-none rounded-lg border border-foreground/10 bg-muted/50 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Erzähl uns von deinem Hund..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                className="w-full rounded-lg bg-foreground px-6 py-3.5 text-base font-medium text-background transition-colors hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
              >
                Nachricht senden
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
