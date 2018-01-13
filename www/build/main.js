webpackJsonp([0],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\microFinance\mf_officers\src\pages\home\home.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>HOME</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n<ion-content>\n\n \n\n  <!--\n\n    <page-template></page-template>\n\n    <page-header></page-header>\n\n    <page-sidemenu></page-sidemenu>\n\n  -->\n\n    <!-- content -->\n\n   \n\n    <main>\n\n      <div class="container">\n\n          <div class="row">\n\n              <div class="col s12 m5">\n\n                <div class="card-panel teal">\n\n                  <span class="white-text">I am a very simple card. I am good at containing small bits of information.\n\n                  I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.\n\n                  </span>\n\n                </div>\n\n              </div>\n\n            </div>\n\n\n\n            <div class="row">\n\n                <div class="col s12 m5">\n\n                  <div class="card-panel teal">\n\n                    <span class="white-text">I am a very simple card. I am good at containing small bits of information.\n\n                    I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.\n\n                    </span>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n  \n\n      </div>\n\n    </main>\n\n    <!-- end of content -->\n\n   \n\n<page-footer></page-footer>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\microFinance\mf_officers\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the UrlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UrlProvider = (function () {
    //don't forget to put /restful/ on the url
    function UrlProvider(http) {
        //console.log('Hello UrlProvider Provider');
        //console.log("$('.button-collapse').sideNav();");
        this.http = http;
    }
    UrlProvider.url = "http://micromobile.test/index.php/api/";
    UrlProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UrlProvider);
    return UrlProvider;
}());

//# sourceMappingURL=url.js.map

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 212;

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SchedulePage = (function () {
    function SchedulePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SchedulePage');
    };
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule',template:/*ion-inline-start:"C:\xampp\htdocs\microFinance\mf_officers\src\pages\schedule\schedule.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>SCHEDULE</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content>\n\n    <!--\n\n    <page-template></page-template>\n\n    <page-header></page-header>\n\n    <page-sidemenu></page-sidemenu>\n\n    -->\n\n    <!-- content -->\n\n    <main>\n\n      <div class="container">\n\n         <div class="row">\n\n            <div class="col s12 m9 l10">\n\n              Schedule\n\n           </div>\n\n         </div>\n\n      </div>\n\n    </main>\n\n    <!-- end of content -->\n\n    <page-footer></page-footer>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\microFinance\mf_officers\src\pages\schedule\schedule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_modals_modals__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_client_client__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_rx__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//providers




/**
 * Generated class for the ClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClientPage = (function () {
    function ClientPage(navCtrl, navParams, modalCtrl, client, storage, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.client = client;
        this.storage = storage;
        this.loading = loading;
        this.globalFlag = -1;
        this.loadAllclients();
    }
    ClientPage.prototype.ionViewDidLoad = function () {
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
    };
    ClientPage.prototype.loadDatatable = function () {
        eval('$(".table_id").DataTable({"bLengthChange": false,"bFilter": true,"bInfo": false,"bAutoWidth": false});');
    };
    ClientPage.prototype.ev = function (flag) {
        if (flag != this.globalFlag) {
            this.loadDatatable();
            this.globalFlag = flag;
        }
    };
    ClientPage.prototype.loadAllclients = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var agentId = 0;
        this.storage.get('userData').then(function (val) {
            if (val != null) {
                agentId = JSON.parse(val._body).id;
            }
            else {
                // agentId = 0;
            }
        });
        var postParams = {
            agent_id: agentId + 7,
        };
        this.client.getClients(JSON.stringify(postParams), options)
            .subscribe(function (data) { return _this.allData = data.data; }, function (error) {
            console.log("error");
        });
    };
    ClientPage.prototype.openModal = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_modals_modals__["a" /* ModalsPage */]);
        myModal.present();
    };
    ClientPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-client',template:/*ion-inline-start:"C:\xampp\htdocs\microFinance\mf_officers\src\pages\client\client.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>CLIENT</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <!-- content -->\n\n  <main>\n\n    <div class="container">\n\n\n\n        <div class="row">\n\n            <div class="col s12 m5">\n\n                <div class="card-panel default">\n\n                    <a (click)="openModal()" class="waves-effect waves-light btn" style="width: 100%;"><i class="material-icons left">add</i>Add Client</a>\n\n\n\n                <table class="table table_id display responsive no-wrap" width="100%">\n\n                    <thead>\n\n                        <tr>\n\n                            <th><label> Full Name </label></th>\n\n                            <th><label> Martial </label></th>\n\n                            <th><label> Address </label></th>\n\n                            <th><label> Birthday </label></th>\n\n                            <th><label> Contact # </label></th>\n\n                            <th><label> Year Stay </label></th>\n\n                            <th>  </th>\n\n                        </tr>\n\n                    </thead>\n\n                    <tbody>\n\n                        <tr *ngFor="let client of allData;let i=index; let last=last">\n\n                          <td><label class="text" style="font-size: 0.5em; color: black;"> {{ client.FirstName+" "+client.LastName }} </label></td>\n\n                          <td><label class="text" style="font-size: 0.5em; color: black;"> {{ client.MaritalStatus }} </label></td>\n\n                          <td><label class="text" style="font-size: 0.5em; color: black;"> {{ client.HomeAddress1 }} </label></td>\n\n                          <td><label class="text" style="font-size: 0.5em; color: black;"> {{ client.BirthDate }} </label></td>\n\n                          <td><label class="text" style="font-size: 0.5em; color: black;"> {{ client.HomeAddressContact }} </label></td>\n\n                          <td><label class="text" style="font-size: 0.5em; color: black;"> {{ client.YearsStayed }}</label> </td>\n\n                          <td><label class="text" style="font-size: 0.5em; color: black;"> buttons </label></td>\n\n                          {{last ? ev(i) : \'\'}}\n\n                        </tr>\n\n                        \n\n                    </tbody>\n\n                </table>\n\n              </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n  </main>\n\n    <!-- end of content -->\n\n   \n\n<page-footer></page-footer>\n\n\n\n\n\n  <!-- modal -->\n\n  \n\n  <!-- end of modal -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\microFinance\mf_officers\src\pages\client\client.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__providers_client_client__["a" /* ClientProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_client_client__["a" /* ClientProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _f || Object])
    ], ClientPage);
    return ClientPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=client.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalsPage = (function () {
    function ModalsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ModalsPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalsPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad ModalsPage');
    };
    ModalsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modals',template:/*ion-inline-start:"C:\xampp\htdocs\microFinance\mf_officers\src\pages\modals\modals.html"*/'<!--\n  Generated template for the ModalsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>ADD CLIENT\n      <!--\n      <button style="position: right;float: right;" ion-button [small]="true" [round]="isRound" (click)="closeModal()">\n        <i class="material-icons">clear</i>\n      </button>\n    -->  \n    </ion-title>\n    <ion-buttons end>\n        <button ion-button color="danger" (click)="closeModal()"> <i class="material-icons">clear</i></button>\n      </ion-buttons>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    \n</ion-content>\n\n\n<ion-footer>\n    <ion-toolbar>\n         <ion-buttons end>\n            <button ion-button color="secondary" block> Create </button>\n          </ion-buttons>\n      <!--\n      <ion-title>Footer</ion-title>\n      -->\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"C:\xampp\htdocs\microFinance\mf_officers\src\pages\modals\modals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], ModalsPage);
    return ModalsPage;
}());

//# sourceMappingURL=modals.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_url_url__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_rx__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ClientProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ClientProvider = (function () {
    function ClientProvider(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__providers_url_url__["a" /* UrlProvider */].url;
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        //console.log('Hello ClientProvider Provider');
    }
    ClientProvider.prototype.getClients = function (postParams, options) {
        //let returndata = this.http.post(this.url+"Client/getClient/", postParams,options);
        return this.http.post(this.url + "Client/getClientPost/", postParams, options).map(function (res) { return res.json(); });
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
    };
    ClientProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ClientProvider);
    return ClientProvider;
}());

//# sourceMappingURL=client.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoanPage = (function () {
    function LoanPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoanPage');
    };
    LoanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loan',template:/*ion-inline-start:"C:\xampp\htdocs\microFinance\mf_officers\src\pages\loan\loan.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>LOAN</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content>\n    <!-- content -->\n    <main>\n      <div class="container">\n          <div class="row">\n              <div class="col s12 m5">\n  \n              </div>\n          </div>\n      </div>\n    </main>\n      <!-- end of content -->\n     \n  <page-footer></page-footer>\n  \n  </ion-content>\n  '/*ion-inline-end:"C:\xampp\htdocs\microFinance\mf_officers\src\pages\loan\loan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], LoanPage);
    return LoanPage;
}());

//# sourceMappingURL=loan.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = (function () {
    function PaymentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"C:\xampp\htdocs\microFinance\mf_officers\src\pages\payment\payment.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>PAYMENT</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content>\n    <!-- content -->\n    <main>\n      <div class="container">\n          <div class="row">\n              <div class="col s12 m5">\n  \n              </div>\n          </div>\n      </div>\n    </main>\n      <!-- end of content -->\n     \n  <page-footer></page-footer>\n  \n  </ion-content>\n  '/*ion-inline-end:"C:\xampp\htdocs\microFinance\mf_officers\src\pages\payment\payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_url_url__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// this is the home class

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = (function () {
    function AuthProvider(http, storage, alertCtrl, app) {
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.url = __WEBPACK_IMPORTED_MODULE_3__providers_url_url__["a" /* UrlProvider */].url;
        this.isLogin = false;
        this.navCtrl = app.getActiveNav();
        //console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.login = function (postParams, options) {
        var _this = this;
        this.http.post(this.url + "Login/loginFunction/", postParams, options)
            .subscribe(function (data) {
            if (JSON.parse(data['_body']).response == 'success') {
                _this.storage.set('userData', data);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
                //this.isLogin = true;
            }
            else {
                _this.errorAlert();
                //this.isLogin = false;
            }
        }, function (error) {
            //console.log(error);// Error getting the data
        });
    };
    AuthProvider.prototype.errorAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Username or Password is incorrect!',
            buttons: ['Close']
        });
        alert.present();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TemplatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HeaderPage = (function () {
    function HeaderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HeaderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TemplatePage');
    };
    HeaderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-header',template:/*ion-inline-start:"C:\xampp\htdocs\microFinance\mf_officers\src\pages\template\header.html"*/'\n\n<!--\n\n<header>\n\n\n\n    <nav class="top-nav" style="background-color: #3c8dbc;">\n\n      <div class="container">\n\n            <a data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>\n\n            <div class="nav-wrapper">\n\n                    <a class="page-title">Barilla</a>\n\n                </div>\n\n              </div>\n\n    </nav>\n\n     <ul id="slide-out" class="side-nav" style="background-color: c0c0c0;">\n\n         <li><a class="waves-effect">Dasboard</a></li>\n\n         <li><a class="waves-effect">Schedules</a></li>\n\n         <li><a class="waves-effect">Loan Accounts</a></li>\n\n    </ul>\n\n          \n\n    \n\n  </header>\n\n\n\n-->'/*ion-inline-end:"C:\xampp\htdocs\microFinance\mf_officers\src\pages\template\header.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HeaderPage);
    return HeaderPage;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TemplatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FooterPage = (function () {
    function FooterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FooterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TemplatePage');
    };
    FooterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-footer',template:/*ion-inline-start:"C:\xampp\htdocs\microFinance\mf_officers\src\pages\template\footer.html"*/'<footer class="page-footer" style="bottom:0 ;width: 100%;position: fixed;padding-top: 0px;background: linear-gradient(-180deg, silver, silver);">\n\n    <div class="footer-copyright">\n\n      <div class="container" style="color: black;">\n\n      © 2017, All rights reserved.\n\n      <a class="black-text text-lighten-4 right" href="http://silverorbit.com">SilverOrbit</a>\n\n      </div>\n\n    </div>\n\n  </footer>'/*ion-inline-end:"C:\xampp\htdocs\microFinance\mf_officers\src\pages\template\footer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], FooterPage);
    return FooterPage;
}());

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidemenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TemplatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SidemenuPage = (function () {
    function SidemenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SidemenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TemplatePage');
    };
    SidemenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sidemenu',template:/*ion-inline-start:"C:\xampp\htdocs\microFinance\mf_officers\src\pages\template\sidemenu.html"*/'<ion-header>\n\n        <ion-navbar>\n\n          <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n          <ion-title>BARILLA</ion-title>\n\n        </ion-navbar>\n\n      </ion-header>'/*ion-inline-end:"C:\xampp\htdocs\microFinance\mf_officers\src\pages\template\sidemenu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SidemenuPage);
    return SidemenuPage;
}());

//# sourceMappingURL=sidemenu.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(367);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_schedule_schedule__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_modals_modals__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_template_template__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_template_footer__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_template_header__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_template_sidemenu__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_client_client__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_loan_loan__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_payment_payment__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_screen_orientation__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_auth_auth__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_url_url__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_client_client__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_log4ts_logger_service__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_log4ts_console_logger_service__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_materialize_css__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_materialize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_materialize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular2_materialize__ = __webpack_require__(700);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/* controllers */




/* modal controllers */

//templating







/* providers/models */





// Logging Services




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_template_template__["a" /* TemplatePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_template_footer__["a" /* FooterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_template_header__["a" /* HeaderPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_template_sidemenu__["a" /* SidemenuPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_client_client__["a" /* ClientPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_loan_loan__["a" /* LoanPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_modals_modals__["a" /* ModalsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_27_angular2_materialize__["a" /* MaterializeModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */], name: 'LoginPage', segment: 'login' }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_23__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_template_template__["a" /* TemplatePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_template_footer__["a" /* FooterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_template_header__["a" /* HeaderPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_template_sidemenu__["a" /* SidemenuPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_client_client__["a" /* ClientPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_loan_loan__["a" /* LoanPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_modals_modals__["a" /* ModalsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_url_url__["a" /* UrlProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_24__services_log4ts_logger_service__["a" /* LoggerService */], useClass: __WEBPACK_IMPORTED_MODULE_25__services_log4ts_console_logger_service__["a" /* ConsoleLoggerService */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_client_client__["a" /* ClientProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_schedule_schedule__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_client_client__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_loan_loan__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_payment_payment__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.storage.get('userData').then(function (val) {
            if (val != null) {
                //this.rootPage = HomePage; //original
            }
            else {
                //this.rootPage = LoginPage; //original
            }
        });
        this.pages = [
            { title: 'Dashboard', icon: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Client', icon: 'person', component: __WEBPACK_IMPORTED_MODULE_6__pages_client_client__["a" /* ClientPage */] },
            { title: 'Schedule', icon: 'schedule', component: __WEBPACK_IMPORTED_MODULE_5__pages_schedule_schedule__["a" /* SchedulePage */] },
            { title: 'Loan', icon: 'account_balance_wallet', component: __WEBPACK_IMPORTED_MODULE_7__pages_loan_loan__["a" /* LoanPage */] },
            { title: 'Payment', icon: 'payment', component: __WEBPACK_IMPORTED_MODULE_8__pages_payment_payment__["a" /* PaymentPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\microFinance\mf_officers\src\app\app.html"*/'<ion-menu [content]="content">\n\n        <ion-header>\n\n          <ion-toolbar>\n\n            <ion-title> Menu </ion-title>\n\n          </ion-toolbar>\n\n        </ion-header>\n\n      \n\n        <ion-content class="" style="background-color: c0c0c0;">\n\n                <!--\n\n                <ion-list>\n\n                        <a class="waves-effect">Dasboard</a>\n\n                 </ion-list>\n\n                 <ion-list>\n\n                        <a class="waves-effect">Schedules</a>\n\n                 </ion-list>\n\n                 <ion-list>\n\n                        <a class="waves-effect">Loan Accounts</a>\n\n                 </ion-list>\n\n                -->\n\n        \n\n          <ion-list class="animat">\n\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)"> <i class="material-icons">{{p.icon}}</i>\n\n              {{p.title}}\n\n            </button>\n\n          </ion-list>\n\n        \n\n        </ion-content>\n\n      \n\n      </ion-menu>\n\n      \n\n      <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n      <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n     \n\n      <!--\n\n      <header>\n\n        <div class="container"><a href="#" data-target="nav-mobile" class="top-nav sidenav-trigger waves-effect waves-light circle hide-on-large-only"><i class="material-icons">menu</i></a></div>\n\n        <ul id="nav-mobile" class="sidenav sidenav-fixed" style="overflow: auto; transform: translateX(-105%);">\n\n          <li class="logo"><a id="logo-container" href="/" class="brand-logo">\n\n              <object id="front-page-logo" type="image/svg+xml" data="res/materialize.svg" __idm_frm__="1635">Your browser does not support SVG</object></a></li>\n\n          <li class="search">\n\n            <div class="search-wrapper">\n\n              <input id="search" placeholder="Search"><i class="material-icons">search</i>\n\n              <div class="search-results"></div>\n\n            </div>\n\n          </li>\n\n          <li class="bold"><a href="about.html" class="waves-effect waves-teal">About</a></li>\n\n          <li class="bold"><a href="getting-started.html" class="waves-effect waves-teal">Getting Started</a></li>\n\n          \n\n          <li class="bold"><a href="mobile.html" class="waves-effect waves-teal">Mobile</a></li>\n\n          <li class="bold"><a href="showcase.html" class="waves-effect waves-teal">Showcase</a></li>\n\n          <li class="bold"><a href="themes.html" class="waves-effect waves-teal">Themes</a></li>\n\n        </ul>\n\n      </header>\n\n    -->'/*ion-inline-end:"C:\xampp\htdocs\microFinance\mf_officers\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    //private todo : FormGroup;
    function LoginPage(navCtrl, navParams, platform, screenOrientation, auth, storage, formBuilder) {
        //this.OverridingLogin();
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.screenOrientation = screenOrientation;
        this.auth = auth;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.loginData = {};
        this.errorMessage = '';
        this.logForms = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required],
        });
        this.username = this.logForms.contains['username'];
        this.password = this.logForms.contains['password'];
        /*
    this.username = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.logForms = formBuilder.group({
      username: this.username,
      password: this.password
    });
      */
    }
    /* if user has login this will override */
    LoginPage.prototype.OverridingLogin = function () {
        var _this = this;
        this.storage.get('userData').then(function (val) {
            if (val != null) {
                // this.navCtrl.push(HomePage);
                _this.storage.remove('userData');
            }
            else {
            }
        });
    };
    LoginPage.prototype.logForm = function (user) {
        var _this = this;
        if (user.username !== undefined && user.password !== undefined) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var postParams = {
                username: this.logForms.value.username,
                password: this.logForms.value.password
            };
            this.storage.get('userData').then(function (val) {
                if (val != null) {
                    //console.log(JSON.parse(val._body));
                    _this.storage.remove('userData');
                }
                else {
                }
            });
            this.auth.login(JSON.stringify(postParams), options);
            // console.log(this.auth.isLogin);
            /*
             if(this.auth.isLogin == true){
               //this.errorMessage = '';
               this.navCtrl.push(HomePage);
             }else{
               alert("Username or Password is incorrect!");
               //this.errorMessage = 'Username or Password is incorrect!';
             }
           }else{
             */
        }
        //console.log(this.loginData);
    };
    LoginPage.prototype.forOrientation = function () {
        // set to landscape
        // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        // allow user rotate
        //this.screenOrientation.lock();
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\xampp\htdocs\microFinance\mf_officers\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n-->\n\n\n\n<ion-content padding>\n\n    <div class="wrapper">\n\n	<div class="container">\n\n		<h1>BARILLA</h1>\n\n    <!-- submitting  (ngSubmit)="logForm()" (click)="onSignIn()"-->\n\n\n\n    <form class="form" [formGroup]="logForms" (ngSubmit)="logForm(logForms.value)">\n\n      <!--\n\n        <span class="help-block form-error text-danger small" \n\n        *ngIf="errorMessage !== null || errorMessage !== \'\' ">  <b style="color:red;">Username or Password is incorrect!</b> <br>  <br></span>\n\n      -->\n\n        <input type="text" [(ngModel)]="logForms.username" name="username" formControlName="username" [formControl]="logForms.controls[\'username\']" placeholder="Username">\n\n       \n\n        <span class="help-block form-error text-danger small" \n\n        *ngIf="logForms.controls[\'username\'].errors?.required &&\n\n        logForms.controls[\'username\'].touched">  <b style="color:red;">Username is required</b> </span>\n\n\n\n\n\n      \n\n        <input type="password" [(ngModel)]="logForms.password" name="password" formControlName="password" [formControl]="logForms.controls[\'password\']" placeholder="Password">\n\n       \n\n        <span class="help-block form-error text-danger small" \n\n        *ngIf="logForms.controls[\'password\'].errors?.required &&\n\n        logForms.controls[\'password\'].touched">  <b style="color:red;">Password is required</b> <br></span>\n\n\n\n      \n\n      <button ion-button type="submit" id="login-button" >Login</button>\n\n     \n\n    </form>\n\n\n\n  </div>\n\n  <ul class="bg-bubbles">\n\n		<li></li>\n\n		<li></li>\n\n		<li></li>\n\n		<li></li>\n\n		<li></li>\n\n		<li></li>\n\n		<li></li>\n\n		<li></li>\n\n		<li></li>\n\n    <li></li>\n\n    <li></li>\n\n	</ul>\n\n</div>\n\n\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\xampp\htdocs\microFinance\mf_officers\src\pages\login\login.html"*/,
            styleUrls: ['/pages/login/login.scss'],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_template_header__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_template_footer__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_template_sidemenu__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TemplatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TemplatePage = (function () {
    function TemplatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TemplatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TemplatePage');
    };
    TemplatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-template',template:/*ion-inline-start:"C:\xampp\htdocs\microFinance\mf_officers\src\pages\template\template.html"*/'<!--\n\n  Generated template for the TemplatePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<!--\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>template</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n \n\n</ion-content>\n\n-->'/*ion-inline-end:"C:\xampp\htdocs\microFinance\mf_officers\src\pages\template\template.html"*/,
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__pages_template_footer__["a" /* FooterPage */], __WEBPACK_IMPORTED_MODULE_2__pages_template_header__["a" /* HeaderPage */], __WEBPACK_IMPORTED_MODULE_4__pages_template_sidemenu__["a" /* SidemenuPage */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TemplatePage);
    return TemplatePage;
}());

//# sourceMappingURL=template.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoggerService = (function () {
    function LoggerService() {
    }
    LoggerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], LoggerService);
    return LoggerService;
}());

/*

const noop = (): any => undefined;

@Injectable()
export class NoOpLogger implements Logger {

  get info() {
    return noop;
  }

  get warn() {
    return noop;
  }

  get error() {
    return noop;
  }
}

*/
// The set of built-in Log4j levels includes TRACE, DEBUG, INFO, WARN, ERROR, and FATAL.
//# sourceMappingURL=logger.service.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isDebugMode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleLoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var isDebugMode = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* ENV */].isDebugMode;
// export let isDebugMode = true;
var noop = function () { return undefined; };
var ConsoleLoggerService = (function () {
    function ConsoleLoggerService() {
    }
    Object.defineProperty(ConsoleLoggerService.prototype, "info", {
        get: function () {
            if (isDebugMode) {
                return console.info.bind(console);
            }
            else {
                return noop;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsoleLoggerService.prototype, "warn", {
        /*
      
        get info() {
          if (isDebugMode) {
            return this.bind(console.info, console);
          } else {
            return noop;
          }
        }
      
        */
        get: function () {
            if (isDebugMode) {
                return console.warn.bind(console);
            }
            else {
                return noop;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsoleLoggerService.prototype, "error", {
        get: function () {
            if (isDebugMode) {
                return console.error.bind(console);
            }
            else {
                return noop;
            }
        },
        enumerable: true,
        configurable: true
    });
    ConsoleLoggerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])()
    ], ConsoleLoggerService);
    return ConsoleLoggerService;
}());

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
// https://github.com/Microsoft/TypeScript/wiki/%27this%27-in-TypeScript#functionbind
// https://github.com/Raynos/function-bind/blob/master/implementation.js
/*

  get info() {
    if (isDebugMode) {
      return console.info.bind(console);
    } else {
      return noop;
    }
  }

  bind(fn: Function, context: Object): Function {
    return function() {
      return fn.apply(context, arguments);
    };
  }

  get info() {
    if (isDebugMode) {
      return this.bind(console.info, console);
    } else {
      return noop;
    }
  }

 */
//# sourceMappingURL=console-logger.service.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var ENV = {
    production: true,
    isDebugMode: false
};
/*

export const ENV = {

  production: true,
  isDebugMode: false

};

*/
//# sourceMappingURL=environment.js.map

/***/ })

},[362]);
//# sourceMappingURL=main.js.map