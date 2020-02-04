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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var usuario_service_1 = require("../../../emp/services/usuario.service");
var password_validator_1 = require("../../validators/password-validator");
var cambio_passwd_service_1 = require("../../services/cambio-passwd.service");
var CambioPasswdComponent = /** @class */ (function () {
    function CambioPasswdComponent(fb, usuarioService, cambioPasswdService) {
        var _this = this;
        this.usuarioService = usuarioService;
        this.cambioPasswdService = cambioPasswdService;
        this.subscription = this.cambioPasswdService.getObservable().subscribe(function (visible) { return _this.visible = visible; });
        this.form = fb.group({
            'oldPasswd': [null, forms_1.Validators.required],
            'newPasswd': [null, [forms_1.Validators.required, password_validator_1.PasswordValidator.validatePassword]],
            'newPasswdConfirm': [null, forms_1.Validators.required]
        });
    }
    CambioPasswdComponent.prototype.ngOnInit = function () {
    };
    CambioPasswdComponent.prototype.onSubmit = function () {
        var _this = this;
        this.usuarioService.cambiarPasswd(this.form.value.newPasswd, this.form.value.newPasswdConfirm, this.form.value.oldPasswd).then(function (resp) {
            _this.form.reset();
            _this.visible = false;
            _this.cambioPasswdService.onSubmit(resp);
        });
    };
    CambioPasswdComponent.prototype.cerrar = function () {
        this.visible = false;
    };
    CambioPasswdComponent = __decorate([
        core_1.Component({
            selector: 'sm-cambioPasswd',
            templateUrl: './cambio-passwd.component.html',
            styleUrls: ['./cambio-passwd.component.scss'],
            providers: [usuario_service_1.UsuarioService]
        }),
        __param(0, core_1.Inject(forms_1.FormBuilder)),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            usuario_service_1.UsuarioService,
            cambio_passwd_service_1.CambioPasswdService])
    ], CambioPasswdComponent);
    return CambioPasswdComponent;
}());
exports.CambioPasswdComponent = CambioPasswdComponent;
//# sourceMappingURL=cambio-passwd.component.js.map