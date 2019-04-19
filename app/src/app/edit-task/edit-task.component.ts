import { Component, OnInit, Input } from "@angular/core"
import { ModalController } from "@ionic/angular"
import { Camera, CameraOptions } from "@ionic-native/camera/ngx"

@Component({
  selector: "app-edit-task",
  templateUrl: "./edit-task.component.html",
  styleUrls: ["./edit-task.component.scss"]
})
export class EditTaskComponent implements OnInit {
  @Input() task
  private editTask = {}

  constructor(
    public modalController: ModalController,
    private camera: Camera
  ) {}

  cameraBtn() {
    // camera options
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then(
      imageData => {
        this.task.photo = (<any>window).Ionic.WebView.convertFileSrc(imageData)
      },
      err => {
        // Handle error
      }
    )
  }

  editTaskForm() {
    this.modalController.dismiss(this.editTask)
    // init new task
    this.editTask = {}
  }

  dissmissModal() {
    this.modalController.dismiss(null)
    // init new task
    this.editTask = {}
  }

  ngOnInit() {
    this.editTask = this.task
  }
}
