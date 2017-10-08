webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\n  background: #cce6ff;\n  height: 120px;\n}\n\nh1 {\n  margin: 0px;\n  padding: 10px;\n}\n\nh1 a {\n  text-decoration: none;\n  color: #003366;\n}\n\n.menu {\n  float: right;\n  margin-right: 20px;\n}\n\n.menu a {\n  margin: 0 20px;\n  text-decoration: none;\n  color: 0059b3;\n}\n\n.menu button {\n  height: 30px;\n  margin: 0 10px;\n  font-size: 1vw;\n}\n\n.body {\n  margin: 50px 100px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div style=\"text-align:center\">\n    <h1><a *ngIf=\"user\" [routerLink]=\"['/dashboard']\">{{ title }}</a></h1>\n    <h1><a *ngIf=\"!user\" [routerLink]=\"['']\">{{ title }}</a></h1>\n    <div class=\"menu\">\n      <a *ngIf=\"user\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n      <a *ngIf=\"user && user.role=='admin'\" [routerLink]=\"['/job']\">Create Job</a>\n      <a *ngIf=\"!user\"[routerLink]=\"['/login']\">Login</a>\n      <a *ngIf=\"!user\" [routerLink]=\"['/invitation']\">Get invitation</a>\n      <a *ngIf=\"user\" [routerLink]=\"['/user']\">User Profile</a>\n      <a *ngIf=\"user && user.role=='admin'\" [routerLink]=\"['/signup']\">Add a profile</a>\n      <a *ngIf=\"user && user.role=='admin'\" [routerLink]=\"['/invitations']\">Invitations List</a>\n      <button *ngIf=\"user\" (click)=\"auth.logout().subscribe()\">Logout</button>\n    </div>\n  </div>\n</header>\n\n<p style=\"margin: 20px\"*ngIf=\"user\">USER: {{user.username | json}}</p>\n\n<div class=\"body\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.title = 'proyecto3';
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loginform_loginform_component__ = __webpack_require__("../../../../../src/app/loginform/loginform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_isLoggedIn_canactivate_service__ = __webpack_require__("../../../../../src/app/services/isLoggedIn.canactivate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signupform_signupform_component__ = __webpack_require__("../../../../../src/app/signupform/signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_dashboard_service__ = __webpack_require__("../../../../../src/app/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_job_service__ = __webpack_require__("../../../../../src/app/services/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__job_job_component__ = __webpack_require__("../../../../../src/app/job/job.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_centers_service__ = __webpack_require__("../../../../../src/app/services/centers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__invitation_invitation_component__ = __webpack_require__("../../../../../src/app/invitation/invitation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__invitation_list_invitation_list_component__ = __webpack_require__("../../../../../src/app/invitation-list/invitation-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_invitation_service__ = __webpack_require__("../../../../../src/app/services/invitation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__delete_invitation_delete_invitation_component__ = __webpack_require__("../../../../../src/app/delete-invitation/delete-invitation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__job_details_job_details_component__ = __webpack_require__("../../../../../src/app/job-details/job-details.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__loginform_loginform_component__["a" /* LoginformComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__userprofile_userprofile_component__["a" /* UserprofileComponent */],
            __WEBPACK_IMPORTED_MODULE_12__signupform_signupform_component__["a" /* SignupformComponent */],
            __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_16__job_job_component__["a" /* JobComponent */],
            __WEBPACK_IMPORTED_MODULE_18__invitation_invitation_component__["a" /* InvitationComponent */],
            __WEBPACK_IMPORTED_MODULE_19__invitation_list_invitation_list_component__["a" /* InvitationListComponent */],
            __WEBPACK_IMPORTED_MODULE_21__delete_invitation_delete_invitation_component__["a" /* DeleteInvitationComponent */],
            __WEBPACK_IMPORTED_MODULE_22__job_details_job_details_component__["a" /* JobDetailsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__routes__["a" /* routes */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_10__services_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */], __WEBPACK_IMPORTED_MODULE_14__services_dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_17__services_centers_service__["a" /* CentersService */], __WEBPACK_IMPORTED_MODULE_15__services_job_service__["a" /* JobService */], __WEBPACK_IMPORTED_MODULE_20__services_invitation_service__["a" /* InvitationService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  text-align: center;\n}\n\n.job {\n  width: 50%;\n  border: 2px solid black;\n  margin: 10px auto;\n  padding: 5px 20px;\n}\n\n.job button {\n  background: blue;\n  color: white;\n  font-size: 1vw;\n  width: 100%;\n  height: 30px;\n  margin-bottom: 10px;\n}\n\n.job button:hover {\n  background: navy;\n  color: white;\n  font-size: 1vw;\n  width: 100%;\n  height: 30px;\n  margin-bottom: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\n  <h1>JOBS</h1>\n\n  <div class=\"job\" *ngFor=\"let job of jobs\">\n    <p>TITLE: {{job.title | json}}</p>\n    <p>SPECIALITY: {{job.speciality | json}}</p>\n    <p>CENTER: {{job.center.title | json}}</p>\n    <p>DATE: {{job.date | json}}</p>\n    <p>DESCRIPTION: {{job.description | json}}</p>\n    <a *ngIf=\"user.role==='doctor'\" [routerLink]=\"[job._id]\">Solicitar puesto</a>\n    <a *ngIf=\"user.role==='manager'\" [routerLink]=\"[job._id]\">Eliminar oferta</a>\n  </div>\n\n</div>\n\n<div *ngIf=\"!user\" class=\"unauthorized\">\n  <p>Forbidden zone. Please contact with your system administrator.</p>\n  <a [routerLink]=\"['']\">Back</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dashboard_service__ = __webpack_require__("../../../../../src/app/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(dashS, auth) {
        var _this = this;
        this.dashS = dashS;
        this.auth = auth;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashS.viewDashboard().subscribe(function (e) { return _this.jobs = e; });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dashboard_service__["a" /* DashboardService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/delete-invitation/delete-invitation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  text-align: center;\n}\n\n.invitation {\n  width: 50%;\n  border: 2px solid black;\n  margin: 10px auto;\n  padding: 5px 20px;\n}\n\n.invitation button {\n  background: blue;\n  color: white;\n  font-size: 1vw;\n  width: 100%;\n  height: 30px;\n  margin-bottom: 10px;\n}\n\n.invitation button:hover {\n  background: navy;\n  color: white;\n  font-size: 1vw;\n  width: 100%;\n  height: 30px;\n  margin-bottom: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/delete-invitation/delete-invitation.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user && user.role==='admin'\">\n\n  <h1>¿Está seguro de que quiere borrar esta petición?</h1>\n\n  <div class=\"invitation\">\n    <p>Username: {{invitation.username | json}}</p>\n    <p>Nº de colegiado: {{invitation.collegiate | json}}</p>\n    <p>Especialidad: {{invitation.speciality | json}}</p>\n    <p>Nombre: {{invitation.name | json}}</p>\n    <p>Teléfono: {{invitation.phone | json}}</p>\n    <button (click)=\"deleteInvitation(invitation._id)\">Delete</button>\n    <a [routerLink]=\"['/invitations']\">Cancelar</a>\n  </div>\n\n</div>\n\n<div *ngIf=\"!user\" class=\"unauthorized\">\n  <p>Forbidden zone. Please contact with your system administrator.</p>\n  <a [routerLink]=\"['']\">Back</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/delete-invitation/delete-invitation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_invitation_service__ = __webpack_require__("../../../../../src/app/services/invitation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteInvitationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeleteInvitationComponent = (function () {
    function DeleteInvitationComponent(auth, router, route, invS) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.invS = invS;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    DeleteInvitationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log("El parametro recibido es: " + params['id']);
            _this.getInvitation(params['id']);
        });
    };
    DeleteInvitationComponent.prototype.getInvitation = function (id) {
        var _this = this;
        this.invS.get(id).subscribe(function (inv) {
            _this.invitation = inv;
        });
    };
    DeleteInvitationComponent.prototype.deleteInvitation = function (id) {
        var _this = this;
        this.invS.delete(id).subscribe(function () {
            _this.router.navigate(['invitations']);
        });
    };
    return DeleteInvitationComponent;
}());
DeleteInvitationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-delete-invitation',
        template: __webpack_require__("../../../../../src/app/delete-invitation/delete-invitation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/delete-invitation/delete-invitation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_invitation_service__["a" /* InvitationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_invitation_service__["a" /* InvitationService */]) === "function" && _d || Object])
], DeleteInvitationComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=delete-invitation.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>this is home</h2>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.title = "proyecto 3";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/invitation-list/invitation-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  text-align: center;\n}\n\n.invitation {\n  width: 50%;\n  border: 2px solid black;\n  margin: 10px auto;\n  padding: 5px 20px;\n}\n\n.invitation button {\n  background: blue;\n  color: white;\n  font-size: 1vw;\n  width: 100%;\n  height: 30px;\n  margin-bottom: 10px;\n}\n\n.invitation button:hover {\n  background: navy;\n  color: white;\n  font-size: 1vw;\n  width: 100%;\n  height: 30px;\n  margin-bottom: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invitation-list/invitation-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user && user.role==='admin'\">\n\n  <h1>Invitaciones pendientes</h1>\n\n  <div class=\"invitation\" *ngFor=\"let invitation of invitations\">\n    <p>Username: {{invitation.username | json}}</p>\n    <p>Nº de colegiado: {{invitation.collegiate | json}}</p>\n    <p>Especialidad: {{invitation.speciality | json}}</p>\n    <p>Nombre: {{invitation.name | json}}</p>\n    <p>Teléfono: {{invitation.phone | json}}</p>\n    <a [routerLink]=\"[invitation._id]\"> Delete Invitation </a>\n  </div>\n\n</div>\n\n<div *ngIf=\"!user\" class=\"unauthorized\">\n  <p>Forbidden zone. Please contact with your system administrator.</p>\n  <a [routerLink]=\"['']\">Back</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/invitation-list/invitation-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_invitation_service__ = __webpack_require__("../../../../../src/app/services/invitation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitationListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvitationListComponent = (function () {
    function InvitationListComponent(invS, auth) {
        var _this = this;
        this.invS = invS;
        this.auth = auth;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    InvitationListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.invS.getList().subscribe(function (e) { return _this.invitations = e; });
    };
    return InvitationListComponent;
}());
InvitationListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-invitation-list',
        template: __webpack_require__("../../../../../src/app/invitation-list/invitation-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/invitation-list/invitation-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_invitation_service__["a" /* InvitationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_invitation_service__["a" /* InvitationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], InvitationListComponent);

var _a, _b;
//# sourceMappingURL=invitation-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/invitation/invitation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin: 0 auto;\n  width: 50%;\n  border: 2px black solid;\n}\n\n.form {\n  margin: 10px auto;\n  padding: 20px;\n  width: 60%;\n}\n\n.form input {\n  width: 100%;\n  margin: 10px 0;\n}\n\n.form button {\n  height: 30px;\n  margin: 10px 0;\n  font-size: 1vw;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invitation/invitation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"form\">\n    <form>\n      <h2> Invitation form </h2>\n      <label> Username </label>\n      <input type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\" />\n      <br>\n      <label> Collegiate number </label>\n      <input type=\"text\" [(ngModel)]=\"formInfo.collegiate\" name=\"collegiate\" />\n      <br>\n      <label> Speciality </label>\n      <input type=\"text\" [(ngModel)]=\"formInfo.speciality\" name=\"speciality\" />\n      <br>\n      <label> Password </label>\n      <input type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\" />\n      <br>\n      <label> Name </label>\n      <input type=\"text\" [(ngModel)]=\"formInfo.name\" name=\"name\" />\n      <br>\n      <label> Phone </label>\n      <input type=\"number\" [(ngModel)]=\"formInfo.phone\" name=\"phone\" />\n      <br>\n      <button (click)=\"askForInvitation()\"> Ask for Invitation </button>\n    </form>\n</div>\n</div>\n\n<div *ngIf=\"user && user.role!='admin'\" class=\"unauthorized\">\n  <p>You can't create new users. Please contact with your system administrator.</p>\n  <a [routerLink]=\"['/dashboard']\">Back</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/invitation/invitation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvitationComponent = (function () {
    function InvitationComponent(auth, router) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            username: "",
            password: "",
            name: "",
            phone: "",
            collegiate: "",
            speciality: "",
        };
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    InvitationComponent.prototype.ngOnInit = function () {
    };
    InvitationComponent.prototype.askForInvitation = function () {
        console.log("I WANT AN INVITATION!");
    };
    return InvitationComponent;
}());
InvitationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-invitation',
        template: __webpack_require__("../../../../../src/app/invitation/invitation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/invitation/invitation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], InvitationComponent);

var _a, _b;
//# sourceMappingURL=invitation.component.js.map

/***/ }),

/***/ "../../../../../src/app/job-details/job-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  text-align: center;\n}\n\n.job {\n  width: 50%;\n  border: 2px solid black;\n  margin: 10px auto;\n  padding: 5px 20px;\n}\n\n.job button {\n  background: blue;\n  color: white;\n  font-size: 1vw;\n  width: 100%;\n  height: 30px;\n  margin-bottom: 10px;\n}\n\n.job button:hover {\n  background: navy;\n  color: white;\n  font-size: 1vw;\n  width: 100%;\n  height: 30px;\n  margin-bottom: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/job-details/job-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\n  <h1 *ngIf=\"user.role==='manager'\">¿Estás seguro de que quieres eliminar esta oferta?</h1>\n  <h1 *ngIf=\"user.role==='doctor'\">¿Estás seguro de que quieres solicitar esta oferta?</h1>\n\n  <div class=\"job\">\n    <p>TITLE: {{job.title | json}}</p>\n    <p>SPECIALITY: {{job.speciality | json}}</p>\n    <p>CENTER: {{job.center.title | json}}</p>\n    <p>DATE: {{job.date | json}}</p>\n    <p>DESCRIPTION: {{job.description | json}}</p>\n    <p *ngIf=\"job.doctor[0] && user.role!='doctor'\">SOLICITUDES: </p>\n    <ul *ngIf=\"job.doctor[0] && user.role!='doctor'\">\n    <li *ngFor=\"let doc of job.doctor\">\n      {{doc.username | json}}\n    </li>\n    </ul>\n    <button (click)=\"applyJob(job._id, user._id)\" *ngIf=\"user && user.role==='doctor'\">Get Job</button>\n    <button (click)=\"deleteJob(job._id)\"  *ngIf=\"user && user.role==='manager'\">Delete Job</button>\n    <a [routerLink]=\"['/dashboard']\">Cancelar</a>\n  </div>\n\n</div>\n\n<div *ngIf=\"!user\" class=\"unauthorized\">\n  <p>Forbidden zone. Please contact with your system administrator.</p>\n  <a [routerLink]=\"['']\">Back</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/job-details/job-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_job_service__ = __webpack_require__("../../../../../src/app/services/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobDetailsComponent = (function () {
    function JobDetailsComponent(auth, router, route, jobS) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.jobS = jobS;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    JobDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log("El parametro recibido es: " + params['id']);
            _this.getJob(params['id']);
        });
    };
    JobDetailsComponent.prototype.getJob = function (id) {
        var _this = this;
        this.jobS.getJob(id).subscribe(function (job) {
            _this.job = job;
        });
    };
    JobDetailsComponent.prototype.applyJob = function (id, user) {
        var _this = this;
        this.jobS.apply(id, user).subscribe(function () {
            _this.router.navigate(['dashboard']);
        });
    };
    JobDetailsComponent.prototype.deleteJob = function (id) {
        var _this = this;
        this.jobS.delete(id).subscribe(function () {
            _this.router.navigate(['dashboard']);
        });
    };
    return JobDetailsComponent;
}());
JobDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-job-details',
        template: __webpack_require__("../../../../../src/app/job-details/job-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/job-details/job-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_job_service__["a" /* JobService */]) === "function" && _d || Object])
], JobDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=job-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/job/job.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "select .option {\n  width: 40px;\n}\n\n.select {\n  margin: 10px auto 0;\n  padding: 10px 0px;\n  width: 60%;\n}\n\n.container select {\n  width: 100%;\n  margin: 10px 0;\n}\n\n.form {\n  margin: 0 auto;\n  padding: 10px 0px;\n  width: 60%;\n}\n\n.form input {\n  width: 100%;\n  margin: 5px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px;\n  width: 40%;\n  border: 2px black solid;\n}\n\n.form button {\n  height: 30px;\n  margin: 10px 0;\n  font-size: 1vw;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/job/job.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user && user.role=='admin'\" class=\"container\">\n  <!-- <label> Center </label>\n    <input type=\"text\" [(ngModel)]=\"formInfo.center\" name=\"center\" />\n    <br> -->\n  <div class=\"select\">\n    <h2> Crear oferta </h2>\n    <label>Centro:</label>\n    <select [(ngModel)]=\"formInfo.center\" name=\"center\">\n      <option *ngFor=\"let center of centers\" value=\"{{center._id}}\">{{center.title}}</option>\n    </select>\n    <label>Tipo:</label>\n    <select [(ngModel)]=\"formInfo.title\" name=\"title\">\n      <option value=\"Médico de familia\">Médico de familia</option>\n      <option value=\"Pediatria\">Pediatría</option>\n      <option value=\"Urgencias SUAP\">Urgencias SUAP</option>\n    </select>\n    <label>Especialidad:</label>\n    <select [(ngModel)]=\"formInfo.speciality\" name=\"speciality\">\n      <option value=\"Medicina familiar\">Médico de familia</option>\n      <option value=\"Pediatria\">Pediatría</option>\n    </select>\n  </div>\n  <div class=\"form\">\n    <form>\n      <label> Fecha </label>\n      <input type=\"date\" [(ngModel)]=\"formInfo.date\" name=\"date\" />\n      <br>\n      <label> Descripción </label>\n      <input type=\"text\" [(ngModel)]=\"formInfo.description\" name=\"description\" />\n      <br>\n      <button (click)=\"newJob()\"> Crear oferta </button>\n    </form>\n    <p>{{message}}</p>\n  </div>\n</div>\n\n<div *ngIf=\"user && user.role!='admin'\" class=\"unauthorized\">\n  <p>You can't create new users. Please contact with your system administrator.</p>\n  <a [routerLink]=\"['/dashboard']\">Back</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/job/job.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_job_service__ = __webpack_require__("../../../../../src/app/services/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_centers_service__ = __webpack_require__("../../../../../src/app/services/centers.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobComponent = (function () {
    function JobComponent(jobS, centerS, auth, router) {
        var _this = this;
        this.jobS = jobS;
        this.centerS = centerS;
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            title: "",
            center: "",
            date: "",
            speciality: "",
            description: ""
        };
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    JobComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.centerS.getCenters()
            .subscribe(function (centers) { return _this.centers = centers; });
    };
    JobComponent.prototype.newJob = function () {
        var _this = this;
        var _a = this.formInfo, title = _a.title, center = _a.center, date = _a.date, speciality = _a.speciality, description = _a.description;
        console.log(this.formInfo);
        if (title != "" && center != "" && date != "" && speciality != "" && description) {
            this.jobS.createJob(title, center, date, speciality, description)
                .map(function (job) { return console.log(job); })
                .subscribe(function (job) { return _this.router.navigate(['/dashboard']); });
        }
        else {
            this.message = "All fields required";
        }
    };
    return JobComponent;
}());
JobComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-job',
        template: __webpack_require__("../../../../../src/app/job/job.component.html"),
        styles: [__webpack_require__("../../../../../src/app/job/job.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_job_service__["a" /* JobService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_centers_service__["a" /* CentersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_centers_service__["a" /* CentersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], JobComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=job.component.js.map

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.html":
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"!user\">\n  <h2> Login </h2>\n  <label> Username </label>\n  <input type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\"/>\n  <br>\n  <label> Password </label>\n  <input type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\"/>\n\n  <button (click)=\"login()\"> login </button>\n</form>\n\n<div *ngIf=\"message\" class=\"unauthorized\">\n  <p>{{message}}</p>\n  <a [routerLink]=\"['/dashboard']\">Back</a>\n</div>\n\n<div *ngIf=\"user\" class=\"unauthorized\">\n  <p>You're already logged in</p>  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginformComponent = (function () {
    function LoginformComponent(auth, router) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            username: "",
            password: ""
        };
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    LoginformComponent.prototype.ngOnInit = function () {
    };
    LoginformComponent.prototype.login = function () {
        var _this = this;
        var _a = this.formInfo, username = _a.username, password = _a.password;
        if (username != "" && password != "") {
            console.log("Login with " + username + " " + password);
            this.auth.login(username, password)
                .map(function (user) { return console.log(user); })
                .subscribe(function (user) { return _this.router.navigate(['/dashboard']); }, function (err) { return _this.message = err; });
        }
        else {
            console.log("You must set a username and a password");
            this.message = "You must set a username and a password";
        }
    };
    return LoginformComponent;
}());
LoginformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-loginform',
        template: __webpack_require__("../../../../../src/app/loginform/loginform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loginform/loginform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginformComponent);

var _a, _b;
//# sourceMappingURL=loginform.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginform_loginform_component__ = __webpack_require__("../../../../../src/app/loginform/loginform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signupform_signupform_component__ = __webpack_require__("../../../../../src/app/signupform/signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__job_job_component__ = __webpack_require__("../../../../../src/app/job/job.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__invitation_invitation_component__ = __webpack_require__("../../../../../src/app/invitation/invitation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__invitation_list_invitation_list_component__ = __webpack_require__("../../../../../src/app/invitation-list/invitation-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__delete_invitation_delete_invitation_component__ = __webpack_require__("../../../../../src/app/delete-invitation/delete-invitation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__job_details_job_details_component__ = __webpack_require__("../../../../../src/app/job-details/job-details.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });










var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_1__userprofile_userprofile_component__["a" /* UserprofileComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__loginform_loginform_component__["a" /* LoginformComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__signupform_signupform_component__["a" /* SignupformComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'invitation', component: __WEBPACK_IMPORTED_MODULE_6__invitation_invitation_component__["a" /* InvitationComponent */] },
    { path: 'invitations/:id/:user', component: __WEBPACK_IMPORTED_MODULE_8__delete_invitation_delete_invitation_component__["a" /* DeleteInvitationComponent */] },
    { path: 'job', component: __WEBPACK_IMPORTED_MODULE_5__job_job_component__["a" /* JobComponent */] },
    { path: 'invitations', component: __WEBPACK_IMPORTED_MODULE_7__invitation_list_invitation_list_component__["a" /* InvitationListComponent */] },
    { path: 'dashboard/:id', component: __WEBPACK_IMPORTED_MODULE_9__job_details_job_details_component__["a" /* JobDetailsComponent */] },
    { path: '**', redirectTo: 'home' }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL;
var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.userLoginEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.options = { withCredentials: true };
        this.isLoggedIn().subscribe();
    }
    AuthService.prototype.getLoginEventEmitter = function () {
        return this.userLoginEvent;
    };
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    AuthService.prototype.emitUserLoginEvent = function (user) {
        this.user = user;
        this.userLoginEvent.emit(user);
        return user;
    };
    AuthService.prototype.handleError = function (e) {
        console.log("AUTH ERROR");
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    AuthService.prototype.signup = function (username, password, name, phone, collegiate, speciality, role) {
        var _this = this;
        return this.http.post(BASEURL + "/signup", { username: username, password: password, name: name, phone: phone, collegiate: collegiate, speciality: speciality, role: role }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    // update(username,password,name,phone,collegiate,speciality,role) {
    //   return this.http.post(`${BASEURL}/signup`, {username, password, name, phone, collegiate, speciality, role}, this.options)
    //     .map(res => res.json())
    //     .map(user => this.emitUserLoginEvent(user))
    //     .catch(this.handleError);
    // }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(BASEURL + "/login", { username: username, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.get(BASEURL + "/logout", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(null); })
            .subscribe(function (user) { return _this.router.navigate(['']); });
    };
    AuthService.prototype.upload = function (username, password, name, phone, collegiate, speciality) {
        var _this = this;
        return this.http.put(BASEURL + "/update", { username: username, password: password, name: name, phone: phone, collegiate: collegiate, speciality: speciality }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.isLoggedIn = function () {
        var _this = this;
        return this.http.get(BASEURL + "/loggedin", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/centers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CentersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CentersService = (function () {
    function CentersService(http) {
        this.http = http;
        this.BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL;
        this.options = { withCredentials: true };
    }
    CentersService.prototype.handleError = function (e) {
        console.log("CREATE ERROR");
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    CentersService.prototype.getCenters = function () {
        return this.http.get(this.BASEURL + "/centers", this.options)
            .map(function (res) { return res.json(); });
    };
    return CentersService;
}());
CentersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CentersService);

var _a;
//# sourceMappingURL=centers.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardService = (function () {
    function DashboardService(http) {
        this.http = http;
        this.BASEURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASEURL;
        this.options = { withCredentials: true };
    }
    DashboardService.prototype.viewDashboard = function () {
        return this.http.get(this.BASEURL + "/dashboard", this.options)
            .map(function (res) { return res.json(); });
    };
    return DashboardService;
}());
DashboardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DashboardService);

var _a;
//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/invitation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvitationService = (function () {
    function InvitationService(http) {
        this.http = http;
        this.BASEURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASEURL;
        this.options = { withCredentials: true };
    }
    InvitationService.prototype.getList = function () {
        return this.http.get(this.BASEURL + "/invitations", this.options)
            .map(function (res) { return res.json(); });
    };
    InvitationService.prototype.get = function (id) {
        return this.http.get(this.BASEURL + "/invitations/" + id)
            .map(function (res) { return res.json(); });
    };
    InvitationService.prototype.delete = function (id) {
        return this.http.get(this.BASEURL + "/deleteinvitation/" + id, this.options);
    };
    return InvitationService;
}());
InvitationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], InvitationService);

var _a;
//# sourceMappingURL=invitation.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/isLoggedIn.canactivate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsLoggedInService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var timeout = function (nS) { return new Promise(function (resolve) { return setTimeout(resolve, nS * 1000); }); };
var IsLoggedInService = (function () {
    function IsLoggedInService(auth) {
        this.auth = auth;
    }
    IsLoggedInService.prototype.canActivate = function () {
        console.log("Checking can activate");
        return this.auth.getUser() ? true : false;
    };
    return IsLoggedInService;
}());
IsLoggedInService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], IsLoggedInService);

var _a;
//# sourceMappingURL=isLoggedIn.canactivate.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/job.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobService = (function () {
    function JobService(http) {
        this.http = http;
        this.BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL;
        this.options = { withCredentials: true };
    }
    JobService.prototype.handleError = function (e) {
        console.log("CREATE ERROR");
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    JobService.prototype.createJob = function (title, center, date, speciality, description) {
        return this.http.post(this.BASEURL + "/job/new", { title: title, center: center, date: date, speciality: speciality, description: description }, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    JobService.prototype.getJob = function (id) {
        return this.http.get(this.BASEURL + "/job/" + id)
            .map(function (res) { return res.json(); });
    };
    JobService.prototype.apply = function (id, user) {
        return this.http.put(this.BASEURL + "/job/apply/" + id + "/" + user, "")
            .map(function (res) { return res.json(); });
    };
    JobService.prototype.delete = function (id) {
        return this.http.get(this.BASEURL + "/deletejob/" + id, this.options);
    };
    return JobService;
}());
JobService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], JobService);

var _a;
//# sourceMappingURL=job.service.js.map

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin: 0 auto;\n  width: 50%;\n  border: 2px black solid;\n}\n\n.form {\n  margin: 10px auto;\n  padding: 20px;\n  width: 60%;\n}\n\n.form input {\n  width: 100%;\n  margin: 10px 0;\n}\n\n.form button {\n  height: 30px;\n  margin: 10px 0;\n  font-size: 1vw;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"form\">\n    <form *ngIf=\"user && user.role=='admin' \">\n      <h2> Add a new profile </h2>\n      <label> Role </label>\n      <input type=\"text\" [(ngModel)]=\"formInfo.role\" name=\"role\" />\n      <br>\n      <label> Username </label>\n      <input type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\" />\n      <br>\n      <label> Collegiate number </label>\n      <input type=\"text\" [(ngModel)]=\"formInfo.collegiate\" name=\"collegiate\" />\n      <br>\n      <label> Speciality </label>\n      <input type=\"text\" [(ngModel)]=\"formInfo.speciality\" name=\"speciality\" />\n      <br>\n      <label> Password </label>\n      <input type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\" />\n      <br>\n      <label> Name </label>\n      <input type=\"text\" [(ngModel)]=\"formInfo.name\" name=\"name\" />\n      <br>\n      <label> Phone </label>\n      <input type=\"number\" [(ngModel)]=\"formInfo.phone\" name=\"phone\" />\n      <br>\n      <button (click)=\"signup()\"> Create User </button>\n    </form>\n    <p>{{message}}</p>\n</div>\n</div>\n\n<div *ngIf=\"user && user.role!='admin'\" class=\"unauthorized\">\n  <p>You can't create new users. Please contact with your system administrator.</p>\n  <a [routerLink]=\"['/dashboard']\">Back</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupformComponent = (function () {
    function SignupformComponent(auth, router) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            username: "",
            password: "",
            name: "",
            phone: "",
            collegiate: "",
            speciality: "",
            role: ""
        };
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    SignupformComponent.prototype.ngOnInit = function () {
    };
    SignupformComponent.prototype.signup = function () {
        var _this = this;
        var _a = this.formInfo, username = _a.username, password = _a.password, name = _a.name, phone = _a.phone, collegiate = _a.collegiate, speciality = _a.speciality, role = _a.role;
        if (username != "" && password != "") {
            this.auth.signup(username, password, name, phone, collegiate, speciality, role)
                .map(function (user) { return console.log(user); })
                .subscribe(function (user) { return _this.router.navigate(['/dashboard']); });
        }
        else {
            this.message = "All fields required.";
        }
    };
    return SignupformComponent;
}());
SignupformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-signupform',
        template: __webpack_require__("../../../../../src/app/signupform/signupform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signupform/signupform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignupformComponent);

var _a, _b;
//# sourceMappingURL=signupform.component.js.map

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin: 0 auto;\n  width: 50%;\n  border: 2px black solid;\n}\n\n.form {\n  margin: 10px auto;\n  padding: 20px;\n  width: 60%;\n}\n\n.form input {\n  width: 100%;\n  height: 20px;\n  margin: 10px 0;\n}\n\nbutton {\n  width: 120px;\n  height: 30px;\n  margin: 10px 0;\n  font-size: 1vw;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!user\">\n  <h2>No user logged in.</h2>\n  <a [routerLink]=\"['']\">Back</a>\n</div>\n\n<div *ngIf=\"user\">\n  <div class=\"container\" *ngIf=\"control\">\n    <div class=\"form\">\n      <form>\n        <h2> Profile </h2>\n        <label> Username </label>\n        <input type=\"text\" value={{user.username}} name=\"username\" disabled/>\n        <br>\n        <label> Collegiate number </label>\n        <input type=\"text\" value={{user.collegiate}} name=\"collegiate\" disabled/>\n        <br>\n        <label> Speciality </label>\n        <input type=\"text\" value={{user.speciality}} name=\"speciality\" disabled/>\n        <br>\n        <label> Name </label>\n        <input type=\"text\" value={{user.name}} name=\"name\" disabled/>\n        <br>\n        <label> Phone </label>\n        <input type=\"number\" value={{user.phone}} name=\"phone\" disabled/>\n        <button *ngIf=\"control\" (click)=\"control=!control\">Update profile</button>\n      </form>\n    </div>\n\n  </div>\n\n  <div *ngIf=\"!control\" class=\"container\">\n    <div class=\"form\">\n      <form>\n        <h2> Update your profile </h2>\n        <label> Username </label>\n        <input type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\" />\n        <br>\n        <label> Collegiate number </label>\n        <input type=\"text\" [(ngModel)]=\"formInfo.collegiate\" name=\"collegiate\" />\n        <br>\n        <label> Speciality </label>\n        <input type=\"text\" [(ngModel)]=\"formInfo.speciality\" name=\"speciality\" />\n        <br>\n        <label> Password </label>\n        <input type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\" />\n        <br>\n        <label> Name </label>\n        <input type=\"text\" [(ngModel)]=\"formInfo.name\" name=\"name\" />\n        <br>\n        <label> Phone </label>\n        <input type=\"number\" [(ngModel)]=\"formInfo.phone\" name=\"phone\" />\n        <br>\n        <button (click)=\"upload()\"> Update </button>\n        <button (click)=\"control=!control\"> Back </button>\n      </form>\n      <p>{{message}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserprofileComponent = (function () {
    function UserprofileComponent(auth, router) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            username: "",
            password: "",
            name: "",
            phone: "",
            collegiate: "",
            speciality: ""
        };
        this.control = true;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    UserprofileComponent.prototype.ngOnInit = function () {
    };
    UserprofileComponent.prototype.upload = function () {
        var _this = this;
        var _a = this.formInfo, username = _a.username, password = _a.password, name = _a.name, phone = _a.phone, collegiate = _a.collegiate, speciality = _a.speciality;
        if (username != "" && password != "" && name != "" && phone != "" && collegiate != "" && speciality) {
            this.control = !this.control;
            this.auth.upload(username, password, name, phone, collegiate, speciality)
                .map(function (user) { return console.log(user); })
                .subscribe(function (user) { return _this.router.navigate(['/user']); });
        }
        else {
            this.message = "All fields required";
        }
    };
    return UserprofileComponent;
}());
UserprofileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-userprofile',
        template: __webpack_require__("../../../../../src/app/userprofile/userprofile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userprofile/userprofile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserprofileComponent);

var _a, _b;
//# sourceMappingURL=userprofile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    BASEURL: 'http://localhost:3000'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map