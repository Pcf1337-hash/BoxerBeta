# Quick-Start Guide

## Lokale Entwicklung

```bash
cd web
npm install --legacy-peer-deps
npm run dev
```

Öffne dann [http://localhost:5173](http://localhost:5173)

## Admin-Bereich (Lokal)

- URL: `http://localhost:5173/admin`
- Passwort: `tyson2811`

## GitHub-Deployment

```bash
# 1. Repository initialisieren (einmalig)
git init
git add .
git commit -m "Initial commit"

# 2. Zu GitHub pushen
git remote add origin https://github.com/YOUR-USERNAME/boxerhof-hundepension.git
git push -u origin main
```

## Vercel-Deployment

1. Gehe auf [vercel.com](https://vercel.com)
2. "Import Project" → Wähle GitHub-Repository
3. Füge diese Environment Variables hinzu:
   - `ADMIN_PASSWORD`: `tyson2811`
   - `DATABASE_URL`: `postgresql://neondb_owner:npg_lQ0W5NracdyO@ep-broad-haze-ajv7hjl6.c-3.us-east-2.aws.neon.tech/neondb?sslmode=require`
   - `VITE_SUPABASE_URL`: `https://izmfkvmxbmostbqmwxjf.supabase.co`
   - `VITE_SUPABASE_ANON_KEY`: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6bWZrdm14Ym1vc3RicW13eGpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1MjQ4MjIsImV4cCI6MjA5NTEwMDgyMn0.AtZJeXfDNXNdbequM0cCjpHsiwoaxWqAS68I5ORc6Lg`
4. Deploy!

## Was ist wo?

| Feature | URL | Login nötig? |
|---------|-----|--------------|
| Startseite | `/` | Nein |
| Galerie | `/galerie` | Nein |
| Neuigkeiten | `/neuigkeiten` | Nein |
| Gästebuch | `/gaestebuch` | Nein (Lesend), Ja (Admin) |
| Admin-Panel | `/admin` | **Ja** |
| Impressum | `/impressum` | Nein |
| Datenschutz | `/datenschutz` | Nein |

## Datenbank-Credentials

```
Host: ep-broad-haze-ajv7hjl6.c-3.us-east-2.aws.neon.tech
User: neondb_owner
Password: npg_lQ0W5NracdyO
Database: neondb
SSL: Required
```

## News hinzufügen

1. Gehe zu `/admin`
2. Login mit `tyson2811`
3. Wähle "Neuigkeiten"-Tab
4. Klick "Neue Nachricht"
5. Fülle Formular aus und speichern

## Foto zu Galerie hinzufügen

1. Admin-Panel → "Galerien"-Tab
2. Wähle ein Album
3. Klick "Foto hinzufügen"
4. Gib Bild-URL ein und speichern

(Bilder müssen extern gehostet sein, z.B. auf GitHub oder Imgur)

## Gästebuch-Eintrag freigeben

1. Admin-Panel → "Gästebuch"-Tab
2. Suche ungenehmigten Eintrag
3. Klick "Genehmigen"
4. Eintrag erscheint sofort auf der Website

## Kontakt-Informationen aktualisieren

Bearbeite `/web/src/components/Contact.jsx`:
- Telefon: Zeile 101
- WhatsApp: Zeile 106
- Öffnungszeiten: Zeile 109

Dann `git push` und Vercel deployt automatisch!

## Troubleshooting

**Lokale Seite lädt nicht?**
```bash
# Cache clearen
rm -rf node_modules
npm install --legacy-peer-deps
npm run dev
```

**Admin-Login funktioniert nicht?**
- Passwort korrekt? `tyson2811`
- Umgebungsvariable gesetzt? `ADMIN_PASSWORD`

**Bilder erscheinen nicht?**
- Ist die URL öffentlich erreichbar?
- Nutze GitHub Raw URLs: `https://raw.githubusercontent.com/...`

---

**Viel Erfolg!** 🚀 Fragen? Kontakt: manuelabuescher@boxernothilfe.de
