import {Page, NavController, NavParams} from 'ionic-angular';
import {AirdropsService} from '../../providers/airdrops.service';
import {AirdropsDetail} from './airdropsdetail';

@Page({
  templateUrl: 'build/pages/airdrops/airdrops.html',
  providers: [AirdropsService]
})
export class Airdrops {

  private airdrops;
  private searchQuery;

  constructor(private nav: NavController, private navParams: NavParams, private airdropService: AirdropsService) {
    this.nav = nav;
    this.navParams = navParams;
    this.airdropService = airdropService;

    // initialize the search query
    this.searchQuery = '';

    // initialize our json data
    this.initializeItems();
    
  }

  // Let's get our json data
  initializeItems() {
    this.airdrops = this.airdropService.get();
  }

  // This will be triggered by (input)
  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    // Set q to the value of the searchbar
    var q = searchbar.value;

    // If the value is an empty string don't filter the items
    if (q.trim() == '') {
      return;
    }

    this.airdrops = this.airdrops.filter((v) => {
      if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })
  }




}
