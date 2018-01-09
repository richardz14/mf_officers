import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HeaderPage } from '../../pages/template/header';
import { FooterPage } from '../../pages/template/footer';
import { SidemenuPage } from '../../pages/template/sidemenu';
/**
 * Generated class for the TemplatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-template',
  templateUrl: 'template.html',
  entryComponents: [FooterPage,HeaderPage,SidemenuPage],
  /*
  styleUrls: [
    'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic',
    'assets/styles/admin.min.scss',
    'assets/styles/_all-skins.min.scss',
    'assets/styles/bootstrap.min.scss',
    'assets/styles/font-awesome.min.scss',
    'assets/styles/ionicons.min.scss',
    'assets/styles/jquery-jvectormap.scss',
]
*/
})
export class TemplatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemplatePage');
  }

}
