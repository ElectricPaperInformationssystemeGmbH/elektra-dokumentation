---
title: "Onboarding von Kandidaten"
sidebar_position: 1
---

# Onboarding von Kandidaten

In **Elektra** stehen zwei Möglichkeiten zur Verfügung, um Kandidaten an einem Standort hinzuzufügen. Sie können entweder die Funktion **In Kandidatenliste aufnehmen** (zu finden in der Ansicht **Wähler**) verwenden, um auf Basis eines Wahlberechtigten einen Kandidaten zu erstellen, oder über **Kandidat** **zum Standort hinzufügen** (direkt in der **Kandidaten**ansicht) einen Kandidaten ohne Vorlage manuell anlegen.

In beiden Fällen öffnet sich der Dialog **Kandidat hinzufügen**, welcher im Folgenden beschrieben wird:

![](img/image112.png)
*Kandidat hinzufügen (Ansicht ohne Eingaben)*

![](img/image113.png)
*Kandidat ändern: Status, Person und Motivation*

**Kandidatenstatus**: Ein Dropdown-Menü zur Kennzeichnung des aktuellen Standes der Kandidatur. Zur Auswahl stehen: Vorgeschlagen, Angefragt, lt. Statuten nicht wählbar, abgesagt und zugesagt.

Der Status **zugesagt** ist mit einer Systemlogik hinterlegt, so dass nur Kandidaten, die diesen Status haben auf Stimmzetteln und Aushängen auftauchen. Jede Option wird zur besseren Übersicht farblich mit einem Symbol hinterlegt.

![](img/image114.png)
*Verwaltung der Kandidatenstatus-Werte*

Welche Status-Werte zur Auswahl stehen und wie sie farblich dargestellt werden, wird projektweit von der Projektleitung festgelegt und ist an dieser Stelle nicht durch Standortverantwortliche änderbar.

**Dokumentationsstatus**: Ein Dropdown-Menü, das den Bearbeitungsstand der Kandidatur-Unterlagen festhält: Unterlagen ausgegeben, Unterlagen zurückerhalten, Fertig dokumentiert sowie Fertig dokumentiert und hochgeladen.

![](img/image115.png)
*Verwaltung der Dokumentationsstatus-Werte*

| **Hinweis** ![](img/image9.png) |
| --- |
| **So erzeugen Sie eine schlüssige Kandidaten-Dokumentation**: (Aktion aus der Liste aufrufen) Kandidaten mit seinen Stammdaten anlegen. Dokumentvorlage aufrufen, Dokument ausdrucken. Dokument unterschreiben lassen Dokument scannen, hochladen und Status setzen |

Auch die Werte für den Dokumentationsstatus werden ebenso projektweit vorgegeben.

<div className="fieldTable">

| Feld | Bedeutung |
| --- | --- |
| Anrede | Auswahl über Radiobuttons zwischen unbekannt, Herr, Frau und Divers. |
| Titel | Textfeld für einen akademischen oder sonstigen Titel (bis zu 30 Zeichen). |
| Vorname | Pflichtfeld zur Eingabe des Vornamens. |
| Nachname Zusatz | Textfeld für einen Namenszusatz (z. B. „von" oder „van"). |
| Nachname | Pflichtfeld zur Eingabe des Nachnamens. |
| Beruf | Textfeld zur Eingabe der Berufsbezeichnung (bis zu 60 Zeichen). |
| Beruf darf veröffentlicht werden | Kontrollkästchen, das festlegt, ob die Berufsangabe in Wahlunterlagen ausgegeben werden darf. |
| Geburtsdatum | Pflichtfeld zur Eingabe des Geburtsdatums. Prüft automatisch das für die Wahl erforderliche Mindestalter zum Wahlstichtag und zeigt den spätesten zulässigen Geburtstag als Hinweis an. |
| Alter darf veröffentlicht werden | Kontrollkästchen, das festlegt, ob das (aus dem Geburtsdatum errechnete) Alter in Wahlunterlagen ausgegeben werden darf. |
| Motivation | Mehrzeiliges Freitextfeld für eine kurze Motivation zur Kandidatur (bis zu 160 Zeichen). |

</div>

![](img/image116.png)
*Kandidat ändern: Nutzerbild und interne Notiz*

<div className="fieldTable">

| Feld | Bedeutung |
| --- | --- |
| Nutzerbild | Uploadmöglichkeit für ein Kandidatenbild inklusive Zuschneide- und Rotationsfunktion. Unterstützt werden JPEG- oder PNG-Bilder (mit systemseitiger Dateigrößenbeschränkung; alle Uploads durchlaufen einen Virenscanner). Ein hochgeladenes Bild kann heruntergeladen oder gelöscht werden; ohne Bild zeigt das System eine geschlechtsspezifische Ersatzdarstellung (Mann/Frau/Divers/unbekannt). Diese Bilder bzw. Ersatzbilder werden auch bei der Erstellung von Stimmzetteln und Wahlvorschlägen verwendet. |
| Interne Notiz | Mehrzeiliges, rein internes Freitextfeld, das nicht in Dokumentvorlagen erscheint. |

</div>

![](img/image117.png)
*Kandidat ändern: Adresse*

<div className="fieldTable">

| Feld | Bedeutung |
| --- | --- |
| Organisation/Institution/Abteilung | Freitextfeld für eine zusätzliche Adresszeile, sofern der Kandidat einer Organisation, Institution oder Abteilung zugeordnet werden soll. |
| Straße, Nummer, Nummerzusatz, Postleitzahl, Stadt | Felder zur Erfassung der postalischen Anschrift des Kandidaten. Stadt ist ein Pflichtfeld. |
| Land | Dropdown-Menü zur Auswahl des Landes, vorbelegt mit Deutschland. |
| Adresse darf veröffentlicht werden | Kontrollkästchen, das festlegt, ob die Anschrift in Wahlunterlagen ausgegeben werden darf. |

</div>

![](img/image118.png)
*Kandidat ändern: Kontakt*

<div className="fieldTable">

| Feld | Bedeutung |
| --- | --- |
| E-Mail, Telefon, Fax, Mobil, Mobil (Privat) | Felder zur Erfassung der Kontaktdaten des Kandidaten. |
| Erreichbar (Tage/Zeiten) | Freitextfeld zur Angabe, an welchen Tagen und zu welchen Zeiten der Kandidat erreichbar ist. |
| Dokumente | Uploadbereich (per Drag-and-drop oder Dateiauswahl) für beliebige Dokumente zum Kandidaten, inklusive einer Übersichtstabelle (Name/Vorschau/Aktion) der bereits abgelegten Dokumente. Es können maximal 10 Dateien hinterlegt werden. |

</div>

![](img/image119.png)
*Kandidat ändern: Dokumente*

Danach wird der Kandidat in der Übersichtstabelle angezeigt.
