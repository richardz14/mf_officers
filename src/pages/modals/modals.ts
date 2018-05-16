import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular'; 

import {Validators, FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';
/**
 * Generated class for the ModalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modals',
  templateUrl: 'modals.html',
  styleUrls: ['assets/styles/modal.css'],
})
export class ModalsPage {
  addClient: FormGroup;
  group: AbstractControl;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      public viewCtrl: ViewController,
      private formBuilder: FormBuilder) {

        this.addClient = this.formBuilder.group({
          group: ['', Validators.required]
        });
        
        this.group = this.addClient.contains['group'];

  }
  closeModal() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad ModalsPage');
  }

  addingClient(formPost){
    console.log(formPost);
  }

}
