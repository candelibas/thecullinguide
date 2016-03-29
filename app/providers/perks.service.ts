import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()

export class PerksService {
  
  private perk;
  
  constructor(private http: Http) {
    this.http = http;
    
    
  }
  
  get(perk) {
    
    if(perk == "generaldefence") {
      // load json
      this.perk = this.http.get("data/perks/generaldefence.json").map(res => res.json());
    }
    else if(perk == "generaloffense") {
      // load json
      this.perk = this.http.get("data/perks/generaloffense.json").map(res => res.json());
    }
    else if(perk == "healthstamina") {
      // load json
      this.perk = this.http.get("data/perks/healthstamina.json").map(res => res.json());
    }
    else if(perk == "meleeweapons") {
      // load json
      this.perk = this.http.get("data/perks/meleeweapons.json").map(res => res.json());
    }
    else if(perk == "rangedweapons") {
      // load json
      this.perk = this.http.get("data/perks/rangedweapons.json").map(res => res.json());
    }
    else if(perk == "utility"){
      // load json
      this.perk = this.http.get("data/perks/utility.json").map(res => res.json());
    }
    else {
      return false;
    }
    
    return this.perk;
    
  }
  
     
  
}