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
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var sesion_service_1 = require("./sesion.service");
var operators_1 = require("rxjs/operators");
var auth_service_1 = require("./auth.service");
var cambio_passwd_service_1 = require("../services/cambio-passwd.service");
var mensaje_usuario_service_1 = require("./mensaje-usuario.service");
var HttpAuthInterceptor = /** @class */ (function () {
    function HttpAuthInterceptor(sesionService, authService, cambioPasswdService, mensajeUsuarioService) {
        this.sesionService = sesionService;
        this.authService = authService;
        this.cambioPasswdService = cambioPasswdService;
        this.mensajeUsuarioService = mensajeUsuarioService;
        this.inflightAuthRequest = null;
    }
    HttpAuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(operators_1.catchError(function (error) {
            var msg;
            if (req.params != null && req.responseType == 'blob') {
                // Si el tipo de response es blob, se debe leer la respuesta como un blob
                var reader = new FileReader();
                // Se crea un nuevo observable debido a la naturaleza asincrona de la api FileReader
                var observ = rxjs_1.Observable.create(function (observer) {
                    reader.onload = function () {
                        try {
                            msg = JSON.parse(reader.result);
                        }
                        catch (error) {
                            msg = { tipoMensaje: 'error', mensaje: 'Error Inesperado', detalle: reader.result };
                        }
                        observer.next();
                        observer.complete();
                    };
                }).switchMap(function (resp) { return _this.getObservable(msg, error, req, next); });
                reader.readAsText(error.error);
                return observ;
            }
            else {
                // Por defecto se asume la respuesta como json
                msg = error.error;
                return _this.getObservable(msg, error, req, next);
            }
        }));
    };
    HttpAuthInterceptor.prototype.getObservable = function (msg, error, req, next) {
        var _this = this;
        switch (msg.codigo) {
            case 1001:
                //if (!this.inflightAuthRequest) {
                this.inflightAuthRequest = this.authService.refreshToken();
                if (!this.inflightAuthRequest) {
                    return rxjs_1.throwError(error);
                }
                //}
                return this.inflightAuthRequest.pipe(operators_1.switchMap(function (res) {
                    // unset inflight request
                    _this.inflightAuthRequest = null;
                    // clone the original request
                    var paramEmp = req.headers.get('param-emp') != null ? '' + req.headers.get('param-emp') : '';
                    var headers = new http_1.HttpHeaders({
                        'authorization': _this.sesionService.getBearerAuthToken(),
                        'param-emp': paramEmp,
                        'content-type': req.headers.get('content-type')
                    });
                    var authReqRepeat = req.clone({ headers: headers });
                    return next.handle(authReqRepeat);
                }));
            case 2001:
                this.mensajeUsuarioService.showMessage({ mensaje: 'Contraseña expirada', detalle: 'Su contraseña ha expirado, por favor realize el cambio', tipoMensaje: 'warn' });
                this.cambioPasswdService.setVisible(true);
                return this.cambioPasswdService.getSubmitObservable().pipe(operators_1.switchMap(function (res) {
                    // clone the original request
                    var authReqRepeat = req.clone();
                    return next.handle(authReqRepeat);
                }));
                ;
            default:
                return rxjs_1.throwError(error);
        }
    };
    HttpAuthInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [sesion_service_1.SesionService,
            auth_service_1.AuthService,
            cambio_passwd_service_1.CambioPasswdService,
            mensaje_usuario_service_1.MensajeUsuarioService])
    ], HttpAuthInterceptor);
    return HttpAuthInterceptor;
}());
exports.HttpAuthInterceptor = HttpAuthInterceptor;
//# sourceMappingURL=http-auth-interceptor.js.map