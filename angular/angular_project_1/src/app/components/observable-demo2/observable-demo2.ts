import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, switchMap, map, exhaustMap, fromEvent, from } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './observable-demo2.html',
  styleUrl: './observable-demo2.css',
})
export class ObservableDemo2 {
  searchResult$: Observable<any> | undefined;
  searchForm: any;
  constructor(private http: HttpClient) {
    this.searchForm = new FormGroup({
      searchField: new FormControl()
    });
  }
  ngOnInit() {
    // this.searchForm.get("searchField").valueChanges.subscribe((val: any) => console.log(val))

    this.searchResult$ = this.searchForm.get("searchField").valueChanges.pipe(
      switchMap((term) =>
        this.http.get<any>(`https://dummyjson.com/users/search?q=${term}`)
      ),
      map((response: any) =>
        response.users.length > 0 ? response.users : []
      ));
  }

  //  exhaust map
  @ViewChild('loginBtn') loginBtn!: ElementRef;

  ngAfterViewInit() {
    // without exhaustMap
    // fromEvent(this.loginBtn.nativeElement, 'click').subscribe(() => {
    //   this.http.get('https://httpbin.org/delay/5').subscribe(response => {
    //     console.log(response)
    //   })
    // })

    fromEvent(this.loginBtn.nativeElement, 'click').pipe(exhaustMap((val) => {
      return this.http.get('https://httpbin.org/delay/5')
    })).subscribe({
      next: (res) => console.log('Response:', res),
      error: (err) => console.error('Error:', err),
    })
  }

}
