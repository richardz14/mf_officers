import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ModalsPage } from '../../pages/modals/modals';
/**
 * Generated class for the ClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client',
  templateUrl: 'client.html',
})
export class ClientPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    eval('$(".table_id").DataTable({"bLengthChange": false,"bFilter": true,"bInfo": false,"bAutoWidth": false});');
    //console.log('ionViewDidLoad ClientPage');
  }

  openModal() {
    
    let myModal = this.modalCtrl.create(ModalsPage);
    
    myModal.present();
  }
  
}

