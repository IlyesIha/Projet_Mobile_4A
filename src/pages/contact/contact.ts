import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPageContactPage } from "../../pages/add-page-contact/add-page-contact"


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  addContact(){
      this.navCtrl.push(AddPageContactPage);
    }
}
