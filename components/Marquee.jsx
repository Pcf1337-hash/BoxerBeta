function Marquee() {
  const items = [
    "Hofeinfahrt seit 1838",
    "Liebevolle Betreuung",
    "Eigener Hunde-Pool",
    "Echte Betten — keine Käfige",
    "Auch für Senioren & Ängstliche",
    "Klimatisiert · beheizt",
    "Mitten im Grünen",
    "Bad Oeynhausen"
  ];
  const line = (
    <span>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          <span>{it}</span>
          <span className="marquee-dot serif">✦</span>
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {line}
        {line}
      </div>
    </div>
  );
}
window.Marquee = Marquee;
