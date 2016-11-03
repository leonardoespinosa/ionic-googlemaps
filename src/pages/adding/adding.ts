import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Transaction } from '../../database';
import { GeolocationService } from '../../services/geolocation.service';

/*
  Generated class for the Adding page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-adding',
  templateUrl: 'adding.html'
})
export class Adding {

  model: Transaction;
  shouldGeolocate: boolean = true;
  shouldSend: boolean = true;

  constructor(public navCtrl: NavController, public geolocator: GeolocationService) {}

  ionViewDidLoad() {
    this.model = new Transaction(null, "");    
  }

  save(){
    if(this.shouldSend){
        this.model.save().then(result => {
        this.model = new Transaction(null, "");
        this.navCtrl.pop();
      });
    }
  }

  getLocation(){
    if(this.shouldGeolocate){
        this.shouldSend = false;
        this.geolocator.get().then((resultado) => {
          this.model.setCoords(resultado.coords);       
          this.shouldSend = true;   
      }).catch((err)=> console.log(err));
    }else{
      this.model.cleanCoords();
    }
  }
}
