import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyService } from './../../providers/my-service';
/*
  Generated class for the Addboat page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-addboat',
  templateUrl: 'addboat.html'
})
export class AddBoat {
  newBoat='';
  constructor(public navCtrl: NavController, public myService: MyService) {

  }

  addNewBoat(){
  
   this.myService.boatdata.push(this.newBoat)
  }
}

