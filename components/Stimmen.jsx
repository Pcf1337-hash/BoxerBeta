function Stimmen() {
  const items = [
    {
      text: "Unser Max kommt aus dem Boxerhof zurück und ist tagelang entspannter als vorher. Manuela hat den Bogen raus.",
      who: "Familie Müller",
      what: "Stammgäste mit Boxer Max",
      stars: 5,
      av: "M"
    },
    {
      text: "Endlich eine Pension, in der unsere ängstliche Hündin nicht zur Statistik wird. Sie bekommt Zeit, statt Programm.",
      who: "Anna S.",
      what: "mit Schäferhündin Luna",
      stars: 5,
      av: "A"
    },
    {
      text: "Echte Betten, eigene Räume, kein Zwingerlärm. Mein Senior hatte seinen besten Urlaub seit Jahren.",
      who: "Thomas W.",
      what: "mit Boxer-Senior Caesar (14 J.)",
      stars: 5,
      av: "T"
    },
  ];
  return (
    <section className="section stimmen-section">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-head-l">
            <span className="eyebrow"><span className="num">06</span>· Stimmen</span>
            <h2 className="serif">Was Halter <em>sagen</em>.</h2>
          </div>
          <p style={{ maxWidth: 360, fontSize: 16, color: "var(--ink-soft)" }}>
            Wir leben von Empfehlungen. Hier ein paar Stimmen — gerne geben wir Ihnen weitere Kontakte.
          </p>
        </div>

        <div className="stimmen-grid">
          {items.map((s, i) => (
            <div key={i} className="stimme reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="stimme-stars">{"★".repeat(s.stars)}</div>
              <div className="stimme-quote">{s.text}</div>
              <div className="stimme-foot">
                <div className="av">{s.av}</div>
                <div>
                  <div className="who">{s.who}</div>
                  <div className="what">{s.what}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Stimmen = Stimmen;
