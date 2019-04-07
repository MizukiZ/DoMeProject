import { Component, OnInit } from "@angular/core"
import { ModalController } from "@ionic/angular"

@Component({
  selector: "app-new-task",
  templateUrl: "./new-task.component.html",
  styleUrls: ["./new-task.component.scss"]
})
export class NewTaskComponent implements OnInit {
  private newTask = {}
  constructor(public modalController: ModalController) {}

  newTaskForm() {
    this.modalController.dismiss(this.newTask)
    // init new task
    this.newTask = {}
  }
  dissmissModal() {
    this.modalController.dismiss(null)
    // init new task
    this.newTask = {}
  }
  ngOnInit() {}
}
