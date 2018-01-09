import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TemplatePage } from '../../pages/template/template';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
