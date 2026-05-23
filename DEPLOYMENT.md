# Deployment-Anleitung – Boxerhof Website

Diese Anleitung beschreibt, wie du die Boxerhof-Website auf Vercel deployest.

## Voraussetzungen

1. **GitHub-Account** (um das Repository zu hosten)
2. **Vercel-Account** (kostenlos auf vercel.com)
3. **Git** installiert auf deinem Computer

## Schritt 1: Repository auf GitHub erstellen

1. Gehe auf [GitHub.com](https://github.com)
2. Klicke auf "New" um ein neues Repository zu erstellen
3. Name: `boxerhof-hundepension`
4. Beschreibung: `Hundepension Website für Bad Oeynhausen`
5. Wähle "Public" oder "Private"
6. **Erstelle das Repository OHNE README, .gitignore oder Lizenz** (da wir bereits einen haben)

## Schritt 2: Code zu GitHub pushen

Führe in deinem Projekt-Verzeichnis folgende Befehle aus:

```bash
# Initialisiere Git (nur beim ersten Mal nötig, wenn nicht bereits initialisiert)
git init

# Füge alle Dateien hinzu
git add .

# Erstelle einen initialen Commit
git commit -m "Initial commit: Boxerhof Website"

# Verbinde mit GitHub
git remote add origin https://github.com/YOUR-USERNAME/boxerhof-hundepension.git

# Benenne den Branch um (falls nötig)
git branch -M main

# Pushe zu GitHub
git push -u origin main
```

*Ersetze `YOUR-USERNAME` mit deinem GitHub-Benutzernamen.*

## Schritt 3: Projekt auf Vercel verbinden

1. Gehe auf [Vercel.com](https://vercel.com)
2. Melde dich mit GitHub an (oder erstelle einen Account)
3. Klicke "New Project"
4. Suche dein `boxerhof-hundepension` Repository
5. Klicke "Import"

### Konfiguration für Vercel:

**Framework Preset**: React Router

**Build Settings** sollten automatisch erkannt werden:
- Framework: React Router
- Build Command: (automatisch)
- Output Directory: (automatisch)

### Environment Variables hinzufügen:

Unter "Environment Variables" füge folgende hinzu:

| Name | Wert |
|------|------|
| `ADMIN_PASSWORD` | `tyson2811` |
| `DATABASE_URL` | `postgresql://neondb_owner:npg_lQ0W5NracdyO@ep-broad-haze-ajv7hjl6.c-3.us-east-2.aws.neon.tech/neondb?sslmode=require` |
| `VITE_SUPABASE_URL` | `https://izmfkvmxbmostbqmwxjf.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6bWZrdm14Ym1vc3RicW13eGpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1MjQ4MjIsImV4cCI6MjA5NTEwMDgyMn0.AtZJeXfDNXNdbequM0cCjpHsiwoaxWqAS68I5ORc6Lg` |

## Schritt 4: Deploy durchführen

1. Nach dem Hinzufügen der Environment Variables klicke "Deploy"
2. Vercel wird automatisch bauen und deployen
3. Warte auf die Benachrichtigung "Deployment Successful"

## Schritt 5: Domain konfigurieren (Optional)

Um eine eigene Domain zu verwenden:

1. Gehe zu deinem Projekt auf Vercel
2. Klicke auf "Settings" > "Domains"
3. Füge deine Domain hinzu (z.B. `boxerhof.de`)
4. Folge den Anweisungen zum DNS-Konfigurieren

## Nach dem Deployment

### Admin-Bereich testen

1. Gehe zur Live-URL und öffne `/admin`
2. Gib das Passwort ein: `tyson2811`
3. Teste die Verwaltung von News, Gästebuch und Galerie

### Laufend Updates pushen

Immer wenn du Änderungen vornimmst:

```bash
# Änderungen hinzufügen
git add .

# Commit mit aussagekräftiger Nachricht
git commit -m "Beschreibung der Änderung"

# Zu GitHub pushen
git push
```

Vercel wird automatisch bauen und deployen!

## Troubleshooting

### Deployment fehlgeschlagen?

1. Prüfe die Build-Logs in Vercel
2. Stelle sicher, alle Environment Variables gesetzt sind
3. Prüfe, dass package.json korrekt ist

### Admin-Login funktioniert nicht?

1. Stelle sicher, dass `ADMIN_PASSWORD` in Vercel gesetzt ist
2. Prüfe, dass das Passwort exakt `tyson2811` ist
3. Leere Browser-Cache und versuche neu

### Datenbank-Fehler?

1. Prüfe, dass `DATABASE_URL` korrekt in Vercel gesetzt ist
2. Prüfe, dass die Neon-Verbindung noch aktiv ist
3. Öffne einen Neon-Account und prüfe die Logs

## Sicherheit

⚠️ **WICHTIG**: 
- ADMIN_PASSWORD sollte regelmäßig geändert werden
- DATABASE_URL sollte niemals öffentlich sichtbar sein
- Nutze "Private" Environment Variables in Vercel
- Aktiviere "Automatic deployments" für sicheren Code-Flow

## Weitere Ressourcen

- [Vercel Dokumentation](https://vercel.com/docs)
- [React Router Deployment](https://reactrouter.com/start/framework/vite)
- [Neon PostgreSQL Docs](https://neon.tech/docs)

---

**Viel Erfolg beim Deployment!** 🚀
