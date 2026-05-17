function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-big serif">
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
