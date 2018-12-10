import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from "../../models/item/item.model"
import { AngularFireDatabase } from "@angular/fire/database";


/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  item : {};

  constructor(public navCtrl: NavController, public navParams: NavParams,public afDB: AngularFireDatabase) {
    this.item = navParams.get("data");
    console.log("item",this.item); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
  suppItem(key: number) {
    const toRemove = this.afDB.object(`/contact-list/${key}`);
    toRemove.remove();
    this.navCtrl.pop();
  }

}
