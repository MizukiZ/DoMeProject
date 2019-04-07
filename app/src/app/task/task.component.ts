import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { TaskService } from "./task.service"

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"]
})
export class TaskComponent implements OnInit {
  // tasks data form home page
  @Input() tasks
  @Output() tasksOut = new EventEmitter()
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    // this.getTasks()
  }

  statusBoxClick(event, taskID) {
    // get status of the task (true/false)
    const isCompleted = !event.target.checked
    this.taskService.put({ isCompleted }, taskID).subscribe(() => {
      // tell homepage to update the tasks
      this.tasksOut.emit("update")
    })
  }
}
