import {Page, NavController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/airdrops/airdropsdetail.html'
})

export class AirdropsDetail {

  private name;
  private img;

  constructor(private nav: NavController, private navParams: NavParams) {
    this.nav = nav;
    this.navParams = navParams;

    this.name = navParams.get('name');
    this.img = navParams.get('img');


  }

}
