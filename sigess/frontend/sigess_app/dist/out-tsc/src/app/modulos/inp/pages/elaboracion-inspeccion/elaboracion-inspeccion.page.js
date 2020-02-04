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
var inspeccion_form_component_1 = require("../../components/inspeccion-form/inspeccion-form.component");
var angular_1 = require("@ionic/angular");
var router_1 = require("@angular/router");
var inspecciones_sync_component_1 = require("../../components/inspecciones-sync/inspecciones-sync.component");
var programacion_inspecciones_component_1 = require("../../components/programacion-inspecciones/programacion-inspecciones.component");
var ElaboracionInspeccionPage = /** @class */ (function () {
    function ElaboracionInspeccionPage(modalController, router) {
        this.modalController = modalController;
        this.router = router;
        this.segments = { 'prog': true, 'insp': false };
        this.inspCount = 0;
    }
    ElaboracionInspeccionPage.prototype.ngOnInit = function () {
    };
    ElaboracionInspeccionPage.prototype.onProgramacionSelect = function (prog) {
        this.abrirFormulario(prog);
    };
    ElaboracionInspeccionPage.prototype.abrirFormulario = function (prog) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: inspeccion_form_component_1.InspeccionFormComponent,
                            componentProps: { value: prog }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (resp) { return _this.onModalDismiss(resp, prog); });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ElaboracionInspeccionPage.prototype.onModalDismiss = function (resp, prog) {
        var inspeccion = resp['data'];
        if (inspeccion != null && inspeccion.id == null) {
            this.inspSyncComp.adicionarInspeccion(inspeccion);
            this.inspCount += 1;
            this.progInspComp.actualizarProgMetadata(prog.id, null, true);
        }
        else if (resp['data'] != null) {
            prog.numeroRealizadas += 1;
        }
    };
    ElaboracionInspeccionPage.prototype.onEvent = function (event) {
        switch (event.type) {
            case 'onSync':
                this.progInspComp.actualizarProgMetadata(event.inspeccion.programacion.id, true, false);
                break;
            case 'onLocalRemove':
                this.progInspComp.actualizarProgMetadata(event.inspeccion.programacion.id, null, false);
                break;
        }
        this.inspCount = event.count;
    };
    ElaboracionInspeccionPage.prototype.navegar = function (url) {
        this.router.navigate([url]);
    };
    ElaboracionInspeccionPage.prototype.segmentChanged = function (event) {
        for (var seg in this.segments) {
            this.segments[seg] = false;
            if (event.detail.value == seg)
                this.segments[seg] = true;
        }
    };
    __decorate([
        core_1.ViewChild('inspSyncComp'),
        __metadata("design:type", inspecciones_sync_component_1.InspeccionesSyncComponent)
    ], ElaboracionInspeccionPage.prototype, "inspSyncComp", void 0);
    __decorate([
        core_1.ViewChild('progInspComp'),
        __metadata("design:type", programacion_inspecciones_component_1.ProgramacionInspeccionesComponent)
    ], ElaboracionInspeccionPage.prototype, "progInspComp", void 0);
    ElaboracionInspeccionPage = __decorate([
        core_1.Component({
            selector: 'sm-elaboracionInspeccion',
            templateUrl: './elaboracion-inspeccion.page.html',
            styleUrls: ['./elaboracion-inspeccion.page.scss'],
        }),
        __metadata("design:paramtypes", [angular_1.ModalController,
            router_1.Router])
    ], ElaboracionInspeccionPage);
    return ElaboracionInspeccionPage;
}());
exports.ElaboracionInspeccionPage = ElaboracionInspeccionPage;
//# sourceMappingURL=elaboracion-inspeccion.page.js.map