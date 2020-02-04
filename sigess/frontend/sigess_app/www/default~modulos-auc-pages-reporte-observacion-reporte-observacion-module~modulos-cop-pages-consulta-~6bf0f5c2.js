(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modulos-auc-pages-reporte-observacion-reporte-observacion-module~modulos-cop-pages-consulta-~6bf0f5c2"],{

/***/ "./src/app/modulos/com/components/area-selector/area-selector.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modulos/com/components/area-selector/area-selector.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item (click)=\"openModal()\">\n  <ion-label position=\"stacked\">Ubicación*</ion-label>\n  <p style=\"width: 100%;margin-top: 16px;margin-bottom: 16px;\"  *ngIf=\"areasCargadas == true\">{{value?.nombre}}</p>\n\n  <div *ngIf=\"loading == true\">\n    <ion-spinner slot=\"end\" name=\"dots\" color=\"primary\"></ion-spinner>\n  </div>\n  <div *ngIf=\"areasCargadas == false\">\n    <p style=\"color:#888;\">\n      No fue posible cargar el listado\n      <a *ngIf=\"areasCargadas == false\" (click)=\"cargarAreas()\">Reintentar</a>\n    </p>\n  </div>\n</ion-item>\n\n<div id=\"modalNode\" class=\"modal\" [style.display]=\"visibleModal == true ? 'block':'none'\">\n  <div class=\"modal-header radio-top-bordes\">\n    <ion-searchbar class=\"radio-top-bordes\" placeholder=\"Buscar ubicación\" debounce=\"500\" (ionChange)=\"filtrar($event)\"></ion-searchbar>\n  </div>\n  <div class=\"modal-container\">\n    <sm-tree *ngIf=\"areasFiltradas == null\" [nodes]=\"areas\" field=\"areaList\" label=\"nombre\" [single]=\"true\"></sm-tree>\n    <sm-tree *ngIf=\"areasFiltradas != null\" [nodes]=\"areasFiltradas\" field=\"areaList\" label=\"nombre\" [single]=\"true\"></sm-tree>\n  </div>\n  <div class=\"modal-footer radio-bottom-bordes\">\n    <ion-button slot=\"end\" fill=\"clear\" (click)=\"aceptar()\">\n      Aceptar\n    </ion-button>\n    <ion-button slot=\"end\" fill=\"clear\" (click)=\"cancelar()\" color=\"medium\">\n      Cancelar\n    </ion-button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modulos/com/components/area-selector/area-selector.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modulos/com/components/area-selector/area-selector.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\n  display: block;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: #00000077;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1000; }\n\n.modal-container {\n  position: absolute;\n  width: 90%;\n  height: calc(90% - 102px);\n  background-color: #fff;\n  overflow: auto;\n  left: 5%;\n  top: calc(5% + 56px);\n  margin: auto;\n  padding: 10px; }\n\n.modal-header {\n  background-color: #fff;\n  height: 56px;\n  width: 90%;\n  position: absolute;\n  top: 5%;\n  left: 5%;\n  z-index: 100; }\n\n.radio-top-bordes {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px; }\n\n.radio-bottom-bordes {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px; }\n\n.modal-footer {\n  background-color: #fff;\n  height: 46px;\n  width: 90%;\n  position: absolute;\n  bottom: 0px;\n  z-index: 100;\n  border-top: solid thin #ccc;\n  bottom: 5%;\n  left: 5%; }\n\n.modal-footer ion-button {\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9EQVRBL2Rldi9zaWdlc3MvZnJvbnRlbmQvc2lnZXNzX2FwcC9zcmMvYXBwL21vZHVsb3MvY29tL2NvbXBvbmVudHMvYXJlYS1zZWxlY3Rvci9hcmVhLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU07RUFDTixTQUFTO0VBQ1QsYUFBYSxFQUFBOztBQUdqQjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsUUFBUTtFQUNSLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUdqQjtFQUNJLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVksRUFBQTs7QUFHaEI7RUFDSSw0QkFBNEI7RUFDNUIsNkJBQTZCLEVBQUE7O0FBRWpDO0VBQ0ksK0JBQStCO0VBQy9CLGdDQUFnQyxFQUFBOztBQUdwQztFQUNJLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUVaLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1YsUUFBUSxFQUFBOztBQUVaO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxvcy9jb20vY29tcG9uZW50cy9hcmVhLXNlbGVjdG9yL2FyZWEtc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWx7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNzc7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHotaW5kZXg6IDEwMDA7XG59XG5cbi5tb2RhbC1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiBjYWxjKDkwJSAtIDEwMnB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGxlZnQ6IDUlO1xuICAgIHRvcDogY2FsYyg1JSArIDU2cHgpO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubW9kYWwtaGVhZGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNSU7XG4gICAgbGVmdDogNSU7XG4gICAgei1pbmRleDogMTAwO1xufVxuXG4ucmFkaW8tdG9wLWJvcmRlc3tcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuLnJhZGlvLWJvdHRvbS1ib3JkZXN7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuLm1vZGFsLWZvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGhlaWdodDogNDZweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCA4cHggI2FhYTtcbiAgICBib3JkZXItdG9wOiBzb2xpZCB0aGluICNjY2M7XG4gICAgYm90dG9tOiA1JTtcbiAgICBsZWZ0OiA1JTtcbn1cbi5tb2RhbC1mb290ZXIgaW9uLWJ1dHRvbntcbiAgICBmbG9hdDogcmlnaHQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/modulos/com/components/area-selector/area-selector.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modulos/com/components/area-selector/area-selector.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AreaSelectorComponent, AreaSelectorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaSelectorComponent", function() { return AreaSelectorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaSelectorModule", function() { return AreaSelectorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _emp_entities_area__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../emp/entities/area */ "./src/app/modulos/emp/entities/area.ts");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/util */ "./src/app/modulos/com/utils/util.ts");
/* harmony import */ var _services_offline_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/offline.service */ "./src/app/modulos/com/services/offline.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tree_tree_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tree/tree.component */ "./src/app/modulos/com/components/tree/tree.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AreaSelectorComponent = /** @class */ (function () {
    function AreaSelectorComponent(offlineService) {
        this.offlineService = offlineService;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.propagateChange = function (_) { };
    }
    AreaSelectorComponent_1 = AreaSelectorComponent;
    AreaSelectorComponent.prototype.ngOnInit = function () {
        var modal = document.getElementById("modalNode");
        document.getElementsByTagName(this.appendTo)[0].appendChild(modal);
        this.cargarAreas();
    };
    Object.defineProperty(AreaSelectorComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.propagateChange(this._value);
            }
        },
        enumerable: true,
        configurable: true
    });
    AreaSelectorComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    AreaSelectorComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    AreaSelectorComponent.prototype.registerOnTouched = function () { };
    /* ********************************************* */
    AreaSelectorComponent.prototype.cargarAreas = function () {
        var _this = this;
        this.loading = true;
        this.areasCargadas = null;
        this.offlineService.queryArea()
            .then(function (resp) {
            _this.areas = resp['data'];
            _this.loading = false;
            _this.areasCargadas = true;
        })
            .catch(function (err) {
            _this.loading = false;
            _this.areasCargadas = false;
        });
    };
    AreaSelectorComponent.prototype.openModal = function () {
        if (this.disabled == true || this.areasCargadas == false || this.loading == true) {
            return;
        }
        this.areasFiltradas = null;
        this.visibleModal = true;
        if (this.value != null) {
            this.cargarValor(this.areas, this.value);
        }
    };
    AreaSelectorComponent.prototype.cargarValor = function (areas, areaSelect) {
        var _this = this;
        areas.forEach(function (area) {
            area['selected'] = (area.id == _this.value.id);
            if (area.areaList != null) {
                _this.cargarValor(area.areaList, areaSelect);
            }
        });
    };
    AreaSelectorComponent.prototype.cancelar = function () {
        this.visibleModal = false;
    };
    AreaSelectorComponent.prototype.aceptar = function () {
        var seleccion = [];
        if (this.areasFiltradas != null) {
            _utils_util__WEBPACK_IMPORTED_MODULE_3__["Util"].getSeleccionArbol('areaList', this.areasFiltradas, seleccion, ['nombre']);
        }
        else {
            _utils_util__WEBPACK_IMPORTED_MODULE_3__["Util"].getSeleccionArbol('areaList', this.areas, seleccion, ['nombre']);
        }
        this.value = seleccion[0];
        this.visibleModal = false;
        this.valueChange.emit(this.value);
    };
    AreaSelectorComponent.prototype.filtrar = function (event) {
        var valor = event.detail.value;
        if (valor != null && valor != "") {
            this.areasFiltradas = [];
            this.busquedaRecursiva(this.areas, valor, this.areasFiltradas);
        }
        else {
            this.areasFiltradas = null;
        }
    };
    AreaSelectorComponent.prototype.busquedaRecursiva = function (arbol, criterio, listado) {
        var _this = this;
        arbol.forEach(function (area) {
            if (area.nombre.toLowerCase().includes(criterio.toLowerCase())) {
                listado.push(area);
            }
            if (area.areaList != null) {
                _this.busquedaRecursiva(area.areaList, criterio, listado);
            }
        });
    };
    var AreaSelectorComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("ngModel"),
        __metadata("design:type", _emp_entities_area__WEBPACK_IMPORTED_MODULE_2__["Area"])
    ], AreaSelectorComponent.prototype, "_value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("ngModelChange"),
        __metadata("design:type", Object)
    ], AreaSelectorComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("appendTo"),
        __metadata("design:type", String)
    ], AreaSelectorComponent.prototype, "appendTo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("disabled"),
        __metadata("design:type", Boolean)
    ], AreaSelectorComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("areas"),
        __metadata("design:type", Array)
    ], AreaSelectorComponent.prototype, "areas", void 0);
    AreaSelectorComponent = AreaSelectorComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-areaSelector',
            template: __webpack_require__(/*! ./area-selector.component.html */ "./src/app/modulos/com/components/area-selector/area-selector.component.html"),
            providers: [
                _services_offline_service__WEBPACK_IMPORTED_MODULE_4__["OfflineService"],
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return AreaSelectorComponent_1; }),
                    multi: true
                }
            ],
            styles: [__webpack_require__(/*! ./area-selector.component.scss */ "./src/app/modulos/com/components/area-selector/area-selector.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_offline_service__WEBPACK_IMPORTED_MODULE_4__["OfflineService"]])
    ], AreaSelectorComponent);
    return AreaSelectorComponent;
}());

var AreaSelectorModule = /** @class */ (function () {
    function AreaSelectorModule() {
    }
    AreaSelectorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _tree_tree_component__WEBPACK_IMPORTED_MODULE_6__["TreeModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"]],
            exports: [AreaSelectorComponent],
            declarations: [AreaSelectorComponent]
        })
    ], AreaSelectorModule);
    return AreaSelectorModule;
}());



/***/ }),

/***/ "./src/app/modulos/com/components/tree/tree.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modulos/com/components/tree/tree.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template ngFor let-node [ngForOf]=\"nodes\" let-i=\"index\">\n  <ul>\n    <div style=\"display: flex;flex-direction: row;border-bottom: solid thin #ccc;align-items: center;\">\n      <div (click)=\"toggle(node)\" *ngIf=\"node[field] && node[field].length > 0\" [ngClass]=\"node['expanded'] ? 'li-icon li-expanded':'li-icon'\"></div>\n      <li (click)=\"toggle(node)\">{{node[label]}}</li>\n      <div [ngClass]=\"node['selected'] ? 'li-selectable li-selected' : 'li-selectable'\" (click)=\"toggleSelect(node)\">\n        <div [ngClass]=\"node['childTouched'] ? 'child-touch' : 'child-untouch'\" class=\"\"></div>\n      </div>\n    </div>\n    <sm-tree *ngIf=\"node[field]\" [nodes]=\"node[field]\" [field]=\"field\" [label]=\"label\" [ngClass]=\"node['expanded'] ? 'ul-expanded ul-init' : 'ul-unexpanded ul-init'\"\n      [parent]=\"node\" [single]=\"single\" (onClear)=\"clearSelect()\" [isRoot]=\"false\"></sm-tree>\n  </ul>\n</ng-template>"

/***/ }),

/***/ "./src/app/modulos/com/components/tree/tree.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modulos/com/components/tree/tree.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ul-init {\n  height: inherit;\n  display: block; }\n\nsm-tree {\n  width: 100%; }\n\nul {\n  padding-left: 15px;\n  list-style-type: none;\n  font-size: 13px; }\n\n.li-icon {\n  background: url(/assets/images/arrow-right.svg) no-repeat;\n  background-position-y: 17px;\n  width: 20px;\n  height: 50px;\n  background-position: center;\n  background-size: 8px;\n  margin-right: 5px; }\n\n.li-expanded {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.li-selectable {\n  width: 35px;\n  height: 30px;\n  border-radius: 50%;\n  border: solid thin #ccc;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.li-selected {\n  background: url(/assets/images/check.svg) no-repeat;\n  background-size: 10px;\n  background-position: center; }\n\nli {\n  cursor: pointer;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 100%; }\n\n.ul-unexpanded {\n  height: 0px;\n  display: none; }\n\n.child-touch {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #555;\n  display: block; }\n\n.child-untouch {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9EQVRBL2Rldi9zaWdlc3MvZnJvbnRlbmQvc2lnZXNzX2FwcC9zcmMvYXBwL21vZHVsb3MvY29tL2NvbXBvbmVudHMvdHJlZS90cmVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSx5REFBMEQ7RUFDMUQsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLG9CQUFvQjtFQUNwQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQ0FBd0I7VUFBeEIsd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksbURBQW1EO0VBQ25ELHFCQUFxQjtFQUNyQiwyQkFBMkIsRUFBQTs7QUFJL0I7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQU9qQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxvcy9jb20vY29tcG9uZW50cy90cmVlL3RyZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWwtaW5pdHtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbnNtLXRyZWV7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbnVse1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ubGktaWNvbntcbiAgICBiYWNrZ3JvdW5kOiAgdXJsKC9hc3NldHMvaW1hZ2VzL2Fycm93LXJpZ2h0LnN2Zykgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMTdweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogOHB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ubGktZXhwYW5kZWR7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4ubGktc2VsZWN0YWJsZXtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogc29saWQgdGhpbiAjY2NjO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxpLXNlbGVjdGVke1xuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9jaGVjay5zdmcpIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG5cbmxpe1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnVsLXVuZXhwYW5kZWR7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnVsLWV4cGFuZGVke1xuXG59XG5cbi5jaGlsZC10b3VjaHtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICM1NTU7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbn1cbi5jaGlsZC11bnRvdWNoe1xuICAgIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/modulos/com/components/tree/tree.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modulos/com/components/tree/tree.component.ts ***!
  \***************************************************************/
/*! exports provided: TreeComponent, TreeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeComponent", function() { return TreeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeModule", function() { return TreeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeComponent = /** @class */ (function () {
    function TreeComponent() {
        /**
         * Para saber cual es el nodo raiz se carga por defecto isRoot como true, y
         * en la plantilla, el componente hijo (tree) se marca con atributo isRoot = false
         */
        this.isRoot = true;
        /**
         * El evento permite notificar recursivamente al componente raiz en que momento
         * se debe realizar limpieza de los items seleccionados
         */
        this.onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._nodes != null) {
            this._nodes.forEach(function (node) {
                node['parent'] = _this._parent;
                //node['expanded'] = this.expanded === true;
            });
        }
    };
    TreeComponent.prototype.toggle = function (node) {
        node['expanded'] = !node['expanded'];
    };
    TreeComponent.prototype.toggleSelect = function (node) {
        if (node['selected'] == null) {
            node['selected'] = false;
        }
        if (this.single == true) {
            this.clearSelect();
        }
        node['selected'] = !node['selected'];
    };
    TreeComponent.prototype.clearSelect = function () {
        if (this.isRoot == true) {
            this.clearNodes(this._nodes);
        }
        this.onClear.emit();
    };
    TreeComponent.prototype.clearNodes = function (nodes) {
        var _this = this;
        nodes.forEach(function (node) {
            node['selected'] = false;
            if (node[_this.field] != null)
                _this.clearNodes(node[_this.field]);
        });
    };
    Object.defineProperty(TreeComponent.prototype, "nodes", {
        get: function () {
            return this._nodes;
        },
        set: function (nodes) {
            this._nodes = nodes;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("parent"),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "_parent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("nodes"),
        __metadata("design:type", Array)
    ], TreeComponent.prototype, "_nodes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("field"),
        __metadata("design:type", String)
    ], TreeComponent.prototype, "field", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("label"),
        __metadata("design:type", String)
    ], TreeComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("expanded"),
        __metadata("design:type", Boolean)
    ], TreeComponent.prototype, "expanded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("single"),
        __metadata("design:type", Boolean)
    ], TreeComponent.prototype, "single", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("isRoot"),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "isRoot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("onClear"),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "onClear", void 0);
    TreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-tree',
            template: __webpack_require__(/*! ./tree.component.html */ "./src/app/modulos/com/components/tree/tree.component.html"),
            styles: [__webpack_require__(/*! ./tree.component.scss */ "./src/app/modulos/com/components/tree/tree.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TreeComponent);
    return TreeComponent;
}());

var TreeModule = /** @class */ (function () {
    function TreeModule() {
    }
    TreeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [TreeComponent],
            declarations: [TreeComponent]
        })
    ], TreeModule);
    return TreeModule;
}());



/***/ }),

/***/ "./src/app/modulos/emp/entities/area.ts":
/*!**********************************************!*\
  !*** ./src/app/modulos/emp/entities/area.ts ***!
  \**********************************************/
/*! exports provided: Area */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return Area; });
var Area = /** @class */ (function () {
    function Area() {
    }
    return Area;
}());



/***/ })

}]);
//# sourceMappingURL=default~modulos-auc-pages-reporte-observacion-reporte-observacion-module~modulos-cop-pages-consulta-~6bf0f5c2.js.map