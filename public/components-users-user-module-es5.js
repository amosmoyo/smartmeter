(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-users-user-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <header class=\"border border-success\" style=\"border-radius: 10px;\">\n   <div  class=\"p-2\">\n     <div class=\"text-center\">\n      <h3 style=\"color: green;\">smArtUI</h3>\n      <p>User Details</p>\n     </div>\n     <div class=\"row mb-2 justify-content-between\">\n      <div class=\"col-sm-5\"><button mat-raised-button style=\"color:#28a745;\">Created~ {{user?.createdAt | date: 'shortDate' }}</button></div>\n      <div class=\"col-sm-5\"><button mat-raised-button style=\"color: #28a745;\">ID~ {{user?._id}}</button></div>\n    </div>\n     <div class=\"row mb-2 justify-content-between\" *ngIf=\"user\">\n      <div class=\"col-sm-5\"><i class=\"fa fa-envelope-o\"></i>~ {{user?.email}}</div>\n      <div class=\"col-sm-5\"><i class=\"fa fa-user\"></i>~ {{user?.userName}}</div>\n    </div>\n   </div>\n  </header>\n  <br>\n  <br>\n  <main>\n    <h2 class=\"text-center \"><span class=\"bg-success p-2 text-light border rounded\">My SmartMeter</span></h2>\n    <div>\n      <h4 class=\"mt-2 mb-0\"><span class=\"bg-info text-light border px-2\"  style=\"border-radius: 10px;\">Electricity</span></h4>\n      <div class=\"border border-info\" style=\"border-radius: 10px;\">\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos soluta maiores aliquam nostrum distinctio fuga velit quaerat, error ipsum enim, qui voluptates nemo esse. Quaerat maxime similique harum rem officiis quibusdam suscipit iste accusantium ducimus excepturi, repellendus voluptatem quidem natus, nobis iure expedita asperiores cum, eaque temporibus tenetur vero corrupti.</div>\n    </div>\n    <div>\n      <h4 class=\"mt-2 mb-0\"><span class=\"bg-danger text-light border px-2\"  style=\"border-radius: 10px;\">Gas</span></h4>\n      <div class=\"border border-danger\" style=\"border-radius: 10px;\">\n        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, officia. Officia nemo molestias excepturi eaque! Ut, necessitatibus consequatur eveniet debitis quisquam adipisci culpa incidunt eos eum rem possimus non quod architecto voluptate nulla animi provident sequi natus dolorum tempora voluptatibus in labore enim explicabo! Repellat voluptas corrupti adipisci est quod.\n      </div>\n    </div>\n    <div>\n      <h4 class=\"mt-2 mb-0\"><span class=\"bg-warning text-light border px-2\"  style=\"border-radius: 10px;\">Gas</span></h4>\n      <div class=\"border border-warning\" style=\"border-radius: 10px;\">\n        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni, molestias consectetur ipsam delectus ut distinctio doloremque laudantium nulla animi cumque? Consequuntur amet, impedit quaerat placeat fugit aliquid suscipit doloribus laborum est maxime dolores facilis optio ipsam quo nam? Maxime quod magni est. Blanditiis quae culpa quam quos tempore fugiat?\n      </div>\n    </div>\n  </main>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/users/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/users/login/login.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-3\">\n  <div class=\"text-center animate__animated animate__bounceInRight mb-3\">\n    <span class=\"d-block\"><i class=\"fa fa-user\"></i></span>\n    <h1 style=\"color: green;\">smArtUI</h1>\n    <p class=\"text-success mb-2 font-weight-bold\">User's Point</p>\n    <p class=\"lead mb-2\" *ngIf=\"!loading\">Please Login Here...</p>\n    <p class=\"lead mb-2\" *ngIf=\"loading\">Loading...</p>\n  </div>\n  <br>\n  <mat-spinner *ngIf=\"loading\" class=\"amos\"></mat-spinner>\n  <div class=\"row justify-content-center\" *ngIf=\"!loading\">\n    <div class=\"col-md-8\">\n      <div>\n        <form #login=\"ngForm\" [matchValue]=\"['password','confirmPassword']\" (ngSubmit)=\"save(login)\">\n\n          <div class=\"row justify-content-around\">\n            <div class=\"col-md-5\">\n              <mat-form-field class=\"input\">\n                <input matInput type=\"email\" placeholder=\"email(required)\" name=\"email\" ngModel #email=\"ngModel\"\n                  required email class=\"p-0 m-0\">\n              </mat-form-field>\n              <mat-error *ngIf=\"email.invalid && (email.touched || email.dirty)\" class=\"mt-0\">\n                <em *ngIf=\"email.errors.required\">email is required</em>\n                <em *ngIf=\"email.errors.email\">enter a valid email</em>\n              </mat-error>\n            </div>\n            <div class=\"col-md-5\">\n              <mat-form-field class=\"input\">\n                <input matInput type=\"password\" placeholder=\"password(required)\" name=\"password\" ngModel\n                  #password=\"ngModel\" required minlength=\"4\" class=\"p-0 m-0\">\n              </mat-form-field>\n              <mat-error *ngIf=\"password.invalid && (password.touched || password.dirty)\" class=\"mt-0\">\n                <em *ngIf=\"password.errors.required\">password is required</em>\n                <em *ngIf=\"password.errors.minlength\">password is too short</em>\n              </mat-error>\n            </div>\n          </div>\n\n          <div>\n            <div style=\"width: 80%;\" class=\"mx-auto\">\n              <button mat-raised-button\n                style=\"width: 100%; display: block; background-color: #28a745; color: #ffffff\" [disabled]=\"login.invalid\">Save</button>\n              <button mat-raised-button\n                style=\"width: 100%; display: block; background-color: #333534; color: #ffffff; margin-top: 10px;\">cancel</button>\n                <p class=\"mt-2 text-success\">DON'T HAVE AN ACCOUNT? PLAESE <em class=\"text-danger\" [routerLink]=\"['/users/signup']\" style=\"cursor: pointer;\">REGISTER</em></p>\n            </div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/users/signup/signup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/users/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n  <div class=\"text-center animate__animated animate__bounceInRight mb-2\">\n    <span class=\"d-block\"><i class=\"fa fa-user\"></i></span>\n    <h1 style=\"color: green;\">smArtUI</h1>\n    <p class=\"text-success mb-2 font-weight-bold\">User's Point</p>\n    <p class=\"lead mb-2\" *ngIf=\"!loading\">Please Register Here...</p>\n    <p class=\"lead mb-2\" *ngIf=\"loading\">Loading...</p>\n  </div>\n  <br>\n  <mat-spinner *ngIf=\"loading\" class=\"amos\"></mat-spinner>\n  <div class=\"row justify-content-center\" *ngIf=\"!loading\">\n    <div class=\"col-md-8\">\n      <div>\n        <form #signup=\"ngForm\" [matchValue]=\"['password','confirmPassword']\" (ngSubmit)=\"save(signup)\">\n          <div class=\"row justify-content-around\">\n            <div class=\"col-md-5\">\n              <mat-form-field class=\"input mb-0\">\n                <input matInput type=\"text\" placeholder=\"firstname(required)\" name=\"fname\" ngModel #fname=\"ngModel\"\n                  required class=\"p-0 m-0\">\n              </mat-form-field>\n              <mat-error *ngIf=\"fname.invalid && (fname.touched || fname.dirty)\" class=\"mt-0\">\n                <em *ngIf=\"fname.errors.required\" class=\"mt-0\">firstname is required</em>\n              </mat-error>\n            </div>\n            <div class=\"col-md-5 mb-0\">\n              <mat-form-field class=\"input\">\n                <input matInput type=\"text\" placeholder=\"lastName(required)\" name=\"lname\" ngModel #lname=\"ngModel\"\n                  required class=\"p-0 m-0\">\n              </mat-form-field>\n              <mat-error *ngIf=\"lname.invalid && (lname.touched || lname.dirty)\" class=\"mt-0\">\n                <em *ngIf=\"lname.errors.required\" class=\"mt-0\">lastname is required</em>\n              </mat-error>\n            </div>\n          </div>\n\n          <div class=\"row justify-content-around\">\n            <div class=\"col-md-5\">\n              <mat-form-field class=\"input\">\n                <input matInput type=\"text\" placeholder=\"username(required)\" name=\"userName\" ngModel #username=\"ngModel\"\n                  required class=\"p-0 m-0\">\n                <mat-error *ngIf=\"username.invalid && (username.touched || username.dirty)\" class=\"mt-0\">\n                  <em *ngIf=\"username.errors.required\">username is required</em>\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class=\"col-md-5\">\n              <mat-form-field class=\"input\">\n                <input matInput type=\"email\" placeholder=\"email(required)\" name=\"email\" ngModel #email=\"ngModel\"\n                  required email class=\"p-0 m-0\">\n              </mat-form-field>\n              <mat-error *ngIf=\"email.invalid && (email.touched || email.dirty)\" class=\"mt-0\">\n                <em *ngIf=\"email.errors.required\">email is required</em>\n                <em *ngIf=\"email.errors.email\">enter a valid email</em>\n              </mat-error>\n            </div>\n          </div>\n\n          <div class=\"row justify-content-around\">\n            <div class=\"col-md-5\">\n              <mat-form-field class=\"input\">\n                <input matInput type=\"password\" placeholder=\"password(required)\" name=\"password\" ngModel\n                  #password=\"ngModel\" required minlength=\"4\" class=\"p-0 m-0\">\n              </mat-form-field>\n              <mat-error *ngIf=\"password.invalid && (password.touched || password.dirty)\" class=\"mt-0\">\n                <em *ngIf=\"password.errors.required\">password is required</em>\n                <em *ngIf=\"password.errors.minlength\">password is too short</em>\n              </mat-error>\n            </div>\n            <div class=\"col-md-5\">\n              <mat-form-field class=\"input\">\n                <input matInput type=\"password\" placeholder=\"confirmpass(required)\" name=\"confirmPassword\" ngModel\n                  #confirmPassword=\"ngModel\" required class=\"m-0 p-0\">\n                <mat-error *ngIf=\"confirmPassword.invalid && (confirmPassword.touched || confirmPassword.dirty)\">\n                  <em *ngIf=\"confirmPassword.errors.required\">confirm password required</em>\n                  <em *ngIf=\"confirmPassword.errors.matchValueError\">password does not match</em>\n                </mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n\n          <div>\n            <div style=\"width: 80%;\" class=\"mx-auto\">\n              <button mat-raised-button style=\"width: 100%; display: block; background-color: #28a745; color: #ffffff\"\n                [disabled]=\"signup.invalid\">Save</button>\n              <button mat-raised-button\n                style=\"width: 100%; display: block; background-color: #333534; color: #ffffff; margin-top: 10px;\">cancel</button>\n                <p class=\"mt-2 text-success\">HAVE AN ACCOUNT? PLAESE <em class=\"text-danger\" [routerLink]=\"['/users/login']\" style=\"cursor: pointer;\">LOGIN</em></p>\n            </div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(auth) {
        this.auth = auth;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.profile().subscribe({
            next: function (data) {
                console.log(data);
                _this.user = data;
            },
            error: function (err) {
                console.log(err);
            }
        });
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/users/login/login.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/users/login/login.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\r\n  width: 100%;\r\n}\r\n\r\n.fa {\r\n  font-size: 1.4em;\r\n  color: #450f5a;\r\n}\r\n\r\n.amos {\r\n  position: relative;\r\n  margin-left: 50%;\r\n  margin-right: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mYSB7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICBjb2xvcjogIzQ1MGY1YTtcclxufVxyXG5cclxuLmFtb3Mge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1yaWdodDogNTAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/users/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/users/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth) {
        this.auth = auth;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authStatus = this.auth.getAuthStatus().subscribe({
            next: function (data) {
                _this.loading = data;
            }
        });
    };
    LoginComponent.prototype.save = function (form) {
        if (form.invalid) {
            return;
        }
        this.loading = true;
        console.log(form.value);
        this.auth.login(form.value);
        form.resetForm();
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.authStatus.unsubscribe();
    };
    LoginComponent.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/users/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/users/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/users/match-value.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/users/match-value.directive.ts ***!
  \***********************************************************/
/*! exports provided: MatchValueDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchValueDirective", function() { return MatchValueDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _password_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password.validators */ "./src/app/components/users/password.validators.ts");




var MatchValueDirective = /** @class */ (function () {
    function MatchValueDirective() {
        this.matchValueFields = [];
    }
    MatchValueDirective_1 = MatchValueDirective;
    MatchValueDirective.prototype.validate = function (formGroup) {
        return Object(_password_validators__WEBPACK_IMPORTED_MODULE_3__["MatchValue"])(this.matchValueFields[0], this.matchValueFields[1])(formGroup);
    };
    var MatchValueDirective_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('matchValue'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MatchValueDirective.prototype, "matchValueFields", void 0);
    MatchValueDirective = MatchValueDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            // tslint:disable-next-line: directive-selector
            selector: '[matchValue]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: MatchValueDirective_1, multi: true }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MatchValueDirective);
    return MatchValueDirective;
}());

/*
import { Directive, Input } from '@angular/core';
import {
  Validator,
  ValidationErrors,
  FormGroup,
  NG_VALIDATORS
} from '@angular/forms';
import { MatchValue } from './match-value.validator';
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: "[matchValue]",
  providers: [
    { provide: NG_VALIDATORS, useExisting: MatchValueDirective, multi: true }
  ]
})
export class MatchValueDirective implements Validator {
  @Input("matchValue") matchValueFields: string[] = [];
  constructor() {}
  validate(formGroup: FormGroup): ValidationErrors {
    return MatchValue(this.matchValueFields[0], this.matchValueFields[1])(
      formGroup
    );
  }
}
*/


/***/ }),

/***/ "./src/app/components/users/password.validators.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/users/password.validators.ts ***!
  \*********************************************************/
/*! exports provided: MatchValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchValue", function() { return MatchValue; });
// custom validator to check that two fields match
// tslint:disable-next-line: no-unused-expression
var MatchValue = function (firstControlName, secondControlName) {
    return function (formGroup) {
        var firstControl = formGroup.controls[firstControlName];
        var secondControl = formGroup.controls[secondControlName];
        // return null if controls haven't initialised yet
        if (!firstControl ||
            !secondControl ||
            !firstControl.value ||
            !secondControl.value) {
            return null;
        }
        if (secondControl.errors && !secondControl.errors.matchValueError) {
            return null;
        }
        if (firstControl.value !== secondControl.value) {
            secondControl.setErrors({ matchValueError: true });
        }
        else {
            secondControl.setErrors(null);
        }
    };
};


/***/ }),

/***/ "./src/app/components/users/signup/signup.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/users/signup/signup.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\r\n  width: 100%;\r\n}\r\n\r\n.error input {\r\n  background-color: rgb(241, 168, 168);\r\n}\r\n\r\n.fa {\r\n  font-size: 1.4em;\r\n  color: #450f5a;\r\n}\r\n\r\n.amos {\r\n  position: relative;\r\n  margin-left: 50%;\r\n  margin-right: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXJyb3IgaW5wdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDE2OCwgMTY4KTtcclxufVxyXG5cclxuLmZhIHtcclxuICBmb250LXNpemU6IDEuNGVtO1xyXG4gIGNvbG9yOiAjNDUwZjVhO1xyXG59XHJcblxyXG4uYW1vcyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/users/signup/signup.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/users/signup/signup.component.ts ***!
  \*************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



var SignupComponent = /** @class */ (function () {
    function SignupComponent(auth) {
        this.auth = auth;
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authStatus = this.auth.getAuthStatus().subscribe({
            next: function (data) {
                _this.loading = data;
            }
        });
    };
    SignupComponent.prototype.save = function (form) {
        if (form.invalid) {
            return;
        }
        this.loading = true;
        console.log(form.value);
        var user = {
            fname: form.value.fname,
            lname: form.value.lname,
            userName: form.value.userName,
            email: form.value.email,
            password: form.value.password
        };
        this.auth.signup(user);
        form.resetForm();
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        this.authStatus.unsubscribe();
    };
    SignupComponent.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/users/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/users/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/users/user.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/users/user.module.ts ***!
  \*************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/users/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/components/users/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material/material.module */ "./src/app/components/material/material.module.ts");
/* harmony import */ var _match_value_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./match-value.directive */ "./src/app/components/users/match-value.directive.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");










var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"] }
];
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _match_value_directive__WEBPACK_IMPORTED_MODULE_8__["MatchValueDirective"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_7__["Material"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-users-user-module-es5.js.map