import { CanActivateFn } from '@angular/router';
import { UserInfoService } from '../services/user-info-service';
import { inject } from '@angular/core';

export const trainerGuard: CanActivateFn = (route, state) => {
  const userInfoService = inject(UserInfoService);

  if (userInfoService.getUserRole() === 'trainer') {
    return true;
  } else {
    alert('You are not allowed to open this page');
    return false;
  }
};
