import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ObjectUtilService {
  // Check if object is empty
  isEmpty(obj: any): boolean {
    return (
      obj !== null &&
      typeof obj === 'object' &&
      !Array.isArray(obj) &&
      Object.keys(obj).length === 0
    );
  }

  //  Deep comparison
  deepEqual(a: any, b: any): boolean {
    if (a === b) return true;
    if (typeof a !== typeof b) return false;
    if (typeof a === 'object' && a !== null && b !== null) {
      const keysA = Object.keys(a);
      const keysB = Object.keys(b);
      if (keysA.length !== keysB.length) return false;
      return keysA.every(key =>
        this.deepEqual(a[key], b[key])
      );
    }
    return false;
  }
  // Remove null, undefined and empty string properties
  removeEmptyProps(obj: any): any {
    const result: any = {};
    Object.keys(obj || {}).forEach(key => {
      const value = obj[key];
      if (value !== null && value !== undefined && value !== '') {
        result[key] = value;
      }
    });
    return result;
  }
  // Pick selected properties from object
  pick(obj: any, keys: string[]): any {
    const result: any = {};
    keys.forEach(key => {
      if (obj && key in obj) {
        result[key] = obj[key];
      }
    });
    return result;
  }
}
