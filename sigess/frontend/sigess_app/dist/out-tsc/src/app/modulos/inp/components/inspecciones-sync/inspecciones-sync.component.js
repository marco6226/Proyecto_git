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
var util_1 = require("../../../com/utils/util");
var inspeccion_service_1 = require("../../services/inspeccion.service");
var mensaje_usuario_service_1 = require("../../../com/services/mensaje-usuario.service");
var directorio_service_1 = require("../../../ado/services/directorio.service");
var angular_1 = require("@ionic/angular");
var InspeccionesSyncComponent = /** @class */ (function () {
    // @Output('onLoadEvent') onLoadEvent = new EventEmitter<any>();
    function InspeccionesSyncComponent(inspeccionService, msgService, dirService, alertController) {
        this.inspeccionService = inspeccionService;
        this.msgService = msgService;
        this.dirService = dirService;
        this.alertController = alertController;
        this.onEvent = new core_1.EventEmitter();
    }
    InspeccionesSyncComponent.prototype.ngOnInit = function () {
        var _this = this;
        util_1.asyncLocalStorage.getItem('inspecciones').then(function (resp) {
            if (resp != null) {
                _this.onEvent.emit({ type: 'onLoad', count: resp.length });
                _this.inspList = [];
                resp.forEach(function (inpKey) {
                    util_1.asyncLocalStorage.getItem(inpKey).then(function (inp) {
                        inp.fechaRealizada = inp.fechaRealizada == null ? null : new Date(inp.fechaRealizada);
                        _this.inspList.push(inp);
                    });
                });
            }
            else {
                _this.onEvent.emit({ type: 'onLoad', count: 0 });
            }
        });
    };
    InspeccionesSyncComponent.prototype.adicionarInspeccion = function (inspeccion) {
        if (this.inspList == null)
            this.inspList = [];
        this.inspList.push(inspeccion);
        this.inspList = this.inspList.slice();
    };
    InspeccionesSyncComponent.prototype.borrarInspeccion = function (insp, indice, emitEvent) {
        var inspHash = insp['hash'];
        util_1.asyncLocalStorage.removeItem(inspHash);
        this.inspList.splice(indice, 1);
        this.inspList = this.inspList.slice();
        if (emitEvent)
            this.onEvent.emit({ type: 'onLocalRemove', count: this.inspList.length, inspeccion: insp });
        util_1.asyncLocalStorage.getItem('inspecciones').then(function (resp) {
            if (resp.length <= 1) {
                util_1.asyncLocalStorage.removeItem('inspecciones');
            }
            else {
                for (var i = 0; i < resp.length; i++) {
                    if (resp[i] == inspHash) {
                        resp.splice(i, 1);
                        break;
                    }
                }
                util_1.asyncLocalStorage.setItem('inspecciones', JSON.stringify(resp));
            }
        });
    };
    InspeccionesSyncComponent.prototype.presentAlertConfirm = function (inp, index) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '¿Eliminar inspección?',
                            message: 'Esto borrará de su entorno local la inspección y no podrá sincronizarla. ¿Confirma esta acción?',
                            buttons: [{
                                    text: 'Si',
                                    handler: function () {
                                        _this.borrarInspeccion(inp, index, true);
                                        _this.msgService.showMessage({ tipoMensaje: 'info', mensaje: 'Inspección eliminada de entorno local', detalle: '' });
                                    }
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
    InspeccionesSyncComponent.prototype.sincronizar = function (insp, indice) {
        var _this = this;
        this.inspeccionService.create(insp).then(function (resp) {
            var _loop_1 = function (i) {
                var calf = resp.calificacionList[i];
                var imgKey = insp.calificacionList[i]['img_key'];
                var img = localStorage.getItem(imgKey);
                if (img != null)
                    util_1.Util.dataURLtoFile(img, 'img_' + i + '_inp_calf_' + calf.id + '.jpeg').then(function (file) {
                        return _this.dirService.upload(file, null, 'INP', calf.id).then(function (imgResp) {
                            localStorage.removeItem(imgKey);
                        });
                    });
            };
            for (var i = 0; i < insp.calificacionList.length; i++) {
                _loop_1(i);
            }
            _this.borrarInspeccion(insp, indice);
            _this.msgService.showMessage({
                tipoMensaje: 'success',
                mensaje: 'Inspección sincronizada',
                detalle: 'La inspección ha sido sincronizada correctamente'
            });
            _this.onEvent.emit({ type: 'onSync', inspeccion: resp, count: _this.inspList.length });
        });
    };
    __decorate([
        core_1.Input('inspecciones'),
        __metadata("design:type", Array)
    ], InspeccionesSyncComponent.prototype, "inspList", void 0);
    __decorate([
        core_1.Output('onEvent'),
        __metadata("design:type", Object)
    ], InspeccionesSyncComponent.prototype, "onEvent", void 0);
    InspeccionesSyncComponent = __decorate([
        core_1.Component({
            selector: 'sm-inspeccionesSync',
            templateUrl: './inspecciones-sync.component.html',
            styleUrls: ['./inspecciones-sync.component.scss']
        }),
        __metadata("design:paramtypes", [inspeccion_service_1.InspeccionService,
            mensaje_usuario_service_1.MensajeUsuarioService,
            directorio_service_1.DirectorioService,
            angular_1.AlertController])
    ], InspeccionesSyncComponent);
    return InspeccionesSyncComponent;
}());
exports.InspeccionesSyncComponent = InspeccionesSyncComponent;
//# sourceMappingURL=inspecciones-sync.component.js.map