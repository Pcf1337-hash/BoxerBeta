// ── Preise ────────────────────────────────────────────────────────
function Preise() {
  const pakete = [
    { name: "Tages­betreuung", price: "15", period: "pro Tag · 8 – 18 h", desc: "Betreuung tagsüber. Ideal, wenn Sie nur Stunden brauchen.", tag: null },
    { name: "Standard Pension", price: "25", period: "pro Tag · Vollpension", desc: "Übernachtung, Futter, Auslauf, Betreuung — alles drin.", tag: "EMPFOHLEN", featured: true },
    { name: "Premium", price: "35", period: "pro Tag · 1:1", desc: "Erweiterte Einzelbetreuung mit extra Zeit für ängstliche oder besonders aktive Hunde.", tag: null },
    { name: "Langzeit", price: "20", period: "pro Tag · ab 14 Tagen", desc: "Reduzierter Preis für längere Aufenthalte. Vollpension inklusive.", tag: null },
  ];
  return (
    <section className="section" id="preise">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-head-l">
            <span className="eyebrow"><span className="num">04</span>· Preise</span>
            <h2>Ehrlich kalkuliert.<br/><em>Keine</em> versteckten Kosten.</h2>
          </div>
          <p>
            Alle Preise verstehen sich inklusive Futter, Betreuung und Grundausstattung.
          </p>
        </div>

        <div className="preise-grid">
          {pakete.map((p, i) => (
            <div key={i} className={"pr-card " + (p.featured ? "featured" : "") + " reveal"} style={{ transitionDelay: `${i * 60}ms` }}>
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
          <span className="mono" style={{ color: "var(--ink)" }}>Hinweis</span>
          <span>
            <strong>Stammkunden- und Mehr­hunde­rabatte</strong> auf Anfrage. Bitte für jeden Hund einen aktuellen Impfschutz mitbringen.
          </span>
        </div>
      </div>
    </section>
  );
}
window.Preise = Preise;

// ── Manuela ───────────────────────────────────────────────────────
function Manuela() {
  return (
    <section className="section manuela-section" id="manuela">
      <div className="wrap">
        <div className="manuela-grid">
          <div className="manuela-photo reveal">
            <img src="uploads/boxerfoto/Boxerhof-6.jpg" alt="Pensionsgebäude mit Sonnenmalerei" loading="lazy" />
            <span className="num">05</span>
            <span className="caption">die Sonne haben wir selbst gemalt</span>
          </div>
          <div>
            <span className="eyebrow reveal"><span className="num">05</span>· Über uns</span>
            <h2 className="reveal" style={{ marginTop: 16, marginBottom: 40, fontSize: "clamp(40px, 5.4vw, 72px)", lineHeight: 1 }}>
              Geleitet von<br/><em>Manuela Büscher</em>.
            </h2>
            <p className="manuela-quote reveal reveal-d2">
              Wenn ein Hund nach Hause kommt, soll es ihm besser gehen — nicht schlechter. Das geht nur mit <em>Zeit</em>, Aufmerksamkeit und einem Hof, der nach Hund <em>aussieht und riecht</em>.
            </p>
            <p className="manuela-body reveal reveal-d3">
              Seit über 15 Jahren leite ich den Boxerhof in Bad Oeynhausen. Der Hof stammt aus dem Jahr 1838 — die bemalte Eingangstür ist Original. Bei uns gibt es keine Massenabfertigung. Jeder Gast bekommt ein eigenes Zimmer mit Bett, mit Namen an der Tür: <em>Knutschkugel</em>, <em>Schröder</em>, <em>Dörte</em>.
            </p>
            <p className="manuela-body reveal reveal-d3">
              Besonders am Herzen liegen mir die Senior­hunde und die etwas Komplizierteren — die, bei denen andere Pensionen schon abwinken. Hier bekommen sie ihre eigene Geschwindigkeit und so viel Zeit, wie sie brauchen.
            </p>
            <div className="manuela-sig reveal reveal-d4">
              {window.Icons.signature}
              <span>Manuela</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Manuela = Manuela;

// ── Stimmen (Testimonials) ────────────────────────────────────────
function Stimmen() {
  const items = [
    {
      text: "Unser Max kommt aus dem Boxerhof zurück und ist tagelang entspannter als vorher. Manuela hat den Bogen raus.",
      who: "Familie Müller",
      what: "Stammgäste mit Boxer Max",
      stars: 5,
      av: "M",
      stamp: "Stammgast"
    },
    {
      text: "Endlich eine Pension, in der unsere ängstliche Hündin nicht zur Statistik wird. Sie bekommt Zeit, statt Programm.",
      who: "Anna S.",
      what: "mit Schäferhündin Luna",
      stars: 5,
      av: "A",
      stamp: "★ verifiziert"
    },
    {
      text: "Echte Betten, eigene Räume, kein Zwingerlärm. Mein Senior hatte seinen besten Urlaub seit Jahren.",
      who: "Thomas W.",
      what: "mit Boxer-Senior Caesar · 14 J.",
      stars: 5,
      av: "T",
      stamp: "Senior"
    },
  ];
  return (
    <section className="section stimmen-section">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-head-l">
            <span className="eyebrow"><span className="num">06</span>· Stimmen</span>
            <h2>Was Halter<br/><em>sagen.</em></h2>
          </div>
          <p>
            Wir leben von Empfehlungen. Hier ein paar Stimmen — gerne geben wir Ihnen weitere Kontakte.
          </p>
        </div>

        <div className="stimmen-grid">
          {items.map((s, i) => (
            <div key={i} className="stimme reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="stimme-stamp">{s.stamp}</span>
              <div className="stimme-stars">{"★".repeat(s.stars)}</div>
              <div className="stimme-quote">„{s.text}"</div>
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
