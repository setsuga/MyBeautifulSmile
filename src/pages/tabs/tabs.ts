import { Component } from '@angular/core';

import { AdultsPage } from '../adults/adults';
import { KidsPage } from '../kids/kids';
import { DentistsPage } from '../dentists/dentists';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AdultsPage;
  tab3Root = KidsPage;
  tab4Root = DentistsPage;

  constructor() {

  }
}
