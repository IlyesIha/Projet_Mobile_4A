import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPageContactPage } from './add-page-contact';

@NgModule({
  declarations: [
    AddPageContactPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPageContactPage),
  ],
})
export class AddPageContactPageModule {}
