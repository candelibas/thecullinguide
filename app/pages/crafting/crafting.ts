import {Page, NavController} from 'ionic-angular';
import {HTTP_PROVIDERS} from 'angular2/http';

@Page({
  templateUrl: 'build/pages/crafting/crafting.html'
})
export class Crafting {
  
  private crafting_img: string;
  
  constructor(private nav: NavController) {
    this.nav = nav;
    
    this.crafting_img = "img/crafting.png";
    
  
  }
}
