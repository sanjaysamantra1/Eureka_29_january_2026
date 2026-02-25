import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomin]',
})
export class Zoomin {
  // ElementRef : to get access to the element where custom directive is used
  constructor(private ele: ElementRef) { } // dependency injection
  @HostListener('mouseenter')
  onMouseEnter() {
    this.ele.nativeElement.style.transform = 'scale(100%,105%)'
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.ele.nativeElement.style.transform = 'scale(100%)'
  }

}
