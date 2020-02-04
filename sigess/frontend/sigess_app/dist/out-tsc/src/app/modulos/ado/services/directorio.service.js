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
var environment_1 = require("../../../../environments/environment");
var service_crud_service_1 = require("../../com/services/service-crud.service");
var DirectorioService = /** @class */ (function (_super) {
    __extends(DirectorioService, _super);
    function DirectorioService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uploadEndPoint = environment_1.endPoints[_this.getClassName()] + "upload";
        return _this;
    }
    DirectorioService.prototype.upload = function (fileToUpload, directorioPadreId, modulo, modParam) {
        var _this = this;
        var formData = new FormData();
        if (fileToUpload != null)
            formData.append('file', fileToUpload, fileToUpload.name);
        if (modulo != null)
            formData.append("mod", modulo);
        if (modParam != null)
            formData.append("modParam", modParam);
        if (directorioPadreId != null)
            formData.append("dpId", directorioPadreId);
        return new Promise(function (resolve) {
            _this.httpInt.postFile(_this.uploadEndPoint, formData)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) { return _this.manageError(err); });
        });
    };
    DirectorioService.prototype.actualizarDirectorio = function (entity) {
        var _this = this;
        var body = JSON.stringify(entity);
        return new Promise(function (resolve) {
            _this.httpInt.put(_this.end_point, body)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) { return _this.manageError(err); });
        });
    };
    DirectorioService.prototype.actualizarDocumento = function (entity) {
        var _this = this;
        var body = JSON.stringify(entity);
        return new Promise(function (resolve) {
            _this.httpInt.put(_this.end_point + "documento", body)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) { return _this.manageError(err); });
        });
    };
    DirectorioService.prototype.eliminarDocumento = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var end_point = _this.httpInt.delete(_this.end_point + "documento/" + id)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) { return _this.manageError(err); });
        });
    };
    DirectorioService.prototype.buscarDocumentos = function (parametro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.httpInt.get(_this.end_point + "buscarDocumentos/" + parametro)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) { return _this.manageError(err); });
        });
    };
    DirectorioService.prototype.findByUsuario = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.httpInt.get(_this.end_point + "usuario/")
                .subscribe(function (res) {
                resolve(res);
            }, function (err) { return _this.manageError(err); });
        });
    };
    DirectorioService.prototype.download = function (directorioId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Create the Xhr request object
            var xhr = new XMLHttpRequest();
            var url = _this.end_point + "download/" + directorioId;
            xhr.open('GET', url, true);
            xhr.responseType = 'blob';
            xhr.setRequestHeader("Param-Emp", _this.httpInt.getSesionService().getParamEmp());
            xhr.setRequestHeader("Authorization", _this.httpInt.getSesionService().getBearerAuthToken());
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.response);
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.send();
        }).catch(function (err) { return _this.manageBlobError(err); });
    };
    DirectorioService.prototype.getClassName = function () {
        return "DirectorioService";
    };
    DirectorioService = __decorate([
        core_1.Injectable()
    ], DirectorioService);
    return DirectorioService;
}(service_crud_service_1.ServiceCRUD));
exports.DirectorioService = DirectorioService;
//# sourceMappingURL=directorio.service.js.map