import { Task } from './task.js'

function testyBesty() {
    return "Imperativ kode er best"
}

console.log("Bin prøver seg på Javascript")
console.log(testyBesty())
const task = new Task(0, 2, "high")
console.log(task)