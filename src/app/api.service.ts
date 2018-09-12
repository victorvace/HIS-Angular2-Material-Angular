import { Injectable } from '@angular/core';
import { User } from '../app/models/user.interface';
import { StateService } from './state.service';
import { History } from './models/history.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  newUser: User;

  users: Array < User > = [
    { role: 'admin', uid: '000', name: 'Manolo', surname: 'Fernandez', dni: '123456789K', email: 'manolo@email.com', password: '0' },
    { role: 'technical', uid: '001', name: 'Juan Elias', surname: 'Guerra', dni: '123456789N', email: 'jelias@email.com', password: '1' },
    { role: 'doctor', uid: '010', name: 'Víctor', surname: 'Vanaclocha', dni: '123456789L', email: 'victor@email.com', password: '10' },
    { role: 'doctor', uid: '011', name: 'Kike', surname: 'Martinez', dni: '123456789M', email: 'kike@email.com', password: '11' },
    { role: 'patient', uid: '100', name: 'Juan', surname: 'Garnica', dni: '123456789G', email: 'juan@email.com', password: '100' },
    { role: 'patient', uid: '101', name: 'Xavi', surname: 'Rodriguez', dni: '123456789C', email: 'xavi@email.com', password: '101' },
    { role: 'patient', uid: '102', name: 'Javi', surname: 'Olmo', dni: '123456789D', email: 'javi@email.com', password: '102' }
  ];

// JSON.parse(localstorage.getItem('string')) || ARRAY

  records: Array < History > = [
    { userId: '000', doctorId: '010', log: ['Enfermedad1', 'Enfermedad2', 'Enfermedad3', 'Enfermedad4']},
    { userId: '100', doctorId: '010', log: ['Enfermedad1', 'Enfermedad2', 'Enfermedad3', 'Enfermedad4']},
    { userId: '101', doctorId: '010', log: ['Enfermedad1', 'Enfermedad2']},
    { userId: '102', doctorId: '011', log: ['Enfermedad1', 'Enfermedad2', 'Enfermedad3']},
    { userId: '100', doctorId: '000', log: ['Enfermedad1', 'Enfermedad2', 'Enfermedad3', 'Enfermedad4']},
    { userId: '101', doctorId: '000', log: ['Enfermedad1', 'Enfermedad2']}
  ];

  constructor( private state: StateService) { }

  // Login

  public login(email, pass) {
    const userObject = this.users.find( item => item.email === email && item.password === pass);

    if ( userObject ) {
      this.state.login( userObject );
    }
    return userObject;
  }

  public logout() {
    this.state.logout();
  }

  // User
  public addNewUser(newUser) {
    return null;
  }

  public getUsers() {
    return this.users;
  }

  public getUser(id) {
    return this.users.find( item => item.uid === id);
  }

  // Medico
  public getListMedicos() {
    return this.users.filter( item => item.role === 'doctor' );
  }

  public getMedico(id) {
    return null;
  }

  public createMedico() {
    return null;
  }

  public setMedico(id) {
    return null;
  }

  public deleteMedico(id) {
    return null;
  }

    // Técnico
  public getListTecnico() {
    return null;
  }

  public getTecnico(id) {
    return null;
  }

  public createTecnico() {
    return null;
  }

  public setTecnico(id) {
    return null;
  }

  public deleteTecnico(id) {
    return null;
  }

  // Paciente
  public getListPacientes() {
    return this.users.filter( item => item.role === 'patient');
  }

  public getPaciente(id) {
    return this.users.find( item => item.uid === id);
  }

  public createPaciente() {
    return null;
  }

  public setPaciente(id) {
    return null;
  }

  public deletePaciente(id) {
    return null;
  }

  //  Citas
  public getListCitas() {
    return null;
  }

  public getCita() {
    return null;
  }

  public createCita(uid) {
    return null;
  }

  public setCita() {
    return null;
  }

  public deleteCita() {
    return null;
  }

  // Historial
  public getListHistoriales(id) {
    return this.records.filter( item => item.doctorId === id);
  }

  public getHistorial(id) {
    return this.records.find( item => item.userId = id );
  }

  public createHistorial() {
    return null;
  }

  public setHistorial() {
    return null;
  }

  public deleteHistorial() {
    return null;
  }

}

