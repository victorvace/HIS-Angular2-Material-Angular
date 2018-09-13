import { Component, NgModule } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { StateService } from '../state.service';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { MenuComponent } from '../menu/menu.component';

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
  newUser = {
    role: '',
    uid: '',
    name: '',
    surname: '',
    dni: '',
    email: '',
    password: ''
  };

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
  }

  options: string[] = ['patient', 'doctor', 'technical'];

  matcher = new MyErrorStateMatcher();

  rolControl = new FormControl('', [Validators.required]);

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
    this.newUser.role = this.rolControl.value;
    this.newUser.email = this.emailFormControl.value;
    if (this.password === this.password2) {
      this.newUser.password = this.password;
    } else {
      console.log('error');
    }
    console.log(this.newUser);

    this.api.addNewUser(this.newUser);
  }

  reset() {
    this.newUser.role = null;
    this.newUser.name = '';
    this.newUser.surname = '';
    this.newUser.dni = '';
    this.newUser.email = '';
    this.emailFormControl.setValue('');
    this.newUser.password = '';
    this.password = '';
    this.password2 = '';
    this.hide = true;
    console.log('Reseteado');
  }

}
