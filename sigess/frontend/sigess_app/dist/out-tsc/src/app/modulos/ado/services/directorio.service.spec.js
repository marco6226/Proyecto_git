"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var directorio_service_1 = require("./directorio.service");
describe('DirectorioService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [directorio_service_1.DirectorioService]
        });
    });
    it('should be created', testing_1.inject([directorio_service_1.DirectorioService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=directorio.service.spec.js.map