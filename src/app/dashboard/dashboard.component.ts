import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { StateService } from '../state.service';
import { User } from '../models/user.interface';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

role: string;
uid: string;

  constructor(
    private api: ApiService,
    private router: Router,
    private state: StateService
  ) {
    this.role = state.getRole();
    this.uid = state.getUid();
  }


// common
  logout() {
    this.api.logout();
    this.router.navigate(['']);
  }

}
