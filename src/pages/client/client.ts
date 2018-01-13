import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';

import { ModalsPage } from '../../pages/modals/modals';

//providers
import { ClientProvider } from '../../providers/client/client';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import 'rxjs/rx';
import { LoadingController } from 'ionic-angular';
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
  //styleUrls: ['./pages/client/client.scss']
})


export class ClientPage {
  public allData: {};
  private globalFlag = -1;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public modalCtrl: ModalController,
     private client: ClientProvider,
     private storage: Storage,
     public loading: LoadingController) {

        
    this.loadAllclients();
  }

  ionViewDidLoad() {
    /*
    let loader = this.loading.create({
      content: 'Getting latest entries...',
    });
    loader.present().then(() => {
      this.someService.getLatestEntries()
        .subscribe(res => {
          this.latestEntries = res;
        });
      loader.dismiss();
    });
    */
    //console.log('ionViewDidLoad ClientPage');
  }
  loadDatatable(){
      eval('$(".table_id").DataTable({"bLengthChange": false,"bFilter": true,"bInfo": false,"bAutoWidth": false});');
  }
  ev(flag){
    if(flag != this.globalFlag){
      this.loadDatatable();
      this.globalFlag = flag;
    }
  }
  loadAllclients(){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

 let agentId = 0;
    this.storage.get('userData').then((val) => {
      if(val != null){
        agentId = JSON.parse(val._body).id;
      }else{
       // agentId = 0;
      }
   });
    let postParams = {
      agent_id: agentId +7,
    }
    
    this.client.getClients(JSON.stringify(postParams),options)
    .subscribe(data => this.allData = data.data
      ,error => {
        console.log("error");
      });
    
   
  }
 
  openModal() {
    let myModal = this.modalCtrl.create(ModalsPage);
    myModal.present();
  }
  
}

