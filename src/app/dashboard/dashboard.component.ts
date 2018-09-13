import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { StateService } from '../state.service';


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
    const user = state.isLogged();
    this.uid = user.uid;
    this.role = user.role;
  }
}
