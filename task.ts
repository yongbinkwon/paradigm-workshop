type Priority = "high" | "medium" | "low";

export class Task {
  startTime: number;
  endTime: number;
  priority: Priority;

  constructor(startTime: number, endTime: number, priority: Priority) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.priority = priority;
  }
}
