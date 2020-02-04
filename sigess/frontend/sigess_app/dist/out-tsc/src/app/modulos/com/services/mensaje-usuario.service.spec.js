"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var mensaje_usuario_service_1 = require("./mensaje-usuario.service");
describe('MensajeUsuarioService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [mensaje_usuario_service_1.MensajeUsuarioService]
        });
    });
    it('should be created', testing_1.inject([mensaje_usuario_service_1.MensajeUsuarioService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=mensaje-usuario.service.spec.js.map