function Galerie() {
  // 22 photos organized in a varied masonry pattern (5 are showcased in Betten/Anfahrt/Hero)
  const tiles = [
    { src: "uploads/boxerfoto/Boxerhof-4.jpg",  cls: "s7 r2", label: "Fachwerkhof · Bad Oeynhausen" },
    { src: "uploads/boxerfoto/Boxerhof-10.jpg", cls: "s5 r2", label: "Außenausläufe mit Planschbecken" },

    { src: "uploads/boxerfoto/Boxerhof-3.jpg",  cls: "s4 r2", label: "Geranien an der Fachwerkfassade" },
    { src: "uploads/boxerfoto/Boxerhof-9.jpg",  cls: "s5 r2", label: "Hunde-Pool im Garten" },
    { src: "uploads/boxerfoto/Boxerhof-25.jpg", cls: "s3 r2", label: "„… ein Leben ohne Boxer …\"" },

    { src: "uploads/boxerfoto/Boxerhof-2.jpg",  cls: "s3", label: "Eingangsstufe mit Hundefigur" },
    { src: "uploads/boxerfoto/Boxerhof-7.jpg",  cls: "s6", label: "Sitzecke vorm Pensionsgebäude" },
    { src: "uploads/boxerfoto/Boxerhof-15.jpg", cls: "s3", label: "Einzelzimmer · grüne Wand" },

    { src: "uploads/boxerfoto/Boxerhof-22.jpg", cls: "s4", label: "Futterküche" },
    { src: "uploads/boxerfoto/Boxerhof-23.jpg", cls: "s3", label: "Spielzeugregal" },
    { src: "uploads/boxerfoto/Boxerhof-24.jpg", cls: "s5", label: "„Die Arbeit kann warten …\"" },

    { src: "uploads/boxerfoto/Boxerhof-13.jpg", cls: "s4 r2", label: "Flur mit Stofftieren" },
    { src: "uploads/boxerfoto/Boxerhof-21.jpg", cls: "s4 r2", label: "„… es lohnt sich nur nicht\" · Dörte" },
    { src: "uploads/boxerfoto/Boxerhof-20.jpg", cls: "s4 r2", label: "Flur · Whiteboard mit Tierarztterminen" },
  ];
  return (
    <section className="section" id="galerie">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-head-l">
            <span className="eyebrow"><span className="num">09</span>· Galerie</span>
            <h2 className="serif">Ein Blick auf den <em>Hof</em>.</h2>
          </div>
          <p style={{ maxWidth: 360, fontSize: 16, color: "var(--ink-soft)" }}>
            Vom Eingangsportal bis zur Futterküche — so sieht es hier aus. Vor-Ort-Besichtigung jederzeit möglich.
          </p>
        </div>

        <div className="gal-grid">
          {tiles.map((t, i) => (
            <div key={i} className={`gal-tile ${t.cls} reveal`} style={{ transitionDelay: `${(i % 4) * 60}ms` }}>
              <img src={t.src} alt={t.label} loading="lazy" />
              <span className="gal-tile-label">{String(i + 1).padStart(2, "0")} · {t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Galerie = Galerie;
