import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextonly]',
})
export class Textonly {
  @HostBinding('style.background-color')
  myBgColor: string = '';

  @HostListener('keyup', ['$event'])
  handleKeyUp(event: any) {
    const value = event.target.value;
    let regex = new RegExp(/[a-z]+$/);   // Text Only
    if (!regex.test(value)) {
      this.myBgColor = 'red';
    } else {
      this.myBgColor = 'cyan';
    }
  }

}
