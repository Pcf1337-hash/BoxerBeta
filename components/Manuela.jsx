function Manuela() {
  return (
    <section className="section" id="manuela" style={{ background: "var(--bg-warm)" }}>
      <div className="wrap">
        <div className="manuela-grid">
          <div className="manuela-photo reveal">
            <img src="uploads/boxerfoto/Boxerhof-6.jpg" alt="Pensionsgebäude mit Sonnenmalerei" loading="lazy" />
            <span className="num">01</span>
            <span className="caption">Pensionsgebäude · mit Sonne an der Wand</span>
          </div>
          <div>
            <span className="eyebrow reveal"><span className="num">05</span>· Über uns</span>
            <h2 className="serif reveal" style={{ marginTop: 16, marginBottom: 36 }}>
              Geleitet von <em>Manuela Büscher</em>.
            </h2>
            <p className="manuela-quote reveal reveal-d2 serif">
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
