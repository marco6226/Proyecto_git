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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sesion_service_1 = require("./../../services/sesion.service");
var router_1 = require("@angular/router");
var empresa_service_1 = require("../../../emp/services/empresa.service");
var auth_service_1 = require("../../services/auth.service");
var permiso_service_1 = require("../../../emp/services/permiso.service");
var offline_service_1 = require("../../services/offline.service");
var mensaje_usuario_service_1 = require("../../services/mensaje-usuario.service");
var angular_1 = require("@ionic/angular");
var util_1 = require("../../utils/util");
var InicioComponent = /** @class */ (function () {
    function InicioComponent(router, authService, sesionService, empresaService, permisoService, offlineService, msgService, loadingController, alertController) {
        this.router = router;
        this.authService = authService;
        this.sesionService = sesionService;
        this.empresaService = empresaService;
        this.permisoService = permisoService;
        this.offlineService = offlineService;
        this.msgService = msgService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.appPages = [
            {
                title: 'Inicio',
                url: '/home',
                icon: 'home'
            }
        ];
        this.offline = false;
    }
    InicioComponent.prototype.ngOnInit = function () {
        this.consultarEmpresas();
    };
    InicioComponent.prototype.consultarEmpresas = function () {
        var _this = this;
        var usuario = this.sesionService.getUsuario();
        this.offline = this.sesionService.getOfflineMode();
        this.empresaSelect = this.sesionService.getEmpresa();
        if ((this.offline == null || this.offline == false) && this.empresaSelect == null) {
            this.empresaService.findByUsuario(usuario.id).then(function (resp) {
                _this.empresasList = resp;
                util_1.asyncLocalStorage.setItem('empresasList', JSON.stringify(_this.empresasList));
                _this.empresaSelect = (_this.empresasList[0]);
                _this.sesionService.setEmpresa(_this.empresaSelect);
                _this.cargarPermisos();
            });
        }
        else {
            this.empresasList = JSON.parse(localStorage.getItem('empresasList'));
        }
    };
    InicioComponent.prototype.cargarPermisos = function () {
        var _this = this;
        this.permisoService.findAll().then(function (data) {
            _this.mapaPermisos = {};
            data.forEach(function (element) { return _this.mapaPermisos[element.recurso.codigo] = { 'valido': element.valido, 'areas': element.areas }; });
            _this.sesionService.setPermisosMap(_this.mapaPermisos);
        });
    };
    InicioComponent.prototype.cambiarEmpresa = function (event) {
        this.empresaSelect = event.detail.value;
        this.sesionService.setEmpresa(this.empresaSelect);
        this.cargarPermisos();
    };
    InicioComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout().then(function (resp) {
            try {
                if (navigator['app'] == null) {
                    _this.router.navigate(['/login']);
                }
                else {
                    navigator['app'].exitApp();
                }
            }
            catch (error) {
                console.log(error);
            }
        }).catch(function (err) {
            switch (err.status) {
                case 0:
                    _this.msgService.showMessage({
                        tipoMensaje: 'warn', mensaje: 'ERROR DE CONEXIÓN',
                        detalle: 'Se debe contar con conexión a internet para salir de manera segura.'
                    });
                    break;
                default:
                    _this.msgService.showMessage({ tipoMensaje: 'error', mensaje: 'ERROR', detalle: 'Se ha generado un error no esperado' });
                    break;
            }
        });
    };
    InicioComponent.prototype.logOutConfirm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '¿Salir de la aplicación?',
                            message: 'Si tiene datos para sincronizar podría perderlos, se recomienda sincronizarlos previamente. ¿Desea continuar?',
                            buttons: [{
                                    text: 'Si',
                                    handler: function () { return _this.logout(); }
                                }, {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'No'
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InicioComponent.prototype.offlineToggle = function () {
        var _this = this;
        this.offline = !this.offline;
        if (this.offline) {
            var loading_1 = this.showLoading('Cargando datos...');
            this.offlineService.loadData().then(function (resp) {
                loading_1.then(function (loadPop) { return loadPop.dismiss(); }).then(function (res) {
                    return _this.msgService.showMessage({
                        tipoMensaje: 'info', mensaje: 'Modo offline activado', detalle: ''
                    });
                });
                _this.offline = true;
                _this.offlineService.setOfflineMode(true);
            }, function (err) {
                loading_1.then(function (loadPop) { return loadPop.dismiss(); });
                _this.offline = false;
                _this.offlineService.setOfflineMode(false);
            });
        }
        else {
            var loading_2 = this.showLoading('Sincronizando...');
            this.offlineService.sincronizar().then(function (resp) { return loading_2
                .then(function (loadPop) { return loadPop.dismiss(); })
                .then(function (res) { return _this.router.navigate(['/app/home']); })
                .then(function (res) { return _this.msgService.showMessage(resp); }); }, function (err) {
                loading_2.then(function (loadPop) { return loadPop.dismiss(); });
                _this.offline = false;
                _this.offlineService.setOfflineMode(false);
            });
        }
    };
    InicioComponent.prototype.showLoading = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: msg,
                            spinner: 'crescent',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, loading];
                }
            });
        });
    };
    InicioComponent = __decorate([
        core_1.Component({
            selector: 'sm-inicio',
            templateUrl: './inicio.component.html',
            styleUrls: ['./inicio.component.scss'],
            providers: [empresa_service_1.EmpresaService, permiso_service_1.PermisoService]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            auth_service_1.AuthService,
            sesion_service_1.SesionService,
            empresa_service_1.EmpresaService,
            permiso_service_1.PermisoService,
            offline_service_1.OfflineService,
            mensaje_usuario_service_1.MensajeUsuarioService,
            angular_1.LoadingController,
            angular_1.AlertController])
    ], InicioComponent);
    return InicioComponent;
}());
exports.InicioComponent = InicioComponent;
//# sourceMappingURL=inicio.component.js.map