import {Pipe, PipeTransform} from 'angular2/core';

/*
* The purpose of this pipe is, getting the only id of the youtube video
*/
@Pipe({ name: 'videoid',  pure: false })
export class VideoidPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    if(value == null) {
      return null;
    }
    
    // This row ruined my life about 1,5 days! NOW, TURN IT INTO STRING U FUCKER!
    value = value.toString();
    
    return value.replace(/(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+(?:&|&#38;);v=))((?:\w|-|_){11})(?:(?:\?|&|&#38;)index=((?:\d){1,3}))?(?:(?:\?|&|&#38;)list=((?:\w|-|_){24}))?(?:\S+)?/g, "$1");
  }
}