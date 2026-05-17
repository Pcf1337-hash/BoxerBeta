// ── Services ──────────────────────────────────────────────────────
function Services() {
  const items = [
    {
      n: "01",
      cls: "svc-1",
      icon: window.Icons.heart,
      title: "Liebevolle Betreuung",
      body: "Jeder Hund bekommt bei uns die Zeit, Aufmerksamkeit und Ruhe, die er braucht. Wir lernen jeden Gast persönlich kennen — Vorlieben, Macken, Lieblings­spielzeug inklusive."
    },
    {
      n: "02",
      cls: "svc-2",
      icon: window.Icons.trees,
      title: "4.000 qm Auslauf",
      body: "Komplett eingezäuntes Gelände mit großen Gruppen­ausläufen und individuellen, überdachten Einzelausläufen mit Körbchen und Wetterhütte — direkt am Feld."
    },
    {
      n: "03",
      cls: "svc-3",
      icon: window.Icons.water,
      title: "Hunde-Pool",
      body: "Für heiße Sommer­tage und alle Wasserratten unter den Gästen. Sonnenschirm inklusive."
    },
    {
      n: "04",
      cls: "svc-4",
      icon: window.Icons.stethoscope,
      title: "Versorgung bei Bedarf",
      body: "Medikamentengabe, tierärztliche Versorgung, individuelle Fütterung — auch bei Allergien oder Diät. Tierarzt im Ort."
    },
    {
      n: "05",
      cls: "svc-5",
      icon: window.Icons.sun,
      title: "Klimatisiert & beheizt",
      body: "Im Sommer kühl, im Winter warm. Innenräume vollständig klimatisiert bzw. beheizt — egal welche Jahreszeit."
    },
    {
      n: "06",
      cls: "svc-6",
      icon: window.Icons.walk,
      title: "Auch für Oldies & Sensibelchen",
      body: "Senior-Hunde, Ängstliche und Hunde mit Eigenheiten sind ausdrücklich willkommen. Wir nehmen uns die Zeit, die nötig ist."
    },
  ];
  return (
    <section className="section" id="angebot">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-head-l">
            <span className="eyebrow"><span className="num">01</span>· Was wir bieten</span>
            <h2>Pension mit Hand,<br/><em>Herz</em> und Hof.</h2>
          </div>
          <p>
            Kein Zwinger­betrieb, kein anonymes Hundehotel. Ein echter Hof mit echten Menschen, die Hunde mögen.
          </p>
        </div>

        <div className="services-grid">
          {items.map((it, i) => (
            <div key={i} className={"svc " + it.cls + " reveal"} style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
              {it.cls === "svc-2" && (
                <div className="svc-2-bg" aria-hidden="true">
                  <img src="uploads/boxerfoto/Boxerhof-5.jpg" alt="" loading="lazy" />
                </div>
              )}
              <div className="svc-num">{it.n} / 06</div>
              <div className="svc-icon">{it.icon}</div>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Services = Services;

// ── Zimmer (Betten) ───────────────────────────────────────────────
function Zimmer() {
  const beds = [
    { cls: "t1", src: "uploads/boxerfoto/Boxerhof-14.jpg", key: "Zimmer 01", name: "Knutschkugel", sub: '„Mein Hund darf in meinem Bett schlafen …"' },
    { cls: "t2", src: "uploads/boxerfoto/Boxerhof-17.jpg", key: "Zimmer 02", name: "Doppel­zimmer", sub: "Zwei Betten, grüne Wand" },
    { cls: "t3", src: "uploads/boxerfoto/Boxerhof-16.jpg", key: "Zimmer 03", name: "Lila", sub: "Einzelplatz · Herz­bettzeug" },
    { cls: "t4", src: "uploads/boxerfoto/Boxerhof-15.jpg", key: "Zimmer 04", name: "Holzbett", sub: "Einzel · grüne Wand" },
    { cls: "t5", src: "uploads/boxerfoto/Boxerhof-21.jpg", key: "Suite", name: "Dörte", sub: "Kuschelecke · Herz­teppich" },
  ];
  return (
    <section className="section betten-section" id="zimmer">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-head-l">
            <span className="eyebrow"><span className="num">02</span>· Wo Ihr Hund schläft</span>
            <h2>Echte Betten.<br/>Keine <em>Käfige</em>.</h2>
          </div>
          <p>
            Jeder Gast bei uns hat seinen eigenen Schlafplatz — mit Namen an der Tür.
          </p>
        </div>

        <div className="betten-lead reveal">
          <div>
            <span className="hand" style={{ fontSize: 32, color: "var(--moss-deep)" }}>
              Knutschkugel, Schröder, Dörte …
            </span>
          </div>
          <p>
            Jeder Gast bei uns hat einen eigenen Schlafplatz — mit Bett oder Körbchen, gefliestem Boden, Fenster, frischen Decken. Die Zimmer haben Namen statt Nummern. Klingt albern — <em>fühlt sich richtig an.</em>
          </p>
        </div>

        <div className="betten-grid">
          {beds.map((b, i) => (
            <div key={i} className={"betten-tile " + b.cls + " reveal"} style={{ transitionDelay: `${i * 70}ms` }}>
              <img src={b.src} alt={b.name} loading="lazy" />
              <span className="bt-keytag">{b.key}</span>
              <span className="bt-sub">{b.sub}</span>
              <span className="bt-name">{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Zimmer = Zimmer;

// ── Tag (Day in the life) ─────────────────────────────────────────
function Tag() {
  const moments = [
    { t: "07:00", title: "Guten Morgen", clock: "07", img: "uploads/boxerfoto/Boxerhof-2.jpg",
      body: "Ausschlafen erlaubt. Wer früh wach ist, geht mit Manuela die erste Runde übers Gelände. Frühstück gibt's individuell — Ihr Futter, Ihre Marke." },
    { t: "09:30", title: "Erste Auslaufzeit", clock: "09", img: "uploads/boxerfoto/Boxerhof-11.jpg",
      body: "Die Gruppen werden sorgfältig zusammengestellt. Wer lieber alleine läuft, bekommt seinen überdachten Einzelauslauf mit Wetterhütte." },
    { t: "12:00", title: "Mittagsruhe", clock: "12", img: "uploads/boxerfoto/Boxerhof-18.jpg",
      body: "Nach dem Vormittag ziehen sich die Hunde zurück. Jeder hat sein eigenes Zimmer mit Bett — kein Zwingerlärm, kein Stress." },
    { t: "14:30", title: "Pool oder Wiese", clock: "14", img: "uploads/boxerfoto/Boxerhof-8.jpg",
      body: "An warmen Tagen steht der Hunde-Pool offen. Im Winter wird in den beheizten Räumen gespielt und gekuschelt." },
    { t: "17:00", title: "Abendrunde", clock: "17", img: "uploads/boxerfoto/Boxerhof-12.jpg",
      body: "Letzte Auslaufzeit mit ruhigerer Energie. Schnuppern, Zaungespräche, ein bisschen Quatsch machen. Danach Abendessen." },
    { t: "21:00", title: "Gute Nacht", clock: "21", img: "uploads/boxerfoto/Boxerhof-3.jpg",
      body: "Die Hunde gehen in ihre Schlafplätze. Manuela schaut nochmal nach allen. Das Hoflicht bleibt an — niemand schläft hier alleine." },
  ];
  const [active, setActive] = React.useState(0);
  const m = moments[active];

  return (
    <section className="section tag-section" id="tag">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-head-l">
            <span className="eyebrow"><span className="num">03</span>· Ein Tag im Boxerhof</span>
            <h2>Struktur, die<br/><em>Sicherheit</em> gibt.</h2>
          </div>
          <p>
            Hunde lieben Verlässlichkeit. Unser Tagesablauf gibt klare Anker — bleibt aber flexibel für jeden einzelnen Gast.
          </p>
        </div>

        <div className="tag-grid">
          <div className="tag-times reveal">
            {moments.map((mm, i) => (
              <button
                key={i}
                className={"tag-time " + (i === active ? "active" : "")}
                onClick={() => setActive(i)}>
                <span className="t">{mm.t}</span>
                <span>{mm.title}</span>
                <span className="arrow">→</span>
              </button>
            ))}
          </div>

          <div className="tag-detail reveal reveal-d2">
            <div className="tag-detail-card" key={active}>
              <div className="tag-detail-photo">
                <img src={m.img} alt={m.title} loading="lazy" />
              </div>
              <span className="eyebrow" style={{ marginBottom: 14 }}>
                <span className="num">{m.t.replace(":", "")}</span>· {m.t} Uhr
              </span>
              <h3>
                {m.title.split(" ").map((w, i, arr) => i === arr.length - 1 ? <em key={i}>{w}</em> : <span key={i}>{w} </span>)}
              </h3>
              <p className="lead">{m.body}</p>
              <div className="clock serif">{m.clock}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Tag = Tag;
