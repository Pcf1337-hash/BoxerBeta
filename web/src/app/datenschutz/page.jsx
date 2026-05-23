export const metadata = {
  title: "Datenschutzerklärung – Boxerhof Hundepension",
  description: "DSGVO-konforme Datenschutzerklärung des Boxerhof Hundehotels",
};

export default function Datenschutz() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#f7f0e3" }}>
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-5xl font-bold mb-12"
            style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#2a1a08" }}
          >
            Datenschutzerklärung
          </h1>

          <div
            className="prose prose-lg max-w-none space-y-8"
            style={{ color: "#2a1a08" }}
          >
            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                Datenschutzerklärung gemäß DSGVO
              </h2>
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie umfassend über die Verarbeitung Ihrer Daten auf dieser Website.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                1. Verantwortlicher
              </h2>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="space-y-2 mt-4">
                <p>
                  <strong>Manuela Büscher</strong><br />
                  Boxerhof – Hundehotel<br />
                  Wöhrener Str. 74<br />
                  32549 Bad Oeynhausen<br />
                  E-Mail: <a href="mailto:manuelabuescher@boxernothilfe.de" className="hover:underline" style={{ color: "#c4522a" }}>manuelabuescher@boxernothilfe.de</a><br />
                  Telefon: <a href="tel:01628971483" className="hover:underline" style={{ color: "#c4522a" }}>0162 – 897 14 83</a>
                </p>
              </div>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                2. Automatische Datenerfassung
              </h2>
              <p>
                Bei der Nutzung dieser Website werden automatisch folgende Daten erfasst:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>IP-Adresse des Zugriffs</li>
                <li>Browser-Typ und Browser-Version</li>
                <li>Betriebssystem des Geräts</li>
                <li>Referrer-URL (von wo Sie kommen)</li>
                <li>Besuchte Seiten und deren Zugriffsdauer</li>
                <li>Zeitstempel der Zugriffe</li>
              </ul>
              <p className="mt-4">
                Diese Daten werden für statistische Auswertungen und zur Verbesserung des Website-Angebots verwendet. Eine Speicherung in Verbindung mit persönlichen Daten findet nicht statt. Die Daten werden regelmäßig gelöscht.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                3. Cookies
              </h2>
              <p>
                Diese Website nutzt Cookies nur im notwendigen Umfang:
              </p>
              <div className="space-y-4 mt-4">
                <div>
                  <p>
                    <strong>Cookies für den Admin-Bereich:</strong>
                  </p>
                  <p>
                    Für die Verwaltung des Admin-Bereichs setzen wir Session-Cookies, um Sie angemeldet zu halten. Diese Cookies sind notwendig für die Funktionalität und werden nach Beendigung Ihrer Session gelöscht.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Abspaltung von Cookies:</strong>
                  </p>
                  <p>
                    Sie können Cookies in Ihren Browser-Einstellungen deaktivieren. Dies kann jedoch die Funktionalität der Website beeinträchtigen.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                4. Kontaktformular und Gästebuch
              </h2>
              <p>
                Wenn Sie über das Kontaktformular oder das Gästebuch mit uns kommunizieren, werden folgende Daten verarbeitet:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Ihr Name</li>
                <li>Name Ihres Hundes</li>
                <li>E-Mail-Adresse</li>
                <li>Nachrichtentext</li>
                <li>Optional: Hunderasse, Besuchsjahr, Bewertung</li>
              </ul>
              <p className="mt-4">
                <strong>Zweck:</strong> Diese Daten werden ausschließlich verwendet, um:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Ihre Anfrage zu beantworten</li>
                <li>Mit Ihnen Kontakt aufzunehmen</li>
                <li>Gästebuch-Einträge zu verwalten</li>
              </ul>
              <p className="mt-4">
                <strong>Speicherung:</strong> Gästebuch-Einträge werden mit Ihrer Zustimmung veröffentlicht. Sie können jederzeit die Löschung Ihrer Daten anfordern.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                5. Externe Services und Hosting
              </h2>
              <p>
                Diese Website wird gehostet und betrieben über folgende externe Services:
              </p>
              <div className="space-y-4 mt-4">
                <div>
                  <p>
                    <strong>Vercel Inc. (Hosting & CDN):</strong>
                  </p>
                  <p>
                    Die Website wird auf Servern von Vercel gehostet. Ihre IP-Adresse und technische Daten werden von Vercel verarbeitet. Vercel unterliegt den EU-Standard-Vertragsklauseln für die Datentransfer.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>GitHub (Bild-Hosting):</strong>
                  </p>
                  <p>
                    Bilder werden über GitHub gehostet. GitHub verarbeitet Zugriffsdaten gemäß ihrer Datenschutzrichtlinie.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Neon Database (Datenbank):</strong>
                  </p>
                  <p>
                    Nutzerdaten aus Kontaktformularen und Gästebuch werden in einer PostgreSQL-Datenbank gespeichert, die von Neon gehostet wird. Die Datenbank ist SSL-verschlüsselt.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                6. Ihre Datenschutzrechte
              </h2>
              <p>
                Sie haben folgende Rechte bezüglich Ihrer persönlichen Daten:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li><strong>Auskunftsrecht:</strong> Sie können jederzeit erfragen, welche Daten wir über Sie speichern</li>
                <li><strong>Berichtigungsrecht:</strong> Sie können unrichtige Daten korrigieren lassen</li>
                <li><strong>Löschungsrecht:</strong> Sie können die Löschung Ihrer Daten anfordern (Recht auf Vergessenwerden)</li>
                <li><strong>Einschränkungsrecht:</strong> Sie können die Einschränkung der Verarbeitung Ihrer Daten anfordern</li>
                <li><strong>Datenportabilität:</strong> Sie können Ihre Daten in strukturierter Form erhalten</li>
                <li><strong>Widerspruchsrecht:</strong> Sie können der Verarbeitung Ihrer Daten widersprechen</li>
              </ul>
              <p className="mt-4">
                Um diese Rechte auszuüben, kontaktieren Sie uns:
              </p>
              <p className="mt-2">
                E-Mail: <a href="mailto:manuelabuescher@boxernothilfe.de" className="hover:underline" style={{ color: "#c4522a" }}>manuelabuescher@boxernothilfe.de</a>
              </p>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                7. Sicherheit Ihrer Daten
              </h2>
              <p>
                Wir schützen Ihre Daten durch:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>SSL/TLS-Verschlüsselung aller Übertragungen</li>
                <li>Sichere Passwort-Hashing-Verfahren</li>
                <li>Regelmäßige Sicherheitsüberprüfungen</li>
                <li>Beschränkter Zugriff auf Datenbanken</li>
              </ul>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                8. Datenschutzbeauftragter
              </h2>
              <p>
                Wir haben keinen externen Datenschutzbeauftragten bestellt. Für Datenschutzfragen können Sie sich direkt an Manuela Büscher wenden.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                9. Änderungen dieser Datenschutzerklärung
              </h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung jederzeit zu ändern, um sie an aktuelle rechtliche oder technische Entwicklungen anzupassen. Änderungen werden auf dieser Seite veröffentlicht.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                10. Beschwerde bei der Aufsichtsbehörde
              </h2>
              <p>
                Sie haben das Recht, sich bei der zuständigen Datenschutzbehörde zu beschweren, falls Sie der Ansicht sind, dass Ihre Daten nicht rechtmäßig verarbeitet werden.
              </p>
            </section>

            <section className="pt-8 mt-8 border-t" style={{ borderColor: "#e8dece" }}>
              <p style={{ color: "rgba(42, 26, 8, 0.6)", fontSize: "0.875rem" }}>
                Letzte Aktualisierung: Mai 2026
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
