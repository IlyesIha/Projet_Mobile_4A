import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddContactPage } from "../../pages/add-contact/add-contact";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  addContact(){
      this.navCtrl.push(AddContactPage);
    }
}
