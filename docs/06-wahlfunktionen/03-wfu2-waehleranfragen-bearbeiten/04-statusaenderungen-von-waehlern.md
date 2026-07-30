---
title: "Statusänderungen von Wählern"
sidebar_position: 4
---

# Statusänderungen von Wählern

Wählen Sie die Person aus der Liste aus, indem Sie auf die Schaltfläche **Auswählen** klicken.

![](img/image164.png)
*WFU2: Person aus Trefferliste auswählen*

Daraufhin öffnet sich die **Detailansicht** der ausgewählten Person. Bei Bedarf können Sie die Angaben erneut überprüfen. Links finden Sie die Adressdaten, rechts Informationen zu Standortwechsel oder Notizen.

![](img/image165.png)
*WFU2: Detailansicht der Person*

## Status prüfen & Aktion ausführen

Unterhalb der Wählerdaten befindet sich der Abschnitt **Status prüfen & Aktion ausführen**.

![](img/image166.png)
*Übersicht: Status prüfen & Aktion ausführen*

Im oberen Abschnitt (1) finden Sie eine Übersicht, ob der Wähler zur Wahl zugelassen ist und welche Wahlkanäle am aktuellen Standort erlaubt sind. Ist ein Wähler nicht zugelassen, wird dies mit der Begründung aus dem Wählerverzeichnis angezeigt.

![](img/image167.png)
*Meldung: nicht zur Wahl zugelassen*

Darunter befinden sich die verfügbaren **Aktionen**, gegliedert nach Wahlkanälen (2): 1. Zeile Briefwahl, 2. Zeile Onlinewahl, 3. Zeile Urnenwahl / Wahl an Ort und Stelle.

![](img/image168.png)
*WFU2: Aktionen nach Wahlkanälen*

![](img/image169.png)
*WFU2: Aktionsschaltflächen*

Die Schaltflächen visualisieren durch ihre Farbe den Status der zugehörigen Aktion:

<div className="fieldTable">

| Farbe | Bedeutung |
| --- | --- |
| Dunkelblau | Löst eine Aktion aus (z. B. Beantragung von Briefwahlunterlagen). Nach dem Anklicken erscheint stets eine Bestätigungsabfrage. |
| Hellblau | Wahlkanäle, die am Standort allgemein aktiv sind, jedoch nicht auf Antrag angeboten werden – dienen ausschließlich zur Nachbearbeitung, z. B. bei glaubhaftem Verlust von Wahlunterlagen. |
| Grau | Aktuell nicht verfügbare Aktion. Da die Aktionen logisch aufeinander aufbauen (erst **beantragen**, dann **verschicken**), muss die vorherige Aktion zuerst erfolgen; ein Tooltip nennt den Grund. Hat ein Wähler bereits teilgenommen, gibt es keine blauen Flächen mehr. |
| Grün | Bereits gesetzte Statusinformation. |

</div>

![](img/image170.png)
*Übereilungsschutz: Briefwahlunterlagen beantragen*

| **Hinweis** ![](img/image9.png) |
| --- |
| Ein einmal gesetzter Status kann nicht zurückgenommen werden. Prüfen Sie daher vor der Bestätigung sorgfältig, ob die richtige Person ausgewählt wurde. |

![](img/image171.png)
*Beispiel: verfügbare und graue Schaltflächen*

![](img/image172.png)
*Nicht verfügbare (graue) Schaltflächen*

![](img/image173.png)
*WFU2: bereits gesetzte Status (grün)*

Alle bereits durchgeführten Aktionen werden im **Wähler-Log** dokumentiert und können dort nachvollzogen werden.

![](img/image174.png)
*WFU2: Wähler-Log*

| **Hinweis** ![](img/image9.png) |
| --- |
| Die direkte Ausgabe einzelner Briefwahlunterlagen im Wählerservice ist nur möglich, wenn entsprechende Vorlagen im System hinterlegt sind und der Benutzer über die notwendigen Berechtigungen verfügt. In der Regel wird lediglich der Antrag erfasst. Die eigentliche Erstellung erfolgt später gesammelt über die Wahlfunktion **WFU3 „Briefwahlunterlagen generieren"**. |

## Erstellung einzelner Wahlunterlagen

Im Folgenden wird beispielhaft anhand einer Briefwahlunterlage erläutert, wie Wahlunterlagen für einzelne Wähler erstellt und deren Status korrekt verbucht werden.

![](img/image175.png)
*Status setzen: Briefwahlunterlagen beantragen*

Klicken Sie auf **„Briefwahl-Unterlagen beantragen"** und bestätigen Sie den Vorgang im Dialog mit „**Ja, Unterlagen beantragen**".

![](img/image170.png)
*Übereilungsschutz: Briefwahlantrag*

![](img/image176.png)
*WFU2: Briefwahlunterlagen erzeugen*

Nach Freischaltung des nächsten Schritts erstellen Sie die personalisierte Briefwahlunterlage, sofern eine entsprechende Vorlage hinterlegt ist. Im Anschluss öffnet sich erneut ein Bestätigungsdialog, den Sie ebenfalls mit **Wahlunterlagen erstellen** bestätigen.

Laden Sie das erzeugte Dokument herunter (1), prüfen Sie es sorgfältig und drucken Sie es aus. Händigen Sie danach den **Briefwahlschein** sowie die übrigen **Wahlunterlagen** (z. B. Briefwahlstimmzettel) der Person aus oder **versenden** Sie diese per Post. Setzen Sie anschließend den Status **„Briefwahl-Unterlagen ausgegeben / verschickt"** (2).

![](img/image177.png)
*WFU2: Dokument herunterladen und Status verbuchen*

![](img/image178.png)
*WFU2: Status der Wahlunterlagen verbuchen*

Nach Eingang der Rücksendung suchen Sie den Wähler erneut und setzen den Status **„Briefwahl-Teilnahme buchen"**. Es erscheint erneut ein Bestätigungsdialog, den Sie mit „**Ja, Unterlagen wurden ausgegeben / verschickt**" bestätigen. Dieser Status dient zu Dokumentationszwecken und hat keinen Einfluss auf die übrigen Wahlkanäle.

Der letzte Status **„Korrekte Briefwahl-Teilnahme buchen"** ist erst nach Abschluss der Wahlhandlungen während der Auszählungsphase verfügbar. In diesem Schritt muss die Rücksendung geöffnet und auf ihre Korrektheit sowie gegen eine Teilnahme über die anderen Wahlkanäle geprüft werden.
