import { Component } from '@angular/core';
import { MyService } from './../../providers/my-service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  newBoat='';
  constructor(public navCtrl: NavController, public myService: MyService) {

  }

  addNewBoat(){
  
   this.myService.boatdata.push(this.newBoat)
  }
}
