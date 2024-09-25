# Imperativ programmering: Oppgave
Du er en deadbeat ubrukelig person som har masse ting som må gjøres. Men som det prokrastinerende søppelet av en person som du er, så velger du heller å gjøre noe annet. 
Heldigvis så velger du å gjøre noe litt nyttig med din ufortjente fritid. Din oppgave er å lage en task-scheduler som gir deg den optimale rekkefølgen å gjøre de oppgavene du aldri kommer til å gjøre.

## Input
En liste av Task-objekter, finnes i task.js

## Nødvendig funksjonalitet
* returner den kombinasjon av tasks som ikke overlapper og som er størst mulig (flest mulig tasks som ikke overlapper, sett bort ifra prioritet)
* Ta med prioritet i beregningen => høy/middels/lav = 5/3/1 "poeng"
* Legg til mulighet for forskjellige stratgier for beregning av prioritet
* Legg til task-type i task-klassen (brains/mixed/brawn)
* En task som er brains kan gjøres i parallell med en som er brawn
* Nå kan en ekstra person hjelpe deg med taskene dine! 
* To forskjellige folk kan enten gjøre forskjellige tasks i parallell eller gjøre samme task på halvparten av tiden (er det ikke sånn at to utviklere = jobben blir gjort på halvparten av tiden???)