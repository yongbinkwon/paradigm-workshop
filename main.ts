import { Task } from "./task.ts";

function testyBesty() {
  return "Imperativ kode er best";
}

function scheduleTasks(tasks: Task[]) {
  let workload: Task[] = [];

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    let isOverlapping = false;

    for (let j = 0; j < workload.length; j++) {
      if (
        task.startTime < workload[j].endTime &&
        workload[j].startTime < task.endTime
      ) {
        isOverlapping = true;
        break;
      }
    }

    if (!isOverlapping) {
      workload = [...workload, task];
    }
  }

  return workload;
}

const tasks: Task[] = [
  new Task(9, 10, "high"),
  new Task(10, 12, "medium"),
  new Task(11, 13, "low"),
  new Task(12, 14, "high"),
  new Task(13, 15, "medium"),
  new Task(14, 16, "low"),
  new Task(15, 17, "high"),
  new Task(16, 18, "medium"),
  new Task(17, 19, "low"),
  new Task(18, 20, "high"),
];

const workload = scheduleTasks(tasks);
console.log(workload);
