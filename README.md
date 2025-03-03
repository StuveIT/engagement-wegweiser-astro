# Engagement Wegweiser
![Engagement Wegweiser Screenshot](doc/Engagement%20Wegweiser.png)
Der Engagement Wegweiser der Studierenden Vertretung der Universität Konstanz hat zum Ziel, den Studierenden verschiedene Hochschulgruppen und hochschulpolitische Institutionen zu empfehlen, in denen sie sich mit anderen Studierenden über ihre Interessen austauschen können bzw. sich für diese Interessen einsetzen können.

Der neue Engagement Wegweisers funktioniert jetzt mit [Astro](https://astro.build). Im Herzen wird die Applikationslogik, also das was man eigentlich als den Engagement Wegweiser wahrnimmt, über [Vue](https://vuejs.org)-Komponenten umgesetzt.

## Applikation
Die Hauptapplikation ist das, was man als Nutzer des Engagement Wegweisers sieht.

### Funktionsweise
Wird die `/app`-Route besucht, befindet man sich unmittelbar in der eigentlichen Applikation. Man startet im Fragebogen:

#### Fragebogen
Im Fragebogen wird ein vordefinierter Fragenkatalog mit verschiedenen Antwortmöglichkeiten ausgefüllt. Mit jeder Antwortmöglichkeit ist eine Wertung verbunden. Diese Wertung teilt sich in eine vordefinierte Anzahl von Kategoriewertungen auf.

#### Gewichtung
Auf der Gewichtungsseite lassen sich die Fragen, die für den Nutzer am wichtigsten erscheinen, für eine doppelte Wertung markieren. Gleichzeitig dient die Gewichtungsseite als Übersicht der abgegebenen Antworten.

#### Resultat
Auf der Ergebnisseite werden die Wertungen der abgegebenen Antworten zu einer Gesamtwertung aufaddiert. Diese Gesamtwertung wird dann mit dem Katalog der Gremien, Hochschulgruppen und deren Posten abgeglichen, damit eine nach Übereinstimmung geordnete Liste angezeigt werden kann.

Durch Klicken lassen sich mehr Informationen über die gelisteten Engagementmöglichkeiten einsehen.

## Editor
Für eine interaktive Konfiguration des Engagement Wegweiser existiert ein Editor.

## Astro: 🧞 Befehle

Alle Befehle werden vom Projektordner aus in einem Terminal ausgeführt:

| Befehl                    | Aktion                                             |
| :------------------------ | :------------------------------------------------- |
| `npm install`             | Installiert alle nötigen Pakete                    |
| `npm run dev`             | Startet einen lokalen Test-server `localhost:4321` |
| `npm run build`           | Baut die Website für Production `./dist/`          |
| `npm run preview`         | Vorschau der gebauten Website vor dem Deployment   |

Bei weiteren Fragen zu Astro, konsultiere die [Dokumentation](https://docs.astro.build) oder den [Discord server](https://astro.build/chat).
