import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule as HttpModuleAngular } from '@angular/http';
import {
  DefaultPlugins,
  Http,
  HttpCordovaPlugin,
  HttpModule,
  HttpCordovaPluginModule
} from '@ramonornela/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

declare var cordova;

let module = HttpModule;
let provideFallback = { provide: Http, useClass: Http };

if (typeof cordova !== 'undefined') {
  module = HttpCordovaPluginModule;
  provideFallback = { provide: Http, useClass: HttpCordovaPlugin };
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModuleAngular,
    module.initialize(DefaultPlugins)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    provideFallback,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
