import { Component } from '@angular/core';
import { NavController, Item } from 'ionic-angular';
import { AddContactPage } from "../../pages/add-contact/add-contact";
import { AngularFireDatabase } from "@angular/fire/database";
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  items: Array<Object>;
   

  constructor(public navCtrl: NavController,afDB: AngularFireDatabase) {
    afDB
      .list("/contact-list")
      .valueChanges()
      .subscribe((data) => {
        this.items = data;
        console.log("items",this.items);
      });
      }
  
  addContact(){
      this.navCtrl.push(AddContactPage);
    }

    addPage(){
      this.navCtrl.push(AddContactPage);
    }
  
    itemSelected(item: Object) {
      this.navCtrl.push(DetailsPage, {
        data : item
      })
    }

    
}
