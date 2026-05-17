// ── Anfahrt ───────────────────────────────────────────────────────
function Anfahrt() {
  return (
    <section className="section" id="anfahrt">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-head-l">
            <span className="eyebrow"><span className="num">07</span>· Anfahrt & Lage</span>
            <h2>Ruhig gelegen.<br/>Direkt am <em>Feld</em>.</h2>
          </div>
          <p>
            Zwischen Bad Oeynhausen und dem Wiehengebirge. Über die A30 in 5 Minuten erreichbar, vor der Tür beginnen die Spazierwege.
          </p>
        </div>

        <div className="anfahrt-grid">
          <div className="anfahrt-photo reveal">
            <img src="uploads/boxerfoto/Boxerhof-5.jpg" alt="Boxerhof Innenhof mit Feld" loading="lazy" />
            <span className="stamp-overlay">Wöhrener Str. 74</span>
            <div className="anfahrt-card">
              <h4>Mitten im Grünen</h4>
              <p>Eigene Felder direkt hinter dem Hof. Lange Spaziergänge ohne Verkehr — perfekt für aufgeregte Stadthunde.</p>
            </div>
          </div>

          <div className="anfahrt-info reveal reveal-d2">
            <h3>So <em>finden</em> Sie uns</h3>

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
              <div className="ico">{window.Icons.compass}</div>
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
                  Kurz anrufen unter <a href="tel:+4957311560750">05731 – 156 07 50</a> — dann ist alles vorbereitet.
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

// ── FAQ ───────────────────────────────────────────────────────────
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
    <section className="section" id="faq" style={{ background: "var(--paper-soft)" }}>
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-head-l">
            <span className="eyebrow"><span className="num">08</span>· Häufige Fragen</span>
            <h2>Bevor Sie<br/><em>fragen.</em></h2>
          </div>
          <p>
            Wenn etwas fehlt, einfach anrufen. Wir nehmen uns Zeit für Ihre Fragen.
          </p>
        </div>

        <div className="faq-grid">
          {items.map((it, i) => (
            <div key={i} className={"faq-item " + (open === i ? "open" : "") + " reveal"} style={{ transitionDelay: `${(i % 3) * 60}ms` }}>
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

// ── Galerie ───────────────────────────────────────────────────────
function Galerie() {
  const tiles = [
    { src: "uploads/boxerfoto/Boxerhof-4.jpg",  label: "Fachwerkhof · Bad Oeynhausen" },
    { src: "uploads/boxerfoto/Boxerhof-10.jpg", label: "Außenausläufe mit Planschbecken" },
    { src: "uploads/boxerfoto/Boxerhof-3.jpg",  label: "Geranien an der Fachwerkfassade" },
    { src: "uploads/boxerfoto/Boxerhof-9.jpg",  label: "Hunde-Pool im Garten" },
    { src: "uploads/boxerfoto/Boxerhof-25.jpg", label: '„… ein Leben ohne Boxer …"' },
    { src: "uploads/boxerfoto/Boxerhof-7.jpg",  label: "Sitzecke vorm Pensionsgebäude" },
    { src: "uploads/boxerfoto/Boxerhof-15.jpg", label: "Einzelzimmer · grüne Wand" },
    { src: "uploads/boxerfoto/Boxerhof-22.jpg", label: "Futter­küche" },
    { src: "uploads/boxerfoto/Boxerhof-23.jpg", label: "Spielzeug­regal" },
    { src: "uploads/boxerfoto/Boxerhof-24.jpg", label: '„Die Arbeit kann warten …"' },
    { src: "uploads/boxerfoto/Boxerhof-13.jpg", label: "Flur mit Stofftieren" },
    { src: "uploads/boxerfoto/Boxerhof-20.jpg", label: "Whiteboard · Tierarzttermine" },
    { src: "uploads/boxerfoto/Boxerhof-19.jpg", label: "Im Haus" },
    { src: "uploads/boxerfoto/Boxerhof-12.jpg", label: "Abendrunde am Zaun" },
  ];
  return (
    <section className="section galerie-section" id="galerie">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-head-l">
            <span className="eyebrow"><span className="num">09</span>· Galerie</span>
            <h2>Ein Blick auf den<br/><em>Hof.</em></h2>
          </div>
          <p>
            Vom Eingangsportal bis zur Futter­küche — so sieht es hier aus. Vor-Ort-Besichtigung jederzeit möglich.
          </p>
        </div>

        <div className="gal-grid">
          {tiles.map((t, i) => (
            <div key={i} className="gal-tile reveal" style={{ transitionDelay: `${(i % 4) * 60}ms` }}>
              <span className="gal-tile-pin"></span>
              <img src={t.src} alt={t.label} loading="lazy" />
              <span className="gal-tile-label">№ {String(i + 1).padStart(2, "0")} — {t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Galerie = Galerie;

// ── Kontakt ───────────────────────────────────────────────────────
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
    <section className="section kontakt-section" id="kontakt">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-head-l">
            <span className="eyebrow"><span className="num">10</span>· Kontakt & Anfrage</span>
            <h2>Hund hat <em>frei</em>?<br/>Schreiben Sie uns.</h2>
          </div>
          <p>
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
                <a className="val" href="tel:+4957311560750" style={{ display: "block" }}>05731 – 156 07 50</a>
                <div style={{ fontSize: 13, color: "var(--ink-muted)", marginTop: 2 }}>
                  Mobil: <a href="tel:+491628971483" style={{ color: "inherit" }}>0162 – 897 14 83</a>
                </div>
              </div>
            </div>

            <div className="contact-row">
              <div className="ico">{window.Icons.mail}</div>
              <div>
                <div className="lbl">E-Mail</div>
                <a className="val" href="mailto:info@boxerhof.de" style={{ display: "block" }}>info@boxerhof.de</a>
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

            <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px dashed var(--line)", fontSize: 13, color: "var(--ink-muted)" }}>
              <span className="mono" style={{ color: "var(--ink)" }}>Leitung</span><br/>
              <span style={{ fontFamily: "var(--serif)", fontSize: 24, color: "var(--ink)" }}>Manuela Büscher</span>
            </div>
          </div>

          <div className="form-card reveal reveal-d2">
            <h3>Platz <em>anfragen</em></h3>
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

// ── Footer ────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-big">
          Bis bald<br/>im <em>Boxerhof</em>.
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <h4>Boxerhof</h4>
            <p>Hundepension<br/>Wöhrener Str. 74<br/>32549 Bad Oeynhausen</p>
          </div>
          <div className="footer-col">
            <h4>Kontakt</h4>
            <a href="tel:+4957311560750">05731 – 156 07 50</a>
            <a href="tel:+491628971483">0162 – 897 14 83</a>
            <a href="mailto:info@boxerhof.de">info@boxerhof.de</a>
          </div>
          <div className="footer-col">
            <h4>Öffnungszeiten</h4>
            <p>Mo – Fr<br/>12:00 – 16:30 Uhr<br/>Besichtigung nach Termin</p>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <a href="#angebot">Angebot</a>
            <a href="#tag">Ein Tag</a>
            <a href="#preise">Preise</a>
            <a href="#manuela">Über uns</a>
            <a href="#kontakt">Kontakt</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Boxerhof · Manuela Büscher</span>
          <span>Bad Oeynhausen · NRW</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
