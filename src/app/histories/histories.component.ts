import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { StateService } from '../state.service';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-histories',
  templateUrl: './histories.component.html',
  styleUrls: ['./histories.component.css']
})
export class HistoriesComponent implements OnInit {
  user: User;

  patientId: string;
  doctorId: string;

  listHistoriales: any;
  listaUsuarios: User[];
  listaDoctores: User[];

  constructor(
    private api: ApiService,
    private router: Router,
    private state: StateService
  ) {
    this.user = state.isLogged();
  }

  ngOnInit() {
    this.getHistoriales();
    this.getUsuarios();
    this.getDoctores();
    console.log(this.listHistoriales);
  }

  getHistoriales() {
    if (this.user.role === 'doctor') {
      this.listHistoriales =  this.api.getListHistoriales(this.user.uid);
    }
  }

  getUsuarios(): any {
    if (this.user.role === 'doctor') {
      this.listaUsuarios =  this.api.getUsers();
    }
  }

  getDoctores() {
    if (this.user.role === 'doctor') {
      this.listaDoctores = this.api.getListMedicos();
    }
  }
}
