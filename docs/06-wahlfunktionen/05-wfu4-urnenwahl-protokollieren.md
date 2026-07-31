---
title: "WFU4 Urnenwahl protokollieren"
sidebar_position: 5
---

# WFU4 Urnenwahl protokollieren

Sofern eine Urnenwahl durchgeführt wird, muss dieser Vorgang dokumentiert werden. Um die Stimmabgabe für die Wähler möglichst flexibel und komfortabel zu gestalten, können Urnenwahlen über einen längeren Zeitraum stattfinden. Dabei können mehrere Wahlräume in unterschiedlichen Bezirken, zu verschiedenen Zeiten und durch verschiedene Mitglieder des Wahlteams betreut werden. In diesen Fällen unterstützt **Elektra** die strukturierte Erfassung und die lückenlose Nachvollziehbarkeit der Abläufe.

Wie alle dokumentarischen Wahlfunktionen beginnt WFU4 mit Arbeitshilfen und dem Plausibilitätsmodul; die allgemeine Bedienung ist im [Grundkonzept für dokumentarische Wahlfunktionen](./grundkonzept-fuer-dokumentarische-wahlfunktionen) beschrieben.

Zentrales Element dieser Wahlfunktion ist die Liste der Urnenwahlprotokolle. Das System stellt sie als Matrix aus Urnenwahltagen und Wahlräumen dar.

![](img/image187.png)
*WFU4: Urnenwahl protokollieren (Übersicht)*

In der Matrix sind Grün, Orange und Rot Status-Informationen; Dunkelblau sind die „**Stifte**" zum Öffnen der Dialogbox mit Angaben und Notizen.

## Protokoll erzeugen und speichern

Wählen Sie einen Eintrag aus der Matrix, indem Sie auf das **Stift-Symbol** klicken.

![](img/image1871.png)
*WFU4: Eintrag zur Bearbeitung öffnen*

Bearbeiten Sie den Inhalt im Dialog:

![](img/image189.png)
*WFU4: Bearbeitungsdialog Urnenwahlprotokoll*

<div className="fieldTable">

| Feld | Bedeutung |
| --- | --- |
| Wahllokal an dem Tag | Legt fest, ob für diesen Tag ein Protokoll entstehen soll, um die Wahlhandlung im Wahlraum zu protokollieren. |
| Datum | Zeigt das Datum an, für welches die Wahlhandlung im Wahllokal protokolliert werden soll (nicht veränderbar) |
| Wahlraum | Zeigt den Wahlraum an, für den das Protokoll angelegt werden soll (nicht veränderbar) |
| Wahlteam-Mitglieder | Welche Vertreter des Wahlvorstands sind mit Durchführung und Protokollierung beauftragt? |
| Notizen / besondere Vorkommnisse | Freitextfeld zum Festhalten besonderer Begebenheiten. |
| Wie wurde mit der Wahlurne am Ende des Wahltags verfahren? | Dokumentieren Sie, wie mit der Wahlurne umgegangen wurde. |
| Fertige Dokumente | Drop-Zone für das Hochladen fertig unterzeichneter Protokolle. |

</div>

Speichern Sie den Inhalt des Dialogs. Entsprechend Ihren Angaben ändert sich der Status des Eintrags in der Matrix.

Erzeugen Sie anschließend das Protokoll, in dem Sie auf die Schaltfläche **Protokoll erstellen klicken**. Es öffnet sich ein Dropdown-Menü, aus dem Sie die gewünschte Vorlage auswählen können.

![](img/image1921.png)
*WFU4: Auswahl der Vorlage*

Daraufhin öffnet sich ein Dialog. Wählen Sie die Schaltfläche **Generieren** aus.

<div style={{maxWidth: '900px'}}>
![](img/image193.png)
*WFU4: Generierungsdialog*
</div>

Ergänzen und unterzeichnen Sie das Protokoll, wo nötig, und fügen Sie notfalls Anlagen hinzu. Scannen oder fotografieren Sie das unterzeichnete Protokoll, klicken Sie erneut auf das **Stift-Symbol** und laden Sie das Dokument hoch. Speichern Sie die Eingaben.

Durch das Hochladen der Datei stellt sich der Status des Feldes in der Matrix automatisch auf **fertig**.

<div style={{maxWidth: '900px'}}>
![](img/image1951.png)
*WFU4: Abgeschlossener Urnenwahltag*
</div>

| **Hinweis** ![](img/image9.png) |
| --- |
| Sofern die Option von der Projektleitung freigeschaltet wurde, können Sie alternativ die Option **Dokument liegt vor (papierbasiert)** auswählen um den Status des Wahltages auf **fertig** zu stellen. |

## Gesamtstatus, Notizen und Kommentare

Wie bei den meisten Wahlfunktionen können Sie den Status pflegen, Notizen eingeben und Kommentare mit Zeitstempel und Namenskürzel anlegen (siehe [Grundkonzept](./grundkonzept-fuer-dokumentarische-wahlfunktionen)).

![](img/image196.png)
*WFU4: Status und Kommentare pflegen*
