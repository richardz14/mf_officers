import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

import { AuthProvider } from '../../providers/auth/auth';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Storage } from '@ionic/storage';
import {Validators, FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';

// home class
import { HomePage } from '../../pages/home/home';

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
   logForms : FormGroup;
   username:AbstractControl;
   password: AbstractControl;
   errorMsg: AbstractControl;
   errorMessage:string = '';
   
  //private todo : FormGroup;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              platform: Platform,
              private screenOrientation: ScreenOrientation,
              private auth: AuthProvider,
              private storage: Storage,
              private formBuilder: FormBuilder) { 
        

      //this.OverridingLogin();

        this.logForms = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required],
        });
        
        this.username = this.logForms.contains['username'];
        this.password = this.logForms.contains['password'];
        /*
    this.username = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.logForms = formBuilder.group({
      username: this.username,
      password: this.password
    });
      */

  }

  /* if user has login this will override */
  OverridingLogin(){
    this.storage.get('userData').then((val) => {
      if(val != null){
         // this.navCtrl.push(HomePage);
          this.storage.remove('userData');
      }else{
       
      }
     });
  }

  logForm(user) {
   
    if(user.username !== undefined && user.password !== undefined){
    
      var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

    let postParams = {
      username: this.logForms.value.username,
      password: this.logForms.value.password
    }
    
    this.storage.get('userData').then((val) => {
      if(val != null){
        //console.log(JSON.parse(val._body));
       this.storage.remove('userData');
      }else{
       
      }
   });

     this.auth.login(JSON.stringify(postParams),options);
     // console.log(this.auth.isLogin);
     /*
      if(this.auth.isLogin == true){
        //this.errorMessage = '';
        this.navCtrl.push(HomePage);
      }else{
        alert("Username or Password is incorrect!");
        //this.errorMessage = 'Username or Password is incorrect!';
      }
    }else{
      */
     
    }


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
