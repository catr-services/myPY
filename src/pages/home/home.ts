import { Component } from '@angular/core';
import { MyService } from './../../providers/my-service'
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myArray=['Fireball','RS100'];
  constructor(public navCtrl: NavController, public myService: MyService)
   {

  }

}
