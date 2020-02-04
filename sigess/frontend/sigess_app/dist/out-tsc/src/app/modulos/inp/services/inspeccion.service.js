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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var service_crud_service_1 = require("../../com/services/service-crud.service");
var InspeccionService = /** @class */ (function (_super) {
    __extends(InspeccionService, _super);
    function InspeccionService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // create(entity: Inspeccion) {
    //   let body = JSON.stringify(entity);
    //   return new Promise(resolve => {
    //     this.httpInt.post(this.end_point, body)
    //       .subscribe(
    //         res => {
    //           let inp = <Inspeccion>res;
    //           if (inp.id != null) {
    //           }
    //           resolve(res);
    //         }
    //         ,
    //         err => this.manageError(err)
    //       )
    //   });
    // }
    InspeccionService.prototype.getClassName = function () {
        return "InspeccionService";
    };
    InspeccionService = __decorate([
        core_1.Injectable()
    ], InspeccionService);
    return InspeccionService;
}(service_crud_service_1.ServiceCRUD));
exports.InspeccionService = InspeccionService;
//# sourceMappingURL=inspeccion.service.js.map