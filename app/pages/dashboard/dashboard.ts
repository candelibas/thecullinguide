import {Page, NavController, IonicApp} from 'ionic-angular';
import {News} from '../news/news';
// https://angular.io/docs/ts/latest/api/core/Type-interface.html
import {Type} from 'angular2/core';

@Page({
  templateUrl: 'build/pages/dashboard/dashboard.html',
})



export class Dashboard {

  public pages: Array<{ title: string, component: Type }>


  constructor(private nav: NavController, private app: IonicApp) {

    this.nav = nav;

    this.pages = [
      { title: 'News', component: News },
      //{ title: 'Airdrops', component: Airdrops }

    ];
  }

  /*
  * Just push our pages
  */
  openPage(page) {
    this.nav.push(page.component);
  }



}
