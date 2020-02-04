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
var angular_1 = require("@ionic/angular");
var reporte_observacion_page_1 = require("./reporte-observacion.page");
var observacion_form_component_1 = require("../../components/observacion-form/observacion-form.component");
var tree_component_1 = require("../../../com/components/tree/tree.component");
var autocomplete_component_1 = require("../../../com/components/autocomplete/autocomplete.component");
var routes = [
    {
        path: '',
        component: reporte_observacion_page_1.ReporteObservacionPage
    }
];
var ReporteObservacionPageModule = /** @class */ (function () {
    function ReporteObservacionPageModule() {
    }
    ReporteObservacionPageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                angular_1.IonicModule,
                tree_component_1.TreeModule,
                router_1.RouterModule.forChild(routes)
            ],
            entryComponents: [observacion_form_component_1.ObservacionFormComponent],
            declarations: [reporte_observacion_page_1.ReporteObservacionPage, observacion_form_component_1.ObservacionFormComponent, autocomplete_component_1.AutocompleteComponent]
        })
    ], ReporteObservacionPageModule);
    return ReporteObservacionPageModule;
}());
exports.ReporteObservacionPageModule = ReporteObservacionPageModule;
//# sourceMappingURL=reporte-observacion.module.js.map