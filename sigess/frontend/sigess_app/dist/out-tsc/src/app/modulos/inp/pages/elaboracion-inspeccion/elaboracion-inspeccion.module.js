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
var router_1 = require("@angular/router");
var comun_module_1 = require("../../../com/comun.module");
var angular_1 = require("@ionic/angular");
var lista_inspeccion_service_1 = require("../../services/lista-inspeccion.service");
var elaboracion_inspeccion_page_1 = require("./elaboracion-inspeccion.page");
var programacion_inspecciones_component_1 = require("../../components/programacion-inspecciones/programacion-inspecciones.component");
var inspeccion_form_component_1 = require("../../components/inspeccion-form/inspeccion-form.component");
var pregunta_inspeccion_component_1 = require("../../components/pregunta-inspeccion/pregunta-inspeccion.component");
var inspecciones_sync_component_1 = require("../../components/inspecciones-sync/inspecciones-sync.component");
var routes = [
    {
        path: '',
        component: elaboracion_inspeccion_page_1.ElaboracionInspeccionPage
    }
];
var ElaboracionInspeccionPageModule = /** @class */ (function () {
    function ElaboracionInspeccionPageModule() {
    }
    ElaboracionInspeccionPageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                comun_module_1.ComunModule,
                router_1.RouterModule.forChild(routes)
            ],
            providers: [lista_inspeccion_service_1.ListaInspeccionService],
            entryComponents: [inspeccion_form_component_1.InspeccionFormComponent],
            declarations: [
                elaboracion_inspeccion_page_1.ElaboracionInspeccionPage,
                programacion_inspecciones_component_1.ProgramacionInspeccionesComponent,
                inspeccion_form_component_1.InspeccionFormComponent,
                pregunta_inspeccion_component_1.PreguntaInspeccionComponent,
                inspecciones_sync_component_1.InspeccionesSyncComponent
            ]
        })
    ], ElaboracionInspeccionPageModule);
    return ElaboracionInspeccionPageModule;
}());
exports.ElaboracionInspeccionPageModule = ElaboracionInspeccionPageModule;
//# sourceMappingURL=elaboracion-inspeccion.module.js.map