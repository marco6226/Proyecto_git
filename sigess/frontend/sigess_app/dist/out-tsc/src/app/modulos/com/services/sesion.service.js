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
var router_1 = require("@angular/router");
var session_1 = require("../entities/session");
var environment_1 = require("../../../../environments/environment");
var SesionService = /** @class */ (function () {
    function SesionService(router) {
        this.router = router;
        this.eventEmmiter = new core_1.EventEmitter();
    }
    SesionService.prototype.emitirEvento = function (evento, valor) {
        this.eventEmmiter.emit({ evento: evento, valor: valor });
    };
    SesionService.prototype.getEventEmmiter = function () {
        return this.eventEmmiter;
    };
    SesionService.prototype.getUsuario = function () {
        if (this.session == null) {
            this.session = JSON.parse(localStorage.getItem(environment_1.session_config.session_id));
            if (this.session == null)
                return null;
        }
        return this.session.usuario;
    };
    SesionService.prototype.setUsuario = function (usuario) {
        this.session.usuario = usuario;
        localStorage.setItem(environment_1.session_config.session_id, JSON.stringify(this.session));
    };
    SesionService.prototype.getEmpresa = function () {
        if (this.session == null) {
            this.session = JSON.parse(localStorage.getItem(environment_1.session_config.session_id));
            if (this.session == null)
                return null;
        }
        return this.session.empresa;
    };
    SesionService.prototype.getParamEmp = function () {
        var empParam = this.getEmpresa();
        return empParam == null ? '' : '' + empParam.id;
    };
    SesionService.prototype.setEmpresa = function (empresa) {
        this.session.empresa = empresa;
        localStorage.setItem(environment_1.session_config.session_id, JSON.stringify(this.session));
    };
    SesionService.prototype.getRefreshToken = function () {
        return localStorage.getItem('refresh');
    };
    SesionService.prototype.setRefreshToken = function (refreshToken) {
        localStorage.setItem('refresh', refreshToken);
    };
    SesionService.prototype.getAuthToken = function () {
        return localStorage.getItem('auth');
    };
    SesionService.prototype.getBearerAuthToken = function () {
        var token = this.getAuthToken();
        return token == null ? '' : 'Bearer ' + token;
    };
    SesionService.prototype.setAuthToken = function (token) {
        localStorage.setItem('auth', token);
    };
    SesionService.prototype.setLoggedIn = function (isLoggedIn) {
        if (isLoggedIn) {
            this.session = this.session == null ? new session_1.Session() : this.session;
            this.session.isLoggedIn = true;
            localStorage.setItem(environment_1.session_config.session_id, JSON.stringify(this.session));
        }
        else {
            this.session = null;
            localStorage.removeItem(environment_1.session_config.session_id);
            localStorage.removeItem('refresh');
            localStorage.removeItem('empresasList');
            localStorage.removeItem('auth');
        }
    };
    SesionService.prototype.isLoggedIn = function () {
        if (this.session == null) {
            this.session = JSON.parse(localStorage.getItem(environment_1.session_config.session_id));
            if (this.session == null)
                return false;
        }
        return this.session.isLoggedIn;
    };
    SesionService.prototype.getOfflineMode = function () {
        if (this.session == null) {
            this.session = JSON.parse(localStorage.getItem(environment_1.session_config.session_id));
            if (this.session == null)
                return null;
        }
        return this.session.offlineMode;
    };
    SesionService.prototype.setOfflineMode = function (offlineMode) {
        this.session.offlineMode = offlineMode;
        localStorage.setItem(environment_1.session_config.session_id, JSON.stringify(this.session));
    };
    /*
    public setPermisosList(permisosList: Permiso[]) {
      this.session.permisosList = permisosList;
      localStorage.setItem(config.session_id, JSON.stringify(this.session));
    }
  
    public getPermisosList(): Permiso[] {
      if (this.session == null) {
        this.session = <Session>JSON.parse(localStorage.getItem(config.session_id));
        if (this.session == null) return null;
      }
      return this.session.permisosList;
    }
    */
    SesionService.prototype.setPermisosMap = function (permisosMapa) {
        this.session.permisosMap = permisosMapa;
        localStorage.setItem(environment_1.session_config.session_id, JSON.stringify(this.session));
    };
    SesionService.prototype.getPermisosMap = function () {
        if (this.session == null) {
            this.session = JSON.parse(localStorage.getItem(environment_1.session_config.session_id));
            if (this.session == null)
                return null;
        }
        return this.session.permisosMap;
    };
    SesionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], SesionService);
    return SesionService;
}());
exports.SesionService = SesionService;
//# sourceMappingURL=sesion.service.js.map