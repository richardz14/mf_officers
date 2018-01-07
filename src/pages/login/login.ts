import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

import { AuthProvider } from '../../providers/auth/auth';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Storage } from '@ionic/storage';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
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
   private logForms : FormGroup;
  //private todo : FormGroup;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              platform: Platform,
              private screenOrientation: ScreenOrientation,
              private auth: AuthProvider,
              private storage: Storage,
              private formBuilder: FormBuilder
      ) { 
        
        this.logForms = this.formBuilder.group({
          username: ['Username', Validators.required],
          passsword: ['Password', Validators.required],
        });

        
  }
 
  logForm() {
 
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

    /*
    let postParams = {
      username: this.loginData['username'],
      password: this.loginData['passsword']
    }
    */
    let postParams = {
      username: this.logForms.value.username,
      password: this.logForms.value.passsword
    }
    console.log(postParams);
    this.storage.get('userData').then((val) => {
      if(val != null){
        //console.log(JSON.parse(val._body));
       this.storage.remove('userData');
      }else{
       
      }
   });

     this.auth.login(JSON.stringify(postParams),options);


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
