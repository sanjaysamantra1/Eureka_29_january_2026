import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  userRole = 'student';
  getUserRole() {
    return this.userRole;
  }
}
