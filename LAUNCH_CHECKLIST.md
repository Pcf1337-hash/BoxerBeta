# Launch Checklist – Boxerhof Website

## Pre-Launch Verification

- [x] Alle Kontaktdaten aktualisiert
- [x] Impressum-Seite erstellt
- [x] Datenschutzerklärung erstellt
- [x] Footer mit Spendenlinks erweitert
- [x] SEO-Meta-Tags hinzugefügt
- [x] Admin-Passwort gesetzt (tyson2811)
- [x] Environment-Variablen konfiguriert
- [x] TypeScript-Check bestanden
- [x] Abhängigkeiten installiert
- [x] Mobile-Responsiveness geprüft

## Deployment Checklist

### Vor dem Go-Live

- [ ] **GitHub-Repository erstellen**
  ```bash
  git init
  git add .
  git commit -m "Initial commit: Boxerhof Website"
  git remote add origin https://github.com/[USERNAME]/boxerhof-hundepension.git
  git push -u origin main
  ```

- [ ] **Vercel-Account erstellen** (falls nicht vorhanden)
  - Gehe zu https://vercel.com
  - Melde dich mit GitHub an

- [ ] **Projekt auf Vercel importieren**
  1. "New Project" auf Vercel Dashboard
  2. Wähle `boxerhof-hundepension` Repository
  3. Klicke "Import"

- [ ] **Environment Variables auf Vercel setzen**
  ```
  ADMIN_PASSWORD = tyson2811
  DATABASE_URL = postgresql://neondb_owner:npg_lQ0W5NracdyO@ep-broad-haze-ajv7hjl6.c-3.us-east-2.aws.neon.tech/neondb?sslmode=require
  VITE_SUPABASE_URL = https://izmfkvmxbmostbqmwxjf.supabase.co
  VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6bWZrdm14Ym1vc3RicW13eGpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1MjQ4MjIsImV4cCI6MjA5NTEwMDgyMn0.AtZJeXfDNXNdbequM0cCjpHsiwoaxWqAS68I5ORc6Lg
  ```

- [ ] **Deployment starten**
  - Vercel wird automatisch bauen und deployen
  - Warte auf "Deployment Successful" Nachricht

### Nach dem Deployment

- [ ] **Website testen**
  - Home-Seite lädt
  - Alle Links funktionieren
  - Bilder laden
  - Mobile-Version responsive
  - Footer-Links funktionieren

- [ ] **Admin-Panel testen**
  1. Öffne `/admin`
  2. Login mit `tyson2811`
  3. Testen: News-Tab, Gästebuch-Tab, Galerien-Tab

- [ ] **Rechtliche Seiten prüfen**
  - `/impressum` erreichbar
  - `/datenschutz` erreichbar
  - Alle Kontaktdaten korrekt

- [ ] **Gästebuch testen**
  1. Schreibe einen Test-Eintrag
  2. Genehmige ihn im Admin
  3. Erscheint auf der Website

- [ ] **Kontaktformular testen**
  1. Fülle das Formular auf Home-Seite aus
  2. Absenden
  3. Erfolgs-Nachricht anzeigen

### Post-Launch (Optional)

- [ ] **Domain verbinden**
  - Vercel Settings → Domains
  - Gib deine Domain ein (z.B. boxerhof.de)
  - Konfiguriere DNS-Records

- [ ] **SSL-Zertifikat prüfen**
  - Automatisch auf Vercel ✅
  - HTTPS-Redirect einschalten

- [ ] **Analyt ics einbinden** (Optional)
  - Google Analytics
  - Hotjar
  - Sentry für Error Tracking

- [ ] **Backup einrichten**
  - Regelmäßige Datenbank-Backups
  - GitHub als Quelle des Backups

## Admin-Passwort ändern (Empfohlen)

Nach dem Launch sollte das Standard-Passwort geändert werden:

1. Auf Vercel: Settings → Environment Variables
2. `ADMIN_PASSWORD` wert ändern
3. Auf den neuen Wert speichern
4. Vercel deployt automatisch neu

**Neue Passwörter-Beispiele:**
- Zahlen + Buchstaben + Sonderzeichen
- Mindestens 10 Zeichen
- Z.B.: `Manuela#2024Boxer!`

## Support-Kontakte

### Bei technischen Problemen:
- Dieser Guide: `DEPLOYMENT.md`
- Vercel Support: https://vercel.com/support
- React Router Docs: https://reactrouter.com

### Geschäftliche Fragen:
- Manuela Büscher: manuelabuescher@boxernothilfe.de
- Tel: 0162 – 897 14 83

## URLs Nach dem Launch

| Seite | URL |
|-------|-----|
| Website | https://boxerhof-hundepension.vercel.app |
| Admin | https://boxerhof-hundepension.vercel.app/admin |
| Galerie | https://boxerhof-hundepension.vercel.app/galerie |
| Gästebuch | https://boxerhof-hundepension.vercel.app/gaestebuch |
| Impressum | https://boxerhof-hundepension.vercel.app/impressum |
| Datenschutz | https://boxerhof-hundepension.vercel.app/datenschutz |

(Domain kann später geändert werden)

## Notfall-Prozedur

**Website ist down?**
1. Prüfe Vercel Dashboard für Deployment-Status
2. Prüfe Logs auf Fehler
3. Möglich-Ursachen:
   - Fehlerhafte Environment Variable
   - Datenbank offline
   - Code-Fehler

**Admin-Login funktioniert nicht?**
1. Prüfe ADMIN_PASSWORD in Vercel
2. Browser-Cache clearen (Ctrl+Shift+Delete)
3. Inkognito-Modus testen

**Fotos laden nicht?**
1. Prüfe Image-URLs in Datenbank
2. Stelle sicher, URLs sind öffentlich erreichbar
3. Teste URL im Browser direkt

## Wartungs-Tipps

- **Monatlich**: Datenbank-Backup erstellen
- **Jährlich**: SSL-Zertifikat überprüfen (auto auf Vercel)
- **Regelmäßig**: News aktualisieren
- **Nach Updates**: TypeScript-Check (`npm run typecheck`)

---

**Status**: READY FOR LAUNCH ✅

Folge dieser Checkliste, und die Website wird reibungslos starten!

**Viel Erfolg!** 🚀🐾
