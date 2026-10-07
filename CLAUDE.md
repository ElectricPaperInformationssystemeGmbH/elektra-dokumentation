# CLAUDE.md – Elektra-Onlinehilfe für Standortverantwortliche

Verbindliche Arbeitsanweisung für dieses Projekt. Immer danach arbeiten; Regeln nicht neu
erfinden und nicht erneut erfragen.

## 1. Was das hier ist

Docusaurus-Dokumentation des **Elektra**-Wahlmanagementsystems für die Zielgruppe
**Standortverantwortliche** — also die Personen, die eine Wahl an einem einzelnen Standort
durchführen. Deutsch, **Sie-Form**, durchgehend.

- **`docs/` ist die Quelle.** Die Kapitel werden **direkt als Markdown gepflegt**. Es gibt
  keinen Generator und kein führendes Word-Dokument mehr. Dateien in `docs/` dürfen und sollen
  direkt bearbeitet werden.
- Umfang aktuell: 52 Seiten, rund 275 Bilder, 7 Hauptkapitel.
- Schwesterprojekt: das **Administrator-Handbuch** (`../Admin`). Gleiches Gerüst, andere
  Zielgruppe. In diesem Projekt nicht mitpflegen.

## 2. Verbindliche Referenzen (Skills)

| Zweck | Skill | Wann |
|---|---|---|
| Formatierung / Look-and-feel | `elektra-handbuch-styleguide` | bei jedem Erstellen oder Ändern von Kapiteln |
| Abgleich mit der Oberfläche | `elektra-ui-sync` | wenn Screenshots oder Feldbeschreibungen veraltet sind |
| Word-Dateien lesen | `docx` (pandoc) | nur falls ausnahmsweise aus Word zugeliefert wird |

Der Styleguide-Skill beschreibt das **Word**-Layout. Die Übersetzung in Docusaurus-Markdown
steht in Abschnitt 4 und ist für dieses Projekt maßgeblich.

## 3. Arbeitsweise

- **Kapitelweise arbeiten:** eine Datei bearbeiten, speichern, aus dem Kontext loslassen.
  Nie mehrere Kapitel gleichzeitig im Kontext halten.
- **Antworten kurz:** Fortschritt und Diff-Zusammenfassung. Keine ganzen Dateien in den Chat.
- **Nichts erfinden.** Feldbedeutungen, Menüpfade und Verhalten nur aus Screenshot, HTML-Export
  oder Nutzeraussage. Ungeklärtes als sichtbare Box **Offene Notiz** (Abschnitt 4) markieren
  und im Kurzbericht nennen — lieber eine markierte Lücke als ein plausibel klingender
  falscher Satz.
- **Vor jedem Commit:** `npm run build` muss fehlerfrei durchlaufen. Der Dev-Server ist
  toleranter und verschweigt kaputte Links und MDX-Fehler.
- **Pro abgeschlossenem Kapitel ein Commit**, aussagekräftige Nachricht auf Deutsch.
- Bei größeren Vorhaben: Plan vorlegen, Freigabe abwarten, dann umsetzen.

## 4. Struktur- und Formatkonventionen

### Ordnerstruktur

```
docs/
├─ index.mdx                       Startseite (slug: /, hide_title: true)
├─ hinweise-und-konventionen.md    Recht, Marken, Schreibkonventionen (sidebar_position: 0.5)
├─ img/                            nur Bilder der Startseite
└─ NN-kapitelname/                 ein Ordner je Hauptkapitel
   ├─ _category_.json              { "label": "Anzeigename", "position": N }
   ├─ index.md                     Kapiteleinstieg + <DocCardList />
   ├─ NN-unterkapitel.md           ein Unterkapitel je Datei
   ├─ NN-unterkapitel/             bei umfangreichen Unterkapiteln: eigener Ordner
   │  ├─ index.md                  mit eigener index.md, eigenen Seiten und eigenem img/
   │  └─ img/
   └─ img/                         Bilder NUR dieses Kapitels
```

Diese dritte Ebene wird bereits genutzt, u. a. in
`02-orientierung-und-erste-schritte-im-system/03-allgemeine-grundkonzepte-der-benutzeroberflaeche/`
und `06-wahlfunktionen/03-wfu2-waehleranfragen-bearbeiten/`. Ab etwa 600 Zeilen ein Unterkapitel
so aufteilen: aus der `.md` wird ein Ordner mit `index.md`; die Navigation stellt sich
automatisch um.

- `NN-`Präfixe steuern die Reihenfolge. Slugs kleingeschrieben, Umlaute umschrieben
  (`ae`, `oe`, `ue`, `ss`). Der Dateiname wird Teil der URL — **URLs stabil halten**,
  Umbenennungen nur mit gutem Grund.
- Bilder **immer** im `img/` der eigenen Ebene, referenziert als `img/dateiname.png`.
  Keine Wiederverwendung über Kapitel hinweg.
- Neue Bilder **sprechend benennen** (`letzte-bearbeitung.png`), nicht `imageNN.png`.
  Die `imageNN.png` stammen aus der ursprünglichen Word-Konvertierung; neue Dateien folgen
  dem nicht.
- `sidebars.js` wird autogeneriert — Navigation **nie** manuell pflegen.

### Front-Matter

```yaml
---
title: "Aufbau der Aufgabentabelle"
sidebar_position: 2
---
```

Danach eine `# H1` mit demselben Text. Überschriften **nicht** manuell nummerieren.
Ebenen: `#` Seitentitel, `##` Abschnitt, `###` Unterabschnitt.

### Bild mit Unterschrift

```markdown
Innerhalb einer Aufgabenphase werden die Aufgaben tabellarisch dargestellt:

![](img/image55.png)
*Übersicht Aufgabenphase*
```

Rahmen, Schatten und die eng anliegende kursive Unterschrift kommen aus
`src/css/custom.css` — kein HTML, keine „Abb. N"-Nummerierung.
**Vor jedem Bild steht ein anmoderierender Satz**, nie ein Bild direkt unter einer Überschrift.

### maxWidth-Wrapper

Schmale oder hohe Screenshots (Dialoge, Dropdowns, Ausschnitte) begrenzen:

```markdown
<div style={{maxWidth: '500px'}}>

![](img/dialog.png)
*Dialog „Benutzer anlegen"*

</div>
```

Übliche Werte: `230px` Dropdown, `400–560px` Dialog, `900px` breite Maske.
**Leerzeilen vor und nach dem Markdown-Block sind Pflicht** (MDX).

### Feldtabellen

Referenztabellen „Feld / Bedeutung", „Symbol / Status" mit echter Kopfzeile:

```markdown
<div className="fieldTable">

| Symbol | Status | Bedeutung |
| --- | --- | --- |
| ![](img/status-offen.png) | **Offen** | Die Aufgabe wurde noch nicht bearbeitet. |

</div>
```

Weitere vorhandene Klassen: `tableFit` (Tabelle auf Inhaltsbreite, Bildspalte in natürlicher
Größe), `figSide` / `figSide__img` / `figSide__text` (hoher Screenshot links, Erklärung rechts).
Handbuch-Tabellen ohne echte Kopfzeile bleiben ungewickelt — die erste Zeile wird vom CSS
wie eine normale Zeile dargestellt.

### Hinweisbox, Tipp, offene Notiz

Keine Docusaurus-Admonitions (`:::note`). Konvention ist eine einspaltige Tabelle mit Icon:

```markdown
| **Hinweis** ![](img/image9.png) |
| --- |
| Fahren Sie mit Ihrem Cursor über das „i", um die Mindestanforderungen zu sehen. |
```

`image9.png` ist das Info-Icon; es muss im `img/` der jeweiligen Ebene liegen (aus einem
Nachbarkapitel kopieren). Für ungeklärte Stellen dieselbe Box mit dem Label **Offene Notiz**.
„Tipp" ist Fließtext mit führendem `**Tipp:**`.

### Videos

```markdown
<Vimeo id="1079705067" title="Aufgaben" />
```

Wird an 43 Stellen genutzt, teils als eigener Abschnitt „Videos zu diesem Kapitel" unter dem
Marker `<!-- videos:auto -->`. Kapitel `08-videos` sammelt E-Learning und Tutorials.

### Kapitel-Einstiegsseiten

```markdown
<!-- doccards:auto -->
## In diesem Kapitel

<DocCardList />
```

`DocCardList` und `Vimeo` sind über `src/theme/MDXComponents.js` global verfügbar —
**kein `import` in den `.md`-Dateien**. Nur `docs/index.mdx` importiert `useBaseUrl`.

### Fett- und Zitierkonvention

Fett: Menüeinträge, Schaltflächen, Tasten, Feldnamen, Verzeichnisse sowie Eigennamen und
Produktbezeichnungen — **Elektra** bei *jeder* Erwähnung. Konkrete UI-Beschriftungen zusätzlich
in deutschen Anführungszeichen: „Passwort zurücksetzen". Programmcode in Backticks.

### Ist-Zustand beschreiben

Kein „neu hinzugekommen", „früher/jetzt", „wurde umbenannt". Was es nicht mehr gibt, wird
weggelassen, nicht kommentiert. Was neu ist, wird normal beschrieben.

## 5. Screenshots

- Immer dieselbe Fensterbreite und dieselbe Testinstanz mit denselben erfundenen Beispieldaten.
  Keine echten Personendaten.
- Nur der relevante Ausschnitt, keine Browser- oder Taskleiste. Ein Farbmodus, konsequent.
- Keine Pfeile oder roten Kästen ins Bild malen — was hervorzuheben ist, gehört in den Text.
- Für neue oder aktualisierte Screenshots den Skill `elektra-ui-sync` nutzen: er rendert sie
  per Headless-Browser aus einem HTML-Export, inklusive Panel-Collapse und Modal-Fix.

## 6. Nicht anfassen

`src/css/custom.css`, `src/theme/`, `src/components/`, `sidebars.js`, `docusaurus.config.js`.
Hier stecken die Formatbausteine und die Deploy-Konfiguration. Wenn eine Formatierung fehlt:
nachfragen, statt eine neue CSS-Klasse oder Inline-HTML zu erfinden.

## 7. Bauen und veröffentlichen

```bash
npm install          # einmalig
npm start            # Dev-Server, http://localhost:3000/elektra-dokumentation/
npm run build        # Produktionsbuild – vor jedem Commit
npm run serve        # Build ausliefern
```

Push auf `main` löst `.github/workflows/deploy.yml` aus (Node 20, `npm ci` → `npm run build`)
und veröffentlicht auf GitHub Pages:
<https://electricpaperinformationssystemegmbh.github.io/elektra-dokumentation/>

**Git im verbundenen Ordner:** Löschen ist im Mount nicht erlaubt. Bleiben nach einem
abgebrochenen Vorgang `.git/*.lock`-Dateien liegen, scheitern folgende Git-Befehle mit
„File exists" — die Lock-Dateien dann wegschieben (`mv`), nicht löschen.

## 8. MDX-Fallgruben

1. **`{` und `}` im Fließtext** brechen den Build — MDX liest sie als JavaScript.
   Platzhalter wie `{Projekt.Titel}` in Backticks setzen.
2. **Spitze Klammern und Autolinks:** `<http://server:8080/>` und `<Platzhalter>` werden als
   JSX-Tag gelesen. Als Markdown-Link schreiben oder in Backticks setzen.
3. **Fehlende Leerzeilen um `<div>`-Blöcke** — das eingeschlossene Markdown bleibt unformatiert.
4. HTML-Kommentare (`<!-- doccards:auto -->`) sind in Ordnung, die behandelt Docusaurus selbst.
5. Vor dem Commit immer `npm run build`, nicht nur den Dev-Server.

## 9. Nebenordner

- `testplan/` — Playwright-Testplan (Pilot `06-wahlfunktionen`): `testcases.json` ist die
  Quelle, `generate_tickets.py` erzeugt Tickets und Index. Nie Tickets von Hand ändern.
- `chatbot/` — Konzeptpapier für einen RAG-Chatbot auf Basis dieser Doku. Kein Code.
- `anfangsprompt-*.md` — Startprompts früherer Vorhaben, Archiv.
