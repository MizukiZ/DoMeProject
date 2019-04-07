import { Component, OnInit } from "@angular/core"
import { HomeService } from "./home.service"

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  private tasks
  constructor(private homeS: HomeService) {}

  getTasks() {
    this.homeS.get().subscribe(tasks => {
      this.tasks = tasks
    })
  }

  deleteCompleted() {
    this.homeS.destroyCompleted().subscribe(() => {
      this.getTasks()
    })
  }

  // receive eveent result from task component
  receiveFromTask(tasks) {
    this.getTasks()
  }

  ngOnInit() {
    this.getTasks()
  }
}
