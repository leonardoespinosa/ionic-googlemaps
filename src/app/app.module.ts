import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Transactions } from '../pages/transactions/transactions';
import { Adding } from '../pages/adding/adding';
import { GeolocationService } from '../services/geolocation.service';
import { Map } from '../pages/map/map';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Transactions,
    Adding,
    Map
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Transactions,
    Adding,
    Map
  ],
  providers: [GeolocationService]
})
export class AppModule {}
