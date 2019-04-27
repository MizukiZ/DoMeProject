import { Component, OnInit, Input } from "@angular/core"
import { ModalController } from "@ionic/angular"

@Component({
  selector: "app-task-sort",
  templateUrl: "./task-sort.component.html",
  styleUrls: ["./task-sort.component.scss"]
})
export class TaskSortComponent implements OnInit {
  @Input() sortOption
  private sortSetting
  constructor(public modalController: ModalController) {}

  // dissmiss callback. the parent will receive sortSetting value.
  sortOptionSet() {
    this.modalController.dismiss(this.sortSetting)
  }

  dissmissModal() {
    this.modalController.dismiss()
  }

  // check box event
  sortOptionChange(e) {
    this.sortSetting = e.target.value
  }

  ngOnInit() {}
}
