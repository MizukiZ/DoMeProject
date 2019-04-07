import { Component, OnInit, Input } from "@angular/core"
import { ModalController } from "@ionic/angular"

@Component({
  selector: "app-view-task",
  templateUrl: "./view-task.component.html",
  styleUrls: ["./view-task.component.scss"]
})
export class ViewTaskComponent implements OnInit {
  @Input() task
  // priority setting array
  public prioritySetting = {
    1: { color: "light", word: "Very low" },
    2: { color: "medium", word: "Low" },
    3: { color: "success", word: "Middle" },
    4: { color: "warning", word: "High" },
    5: { color: "danger", word: "Very high" }
  }
  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  dissmissModal() {
    this.modalController.dismiss(null)
  }
}
