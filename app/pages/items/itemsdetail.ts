import {Page, NavController, NavParams} from 'ionic-angular';
import {ItemsService} from '../../providers/items.service';


@Page({
  templateUrl: 'build/pages/items/itemsdetail.html',
  providers: [ItemsService]
})

export class ItemsDetail {
  
  private title;
  private src;
  private items;
  
  constructor(private nav: NavController, private navParams: NavParams, private itemsService: ItemsService) {
    this.nav = nav;
    this.itemsService = itemsService;
    
    this.title = this.navParams.get('title');
    this.src = this.navParams.get('src');
    
    this.items = this.itemsService.get(this.src).subscribe(
        items => this.items = items,
        error => console.log(error)
        );
    
  }
}