import {Page, NavController, NavParams} from 'ionic-angular';
import {AirdropsService} from '../../providers/airdrops.service';
import {AirdropsDetail} from './airdropsdetail';

@Page({
  templateUrl: 'build/pages/airdrops/airdrops.html',
  providers: [AirdropsService]
})
export class Airdrops {

  private airdrops;

  constructor(private nav: NavController, private navParams: NavParams, private airdropService: AirdropsService) {
    this.nav = nav;
    this.navParams = navParams;

    this.airdrops = airdropService.get();

  }

}
