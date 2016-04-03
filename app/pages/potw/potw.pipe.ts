import {Pipe, PipeTransform} from 'angular2/core';

/*
* This pipe is for taking the object's values as an array
*/
@Pipe({ name: 'values',  pure: false })
export class ValuesPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value).map(key => value[key]);
  }
}

