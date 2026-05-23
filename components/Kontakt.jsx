function Kontakt() {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "", email: "", phone: "",
    hund: "", rasse: "", anreise: "", abreise: "",
    paket: "", nachricht: ""
  });
  const setF = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section className="section" id="kontakt" style={{ background: "var(--bg-warm)" }}>
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-head-l">
            <span className="eyebrow"><span className="num">10</span>· Kontakt & Anfrage</span>
            <h2 className="serif">Hund hat <em>frei</em>?<br/>Schreiben Sie uns.</h2>
          </div>
          <p style={{ maxWidth: 360, fontSize: 16, color: "var(--ink-soft)" }}>
            Wir antworten in der Regel innerhalb eines Tages. Für kurzfristige Fragen einfach anrufen.
          </p>
        </div>

        <div className="kontakt-grid">
          <div className="contact-card reveal">
            <div className="contact-row">
              <div className="ico">{window.Icons.pin}</div>
              <div>
                <div className="lbl">Adresse</div>
                <div className="val">
                  <strong>Boxerhof</strong><br/>
                  Wöhrener Str. 74<br/>
                  32549 Bad Oeynhausen
                </div>
              </div>
            </div>

            <div className="contact-row">
              <div className="ico">{window.Icons.phone}</div>
              <div>
                <div className="lbl">Telefon</div>
                <a className="val" href="tel:+4957311560750">05731 – 156 07 50</a>
                <div style={{ fontSize: 13, color: "var(--ink-muted)", marginTop: 2 }}>
                  Mobil: <a href="tel:+491628971483" style={{ color: "inherit" }}>0162 – 897 14 83</a>
                </div>
              </div>
            </div>

            <div className="contact-row">
              <div className="ico">{window.Icons.mail}</div>
              <div>
                <div className="lbl">E-Mail</div>
                <a className="val" href="mailto:info@boxerhof.de">info@boxerhof.de</a>
              </div>
            </div>

            <div className="contact-row">
              <div className="ico">{window.Icons.clock}</div>
              <div>
                <div className="lbl">Geschäftszeiten</div>
                <div className="val">
                  Montag – Freitag<br/>
                  12:00 – 16:30 Uhr<br/>
                  <span style={{ fontSize: 13, color: "var(--ink-muted)" }}>Besichtigung nach Vereinbarung</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid var(--line)", fontSize: 13, color: "var(--ink-muted)" }}>
              <span className="mono" style={{ color: "var(--ink)" }}>Leitung</span><br/>
              <span style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--ink)" }}>Manuela Büscher</span>
            </div>
          </div>

          <div className="form-card reveal reveal-d2">
            <h3 className="serif">Platz <em>anfragen</em></h3>
            <p className="form-sub">
              Wir melden uns mit einer Bestätigung und allen weiteren Schritten.
            </p>

            <form onSubmit={submit}>
              <div className="form-row">
                <div className="field">
                  <label>Ihr Name</label>
                  <input required value={form.name} onChange={setF("name")} placeholder="Anna Mustermann"/>
                </div>
                <div className="field">
                  <label>Telefon</label>
                  <input value={form.phone} onChange={setF("phone")} placeholder="0157 …"/>
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label>E-Mail</label>
                  <input type="email" required value={form.email} onChange={setF("email")} placeholder="anna@beispiel.de"/>
                </div>
                <div className="field">
                  <label>Name des Hundes</label>
                  <input required value={form.hund} onChange={setF("hund")} placeholder="Bruno"/>
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label>Rasse / Mix</label>
                  <input value={form.rasse} onChange={setF("rasse")} placeholder="Boxer-Mix, 6 J."/>
                </div>
                <div className="field">
                  <label>Paket</label>
                  <select value={form.paket} onChange={setF("paket")}>
                    <option value="">Bitte wählen</option>
                    <option value="tag">Tagesbetreuung · 15 €</option>
                    <option value="std">Standard · 25 €</option>
                    <option value="prm">Premium · 35 €</option>
                    <option value="lng">Langzeit · 20 €</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label>Anreise</label>
                  <input type="date" value={form.anreise} onChange={setF("anreise")}/>
                </div>
                <div className="field">
                  <label>Abreise</label>
                  <input type="date" value={form.abreise} onChange={setF("abreise")}/>
                </div>
              </div>

              <div className="field">
                <label>Etwas, das wir wissen sollten</label>
                <textarea value={form.nachricht} onChange={setF("nachricht")} placeholder="Medikamente, Futter, Ängste, Lieblingsspielzeug …"></textarea>
              </div>

              <div className="submit-row">
                <span className="hint">Mit dem Absenden willigen Sie ein, dass wir Ihre Daten zur Bearbeitung der Anfrage speichern dürfen.</span>
                <button type="submit" className="btn btn-primary">
                  Anfrage senden
                  {window.Icons.arrow}
                </button>
              </div>

              {sent && (
                <div className="success-msg">
                  {window.Icons.check}
                  <span>Danke! Wir melden uns innerhalb eines Tages bei Ihnen.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Kontakt = Kontakt;
