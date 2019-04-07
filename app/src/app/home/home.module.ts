import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { IonicModule } from "@ionic/angular"
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"

import { TaskComponent } from "../task/task.component"
import { NewTaskComponent } from "../new-task/new-task.component"
import { ViewTaskComponent } from "../view-task/view-task.component"
import { EditTaskComponent } from "../edit-task/edit-task.component"
import { TaskSortComponent } from "../task-sort/task-sort.component"
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
  declarations: [
    HomePage,
    TaskComponent,
    NewTaskComponent,
    ViewTaskComponent,
    EditTaskComponent,
    TaskSortComponent
  ],
  entryComponents: [
    NewTaskComponent,
    ViewTaskComponent,
    EditTaskComponent,
    TaskSortComponent
  ]
})
export class HomePageModule {}
