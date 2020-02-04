"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var programacion_inspecciones_component_1 = require("./programacion-inspecciones.component");
describe('ProgramacionInspeccionesComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [programacion_inspecciones_component_1.ProgramacionInspeccionesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(programacion_inspecciones_component_1.ProgramacionInspeccionesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=programacion-inspecciones.component.spec.js.map