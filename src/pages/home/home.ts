import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TemplatePage } from '../../pages/template/template';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: [
    'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic',
    'assets/styles/admin.min.css',
    'assets/styles/_all-skins.min.css',
    'assets/styles/bootstrap.min.css',
    'assets/styles/font-awesome.min.css',
    'assets/styles/ionicons.min.css',
    'assets/styles/jquery-jvectormap.css',
]
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
