import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-clavier',
  templateUrl: 'clavier.html'
})
export class ClavierPage {

  numero = "";

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLeave(){
    this.numero = "";
  }

  Keyboard(chiffre : String){
    console.log(chiffre);
    var numero_temp = this.numero + chiffre;
    if (numero_temp.length <= 15){
      this.numero = numero_temp;
    }
  }

  Delete(){
    if(this.numero != null && this.numero.length > 0){
      this.numero = this.numero.substring(0, this.numero.length - 1);
    }   
  }

}
