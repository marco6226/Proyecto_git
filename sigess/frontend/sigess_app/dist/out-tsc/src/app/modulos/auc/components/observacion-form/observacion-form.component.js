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
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var tarjeta_1 = require("../../entities/tarjeta");
var sistema_nivel_riesgo_service_1 = require("../../../com/services/sistema-nivel-riesgo.service");
var sistema_causa_raiz_service_1 = require("../../../sec/services/sistema-causa-raiz.service");
var ngx_1 = require("@ionic-native/camera/ngx");
var observacion_1 = require("../../entities/observacion");
var observacion_service_1 = require("../../services/observacion.service");
var directorio_service_1 = require("../../../ado/services/directorio.service");
var mensaje_usuario_service_1 = require("../../../com/services/mensaje-usuario.service");
var offline_service_1 = require("../../../com/services/offline.service");
var ObservacionFormComponent = /** @class */ (function () {
    function ObservacionFormComponent(mensajeUsuarioService, directorioService, observacionService, camera, 
    // private areaService: AreaService,
    offlineService, sistemaNivelRiesgoService, sistemaCausaRaizService, fb, modalController) {
        this.mensajeUsuarioService = mensajeUsuarioService;
        this.directorioService = directorioService;
        this.observacionService = observacionService;
        this.camera = camera;
        this.offlineService = offlineService;
        this.sistemaNivelRiesgoService = sistemaNivelRiesgoService;
        this.sistemaCausaRaizService = sistemaCausaRaizService;
        this.fb = fb;
        this.modalController = modalController;
        this.imagenes = [];
        this.form = fb.group({
            id: null,
            tipoObservacion: [null, forms_1.Validators.required],
            afecta: null,
            descripcion: [null, forms_1.Validators.required],
            recomendacion: null,
            nivelRiesgo: null,
            causaRaiz: null,
            area: [null, forms_1.Validators.required]
        });
    }
    ObservacionFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.offlineService.queryArea().then(function (resp) { return _this.areasList = resp['data']; });
        this.offlineService.querySistemaNivelRiesgo().then(function (data) { return _this.sistemaNivelRiesgo = data; });
        this.offlineService.querySistemaCausaRaiz().then(function (data) { return _this.sistemaCausaRaiz = data; });
        this.modalController.getTop().then(function (data) {
            _this.tarjeta = data.componentProps.value;
            _this.tarjeta.campos = JSON.parse(_this.tarjeta.campos);
            console.log(_this.tarjeta);
        });
    };
    /*
    onSearchChange(event: any) {
      let fq = new FilterQuery()
      fq.filterList = [{ field: "nombre", value1: '%' + event + '%', criteria: Criteria.LIKE, value2: null }];
      fq.offset = 0;
      fq.rows = 10;
      fq.fieldList = ["id", "nombre"];
      this.areaService.findByFilter(fq).then(
        resp => this.areasList = (<Area[]>resp['data'])
      );
    }
  */
    ObservacionFormComponent.prototype.anterior = function () {
        this.modalController.dismiss();
    };
    ObservacionFormComponent.prototype.getPicture = function () {
        var _this = this;
        var options = {
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000,
            correctOrientation: true,
            quality: 100,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            var image = "data:image/jpeg;base64," + imageData;
            _this.imagenes.push({ source: image });
            _this.imagenes = _this.imagenes.slice();
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    ObservacionFormComponent.prototype.buildList = function (field, tree, list) {
        var _this = this;
        tree.forEach(function (node) {
            if (node[field] != null && node[field].length > 0) {
                _this.buildList(field, node[field], list);
            }
            if (node['selected'] == true) {
                list.push({ id: node.id });
            }
        });
    };
    ObservacionFormComponent.prototype.onSubmit = function () {
    };
    ObservacionFormComponent.prototype.guardarInspeccion = function () {
        var _this = this;
        var observacion = new observacion_1.Observacion();
        observacion.tipoObservacion = this.form.value.tipoObservacion;
        observacion.descripcion = this.form.value.descripcion;
        var implicacionList = [];
        this.buildList('implicacionList', this.tarjeta.implicacionList, implicacionList);
        observacion.implicacionList = implicacionList;
        observacion.area = this.form.value.area;
        observacion.afecta = this.form.value.afecta;
        observacion.recomendacion = this.form.value.recomendacion;
        var causaRaizList = [];
        this.buildList('causaRaizList', this.sistemaCausaRaiz.causaRaizList, causaRaizList);
        observacion.causaRaizList = causaRaizList;
        observacion.nivelRiesgo = this.form.value.nivelRiesgo;
        observacion.tarjeta = new tarjeta_1.Tarjeta();
        observacion.tarjeta.id = this.tarjeta.id;
        this.observacionService.create(observacion).then(function (data) {
            observacion.id = data.id;
            var cod = 1;
            _this.imagenes.forEach(function (img) {
                var file = _this.dataURLtoFile(img.source, 'img_' + cod + '_obs_' + observacion.id + '.jpeg');
                _this.directorioService.upload(file, null, 'AUC', observacion.id);
                cod++;
            });
            _this.mensajeUsuarioService.showMessage({
                mensaje: 'Observación realizada',
                detalle: 'Se ha registrado correctamente la observación',
                tipoMensaje: 'success'
            });
            _this.modalController.dismiss();
        });
    };
    ObservacionFormComponent.prototype.dataURLtoFile = function (dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    };
    ObservacionFormComponent = __decorate([
        core_1.Component({
            selector: 'app-observacion-form',
            templateUrl: './observacion-form.component.html',
            styleUrls: ['./observacion-form.component.scss'],
            providers: [sistema_causa_raiz_service_1.SistemaCausaRaizService, ngx_1.Camera, observacion_service_1.ObservacionService, directorio_service_1.DirectorioService]
        }),
        __metadata("design:paramtypes", [mensaje_usuario_service_1.MensajeUsuarioService,
            directorio_service_1.DirectorioService,
            observacion_service_1.ObservacionService,
            ngx_1.Camera,
            offline_service_1.OfflineService,
            sistema_nivel_riesgo_service_1.SistemaNivelRiesgoService,
            sistema_causa_raiz_service_1.SistemaCausaRaizService,
            forms_1.FormBuilder,
            angular_1.ModalController])
    ], ObservacionFormComponent);
    return ObservacionFormComponent;
}());
exports.ObservacionFormComponent = ObservacionFormComponent;
//# sourceMappingURL=observacion-form.component.js.map