import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class HistoriesGuard implements CanActivate {

  constructor(private state: StateService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.state.getRole() === 'doctor') {
      return true;
    } else if (this.state.getRole() === 'admin') {
      return true;
    } else {
      return false;
    }

  }
}
