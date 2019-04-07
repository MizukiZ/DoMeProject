import { Component, OnInit, Input } from "@angular/core"
import { ModalController } from "@ionic/angular"
import { EditTaskComponent } from "../edit-task/edit-task.component"
import { HomeService } from "../home/home.service"

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
  constructor(
    public modalController: ModalController,
    private homeC: HomeService
  ) {}

  ngOnInit() {}

  dissmissModal() {
    this.modalController.dismiss()
  }

  async editTaskModalOpen() {
    const modal = await this.modalController.create({
      component: EditTaskComponent,
      componentProps: { task: this.task }
    })

    // set dismiss callback funciton
    modal.onDidDismiss().then(data => {
      // if return data form new modal is not null, update the task
      if (data.data) {
        const newTask = data.data
        this.homeC.put(newTask).subscribe(() => {})
      }
    })

    return await modal.present()
  }
}
