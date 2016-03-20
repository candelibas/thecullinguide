import {Page, NavController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/news/news.html',
})
export class News {

  constructor(private nav: NavController) {
    this.nav = nav;
  }
}
