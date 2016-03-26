import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()

export class AirdropsService {

  private airdrops;
  constructor() {
    this.airdrops = this.load();
  }

  get() {
    return this.airdrops;
  }

  load() {
    return [
    	{
    	  "name" : "Addict",
    	  "img" : "img/airdrops/stalker.png"
    	},
    	{
    	  "name" : "Archer",
    	  "img" : "img/airdrops/archer.png"
    	},
    	{
    	  "name" : "Bandito",
    	  "img" : "img/airdrops/bandito.png"
    	},
    	{
    	  "name" : "Boar Hunter",
    	  "img" : "img/airdrops/boarhunter.png"
    	},
    	{
    	  "name" : "Carjacker",
    	  "img" : "img/airdrops/carjacker.png"
    	},
    	{
    	  "name" : "Chef",
    	  "img" : "img/airdrops/chef.png"
    	},
    	{
    	  "name" : "Climber",
    	  "img" : "img/airdrops/climber.png"
    	},
    	{
    	  "name" : "Commando",
    	  "img" : "img/airdrops/commando.png"
    	},
    	{
    	  "name" : "Dwarf",
    	  "img" : "img/airdrops/dwarf.png"
    	},
    	{
    	  "name" : "Five-oh",
    	  "img" : "img/airdrops/fiveoh.png"
    	},
    	{
    	  "name" : "Guerilla",
    	  "img" : "img/airdrops/guerilla.png"
    	},
    	{
    	  "name" : "Hoodlum",
    	  "img" : "img/airdrops/hoodlum.png"
    	},
    	{
    	  "name" : "Hunter",
    	  "img" : "img/airdrops/hunter.png"
    	},
    	{
    	  "name" : "Javelineer",
    	  "img" : "img/airdrops/javelineer.png"
    	},
    	{
    	  "name" : "Juggler",
    	  "img" : "img/airdrops/juggler.png"
    	},
    	{
    	  "name" : "Lumberjack",
    	  "img" : "img/airdrops/lumberjack.png"
    	},
    	{
    	  "name" : "Medic",
    	  "img" : "img/airdrops/medic.png"
    	},
    	{
    	  "name" : "Ninja",
    	  "img" : "img/airdrops/ninja.png"
    	},
    	{
    	  "name" : "Pirate",
    	  "img" : "img/airdrops/pirate.png"
    	},
    	{
    	  "name" : "Plumber",
    	  "img" : "img/airdrops/plumber.png"
    	},
    	{
    	  "name" : "Pothead",
    	  "img" : "img/airdrops/pothead.png"
    	},
    	{
    	  "name" : "Sapper",
    	  "img" : "img/airdrops/sapper.png"
    	},
    	{
    	  "name" : "Self Defence",
    	  "img" : "img/airdrops/bandito.png"
    	},
    	{
    	  "name" : "Slugger",
    	  "img" : "img/airdrops/slugger.png"
    	},
    	{
    	  "name" : "Smuggler",
    	  "img" : "img/airdrops/smuggler.png"
    	},
    	{
    	  "name" : "Sniper",
    	  "img" : "img/airdrops/sniper.png"
    	},
    	{
    	  "name" : "Stalker",
    	  "img" : "img/airdrops/stalker.png"
    	},
    	{
    	  "name" : "Survivalist",
    	  "img" : "img/airdrops/survivalist.png"
    	},
    	{
    	  "name" : "S.W.A.T.",
    	  "img" : "img/airdrops/swat.png"
    	},
    	{
    	  "name" : "Surprise Me!",
    	  "img" : "img/airdrops/surpriseme.png"
    	}
    ]

  }

}
