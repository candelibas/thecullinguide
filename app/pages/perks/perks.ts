import {Page, NavController, NavParams} from 'ionic-angular';
import {PerksDetail} from './perksdetail'

@Page({
  templateUrl: 'build/pages/perks/perks.html',
})
export class Perks {
  
  public perks;
  
  constructor(private nav: NavController) {
    this.nav = nav;
  }
  
  /*
  * Send the 
  *
  */
  goPerksDetail(page, title) {
    this.nav.push(PerksDetail, {perk: page, title: title});
  }
}
