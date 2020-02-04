"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var programacion_service_1 = require("./programacion.service");
describe('ProgramacionService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [programacion_service_1.ProgramacionService]
        });
    });
    it('should be created', testing_1.inject([programacion_service_1.ProgramacionService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=programacion.service.spec.js.map