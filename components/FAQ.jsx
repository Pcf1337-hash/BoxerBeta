function FAQ() {
  const items = [
    {
      q: "Welche Unterlagen brauche ich für die Anreise?",
      a: "Aktuellen Impfpass mit gültigen Impfungen (Tollwut, Staupe, Parvo, Hepatitis), Wurmkurnachweis und unsere ausgefüllte Aufnahmeerklärung. Schicken wir Ihnen vorab gerne zu."
    },
    {
      q: "Was bringe ich für meinen Hund mit?",
      a: "Sein gewohntes Futter (wir füttern Ihre Marke weiter), Lieblingsspielzeug, eine getragene Decke mit Ihrem Geruch und falls nötig Medikamente. Körbchen und Näpfe haben wir vor Ort."
    },
    {
      q: "Nehmt ihr auch andere Rassen als Boxer?",
      a: "Ja, selbstverständlich. Der Name kommt aus der Geschichte des Hofes, betreut werden Hunde aller Rassen und Größen — vom Chihuahua bis zum Bernhardiner."
    },
    {
      q: "Was passiert bei Krankheit oder im Notfall?",
      a: "Wir haben einen Tierarzt direkt im Ort und sind 24/7 erreichbar. Bei Bedarf bringen wir Ihren Hund persönlich zur Praxis — und informieren Sie sofort."
    },
    {
      q: "Wie sehen die Gruppen aus?",
      a: "Wir stellen Gruppen nach Verträglichkeit, Größe und Energielevel zusammen. Hunde, die lieber allein sind, bekommen Einzelzeit im überdachten Außenauslauf."
    },
    {
      q: "Kann ich vorab besichtigen?",
      a: "Unbedingt. Wir möchten, dass Sie wissen, wo Ihr Hund bleibt. Termin telefonisch oder per E-Mail vereinbaren — Mo bis Fr zwischen 12:00 und 16:30."
    },
  ];

  const [open, setOpen] = React.useState(0);

  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-head-l">
            <span className="eyebrow"><span className="num">08</span>· Häufige Fragen</span>
            <h2 className="serif">Bevor Sie <em>fragen</em>.</h2>
          </div>
          <p style={{ maxWidth: 360, fontSize: 16, color: "var(--ink-soft)" }}>
            Wenn etwas fehlt, einfach anrufen. Wir nehmen uns Zeit für Ihre Fragen.
          </p>
        </div>

        <div className="faq-grid">
          {items.map((it, i) => (
            <div key={i} className={`faq-item ${open === i ? "open" : ""} reveal`} style={{ transitionDelay: `${(i % 3) * 60}ms` }}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span>
                <span className="pl">+</span>
              </button>
              <div className="faq-a">{it.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.FAQ = FAQ;
