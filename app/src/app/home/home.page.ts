import { Component, OnInit } from "@angular/core"
import { HomeService } from "./home.service"
import { ModalController } from "@ionic/angular"
import { NewTaskComponent } from "../new-task/new-task.component"
import { TaskSortComponent } from "../task-sort/task-sort.component"

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  private tasks
  private sortOption

  private readableSortOption = {
    dueDate: "Due Date",
    priority: "Priority",
    createdAt: "Created Date"
  }
  constructor(
    private homeS: HomeService,
    public modalController: ModalController
  ) {}

  getTasks(sortOption) {
    this.homeS.get(sortOption).subscribe(tasks => {
      this.tasks = tasks
    })
  }

  addTask(newTask) {
    this.homeS.add({ newTask }).subscribe(() => {
      this.getTasks(this.sortOption)
    })
  }

  deleteCompleted() {
    this.homeS.destroyCompleted().subscribe(() => {
      this.getTasks(this.sortOption)
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

  async taskSortModalOpen() {
    const modal = await this.modalController.create({
      component: TaskSortComponent,
      componentProps: { sortOption: this.sortOption }
    })

    // set dismiss callback funciton
    modal.onDidDismiss().then(data => {
      if (data.data) {
        this.sortOption = data.data
        this.getTasks(this.sortOption)
      }
    })

    return await modal.present()
  }

  // receive eveent result from task component
  receiveFromTask() {
    this.getTasks(this.sortOption)
  }

  ngOnInit() {
    // set initial data
    this.sortOption = "dueDate"
    this.getTasks(this.sortOption)
  }
}
