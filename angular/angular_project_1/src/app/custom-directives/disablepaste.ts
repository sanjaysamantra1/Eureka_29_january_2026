import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisablepaste]',
})
export class Disablepaste {

  @HostListener('copy', ['$event'])
  @HostListener('paste', ['$event'])
  onCopyOrPatse(event: any) {
    console.log('event ', event.type, 'dont worry i make sure noone is copying or pasting')
    event.preventDefault();
  }

}
