import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';


import { ScreenOrientation } from '@ionic-native/screen-orientation';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['/pages/login/login.scss'],
})
export class LoginPage {
  loginData = {};
  constructor(public navCtrl: NavController, public navParams: NavParams,platform: Platform,  private screenOrientation: ScreenOrientation) { 
   
  }
 
  logForm() {
    //console.log(this.loginData);
  }
  forOrientation(){
     // set to landscape
   // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    // allow user rotate
    //this.screenOrientation.lock();
  }
  ionViewDidLoad() {
   // console.log('ionViewDidLoad LoginPage');
  }

 
}
