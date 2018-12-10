import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { ClavierPage } from '../pages/clavier/clavier';
import { ContactPage } from '../pages/contact/contact';
import { DetailsPage} from "../pages/details/details"
import { TabsPage } from '../pages/tabs/tabs';
import { AddContactPage } from '../pages/add-contact/add-contact';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';

export const firebaseConfig = {
  apiKey: "AIzaSyDRBYhhGatKZeB9cF-LpfhCqSsQk8S6koo",
    authDomain: "progmobile4a.firebaseapp.com",
    databaseURL: "https://progmobile4a.firebaseio.com",
    projectId: "progmobile4a",
    storageBucket: "progmobile4a.appspot.com",
    messagingSenderId: "242618572209"
 };

@NgModule({
  declarations: [
    MyApp,
    ClavierPage,
    ContactPage,
    TabsPage,
    DetailsPage,
    AddContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ClavierPage,
    ContactPage,
    TabsPage,
    DetailsPage,
    AddContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
