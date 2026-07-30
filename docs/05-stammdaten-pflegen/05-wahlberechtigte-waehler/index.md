---
title: "Wahlberechtigte / Wähler"
sidebar_position: 0
---

# Wahlberechtigte / Wähler

Aktiv Wahlberechtigte werden in das System in der Regel aus Quellsystemen (Meldewesen) importiert und zentral bereitgestellt. Lediglich weitere Merkmale, wie die Ausgabe von Briefwahlunterlagen oder die Durchführung von **Standortwechseln** (Wunschwähler) etc. werden während der Wahlvorbereitung in der Software ergänzt. Die Bearbeitung von Wählerstammdaten ist in der Regel nicht vorgesehen. Das Anlegen oder Löschen von Wählern ist meist über Privilegien von der Projektleitung deaktiviert und nur zentralseitig möglich.

Für die Interaktion steht wie für alle Entitäten eine Tabellenanzeige mit Suchmöglichkeit und eine Bearbeitungsmaske bereit.

![](img/image102.png)
*Wähler verwalten (Tabelle)*

Ober- und Unterhalb der Tabelle finden Sie ggf. mehrere Interaktionsmöglichkeiten:

- **Download Wahlberechtigte:** Ermöglicht den Download des Wählerverzeichnisses des ausgewählten Standorts. Die Exportdatei enthält neben den Wählerdaten auch die erforderlichen technischen Header. Sie dient dazu, Änderungen am Wählerverzeichnis vorzunehmen und dieses anschließend wieder hochzuladen. Ist für den Standort noch kein Wählerverzeichnis vorhanden, wird stattdessen eine Musterdatei erstellt. In diese können Sie Ihr Wählerverzeichnis einfügen und anschließend hochladen. Diese Funktion wird in der Regel nur bei MAV-Wahlen verwendet.
- **Upload Wahlberechtigte:** Sofern das Wählerverzeichnis nicht zentral bereitgestellt wird, kann es über diese Funktion hochgeladen werden. Die hochzuladende Datei muss dem Format der zuvor über **Download Wahlberechtigte** erzeugten Export- bzw. Musterdatei entsprechen. Diese Funktion wird ebenfalls in der Regel nur bei MAV-Wahlen verwendet.
- **Wählerverzeichnis herunterladen:** Sollte beispielsweise das Wählerverzeichnis am Wahltag in gedruckter Form vorliegen müssen, kann es über diese Funktion heruntergeladen werden. Der Export kann sowohl als CSV als auch als XLSX gespeichert werden. Aufgrund der sensiblen Daten, die in dieser Datei vorhanden sind, ist diese mit einem Passwort geschützt, welches Ihnen von der Projektleitung mitgeteilt wird.

Haben Sie das Privileg zur Bearbeitung von vorhandenen Wählern, können Sie die Bearbeitungsmaske eines Wählers über das **Stift-Symbol** aufrufen.

<div style={{maxWidth: '500px'}}>

![](img/image103.png)
*Bearbeitungsmaske eines Wählers*

</div>

<div className="fieldTable">

| Feld | Bedeutung |
| --- | --- |
| Bezirk | Zuordnung zu einem Wahlbezirk – nur möglich, wenn der Standort auf den **Wahlmodus Bezirkswahl** eingestellt ist. |
| Person | Anrede, Titel, Vor- und Nachname, Geburtsdatum und Geburtsort. Für das Geburtsdatum erfolgt eine Plausibilisierung anhand der Vorgaben auf Projektebene. |
| Standortwechsel | Flag zum Vermerken von Wahlberechtigten, die durch einen dokumentierten Standortwechsel im Wählerverzeichnis hinzugefügt oder gesperrt werden. Wird automatisch gesetzt, sobald ein Standortwechsel über die **Wahlfunktion 2** durchgeführt wurde. |
| Nicht zur Wahl zugelassen | Flag, das festlegt, dass der Wähler am Standort nicht wählen darf. Die Gründe sind in der internen Notiz zu hinterlegen. |
| Interne Notiz | Feld für Bemerkungen zur Sachbearbeitung. |
| Adresse | Die üblichen Adressfelder. |
| Kontakt | Die üblichen Kontaktfelder. |
| Urnenwahl | Wahlberechtigte können vorab Wahlräumen zugeordnet werden. Nimmt der Wähler an einer Urnenwahl teil und wird die Teilnahme über den Wählerservice gebucht, wird der entsprechende Wahlraum festgehalten. |
| Briefwahl | Vier Stati, jeweils mit Datum dokumentiert: Antragstellung, Unterlagen-Ausgabe, Briefwahl-Rücklauf/Teilnahme sowie korrekte Teilnahme (Wahlbrief in Urne abgelegt). |
| Onlinewahl | Drei Stati, jeweils mit Datum protokolliert: Antragstellung, Unterlagen-Ausgabe sowie korrekte Teilnahme (verbucht über das Online-Wahlsystem). |

</div>

| **Hinweis** ![](img/image9.png) |
| --- |
| Sollten Sie keinen Zugriff auf die Bearbeitung von Wählern haben, können Sie trotzdem über die **Wahlfunktionen 2 Wahlanfragen bearbeiten** und **3 Wahlunterlagen generieren** mit diesen interagieren. Alle Aktivitäten in Wählerstammdaten werden vom System in einem Audit-Trail zu Nachweiszwecken vermerkt. |

<!-- doccards:auto -->
## In diesem Kapitel

<DocCardList />
