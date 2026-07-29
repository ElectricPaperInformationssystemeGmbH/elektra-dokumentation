---
title: "Sondersituation für MAV-Wahlen – Import / Export von Wählerdaten"
sidebar_position: 1
---

# Sondersituation für MAV-Wahlen – Import / Export von Wählerdaten

Wie zuvor erwähnt, kann in den **Projektvorgaben** bzw. **Privilegien** festgelegt werden, dass Ihnen die Funktionalitäten **Download/Upload Wahlberechtigte** zur Verfügung stehen:

![](img/image104.png)
*Import- und Export-Funktionen für Wählerdaten*

Die Idee ist, dass in diesem Falle die Pflege des Wählerverzeichnisses nicht durch zentrale Meldedaten unterfüttert ist, sondern vielmehr in Eigenregie am **Standort** organisiert werden muss. Dies ist z.B. bei MAV-Wahlen der Fall. Um die Funktion zu nutzen, laden Sie zunächst eine Musterdatei mit **Download Wahlberechtigte** herunter.  Sie erhalten eine Excel-Datei mit sämtlichen Angaben und Feldern gemäß Vorgabe.

![](img/image105.png)
*Wählerdaten hoch- und herunterladen*

Öffnen Sie die Vorlage mit Excel.

![](img/image106.png)
*Wähler-Importvorlage in Excel öffnen*

Der Aufbau der Wähler-Importvorlage sieht wie folgt aus:

![](img/image107.png)
*Aufbau der Wähler-Importvorlage*

| **Hinweis** ![](img/image9.png) |
| --- |
| Der Upload von neuen Wählerdaten wird vom System unterbunden bzw. gar nicht angeboten, wenn bereits eine Onlinewahl angelegt wurde. Nach Beginn der Wahl ist das Hinzufügen und Löschen von Wählern in der Regel nicht mehr erlaubt! |

- Die erste Zeile in der Excel-Datei enthält den Namen der Spalte.
- Die zweite Zeile enthält das den technischen Feldnamen in der **Elektra**-Datenbank, die den Inhalt aufnehmen soll.
- Es können Spalten aus der Liste herausgelöscht werden.
- Auch die Reihenfolge kann geändert werden, ohne dass Einschränkungen entstehen.

![](img/image108.png)
*Spaltenreihenfolge der Importvorlage*

Eine detaillierte Erläuterung zu der Bedeutung der einzelnen Spalten der Importdatei finden Sie in der folgenden Tabelle.


| Spaltenname | Technischer Spaltennamen | Beispielhafter Inhalt | Hinweise |
| --- | --- | --- | --- |
| Bezirk | district | Bezirk Speckhorn | Kurztitel des Bezirks. Eine Relation wird nur gesetzt, wenn dieser **exakt** übereinstimmt mit angelegten Bezirken. Dieses Feld wird nicht importiert, wenn der Wahlmodus am Standort ‘Einheitswahl’ ist. |
| Wahlraum | votingLocation | Grundschule Sinsen | Wahlraum. Eine Relation wird nur gesetzt, wenn der Text **exakt** mit bereits mit dem Kurztitel eines bereits angelegten Wahlraums entspricht.  Sonst wird der Wert beim Import ignoriert. |
| Lfd. Nr. | electorNumber | 00082455 | Eindeutige Nummer |
| Geburtsdatum | birthday | 13.06.1979 |   |
| Geburtsort | placeOfBirth | Gelsenkirchen |   |
| Standortwechsel | changeOfLocation | 0 | Repräsentiert den Status **Standortwechsel** 0 = Standortwechsel liegt nicht vor / 1 = Standortwechsel liegt vor. |
| Datum | changeOfLocationDate | 27.07.2024 | Wann wurde der Status **Standortwechsel** gesetzt? |
| Infos zum Standortwechsel | changeOfLocationDescription | Betriebswechsel | Notizfeld für Informationen zum **Standortwechsel.** |
| Nicht für Wahl zugelassen | electionDenied | 0 | Status, ob der Wähler sein Wahlrecht ausüben darf. 0 = Zur Wahl zugelassen /  1 = Nicht zur Wahl zugelassen |
| Grund | electionDeniedReason | Kündigung | Notizfeld für Begründungen zur Sperrung eines Wählers |
| Briefwahl-Unterlagen beantragt | electionApplied | 1 | Wurden Briefwahlunterlagen beantragt? 0 = Nein / 1 = Ja |
| Briefwahl-Unterlagen beantragt am | electionAppliedAt | 28.08.2024 | Wann wurden Briefwahlunterlagen beantragt? |
| Briefwahl-Unterlagen ausgegeben/verschickt | electionDocumentsIssuedOrSent | 1 | Wurden Briefwahlunterlagen ausgegeben? 0 = Nein / 1 = Ja |
| Briefwahl-Unterlagen ausgegeben/verschickt am | electionDocumentsIssuedOrSentAt | 04.09.2024 | Wann wurden Briefwahlunterlagen ausgegeben? |
| An Briefwahl teilgenommen | participatedInPostalVote | 0 | Hat der Wähler an der Briefwahl teilgenommen (Briefwahlunterlagen sind eingegangen)? 0 = Nein / 1 = Ja |
| An Briefwahl teilgenommen am | participatedInPostalVoteAt | 11.09.2024 | Wann wurde der Brief empfangen? |
| Korrekt an Briefwahl teilgenommen | participatedInPostalVoteValid | 0 | Hat der Wähler korrekt an der Briefwahl teilgenommen? Dies ist mit Ja zu beantworten, wenn während der Auszählung alle Unterlagen (Briefwahlschein und verschlossener Stimmzettelumschlag) als formal korrekt erachtet wurden.   0 = Nein / 1 = Ja |
| Korrekt an Briefwahl teilgenommen am | participatedInPostalVoteValidAt | 21.09.2024 | Wann wurde der Wahlbrief in die Urne gegeben. |
| An Urnenwahl teilgenommen | participatedInBallotVote | 0 | Hat der Wähler an der Urnenwahl teilgenommen?  0 = Nein / 1 = Ja |
| An Urnenwahl teilgenommen am | participatedInBallotVoteAt | 28.01.2024 | Wann erschien der Wahlberechtigte im Wahlbüro/an der Urne. |
| Onlinewahl-Unterlagen beantragt | onlineElectionApplied | 0 | Wurden Online-Wahlunterlagen beantragt? 0 = Nein / 1 = Ja |
| Onlinewahl-Unterlagen beantragt am | onlineElectionAppliedAt | 04.09.2024 | Wann wurden die Online-Wahlunterlagen beantragt? |
| Onlinewahl-Unterlagen ausgegeben/verschickt | onlineElectionDocumentsIssuedOrSent | 0 | Wurden Online-Wahlunterlagen gedruckt und versandt?  0 = Nein / 1 = Ja |
| Onlinewahl-Unterlagen ausgegeben/verschickt am | onlineElectionDocumentsIssuedOrSentAt | 28.01.2024 | Wann wurden die Online-Wahlunterlagen gedruckt oder herausgesendet? |
| Korrekt an Onlinewahl teilgenommen | participatedInOnlineVoteValid | 0 | Hat der Wähler korrekt an der Onlinewahl teilgenommen? Dieses ist Merkmal wird in der Regel durch das angeschlossene Onlinewahlsystem gesetzt. 0 = Nein / 1 = Ja |
| Korrekt an Onlinewahl teilgenommen am | participatedInOnlineVoteValidAt | 04.09.2024 | Wann fand die Online-Wahlteilnahme statt. |
| Pfarrbriefzustellbezirk | letterDeliveryDistrict | 1001 | Kürzel oder ID zur Bündelung von Briefsendungen, die lokal in Eigenregie ausgetragen werden. |
| Anrede | salutation | 2 | Geschlechtskennzeichen: 1 = Herr / 2 = Frau / 3 = Divers /  0 oder leer = unbekannt. |
| Titel | title | Dr. | Akademischer Grad |
| Vorname | firstname | Leonie |   |
| Nachname | lastname | Bergmann |   |
| Firma | company | Caritas gGmbH Recklinghausen | Institution/Betrieb/Abteilung |
| Interne Notiz | contactComment | Kurzfristig zugelassen | Kommentarfeld zur freien Verwendung |
| Strasse | street | Sternengasse | Strasse |
| Nummer | streetNumber | 24 | Hausnummer |
| Nummerzusatz | streetNumberAddition | c | Hausnummer-Zusatz |
| Stadt | city | Recklinghausen | Ort |
| Plz | zip | 45659 | Postleitzahl |
| Organisation | organization | Caritas gGmbH Recklinghausen | Bei Welcher Organisation/Abteilung arbeitet der Wähler – falls dieses nötig ist. |
| Land | country | DE |   |
| Telefon | phone | 09712/72977531 |   |
| Fax | fax | 09712/728372-31 |   |
| Mobil | mobile | 0171/8736472 |   |
| Mobil (Privat) | mobilephone | 0171/2534678 |   |
| E-Mail | E-Mail | Leo.Bergmann@web.de |   |
| Erreichbar (Tage/Zeiten) | reachability | Di. – Do.: 8 bis 17 Uhr |   |

**Automatisch angewendete Logiken:**

Die zahlreichen Flags im Wählerverzeichnis unterliegen einer Logik, die von der Software automatisch angewendet wird. Deutlich wird Sie durch die eingeblendeten Plausibilität-Felder hinter den Wahlflags beispielsweise im Wählerservice.

- Es werden nur die Wahlkanäle angeboten, die im Projekt bzw. auf Standortebene verfügbar gemacht wurden.
- Es kann nur ein Kanal bis zur erfolgreichen Teilnahme geführt werden, auch wenn mehrere Anträge und Wahlmöglichkeiten vorliegen.
- Die Ausgabe von Unterlagen wird unterbunden, wenn schon Wahlkanäle genutzt wurden.
- Es gibt Warnungen, wenn Aufgaben wiederholt durchgeführt werden.

**Historie/Audit-Log**

Beim Import von Wählerdaten wird das bestehende Wählerverzeichnis komplett gelöscht. Es gibt aber entsprechende Audit-Records über die Löschungen.
