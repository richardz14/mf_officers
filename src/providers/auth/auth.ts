import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { UrlProvider } from '../../providers/url/url';

import { Storage } from '@ionic/storage';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  url:String = UrlProvider.url; 
  constructor(public http: Http, private storage: Storage) {
    //console.log('Hello AuthProvider Provider');
  }

  login(postParams , options){


    this.http.post(this.url+"Login/loginFunction/", postParams,options)
    .subscribe(data => {
      //console.log(data);
      this.storage.set('userData',data);
    }, error => {
     //console.log(error);// Error getting the data
    });
    
  }

}
