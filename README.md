# Boxerhof Bad Oeynhausen

Moderne, statische Website für die Hundepension **Boxerhof** in Bad Oeynhausen, geleitet von Manuela Büscher.

## Lokal öffnen

Einfach `index.html` im Browser öffnen — oder einen kleinen statischen Server starten:

```bash
python3 -m http.server 8000
# dann http://localhost:8000 öffnen
```

> Hinweis: Wegen der externen Skripte (React, Babel) und der lokalen Bilder funktioniert ein Doppelklick auf `index.html` in manchen Browsern nicht zuverlässig — ein Mini-Server ist sicherer.

## Struktur

```
├── index.html              # Einstieg, lädt React + Babel + alle Komponenten
├── styles.css              # Komplettes Styling, CSS-Variablen für die Palette
├── app.jsx                 # Root-Komponente, Tweaks-Logik, Reveal-Animation
├── tweaks-panel.jsx        # Tweaks-Panel-Helfer
├── components/             # Eine Datei pro Sektion
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── PhotoStrip.jsx
│   ├── Marquee.jsx
│   ├── Services.jsx
│   ├── Betten.jsx
│   ├── Tag.jsx
│   ├── Preise.jsx
│   ├── Manuela.jsx
│   ├── Stimmen.jsx
│   ├── Anfahrt.jsx
│   ├── FAQ.jsx
│   ├── Galerie.jsx
│   ├── Kontakt.jsx
│   ├── Footer.jsx
│   └── Icons.jsx
└── uploads/boxerfoto/      # Hoffotos Boxerhof-1.jpg ... Boxerhof-25.jpg
```

## Inhalte anpassen

Texte und Foto-Zuordnungen leben direkt in den Komponenten-Dateien (`components/*.jsx`).
Farben sind als CSS-Variablen in `styles.css` (`:root`) zentralisiert — Akzentfarbe lässt sich auch live über das Tweaks-Panel rechts unten umschalten.

## Deployment

Statische Seite. Funktioniert out-of-the-box auf GitHub Pages, Netlify, Vercel oder jedem statischen Hoster — keine Build-Schritte nötig.
