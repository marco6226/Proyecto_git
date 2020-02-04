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
var CryptoJS = require("crypto-js");
var environment_1 = require("../../../../environments/environment");
var sesion_service_1 = require("./sesion.service");
var rxjs_1 = require("rxjs");
var AuthService = /** @class */ (function () {
    function AuthService(httpInt, sesionService) {
        this.httpInt = httpInt;
        this.sesionService = sesionService;
        this.loginSubject = new rxjs_1.Subject();
        this.loginSubmitSubject = new rxjs_1.Subject();
        this.authEndPoint = environment_1.endPoints.auth;
        // store the URL so we can redirect after logging in
        this.redirectUrl = '/app/home';
    }
    AuthService.prototype.isLoggedIn = function () {
        return this.sesionService.isLoggedIn();
    };
    AuthService.prototype.login = function (login, passwd, recordar) {
        var _this = this;
        var body = login + ":" + this.createHash(passwd);
        return new Promise(function (resolve, reject) {
            _this.httpInt.post(_this.authEndPoint + '?r=' + recordar, body)
                .subscribe(function (res) {
                _this.setSession(res, recordar);
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        var isoffline = this.sesionService.getOfflineMode();
        this.sesionService.setOfflineMode(false);
        var refresh = this.sesionService.getRefreshToken();
        var auth = this.sesionService.getAuthToken();
        return new Promise(function (resolve, reject) {
            _this.httpInt.post(_this.authEndPoint + 'logout', { 'Authorization': auth, 'refresh': refresh })
                .subscribe(function (res) {
                _this.setLoginFormVisible(true, false);
                _this.sesionService.setLoggedIn(false);
                resolve(res);
            }, function (err) {
                _this.sesionService.setOfflineMode(isoffline);
                reject(err);
            });
        });
    };
    AuthService.prototype.createHash = function (passw) {
        try {
            return CryptoJS.SHA256(passw, "");
        }
        catch (e) {
            console.log(e);
            return "";
        }
    };
    AuthService.prototype.setSession = function (res, recordar) {
        this.sesionService.setLoggedIn(true);
        this.sesionService.setUsuario(res['usuario']);
        this.sesionService.setAuthToken(res['Authorization']);
        if (recordar != null && recordar == true && res['refresh'] != null) {
            this.sesionService.setRefreshToken(res['refresh']);
        }
    };
    AuthService.prototype.requestRefresh = function (token) {
        var _this = this;
        var body = token;
        var endpoint = this.authEndPoint + 'refrescarToken';
        return new Promise(function (resolve, reject) {
            _this.httpInt.post(endpoint, body)
                .subscribe(function (res) {
                _this.setSession(res, false);
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    /**
   * Método que intenta solicitar un nuevo token si se poseen las credenciales para hacerlo, si no,
   * emite un evento para visualizar el formulario de login para solicitar el ingreso al usuario
   */
    AuthService.prototype.refreshToken = function () {
        var _this = this;
        // Verifica si se posee el refresh_token para refrescar el token de acceso
        var refreshToken = this.sesionService.getRefreshToken();
        if (refreshToken != null && refreshToken != 'undefined') {
            this.requestRefresh(refreshToken).then(function (resp) { return _this.onLogin(resp); }).catch(function (error) {
                _this.setLoginFormVisible(true, true);
            });
            return this.loginSubmitSubject.asObservable();
        }
        else {
            // Si no se posee passwd, visualiza el formulario de login
            this.setLoginFormVisible(true, true);
            return this.loginSubmitSubject.asObservable();
        }
    };
    /**
   * Emite el evento para visualizar o esconder el formulario de login
   * @param visible
   */
    AuthService.prototype.setLoginFormVisible = function (visible, modal) {
        this.loginSubject.next({ 'visible': visible, 'modal': modal });
    };
    /**
   *  Devuelve el observable que indica cuando visualizar el formulario de login
   */
    AuthService.prototype.getLoginObservable = function () {
        return this.loginSubject.asObservable();
    };
    /**
     * Emite el evento que indica que el usuario se ha logueado correctamente
     * a través del formulario de login
     * @param res
     */
    AuthService.prototype.onLogin = function (res) {
        this.loginSubmitSubject.next(res);
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_int_service_1.HttpInt,
            sesion_service_1.SesionService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map