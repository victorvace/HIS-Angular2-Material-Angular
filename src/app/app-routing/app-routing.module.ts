import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { DHistoryComponent } from '../d-history/d-history.component';
import { DPatientComponent } from '../d-patient/d-patient.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HistoriesComponent } from '../histories/histories.component';
import { HistoryComponent } from '../history/history.component';
import { LoginComponent } from '../login/login.component';
import { NewUserComponent } from '../new-user/new-user.component';
import { PatientComponent } from '../patient/patient.component';
import { PatientsComponent } from '../patients/patients.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [ {
        path: '',
        component: LoginComponent,
    }, {
        path: 'login',
        component: LoginComponent,
    }, {
        path: 'dashboard',
        component: DashboardComponent,
    }, {
        path: 'dHistory',
        component: DHistoryComponent,
    }, {
        path: 'dPatient',
        component: DPatientComponent,
    }, {
        path: 'histories',
        component: HistoriesComponent,
    }, {
        path: 'history/:id',
        component: HistoryComponent,
    }, {
        path: 'newUser',
        component: NewUserComponent,
    }, {
        path: 'patient/:id',
        component: PatientComponent,
    }, {
        path: 'patients',
        component: PatientsComponent,
    }, {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule( {
    imports: [
        CommonModule,
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ],
    declarations: []
} )
export class AppRoutingModule {}
