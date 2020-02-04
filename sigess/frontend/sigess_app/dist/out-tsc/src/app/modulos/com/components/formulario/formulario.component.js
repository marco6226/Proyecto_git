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
var forms_1 = require("@angular/forms");
var formulario_1 = require("../../entities/formulario");
var respuesta_campo_1 = require("../../entities/respuesta-campo");
var FormularioComponent = /** @class */ (function () {
    function FormularioComponent(fb) {
        this.fb = fb;
        this.selectorsMap = [];
        this.onValidChange = new core_1.EventEmitter();
        this.onsubmit = new core_1.EventEmitter();
    }
    FormularioComponent.prototype.ngOnInit = function () {
        var _this = this;
        var group = {};
        this.formulario.campoList.forEach(function (campo) {
            if (campo.tipo == 'multiple_select' || campo.tipo == 'single_select') {
                _this.selectorsMap[campo.id] = (campo.tipo == 'single_select' ? [{ label: '--seleccione--', value: null }] : []);
                campo.opciones.forEach(function (opcion) {
                    _this.selectorsMap[campo.id].push({ label: opcion, value: opcion });
                });
            }
            if (campo.respuestaCampo != null) {
                switch (campo.tipo) {
                    case 'timestamp':
                    case 'date':
                        campo.respuestaCampo.valor = campo.respuestaCampo.valor == null ? null : new Date(campo.respuestaCampo.valor);
                        break;
                    case 'multiple_select':
                        campo.respuestaCampo.valor = campo.respuestaCampo.valor == null ? null : (campo.respuestaCampo.valor.split(";"));
                        break;
                    case 'single_select':
                    case 'text':
                    case 'boolean':
                        campo.respuestaCampo.valor = campo.respuestaCampo.valor;
                        break;
                }
            }
            else {
                campo.respuestaCampo = new respuesta_campo_1.RespuestaCampo();
            }
            var formControl = campo.requerido ? new forms_1.FormControl(campo.respuestaCampo.valor, forms_1.Validators.required) : new forms_1.FormControl(campo.respuestaCampo.valor);
            formControl.valueChanges.subscribe(function (data) {
                campo.respuestaCampo.valor = data;
                _this.form.updateValueAndValidity();
                _this.onValidChange.emit(_this.form.valid);
            });
            group[campo.nombre] = formControl;
        });
        this.form = new forms_1.FormGroup(group);
        this.onValidChange.emit(this.form.valid);
    };
    FormularioComponent.prototype.formatearValorFecha = function (event, campo) {
        var valor = event.detail.value;
        var isoDate = (valor.year == null ? '00' : valor.year.text) +
            '-' + (valor.month == null ? '00' : valor.month.value) +
            '-' + (valor.day == null ? '00' : valor.day.text) +
            'T' + (valor.hour == null ? '00' : valor.hour.text) +
            ':' + (valor.minute == null ? '00' : valor.minute.text);
        this.form.controls[campo['nombre']].setValue(new Date(isoDate));
    };
    FormularioComponent.prototype.aceptar = function () {
        this.onsubmit.emit(this.form.value);
    };
    __decorate([
        core_1.Input("formularioModel"),
        __metadata("design:type", formulario_1.Formulario)
    ], FormularioComponent.prototype, "formulario", void 0);
    __decorate([
        core_1.Output("onValidChange"),
        __metadata("design:type", Object)
    ], FormularioComponent.prototype, "onValidChange", void 0);
    __decorate([
        core_1.Output("onsubmit"),
        __metadata("design:type", Object)
    ], FormularioComponent.prototype, "onsubmit", void 0);
    FormularioComponent = __decorate([
        core_1.Component({
            selector: 'sm-formulario',
            templateUrl: './formulario.component.html',
            styleUrls: ['./formulario.component.scss']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], FormularioComponent);
    return FormularioComponent;
}());
exports.FormularioComponent = FormularioComponent;
//# sourceMappingURL=formulario.component.js.map