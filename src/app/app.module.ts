import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

/* controllers */
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SchedulePage } from '../pages/schedule/schedule';

/* modal controllers */
import { ModalsPage } from '../pages/modals/modals';

//templating
import { TemplatePage } from '../pages/template/template';
import { FooterPage } from '../pages/template/footer';
import { HeaderPage } from '../pages/template/header';
import { SidemenuPage } from '../pages/template/sidemenu';
import { ClientPage } from '../pages/client/client';
import { LoanPage } from '../pages/loan/loan';
import { PaymentPage } from '../pages/payment/payment';


/* providers/models */
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { AuthProvider } from '../providers/auth/auth';
import { UrlProvider } from '../providers/url/url';

import { IonicStorageModule } from '@ionic/storage';

// Logging Services
import { LoggerService } from '../services/log4ts/logger.service';
import { ConsoleLoggerService } from '../services/log4ts/console-logger.service';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TemplatePage,
    FooterPage,
    HeaderPage,
    SidemenuPage,
    SchedulePage,
    ClientPage,
    LoanPage,
    PaymentPage,
    ModalsPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    MaterializeModule,
    IonicModule.forRoot(MyApp,{}, {
      links: [
        { component: HomePage, name: 'LoginPage', segment: 'login' }
      ]
    }),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TemplatePage,
    FooterPage,
    HeaderPage,
    SidemenuPage,
    SchedulePage,
    ClientPage,
    LoanPage,
    PaymentPage,
    ModalsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    UrlProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LoggerService, useClass: ConsoleLoggerService}
  ]
})
export class AppModule {}
