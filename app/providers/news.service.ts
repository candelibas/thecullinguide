import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()

export class NewsService {

  private news;

  constructor(private http: Http) {

  }

  get() {
    return this.http.get("http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=437220&count=5&maxlength=300&format=json")
      .map(res => res.json());
  }

}
