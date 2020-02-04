"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var lista_inspeccion_service_1 = require("./lista-inspeccion.service");
describe('ListaInspeccionService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [lista_inspeccion_service_1.ListaInspeccionService]
        });
    });
    it('should be created', testing_1.inject([lista_inspeccion_service_1.ListaInspeccionService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=lista-inspeccion.service.spec.js.map