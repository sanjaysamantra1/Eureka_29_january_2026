import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-demo2',
  imports: [],
  templateUrl: './signal-demo2.html',
  styleUrl: './signal-demo2.css',
})
export class SignalDemo2 {
  httpClient = inject(HttpClient);

  userId = signal(1);
  userData: WritableSignal<any> = signal({});

  userDetailsEffect = effect(() => {
    const id = this.userId();
    this.fetchUserDetails(id);
  });
  
  fetchUserDetails(id: number) {
    this.httpClient
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .subscribe((response) => {
        this.userData.set(response);
      });
  }
  destroyEffect() {
    this.userDetailsEffect.destroy();
  }
  incrementUserId() {
    this.userId.update((val) => val + 1);
  }
}
