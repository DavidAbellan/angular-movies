import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setStars'
})
export class SetStarsPipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    let stars = Math.round (value / 2);
    return stars ;
  }

}
