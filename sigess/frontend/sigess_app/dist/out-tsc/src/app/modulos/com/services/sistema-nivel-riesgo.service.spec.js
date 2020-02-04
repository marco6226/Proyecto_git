"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var sistema_nivel_riesgo_service_1 = require("./sistema-nivel-riesgo.service");
describe('SistemaNivelRiesgoService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [sistema_nivel_riesgo_service_1.SistemaNivelRiesgoService]
        });
    });
    it('should be created', testing_1.inject([sistema_nivel_riesgo_service_1.SistemaNivelRiesgoService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=sistema-nivel-riesgo.service.spec.js.map