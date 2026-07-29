# Elektra – Handbuch für Standortverantwortliche (Docusaurus)

Diese Dokumentation ist als [Docusaurus](https://docusaurus.io/)-Projekt aufgebaut.
Die Inhalte liegen als Markdown-Dateien in `docs/`, gegliedert nach Kapiteln und
Unterkapiteln. Bilder liegen jeweils in einem `img/`-Ordner direkt beim zugehörigen
Kapitel (relative Pfade).

## Voraussetzungen

- [Node.js](https://nodejs.org/) Version 18 oder neuer (empfohlen: LTS)

## Installation

Einmalig im Projektordner die Abhängigkeiten installieren:

```bash
npm install
```

## Lokal starten (Entwicklungsserver)

```bash
npm run start
```

Docusaurus öffnet automatisch `http://localhost:3000`. Änderungen an den
Markdown-Dateien werden live neu geladen.

## Statische Website bauen

```bash
npm run build
```

Das Ergebnis liegt anschließend im Ordner `build/` und kann auf jedem
Webserver bereitgestellt werden. Zum lokalen Testen des Builds:

```bash
npm run serve
```

## Struktur

```
docs/
  index.md                     ← Startseite (Titel, Schreibkonventionen, Hinweise)
  01-einleitung/
    _category_.json            ← Sidebar-Label & Position der Kategorie
    index.md                   ← Kapitel-Einstiegstext
    01-ziel-des-handbuchs.md
    ...
  02-orientierung-und-erste-schritte-im-system/
    02-erste-orientierung-im-system/   ← Unterkapitel mit eigenen Sub-Kapiteln
      _category_.json
      index.md
      01-triptychon-aufgaben.md
      ...
  ...
```

- **Reihenfolge** steuern die Nummern-Präfixe (`01-`, `02-`, …) sowie
  `sidebar_position` in der Frontmatter und `position` in `_category_.json`.
- **Sidebar** wird automatisch aus der Ordnerstruktur erzeugt (`sidebars.js`).
- **Neues Kapitel** = neuer Ordner mit `_category_.json`; **neue Seite** =
  neue `.md`-Datei mit Frontmatter (`title`, `sidebar_position`).

## Anpassen

- Titel, Footer, Farben: `docusaurus.config.js` und `src/css/custom.css`
- Deployment-URL: `url` und `baseUrl` in `docusaurus.config.js`

## Rechtliche Hinweise

© Electric Paper Informationssysteme GmbH. Alle Rechte vorbehalten.

Diese Dokumentation dient ausschließlich der Information für Kunden und Nutzer
unserer Produkte. Eine Vervielfältigung, Bearbeitung oder Weiterverbreitung –
auch auszugsweise – ist ohne ausdrückliche schriftliche Zustimmung nicht
gestattet.

Das Repository ist öffentlich einsehbar; dies stellt jedoch keine Freigabe zur
Weiterverwendung dar. Es wird bewusst keine Open-Source- oder Creative-Commons-
Lizenz gewährt (siehe `"license": "UNLICENSED"` in der `package.json`).
