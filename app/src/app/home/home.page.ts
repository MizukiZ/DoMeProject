import { Component, OnInit } from "@angular/core"
import { HomeService } from "./home.service"
import { ModalController } from "@ionic/angular"
import { NewTaskComponent } from "../new-task/new-task.component"

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  private tasks
  constructor(
    private homeS: HomeService,
    public modalController: ModalController
  ) {}

  getTasks() {
    this.homeS.get().subscribe(tasks => {
      this.tasks = tasks
    })
  }

  addTask(newTask) {
    this.homeS.add({ newTask }).subscribe(() => {
      this.getTasks()
    })
  }

  deleteCompleted() {
    this.homeS.destroyCompleted().subscribe(() => {
      this.getTasks()
    })
  }

  async newTaskModalOpen() {
    const modal = await this.modalController.create({
      component: NewTaskComponent
    })

    // set dismiss callback funciton
    modal.onDidDismiss().then(data => {
      // if return data form new modal is not null, create new one
      if (data.data) {
        const newTask = data.data
        this.addTask(newTask)
      }
    })

    return await modal.present()
  }

  // receive eveent result from task component
  receiveFromTask(tasks) {
    this.getTasks()
  }

  ngOnInit() {
    this.getTasks()
  }
}
