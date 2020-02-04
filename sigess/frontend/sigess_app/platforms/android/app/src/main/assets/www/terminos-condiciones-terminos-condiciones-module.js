(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terminos-condiciones-terminos-condiciones-module"],{

/***/ "./src/app/terminos-condiciones/terminos-condiciones.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/terminos-condiciones/terminos-condiciones.module.ts ***!
  \*********************************************************************/
/*! exports provided: TerminosCondicionesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminosCondicionesPageModule", function() { return TerminosCondicionesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _terminos_condiciones_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./terminos-condiciones.page */ "./src/app/terminos-condiciones/terminos-condiciones.page.ts");
/* harmony import */ var _modulos_com_comun_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modulos/com/comun.module */ "./src/app/modulos/com/comun.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TerminosCondicionesPageModule = /** @class */ (function () {
    function TerminosCondicionesPageModule() {
    }
    TerminosCondicionesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _modulos_com_comun_module__WEBPACK_IMPORTED_MODULE_6__["ComunModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _terminos_condiciones_page__WEBPACK_IMPORTED_MODULE_5__["TerminosCondicionesPage"]
                    }
                ])
            ],
            exports: [_modulos_com_comun_module__WEBPACK_IMPORTED_MODULE_6__["ComunModule"]],
            declarations: [_terminos_condiciones_page__WEBPACK_IMPORTED_MODULE_5__["TerminosCondicionesPage"]]
        })
    ], TerminosCondicionesPageModule);
    return TerminosCondicionesPageModule;
}());



/***/ }),

/***/ "./src/app/terminos-condiciones/terminos-condiciones.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/terminos-condiciones/terminos-condiciones.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      SIGESS - Política de privacidad de datos\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item button>\n    politica\n  </ion-item>\n</ion-content>"

/***/ }),

/***/ "./src/app/terminos-condiciones/terminos-condiciones.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/terminos-condiciones/terminos-condiciones.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1pbm9zLWNvbmRpY2lvbmVzL3Rlcm1pbm9zLWNvbmRpY2lvbmVzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/terminos-condiciones/terminos-condiciones.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/terminos-condiciones/terminos-condiciones.page.ts ***!
  \*******************************************************************/
/*! exports provided: TerminosCondicionesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminosCondicionesPage", function() { return TerminosCondicionesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/market/ngx */ "./node_modules/@ionic-native/market/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TerminosCondicionesPage = /** @class */ (function () {
    function TerminosCondicionesPage() {
    }
    TerminosCondicionesPage.prototype.navegar = function (url) {
    };
    TerminosCondicionesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-terminosCondiciones',
            template: __webpack_require__(/*! ./terminos-condiciones.page.html */ "./src/app/terminos-condiciones/terminos-condiciones.page.html"),
            providers: [_ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_1__["Market"]],
            styles: [__webpack_require__(/*! ./terminos-condiciones.page.scss */ "./src/app/terminos-condiciones/terminos-condiciones.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TerminosCondicionesPage);
    return TerminosCondicionesPage;
}());



/***/ })

}]);
//# sourceMappingURL=terminos-condiciones-terminos-condiciones-module.js.map