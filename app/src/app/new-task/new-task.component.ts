import { Component, OnInit } from "@angular/core"
import { ModalController } from "@ionic/angular"
import { Camera, CameraOptions } from "@ionic-native/camera/ngx"

@Component({
  selector: "app-new-task",
  templateUrl: "./new-task.component.html",
  styleUrls: ["./new-task.component.scss"]
})
export class NewTaskComponent implements OnInit {
  private newTask = {}
  public photo = null

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
        this.photo = (<any>window).Ionic.WebView.convertFileSrc(imageData)
      },
      err => {
        // Handle error
      }
    )
  }

  newTaskForm() {
    // add photo
    this.newTask["photo"] = this.photo
    this.modalController.dismiss(this.newTask)

    // init new task
    this.newTask = {}
  }
  dissmissModal() {
    this.modalController.dismiss(null)
    // init new task
    this.newTask = {}
  }
  ngOnInit() {}
}
