import {Page, NavController} from 'ionic-angular';
import {HTTP_PROVIDERS} from 'angular2/http';
import {PotwService} from '../../providers/potw.service';
import {ValuesPipe} from './potw.pipe';
import {VideoidPipe} from './videoid.pipe';


@Page({
  templateUrl: 'build/pages/potw/potw.html',
  providers: [PotwService],
  pipes: [ValuesPipe, VideoidPipe]
})

export class Potw {
  
  public links;
  // Our regex pattern that's explodes our youtube video IDs
  private regex_pattern = /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+(?:&|&#38;);v=))((?:\w|-|_){11})(?:(?:\?|&|&#38;)index=((?:\d){1,3}))?(?:(?:\?|&|&#38;)list=((?:\w|-|_){24}))?(?:\S+)?/g;
  
  constructor(private nav: NavController, private potwService: PotwService) {
    this.nav = nav;
    this.potwService = potwService; 
    
    this.links = this.potwService.get().subscribe(
      
      // It's time use our regex for youtube links
      links => {
        this.links = links.data.content_md;
        this.links = this.links.match(this.regex_pattern);
      },
      error => console.log(error)
    );
        
  }
  
}