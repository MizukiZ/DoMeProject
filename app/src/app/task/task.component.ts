import { Component, OnInit } from "@angular/core"
import { TaskService } from "./task.service"

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"]
})
export class TaskComponent implements OnInit {
  private tasks
  constructor(private taskService: TaskService) {}

  getTasks() {
    return this.taskService.get().subscribe(tasks => {
      this.tasks = tasks
      console.log(this.tasks)
    })
  }

  ngOnInit() {
    this.getTasks()
  }

  taskClick(task) {
    console.log(task)
  }

  statusBoxClick(event, taskID) {
    // get status of the task (true/false)
    const isCompleted = !event.target.checked
    this.taskService.put({ isCompleted }, taskID).subscribe(() => {
      this.getTasks()
    })
  }
}
