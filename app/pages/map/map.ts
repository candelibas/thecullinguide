import {Page, NavController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/map/map.html',
})
export class Map {

  constructor(private nav: NavController) {
    this.nav = nav;
  }
}
