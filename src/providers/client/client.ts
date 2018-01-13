import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { UrlProvider } from '../../providers/url/url';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import 'rxjs/rx';

/*
  Generated class for the ClientProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClientProvider {
  url:String = UrlProvider.url; 
  allClient: any;
  public headers: Headers;
  constructor(public http: Http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');

    //console.log('Hello ClientProvider Provider');
  }
 
  getClients(postParams, options){
    //let returndata = this.http.post(this.url+"Client/getClient/", postParams,options);
    return this.http.post(this.url+"Client/getClientPost/", postParams,options).map(res => res.json());
   /*
    this.http.post(this.url+"Client/getClient/", postParams,options)
    .subscribe(data => {

      if(data['response'] == 'success'){    
        this.allClient = data['response'];
      }else{
        this.allClient = null;
      }
     
    }, error => {
     
     //console.log(error);// Error getting the data
    });
    */
     
  }

}
