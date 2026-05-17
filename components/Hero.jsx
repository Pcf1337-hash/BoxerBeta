function PawBg() {
  // Generate 14 paws at randomized lanes/speeds (deterministic via seed)
  const paws = React.useMemo(() => {
    const arr = [];
    for (let i = 0; i < 14; i++) {
      const left = (i * 7.3 + 3) % 95;
      const delay = -(i * 1.7) % 20;
      const dur = 18 + (i % 6) * 4;
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
            transform: `rotate(${p.rot}deg)`
          }}>
          {window.Icons.paw(p.size)}
        </span>
      ))}
    </div>
  );
}

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
            <h1 className="serif reveal in">
              Ein zweites <em>Zuhause</em><br/>auf Zeit.
            </h1>
            <p className="hero-lead reveal reveal-d2 in">
              Auf 4.000 qm familiärem Hof betreut Manuela Büscher Ihren Hund mit Ruhe, Zeit und Sachverstand — während Sie reisen, arbeiten oder einfach mal durchatmen.
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
          <div className="hero-photo reveal reveal-d4" aria-hidden="true">
            <img src="uploads/boxerfoto/Boxerhof-1.jpg" alt="Bemalte Eingangstür des Boxerhofs von 1838" loading="eager" />
            <span className="hero-photo-tag">Eingang · 1838 · Wöhrener Str. 74</span>
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
