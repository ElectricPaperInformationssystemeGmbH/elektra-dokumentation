---
title: "WFU1 Wahlvorschläge u Stimmzettel erstellen"
sidebar_position: 2
---

# WFU1 Wahlvorschläge u Stimmzettel erstellen

Mit dieser Wahlfunktion erzeugen Sie unter Verwendung des eingebauten Reportgenerators Aushänge für Wahlvorschläge und Stimmzettel.

Wie alle dokumentarischen Wahlfunktionen beginnt WFU1 mit Arbeitshilfen und dem Plausibilitätsmodul (Fehler & Warnungen); die allgemeine Bedienung ist im [Grundkonzept für dokumentarische Wahlfunktionen](./grundkonzept-fuer-dokumentarische-wahlfunktionen) beschrieben. Im Folgenden werden die Schritte dieser Wahlfunktion erläutert.

![](img/image137.png)
*WFU1: Wahlvorschläge und Stimmzettel erstellen*

## Stimmzettel-Dialog ausfüllen

Wählen Sie den Bezirk (bei Einheitswahl ist nur ein Eintrag vorhanden), für den Sie einen Aushang erzeugen wollen, und befüllen Sie die Dialogbox:

![](img/image138.png)
*Dialog Stimmzettel erstellen öffnen*

<div className="fieldTable">

| Feld | Bedeutung |
| --- | --- |
| Überschrift | Meist „Stimmzettel" oder „Wahlvorschlag". Der Textvorschlag kann aus dem Projekt übernommen und hier für den Zweck angepasst werden. |
| Optionale Unterüberschrift | Wird unterhalb der Hauptüberschrift in fetter Schrift dargestellt. |
| Text über dem Stimmblock | Erscheint über dem Stimmblock des Papierstimmzettels. Bei Online-Wahlen nicht berücksichtigt, sondern automatisch aus den Vorgaben hergeleitet. |
| Text unter dem Stimmblock | Wird bei Papierstimmzetteln unter dem Stimmblock wiedergegeben. Wird nicht in das Onlinewahlsystem übertragen. |
| Wasserzeichen | Grauer Text in großen Lettern hinter dem Stimmblock. **WICHTIG:** Feld leer lassen, wenn Sie den endgültigen Stimmzettel für den Massendruck erzeugen! |

</div>

![](img/image139.png)
*Textblöcke im Dialog Stimmzettelentwurf*

Im Feld **Kandidaten** wählen Sie die zugesagten Kandidaten Ihres Standortes aus, die auf dem Briefwahlstimmzettel erscheinen sollen.

![](img/image140.png)
*Kandidatenauswahl*

| **Hinweis** ![](img/image9.png) |
| --- |
| Klicken Sie auf **Alle Kandidaten auswählen**, um automatisch alle Kandidaten mit dem Status **zugesagt** zu übernehmen. Um einen Kandidaten zu entfernen, klicken Sie auf das Kreuz neben dessen Namen. |

<div className="fieldTable">

| Feld | Bedeutung |
| --- | --- |
| Vorlage zum Generieren des Wahlvorschlags/Stimmzettels | Dropdown mit verschiedenen vorbereiteten Layouts – neben dem Stimmzettel auch Vorlagen für Kandidatenvorstellungen oder Aushänge. |
| Neue Wahlvorschlag-/Stimmzettel-Entwürfe jetzt erstellen | Legt fest, ob die Daten nur in der Dialogbox eingetragen werden oder ob beim Speichern zusätzlich ein neuer Entwurf erzeugt und der Liste hinzugefügt wird. |

</div>

![](img/image141.png)
*Vorlage auswählen*

![](img/image142.png)
*Neuen Entwurf erstellen*

## Entwurf prüfen

Sie finden den frisch erzeugten Entwurf in der Liste wieder. Es kann einen Moment dauern, bis der Hintergrundprozess abgeschlossen ist; das System zeigt ein Reload-Symbol – ggf. klicken Sie den Reload-Button.

![](img/image143.png)
*WFU1: Liste der Wahlvorschlags- und Stimmzettelentwürfe*

Sichten Sie den Inhalt über die Vorschau oder einen Download und prüfen Sie die Datei sorgfältig mit Ihren Wahlteam-Mitgliedern.

![](img/image144.png)
*WFU1: Stimmzettel-Vorschau*

Prüfen Sie insbesondere:

- Sind alle Kandidaten vorhanden und wählbar (aktiv wahlberechtigt, alt genug)?
- Stimmen Geschlecht, Bilder, Motivationszitat und Alter?
- Haben Kandidaten Datenschutz-Einwände formuliert bzw. nutzen sie „Anschrift unterdrücken" – und spiegelt der Stimmzettel/Aushang das wider?
- Umfasst der Stimmzettel exakt **1 Seite** (keine leere Folgeseite durch einen Seitenumbruch)?

Bei Fehlern korrigieren Sie die Angaben: Kandidatenangaben in den Kandidaten-Stammdaten, Überschriften und Texte in der Dialogbox. Einen fehlerhaften Entwurf können Sie als Entwurf stehen lassen oder über das **Mülleimer-Symbol** löschen.

![](img/image146.png)
*WFU1: Statusleiste der Entwürfe*

## Status der Entwürfe

Die Listeneinträge durchlaufen ein Statusnetz:

- Nach der Erzeugung haben die PDF-Dateien den Status **Entwurf**.
- Über die Spalte **Alle Nächster Status** aktivieren Sie den jeweils nächsten Status.
- Setzen Sie **Verbindlicher Aushang/Wahlvorschlag**, sobald das Dokument als Aushang verwendet werden kann.
- Setzen Sie **Frei zum Druck** erst, wenn alle Aushänge und Rückmeldemöglichkeiten erschöpft sind und der endgültige Stimmzettel erzeugt ist.

![](img/image147.png)
*Status setzen*

Wiederholen Sie diese Schritte nach Ende der Rückmeldefristen. **Erst dann** erzeugen Sie den endgültigen Stimmzettel und stellen ihn auf **Frei zum Druck**. Anschließend setzen Sie den Status der Wahlfunktion WFU1 auf **Fertig**.
