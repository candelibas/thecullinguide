import {Page, NavController} from 'ionic-angular';
import {ItemsDetail} from './itemsdetail';

@Page({
  templateUrl: 'build/pages/items/items.html',
})

export class Items {
  
  private items;
  
  constructor(private nav: NavController) {
    this.nav = nav;
    
    this.items = [ 
      {title: "Crafting", src: "crafting", icon: "build"},
      {title: "Weapons", src: "weapons", icon: "warning"},
      {title: "Stims", src: "stims", icon: "thermometer"},
      {title: "Traps", src: "traps", icon: "square"},
      {title: "Explosives", src: "explosives", icon: "nuclear"},
      {title: "Healing", src: "healing", icon: "medkit"},
      {title: "Armors", src: "armors", icon: "help-buoy"}
      
    ]
    
  }
  
  goItemType(page, title) {
    
    this.nav.push(ItemsDetail, {src: page, title: title});
    
  }
  
}
