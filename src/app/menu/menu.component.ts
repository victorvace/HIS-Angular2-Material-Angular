import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { StateService } from '../state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  name: string;
  @Input() titulo: string;

  constructor(
    private api: ApiService,
    private router: Router,
    private state: StateService
  ) {
    const user = state.isLogged();
    this.name = user.name;
  }

  logout() {
    this.api.logout();
    this.router.navigate(['']);
  }


}
