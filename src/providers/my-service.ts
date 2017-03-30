import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MyService {
  public boatdata: any = ['Fireball','RS100','FF15'];

  constructor() {
    console.log('Hello MyService Provider');
  }

}
