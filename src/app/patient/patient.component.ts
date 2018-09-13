import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StateService } from '../state.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  datos: any;
  id: string;

  constructor(
    private api: ApiService,
    private router: Router,
    private state: StateService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this. datos = this.api.getUser(this.id);
  }

}
