# todo.md — Boxerhof Animation Phase

> Eine Phase nach der anderen. Pro Phase: implementieren, testen, commit, hier abhaken, dann `lessons.md` ergänzen, dann nächste Phase.

---

## Phase 1 — Foundation Setup
- [ ] `npm install motion lenis gsap @gsap/react` und commit
- [ ] `lib/motion.ts` mit easings, durations, stagger anlegen
- [ ] `hooks/useReducedMotion.ts` (re-export + override für Dev)
- [ ] `components/providers/LenisProvider.tsx` mit ReactLenis Wrapper
- [ ] LenisProvider in `app/layout.tsx` einhängen
- [ ] `html { scroll-behavior: smooth }` aus globals.css entfernen
- [ ] `components/motion/ScrollReveal.tsx` Wrapper-Component
- [ ] `components/motion/SplitText.tsx` (word + char mode)
- [ ] Tailwind `@theme` Tokens in `globals.css` final prüfen
- [ ] `npm run build` grün
- [ ] Commit: `feat(motion): foundation setup with lenis + motion primitives`

## Phase 2 — Hero Refinement
- [ ] Hero-Headline via `<SplitText>` mit word-stagger
- [ ] Hero-Image `priority` + `fetchPriority="high"` + `placeholder="blur"`
- [ ] `useScroll` für Hero-Image Scale-Transform (1 → 0.92)
- [ ] Scroll-linked Hero-Text Opacity (1 → 0 von 30% bis 60%)
- [ ] Scroll-Indicator Bouncing Arrow mit `prefers-reduced-motion` Guard
- [ ] LCP < 1.5s lokal verifiziert (Lighthouse)
- [ ] Commit: `feat(hero): refined entry animation and scroll-linked transforms`

## Phase 3 — Manifest Sticky Scroll
- [ ] Outer `h-[200vh]`, inner sticky `h-screen` 
- [ ] Manifest-Text in Wörter splitten
- [ ] Pro Wort: eigene `useTransform` der `scrollYProgress`
- [ ] Opacity-Range pro Wort gemappt (0.15 → 1)
- [ ] Mobile-Test: max 1.5x Viewport scroll-distance
- [ ] reduced-motion Fallback: statischer Text
- [ ] Commit: `feat(manifest): scroll-linked word reveal sticky section`

## Phase 4 — Rooms (Cards)
- [ ] `<ScrollReveal staggerChildren>` um Card-Grid
- [ ] Card hover: `whileHover={{ y: -4 }}`
- [ ] Image hover: `whileHover={{ scale: 1.05 }}` mit `overflow-hidden` Parent
- [ ] reduced-motion deaktiviert hover-scale
- [ ] Focus-visible: 2px primary outline
- [ ] Grid-Responsive: 1/2/4 Spalten
- [ ] Commit: `feat(rooms): staggered reveal with hover micro-interactions`

## Phase 5 — Hofleben Horizontal Scroll (heikelste Phase)
- [ ] `npm install gsap @gsap/react` (falls noch nicht)
- [ ] `gsap.registerPlugin(ScrollTrigger)`
- [ ] Lenis ↔ ScrollTrigger Sync via `useLenis(ScrollTrigger.update)`
- [ ] Horizontal-Track mit `gsap.to(track, { x, scrollTrigger })`
- [ ] `pin: true, scrub: 1` config
- [ ] `invalidateOnRefresh: true` damit responsive bleibt
- [ ] Mobile: media-query Fallback auf vertikale Photo-Liste
- [ ] iOS Safari auf echtem Gerät testen
- [ ] Chrome DevTools Performance: 60fps während Pin
- [ ] reduced-motion: statisches Photo-Grid
- [ ] Commit: `feat(lifestyle): horizontal scroll pinning with gsap`

## Phase 6 — Manuela Bento + Process Timeline
- [ ] Bento-Grid mit `grid-template-areas`
- [ ] Pull-Quote mit `<SplitText>` (langes stagger 0.14s, duration 1.2s)
- [ ] Stats Count-Up `motion.span` mit `animate` und `whileInView`
- [ ] Round Count-Up Values auf Integer
- [ ] Process-Timeline SVG-Path
- [ ] `pathLength` mapped auf `scrollYProgress`
- [ ] Step-Icons fade-in entlang Path-Progress
- [ ] Commit: `feat(manuela-process): bento grid and animated timeline`

## Phase 7 — FAQ + Contact + Footer
- [ ] FAQ Accordion mit `<AnimatePresence>` + `height: auto`
- [ ] Form-Setup: zod + react-hook-form (oder native, je nach v0-Output)
- [ ] `<Magnetic>` Button-Wrapper für Submit-Button
- [ ] Contact-Submit: mailto-fallback ODER `/api/contact` Route
- [ ] Footer-Wordmark hover-letter-stagger (jeder Buchstabe y: -2)
- [ ] Commit: `feat(faq-contact-footer): final sections with form and polish`

## Phase 8 — Performance Audit
- [ ] Lighthouse Mobile run: Performance ≥ 90, A11y ≥ 95, Best Practices = 100
- [ ] `@next/bundle-analyzer` einbauen und prüfen
- [ ] Jede Section gzipped < 50kb
- [ ] `next/image` sizes-Attribute überall korrekt
- [ ] Dynamic-Import für Lifestyle (GSAP-heavy) below-fold
- [ ] Vercel Analytics: LCP/CLS/INP Werte aus production
- [ ] Cross-Browser-Test: Chrome, Safari Desktop, iOS Safari (echtes Gerät), Android Chrome
- [ ] Tab-Navigation komplett durchklickbar
- [ ] Commit: `perf: final audit pass and lazy-loading optimizations`

---

## 🔄 Globale Tasks (nicht phase-gebunden, am Ende prüfen)

- [ ] Alle TODO/FIXME im Code aufgelöst
- [ ] `lessons.md` enthält Erkenntnisse aus jeder Phase
- [ ] `README.md` updated mit Dev-Setup, Tech-Stack, Deploy-Befehl
- [ ] Vercel Production-Deploy grün, Preview-URL funktional
- [ ] Manuela das Ergebnis zeigen 😎

---

## 🚨 Notfall-Protokoll

Falls eine Phase blockiert:
1. **NICHT raten** — keine fabricated Package-Names oder erfundene APIs
2. Aktuellen State in `lessons.md` festhalten unter "Blocker"
3. Failing-Branch nicht mergen, separat halten: `wip/phase-X-blocker`
4. User-Report mit: was funktioniert, was nicht, vermutete Ursache, was als nächstes versucht wird
