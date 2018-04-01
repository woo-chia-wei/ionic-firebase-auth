import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';
import { UserProfileServiceProvider } from '../providers/user-profile-service/user-profile-service';

export const config = {
  apiKey: "AIzaSyBHhUCCHW-br83ZINBTIAzyO-rkKwvt0xY",
  authDomain: "ionic-auth-1d649.firebaseapp.com",
  databaseURL:  "https://ionic-auth-1d649.firebaseio.com",
  projectId: "ionic-auth-1d649",
  storageBucket: "ionic-auth-1d649.appspot.com",
  messagingSenderId: "38734180717"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProfileServiceProvider
  ]
})
export class AppModule {}
