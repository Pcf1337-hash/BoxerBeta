function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">B</span>
          <span>Boxerhof</span>
        </a>
        <div className="nav-links">
          <a href="#angebot">Angebot</a>
          <a href="#tag">Ein Tag</a>
          <a href="#preise">Preise</a>
          <a href="#manuela">Hof</a>
          <a href="#anfahrt">Anfahrt</a>
          <a href="#galerie">Galerie</a>
        </div>
        <a href="#kontakt" className="nav-cta">
          Anfrage senden
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </nav>
  );
}
window.Nav = Nav;
