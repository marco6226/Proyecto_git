"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_int_service_1 = require("./http-int.service");
var environment_1 = require("../../../../environments/environment");
var mensaje_usuario_service_1 = require("./mensaje-usuario.service");
var ServiceCRUD = /** @class */ (function () {
    function ServiceCRUD(httpInt, mensajeUsuarioService) {
        this.httpInt = httpInt;
        this.mensajeUsuarioService = mensajeUsuarioService;
        this.end_point = environment_1.endPoints[this.getClassName()];
    }
    ServiceCRUD.prototype.buildUrlParams = function (filterQuery) {
        var urlParam = '';
        if (filterQuery == null) {
            return urlParam;
        }
        if (filterQuery.offset != null) {
            urlParam += 'offset=' + filterQuery.offset + '&';
        }
        if (filterQuery.rows != null) {
            urlParam += 'rows=' + filterQuery.rows + '&';
        }
        if (filterQuery.count != null) {
            urlParam += 'count=' + filterQuery.count + '&';
        }
        if (filterQuery.sortField != null) {
            urlParam += 'sortField=' + filterQuery.sortField + '&';
        }
        if (filterQuery.sortOrder != null) {
            urlParam += 'sortOrder=' + filterQuery.sortOrder + '&';
        }
        if (filterQuery.filterList != null) {
            urlParam += 'filterList=' + encodeURIComponent(JSON.stringify(filterQuery.filterList)) + '&';
        }
        if (filterQuery.fieldList != null) {
            var fieldParam_1 = 'fieldList=';
            filterQuery.fieldList.forEach(function (field) {
                fieldParam_1 += field + ',';
            });
            fieldParam_1.slice(0, fieldParam_1.length - 1);
            urlParam += fieldParam_1;
        }
        if (urlParam[urlParam.length - 1] === '&') {
            urlParam = urlParam.slice(0, urlParam.length - 1);
        }
        return urlParam;
    };
    ServiceCRUD.prototype.findByFilter = function (filterQuery) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpInt.get(_this.end_point + '?' + _this.buildUrlParams(filterQuery))
                .subscribe(function (res) { return resolve(res); }, function (err) {
                _this.manageError(err);
                reject(err);
            });
        });
    };
    ServiceCRUD.prototype.count = function (filterQuery) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpInt.get(_this.end_point + "count?" + _this.buildUrlParams(filterQuery))
                .subscribe(function (res) { return resolve(res); }, function (err) {
                _this.manageError(err);
                reject(err);
            });
        });
    };
    /**
     * Consulta la entidad teniendo como criterio el id pasado como parámetro.
     * @param id
     */
    ServiceCRUD.prototype.find = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpInt.get(_this.end_point + id)
                .subscribe(function (res) { return resolve(res); }, function (err) {
                _this.manageError(err);
                reject(err);
            });
        });
    };
    ServiceCRUD.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpInt.get(_this.end_point)
                .subscribe(function (res) { return resolve(res); }, function (err) {
                _this.manageError(err);
                reject(err);
            });
        });
    };
    ServiceCRUD.prototype.create = function (entity) {
        var _this = this;
        var body = JSON.stringify(entity);
        return new Promise(function (resolve, reject) {
            _this.httpInt.post(_this.end_point, body)
                .subscribe(function (res) { return resolve(res); }, function (err) {
                _this.manageError(err);
                reject(err);
            });
        });
    };
    ServiceCRUD.prototype.update = function (entity, params) {
        var _this = this;
        var body = JSON.stringify(entity);
        return new Promise(function (resolve, reject) {
            _this.httpInt.put(_this.end_point + (params == null ? '' : '?'.concat(params)), body)
                .subscribe(function (res) { return resolve(res); }, function (err) {
                _this.manageError(err);
                reject(err);
            });
        });
    };
    ServiceCRUD.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpInt.delete(_this.end_point + id)
                .subscribe(function (res) { return resolve(res); }, function (err) {
                _this.manageError(err);
                reject(err);
            });
        });
    };
    ServiceCRUD.prototype.manageError = function (err) {
        if (err.status == 0) {
            this.mensajeUsuarioService.showMessage({
                tipoMensaje: 'warn',
                mensaje: 'ERROR DE CONEXIÓN',
                detalle: 'No se ha podido establecer conexión con el servidor. Por favor verifique que cuenta con conexión a internet.'
            });
            return;
        }
        var msg;
        try {
            msg = err.error;
        }
        catch (error) {
            msg = { tipoMensaje: 'error', mensaje: 'Error Inesperado', detalle: err };
        }
        switch (msg.codigo) {
            case 1001:
                break;
            default:
                this.mensajeUsuarioService.showMessage({
                    mensaje: msg.mensaje,
                    detalle: msg.detalle,
                    tipoMensaje: msg.tipoMensaje
                });
                break;
        }
    };
    ServiceCRUD.prototype.manageBlobError = function (err) {
        var usrMsgService = this.mensajeUsuarioService;
        var reader = new FileReader();
        reader.onload = function () {
            var msg;
            try {
                msg = JSON.parse(reader.result + '');
            }
            catch (error) {
                msg = { tipoMensaje: 'error', mensaje: 'Error Inesperado', detalle: reader.result + '' };
            }
            usrMsgService.showMessage({
                mensaje: msg.mensaje,
                detalle: msg.detalle,
                tipoMensaje: msg.tipoMensaje
            });
        };
        reader.readAsText(err);
    };
    ServiceCRUD = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_int_service_1.HttpInt,
            mensaje_usuario_service_1.MensajeUsuarioService])
    ], ServiceCRUD);
    return ServiceCRUD;
}());
exports.ServiceCRUD = ServiceCRUD;
//# sourceMappingURL=service-crud.service.js.map