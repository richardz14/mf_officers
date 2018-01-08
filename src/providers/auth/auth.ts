import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';

import { UrlProvider } from '../../providers/url/url';

import { Storage } from '@ionic/storage';

// this is the home class
import { HomePage } from '../../pages/home/home';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  url:String = UrlProvider.url; 
   isLogin:boolean = false;
  constructor(public http: Http, private storage: Storage) {
    //console.log('Hello AuthProvider Provider');
  }

  login(postParams , options){
    this.http.post(this.url+"Login/loginFunction/", postParams,options)
    .subscribe(data => {
      if(JSON.parse(data._body).response == 'success'){
        this.storage.set('userData',data);
        
        //this.isLogin = true;
      }else{
        alert("Username or Password is incorrect!");  
        //this.isLogin = false;
      }
    }, error => {
     
     //console.log(error);// Error getting the data
    });
    
  }

}
