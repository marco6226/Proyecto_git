"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var angular_1 = require("@ionic/angular");
var http_int_service_1 = require("./services/http-int.service");
var mensaje_usuario_component_1 = require("./components/mensaje-usuario/mensaje-usuario.component");
var formulario_component_1 = require("./components/formulario/formulario.component");
var login_component_1 = require("./components/login/login.component");
var inicio_component_1 = require("./components/inicio/inicio.component");
var cambio_passwd_component_1 = require("./components/cambio-passwd/cambio-passwd.component");
var programacion_service_1 = require("../inp/services/programacion.service");
var inspeccion_service_1 = require("../inp/services/inspeccion.service");
var directorio_service_1 = require("../ado/services/directorio.service");
var area_service_1 = require("../emp/services/area.service");
var sistema_causa_raiz_service_1 = require("../sec/services/sistema-causa-raiz.service");
var tarjeta_service_1 = require("../auc/services/tarjeta.service");
var ComunModule = /** @class */ (function () {
    function ComunModule() {
    }
    ComunModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                forms_1.ReactiveFormsModule
            ],
            exports: [
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                formulario_component_1.FormularioComponent,
                mensaje_usuario_component_1.MensajeUsuarioComponent,
                cambio_passwd_component_1.CambioPasswdComponent,
                login_component_1.LoginComponent
            ],
            declarations: [
                mensaje_usuario_component_1.MensajeUsuarioComponent,
                cambio_passwd_component_1.CambioPasswdComponent,
                formulario_component_1.FormularioComponent,
                login_component_1.LoginComponent,
                inicio_component_1.InicioComponent
            ],
            providers: [
                http_int_service_1.HttpInt,
                programacion_service_1.ProgramacionService,
                inspeccion_service_1.InspeccionService,
                directorio_service_1.DirectorioService,
                area_service_1.AreaService,
                sistema_causa_raiz_service_1.SistemaCausaRaizService,
                tarjeta_service_1.TarjetaService
            ]
        })
    ], ComunModule);
    return ComunModule;
}());
exports.ComunModule = ComunModule;
//# sourceMappingURL=comun.module.js.map