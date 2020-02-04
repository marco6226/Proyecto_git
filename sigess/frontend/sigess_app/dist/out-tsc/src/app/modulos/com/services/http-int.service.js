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
//import { Http, Response, RequestOptionsArgs, RequestOptions, Headers } from '@angular/http';
var http_1 = require("@angular/common/http");
var sesion_service_1 = require("../services/sesion.service");
var HttpInt = /** @class */ (function () {
    function HttpInt(http, sesionService) {
        this.http = http;
        this.sesionService = sesionService;
    }
    HttpInt.prototype.get = function (url, options) {
        return this.http.get(url, this.getRequestHeaders(options));
    };
    HttpInt.prototype.post = function (url, body, options) {
        return this.http.post(url, body, this.getRequestHeaders(options));
    };
    HttpInt.prototype.postFile = function (url, body, options) {
        options = new http_1.HttpHeaders()
            .set('Param-Emp', (this.sesionService.getEmpresa() == null ? null : this.sesionService.getEmpresa().id));
        return this.http.post(url, body, this.getRequestHeaders(options));
    };
    HttpInt.prototype.put = function (url, body, options) {
        return this.http.put(url, body, this.getRequestHeaders(options));
    };
    HttpInt.prototype.delete = function (url, options) {
        return this.http.delete(url, this.getRequestHeaders(options));
    };
    HttpInt.prototype.getRequestHeaders = function (headers) {
        if (headers == null)
            headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        headers = headers.set('Param-Emp', this.sesionService.getParamEmp()).set('Authorization', this.sesionService.getBearerAuthToken());
        return { 'headers': headers, withCredentials: true, origin: true };
    };
    HttpInt.prototype.getSesionService = function () {
        return this.sesionService;
    };
    HttpInt = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, sesion_service_1.SesionService])
    ], HttpInt);
    return HttpInt;
}());
exports.HttpInt = HttpInt;
//# sourceMappingURL=http-int.service.js.map