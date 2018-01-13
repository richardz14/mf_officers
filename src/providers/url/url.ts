import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UrlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UrlProvider {
  public static url:string = "http://micromobile.test/index.php/api/";
  //don't forget to put /restful/ on the url
  constructor(public http: HttpClient) {
    //console.log('Hello UrlProvider Provider');
    //console.log("$('.button-collapse').sideNav();");
    
  }

}
