import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  // pure: false
})
export class RemainingPipe implements PipeTransform {
  transform(str: string) {
    console.log('Remaining Pipe...')
    return 100 - str.length;
  }
}
