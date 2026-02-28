import { Component, OnChanges } from '@angular/core';
import { Child1 } from '../child1/child1';
import { Child2 } from '../child2/child2';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [
    FormsModule,
    Child1,
    Child2
  ],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent implements OnChanges {
  a: number;
  num: number;
  // httpClient = new HttpClient();   // though it's valid , its not recomended

  parentUserRole = ''
  receiveData(userRole: string) {
    this.parentUserRole = userRole;
  }

  constructor(private httpClient: HttpClient) { // Dependency Injection
    console.log("Parent constructor");
    this.a = 10;
    this.num = 0;
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }
  ngOnInit() {
    console.log('Parent ngOnInit');
  }
  // ngDoCheck() {
  //   console.log('Parent ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked')
  // }
  // ngAfterViewInit() {
  //   console.log('Parent ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }
  // increment() {
  //   this.num++;
  // }
}
