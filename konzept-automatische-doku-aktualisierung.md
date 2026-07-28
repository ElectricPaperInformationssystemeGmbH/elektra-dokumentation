# Konzept: (Teil-)automatisierte Aktualisierung der Elektra-Onlinehilfe bei neuer Software-Version

Stand: Entwurf · Kontext: Docusaurus-Onlinehilfe für Standortverantwortliche, versioniert in Git, gepflegt gemeinsam mit Cowork (Claude).

## 1. Ziel und Rahmen

Sobald eine neue Elektra-Version erscheint, soll die Onlinehilfe möglichst automatisch an die geänderte Software angepasst werden. Der Vorgang wird **manuell angestoßen** (Startsignal durch einen Menschen), läuft dann aber selbstständig durch: betroffene Kapitel finden, Texte und Screenshots aktualisieren, Version/Stand pflegen, alles validieren und als überprüfbares Ergebnis (Git-Commit auf einem eigenen Zweig) bereitstellen.

Wichtige Einordnung vorab: „Vollautomatisiert" bezieht sich auf die **Durchführung**. Wegen des rechtsrelevanten Kontexts (Wahlen) ist eine **menschliche Freigabe vor der Veröffentlichung** dringend empfohlen. Das Konzept liefert deshalb ein fertig aufbereitetes Änderungspaket zur Abnahme – nicht eine unbeaufsichtigte Live-Änderung.

## 2. Was der aktuelle Rahmen schon mitbringt

- **Docusaurus + Markdown/MDX in Git**: jede Änderung ist nachvollziehbar, diff-bar und rücksetzbar.
- **Git als Sicherheitsnetz**: Baseline-Commit / eigener Branch vor jeder Änderung; Revert jederzeit möglich.
- **Vorhandene Skills** (Cowork):
  - `elektra-ui-sync` – Kernbaustein: gleicht ein Kapitel gegen die *aktuelle* Oberfläche ab. Nimmt die bestehende `.md` plus einen/mehrere HTML-Exporte der Elektra-Seiten/Modaldialoge, erzeugt einen strukturierten Ist/Dokumentiert-Abgleich (Panels + Feldnamen), rendert bei Bedarf neue Screenshots per Headless-Browser und schreibt gezielt nur die abweichenden Stellen um.
  - `elektra-anleitung` – erzeugt neue Schritt-für-Schritt-Anleitungen (für neue Funktionen).
  - `elektra-handbuch-styleguide` – hält Formatierung/Konventionen konsistent.
- **Validierungsroutinen**, die wir bereits nutzen: MDX-Build-Check, Link-Prüfung, Bildpfad-Prüfung, Textvollständigkeit.
- **Zugriffswege**: Datei-/Shell-Werkzeuge, Web-Fetch, sowie Browser-Steuerung (Claude in Chrome) für das Rendern echter Screenshots einer laufenden Instanz.

## 3. Was pro Lauf bereitgestellt werden muss (Eingaben)

Damit der Lauf zielgerichtet und korrekt ist, braucht es beim Startsignal möglichst:

1. **Versionsangabe** der neuen Software (z. B. „2.1.0") und Datum.
2. **Änderungsübersicht / Release Notes / Changelog** – die wichtigste Eingabe. Daraus wird abgeleitet, *was* sich geändert hat und *welche Kapitel* betroffen sind.
3. **Die geänderten Ansichten als vollständige HTML-Dateien** – entweder direkt beigelegt **oder** als Liste der URLs, die Cowork zu Beginn **einmalig herunterlädt**. Wichtig: Es wird **nicht** interaktiv durch die laufende Software navigiert. Grundlage sind ausschließlich statische HTML-Snapshots der Ansichten/Modaldialoge, in denen sich etwas geändert hat.
4. Optional: Hinweise auf **umbenannte/entfallene** Funktionen, damit tote Verweise und veraltete Begriffe sicher erkannt werden.

Ohne die HTML-Dateien der geänderten Ansichten (Punkt 3) können Texte anhand des Changelogs angepasst werden, aber **keine neuen Screenshots** entstehen – das ist die zentrale Abhängigkeit.

**Grundprinzip Screenshots:** Neue Screenshots werden aus den heruntergeladenen HTML-Snapshots gerendert (headless), nicht durch eigenes Klicken/Navigieren in der Software. So bleibt der Vorgang deterministisch und wiederholbar.

## 4. Auslöser und Startbefehl

Der Lauf wird über eine standardisierte Nachricht an Cowork gestartet – z. B.:

> „Neue Elektra-Version 2.1.0 ist da. Aktualisiere die Onlinehilfe. Changelog anbei, Staging unter <URL>, Zugang über den Passwort-Manager."

Damit die Ergebnisse reproduzierbar sind, empfiehlt sich eine feste **Prompt-Vorlage** (siehe Abschnitt 9), die immer dieselben Angaben und dieselbe erwartete Vorgehensweise enthält. Optional lässt sich der Start auch als wiederkehrende Erinnerung/geplante Aufgabe hinterlegen (z. B. „monatlich prüfen, ob eine neue Version vorliegt"), der eigentliche Anstoß bleibt aber manuell.

## 5. Ablauf (Pipeline)

**Phase 0 – Sicherung.** Sauberen Ausgangsstand sicherstellen und einen Arbeits-Branch anlegen (`update/v2.1.0`) bzw. Baseline-Commit. Damit ist jederzeit Rückkehr möglich, und die Änderungen bleiben von der veröffentlichten Fassung getrennt.

**Phase 1 – Änderungsanalyse.** Changelog auswerten und in konkrete Auswirkungen übersetzen: neue Funktionen, geänderte Masken/Felder, umbenannte Begriffe, entfallene Elemente.

**Phase 1b – HTML-Snapshots laden.** Zu Beginn die **vollständigen HTML-Dateien** der geänderten Ansichten herunterladen (aus den beigelegten Dateien bzw. den angegebenen URLs) und lokal ablegen. Ab hier wird ausschließlich mit diesen statischen Snapshots gearbeitet – keine interaktive Navigation in der Software. Aus diesen HTML-Dateien werden sowohl die Feld-/Panel-Abgleiche als auch die neuen Screenshots erzeugt.

**Phase 2 – Betroffenheits-Zuordnung.** Änderungen auf Kapitel/Seiten abbilden. Grundlage ist eine **Modul→Kapitel-Zuordnung** (siehe Abschnitt 7, „noch aufzubauen"): z. B. „WFU2 geändert" → `06-wahlfunktionen/wfu2-…`. Ergebnis: eine Arbeitsliste betroffener Dateien.

**Phase 3 – Abgleich & Aktualisierung (pro betroffenem Kapitel).**
- Mit `elektra-ui-sync` das dokumentierte gegen den tatsächlichen Stand abgleichen (Panels/Feldnamen) – als „Ist" dient der jeweilige **HTML-Snapshot aus Phase 1b**.
- Neue/geänderte **Screenshots** aus den heruntergeladenen HTML-Snapshots rendern (headless) und einheitlich einbinden (linksbündig, gerahmt, Bildunterschrift nach unserer Konvention).
- **Texte** nur an den abweichenden Stellen umschreiben, Stil per `elektra-handbuch-styleguide`.
- **Neue Funktionen** ergänzen (`elektra-anleitung`), inkl. Einordnung ins Kapitel und in die Navigation.
- **Entfallenes** entfernen und tote Verweise korrigieren.

**Phase 4 – Querschnittspflege.** Versions-/Stand-Angaben aktualisieren, ggf. „Neuigkeiten/Changelog"-Seite ergänzen, Video-Verweise prüfen, Begriffe vereinheitlichen.

**Phase 5 – Validierung.** Automatisch prüfen: `npm run build` (MDX-Fehler, kaputte Links), Existenz aller referenzierten Bilder, keine nackten `<br>`/ungeschlossenen Tags, Konsistenz von Slugs/Verweisen. Bei Fehlern zurück in Phase 3.

**Phase 6 – Zusammenfassung & Freigabe.** Änderungsübersicht erstellen (welche Kapitel, was inhaltlich, welche Screenshots neu), als Commit(s) auf dem Branch ablegen und zur **menschlichen Abnahme** bereitstellen. Erst nach Freigabe wird der Branch übernommen/veröffentlicht.

## 6. Qualitätssicherung, Sicherheit, Rückweg

- **Vier-Augen-Prinzip**: fertiges Änderungspaket + Klartext-Diff zur Abnahme; keine unbeaufsichtigte Live-Änderung.
- **Reproduzierbarkeit**: feste Eingaben + Prompt-Vorlage + definierte Pipeline.
- **Rückweg**: alles auf einem Branch; `git revert`/Branch verwerfen jederzeit möglich.
- **Keine Live-Navigation**: Cowork bewegt sich nicht selbst durch die Software; es werden nur die zu Beginn geladenen HTML-Snapshots verwendet.
- **Screenshots/Snapshots**: sollten aus einer Test-/Demo-Umgebung stammen, nie aus Produktivdaten mit echten Personendaten (Datenschutz). Demodaten verwenden.
- **Beschaffung der HTML-Dateien**: das Exportieren/Bereitstellen der HTML-Snapshots (bzw. der URL-Liste) ist eine menschliche Handlung; etwaige Anmeldungen erfolgen durch euch.

## 7. Was für „vollautomatisch" noch aufgebaut werden sollte

1. **Modul→Kapitel-Zuordnung** (Mapping): pro Seite ein stabiler Schlüssel (z. B. `help_id` im Frontmatter), damit Changelog-Einträge verlässlich auf Kapitel zeigen – unabhängig von URL-/Titeländerungen. (Deckt sich mit der früher besprochenen kontextsensitiven Hilfe.)
2. **Verlässliche HTML-Bereitstellung**: ein einfacher Weg, die vollständigen HTML-Dateien der geänderten Ansichten zu exportieren bzw. abrufbare URLs (aus einer Demo-Umgebung) bereitzustellen – Grundlage für Abgleich und Screenshot-Rendering.
3. **Changelog in maschinenlesbarer Form** (Stichpunkte je Modul/Funktion) statt Fließtext – erhöht Trefferquote der Betroffenheitsanalyse deutlich.
4. **Definition der Abnahme**: wer gibt frei, woran wird geprüft (fachlich korrekt, rechtssicher, stilkonform).

## 8. Reifegrade (was heute geht, was der Vollausbau bringt)

- **Stufe 1 – heute möglich**: Manuelles Startsignal mit Changelog + vollständigen HTML-Dateien der geänderten Ansichten. Cowork lädt die HTML-Snapshots, aktualisiert betroffene Kapitel, rendert Screenshots aus den Snapshots, validiert und legt ein Änderungspaket zur Freigabe an. Betroffenheit wird teils manuell benannt.
- **Stufe 2 – mit Mapping + einfacher HTML-Bereitstellung**: Betroffene Kapitel werden automatisch aus dem Changelog abgeleitet; die HTML-Dateien liegen über einen definierten Export/URL-Weg vor, Screenshots entstehen automatisch daraus. Deutlich weniger manuelle Angaben nötig.
- **Stufe 3 – Vollausbau**: Nur noch „Version X ist da" plus die HTML-Snapshots als Signal; Betroffenheitsanalyse, Textpflege und Screenshot-Erzeugung laufen automatisch bis zum Abnahme-Paket. Menschliche Freigabe bleibt als letzter Schritt.

## 9. Vorschlag: Standard-Startbefehl (Vorlage)

> **Aufgabe:** Aktualisiere die Onlinehilfe für Standortverantwortliche auf Elektra-Version **<X.Y.Z>** (Stand **<Datum>**).
> **Änderungen:** <Changelog / Release Notes – möglichst je Modul stichpunktartig>.
> **Geänderte Ansichten:** vollständige HTML-Dateien der geänderten Masken/Dialoge im Anhang **oder** Liste der URLs zum einmaligen Herunterladen. Bitte **nicht** selbst durch die Software navigieren – nur diese HTML-Snapshots verwenden.
> **Vorgehen:** Arbeits-Branch anlegen → HTML-Snapshots laden → betroffene Kapitel bestimmen → Texte und Screenshots (aus den Snapshots) aktualisieren (Styleguide beachten) → Version/Stand pflegen → build + Link-/Bildprüfung → Änderungsübersicht erstellen und zur Freigabe committen. Nicht veröffentlichen ohne meine Freigabe.

## 10. Offene Punkte / Entscheidungen

- Wie werden die **vollständigen HTML-Dateien** der geänderten Ansichten am einfachsten bereitgestellt (Export aus einer Demo-Umgebung oder abrufbare URLs)?
- Wird das **Changelog** in maschinenlesbarer Stichpunktform bereitgestellt?
- Wer übernimmt die **fachliche/rechtliche Abnahme** vor Veröffentlichung?
- Soll die `help_id`-/Modul-Zuordnung eingeführt werden (nützt auch der kontextsensitiven Hilfe)?
