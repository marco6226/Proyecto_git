"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var CambioPasswdService = /** @class */ (function () {
    function CambioPasswdService() {
        this.subject = new rxjs_1.Subject();
        this.onSubmitSubject = new rxjs_1.Subject();
    }
    CambioPasswdService.prototype.setVisible = function (visible) {
        this.subject.next(visible);
    };
    CambioPasswdService.prototype.onSubmit = function (resp) {
        this.onSubmitSubject.next(resp);
    };
    CambioPasswdService.prototype.clear = function () {
        this.subject.next();
        this.onSubmitSubject.next();
    };
    CambioPasswdService.prototype.getObservable = function () {
        return this.subject.asObservable();
    };
    CambioPasswdService.prototype.getSubmitObservable = function () {
        return this.onSubmitSubject.asObservable();
    };
    CambioPasswdService = __decorate([
        core_1.Injectable()
    ], CambioPasswdService);
    return CambioPasswdService;
}());
exports.CambioPasswdService = CambioPasswdService;
//# sourceMappingURL=cambio-passwd.service.js.map