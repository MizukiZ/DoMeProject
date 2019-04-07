import { Component, OnInit, Input } from "@angular/core"
import { ModalController } from "@ionic/angular"

@Component({
  selector: "app-task-sort",
  templateUrl: "./task-sort.component.html",
  styleUrls: ["./task-sort.component.scss"]
})
export class TaskSortComponent implements OnInit {
  @Input() sortOption
  constructor(public modalController: ModalController) {}

  dissmissModal() {
    this.modalController.dismiss()
  }

  ngOnInit() {}
}
