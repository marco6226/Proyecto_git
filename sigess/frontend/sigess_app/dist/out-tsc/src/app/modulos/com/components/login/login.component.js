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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var router_1 = require("@angular/router");
var sesion_service_1 = require("../../services/sesion.service");
var auth_service_1 = require("../../services/auth.service");
var mensaje_usuario_service_1 = require("../../services/mensaje-usuario.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, authService, loadingController, sesionService, msgUsuarioService, router) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.loadingController = loadingController;
        this.sesionService = sesionService;
        this.msgUsuarioService = msgUsuarioService;
        this.router = router;
        this.contadorFallas = 0;
        this.intentosMax = 5;
        this.visible = true;
        this.onLogin = new core_1.EventEmitter();
        this.subscription = this.authService.getLoginObservable().subscribe(function (param) {
            _this.visible = param.visible;
            _this.modal = param.modal;
        });
        this.form = this.formBuilder.group({
            email: ['', forms_1.Validators.required],
            passwd: ['', forms_1.Validators.required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.sesionService.getEmpresa() != null && this.sesionService.getUsuario() != null) {
            this.router.navigate([this.authService.redirectUrl]);
        }
        else {
            var countDown = Number(localStorage.getItem('countDown'));
            if (countDown != null && countDown > 0) {
                this.contadorFallas = 5;
                this.iniciarContador(countDown);
            }
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var loading = this.showLoading();
        this.authService.login(this.form.value.email, this.form.value.passwd, true).then(function (res) {
            _this.visible = false;
            if (_this.modal) {
                _this.authService.onLogin(res);
                loading.then(function (loadPop) { return loadPop.dismiss(); });
            }
            else {
                loading.then(function (loadPop) { return loadPop.dismiss(); }).then(function (resp) { return _this.router.navigate([_this.authService.redirectUrl]); });
            }
            _this.sesionService.emitirEvento('login', true);
        }).catch(function (err) { return loading.then(function (loadPop) { return loadPop.dismiss(); }).then(function (resp) {
            switch (err.status) {
                case 0:
                    _this.msgUsuarioService.showMessage({ tipoMensaje: 'warn', mensaje: 'ERROR DE CONEXIÓN', detalle: 'No se ha podido establecer conexión con el servidor. Por favor verifique que cuenta con conexión a internet.' });
                    break;
                case 403:
                    _this.msgUsuarioService.showMessage({ tipoMensaje: 'warn', mensaje: 'CREDENCIALES INCORRECTAS', detalle: 'El usuario o contraseña especificada no son correctas' });
                    break;
                case 401:
                    _this.msgUsuarioService.showMessage({ tipoMensaje: 'warn', mensaje: 'SESIÓN ACTIVA', detalle: 'Tiene sesiones previas abiertas, por favor cierrelas de manera segura para continuar' });
                    break;
                default:
                    _this.msgUsuarioService.showMessage({ tipoMensaje: 'error', mensaje: 'ERROR', detalle: 'Se ha generado un error no esperado' });
                    break;
            }
            _this.contadorFallas += 1;
            if (_this.contadorFallas >= _this.intentosMax) {
                _this.iniciarContador(new Date().getTime() + (10 * 60 * 1000));
            }
        }); });
    };
    LoginComponent.prototype.showLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Por favor espere...',
                            spinner: 'crescent',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, loading];
                }
            });
        });
    };
    LoginComponent.prototype.iniciarContador = function (countDown) {
        var _this = this;
        localStorage.setItem('countDown', '' + countDown);
        var interval = window.setInterval(function () {
            var now = new Date().getTime();
            var distance = countDown - now;
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            _this.relojText = minutes + "m " + seconds + "s ";
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(interval);
                _this.contadorFallas = 0;
                localStorage.removeItem('countDown');
            }
        }, 1000);
    };
    __decorate([
        core_1.Input("modal"),
        __metadata("design:type", Boolean)
    ], LoginComponent.prototype, "modal", void 0);
    __decorate([
        core_1.Input("visible"),
        __metadata("design:type", Boolean)
    ], LoginComponent.prototype, "visible", void 0);
    __decorate([
        core_1.Output('onLogin'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "onLogin", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'sm-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss'],
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            auth_service_1.AuthService,
            angular_1.LoadingController,
            sesion_service_1.SesionService,
            mensaje_usuario_service_1.MensajeUsuarioService,
            router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map