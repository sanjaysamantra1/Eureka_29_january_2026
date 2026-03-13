import { CanDeactivateFn } from '@angular/router';

export const canExitGuard: CanDeactivateFn<unknown> = (component:any, currentRoute, currentState, nextState) => {
  if(component.hasChanges){
    alert('Plz save the page Before You Leave')
    return false;
  }else{
    return true;
  }
};
