import { HttpClient } from '@angular/common/http';
import { Component, signal, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  imports: [],
  templateUrl: './userdetails.html',
  styleUrl: './userdetails.css',
})
export class Userdetails {
  // Read UserId From URL , Fetch Details From API using that ID, display the data in UI
  user: any = signal({});
  httpClient = inject(HttpClient);
  activatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${params['id']}`).subscribe(response => {
        this.user.set(response)
      })
    })
  }
}
