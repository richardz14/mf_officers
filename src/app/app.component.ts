import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SchedulePage } from '../pages/schedule/schedule';
import { ClientPage } from '../pages/client/client';
import { LoanPage } from '../pages/loan/loan';
import { PaymentPage } from '../pages/payment/payment';

import { Storage } from '@ionic/storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  
  pages: Array<{title: string, icon: string, component: any}>;
  constructor(private platform: Platform,private statusBar: StatusBar,private splashScreen: SplashScreen,private storage: Storage) {

    this.storage.get('userData').then((val) => {
      if(val != null){
          //this.rootPage = HomePage; //original
      }else{
          //this.rootPage = LoginPage; //original
      }
    
     });

    this.pages = [
      { title: 'Dashboard',icon: 'dashboard', component: HomePage },
      { title: 'Client',icon: 'person', component: ClientPage },
      { title: 'Schedule',icon: 'schedule', component: SchedulePage },
      { title: 'Loan',icon: 'account_balance_wallet', component: LoanPage },
      { title: 'Payment',icon: 'payment', component: PaymentPage }
    ];

  }
  initializeApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
