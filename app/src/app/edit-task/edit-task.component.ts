import { Component, OnInit, Input } from "@angular/core"
import { ModalController } from "@ionic/angular"

@Component({
  selector: "app-edit-task",
  templateUrl: "./edit-task.component.html",
  styleUrls: ["./edit-task.component.scss"]
})
export class EditTaskComponent implements OnInit {
  @Input() task
  private editTask = {}

  constructor(public modalController: ModalController) {}

  editTaskForm() {
    this.modalController.dismiss(this.editTask)
    // init new task
    this.editTask = {}
  }

  dissmissModal() {
    this.modalController.dismiss(null)
    // init new task
    this.editTask = {}
  }

  ngOnInit() {
    this.editTask = this.task
    console.log(this.task)
  }
}
