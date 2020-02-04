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
var angular_1 = require("@ionic/angular");
var lista_inspeccion_service_1 = require("../../services/lista-inspeccion.service");
var inspeccion_service_1 = require("../../services/inspeccion.service");
var elemento_inspeccion_1 = require("../../entities/elemento-inspeccion");
var calificacion_1 = require("../../entities/calificacion");
var inspeccion_1 = require("../../entities/inspeccion");
var formulario_component_1 = require("../../../com/components/formulario/formulario.component");
var respuesta_campo_1 = require("../../../com/entities/respuesta-campo");
var util_1 = require("../../../com/utils/util");
var tipo_hallazgo_1 = require("../../entities/tipo-hallazgo");
var offline_service_1 = require("../../../com/services/offline.service");
var mensaje_usuario_service_1 = require("../../../com/services/mensaje-usuario.service");
var directorio_service_1 = require("../../../ado/services/directorio.service");
var InspeccionFormComponent = /** @class */ (function () {
    function InspeccionFormComponent(modalController, listaInspeccionService, inspeccionService, offlineService, msgService, dirService) {
        this.modalController = modalController;
        this.listaInspeccionService = listaInspeccionService;
        this.inspeccionService = inspeccionService;
        this.offlineService = offlineService;
        this.msgService = msgService;
        this.dirService = dirService;
        this.numeroPreguntaActual = -1;
        this.indicePreguntas = [];
    }
    InspeccionFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var obj = this.modalController.getTop().then(function (data) {
            _this.programacion = data.componentProps.value;
            _this.offlineService.queryListasInspeccion(_this.programacion).then(function (data) {
                _this.generarFormulario(data['data'][0]);
                _this.indexarElementos(_this.listaInspeccion.elementoInspeccionList);
            });
        });
    };
    InspeccionFormComponent.prototype.indexarElementos = function (list) {
        var _this = this;
        list.forEach(function (element) {
            if (element.elementoInspeccionList == null || element.elementoInspeccionList.length <= 0) {
                _this.indicePreguntas.push(element);
            }
            else {
                _this.indexarElementos(element.elementoInspeccionList);
            }
        });
    };
    InspeccionFormComponent.prototype.generarFormulario = function (listaInspeccion) {
        this.listaInspeccion = listaInspeccion;
    };
    InspeccionFormComponent.prototype.anterior = function () {
        this.numeroPreguntaActual -= 1;
        if (this.numeroPreguntaActual < -1) {
            for (var i = 0; i < this.indicePreguntas.length; i++) {
                var imgKey = this.indicePreguntas[i].calificacion == null ? null : this.indicePreguntas[i].calificacion['img_key'];
                if (imgKey != null)
                    localStorage.removeItem(imgKey);
            }
            this.modalController.dismiss();
            return;
        }
        if (this.numeroPreguntaActual < this.indicePreguntas.length - 1 && this.numeroPreguntaActual >= 0) {
            this.visibleGuardar = false;
            this.asignarElemento();
        }
    };
    InspeccionFormComponent.prototype.siguiente = function () {
        if (this.numeroPreguntaActual == this.indicePreguntas.length - 1) {
            this.visibleGuardar = true;
            return;
        }
        this.numeroPreguntaActual += 1;
        this.asignarElemento();
    };
    InspeccionFormComponent.prototype.asignarElemento = function () {
        this.elementoSelect = this.indicePreguntas[this.numeroPreguntaActual];
        if (this.elementoSelect.calificacion == null) {
            this.elementoSelect.calificacion = new calificacion_1.Calificacion();
            this.elementoSelect.calificacion.elementoInspeccion = new elemento_inspeccion_1.ElementoInspeccion();
            this.elementoSelect.calificacion.elementoInspeccion.id = this.elementoSelect.id;
            this.elementoSelect.calificacion.tipoHallazgo = new tipo_hallazgo_1.TipoHallazgo();
        }
    };
    InspeccionFormComponent.prototype.guardarInspeccion = function () {
        var _this = this;
        if (this.formulario.form.status == 'INVALID') {
            this.numeroPreguntaActual = -1;
            this.visibleGuardar = false;
            alert('No se han completado todos los datos de la inspección');
            return;
        }
        var calificacionList = [];
        for (var i = 0; i < this.indicePreguntas.length; i++) {
            var calf = this.indicePreguntas[i].calificacion;
            if (calf == null || calf.opcionCalificacion == null) {
                this.numeroPreguntaActual = i;
                this.elementoSelect = this.indicePreguntas[this.numeroPreguntaActual];
                this.visibleGuardar = this.numeroPreguntaActual == this.indicePreguntas.length - 1;
                alert('Debe calificar la pregunta faltante');
                return;
            }
            if (calf.nivelRiesgo != null && (calf.recomendacion == null || calf.recomendacion.length <= 0)) {
                this.numeroPreguntaActual = i;
                this.elementoSelect = this.indicePreguntas[this.numeroPreguntaActual];
                this.visibleGuardar = this.numeroPreguntaActual == this.indicePreguntas.length - 1;
                alert('Debe establecer una recomendación según el nivel de riesgo establecido');
                return;
            }
            calificacionList.push(calf);
        }
        var inspeccion = new inspeccion_1.Inspeccion();
        inspeccion.programacion = this.programacion;
        inspeccion.calificacionList = calificacionList;
        inspeccion.respuestasCampoList = [];
        this.listaInspeccion.formulario.campoList.forEach(function (campo) {
            var respCampo = new respuesta_campo_1.RespuestaCampo();
            respCampo.campoId = campo.id;
            if (campo.tipo == 'timestamp' || campo.tipo == 'date') {
                respCampo.valor = new Date(_this.formulario.form.value[campo.nombre]);
            }
            else if (campo.tipo == 'multiple_select' && campo.respuestaCampo.valor != null) {
                respCampo.valor = util_1.Util.arrayAString(';', campo.respuestaCampo.valor);
            }
            else {
                respCampo.valor = _this.formulario.form.value[campo.nombre];
            }
            inspeccion.respuestasCampoList.push(respCampo);
        });
        this.persistirInspeccion(inspeccion).then(function (data) { return _this.manageResponse(data); });
    };
    InspeccionFormComponent.prototype.persistirInspeccion = function (inspeccion) {
        var _this = this;
        if (this.offlineService.getOfflineMode()) {
            return new Promise(function (resolve, reject) {
                var objId = new Date().toISOString();
                inspeccion.fechaRealizada = new Date();
                inspeccion['hash'] = inspeccion.fechaRealizada.toISOString();
                util_1.asyncLocalStorage.setItem(objId, JSON.stringify(inspeccion));
                util_1.asyncLocalStorage.getItem('inspecciones').then(function (data) {
                    var inspecc = data == null ? [] : data;
                    inspecc.push(objId);
                    util_1.asyncLocalStorage.setItem('inspecciones', JSON.stringify(inspecc));
                });
                resolve(inspeccion);
            });
        }
        else {
            return this.inspeccionService.create(inspeccion).then(function (resp) {
                var inp = resp;
                var _loop_1 = function (i) {
                    var calf = inp.calificacionList[i];
                    var imgKey = inspeccion.calificacionList[i]['img_key'];
                    var url = localStorage.getItem(imgKey);
                    if (url != null) {
                        util_1.Util.dataURLtoFile(url, 'img_' + i + '_inp_calf_' + calf.id + '.jpeg').then(function (file) { return _this.dirService.upload(file, null, 'INP', calf.id).then(function (imgResp) { return localStorage.removeItem(imgKey); }); });
                    }
                };
                for (var i = 0; i < inp.calificacionList.length; i++) {
                    _loop_1(i);
                }
            });
        }
    };
    // dataURLtoFile(dataurl: string, filename: string): File {
    //   let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    //     bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    //   while (n--) {
    //     u8arr[n] = bstr.charCodeAt(n);
    //   }
    //   return new File([u8arr], filename, { type: mime });
    // }
    InspeccionFormComponent.prototype.manageResponse = function (inspeccion) {
        var _this = this;
        this.modalController.dismiss(inspeccion).then(function (resp) { return _this.msgService.showMessage({
            tipoMensaje: 'success',
            mensaje: 'INSPECCIÓN REALIZADA',
            detalle: 'Se ha registrado correctamente la inspección'
        }); });
    };
    __decorate([
        core_1.ViewChild('formulario'),
        __metadata("design:type", formulario_component_1.FormularioComponent)
    ], InspeccionFormComponent.prototype, "formulario", void 0);
    InspeccionFormComponent = __decorate([
        core_1.Component({
            selector: 'sm-inspeccionForm',
            templateUrl: './inspeccion-form.component.html',
            styleUrls: ['./inspeccion-form.component.scss'],
            providers: [inspeccion_service_1.InspeccionService]
        }),
        __metadata("design:paramtypes", [angular_1.ModalController,
            lista_inspeccion_service_1.ListaInspeccionService,
            inspeccion_service_1.InspeccionService,
            offline_service_1.OfflineService,
            mensaje_usuario_service_1.MensajeUsuarioService,
            directorio_service_1.DirectorioService])
    ], InspeccionFormComponent);
    return InspeccionFormComponent;
}());
exports.InspeccionFormComponent = InspeccionFormComponent;
//# sourceMappingURL=inspeccion-form.component.js.map