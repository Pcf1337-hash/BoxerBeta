function PhotoStrip() {
  const tiles = [
    { src: "uploads/boxerfoto/Boxerhof-4.jpg",  eyebrow: "Der Hof", caption: "Fachwerkhof mitten im Grünen." },
    { src: "uploads/boxerfoto/Boxerhof-8.jpg",  eyebrow: "Hunde-Pool", caption: "Mit Sonnenschirm. Versteht sich." },
    { src: "uploads/boxerfoto/Boxerhof-14.jpg", eyebrow: "Eigene Zimmer", caption: "Echte Betten — mit Namen an der Tür." },
  ];
  return (
    <section className="wrap">
      <div className="photostrip">
        {tiles.map((t, i) => (
          <div key={i} className="photostrip-tile reveal" style={{ transitionDelay: `${i * 80}ms` }}>
            <img src={t.src} alt={t.caption} loading="lazy" />
            <span className="ps-eyebrow">{t.eyebrow}</span>
            <div className="ps-caption">{t.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.PhotoStrip = PhotoStrip;
