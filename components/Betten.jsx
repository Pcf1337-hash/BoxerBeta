function Betten() {
  const beds = [
    { cls: "t1", src: "uploads/boxerfoto/Boxerhof-14.jpg", name: "Knutschkugel", sub: "„Mein Hund darf in meinem Bett schlafen …\"" },
    { cls: "t2", src: "uploads/boxerfoto/Boxerhof-17.jpg", name: "Doppelzimmer", sub: "Zwei Betten · grüne Wand" },
    { cls: "t3", src: "uploads/boxerfoto/Boxerhof-16.jpg", name: "Lila Zimmer", sub: "Einzelplatz · Herz-Bettzeug" },
    { cls: "t4", src: "uploads/boxerfoto/Boxerhof-15.jpg", name: "Einzelzimmer", sub: "Holzbett · grüne Wand" },
    { cls: "t5", src: "uploads/boxerfoto/Boxerhof-18.jpg", name: "Kuschelecke", sub: "Sofa & Herzteppich" },
  ];
  return (
    <section className="section betten-section">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-head-l">
            <span className="eyebrow"><span className="num">02</span>· Wo Ihr Hund schläft</span>
            <h2 className="serif">Echte Betten.<br/>Keine <em>Käfige</em>.</h2>
          </div>
        </div>

        <div className="betten-lead reveal">
          <div></div>
          <p>
            Jeder Gast bei uns hat einen eigenen Schlafplatz — mit Bett oder Körbchen, gefliestem Boden, Fenster, frischen Decken. Die Zimmer heißen <em>Knutschkugel</em>, <em>Schröder</em>, <em>Dörte</em>. Klingt albern — fühlt sich richtig an.
          </p>
        </div>

        <div className="betten-grid">
          {beds.map((b, i) => (
            <div key={i} className={`betten-tile ${b.cls} reveal`} style={{ transitionDelay: `${i * 70}ms` }}>
              <img src={b.src} alt={b.name} loading="lazy" />
              <span className="bt-sub">{b.sub}</span>
              <span className="bt-name">{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Betten = Betten;
