function Preise() {
  const pakete = [
    { name: "Tages­betreuung", price: "15", period: "pro Tag", desc: "Betreuung von 8:00 – 18:00. Ideal, wenn Sie nur tagsüber Hilfe brauchen.", tag: null },
    { name: "Standard Pension", price: "25", period: "pro Tag, Vollpension", desc: "Übernachtung, Futter, Auslauf, Betreuung — alles drin.", tag: "EMPFOHLEN", featured: true },
    { name: "Premium", price: "35", period: "pro Tag", desc: "Erweiterte 1:1-Betreuung mit extra Zeit für ängstliche oder besonders aktive Hunde.", tag: null },
    { name: "Langzeit", price: "20", period: "pro Tag, ab 14 Tagen", desc: "Reduzierter Preis für längere Aufenthalte. Vollpension inklusive.", tag: null },
  ];
  return (
    <section className="section" id="preise">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-head-l">
            <span className="eyebrow"><span className="num">04</span>· Preise</span>
            <h2 className="serif">Ehrlich kalkuliert.<br/><em>Keine</em> versteckten Kosten.</h2>
          </div>
          <p style={{ maxWidth: 360, fontSize: 16, color: "var(--ink-soft)" }}>
            Alle Preise verstehen sich inklusive Futter, Betreuung und Grundausstattung.
          </p>
        </div>

        <div className="preise-grid">
          {pakete.map((p, i) => (
            <div key={i} className={`pr-card ${p.featured ? "featured" : ""} reveal`} style={{ transitionDelay: `${i * 60}ms` }}>
              {p.tag && <span className="pr-tag">★ {p.tag}</span>}
              <div className="pr-name">{p.name}</div>
              <div className="pr-price">
                <span className="pr-price-num">{p.price}</span>
                <span className="pr-price-curr">€</span>
              </div>
              <div className="pr-period">{p.period}</div>
              <p className="pr-desc">{p.desc}</p>
              <a href="#kontakt" className="pr-cta">
                Anfragen
                <span className="arr">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="preise-foot reveal">
          <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--ink)", textTransform: "uppercase" }}>Hinweis</span>
          <span>
            <strong>Stammkunden- und Mehr­hunde­rabatte</strong> auf Anfrage. Bitte für jeden Hund einen aktuellen Impfschutz mitbringen.
          </span>
        </div>
      </div>
    </section>
  );
}
window.Preise = Preise;
