"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mensaje_usuario_service_1 = require("../../services/mensaje-usuario.service");
var MensajeUsuarioComponent = /** @class */ (function () {
    function MensajeUsuarioComponent(mensajeUsuarioService) {
        var _this = this;
        this.mensajeUsuarioService = mensajeUsuarioService;
        this.subscription = this.mensajeUsuarioService.getMessage().subscribe(function (message) {
            _this.msg = message;
            _this.backingClass = "visible";
        });
    }
    MensajeUsuarioComponent.prototype.hide = function () {
        this.backingClass = "invisible";
    };
    MensajeUsuarioComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    MensajeUsuarioComponent = __decorate([
        core_1.Component({
            selector: 'sm-mensajeUsuario',
            templateUrl: './mensaje-usuario.component.html',
            styleUrls: ['./mensaje-usuario.component.scss']
        }),
        __metadata("design:paramtypes", [mensaje_usuario_service_1.MensajeUsuarioService])
    ], MensajeUsuarioComponent);
    return MensajeUsuarioComponent;
}());
exports.MensajeUsuarioComponent = MensajeUsuarioComponent;
//# sourceMappingURL=mensaje-usuario.component.js.map