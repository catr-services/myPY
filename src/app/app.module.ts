import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
//import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BoatList} from '../pages/boatlist/boatlist';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyService } from '../providers/my-service';
import { AddBoat } from '../pages/addboat/addboat'

@NgModule({
  declarations: [
    MyApp,
    //AboutPage,
    ContactPage,
    //HomePage,
    TabsPage,
    BoatList,
    AddBoat
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //AboutPage,
    ContactPage,
    //HomePage,
    TabsPage,
    BoatList,
    AddBoat
  ],
  providers: [
    StatusBar,
    MyService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
