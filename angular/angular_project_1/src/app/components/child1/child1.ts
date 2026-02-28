import { Component } from '@angular/core';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.html',
  styleUrl: './child1.css',
  inputs:['a','userName']
})
export class Child1 {
  a: any;
  userName: any;

  constructor() {
    console.log("Child-1 constructor")
  }
  ngOnChanges(myParentDataChanges:any) {
    console.log('Child-1 ngOnChanges',myParentDataChanges);
  }
  ngOnInit() {
    console.log('Child-1 ngOnInit');
  }
  // ngDoCheck() {
  //   console.log('Child-1 ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('Child-1 ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Child-1 ngAfterContentChecked')
  // }
  // ngAfterViewInit() {
  //   console.log('Child-1 ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('Child-1 ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Child-1 ngOnDestory');
  // }
}
