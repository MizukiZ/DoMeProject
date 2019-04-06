import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { IonicModule } from "@ionic/angular"
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"

import { TaskComponent } from "../task/task.component"

import { HomePage } from "./home.page"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, TaskComponent]
})
export class HomePageModule {}
