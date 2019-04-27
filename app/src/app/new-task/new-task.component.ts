import { Component, OnInit } from "@angular/core"
import { ModalController } from "@ionic/angular"
import { AlertController } from "@ionic/angular"

// importing camera modules
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
    private camera: Camera,
    public alertController: AlertController
  ) {}

  // click event for camera icon button
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

  // form validations alert message
  async formAlert() {
    const alert = await this.alertController.create({
      header: "Warning",
      subHeader: "",
      message: "Title and Due Date are reqired.",
      buttons: ["OK"]
    })

    await alert.present()
  }

  newTaskForm() {
    // require field vaildations
    if (
      !this.newTask["title"] ||
      this.newTask["title"] == "" ||
      !this.newTask["dueDate"] ||
      this.newTask["dueDate"] == ""
    ) {
      this.formAlert()
    } else {
      // add photo
      this.newTask["photo"] = this.photo
      this.modalController.dismiss(this.newTask)

      // init new task
      this.newTask = {}
    }
  }
  dissmissModal() {
    this.modalController.dismiss(null)
    // init new task
    this.newTask = {}
  }
  ngOnInit() {}
}
