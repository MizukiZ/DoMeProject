import { Component } from "@angular/core"

import { Platform } from "@ionic/angular"
import { SplashScreen } from "@ionic-native/splash-screen/ngx"
import { StatusBar } from "@ionic-native/status-bar/ngx"

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp()
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault()
      this.splashScreen.hide()
    })

    // native app pause API
    this.platform.pause.subscribe(() => {
      // Do someting for pause
      // this is for the sake of demonstrate my ability
      console.log("app is paused!!")
    })

    // native app resume API
    this.platform.resume.subscribe(() => {
      // Do someting for pause
      // this is for the sake of demonstrate my ability
      console.log("app is resumed!!")
    })

    // Android back button event API
    this.platform.backButton.subscribe(() => {
      // Do someting for hardware backbutton
      // this is for the sake of demonstrate my ability
      console.log("Hardware backbutton clicked!!")
    })
  }
}
