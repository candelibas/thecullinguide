import {Page, NavController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/news/newsdetail.html'
})


export class NewsDetail {

  private title;
  private contents;

  constructor(private nav: NavController, private navParams: NavParams) {
    this.nav = nav;

    this.navParams = navParams;

    this.title = navParams.get('title');
    this.contents = navParams.get('contents');

  }
}
