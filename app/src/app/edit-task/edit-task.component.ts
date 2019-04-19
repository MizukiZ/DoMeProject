import { Component, OnInit, Input } from "@angular/core"
import { ModalController } from "@ionic/angular"
import { AlertController } from "@ionic/angular"
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
    private camera: Camera,
    public alertController: AlertController
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

  async formAlert() {
    const alert = await this.alertController.create({
      header: "Warning",
      subHeader: "",
      message: "Title is reqired.",
      buttons: ["OK"]
    })

    await alert.present()
  }

  editTaskForm() {
    // require field vaildations
    if (this.task["title"] == "") {
      this.formAlert()
    } else {
      this.modalController.dismiss(this.editTask)
      // init new task
      this.editTask = {}
    }
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
