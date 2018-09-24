(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.service */ "./src/app/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(state) {
        this.state = state;
        this.users = JSON.parse(localStorage.getItem('usersArray')) || [
            { role: 'admin', uid: '000', name: 'Manolo', surname: 'Fernandez', dni: '123456789K', email: 'manolo@email.com', password: '0' },
            { role: 'technical', uid: '001', name: 'Juan Elias', surname: 'Guerra', dni: '123456789N', email: 'jelias@email.com', password: '1' },
            { role: 'doctor', uid: '010', name: 'Víctor', surname: 'Vanaclocha', dni: '123456789L', email: 'victor@email.com', password: '10' },
            { role: 'doctor', uid: '011', name: 'Kike', surname: 'Martinez', dni: '123456789M', email: 'kike@email.com', password: '11' },
            { role: 'patient', uid: '100', name: 'Juan', surname: 'Garnica', dni: '123456789G', email: 'juan@email.com', password: '100' },
            { role: 'patient', uid: '101', name: 'Xavi', surname: 'Rodriguez', dni: '123456789C', email: 'xavi@email.com', password: '101' },
            { role: 'patient', uid: '102', name: 'Javi', surname: 'Olmo', dni: '123456789D', email: 'javi@email.com', password: '102' }
        ];
        this.records = JSON.parse(localStorage.getItem('recordsArray')) || [
            { userId: '000', doctorId: '010', log: ['Enfermedad1', 'Enfermedad2', 'Enfermedad3', 'Enfermedad4'] },
            { userId: '100', doctorId: '010', log: ['Enfermedad1', 'Enfermedad2', 'Enfermedad3', 'Enfermedad4'] },
            { userId: '101', doctorId: '010', log: ['Enfermedad1', 'Enfermedad2'] },
            { userId: '102', doctorId: '011', log: ['Enfermedad1', 'Enfermedad2', 'Enfermedad3'] },
            { userId: '100', doctorId: '000', log: ['Enfermedad1', 'Enfermedad2', 'Enfermedad3', 'Enfermedad4'] },
            { userId: '101', doctorId: '000', log: ['Enfermedad1', 'Enfermedad2'] }
        ];
    }
    // Login
    ApiService.prototype.login = function (email, pass) {
        var userObject = this.users.find(function (item) { return item.email === email && item.password === pass; });
        if (userObject) {
            this.state.login(userObject);
        }
        return userObject;
    };
    ApiService.prototype.logout = function () {
        this.state.logout();
    };
    // User
    ApiService.prototype.addNewUser = function (newUser) {
        newUser.uid = Math.random().toString(36).substr(2, 9);
        this.users.push(newUser);
        this.saveData();
    };
    ApiService.prototype.saveData = function () {
        localStorage.setItem('usersArray', JSON.stringify(this.users));
        console.log(this.users);
        localStorage.setItem('recordsArray', JSON.stringify(this.records));
        console.log(this.records);
    };
    ApiService.prototype.getUsers = function () {
        return this.users;
    };
    ApiService.prototype.getUser = function (id) {
        return this.users.find(function (item) { return item.uid === id; });
    };
    // Medico
    ApiService.prototype.getListMedicos = function () {
        return this.users.filter(function (item) { return item.role === 'doctor'; });
    };
    // Paciente
    ApiService.prototype.getListPacientes = function () {
        return this.users.filter(function (item) { return item.role === 'patient'; });
    };
    ApiService.prototype.getPaciente = function (id) {
        return this.users.find(function (item) { return item.uid === id; });
    };
    // Historial
    ApiService.prototype.getListHistoriales = function (id) {
        return this.records.filter(function (item) { return item.doctorId === id; });
    };
    ApiService.prototype.getHistorial = function (id) {
        return this.records.find(function (item) { return item.userId = id; });
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _histories_histories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../histories/histories.component */ "./src/app/histories/histories.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../history/history.component */ "./src/app/history/history.component.ts");
/* harmony import */ var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../new-user/new-user.component */ "./src/app/new-user/new-user.component.ts");
/* harmony import */ var _patient_patient_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../patient/patient.component */ "./src/app/patient/patient.component.ts");
/* harmony import */ var _patients_patients_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../patients/patients.component */ "./src/app/patients/patients.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_histories_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../guards/histories.guard */ "./src/app/guards/histories.guard.ts");
/* harmony import */ var _guards_technical_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../guards/technical.guard */ "./src/app/guards/technical.guard.ts");
/* harmony import */ var _guards_history_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../guards/history.guard */ "./src/app/guards/history.guard.ts");
/* harmony import */ var _guards_patient_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../guards/patient.guard */ "./src/app/guards/patient.guard.ts");
/* harmony import */ var _guards_patients_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../guards/patients.guard */ "./src/app/guards/patients.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }, {
        path: 'histories',
        component: _histories_histories_component__WEBPACK_IMPORTED_MODULE_5__["HistoriesComponent"],
        canActivate: [_guards_histories_guard__WEBPACK_IMPORTED_MODULE_12__["HistoriesGuard"]]
    }, {
        path: 'newUser',
        component: _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_7__["NewUserComponent"],
        canActivate: [_guards_technical_guard__WEBPACK_IMPORTED_MODULE_13__["TechnicalGuard"]]
    }, {
        path: 'history/:id',
        component: _history_history_component__WEBPACK_IMPORTED_MODULE_6__["HistoryComponent"],
        canActivate: [_guards_history_guard__WEBPACK_IMPORTED_MODULE_14__["HistoryGuard"]]
    }, {
        path: 'patient/:id',
        component: _patient_patient_component__WEBPACK_IMPORTED_MODULE_8__["PatientComponent"],
        canActivate: [_guards_patient_guard__WEBPACK_IMPORTED_MODULE_15__["PatientGuard"]]
    }, {
        path: 'patients',
        component: _patients_patients_component__WEBPACK_IMPORTED_MODULE_9__["PatientsComponent"],
        canActivate: [_guards_patients_guard__WEBPACK_IMPORTED_MODULE_16__["PatientsGuard"]]
    }, {
        path: '**',
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _patient_patient_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patient/patient.component */ "./src/app/patient/patient.component.ts");
/* harmony import */ var _patients_patients_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patients/patients.component */ "./src/app/patients/patients.component.ts");
/* harmony import */ var _histories_histories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./histories/histories.component */ "./src/app/histories/histories.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
/* harmony import */ var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new-user/new-user.component */ "./src/app/new-user/new-user.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _patients_patients_component__WEBPACK_IMPORTED_MODULE_7__["PatientsComponent"],
                _patient_patient_component__WEBPACK_IMPORTED_MODULE_6__["PatientComponent"],
                _histories_histories_component__WEBPACK_IMPORTED_MODULE_8__["HistoriesComponent"],
                _history_history_component__WEBPACK_IMPORTED_MODULE_9__["HistoryComponent"],
                _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_10__["NewUserComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__["LayoutModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"]
            ],
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_15__["ErrorStateMatcher"], useClass: _angular_material__WEBPACK_IMPORTED_MODULE_15__["ShowOnDirtyErrorStateMatcher"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu titulo=\"Dashboard\"></app-menu>\n<div class=\"grid-container\">\n  <mat-list>\n    <mat-list-item *ngIf=\"role === 'admin' || role === 'technical'\">\n      <button mat-raised-button color=\"primary\" routerLink=\"/newUser\">Crear Usuario</button>\n    </mat-list-item>\n    <mat-list-item *ngIf=\"role === 'admin' || role === 'doctor'\">\n      <button mat-raised-button color=\"primary\" routerLink=\"/patients\">Listado pacientes</button>\n    </mat-list-item>\n    <mat-list-item *ngIf=\"role === 'admin' || role === 'doctor'\">\n      <button mat-raised-button color=\"primary\" routerLink=\"/histories\">Listado historiales</button>\n    </mat-list-item>\n    <mat-list-item *ngIf=\"role === 'admin' || role === 'patient'\">\n      <button mat-raised-button color=\"primary\" routerLink=\"/history/{{uid}}\">Historial</button>\n    </mat-list-item>\n    <mat-list-item *ngIf=\"role === 'admin' || role === 'patient'\">\n      <button mat-raised-button color=\"primary\" routerLink=\"/patient/{{uid}}\">Ficha</button>\n    </mat-list-item>\n  </mat-list>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(api, router, state) {
        this.api = api;
        this.router = router;
        this.state = state;
        var user = state.isLogged();
        this.uid = user.uid;
        this.role = user.role;
    }
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(state) {
        this.state = state;
    } // state; al estár private ya es accesible.
    AuthGuard.prototype.canActivate = function (next, state) {
        return !!this.state.isLogged(); // Con doble negación pasamos a respuesta booleana.
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/histories.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/guards/histories.guard.ts ***!
  \*******************************************/
/*! exports provided: HistoriesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriesGuard", function() { return HistoriesGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoriesGuard = /** @class */ (function () {
    function HistoriesGuard(state) {
        this.state = state;
    }
    HistoriesGuard.prototype.canActivate = function (next, state) {
        if (this.state.getRole() === 'doctor') {
            return true;
        }
        else if (this.state.getRole() === 'admin') {
            return true;
        }
        else {
            return false;
        }
    };
    HistoriesGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]])
    ], HistoriesGuard);
    return HistoriesGuard;
}());



/***/ }),

/***/ "./src/app/guards/history.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/guards/history.guard.ts ***!
  \*****************************************/
/*! exports provided: HistoryGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryGuard", function() { return HistoryGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryGuard = /** @class */ (function () {
    function HistoryGuard(state) {
        this.state = state;
    }
    HistoryGuard.prototype.canActivate = function (next, state) {
        if (this.state.getRole() === 'doctor') {
            return true;
        }
        else if (this.state.getRole() === 'patient') {
            return true;
        }
        else if (this.state.getRole() === 'admin') {
            return true;
        }
        else {
            return false;
        }
    };
    HistoryGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]])
    ], HistoryGuard);
    return HistoryGuard;
}());



/***/ }),

/***/ "./src/app/guards/patient.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/guards/patient.guard.ts ***!
  \*****************************************/
/*! exports provided: PatientGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientGuard", function() { return PatientGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PatientGuard = /** @class */ (function () {
    function PatientGuard(state) {
        this.state = state;
    }
    PatientGuard.prototype.canActivate = function (next, state) {
        if (this.state.getRole() === 'doctor') {
            return true;
        }
        else if (this.state.getRole() === 'admin') {
            return true;
        }
        else if (this.state.getRole() === 'patient') {
            return true;
        }
        else {
            return false;
        }
    };
    PatientGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]])
    ], PatientGuard);
    return PatientGuard;
}());



/***/ }),

/***/ "./src/app/guards/patients.guard.ts":
/*!******************************************!*\
  !*** ./src/app/guards/patients.guard.ts ***!
  \******************************************/
/*! exports provided: PatientsGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsGuard", function() { return PatientsGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PatientsGuard = /** @class */ (function () {
    function PatientsGuard(state) {
        this.state = state;
    }
    PatientsGuard.prototype.canActivate = function (next, state) {
        if (this.state.getRole() === 'doctor') {
            return true;
        }
        else if (this.state.getRole() === 'patient') {
            return true;
        }
        else if (this.state.getRole() === 'admin') {
            return true;
        }
        else {
            return false;
        }
    };
    PatientsGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]])
    ], PatientsGuard);
    return PatientsGuard;
}());



/***/ }),

/***/ "./src/app/guards/technical.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/guards/technical.guard.ts ***!
  \*******************************************/
/*! exports provided: TechnicalGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicalGuard", function() { return TechnicalGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TechnicalGuard = /** @class */ (function () {
    function TechnicalGuard(state) {
        this.state = state;
    }
    TechnicalGuard.prototype.canActivate = function (next, state) {
        if (this.state.getRole() === 'technical') {
            return true;
        }
        else if (this.state.getRole() === 'admin') {
            return true;
        }
        else {
            return false;
        }
    };
    TechnicalGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]])
    ], TechnicalGuard);
    return TechnicalGuard;
}());



/***/ }),

/***/ "./src/app/histories/histories.component.css":
/*!***************************************************!*\
  !*** ./src/app/histories/histories.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/histories/histories.component.html":
/*!****************************************************!*\
  !*** ./src/app/histories/histories.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu titulo=\"Listado de historiales\"></app-menu>\n<h2>Mis historiales de pacientes</h2>\n<mat-nav-list *ngFor=\"let historial of listHistoriales\">\n    <div *ngFor=\"let patient of listaUsuarios\">\n        <div *ngFor=\"let doctor of listaDoctores\">\n            <div *ngIf=\"historial.userId===patient.uid\">\n                <div *ngIf=\"historial.doctorId===doctor.uid\">\n                    <mat-list-item role=\"listitem\" [routerLink]='[\"/history\", historial.userId ]'>\n                        <h4 mat-line>Nombre paciente: {{ patient.name }}</h4>\n                        <p mat-line>Nombre doctor: {{ doctor.name }}</p>\n                    </mat-list-item>\n                </div>\n            </div>\n        </div>\n    </div>\n</mat-nav-list>"

/***/ }),

/***/ "./src/app/histories/histories.component.ts":
/*!**************************************************!*\
  !*** ./src/app/histories/histories.component.ts ***!
  \**************************************************/
/*! exports provided: HistoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriesComponent", function() { return HistoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HistoriesComponent = /** @class */ (function () {
    function HistoriesComponent(api, router, state) {
        this.api = api;
        this.router = router;
        this.state = state;
        this.user = state.isLogged();
    }
    HistoriesComponent.prototype.ngOnInit = function () {
        this.getHistoriales();
        this.getUsuarios();
        this.getDoctores();
        console.log(this.listHistoriales);
    };
    HistoriesComponent.prototype.getHistoriales = function () {
        if (this.user.role === 'doctor') {
            this.listHistoriales = this.api.getListHistoriales(this.user.uid);
        }
    };
    HistoriesComponent.prototype.getUsuarios = function () {
        if (this.user.role === 'doctor') {
            this.listaUsuarios = this.api.getUsers();
        }
    };
    HistoriesComponent.prototype.getDoctores = function () {
        if (this.user.role === 'doctor') {
            this.listaDoctores = this.api.getListMedicos();
        }
    };
    HistoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-histories',
            template: __webpack_require__(/*! ./histories.component.html */ "./src/app/histories/histories.component.html"),
            styles: [__webpack_require__(/*! ./histories.component.css */ "./src/app/histories/histories.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]])
    ], HistoriesComponent);
    return HistoriesComponent;
}());



/***/ }),

/***/ "./src/app/history/history.component.css":
/*!***********************************************!*\
  !*** ./src/app/history/history.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/history/history.component.html":
/*!************************************************!*\
  !*** ./src/app/history/history.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu titulo=\"Historial de paciente\"></app-menu>\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n    <ng-container matColumnDef=\"paciente\">\n        <th mat-header-cell *matHeaderCellDef> Paciente </th>\n        <td mat-cell *matCellDef=\"let element\"> {{ element.paciente }} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"doctor\">\n        <th mat-header-cell *matHeaderCellDef> Doctor </th>\n        <td mat-cell *matCellDef=\"let element\"> {{ element.doctor }} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"enfermedad\">\n        <th mat-header-cell *matHeaderCellDef> Descripción </th>\n        <td mat-cell *matCellDef=\"let element\"> {{ element.enfermedad }} </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>"

/***/ }),

/***/ "./src/app/history/history.component.ts":
/*!**********************************************!*\
  !*** ./src/app/history/history.component.ts ***!
  \**********************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(api, router, state, route) {
        this.api = api;
        this.router = router;
        this.state = state;
        this.route = route;
        this.ELEMENT_DATA = [];
        this.displayedColumns = ['paciente', 'doctor', 'enfermedad'];
        this.columNames = [
            { id: 'paciente', value: 'Paciente' },
            { id: 'doctor', value: 'Docotor' },
            { id: 'enfermedad', value: 'Descripción' }
        ];
        this.uid = this.route.snapshot.paramMap.get('id');
    }
    HistoryComponent.prototype.ngOnInit = function () {
        this.userPaciente = this.api.getUser(this.uid);
        this.getHistoriales();
        this.createTable();
    };
    HistoryComponent.prototype.getHistoriales = function () {
        this.listHistoriales = this.api.getHistorial(this.uid);
        this.log = this.listHistoriales.log;
        this.userDoctor = this.api.getUser(this.listHistoriales.doctorId);
    };
    HistoryComponent.prototype.createTable = function () {
        for (var i = 0; i < this.log.length; i++) {
            var enfermedad = {
                paciente: this.userPaciente.name,
                doctor: this.userDoctor.name,
                enfermedad: this.log[i]
            };
            this.ELEMENT_DATA.push(enfermedad);
            console.log(enfermedad);
        }
        this.dataSource = this.ELEMENT_DATA;
    };
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.css */ "./src/app/history/history.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  :host() {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n  }\n\n  .login-card {\n    min-width: 300px;\n    width: 400px;\n    max-height: 500px;\n  }\n\n  .form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .full-width {\n    width: 100%;\n  }\n\n  .right-align {\n    text-align: right;\n  }\n\n  input.right-align::-webkit-outer-spin-button,\n  input.right-align::-webkit-inner-spin-button {\n    display: none;\n  }\n\n  input.right-align {\n    -moz-appearance: textfield;\n  }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"login-card\">\n  <mat-card-header>\n    <mat-card-title>Inicio sesión</mat-card-title>\n    <mat-card-subtitle>Acceso a la aplicación HIS</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <div class=\"form\">\n      <mat-form-field class=\"full-width\">\n        <input matInput type=\"email\" placeholder=\"Correo electrónico\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\">\n        <mat-error *ngIf=\"emailFormControl.invalid\">{{ getErrorMessage() }}</mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"LoginPass\" placeholder=\"Contraseña\" [type]=\"hide ? 'password' : 'text'\">\n        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n      </mat-form-field>\n    </div>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button color=\"primary\" (click)=\"login()\">Acceder</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: MyErrorStateMatcher, LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    MyErrorStateMatcher = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
            ]
        })
    ], MyErrorStateMatcher);
    return MyErrorStateMatcher;
}());

var LoginComponent = /** @class */ (function () {
    function LoginComponent(api, router, snackBar) {
        this.api = api;
        this.router = router;
        this.snackBar = snackBar;
        this.hide = true;
        this.matcher = new MyErrorStateMatcher();
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
    }
    LoginComponent.prototype.getErrorMessage = function () {
        return this.emailFormControl.hasError('required') ? 'Debes introducir un email' :
            this.emailFormControl.hasError('email') ? 'Email no válido' :
                '';
    };
    LoginComponent.prototype.login = function () {
        if (this.api.login(this.emailFormControl.value, this.LoginPass)) {
            this.router.navigate(['dashboard']);
        }
        else {
            this.emailFormControl.setValue('');
            this.LoginPass = '';
            this.hide = true;
            this.snackBar.open('Email y/o contraseña incorrectos', 'ok', {
                duration: 3000,
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n    padding: 0 14px;\n}\n\n.spacer {\n    flex: 1 1 auto;\n}"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span> {{titulo}}</span>\n    <span class=\"spacer\"></span>\n    <span>{{name}}</span>\n    <button mat-icon-button color=\"warn\" (click)=\"logout()\">\n      <mat-icon>power_settings_new</mat-icon>\n    </button>\n  </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuComponent = /** @class */ (function () {
    function MenuComponent(api, router, state) {
        this.api = api;
        this.router = router;
        this.state = state;
        var user = state.isLogged();
        this.name = user.name;
    }
    MenuComponent.prototype.logout = function () {
        this.api.logout();
        this.router.navigate(['']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MenuComponent.prototype, "titulo", void 0);
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/new-user/new-user.component.css":
/*!*************************************************!*\
  !*** ./src/app/new-user/new-user.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}\n\n.card {\n    min-width: 300px;\n    width: 400px;\n    max-width: 500px;\n}\n\n.form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n}"

/***/ }),

/***/ "./src/app/new-user/new-user.component.html":
/*!**************************************************!*\
  !*** ./src/app/new-user/new-user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu titulo=\"Creación de usuario\"></app-menu>\n<div class=\"wrapper\">\n    <mat-card class=\"card\">\n        <mat-card-header>\n            <mat-card-title>Nuevo Usuario</mat-card-title>\n            <mat-card-subtitle>Formulario de ficha</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n            <div class=\"form\">\n                <mat-form-field>\n                    <mat-select placeholder=\"Asignar rol\" [formControl]=\"rolControl\" required>\n                        <mat-option>None</mat-option>\n                        <mat-option *ngFor=\"let rol of rols\" [value]=\"rol.value\">\n                            {{rol.viewValue}}\n                        </mat-option>\n                    </mat-select>\n                    <mat-error *ngIf=\"rolControl.hasError('required')\">Porfavor, elige un rol.</mat-error>\n                </mat-form-field>\n                <mat-form-field class=\"full-width\">\n                    <input matInput [(ngModel)]=\"newUser.name\" placeholder=\"Nombre\">\n                </mat-form-field>\n                <mat-form-field class=\"full-width\">\n                        <input matInput [(ngModel)]=\"newUser.surname\" placeholder=\"Apellidos\">\n                </mat-form-field>\n                <mat-form-field class=\"full-width\">\n                        <input matInput [(ngModel)]=\"newUser.dni\" placeholder=\"Documento nacional de identidad\">\n                </mat-form-field>\n                <mat-form-field class=\"full-width\">\n                    <input matInput type=\"email\" placeholder=\"Correo electrónico\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\">\n                    <mat-error *ngIf=\"emailFormControl.invalid\">{{ getErrorMessage() }}</mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput [(ngModel)]=\"password\" placeholder=\"Contraseña\" [type]=\"hide ? 'password' : 'text'\">\n                    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput [(ngModel)]=\"password2\" placeholder=\"Repite contraseña\" [type]=\"hide ? 'password' : 'text'\">\n                </mat-form-field>\n            </div>\n        </mat-card-content>\n        <mat-card-actions>\n            <button mat-raised-button color=\"primary\" (click)=\"createUser()\">GUARDAR</button>\n            <button mat-raised-button color=\"warn\" (click)=\"reset()\">RESETEAR</button>\n        </mat-card-actions>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/new-user/new-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-user/new-user.component.ts ***!
  \************************************************/
/*! exports provided: MyErrorStateMatcher, NewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserComponent", function() { return NewUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    MyErrorStateMatcher = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ]
        })
    ], MyErrorStateMatcher);
    return MyErrorStateMatcher;
}());

var NewUserComponent = /** @class */ (function () {
    function NewUserComponent(api, router, state) {
        this.api = api;
        this.router = router;
        this.state = state;
        this.newUser = {
            role: '',
            uid: '',
            name: '',
            surname: '',
            dni: '',
            email: '',
            password: ''
        };
        this.hide = true;
        this.rols = [
            { value: 'patient', viewValue: 'Paciente' },
            { value: 'doctor', viewValue: 'Doctor' },
            { value: 'technical', viewValue: 'Técnico' }
        ];
        this.options = ['patient', 'doctor', 'technical'];
        this.matcher = new MyErrorStateMatcher();
        this.rolControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email,
        ]);
        var user = state.isLogged();
    }
    NewUserComponent.prototype.getErrorMessage = function () {
        return this.emailFormControl.hasError('required') ? 'Debes introducir un email' :
            this.emailFormControl.hasError('email') ? 'Email no válido' :
                '';
    };
    NewUserComponent.prototype.createUser = function () {
        this.newUser.role = this.rolControl.value;
        this.newUser.email = this.emailFormControl.value;
        if (this.password === this.password2) {
            this.newUser.password = this.password;
        }
        else {
            console.log('error');
        }
        console.log(this.newUser);
        this.api.addNewUser(this.newUser);
    };
    NewUserComponent.prototype.reset = function () {
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
    };
    NewUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-user',
            template: __webpack_require__(/*! ./new-user.component.html */ "./src/app/new-user/new-user.component.html"),
            styles: [__webpack_require__(/*! ./new-user.component.css */ "./src/app/new-user/new-user.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]])
    ], NewUserComponent);
    return NewUserComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/patient/patient.component.css":
/*!***********************************************!*\
  !*** ./src/app/patient/patient.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    max-width: 600px;\n    margin: 0 auto 0 auto;\n}"

/***/ }),

/***/ "./src/app/patient/patient.component.html":
/*!************************************************!*\
  !*** ./src/app/patient/patient.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu titulo=\"Ficha\"></app-menu>\n<mat-card class=\"card, mat-typography\">\n    <mat-card-header>\n        <mat-card-title><h1>{{ datos.name }}</h1></mat-card-title>\n        <mat-card-subtitle><h2>{{ datos.surname }}</h2></mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n        <h4>Identificador único: {{ datos.uid }}</h4>\n        <h4>Documento nacional de identidad: {{ datos.dni }}</h4>\n        <h4>Correo electrónico: {{ datos.email }}</h4>\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/patient/patient.component.ts":
/*!**********************************************!*\
  !*** ./src/app/patient/patient.component.ts ***!
  \**********************************************/
/*! exports provided: PatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientComponent", function() { return PatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PatientComponent = /** @class */ (function () {
    function PatientComponent(api, router, state, route) {
        this.api = api;
        this.router = router;
        this.state = state;
        this.route = route;
        this.id = this.route.snapshot.paramMap.get('id');
    }
    PatientComponent.prototype.ngOnInit = function () {
        this.datos = this.api.getUser(this.id);
    };
    PatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient',
            template: __webpack_require__(/*! ./patient.component.html */ "./src/app/patient/patient.component.html"),
            styles: [__webpack_require__(/*! ./patient.component.css */ "./src/app/patient/patient.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PatientComponent);
    return PatientComponent;
}());



/***/ }),

/***/ "./src/app/patients/patients.component.css":
/*!*************************************************!*\
  !*** ./src/app/patients/patients.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/patients/patients.component.html":
/*!**************************************************!*\
  !*** ./src/app/patients/patients.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu titulo=\"Listado de pacientes\"></app-menu>\n<h2>Mis pacientes</h2>\n<mat-nav-list *ngFor=\"let paciente of datos\">\n    <mat-list-item role = \"listitem\" [routerLink]='[\"/patient\", paciente.uid]'>\n        <h4 mat-line>{{ paciente.name }}</h4>\n        <p mat-line>{{ paciente.surname }}</p>\n    </mat-list-item>  \n</mat-nav-list>"

/***/ }),

/***/ "./src/app/patients/patients.component.ts":
/*!************************************************!*\
  !*** ./src/app/patients/patients.component.ts ***!
  \************************************************/
/*! exports provided: PatientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsComponent", function() { return PatientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PatientsComponent = /** @class */ (function () {
    function PatientsComponent(api, router, state) {
        this.api = api;
        this.router = router;
        this.state = state;
        this.user = state.isLogged();
    }
    PatientsComponent.prototype.ngOnInit = function () {
        this.getPacientes();
    };
    PatientsComponent.prototype.getPacientes = function () {
        if (this.user.role === 'doctor') {
            this.datos = this.api.getListPacientes();
        }
    };
    PatientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patients',
            template: __webpack_require__(/*! ./patients.component.html */ "./src/app/patients/patients.component.html"),
            styles: [__webpack_require__(/*! ./patients.component.css */ "./src/app/patients/patients.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]])
    ], PatientsComponent);
    return PatientsComponent;
}());



/***/ }),

/***/ "./src/app/state.service.ts":
/*!**********************************!*\
  !*** ./src/app/state.service.ts ***!
  \**********************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StateService = /** @class */ (function () {
    function StateService() {
        this.state = JSON.parse(localStorage.getItem('state')) || {
            auth: null,
        };
    }
    StateService.prototype.login = function (user) {
        this.state.auth = user;
        this.saveState();
    };
    StateService.prototype.saveState = function () {
        localStorage.setItem('state', JSON.stringify(this.state));
    };
    StateService.prototype.logout = function () {
        localStorage.clear();
        this.state.auth = null;
    };
    StateService.prototype.isLogged = function () {
        return this.state.auth;
    };
    StateService.prototype.getRole = function () {
        return this.state.auth.role;
    };
    StateService.prototype.getUid = function () {
        return this.state.auth.uid;
    };
    StateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/victorvanaclochacebrian/dev/angular/HIS-frontend-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map