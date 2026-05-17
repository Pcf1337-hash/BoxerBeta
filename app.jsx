// ── Boxerhof main app ─────────────────────────────────────────────

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "akzent": "barn",
  "headlineSize": 1,
  "pawTrail": true
}/*EDITMODE-END*/;

const ACCENT_PALETTES = {
  barn: { primary: "#ad3f29", deep: "#7e2a18", soft: "#e8a89a" },
  moss: { primary: "#4a6b3f", deep: "#2f4928", soft: "#a8c098" },
  sun:  { primary: "#c2841a", deep: "#8c5d0c", soft: "#f0c873" },
  sky:  { primary: "#5b7d99", deep: "#3a5269", soft: "#a4b9c8" },
};

// Paw trail cursor effect
function usePawTrail(enabled) {
  React.useEffect(() => {
    if (!enabled) return;
    let last = 0;
    let toggle = 0;
    const onMove = (e) => {
      const now = Date.now();
      if (now - last < 90) return;
      last = now;
      const paw = document.createElement("span");
      paw.className = "paw-trail";
      const rot = (Math.random() * 40 - 20) + (toggle ? 12 : -12);
      paw.style.setProperty("--t", `translate(-50%, -50%) rotate(${rot}deg)`);
      paw.style.left = e.clientX + "px";
      paw.style.top = e.clientY + "px";
      paw.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><ellipse cx="5" cy="9" rx="1.8" ry="2.4"/><ellipse cx="9" cy="5.5" rx="1.8" ry="2.4"/><ellipse cx="15" cy="5.5" rx="1.8" ry="2.4"/><ellipse cx="19" cy="9" rx="1.8" ry="2.4"/><path d="M12 11c-3 0-6 2.5-6 5.5 0 2 1.5 3.5 3.5 3.5 1 0 1.7-.4 2.5-.4s1.5.4 2.5.4c2 0 3.5-1.5 3.5-3.5 0-3-3-5.5-6-5.5z"/></svg>`;
      document.body.appendChild(paw);
      toggle = 1 - toggle;
      setTimeout(() => paw.remove(), 1500);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled]);
}

function useReveal() {
  React.useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "-50px 0px" });
    document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
    // safety: reveal all after 2s in case some are below viewport on small screens
    const t = setTimeout(() => {
      document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
    }, 2400);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useReveal();
  usePawTrail(t.pawTrail);

  React.useEffect(() => {
    const a = ACCENT_PALETTES[t.akzent] || ACCENT_PALETTES.barn;
    const root = document.documentElement;
    root.style.setProperty("--barn", a.primary);
    root.style.setProperty("--barn-deep", a.deep);
    root.style.setProperty("--barn-soft", a.soft);
  }, [t.akzent]);

  React.useEffect(() => {
    document.documentElement.style.setProperty("--headline-scale", t.headlineSize);
  }, [t.headlineSize]);

  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Intro />
      <Services />
      <Zimmer />
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

      <TweaksPanel title="Tweaks · Boxerhof">
        <TweakSection label="Akzentfarbe" />
        <TweakRadio
          label="Stimmung"
          value={t.akzent}
          options={[
            { value: "barn", label: "Scheune" },
            { value: "moss", label: "Moos" },
            { value: "sun",  label: "Sonne" },
            { value: "sky",  label: "Himmel" },
          ]}
          onChange={(v) => setTweak("akzent", v)}
        />
        <TweakSection label="Typografie" />
        <TweakSlider
          label="Headline-Größe"
          value={t.headlineSize}
          min={0.8} max={1.2} step={0.05}
          onChange={(v) => setTweak("headlineSize", v)}
        />
        <TweakSection label="Verspieltes" />
        <TweakToggle
          label="Pfoten-Spur am Cursor"
          value={t.pawTrail}
          onChange={(v) => setTweak("pawTrail", v)}
        />
        <div style={{ fontSize: 11, color: "rgba(41,38,27,.6)", lineHeight: 1.5, marginTop: 8 }}>
          Vier Stimmungen vom Hof: <em>Scheune</em> (Türen), <em>Moos</em> (Fensterläden), <em>Sonne</em> (Pensionswand) und <em>Himmel</em> (Sommerstimmung).
        </div>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
