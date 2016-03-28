import {Page, NavController, IonicApp} from 'ionic-angular';
import {News} from '../news/news';
import {Airdrops} from '../airdrops/airdrops';
import {Map} from '../map/map';

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
      { title: 'MAP', component: Map, icon: 'map'}

    ];
  }

  /*
  * Just push our pages
  */
  openPage(page) {
    this.nav.push(page.component);
  }



}
