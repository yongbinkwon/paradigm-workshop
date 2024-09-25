import { Flight } from './flight.js'

function testyBesty() {
    return "Deklarativ kode er best"
}

console.log("Bin prøver seg på Javascript")
console.log(testyBesty())
const flight = new Flight("Oslo", "Seoul", 5000, "Delta", 600)
console.log(flight)