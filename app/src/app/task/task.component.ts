import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { TaskService } from "./task.service"
import { ModalController } from "@ionic/angular"
import { ViewTaskComponent } from "../view-task/view-task.component"

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"]
})
export class TaskComponent implements OnInit {
  // tasks data form home page
  @Input() tasks
  @Output() tasksOut = new EventEmitter()

  // priority setting array
  public prioritySetting = {
    1: { color: "light", word: "Very low" },
    2: { color: "medium", word: "Low" },
    3: { color: "success", word: "Middle" },
    4: { color: "warning", word: "High" },
    5: { color: "danger", word: "Very high" }
  }
  constructor(
    private taskService: TaskService,
    public modalController: ModalController
  ) {}

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

  async taskClick(task) {
    const modal = await this.modalController.create({
      component: ViewTaskComponent,
      componentProps: { task }
    })

    // set dismiss callback funciton
    modal.onDidDismiss().then(data => {})

    return await modal.present()
  }
}
