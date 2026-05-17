// ── Boxerhof main app ─────────────────────────────────────────────────

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#f4ede0", "#4a6b3f", "#1c1814"],
  "accent": "moss",
  "headlineSize": 1
}/*EDITMODE-END*/;

function useReveal() {
  React.useEffect(() => {
    // Reveal everything on mount with a tiny delay so transition-delay classes
    // (reveal-d2/d3/d4) stagger the entry. Scroll-gated reveal proved unreliable
    // in some iframe environments, and content visibility matters more than a
    // perfectly choreographed scroll animation.
    const t = setTimeout(() => {
      document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
    }, 50);
    return () => clearTimeout(t);
  }, []);
}

const ACCENTS = {
  moss: { color: "#5e8240", deep: "#3c5727", gold: "#e8b54a" },
  barn: { color: "#b04830", deep: "#7f2f1c", gold: "#e8b54a" },
  sun:  { color: "#d49a26", deep: "#9a6f10", gold: "#e8b54a" },
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useReveal();

  // apply accent to CSS vars
  React.useEffect(() => {
    const a = ACCENTS[t.accent] || ACCENTS.moss;
    const root = document.documentElement;
    root.style.setProperty("--moss", a.color);
    root.style.setProperty("--moss-deep", a.deep);
    root.style.setProperty("--gold", a.gold);
  }, [t.accent]);

  React.useEffect(() => {
    document.documentElement.style.setProperty("--headline-scale", t.headlineSize);
  }, [t.headlineSize]);

  return (
    <>
      <Nav />
      <Hero />
      <PhotoStrip />
      <Marquee />
      <Services />
      <Betten />
      <Tag />
      <Preise />
      <Manuela />
      <Stimmen />
      <Anfahrt />
      <FAQ />
      <Galerie />
      <Kontakt />
      <Footer />

      <a className="float-call" href="tel:+4957311560750">
        {window.Icons.phone} Anrufen
      </a>

      <TweaksPanel>
        <TweakSection label="Akzentfarbe" />
        <TweakRadio label="Stimmung" value={t.accent}
          options={["moss", "barn", "sun"]}
          onChange={(v) => setTweak("accent", v)} />
        <TweakSection label="Hinweis" />
        <div style={{ fontSize: 11, color: "rgba(41,38,27,.6)", lineHeight: 1.5 }}>
          Drei Akzentfarben vom Hof: <em>Moos</em> (Fensterläden), <em>Scheunen­rot</em> (Türen) und <em>Sonne</em> (Pensions­wand).
        </div>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
