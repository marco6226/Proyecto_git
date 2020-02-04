"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var empresa_service_1 = require("./empresa.service");
describe('EmpresaService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [empresa_service_1.EmpresaService]
        });
    });
    it('should be created', testing_1.inject([empresa_service_1.EmpresaService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=empresa.service.spec.js.map