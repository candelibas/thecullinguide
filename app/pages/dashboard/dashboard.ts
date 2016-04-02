import {Page, NavController, IonicApp, Modal} from 'ionic-angular';

import {News} from '../news/news';
import {Airdrops} from '../airdrops/airdrops';
import {Map} from '../map/map';
import {Perks} from '../perks/perks';
import {Crafting} from '../crafting/crafting';
import {Potw} from '../potw/potw';

import {AboutModal} from './aboutmodal'

// https://angular.io/docs/ts/latest/api/core/Type-interface.html
import {Type} from 'angular2/core';


@Page({
  templateUrl: 'build/pages/dashboard/dashboard.html',
})


export class Dashboard {

  public pages: Array<{ title: string, component: Type, icon: string }>

  constructor(private nav: NavController, private app: IonicApp) {

    this.nav = nav;

    // Let's define the pages
    this.pages = [
      { title: 'News', component: News, icon: 'list-box' },
      { title: 'Airdrops', component: Airdrops, icon: 'jet' },
      { title: 'Perks', component: Perks, icon: 'cog' },
      { title: 'Crafting', component: Crafting, icon: 'build' },
      { title: 'MAP', component: Map, icon: 'map' },
      { title: 'Play of the Week', component: Potw, icon: 'videocam'}

    ];
  }

  /*
  * Just push our pages
  */
  openPage(page) {
    this.nav.push(page.component);
  }
  
  /*
  * Shows the about modal
  */
  showAboutModal() {
    let modal = Modal.create(AboutModal);
    this.nav.present(modal)
  }



}
