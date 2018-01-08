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
})
export class TemplatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemplatePage');
  }

}
