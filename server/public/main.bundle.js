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

/***/ "../../../../../src/app/alerts/alerts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 480px) {\n  h1 {\n    text-align: center;\n  }\n  .alert {\n    background: rgba(204, 230, 255, 0.2);\n    border-radius: 15px;\n    width: 50%;\n    border: 2px solid black;\n    margin: 10px auto;\n    padding: 5px 20px;\n  }\n  .alert button {\n    background: blue;\n    color: white;\n    font-size: 1vw;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n  .alert button:hover {\n    background: navy;\n    color: white;\n    font-size: 1vw;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n  .new {\n    text-align: center;\n    margin-top: 10px;\n  }\n}\n\n@media screen and (max-width: 479px) {\n  h1 {\n    text-align: center;\n    font-size: 17px;\n  }\n\n  .alert {\n    background: rgba(204, 230, 255, 0.2);\n    border-radius: 15px;\n    width: 80%;\n    border: 2px solid black;\n    margin: 10px auto;\n    padding: 5px 20px;\n  }\n  .alert button {\n    background: blue;\n    color: white;\n    font-size: 10px;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n  .alert button:hover {\n    background: navy;\n    color: white;\n    font-size: 10px;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n  .new {\n    text-align: center;\n    margin-top: 150px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alerts/alerts.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"new\">\n    <a [routerLink]=\"['/newalert']\">Crear nueva alerta</a>\n  </div>\n\n  <div *ngFor=\"let alert of alerts\" class=\"container\">\n    <div class=\"alert\">\n      <app-single-alert [alert]=\"alert\" (onDelete)=\"deleteAlert($event)\"></app-single-alert>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/alerts/alerts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alerts_service__ = __webpack_require__("../../../../../src/app/services/alerts.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertsComponent = (function () {
    function AlertsComponent(router, alertServ, auth) {
        this.router = router;
        this.alertServ = alertServ;
        this.auth = auth;
    }
    AlertsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
        this.alertServ.getAlerts().subscribe(function (alerts) { return _this.alerts = alerts; });
    };
    AlertsComponent.prototype.deleteAlert = function (id) {
        var _this = this;
        this.alertServ.deleteAlert(id).subscribe(function () {
            _this.alerts = _this.alerts.filter(function (alert) { return alert._id !== id; });
        });
    };
    return AlertsComponent;
}());
AlertsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-alerts',
        template: __webpack_require__("../../../../../src/app/alerts/alerts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/alerts/alerts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_alerts_service__["a" /* AlertsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alerts_service__["a" /* AlertsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], AlertsComponent);

var _a, _b, _c;
//# sourceMappingURL=alerts.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 480px) {\n  header {\n    background: #cce6ff;\n    height: 100px;\n    width: 100%;\n    text-align: center;\n  }\n  .user {\n    right: 0;\n    top: 0;\n    position: absolute;\n    margin-right: 20px;\n  }\n  .logo.container {\n    width: 20%;\n    float: left;\n    z-index: 3;\n  }\n  .logo {\n    width: 150px;\n    height: 120px;\n    margin: 10px;\n    float: left;\n    position: absolute;\n    left: 0;\n  }\n  .title {\n    width: 100%;\n  }\n  h1 {\n    height: 100px;\n    width: 100%;\n    float: left;\n    text-align: center;\n    margin: 0px;\n    font-family: 'Baloo Tammudu';\n    font-size: 60px;\n  }\n  h1 a {\n    text-decoration: none;\n    color: #003366;\n  }\n  .menu {\n    background: #cce6ff;\n    height: 70px;\n    width: 100%;\n    text-align: center;\n  }\n  .menu a {\n    margin: 0 20px;\n    text-decoration: none;\n    color: #0059b3;\n  }\n  .menu p {\n    margin: 0 20px;\n    text-decoration: none;\n    float: right;\n  }\n  button {\n    height: 30px;\n    margin: 0 10px;\n    font-size: 1vw;\n  }\n  .body {\n    margin: 0;\n    padding: 0;\n  }\n}\n\n@media screen and (max-width: 479px) {\n  header {\n    background: #cce6ff;\n    height: 100px;\n    width: 100%;\n    text-align: center;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n  }\n  .user {\n    width: 15%;\n    right: 0;\n    top: 0;\n    position: absolute;\n    margin-right: 20px;\n    font-size: 10px;\n  }\n  .logo.container {\n    width: 20%;\n    float: left;\n  }\n  .logo {\n    width: 70px;\n    height: 50px;\n    margin: 10px;\n    float: left;\n    z-index: 1;\n    left: 0;\n  }\n  .title {\n    float: left;\n    width: 50%;\n    margin: 0 20px;\n  }\n  h1 {\n    float: left;\n    height: 50px;\n    width: 50%;\n    text-align: center;\n    margin: 0px;\n    font-family: 'Baloo Tammudu';\n    font-size: 30px;\n  }\n  h1 a {\n    text-decoration: none;\n    color: #003366;\n  }\n  .menu {\n    background: #cce6ff;\n    height: 65px;\n    width: 100%;\n    text-align: center;\n    font-size: 14px;\n    position: fixed;\n    z-index: 1;\n    top: 70px;\n    padding: 0 5px;\n  }\n  .menu a {\n    margin: 30px 20px;\n    text-decoration: none;\n    color: #0059b3;\n  }\n  .menu p {\n    margin: 0 20px;\n    text-decoration: none;\n    float: right;\n  }\n  button {\n    border: 1px solid black;\n    height: 20px;\n    margin: 5px;\n    font-size: 10px;\n  }\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"user\">\n    <p *ngIf=\"user\">Conectado como: <b>{{user.username | json}}</b></p>\n  </div>\n  <div class=\"logo-container\">\n    <img class=\"logo\" src=\"https://preview.ibb.co/gr7rQb/logo.png\" alt=\"findingDocs\">\n  </div>\n  <div *ngIf=\"user\" class=\"mititle\">\n    <h1><a [routerLink]=\"['/dashboard']\">{{ title }}</a></h1>\n  </div>\n  <div *ngIf=\"!user\" class=\"title\">\n    <h1><a [routerLink]=\"['']\">{{ title }}</a></h1>\n  </div>\n</header>\n\n<div class=\"menu\">\n  <a *ngIf=\"user\" [routerLink]=\"['/dashboard']\"><b>Tablón de ofertas</b></a>\n  <a *ngIf=\"user && user.role=='manager'\" [routerLink]=\"['/job']\"><b>Crear oferta</b></a>\n  <a *ngIf=\"!user\" [routerLink]=\"['/login']\"><b>Iniciar sesión</b></a>\n  <a *ngIf=\"!user\" [routerLink]=\"['/invitation']\"><b>Solicitar invitación</b></a>\n  <a *ngIf=\"user\" [routerLink]=\"['/user']\"><b>Datos de usuario</b></a>\n  <a *ngIf=\"user && user.role=='doctor'\" [routerLink]=\"['/alerts']\"><b>Mis alertas</b></a>\n  <a *ngIf=\"user && user.role=='admin'\" [routerLink]=\"['/userslist']\"><b>Listado de usuarios</b></a>\n  <a *ngIf=\"user && user.role=='admin'\" [routerLink]=\"['/signup']\"><b>Añadir usuario</b></a>\n  <a *ngIf=\"user && user.role=='admin'\" [routerLink]=\"['/invitations']\"><b>Lista de invitaciones</b></a>\n  <button *ngIf=\"user\" (click)=\"auth.logout()\">Cerrar sesión</button>\n</div>\n\n<div class=\"body\">\n  <router-outlet></router-outlet>\n</div>\n"

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
        this.title = 'findingDocs';
        this.notifications = 0;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    AppComponent.prototype.refreshNotifications = function (counter) {
        this.notifications = counter;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__alerts_alerts_component__ = __webpack_require__("../../../../../src/app/alerts/alerts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_alerts_service__ = __webpack_require__("../../../../../src/app/services/alerts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__new_alert_new_alert_component__ = __webpack_require__("../../../../../src/app/new-alert/new-alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__single_alert_single_alert_component__ = __webpack_require__("../../../../../src/app/single-alert/single-alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__users_list_users_list_component__ = __webpack_require__("../../../../../src/app/users-list/users-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/notifications/notifications.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_22__job_details_job_details_component__["a" /* JobDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_23__alerts_alerts_component__["a" /* AlertsComponent */],
            __WEBPACK_IMPORTED_MODULE_25__new_alert_new_alert_component__["a" /* NewAlertComponent */],
            __WEBPACK_IMPORTED_MODULE_26__single_alert_single_alert_component__["a" /* SingleAlertComponent */],
            __WEBPACK_IMPORTED_MODULE_27__users_list_users_list_component__["a" /* UsersListComponent */],
            __WEBPACK_IMPORTED_MODULE_29__notifications_notifications_component__["a" /* NotificationsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_28__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: "AIzaSyAEPLF39G3_N8Fdw7J8Q1gLsGWJWk9Wv_E"
            }),
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__routes__["a" /* routes */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_10__services_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */], __WEBPACK_IMPORTED_MODULE_14__services_dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_17__services_centers_service__["a" /* CentersService */], __WEBPACK_IMPORTED_MODULE_15__services_job_service__["a" /* JobService */], __WEBPACK_IMPORTED_MODULE_20__services_invitation_service__["a" /* InvitationService */], __WEBPACK_IMPORTED_MODULE_24__services_alerts_service__["a" /* AlertsService */]],
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
exports.push([module.i, "@media screen and (min-width: 480px) {\n  .container {\n    text-align: center;\n  }\n  h2 {\n    text-align: center;\n  }\n  .job {\n    background: rgba(204, 230, 255, 0.2);\n    display: inline-block;\n    width: 50%;\n    border: 2px solid black;\n    border-radius: 15px;\n    margin: 10px auto;\n    padding: 5px 20px;\n  }\n  .job button {\n    background: blue;\n    color: white;\n    font-size: 1vw;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n  .job button:hover {\n    background: navy;\n    color: white;\n    font-size: 1vw;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n  .data {\n    text-align: left;\n    float: left;\n  }\n  .map {\n    float: right;\n    border: 2px solid blue;\n  }\n  agm-map {\n    height: 280px;\n    width: 350px;\n  }\n}\n\n@media screen and (max-width: 479px) {\n  .container {\n    margin-top: 140px;\n    text-align: center;\n  }\n  h2 {\n    text-align: center;\n  }\n  .job {\n    background: rgba(204, 230, 255, 0.2);\n    display: inline-block;\n    width: 90%;\n    border: 2px solid black;\n    border-radius: 15px;\n    margin: 5px auto;\n    padding: 2px 10px;\n  }\n  .job button {\n    background: blue;\n    color: white;\n    font-size: 10px;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n  .job button:hover {\n    background: navy;\n    color: white;\n    font-size: 10px;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n  .data {\n    text-align: left;\n    font-size: 12px;\n    float: left;\n  }\n  .map {\n    float: left;\n    border: 2px solid navy;\n    margin-right: 10px;\n    margin-top: 5px;\n  }\n  agm-map {\n    height: 200px;\n    width: 200px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\" class=\"container\">\n\n<div *ngIf=\"jobs\">\n\n  <div *ngIf=\"jobs.length > 0\">\n\n    <h2>Ofertas activas</h2>\n\n    <div class=\"job\" *ngFor=\"let job of jobs\">\n\n      <div class=\"data\">\n        <p><b>Oferta:</b> {{job.title }}</p>\n        <p><b>Especialidad:</b> {{job.speciality }}</p>\n        <p><b>Centro:</b> {{job.center.title }}</p>\n        <p><b>Fecha de inicio:</b> {{job.datein | date}}</p>\n        <p><b>Fecha de finalización:</b> {{job.dateout | date}}</p>\n        <p><b>Descripción:</b> {{job.description }}</p>\n        <div *ngIf=\"user.role!='doctor'\">\n          <p><b>Solicitantes:</b> </p>\n          <div *ngFor=\"let doctor of job.doctor\">\n            <p>{{doctor.name }}, Nº de colegiado: {{doctor.collegiate}}</p>\n          </div>\n        </div>\n        <a *ngIf=\"user.role==='doctor'\" [routerLink]=\"[job._id]\">Solicitar puesto</a>\n        <a *ngIf=\"user.role==='manager' || user.role==='admin'\" [routerLink]=\"[job._id]\">Ver detalles</a>\n      </div>\n\n      <div class=\"map\">\n        <agm-map [scrollwheel]=\"false\" [zoom]=\"zoom\" [latitude]=\"job.center.location.latitude\" [longitude]=\"job.center.location.longitude\">\n          <agm-marker [latitude]=\"job.center.location.latitude\" [longitude]=\"job.center.location.longitude\"></agm-marker>\n        </agm-map>\n      </div>\n\n    </div>\n  </div>\n\n\n  <div *ngIf=\"jobs.length === 0\">\n    <h2>No hay ninguna oferta actualmente.</h2>\n  </div>\n\n\n</div>\n\n</div>\n\n<div *ngIf=\"!user\" class=\"unauthorized\">\n  <p>No tiene permiso para ver esta página. Por favor, póngase en contacto con el administrador del sistema.</p>\n  <a [routerLink]=\"['']\">Volver</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dashboard_service__ = __webpack_require__("../../../../../src/app/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alerts_service__ = __webpack_require__("../../../../../src/app/services/alerts.service.ts");
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
    function DashboardComponent(dashS, auth, alertS) {
        this.dashS = dashS;
        this.auth = auth;
        this.alertS = alertS;
        this.zoom = 17;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
        this.dashS.viewDashboard().subscribe(function (e) { return _this.jobs = e; });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dashboard_service__["a" /* DashboardService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_alerts_service__["a" /* AlertsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alerts_service__["a" /* AlertsService */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/delete-invitation/delete-invitation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 480px) {\n  h2 {\n    text-align: center;\n  }\n  .invitation {\n    background: rgba(204, 230, 255, 0.2);\n    width: 30%;\n    border: 2px solid black;\n    border-radius: 15px;\n    margin: 10px auto;\n    padding: 5px 20px;\n  }\n  .invitation button {\n    background: blue;\n    color: white;\n    font-size: 1vw;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n  .invitation button:hover {\n    background: navy;\n    color: white;\n    font-size: 1vw;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n}\n\n@media screen and (max-width: 479px) {\n  h2 {\n    margin-top: 140px;\n    text-align: center;\n  }\n  .invitation {\n    background: rgba(204, 230, 255, 0.2);\n    width: 80%;\n    border: 2px solid black;\n    border-radius: 15px;\n    margin: auto;\n    padding: 5px 20px;\n  }\n  .invitation button {\n    background: blue;\n    color: white;\n    font-size: 1vw;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n  .invitation button:hover {\n    background: navy;\n    color: white;\n    font-size: 1vw;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/delete-invitation/delete-invitation.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user && user.role==='admin'\">\n\n  <h2>¿Está seguro de que quiere borrar esta petición?</h2>\n\n  <div class=\"invitation\">\n    <p>Usuario: {{invitation.username}}</p>\n    <p>Nº de colegiado: {{invitation.collegiate}}</p>\n    <p>Especialidad: {{invitation.speciality}}</p>\n    <p>Nombre: {{invitation.name}}</p>\n    <p>Teléfono: {{invitation.phone}}</p>\n    <button (click)=\"deleteInvitation(invitation._id)\">Delete</button>\n    <a [routerLink]=\"['/invitations']\">Cancelar</a>\n  </div>\n\n</div>\n\n<div *ngIf=\"!user\" class=\"unauthorized\">\n  <p>No tiene permiso para ver esta página. Por favor, póngase en contacto con el administrador del sistema.</p>\n  <a [routerLink]=\"['']\">Volver</a>\n</div>\n"

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
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.invS = invS;
    }
    DeleteInvitationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
        this.route.params.subscribe(function (params) {
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
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
exports.push([module.i, "@media screen and (min-width: 480px) {\n  .background {\n    background-image: url('https://static.pexels.com/photos/263370/pexels-photo-263370.jpeg');\n    background-size: cover;\n    background-position: top;\n    width: 100%;\n    height: 600px;\n  }\n}\n\n@media screen and (max-width: 479px) {\n  .background {\n    background-image: url('https://static.pexels.com/photos/263370/pexels-photo-263370.jpeg');\n    background-size: cover;\n    position: fixed;\n    width: 100%;\n    height: 600px;\n    margin: 0;\n    padding: 0;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n</div>\n"

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
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
exports.push([module.i, "@media screen and (min-width: 480px) {\n  h2 {\n    text-align: center;\n  }\n  .invitation {\n    background: rgba(204, 230, 255, 0.2);\n    width: 30%;\n    border: 2px solid black;\n    border-radius: 15px;\n    margin: 10px auto;\n    padding: 5px 20px;\n  }\n  .invitation button {\n    background: blue;\n    color: white;\n    font-size: 1vw;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n  .invitation button:hover {\n    background: navy;\n    color: white;\n    font-size: 1vw;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n}\n\n@media screen and (max-width: 479px) {\n  .main {\n    margin-top: 150px;\n    width:90%;\n  }\n\n  h2 {\n    text-align: center;\n    font-size: 17px;\n  }\n  .invitation {\n    background: rgba(204, 230, 255, 0.2);\n    font-size: 15px;\n    width: 80%;\n    border: 2px solid black;\n    border-radius: 15px;\n    margin: 10px 30px;\n    padding: 5px 20px;\n  }\n  .invitation button {\n    background: blue;\n    color: white;\n    font-size: 10px;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n  .invitation button:hover {\n    background: navy;\n    color: white;\n    font-size: 10px;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invitation-list/invitation-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user && user.role==='admin'\" class=\"main\">\n\n  <h2>Invitaciones pendientes</h2>\n\n  <div class=\"invitation\" *ngFor=\"let invitation of invitations\">\n    <p>Tipo de usuario: {{invitation.role}}</p>\n    <input hidden=\"true\" type=\"text\" name=\"role\" value={{invitation.role}}>\n    <p>Nombre de usuario: {{invitation.username}}</p>\n    <input hidden=\"true\" type=\"text\" name=\"username\" value={{invitation.username}}>\n    <p>Nº de colegiado: {{invitation.collegiate}}</p>\n    <input hidden=\"true\" type=\"text\" name=\"collegiate\" value={{invitation.collegiate}}>\n    <p>Especialidad: {{invitation.speciality}}</p>\n    <input hidden=\"true\" type=\"text\" name=\"speciality\" value={{invitation.speciality}}>\n    <p>Nombre: {{invitation.name}}</p>\n    <input hidden=\"true\" type=\"text\" name=\"name\" value={{invitation.name}}>\n    <p>Teléfono: {{invitation.phone}}</p>\n    <input hidden=\"true\" type=\"text\" name=\"phone\" value={{invitation.phone}}>\n    <p>Email: {{invitation.email}}</p>\n    <input hidden=\"true\" type=\"email\" name=\"email\" value={{invitation.email}}>\n    <button (click)=\"create(invitation)\">Crear usuario</button>\n    <a [routerLink]=\"[invitation._id, user._id]\"> Borrar invitación </a>\n  </div>\n\n</div>\n\n<div *ngIf=\"!user\" class=\"unauthorized\">\n  <p>No tiene permiso para ver esta página. Por favor, póngase en contacto con el administrador del sistema.</p>\n  <a [routerLink]=\"['']\">Volver</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/invitation-list/invitation-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_invitation_service__ = __webpack_require__("../../../../../src/app/services/invitation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function InvitationListComponent(router, invS, auth) {
        this.router = router;
        this.invS = invS;
        this.auth = auth;
    }
    InvitationListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
        this.invS.getList().subscribe(function (e) { return _this.invitations = e; });
    };
    InvitationListComponent.prototype.create = function (inv) {
        var _this = this;
        var username = inv.username, password = inv.password, name = inv.name, phone = inv.phone, collegiate = inv.collegiate, speciality = inv.speciality, role = inv.role, email = inv.email;
        if (username != "" && password != "") {
            this.auth.signup(username, password, name, phone, email, collegiate, speciality, role)
                .map(function (user) { return console.log(user); })
                .subscribe(function (user) { return _this.router.navigate(['/dashboard']); });
        }
        else {
            this.message = "Todos los campos son oligatorios.";
        }
    };
    return InvitationListComponent;
}());
InvitationListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-invitation-list',
        template: __webpack_require__("../../../../../src/app/invitation-list/invitation-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/invitation-list/invitation-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_invitation_service__["a" /* InvitationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_invitation_service__["a" /* InvitationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], InvitationListComponent);

var _a, _b, _c;
//# sourceMappingURL=invitation-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/invitation/invitation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 480px) {\n  .container {\n    margin: 0 auto;\n    width: 70%;\n  }\n  .form {\n    margin: 10px auto;\n    padding: 20px;\n    width: 40%;\n  }\n  .select {\n    float: right;\n    margin: 10px;\n  }\n  .select label {\n    margin: 0 10px;\n    vertical-align: middle;\n  }\n  .select select {\n    background: rgba(204, 230, 255, 0.2);\n    float: right;\n    font-size: 15px;\n    height: 25px;\n    background: AliceBlue;\n  }\n  .form input {\n    background: rgba(204, 230, 255, 0.2);\n    width: 100%;\n    margin: 10px 0;\n    height: 20px;\n  }\n  .form h2 {\n    text-align: center;\n  }\n  .form button {\n    height: 30px;\n    margin: 10px 0;\n    font-size: 1vw;\n  }\n  .speciality {\n    background: rgba(204, 230, 255, 0.2);\n    font-size: 15px;\n    height: 25px;\n    width: 100%;\n  }\n  .back {\n    margin: 0 20px;\n  }\n  span img {\n    width: 30px;\n    height: 30px;\n  }\n}\n\n@media screen and (max-width: 479px) {\n  .container {\n    margin: 110px 25px 0;\n    width: 90%;\n  }\n  .form {\n    padding: 10px;\n    width: 80%;\n  }\n  .select {\n    float: right;\n    margin: 10px;\n  }\n  .select label {\n    margin: 0 10px;\n    vertical-align: middle;\n  }\n  .select select {\n    float: right;\n    font-size: 13px;\n    height: 25px;\n    background: AliceBlue;\n    border: 2px solid black;\n  }\n  .form input {\n    background: rgba(204, 230, 255, 0.2);\n    width: 100%;\n    margin: 5px 0;\n    height: 20px;\n    border: 2px solid black;\n  }\n  .form h2 {\n    text-align: center;\n  }\n  .form button {\n    height: 30px;\n    margin: 10px 0;\n    font-size: 10px;\n    background: navy;\n    color: white;\n  }\n  .speciality {\n    font-size: 15px;\n    height: 25px;\n    width: 100%;\n    background: rgba(204, 230, 255, 0.2);\n    border: 2px solid black;\n  }\n  .back {\n    margin: 0 20px;\n    font-size: 15px;\n  }\n  span img {\n    width: 30px;\n    height: 30px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invitation/invitation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"form\">\n    <h2> Solicitud de invitación </h2>\n    <div class=\"select\">\n      <label class=\"usertype\">Tipo de usuario:</label>\n      <select [(ngModel)]=\"formInfo.role\" name=\"role\">\n        <option value=\"doctor\">Doctor</option>\n        <option value=\"manager\">Coordinador</option>\n      </select>\n    </div>\n    <br><br><br>\n    <form>\n      <label> DNI </label>\n      <input type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\" />\n      <br>\n      <label> Nª de colegiado </label>\n      <input type=\"text\" [(ngModel)]=\"formInfo.collegiate\" name=\"collegiate\" />\n      <br><br>\n      <label> Especialidad </label>\n      <select class=\"speciality\" [(ngModel)]=\"formInfo.speciality\" name=\"speciality\">\n        <option value=\"Medicina familiar\">Médico de familia</option>\n        <option value=\"Pediatria\">Pediatría</option>\n        <option value=\"Coordinador\">Coordinador</option>\n      </select>\n      <br><br>\n      <label> Nombre y apellidos</label>\n      <input type=\"text\" [(ngModel)]=\"formInfo.name\" name=\"name\" />\n      <br>\n      <label> Teléfono </label>\n      <input type=\"number\" [(ngModel)]=\"formInfo.phone\" name=\"phone\" />\n      <br>\n      <label> Email </label>\n      <input type=\"email\" [(ngModel)]=\"formInfo.email\" name=\"email\" />\n      <br>\n      <button (click)=\"askForInvitation()\"> Solicitar invitación </button>\n      <a class=\"back\" [routerLink]=\"['']\" control=!control>Volver</a>\n      <br>\n      <p>{{control}}</p>\n      <p>{{message}}</p>\n    </form>\n</div>\n</div>\n\n<div *ngIf=\"user && user.role!='admin'\" class=\"unauthorized\">\n  <p>No tiene permiso para ver esta página. Por favor, póngase en contacto con el administrador del sistema.</p>\n  <a [routerLink]=\"['/dashboard']\">Volver</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/invitation/invitation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_invitation_service__ = __webpack_require__("../../../../../src/app/services/invitation.service.ts");
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
    function InvitationComponent(auth, invS, router) {
        this.auth = auth;
        this.invS = invS;
        this.router = router;
        this.formInfo = {
            role: "",
            username: "",
            collegiate: "",
            speciality: "",
            name: "",
            phone: "",
            email: "",
        };
    }
    InvitationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    };
    InvitationComponent.prototype.askForInvitation = function () {
        var _this = this;
        var _a = this.formInfo, role = _a.role, username = _a.username, collegiate = _a.collegiate, speciality = _a.speciality, name = _a.name, phone = _a.phone, email = _a.email;
        if (role != "" && username != "" && collegiate != "" && speciality != "" && name != "" && phone != "" && email != "") {
            this.invS.new(role, username, collegiate, speciality, name, phone, email)
                .map(function (inv) { return _this.control = "Invitación enviada."; })
                .subscribe(function (inv) { return _this.router.navigate(['home']); });
        }
        else {
            this.message = "Todos los campos son obligatorios.";
        }
    };
    return InvitationComponent;
}());
InvitationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-invitation',
        template: __webpack_require__("../../../../../src/app/invitation/invitation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/invitation/invitation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_invitation_service__["a" /* InvitationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_invitation_service__["a" /* InvitationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], InvitationComponent);

var _a, _b, _c;
//# sourceMappingURL=invitation.component.js.map

/***/ }),

/***/ "../../../../../src/app/job-details/job-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 480px) {\n  .container {\n    text-align: center;\n  }\n  h2 {\n    text-align: center;\n  }\n  .job {\n    background: rgba(204, 230, 255, 0.2);\n    display: inline-block;\n    width: 50%;\n    border: 2px solid black;\n    border-radius: 15px;\n    margin: 10px auto;\n    padding: 5px 20px;\n  }\n  .job button {\n    background: blue;\n    color: white;\n    font-size: 1vw;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n  .job button:hover {\n    background: navy;\n    color: white;\n    font-size: 1vw;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n  .data {\n    text-align: left;\n    float: left;\n  }\n  .map {\n    margin-top: 20px;\n    float: right;\n    border: 2px solid blue;\n  }\n  agm-map {\n    height: 280px;\n    width: 350px;\n  }\n}\n\n@media screen and (max-width: 479px) {\n  .container {\n    margin-top: 150px;\n    text-align: center;\n  }\n  h2 {\n    text-align: center;\n  }\n  .job {\n    background: rgba(204, 230, 255, 0.2);\n    border-radius: 15px;\n    display: inline-block;\n    width: 80%;\n    border: 2px solid black;\n    border-radius: 15px;\n    margin:  auto;\n    padding: 5px 20px;\n  }\n  .job button {\n    background: blue;\n    color: white;\n    font-size: 1vw;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n  .job button:hover {\n    background: navy;\n    color: white;\n    font-size: 1vw;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n  .data {\n    text-align: left;\n    float: left;\n  }\n  .map {\n    float: left;\n    border: 2px solid blue;\n    margin-right: 10px;\n    margin-top: 5px;\n  }\n  agm-map {\n    height: 200px;\n    width: 200px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/job-details/job-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user && job\" class=\"container\">\n\n  <h2 *ngIf=\"user && user.role==='doctor'\">¿Estás seguro de que quieres solicitar esta oferta?</h2>\n\n  <h2>{{job.title}}</h2>\n\n  <div class=\"job\">\n    <div class=\"data\">\n      <p><b>Oferta:</b> {{job.title}}</p>\n      <p><b>Especialidad:</b> {{job.speciality | json}}</p>\n      <p><b>Centro:</b> {{job.center.title}}</p>\n      <li><em>{{job.center.address.streetaddress}}</em></li>\n      <li><em>{{job.center.address.locality}}</em></li>\n      <li><em>{{job.center.address.postalcode}}</em></li>\n      <p><b>Fecha de inicio:</b> {{job.datein | date}}</p>\n      <p><b>Fecha de finalización:</b> {{job.dateout | date}}</p>\n      <p><b>Descripción:</b> {{job.description}}</p>\n      <p *ngIf=\"job.doctor && user.role!='doctor'\"><b>SOLICITUDES:</b> </p>\n      <ul *ngIf=\"job.doctor && user.role!='doctor'\">\n        <li *ngFor=\"let doc of job.doctor\">\n          {{doc.username}}\n          <button *ngIf=\"user._id === job.creator\" class=\"button\" (click)=\"deleteUser(job._id, doc._id)\">Eliminar usuario</button>\n          <button *ngIf=\"user._id === job.creator\" class=\"button\" (click)=\"acceptUser(job._id, doc._id)\">Aceptar usuario</button>\n        </li>\n      </ul>\n      <button class=\"regbutton\" (click)=\"applyJob(job._id, user._id)\" *ngIf=\"user && user.role==='doctor'\">Solicitar puesto</button>\n      <button class=\"regbutton\" (click)=\"deleteJob(job._id)\" *ngIf=\"user._id === job.creator\">Eliminar oferta</button>\n      <a [routerLink]=\"['/dashboard']\">Volver</a>\n    </div>\n    <div class=\"map\">\n      <agm-map [scrollwheel]=\"false\" [zoom]=\"zoom\" [latitude]=\"job.center.location.latitude\" [longitude]=\"job.center.location.longitude\">\n        <agm-marker [latitude]=\"job.center.location.latitude\" [longitude]=\"job.center.location.longitude\"></agm-marker>\n      </agm-map>\n    </div>\n\n  </div>\n\n</div>\n\n<div *ngIf=\"!user\" class=\"unauthorized\">\n  <p>No tiene permiso para ver esta página. Por favor, póngase en contacto con el administrador del sistema.</p>\n  <a [routerLink]=\"['']\">Volver</a>\n</div>\n"

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
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.jobS = jobS;
        this.zoom = 15;
    }
    JobDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
        this.route.params.subscribe(function (params) {
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
    JobDetailsComponent.prototype.acceptUser = function (id, user) {
        var _this = this;
        this.jobS.acceptUser(id, user).subscribe(function () {
            _this.router.navigate(['dashboard']);
        });
    };
    JobDetailsComponent.prototype.deleteUser = function (id, user) {
        var _this = this;
        this.jobS.deleteUser(id, user).subscribe(function () {
            _this.router.navigate(['dashboard']);
        });
    };
    return JobDetailsComponent;
}());
JobDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
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
exports.push([module.i, "@media screen and (min-width: 480px) {\n  select .option {\n    width: 40px;\n  }\n  h2 {\n    text-align: center;\n  }\n  .select {\n    margin: 0 auto;\n    padding: 10px 0px;\n    width: 60%;\n  }\n  .container select {\n    width: 100%;\n    margin: 10px 0;\n    height: 20px;\n    background: rgba(204, 230, 255, 0.2);\n    font-size: 15px;\n  }\n  .form {\n    margin: 0 auto;\n    width: 60%;\n  }\n  .dates {\n    display: inline-block;\n  }\n  .dates div {\n    width: 50%;\n    float: left;\n  }\n  .form input {\n    background: rgba(204, 230, 255, 0.2);\n    width: 100%;\n    margin: 5px;\n    height: 20px;\n    font-size: 15px;\n  }\n  .dates input {\n    width: 80%;\n  }\n  .container {\n    margin: 0 auto;\n    padding: 20px;\n    width: 40%;\n  }\n  .form button {\n    height: 30px;\n    margin: 10px 0;\n    font-size: 1vw;\n  }\n  .a {\n    margin: 0 20px;\n  }\n}\n\n@media screen and (max-width: 479px) {\n  select .option {\n    width: 40px;\n  }\n  h2 {\n    text-align: center;\n  }\n  .select {\n    margin: 0 auto;\n    padding: 10px 0px;\n    width: 60%;\n  }\n  .container select {\n    border: 2px solid black;\n    width: 100%;\n    margin: 10px 0;\n    height: 20px;\n    background: rgba(204, 230, 255, 0.2);\n    font-size: 15px;\n  }\n  .form {\n    margin: 0 auto;\n    width: 60%;\n  }\n  .dates {\n    display: inline-block;\n  }\n  .dates div {\n    width: 50%;\n    float: left;\n  }\n  .form input {\n    background: rgba(204, 230, 255, 0.2);\n    border: 2px solid black;\n    width: 90%;\n    margin: 5px;\n    height: 20px;\n    font-size: 10px;\n  }\n  .dates input {\n    border: 2px solid black;\n    width: 80%;\n  }\n  .container {\n    margin: 110px auto;\n    padding: 20px;\n    width: 90%;\n  }\n  .form button {\n    height: 30px;\n    margin: 10px 0;\n    font-size: 10px;\n    background: navy;\n    color: white;\n  }\n  .a {\n    margin: 0 20px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/job/job.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user && user.role!=='doctor'\" class=\"container\">\n  <div class=\"select\">\n    <h2> Crear oferta </h2>\n    <label>Centro:</label>\n    <select [(ngModel)]=\"formInfo.center\" name=\"center\">\n      <option *ngFor=\"let center of centers\" value=\"{{center._id}}\">{{center.title}}</option>\n    </select>\n    <label>Tipo:</label>\n    <select [(ngModel)]=\"formInfo.title\" name=\"title\">\n      <option value=\"Médico de familia\">Médico de familia</option>\n      <option value=\"Pediatria\">Pediatría</option>\n      <option value=\"Urgencias SUAP\">Urgencias SUAP</option>\n    </select>\n    <label>Especialidad:</label>\n    <select [(ngModel)]=\"formInfo.speciality\" name=\"speciality\">\n      <option value=\"Medicina familiar\">Médico de familia</option>\n      <option value=\"Pediatria\">Pediatría</option>\n    </select>\n  </div>\n  <div class=\"form\">\n    <form>\n      <div class=\"dates\">\n        <div class=\"\">\n          <label> Fecha de inicio</label>\n          <input type=\"date\" [(ngModel)]=\"formInfo.datein\" name=\"datein\" />\n          <br>\n        </div>\n        <div class=\"\">\n          <label> Fecha de finalización</label>\n          <input type=\"date\" [(ngModel)]=\"formInfo.dateout\" name=\"dateout\" />\n          <br>\n        </div>\n      </div>\n      <label> Descripción </label>\n      <input type=\"text\" [(ngModel)]=\"formInfo.description\" name=\"description\" />\n      <br>\n      <button (click)=\"newJob()\"> Crear oferta </button>\n      <a class=\"a\" [routerLink]=\"['/dashboard']\">Volver</a>\n    </form>\n    <p>{{message}}</p>\n  </div>\n</div>\n\n<div *ngIf=\"user && user.role==='doctor'\" class=\"unauthorized\">\n  <p>No tiene permiso para ver esta página. Por favor, póngase en contacto con el administrador del sistema.</p>\n  <a [routerLink]=\"['/dashboard']\">Volver</a>\n</div>\n"

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
        this.jobS = jobS;
        this.centerS = centerS;
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            title: "",
            center: "",
            datein: "",
            dateout: "",
            speciality: "",
            description: ""
        };
    }
    JobComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
        this.centerS.getCenters()
            .subscribe(function (centers) { return _this.centers = centers; });
    };
    JobComponent.prototype.newJob = function () {
        var _this = this;
        var _a = this.formInfo, title = _a.title, center = _a.center, datein = _a.datein, dateout = _a.dateout, speciality = _a.speciality, description = _a.description;
        console.log(this.formInfo);
        if (title != "" && center != "" && datein != "" && dateout != "" && speciality != "" && description) {
            this.jobS.createJob(title, center, datein, dateout, speciality, description)
                .map(function (job) { return console.log(job); })
                .subscribe(function (job) { return _this.router.navigate(['/dashboard']); });
        }
        else {
            this.message = "Todos los campos son obligatorios.";
        }
    };
    return JobComponent;
}());
JobComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
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
exports.push([module.i, "@media screen and (min-width: 480px) {\n  .container {\n    margin: 0 auto;\n    width: 50%;\n  }\n  .form {\n    margin: 10px auto;\n    padding: 20px;\n    width: 50%;\n  }\n  .form h2 {\n    text-align: center;\n  }\n  .form input {\n    background: rgba(204, 230, 255, 0.2);\n    width: 100%;\n    height: 20px;\n    margin: 10px 0;\n    font-size: 15px;\n  }\n  .form button {\n    height: 30px;\n    margin: 10px 0;\n    font-size: 1vw;\n  }\n  .back {\n    margin: 0 20px;\n  }\n  .unauthorized {\n    text-align: center;\n  }\n}\n\n@media screen and (max-width: 479px) {\n  .container {\n    margin: 110px auto;\n    width: 90%;\n  }\n  .form {\n    margin: 10px auto;\n    padding: 20px;\n    width: 80%;\n  }\n  .form h2 {\n    text-align: center;\n  }\n  .form input {\n    background: rgba(204, 230, 255, 0.2);\n    width: 100%;\n    height: 20px;\n    margin: 10px 0;\n    font-size: 15px;\n    border: 2px solid black;\n  }\n  .form button {\n    height: 30px;\n    margin: 10px 0;\n    font-size: 10px;\n    background: navy;\n    color: white;\n  }\n  .back {\n    margin: 0 20px;\n    font-size: 10px;\n  }\n  .unauthorized {\n    text-align: center;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!user\" class=\"container\">\n  <form class=\"form\">\n    <h2> Inicio de sesión </h2>\n    <label> DNI </label>\n    <input type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\"/>\n    <br>\n    <label> Contraseña </label>\n    <input type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\"/>\n\n    <button (click)=\"login()\"> Iniciar sesión </button>\n    <a class=\"back\" [routerLink]=\"['']\" control=!control>Volver</a>\n  </form>\n</div>\n\n<div *ngIf=\"message\" class=\"unauthorized\">\n  <p>{{message}}</p>\n  <a [routerLink]=\"['/dashboard']\">Back</a>\n</div>\n\n<div *ngIf=\"user\" class=\"unauthorized\">\n  <p>Ya estás conectado.</p>\n</div>\n"

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
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            username: "",
            password: ""
        };
    }
    LoginformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    };
    LoginformComponent.prototype.login = function () {
        var _this = this;
        var _a = this.formInfo, username = _a.username, password = _a.password;
        if (username != "" && password != "") {
            this.auth.login(username, password)
                .map(function (user) { return console.log(user); })
                .subscribe(function (user) { return _this.router.navigate(['/dashboard']); }, function (err) { return _this.message = err; });
        }
        else {
            this.message = "Debes indicar un DNI y una contraseña.";
        }
    };
    return LoginformComponent;
}());
LoginformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-loginform',
        template: __webpack_require__("../../../../../src/app/loginform/loginform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loginform/loginform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginformComponent);

var _a, _b;
//# sourceMappingURL=loginform.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-alert/new-alert.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 480px) {\n  .container {\n    margin: 0 auto;\n    padding: 20px;\n    width: 40%;\n  }\n  .container h2 {\n    text-align: center;\n  }\n  .container input {\n    background: rgba(204, 230, 255, 0.2);\n    width: 100%;\n    margin: 10px 0;\n  }\n  .container select {\n    width: 100%;\n    margin: 10px 0;\n    font-size: 15px;\n    height: 25px;\n    background: rgba(204, 230, 255, 0.2);\n  }\n  .select {\n    margin: 0 auto;\n    padding: 10px 0px;\n    width: 60%;\n  }\n  .button {\n    text-align: center;\n  }\n  .button button {\n    height: 30px;\n    margin: 10px 0;\n    font-size: 1vw;\n  }\n  a {\n    margin: 0 20px;\n  }\n}\n\n@media screen and (max-width: 479px) {\n  .container {\n    margin: 100px auto;\n    padding: 20px;\n    width: 80%;\n  }\n  .container h2 {\n    text-align: center;\n  }\n  .container input {\n    background: rgba(204, 230, 255, 0.2);\n    width: 100%;\n    margin: 10px 0;\n  }\n  .container select {\n    width: 100%;\n    margin: 10px 0;\n    font-size: 15px;\n    height: 25px;\n    background: rgba(204, 230, 255, 0.2);\n  }\n  .select {\n    margin: 0 auto;\n    padding: 10px 0px;\n    width: 60%;\n  }\n  .button {\n    text-align: center;\n  }\n  .button button {\n    height: 30px;\n    margin: 10px 0;\n    font-size: 15px;\n    background: navy;\n    color: white;\n  }\n  a {\n    margin: 0 20px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-alert/new-alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user && user.role=='doctor'\" class=\"container\">\n  <div class=\"select\">\n    <h2> Crear alerta </h2>\n    <label> Descripción: </label>\n    <input type=\"text\" [(ngModel)]=\"formInfo.title\" name=\"title\" />\n    <br>\n    <label>Especialidad:</label>\n    <select [(ngModel)]=\"formInfo.speciality\" name=\"speciality\">\n      <option value=\"Medicina familiar\">Médico de familia</option>\n      <option value=\"Pediatria\">Pediatría</option>\n    </select>\n    <label>Centro:</label>\n    <select [(ngModel)]=\"formInfo.center\" name=\"center\">\n      <option *ngFor=\"let center of centers\" value=\"{{center._id}}\">{{center.title}}</option>\n    </select>\n  </div>\n  <div class=\"button\">\n    <button (click)=\"newAlert()\"> Crear oferta </button>\n    <a [routerLink]=\"['/alerts']\">Volver</a>\n  </div>\n  <p>{{message}}</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/new-alert/new-alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alerts_service__ = __webpack_require__("../../../../../src/app/services/alerts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_centers_service__ = __webpack_require__("../../../../../src/app/services/centers.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewAlertComponent = (function () {
    function NewAlertComponent(alertS, centerS, auth, router) {
        this.alertS = alertS;
        this.centerS = centerS;
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            title: "",
            center: "",
            speciality: "",
        };
    }
    NewAlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
        this.centerS.getCenters()
            .subscribe(function (centers) { return _this.centers = centers; });
    };
    NewAlertComponent.prototype.newAlert = function () {
        var _this = this;
        var _a = this.formInfo, title = _a.title, center = _a.center, speciality = _a.speciality;
        var doctor = this.user._id;
        if (title != "" && center != "" && doctor != "") {
            this.alertS.newAlert(title, center, doctor, speciality)
                .map(function (alert) { return console.log(alert); })
                .subscribe(function (alert) { return _this.router.navigate(['/alerts']); });
        }
        else {
            this.message = "Todos los campos son obligatorios.";
        }
    };
    return NewAlertComponent;
}());
NewAlertComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-new-alert',
        template: __webpack_require__("../../../../../src/app/new-alert/new-alert.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-alert/new-alert.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_alerts_service__["a" /* AlertsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alerts_service__["a" /* AlertsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_centers_service__["a" /* CentersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_centers_service__["a" /* CentersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], NewAlertComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=new-alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alerts_service__ = __webpack_require__("../../../../../src/app/services/alerts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsComponent = (function () {
    function NotificationsComponent(alertServ, auth) {
        this.alertServ = alertServ;
        this.auth = auth;
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertServ.getNotifications().subscribe(function (notifications) {
            _this.notifications = notifications;
            console.log(_this.notifications);
        });
    };
    return NotificationsComponent;
}());
NotificationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-notifications',
        template: __webpack_require__("../../../../../src/app/notifications/notifications.component.html"),
        styles: [__webpack_require__("../../../../../src/app/notifications/notifications.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_alerts_service__["a" /* AlertsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alerts_service__["a" /* AlertsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], NotificationsComponent);

var _a, _b;
//# sourceMappingURL=notifications.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__alerts_alerts_component__ = __webpack_require__("../../../../../src/app/alerts/alerts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__new_alert_new_alert_component__ = __webpack_require__("../../../../../src/app/new-alert/new-alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__users_list_users_list_component__ = __webpack_require__("../../../../../src/app/users-list/users-list.component.ts");
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
    { path: 'alerts', component: __WEBPACK_IMPORTED_MODULE_10__alerts_alerts_component__["a" /* AlertsComponent */] },
    { path: 'newalert', component: __WEBPACK_IMPORTED_MODULE_11__new_alert_new_alert_component__["a" /* NewAlertComponent */] },
    { path: 'userslist', component: __WEBPACK_IMPORTED_MODULE_12__users_list_users_list_component__["a" /* UsersListComponent */] },
    { path: '**', redirectTo: 'home' }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/services/alerts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlertsService = (function () {
    function AlertsService(http) {
        this.http = http;
        this.BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL + '/api';
        this.options = { withCredentials: true };
    }
    AlertsService.prototype.handleError = function (e) {
        console.log("CREATE ERROR");
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    AlertsService.prototype.getAlerts = function () {
        return this.http.get(this.BASEURL + "/alerts", this.options)
            .map(function (res) { return res.json(); });
    };
    AlertsService.prototype.getNotifications = function () {
        return this.http.get(this.BASEURL + "/notifications", this.options)
            .map(function (res) { return res.json(); });
    };
    AlertsService.prototype.newAlert = function (title, center, doctor, speciality) {
        return this.http.post(this.BASEURL + "/alert/new", { title: title, center: center, doctor: doctor, speciality: speciality }, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    AlertsService.prototype.getUserAlerts = function () {
        return this.http.get(this.BASEURL + "/useralerts", this.options)
            .map(function (res) { return res.json(); });
    };
    AlertsService.prototype.deleteAlert = function (id) {
        return this.http.get(this.BASEURL + "/deletealert/" + id, this.options);
    };
    return AlertsService;
}());
AlertsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AlertsService);

var _a;
//# sourceMappingURL=alerts.service.js.map

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






var BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL + '/api';
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
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    AuthService.prototype.getUsers = function () {
        return this.http.get(BASEURL + "/userslist", this.options)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.signup = function (username, password, name, phone, email, collegiate, speciality, role) {
        var _this = this;
        return this.http.post(BASEURL + "/signup", { username: username, password: password, name: name, phone: phone, email: email, collegiate: collegiate, speciality: speciality, role: role }, this.options)
            .map(function (res) {
            _this.http.post(BASEURL + "/sayHello", { name: name, email: email }, _this.options);
            res.json();
        })
            .catch(this.handleError);
    };
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
            .subscribe(function () { return _this.router.navigate(['home']); });
    };
    AuthService.prototype.upload = function (name, phone, email, collegiate, speciality) {
        var _this = this;
        return this.http.put(BASEURL + "/update", { name: name, phone: phone, email: email, collegiate: collegiate, speciality: speciality }, this.options)
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
    AuthService.prototype.delete = function (id) {
        console.log("entro en el serivicio con id: " + id);
        return this.http.get(BASEURL + "/delete/" + id, this.options);
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
        this.BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL + '/api';
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
        this.BASEURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASEURL + '/api';
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
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
        this.BASEURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASEURL + '/api';
        this.options = { withCredentials: true };
    }
    InvitationService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    InvitationService.prototype.getList = function () {
        return this.http.get(this.BASEURL + "/invitations", this.options)
            .map(function (res) { return res.json(); });
    };
    InvitationService.prototype.new = function (role, username, collegiate, speciality, name, phone, email) {
        return this.http.post(this.BASEURL + "/ask", { role: role, username: username, collegiate: collegiate, speciality: speciality, name: name, phone: phone, email: email }, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    InvitationService.prototype.get = function (id) {
        return this.http.get(this.BASEURL + "/invitations/" + id, this.options)
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
        this.BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL + '/api';
        this.options = { withCredentials: true };
    }
    JobService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    JobService.prototype.createJob = function (title, center, datein, dateout, speciality, description) {
        return this.http.post(this.BASEURL + "/job/new", { title: title, center: center, datein: datein, dateout: dateout, speciality: speciality, description: description }, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    JobService.prototype.getJob = function (id) {
        return this.http.get(this.BASEURL + "/job/" + id, this.options)
            .map(function (res) { return res.json(); });
    };
    JobService.prototype.apply = function (id, user) {
        return this.http.put(this.BASEURL + "/job/apply/" + id + "/" + user, "", this.options)
            .map(function (res) { return res.json(); });
    };
    JobService.prototype.delete = function (id) {
        return this.http.get(this.BASEURL + "/deletejob/" + id, this.options);
    };
    JobService.prototype.acceptUser = function (id, user) {
        return this.http.get(this.BASEURL + "/acceptuser/" + id + "/" + user, this.options)
            .map(function (res) { return res.json(); });
    };
    JobService.prototype.deleteUser = function (id, user) {
        return this.http.put(this.BASEURL + "/deleteuser/" + id + "/" + user, "", this.options)
            .map(function (res) { return res.json(); });
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
exports.push([module.i, "@media screen and (min-width: 480px) {\n  .container {\n    margin: 0 auto;\n    width: 50%;\n  }\n  .form {\n    margin: 10px auto;\n    padding: 20px;\n    width: 60%;\n  }\n  .form h2 {\n    text-align: center;\n  }\n  .form input {\n    background: rgba(204, 230, 255, 0.2);\n    width: 100%;\n    margin: 10px 0;\n    height: 20px;\n    font-size: 15px;\n  }\n  .form button {\n    height: 30px;\n    margin: 10px 0;\n    font-size: 1vw;\n  }\n  .speciality {\n    font-size: 15px;\n    height: 25px;\n    width: 100%;\n    background: rgba(204, 230, 255, 0.2);\n  }\n  .select {\n    float: right;\n    margin: 10px;\n  }\n  .select label {\n    margin: 0 10px;\n    vertical-align: middle;\n  }\n  .select select {\n    float: right;\n    font-size: 15px;\n    height: 25px;\n    background: AliceBlue;\n  }\n}\n\n@media screen and (max-width: 479px) {\n  .container {\n    margin: 110px 25px;\n    width: 90%;\n  }\n  .form {\n    padding: 10px;\n    width: 80%;\n  }\n  .form h2 {\n    text-align: center;\n  }\n  .form input {\n    border: 2px solid black;\n    width: 100%;\n    margin: 3px 0;\n    height: 20px;\n    font-size: 15px;\n  }\n  .form button {\n    height: 30px;\n    margin: 10px 0;\n    font-size: 10px;\n    background: navy;\n    color: white;\n  }\n  .speciality {\n    font-size: 15px;\n    height: 25px;\n    width: 100%;\n    background: white;\n    border: 2px solid black;\n  }\n  .select {\n    float: right;\n    margin: 10px;\n  }\n  .select label {\n    margin: 0 10px;\n    vertical-align: middle;\n  }\n  .select select {\n    float: right;\n    font-size: 15px;\n    height: 25px;\n    background: AliceBlue;\n    border: 2px solid black;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"form\">\n    <h2> Añadir nuevo usuario </h2>\n    <div class=\"select\">\n      <label class=\"usertype\">Tipo de usuario:</label>\n      <select [(ngModel)]=\"formInfo.role\" name=\"role\">\n        <option value=\"doctor\">Doctor</option>\n        <option value=\"manager\">Coordinador</option>\n      </select>\n    </div><br><br><br>\n    <form *ngIf=\"user && user.role=='admin' \">\n      <label> DNI </label>\n      <input type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\" />\n      <br>\n      <label> Nº de colegiado </label>\n      <input type=\"text\" [(ngModel)]=\"formInfo.collegiate\" name=\"collegiate\" />\n      <br><br>\n      <label> Especialidad </label>\n      <select class=\"speciality\" [(ngModel)]=\"formInfo.speciality\" name=\"speciality\">\n        <option value=\"Medicina familiar\">Médico de familia</option>\n        <option value=\"Pediatria\">Pediatría</option>\n        <option value=\"Coordinador\">Coordinador</option>\n      </select>\n      <br><br>\n      <label> Contraseña </label>\n      <input type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\" />\n      <br>\n      <label> Nombre </label>\n      <input type=\"text\" [(ngModel)]=\"formInfo.name\" name=\"name\" />\n      <br>\n      <label> Teléfono </label>\n      <input type=\"number\" [(ngModel)]=\"formInfo.phone\" name=\"phone\" />\n      <br>\n      <button (click)=\"signup()\"> Dar de alta usuario </button>\n    </form>\n    <p>{{message}}</p>\n</div>\n</div>\n\n<div *ngIf=\"user && user.role!='admin'\" class=\"unauthorized\">\n  <p>No tiene permiso para ver esta página. Por favor, póngase en contacto con el administrador del sistema.</p>\n  <a [routerLink]=\"['/dashboard']\">Volver</a>\n</div>\n"

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
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            username: "",
            password: "",
            name: "",
            phone: "",
            email: "",
            collegiate: "",
            speciality: "",
            role: ""
        };
    }
    SignupformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    };
    SignupformComponent.prototype.signup = function () {
        var _this = this;
        var _a = this.formInfo, username = _a.username, password = _a.password, name = _a.name, phone = _a.phone, email = _a.email, collegiate = _a.collegiate, speciality = _a.speciality, role = _a.role;
        if (username != "" && password != "") {
            this.auth.signup(username, password, name, phone, email, collegiate, speciality, role)
                .map(function (user) { return console.log(user); })
                .subscribe(function (user) { return _this.router.navigate(['/dashboard']); });
        }
        else {
            this.message = "Todos los campos son obligatorios.";
        }
    };
    return SignupformComponent;
}());
SignupformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-signupform',
        template: __webpack_require__("../../../../../src/app/signupform/signupform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signupform/signupform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignupformComponent);

var _a, _b;
//# sourceMappingURL=signupform.component.js.map

/***/ }),

/***/ "../../../../../src/app/single-alert/single-alert.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 480px) {\n  h2 {\n    text-align: center;\n  }\n  .alert {\n    width: 40%;\n    margin: 10px auto;\n    padding: 5px 20px;\n  }\n  button {\n    background: blue;\n    color: white;\n    font-size: 1vw;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n  .alert button:hover {\n    background: navy;\n    color: white;\n    font-size: 1vw;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n  .new {\n    text-align: center;\n  }\n}\n\n@media screen and (max-width: 479px) {\n  h2 {\n    text-align: center;\n  }\n\n  button {\n    background: blue;\n    color: white;\n    font-size: 10px;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n  .alert button:hover {\n    background: navy;\n    color: white;\n    font-size: 10px;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/single-alert/single-alert.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{alert.title}}</h2>\n<p><b>Centro:</b> {{alert.center.title}}</p>\n<p><b>Especialidad:</b> {{alert.speciality}}</p>\n<button (click)=\"deleteAlert()\">Borrar alerta</button>\n"

/***/ }),

/***/ "../../../../../src/app/single-alert/single-alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleAlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SingleAlertComponent = (function () {
    function SingleAlertComponent() {
        this.onDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    SingleAlertComponent.prototype.ngOnInit = function () { };
    SingleAlertComponent.prototype.deleteAlert = function () {
        this.onDelete.emit(this.alert._id);
    };
    return SingleAlertComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], SingleAlertComponent.prototype, "alert", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], SingleAlertComponent.prototype, "onDelete", void 0);
SingleAlertComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-single-alert',
        template: __webpack_require__("../../../../../src/app/single-alert/single-alert.component.html"),
        styles: [__webpack_require__("../../../../../src/app/single-alert/single-alert.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SingleAlertComponent);

//# sourceMappingURL=single-alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 480px) {\n  .container {\n    margin: 0 auto;\n    width: 30%;\n  }\n  h2 {\n    text-align: center;\n  }\n  .form {\n    background: rgba(204, 230, 255, 0.2);\n    border: 2px solid black;\n    border-radius: 15px;\n    margin: 10px auto;\n    padding: 20px;\n    width: 60%;\n  }\n  .form h2 {\n    text-align: center;\n  }\n  .form input {\n    width: 100%;\n    height: 20px;\n    margin: 10px 0;\n    font-size: 15px;\n  }\n  button {\n    width: 120px;\n    height: 30px;\n    margin: 10px 0;\n    font-size: 1vw;\n  }\n  .red {\n    background: grey;\n    color: white;\n  }\n}\n\n@media screen and (max-width: 479px) {\n  .container {\n    margin: 150px auto;\n    width: 90%;\n  }\n  h2 {\n    text-align: center;\n  }\n  .form {\n    background: rgba(204, 230, 255, 0.2);\n    border: 2px solid black;\n    border-radius: 15px;\n    margin: 0px auto;\n    padding: 20px;\n    width: 80%;\n  }\n  .form h2 {\n    text-align: center;\n  }\n  .form input {\n    border: 2px solid black;\n    width: 100%;\n    height: 20px;\n    margin: 5px 0;\n    font-size: 10px;\n  }\n  button {\n    background: navy;\n    color: white;\n    width: 90px;\n    height: 30px;\n    margin: 10px 0;\n    font-size: 10px;\n  }\n  .red {\n    background: grey;\n    color: white;\n  }\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!user\">\n  <h2>No user logged in.</h2>\n  <a [routerLink]=\"['']\">Back</a>\n</div>\n\n<div *ngIf=\"user\">\n  <div class=\"container\" *ngIf=\"control\">\n    <h2> Cuenta </h2>\n    <div class=\"form\">\n      <form>\n        <label> DNI </label>\n        <input type=\"text\" value={{user.username}} name=\"username\" disabled/>\n        <br>\n        <label> Nº de colegiado </label>\n        <input type=\"text\" value={{user.collegiate}} name=\"collegiate\" disabled/>\n        <br>\n        <label> Especialidad </label>\n        <input type=\"text\" value={{user.speciality}} name=\"speciality\" disabled/>\n        <br>\n        <label> Nombre </label>\n        <input type=\"text\" value={{user.name}} name=\"name\" disabled/>\n        <br>\n        <label> Teléfono </label>\n        <input type=\"number\" value={{user.phone}} name=\"phone\" disabled/>\n        <label> Email </label>\n        <input type=\"email\" name=\"email\" value={{user.email}} disabled/>\n        <button *ngIf=\"control\" (click)=\"control=!control\">Update profile</button>\n      </form>\n    </div>\n\n  </div>\n\n  <div *ngIf=\"!control\" class=\"container\">\n    <h2> Edición de usuario </h2>\n    <div class=\"form\">\n      <form>\n        <label> Nombre de usuario </label>\n        <input class=\"red\" type=\"text\" value=\"{{user.username}}\" name=\"username\" disabled/>\n        <br>\n        <label> Nº de colegiado </label>\n        <input type=\"text\" [(ngModel)]=\"formInfo.collegiate\" name=\"collegiate\" />\n        <br>\n        <label> Especialidad </label>\n        <input type=\"text\" [(ngModel)]=\"formInfo.speciality\" name=\"speciality\" />\n        <br>\n        <label> Nombre </label>\n        <input type=\"text\" [(ngModel)]=\"formInfo.name\" name=\"name\" />\n        <br>\n        <label> Teléfono </label>\n        <input type=\"number\" [(ngModel)]=\"formInfo.phone\" name=\"phone\" />\n        <br>\n        <label> Correo electrónico </label>\n        <input type=\"email\" [(ngModel)]=\"formInfo.email\" name=\"email\" />\n        <br>\n        <button (click)=\"upload()\"> Actualizar </button>\n        <button (click)=\"control=!control\"> Volver </button>\n      </form>\n      <p>{{message}}</p>\n    </div>\n  </div>\n</div>\n"

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
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            name: "",
            phone: "",
            collegiate: "",
            speciality: "",
            email: ""
        };
        this.control = true;
    }
    UserprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) {
            _this.user = user;
            if (user) {
                _this.formInfo = {
                    name: user.name,
                    phone: user.phone,
                    collegiate: user.collegiate,
                    speciality: user.speciality,
                    email: user.email
                };
            }
        });
    };
    UserprofileComponent.prototype.upload = function () {
        var _this = this;
        var _a = this.formInfo, name = _a.name, phone = _a.phone, email = _a.email, collegiate = _a.collegiate, speciality = _a.speciality;
        this.control = !this.control;
        this.auth.upload(name, phone, email, collegiate, speciality)
            .map(function (user) { return console.log(user); })
            .subscribe(function (user) { return _this.router.navigate(['/user']); });
    };
    return UserprofileComponent;
}());
UserprofileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-userprofile',
        template: __webpack_require__("../../../../../src/app/userprofile/userprofile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userprofile/userprofile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserprofileComponent);

var _a, _b;
//# sourceMappingURL=userprofile.component.js.map

/***/ }),

/***/ "../../../../../src/app/users-list/users-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 480px) {\n  h2 {\n    text-align: center;\n  }\n  .user {\n    background: rgba(204, 230, 255, 0.2);\n    border-radius: 15px;\n    width: 30%;\n    border: 2px solid black;\n    margin: 10px auto;\n    padding: 5px 20px;\n  }\n  .user button {\n    background: blue;\n    color: white;\n    font-size: 1vw;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n  .user button:hover {\n    background: navy;\n    color: white;\n    font-size: 1vw;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n}\n\n@media screen and (max-width: 479px) {\n  h2 {\n    text-align: center;\n    font-size: 20px;\n  }\n\n  .main {\n    margin: 140px 20px;\n  }\n\n  .user {\n    background: rgba(204, 230, 255, 0.2);\n    border-radius: 15px;\n    width: 90%;\n    border: 2px solid black;\n    margin: 10px auto;\n    padding: 5px 20px;\n  }\n  .user button {\n    background: blue;\n    color: white;\n    font-size: 10px;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n  .user button:hover {\n    background: navy;\n    color: white;\n    font-size: 10px;\n    width: 100%;\n    height: 30px;\n    margin-bottom: 10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users-list/users-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user.role==='admin'\" class=\"main\">\n\n  <h2>Listado de usuarios</h2>\n\n  <div class=\"user\" *ngFor=\"let user of users\">\n    <p><b>Tipo de usuario:</b> {{user.role}}</p>\n    <p><b>DNI:</b> {{user.username}}</p>\n    <p><b>Nombre y apellidos:</b> {{user.name}}</p>\n    <p><b>Teléfono:</b> {{user.phone}}</p>\n    <p><b>Nº de colegiado:</b> {{user.collegiate}}</p>\n    <p><b>Especialidad:</b> {{user.speciality}}</p>\n    <button *ngIf=\"user.role!='admin'\"(click)=deleteUser(user._id)>Eliminar usuario</button>\n  </div>\n\n</div>\n\n<div *ngIf=\"user.role!='admin'\" class=\"unauthorized\">\n  <p>No tiene permiso para ver esta página. Por favor, póngase en contacto con el administrador del sistema.</p>\n  <a [routerLink]=\"['']\">Volver</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/users-list/users-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersListComponent = (function () {
    function UsersListComponent(auth) {
        this.auth = auth;
    }
    UsersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
        this.auth.getUsers().subscribe(function (u) { return _this.users = u; });
    };
    UsersListComponent.prototype.deleteUser = function (id) {
        console.log("entro en el componente con id: " + id);
        this.auth.delete(id).subscribe();
    };
    return UsersListComponent;
}());
UsersListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-users-list',
        template: __webpack_require__("../../../../../src/app/users-list/users-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users-list/users-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], UsersListComponent);

var _a;
//# sourceMappingURL=users-list.component.js.map

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
    production: true,
    BASEURL: ''
};
//local
// export const environment = {
//   production: false,
//   BASEURL: 'http://localhost:3000'
// };
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