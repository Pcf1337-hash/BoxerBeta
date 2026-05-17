# CLAUDE.md — Boxerhof Animation Phase

> Dieses Dokument ist die Direktive für Claude Code zur Verfeinerung der v0-generierten Boxerhof-Site.
> **Sprache der Kommunikation**: Deutsch. **Code & Commit-Messages**: Englisch.
> **Arbeitsmodus**: Autonom, ein Phase nach der anderen. Nach jeder Phase: `git commit`, `todo.md` updaten, `lessons.md` ergänzen.

---

## 🎯 Mission

Verwandle die v0-Baseline in eine **Award-quality Site** auf dem Niveau von Linear, Vercel, Aesop. Fokus: butter-smooth Scroll-Erlebnis, sorgfältige Mikro-Interaktionen, Performance.

**Nicht-Ziele**: Backend, CMS, i18n, Tests (separater Sprint).

---

## 🧱 Tech Stack (locked)

| Layer | Technologie | Version |
|-------|-------------|---------|
| Framework | Next.js (App Router) | 15+ |
| React | React | 19+ |
| Styling | Tailwind CSS | v4 |
| Components | shadcn/ui | latest |
| Animations | **motion** (ex framer-motion) | ^11 |
| Smooth Scroll | **lenis** | ^1.1 |
| Scroll-Pinning | **@gsap/react** + GSAP ScrollTrigger | ^3.12 |
| 3D (optional, Phase 5) | @react-three/fiber + drei | latest |
| Icons | lucide-react | latest |
| Fonts | next/font (Fraunces + Inter) | — |
| Deploy | Vercel | — |

**Package install:**
```bash
npm install motion lenis gsap @gsap/react
# Optional Phase 5:
npm install three @react-three/fiber @react-three/drei
```

---

## 📐 Architektur-Regeln

### Component-Struktur
```
app/
  layout.tsx               # Fonts, metadata, <LenisProvider>
  page.tsx                 # Composition
  globals.css              # Tailwind @theme tokens
components/
  sections/                # Eine Datei pro Section
    Hero.tsx
    Manifest.tsx
    Rooms.tsx
    Lifestyle.tsx
    Manuela.tsx
    Process.tsx
    Faq.tsx
    Contact.tsx
    Footer.tsx
  motion/                  # Wiederverwendbare Animation-Primitives
    SplitText.tsx          # Word/Char-Split Reveal
    ScrollReveal.tsx       # whileInView Wrapper
    Magnetic.tsx           # Magnetic-Cursor Button
    Marquee.tsx
  providers/
    LenisProvider.tsx      # Lenis context + RAF loop
  ui/                      # shadcn unchanged
lib/
  motion.ts                # Shared easings, durations, variants
  utils.ts
hooks/
  useReducedMotion.ts      # Re-export von motion + override
  useLenis.ts
  useScrollProgress.ts
```

### Hard Rules
1. **Niemals `Color(0xFF...)` oder Hex direkt im JSX** — immer Tailwind-Token `bg-primary`, `text-foreground` etc.
2. **`'use client'` nur dort wo nötig** — Server Components als Default, Sections die motion brauchen sind Client.
3. **Alle Animationen respektieren `prefers-reduced-motion`** — siehe `useReducedMotion` Pattern unten.
4. **Keine Inline-Styles für animierbare Properties** — alles via motion `style={{ x, y, scale }}` oder Tailwind.
5. **Keine `any` in TypeScript**. Wenn ein motion-Wert: `MotionValue<number>`.
6. **Keine `useEffect` für Animationen** — motion's `useScroll`, `useTransform`, `useMotionValue` nutzen.
7. **Bilder**: immer `next/image` mit explizitem `width`/`height` und `sizes`.
8. **Keine Layout-Shifts**: Aspect-Ratios reservieren, kein late-loading Font ohne `font-display: swap`.

### Easing & Duration Library (`lib/motion.ts`)
```typescript
export const easings = {
  out: [0.22, 1, 0.36, 1] as const,        // Out-Expo, default
  inOut: [0.83, 0, 0.17, 1] as const,      // Pin-pong transitions
  spring: { type: "spring", damping: 30, stiffness: 220 } as const,
} as const;

export const durations = {
  fast: 0.3,
  base: 0.6,
  slow: 1.0,
  hero: 1.4,
} as const;

export const stagger = {
  tight: 0.04,
  default: 0.08,
  loose: 0.14,
} as const;
```

---

## 📋 Phasen-Plan

Jede Phase ist atomar und committable. Nach jeder Phase: ADB-Verification entfällt (Web), aber: **Lighthouse + manueller Scroll-Through im Browser** als "Definition of Done".

### Phase 1 — Foundation Setup
**Tasks:**
- [ ] `LenisProvider` in `app/layout.tsx` einhängen (siehe Snippet unten)
- [ ] `lib/motion.ts` mit Easings/Durations anlegen
- [ ] `useReducedMotion` Hook erstellen mit Override-Möglichkeit für Tests
- [ ] `components/motion/ScrollReveal.tsx` als generischer whileInView Wrapper
- [ ] `components/motion/SplitText.tsx` für word- und char-level Splits
- [ ] Tailwind `@theme` in `globals.css` final checken — alle OKLCH-Tokens vorhanden

**DoD:**
- Lenis läuft (scrollend smooth, kein Jank)
- `prefers-reduced-motion: reduce` deaktiviert alle Lenis-Easings + Motion-Animationen

### Phase 2 — Hero Refinement
**Tasks:**
- [ ] Hero-Headline mit `<SplitText>` (word-stagger 80ms, easing `easings.out`, duration `durations.hero`)
- [ ] Scroll-linked Hero-Image Scale: `useScroll({ target, offset: ["start start", "end start"] })` → `useTransform([0,1], [1, 0.92])`
- [ ] Scroll-linked Hero-Text Opacity: 1 → 0 zwischen 30% und 60% scroll
- [ ] Scroll-Indicator: SVG-Arrow mit subtilem `y: [0, 6, 0]` Loop, **respektiert reduced-motion**
- [ ] Preload Hero-Image (`priority`, `fetchPriority="high"`)

**DoD:**
- LCP < 1.5s lokal
- Headline-Animation startet nach Mount, nicht delayed
- Scroll smooth, kein Stottern

### Phase 3 — Manifest Sticky Scroll
**Tasks:**
- [ ] Section als `h-[200vh]` outer, `sticky top-0 h-screen flex items-center` inner
- [ ] Manifest-Text mit char-level split, jedes Wort mappt auf eigene `useTransform` der `scrollYProgress`
- [ ] Opacity-Range pro Wort: `[i / total, (i + 1) / total] → [0.15, 1]`
- [ ] Test auf Mobile: scrollt es smooth oder wird zu lang?

**DoD:**
- Auf Mobile maximal 1.5x Viewport-Höhe scroll, sonst zu ermüdend
- Text bleibt auch bei reduced-motion lesbar (statische Variante: alles auf opacity 1)

### Phase 4 — Rooms + Hover + Stagger
**Tasks:**
- [ ] Room-Cards via `<ScrollReveal staggerChildren={stagger.default}>`
- [ ] Hover-Animation: `whileHover={{ y: -4 }}` Card, `whileHover={{ scale: 1.05 }}` Image (image im `overflow-hidden` Wrapper)
- [ ] `useReducedMotion` deaktiviert hover-scale auf Image
- [ ] Cards focus-visible: 2px primary outline

**DoD:**
- Tab-Navigation funktioniert, fokus-Ring sichtbar
- Grid responsive (1/2/4 cols)

### Phase 5 — Hofleben Horizontal Scroll
**Diese Phase ist die heikelste — hier kommt GSAP ScrollTrigger ins Spiel, weil motion's `useScroll` für komplexes Pinning weniger ergonomisch ist.**

**Tasks:**
- [ ] GSAP + ScrollTrigger initialisieren in `components/sections/Lifestyle.tsx` via `useGSAP` Hook
- [ ] Outer `h-[400vh]`, inner Track mit `display: flex` und allen Photos
- [ ] ScrollTrigger: `pin: true, scrub: 1, end: () => "+=" + (track.offsetWidth - innerWidth)`
- [ ] x-Translation des Tracks animieren mit GSAP `xPercent` oder `x: -(track.offsetWidth - innerWidth)`
- [ ] Lenis + ScrollTrigger müssen synchronisiert werden — siehe Snippet "Lenis + GSAP Wiring" unten
- [ ] Auf Mobile: Horizontal-Scroll deaktivieren, stattdessen vertikale Photo-Liste mit `whileInView`
- [ ] `prefers-reduced-motion`: Fallback auf statisches Grid

**DoD:**
- Kein Jank beim Pinning (60fps measurable in DevTools Performance Tab)
- Auf iOS Safari getestet (häufigste Bug-Quelle bei Pin-Scroll)
- Mobile-Fallback funktioniert

### Phase 6 — Manuela Bento + Process Timeline
**Tasks:**
- [ ] Bento-Grid mit `grid-template-areas` (Tailwind v4 unterstützt das nativ jetzt)
- [ ] Pull-Quote: `<SplitText mode="word">` mit langem stagger (0.14s) und langem duration (1.2s) — feierlicher Effekt
- [ ] Stats: Count-Up Animation mit `motion.span` und `animate` Prop, läuft einmal `whileInView`
- [ ] Process-Timeline: SVG-Path mit `pathLength` von 0 → 1 gemappt auf `scrollYProgress` der Section
- [ ] Steps fade-in mit Stagger entlang des Path-Progress

**DoD:**
- Count-Up rounded auf integer
- SVG-Linie zeichnet sich smooth, nicht ruckartig

### Phase 7 — FAQ + Contact + Footer + Polish
**Tasks:**
- [ ] FAQ Accordion: custom expand-Animation mit motion `<AnimatePresence>` und `height: 'auto'` (siehe Pattern unten)
- [ ] Contact-Form: Magnetic-Button mit `<Magnetic>` Komponente
- [ ] Form-Validierung: Zod + react-hook-form (oder native, je nach v0-Output)
- [ ] Footer: simple, Wordmark "Boxerhof" mit hover-letter-stagger (jeder Buchstabe steigt 2px)

**DoD:**
- Form submit funktioniert (mailto-fallback oder API-Route)
- Alle Sections haben einen klaren Fokus-Pfad

### Phase 8 — Performance Audit
**Tasks:**
- [ ] Lighthouse Mobile + Desktop, jede Metrik ≥ 90 außer SEO (separater Sprint)
- [ ] `next/image` `sizes` Attribute überall korrekt
- [ ] Bundle-Analyse: `@next/bundle-analyzer` — keine Section > 50kb gzipped
- [ ] Lazy-Load Motion-Komponenten unter dem Fold via `dynamic(() => import(...), { ssr: false })`
- [ ] GSAP nur dort importieren wo gebraucht (Lifestyle.tsx)
- [ ] Web-Vitals in production deployment messen (Vercel Analytics)

**DoD:**
- LCP < 2.0s, CLS = 0, INP < 200ms (alle Vercel-Analytics Werte)

---

## 🔧 Wichtige Code-Snippets

### LenisProvider (`components/providers/LenisProvider.tsx`)
```typescript
'use client';

import { ReactLenis } from 'lenis/react';
import { useReducedMotion } from 'motion/react';
import { type ReactNode } from 'react';

export function LenisProvider({ children }: { children: ReactNode }) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
```

### Lenis + GSAP Wiring (für Phase 5)
```typescript
'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from 'lenis/react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function LifestyleSection() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Sync Lenis with ScrollTrigger
  useLenis(ScrollTrigger.update);

  useGSAP(() => {
    if (!trackRef.current || !containerRef.current) return;

    const track = trackRef.current;
    const distance = track.scrollWidth - window.innerWidth;

    gsap.to(track, {
      x: -distance,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => `+=${distance}`,
        invalidateOnRefresh: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="overflow-hidden">
      <div ref={trackRef} className="flex h-screen items-center gap-8 pl-[10vw]">
        {/* photos */}
      </div>
    </section>
  );
}
```

### SplitText Komponente (`components/motion/SplitText.tsx`)
```typescript
'use client';

import { motion, useReducedMotion } from 'motion/react';
import { easings, durations, stagger } from '@/lib/motion';

interface SplitTextProps {
  text: string;
  mode?: 'word' | 'char';
  className?: string;
  delay?: number;
}

export function SplitText({ text, mode = 'word', className, delay = 0 }: SplitTextProps) {
  const prefersReduced = useReducedMotion();
  const parts = mode === 'word' ? text.split(' ') : text.split('');

  if (prefersReduced) return <span className={className}>{text}</span>;

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-15%' }}
      transition={{ staggerChildren: stagger.default, delayChildren: delay }}
      aria-label={text}
    >
      {parts.map((part, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: durations.base, ease: easings.out },
            },
          }}
        >
          {part}
          {mode === 'word' && i < parts.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </motion.span>
  );
}
```

### Accordion Height Animation Pattern
```typescript
<AnimatePresence initial={false}>
  {open && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: durations.fast, ease: easings.out }}
      className="overflow-hidden"
    >
      {content}
    </motion.div>
  )}
</AnimatePresence>
```

---

## 🐛 Bekannte Pitfalls (aus Erfahrung)

1. **Lenis + Native Smooth-Scroll Konflikt** — `html { scroll-behavior: smooth }` aus globals.css entfernen, sonst doppelte Easings.
2. **ScrollTrigger refresh bei dynamischem Content** — nach Bild-Load `ScrollTrigger.refresh()` aufrufen.
3. **iOS Safari Pinning** — Translate3d auf gepinnte Elemente nicht nötig mehr, aber `transform: translateZ(0)` auf Track-Parent hilft bei Jank.
4. **`next/font` + Tailwind v4** — Font-Variable muss in `:root` der globals.css gemappt sein, sonst greift `font-display` nicht.
5. **motion v11 Imports** — `import { motion } from 'motion/react'` (nicht mehr `framer-motion`).
6. **Server Components mit motion** — motion ist client-only, jede Section die animiert braucht `'use client'`.
7. **`useScroll` mit dynamischer Höhe** — `offset` Array verwenden, nie `target` weglassen, sonst window-scoped.

---

## ✅ Definition of Done (gesamtes Projekt)

- [ ] Alle 8 Phasen abgeschlossen, jede einzeln committet
- [ ] Lighthouse Mobile: Performance ≥ 90, Accessibility ≥ 95, Best Practices = 100
- [ ] Manuelle Tests auf: Chrome Desktop, Safari Desktop, iOS Safari (echtes Gerät!), Android Chrome
- [ ] `prefers-reduced-motion: reduce` testet: keine Bewegung außer essentieller UI-Feedback
- [ ] Tab-Navigation durch ganze Seite ohne Fokus-Verlust
- [ ] `lessons.md` enthält alle gelernten Pitfalls dieses Sprints
- [ ] `todo.md` ist abgehakt
- [ ] Production-Deploy auf Vercel grün

---

## 🔁 Workflow

Pro Phase:
1. Phase aus `todo.md` lesen
2. Implementieren — atomare Commits mit `feat(scope): ...` Convention
3. `npm run build` muss grün sein
4. Browser-Check (dev): scroll-through, mobile-viewport in DevTools
5. `lessons.md` updaten mit was geklappt hat und was nicht
6. Phase in `todo.md` abhaken
7. Push, nächste Phase

**Bei Blocker**: Stoppen, in `lessons.md` dokumentieren, dem User berichten. Nicht raten.
