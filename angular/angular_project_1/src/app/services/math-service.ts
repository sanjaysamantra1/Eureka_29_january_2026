import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  sum(arr: number[]): number {
    return arr.reduce((acc, val) => acc + val, 0);
  }
  average(arr: number[]): number {
    if (!arr.length) return 0;
    return this.sum(arr) / arr.length;
  }
  multiply(arr: number[]): number {
    return arr.reduce((acc, val) => acc * val, 1);
  }
  difference(arr: number[]): number {
    if (!arr.length) return 0;
    return arr.reduce((acc, val) => acc - val);
  }
  percentage(part: number, total: number): number {
    if (!total) return 0;
    return (part / total) * 100;
  }
}
