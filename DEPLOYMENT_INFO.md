# Deployment Information – Boxerhof Website

## Status: DEPLOYMENT READY ✅

Die Website ist konfiguriert und bereit für das Vercel-Deployment.

## Bereitstellung für Vercel

### Automatische Erkennung
Vercel erkennt automatisch:
- **Framework**: React Router
- **Root Directory**: `web/`
- **Output Directory**: `dist/` oder `.next/`
- **Build Command**: Automatisch erkannt

### Erforderliche Environment Variables

In Vercel Dashboard unter "Settings → Environment Variables" müssen diese 4 Variablen gesetzt werden:

```
ADMIN_PASSWORD = tyson2811
DATABASE_URL = postgresql://neondb_owner:npg_lQ0W5NracdyO@ep-broad-haze-ajv7hjl6.c-3.us-east-2.aws.neon.tech/neondb?sslmode=require
VITE_SUPABASE_URL = https://izmfkvmxbmostbqmwxjf.supabase.co
VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6bWZrdm14Ym1vc3RicW13eGpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1MjQ4MjIsImV4cCI6MjA5NTEwMDgyMn0.AtZJeXfDNXNdbequM0cCjpHsiwoaxWqAS68I5ORc6Lg
```

## Deployment durchführen

### Option 1: Mit Vercel CLI (Schnellste Methode)

```bash
# 1. Anmelden (öffnet Browser)
vercel login

# 2. Deployen
vercel

# 3. Den Fragen folgen:
# - Project name: boxerhof-hundepension
# - Directory: web
# - Use existing vercel.json? yes
```

### Option 2: Mit GitHub + Vercel Dashboard (Empfohlen)

```bash
# 1. GitHub Remote hinzufügen
git remote add origin https://github.com/YOUR-USERNAME/boxerhof-hundepension.git

# 2. Zu GitHub pushen
git push -u origin master

# 3. Auf Vercel Dashboard:
# - Gehe zu https://vercel.com
# - "New Project"
# - Wähle "boxerhof-hundepension" Repository
# - Import
# - Environment Variables setzen
# - Deploy
```

### Option 3: Mit Vercel + GitHub (Vollständig automatisiert)

```bash
# 1. Vercel CLI mit GitHub verbinden
vercel link

# 2. Environment Variables hinzufügen
vercel env add ADMIN_PASSWORD
# → tyson2811
vercel env add DATABASE_URL
# → postgresql://...
vercel env add VITE_SUPABASE_URL
# → https://izmfkvmxbmostbqmwxjf.supabase.co
vercel env add VITE_SUPABASE_ANON_KEY
# → eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# 3. Deployen
vercel deploy --prod
```

## Nach dem Deployment

### Verifikation

Die Website ist live unter der Vercel-URL erreichbar (z.B.):
```
https://boxerhof-hundepension.vercel.app
```

Überprüfe folgende Punkte:

1. **Home-Seite lädt** ✓
   - `/` sollte Hero-Section zeigen
   - Alle Abschnitte sichtbar
   - Bilder laden

2. **Alle Links funktionieren** ✓
   - Navigations-Links
   - Footer-Links
   - Impressum `/impressum`
   - Datenschutz `/datenschutz`

3. **Admin-Panel erreichbar** ✓
   - `/admin` öffnet Login
   - Passwort: `tyson2811`
   - Dashboard nach Login

4. **Formulare funktionieren** ✓
   - Kontaktformular auf Home
   - Gästebuch-Formular auf `/gaestebuch`

5. **Datenbank-Verbindung** ✓
   - News laden auf `/neuigkeiten`
   - Gästebuch-Einträge auf `/gaestebuch`
   - Alben auf `/galerie`

### Production Deployment

Einmal erfolgreich getestet, Vercel automatisch mit `--prod` Flag deployen:

```bash
vercel deploy --prod
```

Dies setzt den Deployment als Production-Version.

## Domain-Einrichtung (Optional)

Um eine eigene Domain zu verwenden:

1. **Vercel Dashboard öffnen**
2. Projekt auswählen
3. "Settings" → "Domains"
4. Domain-Name eingeben (z.B. `boxerhof.de`)
5. DNS-Records konfigurieren (Vercel zeigt die genauen Anweisungen)

Typischer DNS-Eintrag:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Vercel Logs überprüfen

Um Deployment-Logs zu sehen:

```bash
# Letzte Logs anzeigen
vercel logs

# Oder auf Vercel Dashboard:
# - Projekt öffnen
# - "Deployments" Tab
# - Auf Deployment klicken
# - "Logs" anschauen
```

## Environment Variables nachträglich ändern

Falls Passwort oder andere Variablen geändert werden sollen:

**Via CLI:**
```bash
vercel env add ADMIN_PASSWORD
# → Neue Passwort eingeben
```

**Via Dashboard:**
1. Projekt → Settings → Environment Variables
2. Variable bearbeiten
3. Speichern
4. Neuer Deployment triggert automatisch

## Rollback bei Problemen

Falls das Deployment fehlschlägt:

1. **Auf Vercel Dashboard**
2. "Deployments" Tab
3. Vorheriges erfolgreiche Deployment auswählen
4. "Promote to Production" klicken

## Support bei Problemen

### Website lädt nicht
- Vercel Logs überprüfen
- Environment Variables prüfen
- Build-Fehler beheben und neu deployen

### Admin-Login funktioniert nicht
- `ADMIN_PASSWORD` in Vercel prüfen
- Browser-Cache clearen (Ctrl+Shift+Delete)
- Neue Deployment triggern

### Datenbank-Fehler
- `DATABASE_URL` prüfen
- Neon-Verbindung überprüfen
- Datenbank-Status auf Neon Dashboard prüfen

## Monitoring nach Launch

### Empfohlene Setup:

1. **Vercel Logs monitoren**
   - Deployment-Fehler automatisch erkennen

2. **Optional: Analytics**
   - Vercel Analytics aktivieren
   - Google Analytics einbinden

3. **Optional: Error Tracking**
   - Sentry einbinden für Production-Fehler

4. **Regelmäßige Backups**
   - Datenbank-Backup: `database-export.json`
   - GitHub als Source Control

## Git Workflows nach Deployment

### Neue Features hinzufügen:

```bash
# 1. Neuer Branch
git checkout -b feature/neue-feature

# 2. Änderungen machen
# ... edit files ...

# 3. Committen
git add .
git commit -m "Add neue-feature"

# 4. Zu GitHub pushen
git push origin feature/neue-feature

# 5. Pull Request auf GitHub erstellen
# 6. Nach Merge deployt Vercel automatisch!
```

### Hotfix in Production:

```bash
# 1. Aus master/main branch
git checkout master

# 2. Fix machen
# ... edit files ...

# 3. Committen und pushen
git add .
git commit -m "Fix: kritischer Bug"
git push origin master

# 4. Vercel deployt automatisch!
```

## Nächste Schritte

- [ ] GitHub-Repository einrichten
- [ ] Zu GitHub pushen
- [ ] Vercel mit GitHub verbinden
- [ ] Environment Variables setzen
- [ ] Erstes Deployment durchführen
- [ ] Website testen
- [ ] Domain einrichten (optional)
- [ ] Monitoring einschalten (optional)

---

**Viel Erfolg beim Deployment!** 🚀

Wenn Fragen auftauchen, siehe auch:
- `DEPLOYMENT.md` - Detaillierte Anleitung
- `QUICKSTART.md` - Quick Reference
- `LAUNCH_CHECKLIST.md` - Pre-Launch Checkliste
