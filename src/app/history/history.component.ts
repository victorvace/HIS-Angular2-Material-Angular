import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StateService } from '../state.service';
import { User } from '../models/user.interface';
import { MenuComponent } from '../menu/menu.component';

export interface Element {
  paciente: string;
  doctor: string;
  enfermedad: string;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements OnInit {
  uid: string;

  userDoctor: User;
  userPaciente: User;
  log: Array < string >;

  ELEMENT_DATA: Element[] = [];
  displayedColumns: string[] = ['paciente', 'doctor', 'enfermedad'];
  dataSource;

  listHistoriales: any;

  constructor(
    private api: ApiService,
    private router: Router,
    private state: StateService,
    private route: ActivatedRoute
  ) {
    this.uid =  this.route.snapshot.paramMap.get('id');
  }

  columNames = [
    { id: 'paciente', value: 'Paciente' },
    { id: 'doctor', value: 'Docotor' },
    { id: 'enfermedad', value: 'Descripción' }
  ];

  ngOnInit() {
    this.userPaciente = this.api.getUser(this.uid);
    this.getHistoriales();
    this.createTable();
  }

  getHistoriales() {
      this.listHistoriales =  this.api.getHistorial(this.uid);
      this.log = this.listHistoriales.log;
      this.userDoctor = this.api.getUser(this.listHistoriales.doctorId);
  }

  createTable() {

    for (let i = 0; i < this.log.length; i++) {
      const enfermedad: Element = {
        paciente: this.userPaciente.name,
        doctor: this.userDoctor.name,
        enfermedad: this.log[i]
      };
      this.ELEMENT_DATA.push(enfermedad);
      console.log(enfermedad);
    }

    this.dataSource = this.ELEMENT_DATA;
  }
}
