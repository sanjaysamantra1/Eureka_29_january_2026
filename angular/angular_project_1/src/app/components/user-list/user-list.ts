import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  user_api = 'https://jsonplaceholder.typicode.com/users';
  userArr: any = signal([]);

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.fetchUserDataJavascript()
    this.fetchUserDataAngular()
  }

  fetchUserDataJavascript() {  // fetch() return Promise
    fetch(this.user_api).then(
      (response) => {
        response.json().then(
          (finalResponse) => {
            console.log(finalResponse)
          },
          (err) => {
            console.log(err)
          }
        )
      },
      (err) => {
        console.log(err)
      }
    )
  }

  fetchUserDataAngular() { // httpClient.get()  return observable
    this.httpClient.get(this.user_api).subscribe((response) => {
      console.log(response);
      this.userArr.set(response);
    })
  }

}
