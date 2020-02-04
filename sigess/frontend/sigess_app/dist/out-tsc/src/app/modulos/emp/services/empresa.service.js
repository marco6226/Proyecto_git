"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var empresa_1 = require("./../entities/empresa");
var environment_1 = require("../../../../environments/environment");
var service_crud_service_1 = require("../../com/services/service-crud.service");
var EmpresaService = /** @class */ (function (_super) {
    __extends(EmpresaService, _super);
    function EmpresaService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmpresaService.prototype.obtenerContratistas = function (empresaId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.httpInt.get(_this.end_point + "contratistas/" + empresaId)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) { return _this.manageError(err); });
        });
    };
    EmpresaService.prototype.vincularContratista = function (contratista) {
        var _this = this;
        var entity = new empresa_1.Empresa();
        entity.id = contratista.id;
        var body = JSON.stringify(entity);
        return new Promise(function (resolve) {
            _this.httpInt.put(_this.end_point + "contratistas", body)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) { return _this.manageError(err); });
        });
    };
    EmpresaService.prototype.findByUsuario = function (usuarioId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.httpInt.get(environment_1.endPoints.EmpresaService + "usuario/" + usuarioId)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) { return console.log(err); });
        });
    };
    EmpresaService.prototype.getClassName = function () {
        return "EmpresaService";
    };
    EmpresaService = __decorate([
        core_1.Injectable()
    ], EmpresaService);
    return EmpresaService;
}(service_crud_service_1.ServiceCRUD));
exports.EmpresaService = EmpresaService;
//# sourceMappingURL=empresa.service.js.map