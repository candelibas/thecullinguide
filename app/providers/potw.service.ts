import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()

export class PotwService {
  
  private api_url: string;
  
  constructor(private http: Http) {
    this.http = http;
    this.api_url = "https://api.reddit.com/r/survivetheculling/wiki/potw";
  }
  
  get() {
    return this.http.get(this.api_url).map(res => res.json());
  }
  
}