"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var http_int_service_1 = require("./http-int.service");
describe('HttpIntService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [http_int_service_1.HttpIntService]
        });
    });
    it('should be created', testing_1.inject([http_int_service_1.HttpIntService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=http-int.service.spec.js.map