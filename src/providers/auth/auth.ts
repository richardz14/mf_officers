import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App } from "ionic-angular";

import { Http } from '@angular/http';

import { UrlProvider } from '../../providers/url/url';

import { Storage } from '@ionic/storage';

import { AlertController } from 'ionic-angular';

// this is the home class
import { HomePage } from '../../pages/home/home';
import { LoginPage } from '../../pages/login/login';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  url:String = UrlProvider.url; 
   isLogin:boolean = false;
   private navCtrl: NavController;
  constructor(public http: Http,
     private storage: Storage, 
     private alertCtrl: AlertController,
     private app:App) {
      this.navCtrl = app.getActiveNav();
    //console.log('Hello AuthProvider Provider');
  }

  login(postParams , options){
    this.http.post(this.url+"Login/loginFunction/", postParams,options)
    .subscribe(data => {

      if(JSON.parse(data['_body']).response == 'success'){
        this.storage.set('userData',data);
        this.navCtrl.push(HomePage);
       
        //this.isLogin = true;
      }else{
       this.errorAlert();
        //this.isLogin = false;
      }
  
    }, error => {
     
     //console.log(error);// Error getting the data
    });
    
  }
  errorAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Username or Password is incorrect!',
      buttons: ['Close']
    });
    alert.present();
  }

}
