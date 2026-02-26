import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
})
export class OrdinalPipe implements PipeTransform {

  transform(value: any, ...args: any[]) {
    let rem = value % 10;

    switch (rem) {
      case 1: return value + 'st'; break;
      case 2: return value + 'nd'; break;
      case 3: return value + 'rd'; break;
      default: return value + 'th'; break;
    }
  }

}
