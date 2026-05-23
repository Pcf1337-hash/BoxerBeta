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
      body: "Komplett eingezäuntes Gelände mit großen Gruppen­ausläufen und individuellen, überdachten Einzelausläufen mit Körbchen und Wetterhütte."
    },
    {
      n: "03",
      cls: "svc-3",
      icon: window.Icons.water,
      title: "Hunde-Pool",
      body: "Für heiße Sommer­tage und alle Wasserratten unter den Gästen."
    },
    {
      n: "04",
      cls: "svc-4",
      icon: window.Icons.stethoscope,
      title: "Versorgung bei Bedarf",
      body: "Medikamentengabe, tierärztliche Versorgung, individuelle Fütterung — auch bei Allergien oder Diät."
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
            <h2 className="serif">Pension mit Hand,<br/><em>Herz</em> und Hof.</h2>
          </div>
          <p style={{ maxWidth: 360, fontSize: 16, color: "var(--ink-soft)" }}>
            Kein Zwinger­betrieb, kein anonymes Hundehotel. Ein echter Hof mit echten Menschen, die Hunde mögen.
          </p>
        </div>

        <div className="services-grid">
          {items.map((it, i) => (
            <div key={i} className={`svc ${it.cls} reveal`} style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
              {it.cls === "svc-2" && (
                <div className="svc-2-bg" aria-hidden="true">
                  <img src="uploads/boxerfoto/Boxerhof-11.jpg" alt="" loading="lazy" />
                </div>
              )}
              <div className="svc-icon">{it.icon}</div>
              <div className="svc-num">{it.n} / 06</div>
              <div className="svc-body">
                <h3 style={{ marginBottom: 10 }}>{it.title}</h3>
                <p>{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Services = Services;
