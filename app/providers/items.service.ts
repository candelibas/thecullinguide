import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';


@Injectable()

export class ItemsService {
  
  private category;
  
  constructor(private http: Http) {
    this.http = http;
  }
  
  get(category) {
    if(category == "crafting") {
      // load json data
      this.category = this.http.get("data/crafting.json").map(res => res.json());
    }
    else if(category == "weapons") {
      // load json data
      this.category = this.http.get("data/weapons.json").map(res => res.json());
    }
    else if(category == "stims") {
      // load json data
      this.category = this.http.get("data/stims.json").map(res => res.json());
    }
    else if(category == "traps") {
      // load json data
      this.category = this.http.get("data/traps.json").map(res => res.json());
    }
    else if(category == "explosives") {
      // load json data
      this.category = this.http.get("data/explosives.json").map(res => res.json());
    }
    else if(category == "healing") {
      // load json data
      this.category = this.http.get("data/healing.json").map(res => res.json());
    }
    else if(category == "armors") {
      // load json data
      this.category = this.http.get("data/armors.json").map(res => res.json());
    }
    else {
      return false;
    }
    
    return this.category;
  }
}