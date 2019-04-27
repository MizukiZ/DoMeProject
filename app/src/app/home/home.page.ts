import { Component, OnInit } from "@angular/core"
import { HomeService } from "./home.service"
import { ModalController } from "@ionic/angular"
import { NewTaskComponent } from "../new-task/new-task.component"
import { TaskSortComponent } from "../task-sort/task-sort.component"
import { AlertController } from "@ionic/angular"
import { LoadingController } from "@ionic/angular"

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  private tasks
  private sortOption
  private loading

  private readableSortOption = {
    dueDate: "Due Date",
    priority: "Priority",
    createdAt: "Created Date"
  }
  constructor(
    private homeS: HomeService,
    public alertController: AlertController,
    public modalController: ModalController,
    public loadingController: LoadingController
  ) {}

  // get tasks data from home service
  getTasks(sortOption) {
    // set loading message
    this.presentLoading()

    this.homeS.get(sortOption).subscribe(tasks => {
      // set return data to self tasks
      this.tasks = tasks
      // close loading message
      this.loadingController.dismiss()
    })
  }

  // create new task
  addTask(newTask) {
    this.homeS.add({ newTask }).subscribe(() => {
      // upload self tasks with new data
      this.getTasks(this.sortOption)
    })
  }

  deleteCompleted() {
    // open confirmation dialog
    this.deletionAlertConfirm()
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

  // method for opening loading message modal
  async presentLoading() {
    const loadingElement = await this.loadingController.create({
      message: "Loading..",
      spinner: "crescent"
    })
    return await loadingElement.present()
  }

  // method for opeing confirmation dialog
  async deletionAlertConfirm() {
    const alert = await this.alertController.create({
      header: "Delete All Completed Tasks",
      message: "<strong>Are you sure</strong>?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            // cancel
          }
        },
        {
          text: "Okay",
          handler: () => {
            // confirm process. Delete all
            this.homeS.destroyCompleted().subscribe(() => {
              this.getTasks(this.sortOption)
            })
          }
        }
      ]
    })

    await alert.present()
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
