"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../../../../environments/environment");
var service_crud_service_1 = require("../../com/services/service-crud.service");
var PermisoService = /** @class */ (function (_super) {
    __extends(PermisoService, _super);
    function PermisoService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PermisoService.prototype.findAllByPerfil = function (perfilId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.httpInt.get(environment_1.endPoints.PermisoService + "perfil/" + perfilId)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) { return _this.manageError(err); });
        });
    };
    PermisoService.prototype.getClassName = function () {
        return "PermisoService";
    };
    return PermisoService;
}(service_crud_service_1.ServiceCRUD));
exports.PermisoService = PermisoService;
//# sourceMappingURL=permiso.service.js.map