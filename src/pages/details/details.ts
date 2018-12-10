import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController,ToastController} from 'ionic-angular';
import { AngularFireDatabase } from "@angular/fire/database";
import { Item } from '../../models/item/item.model';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  item : Item;

  constructor(public navCtrl: NavController, public navParams: NavParams,public afDB: AngularFireDatabase,public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController, public toastCtrl : ToastController) {
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


  addField() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Quel champs voullez vous ajouter ?'
    });
      actionSheet.addButton({
        text: 'Nom',
        handler: () => {
          this.changeNom();
        }
      });
      actionSheet.addButton({
        text: 'Prenom',
        handler: () => {
          this.changePrenom();
        }
      });
      actionSheet.addButton({
        text: 'Adresse',
        handler: () => {
          this.changeAdresse();
        }
      });
      actionSheet.addButton({
        text: 'Anniversaire',
        handler: () => {
          this.changeAnniversaire();
        }
      });
      actionSheet.addButton({
        text: 'Numero',
        handler: () => {
          this.changeNumero();
        }
      });

      actionSheet.addButton({
        text: 'Email',
        handler: () => {
          this.changeEmail();
        }
      });


    actionSheet.present();//affiche l'action sheet
  }

  changeNom(){
    const alert = this.alertCtrl.create({
          title: "Modifier le Nom",
          message: "veuillez modifier le nom",
          inputs: [{
            name: "Nom",
            placeholder: "NOM"
          }],
          buttons: [{
              text: "Annuler",
              handler: data => {
                console.log("Cancel clicked");
              }
            },
            {
              text: "Enregistrer",
              handler: data => {
                this.item.Nom = data.Nom;
                this.updateToFirebase(this.item.key);
                console.log(data);
              }
            }
          ]
        });
        alert.present();
  };

  changePrenom(){
    const alert = this.alertCtrl.create({
          title: "Modifier le Prenom",
          message: "veuillez modifier le Prenom",
          inputs: [{
            name: "Prenom",
            placeholder: "Prenom"
          }],
          buttons: [{
              text: "Annuler",
              handler: data => {
                console.log("Cancel clicked");
              }
            },
            {
              text: "Enregistrer",
              handler: data => {
                this.item.Prenom = data.Prenom;
                this.updateToFirebase(this.item.key);
                console.log(data);
              }
            }
          ]
        });
        alert.present();
  };

  changeNumero(){
    const alert = this.alertCtrl.create({
          title: "Modifier le Numero",
          message: "veuillez modifier le Numero",
          inputs: [{
            name: "Numero",
            placeholder: "NUMERO"
          }],
          buttons: [{
              text: "Annuler",
              handler: data => {
                console.log("Cancel clicked");
              }
            },
            {
              text: "Enregistrer",
              handler: data => {
                this.item.Numero = data.Numero;
                this.updateToFirebase(this.item.key);
                console.log(data);
              }
            }
          ]
        });
        alert.present();
  };

  changeAnniversaire(){
    const alert = this.alertCtrl.create({
          title: "Modifier le Anniversaire",
          message: "veuillez modifier le Anniversaire",
          inputs: [{
            name: "Anniversaire",
            placeholder: "ANNIVERSAIRE"
          }],
          buttons: [{
              text: "Annuler",
              handler: data => {
                console.log("Cancel clicked");
              }
            },
            {
              text: "Enregistrer",
              handler: data => {
                this.item.Anniversaire = data.Anniversaire;
                this.updateToFirebase(this.item.key);
                console.log(data);
              }
            }
          ]
        });
        alert.present();
  };

  changeAdresse(){
    const alert = this.alertCtrl.create({
          title: "Modifier le Adresse",
          message: "veuillez modifier le Adresse",
          inputs: [{
            name: "Adresse",
            placeholder: "ADRESSE"
          }],
          buttons: [{
              text: "Annuler",
              handler: data => {
                console.log("Cancel clicked");
              }
            },
            {
              text: "Enregistrer",
              handler: data => {
                this.item.Adresse = data.Adresse;
                this.updateToFirebase(this.item.key);
                console.log(data);
              }
            }
          ]
        });
        alert.present();
  };

  changeEmail(){
    const alert = this.alertCtrl.create({
          title: "Modifier le Email",
          message: "veuillez modifier le Email",
          inputs: [{
            name: "Email",
            placeholder: "EMAIl"
          }],
          buttons: [{
              text: "Annuler",
              handler: data => {
                console.log("Cancel clicked");
              }
            },
            {
              text: "Enregistrer",
              handler: data => {
                this.item.Email = data.Email;
                this.updateToFirebase(this.item.key);
                console.log(data);
              }
            }
          ]
        });
        alert.present();
  };

  updateToFirebase(key: string) {
    const toUpdate = this.afDB.object(`/contact-list/${key}`);
    toUpdate.update(this.item);
  }

}
