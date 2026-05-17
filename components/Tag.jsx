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
            <span className="eyebrow"><span className="num" style={{color: "var(--paper)"}}>03</span>· Ein Tag im Boxerhof</span>
            <h2 className="serif">Struktur, die <em>Sicherheit</em> gibt.</h2>
          </div>
          <p style={{ maxWidth: 360, fontSize: 16 }}>
            Hunde lieben Verlässlichkeit. Unser Tagesablauf gibt klare Anker — bleibt aber flexibel für jeden einzelnen Gast.
          </p>
        </div>

        <div className="tag-grid">
          <div className="tag-times">
            {moments.map((mm, i) => (
              <button
                key={i}
                className={`tag-time ${i === active ? "active" : ""}`}
                onClick={() => setActive(i)}>
                <span className="t">{mm.t}</span>
                <span>{mm.title}</span>
                <span className="arrow">→</span>
              </button>
            ))}
          </div>

          <div className="tag-detail">
            <div className="tag-detail-card" key={active}>
              <div className="tag-detail-photo">
                <img src={m.img} alt={m.title} loading="lazy" />
              </div>
              <span className="eyebrow" style={{ color: "var(--gold)", marginBottom: 16 }}>{m.t} Uhr</span>
              <h3>{m.title.split(" ").map((w, i, arr) => i === arr.length - 1 ? <em key={i}>{w}</em> : <span key={i}>{w} </span>)}</h3>
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
