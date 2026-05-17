'use client';

import Link from 'next/link';
import { motion, Variants } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { easings } from '@/lib/motion';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const prefersReduced = useReducedMotion();
  const title = 'Boxerhof';

  const letterVariants: Variants = {
    initial: { y: 0 },
    hover: (i: number) => ({
      y: -2,
      transition: {
        duration: 0.2,
        delay: i * 0.02,
        ease: easings.out,
      },
    }),
  };

  return (
    <footer className="border-t border-border bg-background py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo Wordmark with Letter Hover Stagger */}
          <div>
            <Link
              href="/"
              className="inline-block group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-1 transition-all"
            >
              <motion.span
                initial="initial"
                whileHover={prefersReduced ? 'initial' : 'hover'}
                className="font-serif text-2xl font-medium tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 flex"
              >
                {title.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Hundepension Bad Oeynhausen
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <Link
              href="/impressum"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
            >
              Datenschutz
            </Link>
            <Link
              href="/agb"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
            >
              AGB
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground/60">
            &copy; {currentYear} Manuela Büscher
          </p>
        </div>
      </div>
    </footer>
  );
}
