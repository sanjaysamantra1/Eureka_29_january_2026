import { Pipe, PipeTransform } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Pipe({
  name: 'mysort',
  pure:false
})
export class MysortPipe implements PipeTransform {

  transform(arr: any) {
    console.log('mysort pipe')
    return arr.sort((a: number, b: number) => a - b);
  }

}
