function Anfahrt() {
  return (
    <section className="section" id="anfahrt">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-head-l">
            <span className="eyebrow"><span className="num">07</span>· Anfahrt & Lage</span>
            <h2 className="serif">Ruhig gelegen.<br/>Direkt am <em>Feld</em>.</h2>
          </div>
          <p style={{ maxWidth: 360, fontSize: 16, color: "var(--ink-soft)" }}>
            Zwischen Bad Oeynhausen und dem Wiehengebirge. Über die A30 in 5 Minuten erreichbar, vor der Tür beginnen die Spazierwege.
          </p>
        </div>

        <div className="anfahrt-grid">
          <div className="anfahrt-photo reveal">
            <img src="uploads/boxerfoto/Boxerhof-5.jpg" alt="Boxerhof Innenhof mit Feld" loading="lazy" />
            <div className="anfahrt-card">
              <h4>Mitten im Grünen</h4>
              <p>Eigene Felder direkt hinter dem Hof. Lange Spaziergänge ohne Verkehr — perfekt für aufgeregte Stadthunde.</p>
            </div>
          </div>

          <div className="anfahrt-info">
            <h3 className="serif">So <em>finden</em> Sie uns</h3>

            <div className="anfahrt-row">
              <div className="ico">{window.Icons.pin}</div>
              <div>
                <div className="lbl">Adresse</div>
                <div className="val">
                  Boxerhof<br/>
                  Wöhrener Str. 74<br/>
                  32549 Bad Oeynhausen
                </div>
              </div>
            </div>

            <div className="anfahrt-row">
              <div className="ico">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <div>
                <div className="lbl">Mit dem Auto</div>
                <div className="val">
                  A30 — Abfahrt Bad Oeynhausen-Nord, dann ca. 4 km Richtung Wöhren. Parkplätze direkt vor dem Hof.
                </div>
              </div>
            </div>

            <div className="anfahrt-row">
              <div className="ico">{window.Icons.clock}</div>
              <div>
                <div className="lbl">Übergabezeiten</div>
                <div className="val">
                  Mo – Fr · 12:00 – 16:30 Uhr<br/>
                  <span style={{ fontSize: 13, color: "var(--ink-muted)" }}>Andere Zeiten nach Absprache</span>
                </div>
              </div>
            </div>

            <div className="anfahrt-row">
              <div className="ico">{window.Icons.phone}</div>
              <div>
                <div className="lbl">Vor der Anreise</div>
                <div className="val">
                  Kurz anrufen unter <a href="tel:+4957311560750" style={{ color: "var(--moss)" }}>05731 – 156 07 50</a> — dann ist alles vorbereitet.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Anfahrt = Anfahrt;
