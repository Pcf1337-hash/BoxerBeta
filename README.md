# Boxerhof – Hundepension Website

Eine moderne, responsive Website für die exklusive Hundepension Boxerhof in Bad Oeynhausen.

## Features

- **Responsive Design**: Optimiert für Mobile, Tablet und Desktop
- **Bildergalerie**: Mit 4 Alben und 18 Fotos zum Hofleben
- **Nachrichtenbereich**: Aktuelle News vom Boxerhof
- **Gästebuch**: Bewertungen und Erfahrungsberichte von Gästen
- **Admin-Panel**: Verwaltung von News, Gästebuch und Galerie
- **DSGVO-konform**: Vollständige Datenschutzerklärung und Impressum
- **SEO-optimiert**: Meta-Tags und strukturierte Daten

## Tech Stack

- **Frontend**: React 18, Tailwind CSS, Motion für Animationen
- **Backend**: Node.js, React Router
- **Datenbank**: PostgreSQL (Neon)
- **Hosting**: Vercel
- **Bilder**: GitHub CDN

## Installation

1. Klone das Repository:
```bash
git clone https://github.com/yourusername/boxerhof-hundepension.git
cd boxerhof-hundepension/web
```

2. Installiere die Abhängigkeiten:
```bash
npm install --legacy-peer-deps
```

3. Erstelle eine `.env`-Datei mit folgenden Variablen:
```
VITE_SUPABASE_URL=https://izmfkvmxbmostbqmwxjf.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6bWZrdm14Ym1vc3RicW13eGpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1MjQ4MjIsImV4cCI6MjA5NTEwMDgyMn0.AtZJeXfDNXNdbequM0cCjpHsiwoaxWqAS68I5ORc6Lg
DATABASE_URL=postgresql://neondb_owner:npg_lQ0W5NracdyO@ep-broad-haze-ajv7hjl6.c-3.us-east-2.aws.neon.tech/neondb?sslmode=require
ADMIN_PASSWORD=tyson2811
```

4. Starte den Entwicklungsserver:
```bash
npm run dev
```

## Struktur

```
web/
├── src/
│   ├── app/              # Seiten und Layouts
│   │   ├── admin/       # Admin-Panel
│   │   ├── galerie/     # Galerie-Seite
│   │   ├── neuigkeiten/ # News-Seite
│   │   ├── gaestebuch/  # Gästebuch-Seite
│   │   ├── impressum/   # Impressum
│   │   └── datenschutz/ # Datenschutzerklärung
│   ├── components/       # React-Komponenten
│   ├── data/            # Statische Daten
│   └── utils/           # Hilfsfunktionen
├── public/              # Statische Assets
└── package.json
```

## Admin-Bereich

Die Admin-Seite ist unter `/admin` erreichbar.

**Login-Daten:**
- URL: `/admin`
- Passwort: `tyson2811`

### Admin-Funktionen

1. **Dashboard**: Übersicht über Statistiken
2. **Neuigkeiten**: Erstellen, Bearbeiten und Löschen von News-Beiträgen
3. **Gästebuch**: Verwalten und Freigeben von Gästebuch-Einträgen
4. **Galerie**: Alben und Fotos verwalten

## Kontaktdaten

**Boxerhof – Hundehotel**
- Adresse: Wöhrener Str. 74, 32549 Bad Oeynhausen, Deutschland
- Telefon: 05731 – 156 07 50
- Mobil: 0162 – 897 14 83
- E-Mail: manuelabuescher@boxernothilfe.de
- Öffnungszeiten: Mo–Fr · 12:00–16:30 Uhr

## Deployment auf Vercel

1. Push zu GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Verbinde Vercel mit deinem GitHub-Repository und konfiguriere die Environment Variables:
   - `ADMIN_PASSWORD`
   - `DATABASE_URL`
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

3. Deploye automatisch oder manuell über Vercel Dashboard

## Datenbank

Die Website verwendet eine PostgreSQL-Datenbank (Neon) mit folgenden Tabellen:

- `news_posts`: Nachrichteneinträge
- `guestbook_entries`: Gästebuch-Einträge
- `albums`: Fotogalerien
- `photos`: Fotos in Alben

## Lizenz

© 2026 Boxerhof – Alle Rechte vorbehalten.

## Support

Für Fragen oder Probleme kontaktiere:
- Manuela Büscher: manuelabuescher@boxernothilfe.de
- Telefon: 0162 – 897 14 83

---

**Entwickelt mit ❤️ für die Hunde und ihre Menschen.**
