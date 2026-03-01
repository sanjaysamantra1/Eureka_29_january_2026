import { Component, OnChanges, ViewChild } from '@angular/core';
import { Child1 } from '../child1/child1';
import { Child2 } from '../child2/child2';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Demo1 } from '../demo1/demo1';
import { Demo2 } from '../demo2/demo2';

@Component({
  selector: 'app-parent',
  imports: [
    FormsModule,
    Child1,
    Child2,
    Demo1,
    Demo2
  ],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent  {
  a: number;
  num: number;
  // httpClient = new HttpClient();   // though it's valid , its not recomended
  flag = true;

  parentUserRole = ''
  receiveData(userRole: string) {
    this.parentUserRole = userRole;
  }

  user = {
    name: 'pavan',
    skills: ['Angular', 'Java']
  }
  @ViewChild('myInputBox') myInputBox: any;

  constructor(private httpClient: HttpClient) { // Dependency Injection
    console.log("Parent constructor");
    this.a = 10;
    this.num = 0;
    console.log(this.myInputBox)
  }
  // ngOnChanges() {
  //   console.log('Parent ngOnChanges');
  // }
  // ngOnInit() {
  //   console.log('Parent ngOnInit');
  // }
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
  //   console.log(this.myInputBox)
  //   this.myInputBox.nativeElement.focus();
  //   this.myInputBox.nativeElement.style.backgroundColor = 'red';
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
