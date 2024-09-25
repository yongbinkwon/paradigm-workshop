# Deklarativ programmering: Oppgave
Du har fått i oppdrag av pop-sensasjon Saylor Twift om å lage en søkemotor for å hjelpe henne med å finne best mulig fly for å rekke alle sine konserter + 
heie på kjæresten sin iløpet av NFL sesongen.

## Input
En liste av Flight-objekter, som beskrevet i flight.js

## Nødvendig funksjonalitet
* Filtrer fly basert på origin eller destination
* Sorter fly basert på ticketPrice eller duration
* Legg til en start-tid i Flight. Filtrer basert på start-time (fly som drar før/etter et tidspunkt)
* Filtrer basert på når flyet lander (fly som ankommer før et tidspunkt)
* Legg til mulighet for å gi fly som mellomlander som forslag (oslo -> frankfurt + frankfurt -> seoul)
* Legg til mulighet for flere filtre i ett søk (under 1000kr OG (destination=Seoul ELLER destination=Frankfurt) OG flyet lander før 26.06.24 12:00)