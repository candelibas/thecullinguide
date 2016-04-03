import {Page, NavController, NavParams} from 'ionic-angular';
import {ItemsService} from '../../providers/items.service';


@Page({
  templateUrl: 'build/pages/items/itemsdetail.html',
  providers: [ItemsService]
})

export class ItemsDetail {
  
  private title;
  private src;
  private contents;
  
  constructor(private nav: NavController, private navParams: NavParams, private itemsService: ItemsService) {
    this.nav = nav;
    this.itemsService = itemsService;
    
    this.title = this.navParams.get('title');
    this.src = this.navParams.get('src');
    
    this.contents = this.itemsService.get(this.src).subscribe(
        data => data,
        error => console.log(error)
        );
    
  }
}