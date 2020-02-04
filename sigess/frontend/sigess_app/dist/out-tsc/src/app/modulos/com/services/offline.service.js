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
var programacion_service_1 = require("../../inp/services/programacion.service");
var filter_query_1 = require("../entities/filter-query");
var sesion_service_1 = require("./sesion.service");
var filter_1 = require("../entities/filter");
var core_1 = require("@angular/core");
var lista_inspeccion_service_1 = require("../../inp/services/lista-inspeccion.service");
var sistema_nivel_riesgo_service_1 = require("./sistema-nivel-riesgo.service");
var util_1 = require("../utils/util");
var inspeccion_service_1 = require("../../inp/services/inspeccion.service");
var directorio_service_1 = require("../../ado/services/directorio.service");
var tarjeta_service_1 = require("../../auc/services/tarjeta.service");
var area_service_1 = require("../../emp/services/area.service");
var sistema_causa_raiz_service_1 = require("../../sec/services/sistema-causa-raiz.service");
var OfflineService = /** @class */ (function () {
    function OfflineService(areaService, tarjetaService, programacionService, listaInspeccionService, sistemaNivelRiesgoService, sistemaCausaRaizService, sessionService, inspeccionService, dirService) {
        this.areaService = areaService;
        this.tarjetaService = tarjetaService;
        this.programacionService = programacionService;
        this.listaInspeccionService = listaInspeccionService;
        this.sistemaNivelRiesgoService = sistemaNivelRiesgoService;
        this.sistemaCausaRaizService = sistemaCausaRaizService;
        this.sessionService = sessionService;
        this.inspeccionService = inspeccionService;
        this.dirService = dirService;
    }
    OfflineService.prototype.getOfflineMode = function () {
        return this.sessionService.getOfflineMode();
    };
    OfflineService.prototype.setOfflineMode = function (offlineMode) {
        this.sessionService.setOfflineMode(offlineMode);
    };
    OfflineService.prototype.querySistemaCausaRaiz = function () {
        if (this.sessionService.getOfflineMode()) {
            return util_1.asyncLocalStorage.getItem('sistemaCausaRaiz');
        }
        else {
            return this.sistemaCausaRaizService.findDefault();
        }
    };
    OfflineService.prototype.queryArea = function () {
        if (this.sessionService.getOfflineMode()) {
            return util_1.asyncLocalStorage.getItem('areas');
        }
        else {
            var fq = new filter_query_1.FilterQuery();
            fq.fieldList = ["id", "nombre"];
            fq.sortField = 'nombre';
            fq.sortOrder = -1;
            return this.areaService.findByFilter(fq);
        }
    };
    OfflineService.prototype.queryTarjetaObservacion = function () {
        if (this.sessionService.getOfflineMode()) {
            return util_1.asyncLocalStorage.getItem('tarjetasObservacion');
        }
        else {
            return this.tarjetaService.findAll();
        }
    };
    OfflineService.prototype.querySistemaNivelRiesgo = function () {
        var _this = this;
        if (this.sessionService.getOfflineMode()) {
            return util_1.asyncLocalStorage.getItem('sistemaNivelRiesgo');
        }
        else {
            var filterQuery_1 = new filter_query_1.FilterQuery();
            var filter = new filter_1.Filter();
            filter.criteria = filter_1.Criteria.EQUALS;
            filter.field = 'seleccionado';
            filter.value1 = 'true';
            filterQuery_1.filterList = [filter];
            return new Promise(function (resolve, reject) {
                _this.sistemaNivelRiesgoService.findByFilter(filterQuery_1).then(function (resp) { return resolve(resp); }, function (err) { return reject(err); });
            });
        }
    };
    OfflineService.prototype.queryProgramacionList = function () {
        var _this = this;
        if (this.sessionService.getOfflineMode()) {
            return util_1.asyncLocalStorage.getItem('programacionList');
        }
        else {
            var filterQuery_2 = new filter_query_1.FilterQuery();
            filterQuery_2.sortField = 'fecha';
            filterQuery_2.sortOrder = 1;
            filterQuery_2.fieldList = [
                'id',
                'fecha',
                'area_nombre',
                'listaInspeccion_listaInspeccionPK',
                'listaInspeccion_nombre',
                'numeroInspecciones',
                'numeroRealizadas'
            ];
            var areas = this.sessionService.getPermisosMap()['INP_GET_PROG'].areas;
            filterQuery_2.filterList = [
                {
                    criteria: filter_1.Criteria.CONTAINS,
                    field: "area.id",
                    value1: (areas == null ? null : areas.toString())
                },
                {
                    criteria: filter_1.Criteria.NOT_EQUALS,
                    field: 'numeroInspecciones',
                    value1: 'numeroRealizadas',
                    isExpression: true
                }
            ];
            return new Promise(function (resolve, reject) {
                _this.programacionService.findByFilter(filterQuery_2).then(function (res) { return resolve(res); }, function (err) { return reject(err); });
            });
        }
    };
    OfflineService.prototype.queryListasInspeccion = function (programacion) {
        var _this = this;
        var idLista = programacion.listaInspeccion == null ? programacion.listaInspeccion_listaInspeccionPK.id : programacion.listaInspeccion.listaInspeccionPK.id;
        var versionLista = programacion.listaInspeccion == null ? programacion.listaInspeccion_listaInspeccionPK.version : programacion.listaInspeccion.listaInspeccionPK.version;
        if (this.sessionService.getOfflineMode()) {
            return util_1.asyncLocalStorage.getItem('L-INP' + idLista + '-' + versionLista);
        }
        else {
            var filterQuery_3 = new filter_query_1.FilterQuery();
            var filterId = new filter_1.Filter();
            filterId.criteria = filter_1.Criteria.EQUALS;
            filterId.field = "listaInspeccionPK.id";
            filterId.value1 = idLista;
            var filterVersion = new filter_1.Filter();
            filterVersion.criteria = filter_1.Criteria.EQUALS;
            filterVersion.field = "listaInspeccionPK.version";
            filterVersion.value1 = versionLista;
            filterQuery_3.filterList = [filterId, filterVersion];
            return new Promise(function (resolve, reject) {
                _this.listaInspeccionService.findByFilter(filterQuery_3).then(function (res) { return resolve(res); }, function (err) { return reject(err); });
            });
        }
    };
    OfflineService.prototype.loadData = function () {
        var _this = this;
        var queries = {
            querySistemaCausaRaiz: false,
            queryArea: false,
            queryTarjetaObservacion: false,
            querySistemaNivelRiesgo: false,
            queryProgramacionList: false,
            queryListasInspeccion: false
        };
        this.setOfflineMode(false);
        return new Promise(function (resolve, reject) {
            // Queries OBSERVACIONES
            _this.querySistemaCausaRaiz().then(function (resp) { return util_1.asyncLocalStorage.setItem('sistemaCausaRaiz', JSON.stringify(resp)); }, function (err) { return reject(err); }).then(function (resp) {
                if (_this.verificarCarga(queries, 'querySistemaCausaRaiz'))
                    resolve();
            });
            _this.queryArea().then(function (resp) { return util_1.asyncLocalStorage.setItem('areas', JSON.stringify(resp)); }, function (err) { return reject(err); }).then(function (resp) {
                if (_this.verificarCarga(queries, 'queryArea'))
                    resolve();
            });
            _this.queryTarjetaObservacion().then(function (resp) { return util_1.asyncLocalStorage.setItem('tarjetasObservacion', JSON.stringify(resp)); }, function (err) { return reject(err); }).then(function (resp) {
                if (_this.verificarCarga(queries, 'queryTarjetaObservacion'))
                    resolve();
            });
            // Queries INSPECCIONES
            _this.querySistemaNivelRiesgo().then(function (resp) { return util_1.asyncLocalStorage.setItem('sistemaNivelRiesgo', JSON.stringify(resp)); }, function (err) { return reject(err); }).then(function (resp) {
                if (_this.verificarCarga(queries, 'querySistemaNivelRiesgo'))
                    resolve();
            });
            var listas = {};
            _this.queryProgramacionList().then(function (resp) {
                util_1.asyncLocalStorage.setItem('programacionList', JSON.stringify(resp));
                resp['data'].forEach(function (prog) {
                    var listId = prog.listaInspeccion_listaInspeccionPK.id + '-' + prog.listaInspeccion_listaInspeccionPK.version;
                    listas['L-INP' + listId] = prog;
                });
                var cont = 0;
                var listIdx = [];
                var _loop_1 = function (idx) {
                    listIdx.push(idx);
                    _this.queryListasInspeccion(listas[idx]).then(function (res) {
                        util_1.asyncLocalStorage.setItem(idx, JSON.stringify(res));
                        cont += 1;
                        if (cont >= Object.keys(listas).length) {
                            if (_this.verificarCarga(queries, 'queryListasInspeccion'))
                                resolve();
                        }
                    }, function (err) { return reject(err); });
                };
                for (var idx in listas) {
                    _loop_1(idx);
                }
                util_1.asyncLocalStorage.setItem('listaInspeccionList', JSON.stringify(listIdx));
            }, function (err) { return reject(err); }).then(function (resp) {
                if (_this.verificarCarga(queries, 'queryProgramacionList'))
                    resolve();
            });
        });
    };
    OfflineService.prototype.verificarCarga = function (ctrlQueries, queriFin) {
        ctrlQueries[queriFin] = true;
        for (var key in ctrlQueries) {
            if (ctrlQueries[key] == false)
                return false;
        }
        this.setOfflineMode(true);
        return true;
    };
    OfflineService.prototype.sincronizar = function () {
        var _this = this;
        this.setOfflineMode(false);
        return new Promise(function (resolve, reject) {
            var msg = {
                tipoMensaje: 'info',
                mensaje: 'Modo online activado',
                detalle: ''
            };
            _this.clearLocalStorage();
            resolve(msg);
        });
    };
    OfflineService.prototype.clearLocalStorage = function () {
        var listInsp = JSON.parse(localStorage.getItem('listaInspeccionList'));
        if (listInsp != null)
            listInsp.forEach(function (list) {
                if (list != null)
                    localStorage.removeItem(list);
            });
        localStorage.removeItem('sistemaNivelRiesgo');
        localStorage.removeItem('programacionList');
        localStorage.removeItem('listaInspeccionList');
        localStorage.removeItem('areas');
        localStorage.removeItem('tarjetasObservacion');
        localStorage.removeItem('sistemaCausaRaiz');
    };
    OfflineService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [area_service_1.AreaService,
            tarjeta_service_1.TarjetaService,
            programacion_service_1.ProgramacionService,
            lista_inspeccion_service_1.ListaInspeccionService,
            sistema_nivel_riesgo_service_1.SistemaNivelRiesgoService,
            sistema_causa_raiz_service_1.SistemaCausaRaizService,
            sesion_service_1.SesionService,
            inspeccion_service_1.InspeccionService,
            directorio_service_1.DirectorioService])
    ], OfflineService);
    return OfflineService;
}());
exports.OfflineService = OfflineService;
//# sourceMappingURL=offline.service.js.map