import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SchedulePage } from '../pages/schedule/schedule';

import { Storage } from '@ionic/storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;
  
  pages: Array<{title: string, component: any}>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private storage: Storage) {

    this.storage.get('userData').then((val) => {
      if(val != null){
          this.rootPage = HomePage;
      }else{
          this.rootPage = LoginPage;
      }
     });
     
    this.initializeApp(platform, statusBar, splashScreen);

    this.pages = [
      { title: 'Dashboard', component: HomePage },
      { title: 'Schedule', component: SchedulePage }
    ];

  }
  initializeApp(p, sb, ss){
    p.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      sb.styleDefault();
      ss.hide();

    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
