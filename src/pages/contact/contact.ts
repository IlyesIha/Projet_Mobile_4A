import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddContactPage } from "../../pages/add-contact/add-contact";
//import { HomePage } from '../home/home';
import {AngularFireDatabase} from "@angular/fire/database";


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  items: {}[];
   

  constructor(public navCtrl: NavController,afDB: AngularFireDatabase) {
    afDB
      .list("/contact-list")
      .valueChanges()
      .subscribe((data) => {
        this.items = data;
      });
      }
  
  addContact(){
      this.navCtrl.push(AddContactPage);
    }

    // itemSelected(item: Object) {
    //   this.navCtrl.push(HomePage, {
    //     data : item
    //   })
    // }
  
}
