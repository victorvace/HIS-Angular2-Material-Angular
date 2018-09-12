import { Component, NgModule } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroupDirective, NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { ErrorStateMatcher } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  LoginPass: string;
  hide = true;

  constructor (
    private api: ApiService,
    private router: Router,
    public snackBar: MatSnackBar
    ) {}

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

  login() {
    if (this.api.login(this.emailFormControl.value, this.LoginPass)) {
      this.router.navigate(['dashboard']);
    } else {
      this.emailFormControl.setValue('');
      this.LoginPass = '';
      this.hide = true;
      this.snackBar.open('Email y/o contraseña incorrectos', 'ok', {
        duration: 3000,
      });
    }
  }
}
