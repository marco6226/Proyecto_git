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
var filter_query_1 = require("../../../com/entities/filter-query");
var sesion_service_1 = require("../../../com/services/sesion.service");
var offline_service_1 = require("../../../com/services/offline.service");
var util_1 = require("../../../com/utils/util");
var ProgramacionInspeccionesComponent = /** @class */ (function () {
    function ProgramacionInspeccionesComponent(sessionService, offlineService) {
        this.sessionService = sessionService;
        this.offlineService = offlineService;
        this.onProgramacionSelect = new core_1.EventEmitter();
    }
    ProgramacionInspeccionesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.offlineService.queryProgramacionList().then(function (resp) {
            _this.programacionList = [];
            resp['data'].forEach(function (dto) {
                _this.programacionList.push(filter_query_1.FilterQuery.dtoToObject(dto));
            });
        });
    };
    ProgramacionInspeccionesComponent.prototype.actualizarProgMetadata = function (id, aumentarRealizadas, aumentarOffline) {
        var prog;
        for (var i = 0; i < this.programacionList.length; i++) {
            if (id == this.programacionList[i].id) {
                prog = this.programacionList[i];
                break;
            }
        }
        if (prog['offlineDone'] == null)
            prog['offlineDone'] = 0;
        prog.numeroRealizadas += aumentarRealizadas == null ? 0 : (aumentarRealizadas ? 1 : -1);
        prog['offlineDone'] += aumentarOffline == null ? 0 : (aumentarOffline ? 1 : -1);
        util_1.asyncLocalStorage.getItem('programacionList').then(function (respProg) {
            var progList = respProg['data'];
            for (var i = 0; i < progList.length; i++) {
                if (prog.id == progList[i].id) {
                    progList[i].offlineDone = prog['offlineDone'];
                    progList[i].numeroRealizadas = prog.numeroRealizadas;
                    break;
                }
            }
            respProg['data'] = progList;
            util_1.asyncLocalStorage.setItem('programacionList', JSON.stringify(respProg));
        });
    };
    ProgramacionInspeccionesComponent.prototype.onProgSelect = function (prog) {
        this.onProgramacionSelect.emit(prog);
    };
    __decorate([
        core_1.Output("onProgramacionSelect"),
        __metadata("design:type", Object)
    ], ProgramacionInspeccionesComponent.prototype, "onProgramacionSelect", void 0);
    ProgramacionInspeccionesComponent = __decorate([
        core_1.Component({
            selector: 'sm-programacionInspecciones',
            templateUrl: './programacion-inspecciones.component.html',
            styleUrls: ['./programacion-inspecciones.component.scss']
        }),
        __metadata("design:paramtypes", [sesion_service_1.SesionService,
            offline_service_1.OfflineService])
    ], ProgramacionInspeccionesComponent);
    return ProgramacionInspeccionesComponent;
}());
exports.ProgramacionInspeccionesComponent = ProgramacionInspeccionesComponent;
//# sourceMappingURL=programacion-inspecciones.component.js.map