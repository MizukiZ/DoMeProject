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

  sortOptionSet() {
    this.modalController.dismiss(this.sortSetting)
  }

  dissmissModal() {
    this.modalController.dismiss()
  }

  sortOptionChange(e) {
    this.sortSetting = e.target.value
  }

  ngOnInit() {}
}
