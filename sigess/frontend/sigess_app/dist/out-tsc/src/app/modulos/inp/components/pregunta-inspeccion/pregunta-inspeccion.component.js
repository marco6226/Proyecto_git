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
var elemento_inspeccion_1 = require("../../entities/elemento-inspeccion");
var ngx_1 = require("@ionic-native/camera/ngx");
var offline_service_1 = require("../../../com/services/offline.service");
var PreguntaInspeccionComponent = /** @class */ (function () {
    function PreguntaInspeccionComponent(offlineService, camera) {
        this.offlineService = offlineService;
        this.camera = camera;
    }
    PreguntaInspeccionComponent.prototype.getPicture = function () {
        var _this = this;
        var options = {
            quality: 75,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 960,
            targetHeight: 960,
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            var imgKey = _this.elementoActual.calificacion['img_key'];
            if (imgKey == null) {
                imgKey = new Date().toISOString();
            }
            else {
                localStorage.removeItem(imgKey);
            }
            _this.elementoActual.calificacion['img_key'] = imgKey;
            _this.image = imageData;
            _this.image = window.Ionic.WebView.convertFileSrc(_this.image);
            localStorage.setItem(imgKey, _this.image);
            localStorage.setItem(imgKey, _this.image);
        })
            .catch(function (error) { return console.error(error); });
    };
    // getPicture() {
    //   let options: CameraOptions = {
    //     destinationType: this.camera.DestinationType.DATA_URL,
    //     targetWidth: 1000,
    //     targetHeight: 1000,
    //     correctOrientation: true,
    //     quality: 100
    //   }
    //   this.camera.getPicture(options)
    //     .then(imageData => {
    //       let imgKey = new Date().getMilliseconds().toString();
    //       this.elementoActual.calificacion['img_key'] = imgKey;
    //       this.image = `data:image/jpeg;base64,${imageData}`;
    //       localStorage.setItem(imgKey, this.image);
    //     })
    //     .catch(error => console.error(error));
    // }
    // onArchivoSelect(event) {
    //   let file = event.target.files[0];
    //   if (file.type != "image/jpeg" && file.type != "image/png") {
    //     console.log({ severity: 'error', summary: 'Tipo de archivo no permitido', detail: 'El tipo de archivo permitido debe ser png o jpg' });
    //     return;
    //   }
    //   if (file.size > 500000) {
    //     console.log({ severity: 'error', summary: 'Tamaño máximo superado 500KB', detail: 'La imágen supera el tamaño máximo permitido: ' + file.size });
    //     return;
    //   }
    //   Util.toDataURL(file, res => {
    //     this.image = res;
    //     let imgKey = new Date().getMilliseconds().toString();
    //     this.elementoActual.calificacion['img_key'] = imgKey;
    //     localStorage.setItem(imgKey, this.image);
    //   });
    // }
    PreguntaInspeccionComponent.prototype.ngOnInit = function () {
        var _this = this;
        // -- Consulta niveles de riesgo
        this.offlineService.querySistemaNivelRiesgo().then(function (resp) { return _this.sistNivelRiesgo = resp['data'][0]; });
    };
    Object.defineProperty(PreguntaInspeccionComponent.prototype, "elementoActual", {
        get: function () {
            return this._elementoActual;
        },
        set: function (value) {
            this._elementoActual = value;
            if (value != null && value.calificacion != null)
                this.image = localStorage.getItem(value.calificacion['img_key']);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input('opcionCalificacionList'),
        __metadata("design:type", Array)
    ], PreguntaInspeccionComponent.prototype, "opcionCalificacionList", void 0);
    __decorate([
        core_1.Input('elementoInspeccion'),
        __metadata("design:type", elemento_inspeccion_1.ElementoInspeccion),
        __metadata("design:paramtypes", [elemento_inspeccion_1.ElementoInspeccion])
    ], PreguntaInspeccionComponent.prototype, "elementoActual", null);
    PreguntaInspeccionComponent = __decorate([
        core_1.Component({
            selector: 'sm-preguntaInspeccion',
            templateUrl: './pregunta-inspeccion.component.html',
            styleUrls: ['./pregunta-inspeccion.component.scss'],
            providers: [ngx_1.Camera]
        }),
        __metadata("design:paramtypes", [offline_service_1.OfflineService,
            ngx_1.Camera])
    ], PreguntaInspeccionComponent);
    return PreguntaInspeccionComponent;
}());
exports.PreguntaInspeccionComponent = PreguntaInspeccionComponent;
//# sourceMappingURL=pregunta-inspeccion.component.js.map