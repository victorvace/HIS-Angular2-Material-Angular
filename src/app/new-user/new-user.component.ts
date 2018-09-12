import { Component, OnInit, NgModule } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { StateService } from '../state.service';
import { User } from '../models/user.interface';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule
  ]
})

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  newUser: User;

  role: null | 'admin' | 'patient' | 'doctor' | 'technical';
  name: string;
  surname: string;
  dni: string;
  password: string;
  password2: string;
  hide = true;

  rols = [
    {value: 'patient', viewValue: 'Paciente'},
    {value: 'doctor', viewValue: 'Doctor'},
    {value: 'technical', viewValue: 'Técnico'}
  ];

  constructor(
    private api: ApiService,
    private router: Router,
    private state: StateService
  ) {
    const user = state.isLogged();
    this.role = user.role;
  }
  rolControl = new FormControl('', [Validators.required]);
  options: string[] = ['patient', 'doctor', 'technical'];

  matcher = new MyErrorStateMatcher();

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  getErrorMessage() {
    return this.emailFormControl.hasError('required') ? 'Debes introducir un email' :
        this.emailFormControl.hasError('email') ? 'Email no válido' :
        '';
  }

  createUser() {
    this.newUser.role = this.role;
    this.newUser.name = this.name;
    this.newUser.surname = this.surname;
    this.newUser.dni = this.dni;
    this.newUser.password = this.password;
    this.api.addNewUser(this.newUser);
    console.log('Guardado');
    console.log(this.newUser);
  }

  reset() {
    this.role = null;
    this.name = '';
    this.surname = '';
    this.emailFormControl.setValue('');
    this.password = '';
    this.password2 = '';
    this.hide = true;
    console.log('Reseteado');
  }

}
