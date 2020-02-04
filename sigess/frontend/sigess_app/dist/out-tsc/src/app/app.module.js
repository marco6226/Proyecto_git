"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var ngx_1 = require("@ionic-native/splash-screen/ngx");
var ngx_2 = require("@ionic-native/status-bar/ngx");
var ngx_3 = require("@ionic-native/camera/ngx");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var mensaje_usuario_service_1 = require("./modulos/com/services/mensaje-usuario.service");
var sesion_service_1 = require("./modulos/com/services/sesion.service");
var http_1 = require("@angular/common/http");
var comun_module_1 = require("./modulos/com/comun.module");
var auth_service_1 = require("./modulos/com/services/auth.service");
var http_2 = require("@angular/common/http");
var http_auth_interceptor_1 = require("./modulos/com/services/http-auth-interceptor");
var cambio_passwd_service_1 = require("./modulos/com/services/cambio-passwd.service");
var offline_service_1 = require("./modulos/com/services/offline.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            entryComponents: [],
            imports: [
                platform_browser_1.BrowserModule,
                angular_1.IonicModule.forRoot(),
                app_routing_module_1.AppRoutingModule,
                comun_module_1.ComunModule,
                http_1.HttpClientModule
            ],
            providers: [
                mensaje_usuario_service_1.MensajeUsuarioService,
                cambio_passwd_service_1.CambioPasswdService,
                sesion_service_1.SesionService,
                ngx_2.StatusBar,
                ngx_1.SplashScreen,
                ngx_3.Camera,
                auth_service_1.AuthService,
                offline_service_1.OfflineService,
                { provide: router_1.RouteReuseStrategy, useClass: angular_1.IonicRouteStrategy },
                { provide: http_2.HTTP_INTERCEPTORS, useClass: http_auth_interceptor_1.HttpAuthInterceptor, multi: true }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map