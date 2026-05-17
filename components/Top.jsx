// ── Nav ───────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={"nav " + (scrolled ? "scrolled" : "")}>
      <div className="wrap nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">B</span>
          <span>Boxerhof</span>
        </a>
        <div className="nav-links">
          <a href="#angebot">Angebot</a>
          <a href="#zimmer">Zimmer</a>
          <a href="#tag">Ein Tag</a>
          <a href="#preise">Preise</a>
          <a href="#manuela">Hof</a>
          <a href="#galerie">Galerie</a>
        </div>
        <a href="#kontakt" className="nav-cta">
          Platz anfragen
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </nav>
  );
}
window.Nav = Nav;

// ── Falling paw background ────────────────────────────────────────
function PawBg() {
  const paws = React.useMemo(() => {
    const arr = [];
    for (let i = 0; i < 12; i++) {
      const left = (i * 8.3 + 3) % 95;
      const delay = -(i * 1.9) % 20;
      const dur = 22 + (i % 6) * 5;
      const size = 18 + (i % 4) * 8;
      const rot = (i * 37) % 60 - 30;
      arr.push({ left, delay, dur, size, rot, i });
    }
    return arr;
  }, []);
  return (
    <div className="paw-bg" aria-hidden="true">
      {paws.map(p => (
        <span key={p.i}
          className="paw"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
            "--r": `${p.rot}deg`,
            transform: `rotate(${p.rot}deg)`
          }}>
          {window.Icons.paw(p.size)}
        </span>
      ))}
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────
function Hero() {
  return (
    <header className="hero" id="top">
      <PawBg />
      <div className="wrap" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div className="hero-eyebrow-row reveal in">
          <span className="dot"></span>
          <span className="mono">Hundepension · Bad Oeynhausen · seit 2009</span>
        </div>
        <div className="hero-grid">
          <div>
            <h1 className="reveal in">
              Ein zweites<br/><em>Zuhause</em><br/>auf Zeit.
            </h1>
            <p className="hero-lead reveal reveal-d2 in">
              Auf <em>4.000 qm familiärem Hof</em> betreut Manuela Büscher Ihren Hund mit Ruhe, Zeit und Sachverstand — während Sie reisen, arbeiten oder einfach mal durchatmen.
            </p>
            <div className="hero-ctas reveal reveal-d3 in">
              <a href="#kontakt" className="btn btn-primary">
                Platz anfragen
                {window.Icons.arrow}
              </a>
              <a href="#tag" className="btn btn-ghost">
                Ein Tag bei uns
              </a>
            </div>
          </div>
          <div className="hero-photo reveal reveal-d4 in" aria-hidden="true">
            <span className="hero-photo-handwritten">unser Eingang</span>
            <img src="uploads/boxerfoto/Boxerhof-1.jpg" alt="Bemalte Eingangstür des Boxerhofs von 1838" loading="eager" />
            <span className="hero-photo-tag">Eingang · Anno 1838</span>
            <span className="hero-stamp s1">
              {window.Icons.paw(14)} 4.000 qm Auslauf
            </span>
            <span className="hero-stamp s2">
              ✦ Familiengeführt
            </span>
          </div>
        </div>

        <div className="hero-meta reveal reveal-d4 in">
          <div className="hero-meta-item">
            <div className="num">4.000<em>qm</em></div>
            <div className="lbl">eingezäuntes Gelände</div>
          </div>
          <div className="hero-meta-item">
            <div className="num">15<em>+</em></div>
            <div className="lbl">Jahre Erfahrung</div>
          </div>
          <div className="hero-meta-item">
            <div className="num">500<em>+</em></div>
            <div className="lbl">betreute Hunde</div>
          </div>
          <div className="hero-meta-item">
            <div className="num">1<em>:1</em></div>
            <div className="lbl">persönliche Betreuung</div>
          </div>
        </div>
      </div>
    </header>
  );
}
window.Hero = Hero;

// ── Marquee ───────────────────────────────────────────────────────
function Marquee() {
  const items = [
    "Hofeinfahrt seit 1838",
    "Liebevolle Betreuung",
    "Eigener Hunde-Pool",
    "Echte Betten — keine Käfige",
    "Auch für Senioren & Ängstliche",
    "Klimatisiert · beheizt",
    "Mitten im Grünen",
    "Bad Oeynhausen"
  ];
  const line = (
    <span>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          <span>{it}</span>
          <span className="marquee-dot serif">✦</span>
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {line}
        {line}
      </div>
    </div>
  );
}
window.Marquee = Marquee;

// ── Intro Letter ──────────────────────────────────────────────────
function Intro() {
  return (
    <section className="intro">
      <div className="wrap">
        <div className="intro-grid">
          <div className="intro-letter">
            <span className="eyebrow reveal in" style={{ marginBottom: 24 }}>
              <span className="num">00</span>· Hallo
            </span>
            <h2 className="reveal in" style={{ marginTop: 18 }}>
              Ein Hof,<br/>der nach <em>Hund</em><br/>aussieht und riecht.
            </h2>
            <span className="greet reveal reveal-d2 in" style={{ marginTop: 36 }}>Liebe Hundebesitzer,</span>
            <p className="reveal reveal-d2 in">
              wir sind keine Hotelkette und kein Tierheim — wir sind ein <em>echter Hof</em> mit Fachwerk von 1838, einer bemalten Eingangstür, Geranien an den Fenstern und einer Sonne, die wir selbst an die Wand gemalt haben.
            </p>
            <p className="reveal reveal-d3 in">
              Hunde, die zu uns kommen, bekommen ein eigenes Zimmer mit Namen, ein eigenes Bett, ihre eigene Geschwindigkeit. Wer scheu ist, darf scheu sein. Wer alt ist, darf alt sein. Wer Quatsch im Kopf hat, darf Quatsch machen.
            </p>
            <div className="signoff reveal reveal-d4 in">
              <span>Bis bald —</span>
            </div>
          </div>

          <div className="intro-photos">
            <div className="intro-photo p1 reveal in">
              <img src="uploads/boxerfoto/Boxerhof-4.jpg" alt="Fachwerkhof" />
              <span>der Hof selbst</span>
            </div>
            <div className="intro-photo p2 reveal reveal-d2 in">
              <img src="uploads/boxerfoto/Boxerhof-8.jpg" alt="Hunde-Pool" />
              <span>Pool für Sommertage</span>
            </div>
            <div className="intro-photo p3 reveal reveal-d3 in">
              <img src="uploads/boxerfoto/Boxerhof-25.jpg" alt="Ein Leben ohne Boxer" />
              <span>„ … ist möglich, aber sinnlos."</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Intro = Intro;
