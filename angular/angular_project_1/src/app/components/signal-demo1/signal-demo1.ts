import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-demo1',
  imports: [],
  templateUrl: './signal-demo1.html',
  styleUrl: './signal-demo1.css',
})
export class SignalDemo1 {
  cookieCount: WritableSignal<number> = signal(10);
  butter = computed(() => this.cookieCount() * 0.1);
  sugar = computed(() => this.cookieCount() * 0.05);
  flour = computed(() => this.cookieCount() * 0.2);
  updateCookieCount(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cookieCount.set(parseInt(input.value));
  }

  // Counter Example variables
  num: WritableSignal<number> = signal(0);
  messages: WritableSignal<string[]> = signal([]);
  numDouble: Signal<number> = computed(() => this.num() * 2);
  numSquare: Signal<number> = computed(() => this.num() * this.num());

  increment() {
    this.num.update((value: number) => value + 1);
    this.messages.set([...this.messages(), `Value of Num is: ${this.num()}`]);
  }
  decrement() {
    this.num.update((val: number) => val - 1);
    this.messages().pop();
    this.messages.set([...this.messages()]);
  }
  reset() {
    this.num.set(0);
    this.messages.set([]);
  }
}
