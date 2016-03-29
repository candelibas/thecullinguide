import {Page, NavController, NavParams} from 'ionic-angular';

import {PerksService} from '../../providers/perks.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Page({
  templateUrl: 'build/pages/perks/perksdetail.html',
  providers: [PerksService]
})

export class PerksDetail {
  
  private perks;
  private perkCategory;
  private title;
  
  constructor(private nav: NavController, private navParams: NavParams, private perksService: PerksService) {
    this.nav = nav;
    this.navParams = navParams;
    
    // Get the title and the perk category
    this.perkCategory = this.navParams.get("perk");
    this.title = this.navParams.get("title");
    
    this.perks = this.perksService.get(this.perkCategory).subscribe(
      perks => this.perks = perks
    );   
    
  }
  
}

