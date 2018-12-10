import { Component } from '@angular/core';

import { ClavierPage } from '../clavier/clavier';
import { ContactPage } from '../contact/contact';
// @Component({
//   templateUrl: 'tabs.html'
// })
// export class TabsPage {

//   tab1Root = ContactPage;
//   tab2Root = ClavierPage;
//   tab3Root = HomePage;


//   constructor() {

//   }
// }
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root = ContactPage;
  tab2Root = ClavierPage;

  constructor() {

  }
}