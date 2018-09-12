import { Injectable } from '@angular/core';
import { State } from './models/state.interface';


@Injectable({
  providedIn: 'root'
})
export class StateService {

  state: State = {
    auth: null,            // Aquí se guarda el usuario logeado
  };

  constructor() { }

  login(user) {
    this.state.auth = user;
  }

  logout() {
    this.state.auth = null;
  }

  isLogged() {
    return this.state.auth;
  }

  getRole() {
    return this.state.auth.role;
  }

  getUid() {
    return this.state.auth.uid;
  }

}
