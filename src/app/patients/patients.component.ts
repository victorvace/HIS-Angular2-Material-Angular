import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { StateService } from '../state.service';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  user: User;
  uid: string;

  datos: any;

  constructor(
    private api: ApiService,
    private router: Router,
    private state: StateService
  ) {
    this.user = state.isLogged();
  }

  ngOnInit() {
    this.getPacientes();
  }

  getPacientes() {
    if (this.user.role === 'doctor') {
      this.datos = this.api.getListPacientes();
    }
  }

}
