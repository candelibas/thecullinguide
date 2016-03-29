import {Page, NavController, NavParams} from 'ionic-angular';
import {NewsService} from '../../providers/news.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {NewsDetail} from './newsdetail';

@Page({
  templateUrl: 'build/pages/news/news.html',
  providers: [NewsService, HTTP_PROVIDERS]
})
export class News {

  private news;

  constructor(private nav: NavController, private navParams: NavParams, private newsService: NewsService) {
    this.nav = nav;
    this.navParams = navParams;

    this.news = newsService.get().subscribe(
      news => this.news = news
    );
  }

  newsDetail(title, contents) {
    this.nav.push(NewsDetail, {title: title, contents: contents});
  }

}
