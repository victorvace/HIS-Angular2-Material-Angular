import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';

import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HistoriesComponent } from '../histories/histories.component';
import { HistoryComponent } from '../history/history.component';
import { NewUserComponent } from '../new-user/new-user.component';
import { PatientComponent } from '../patient/patient.component';
import { PatientsComponent } from '../patients/patients.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AuthGuard } from '../guards/auth.guard';
import { HistoriesGuard } from '../guards/histories.guard';
import { TechnicalGuard } from '../guards/technical.guard';
import { HistoryGuard } from '../guards/history.guard';
import { PatientGuard } from '../guards/patient.guard';
import { PatientsGuard } from '../guards/patients.guard';


const routes: Routes = [ {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }, {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    }, {
        path: 'histories',
        component: HistoriesComponent,
        canActivate: [HistoriesGuard]
    }, {
        path: 'newUser',
        component: NewUserComponent,
        canActivate: [TechnicalGuard]
    }, {
        path: 'history/:id',
        component: HistoryComponent,
        canActivate: [HistoryGuard]
    }, {
        path: 'patient/:id',
        component: PatientComponent,
        canActivate: [PatientGuard]
    }, {
        path: 'patients',
        component: PatientsComponent,
        canActivate: [PatientsGuard]
    }, {
        path: '**',
        component: NotFoundComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {}
