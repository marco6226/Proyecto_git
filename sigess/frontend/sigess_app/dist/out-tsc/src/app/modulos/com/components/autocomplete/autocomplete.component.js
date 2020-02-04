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
var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent() {
        this.size = 10;
        this.minLength = 3;
        this.completeMethod = new core_1.EventEmitter();
    }
    AutocompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*execute a function when someone clicks in the document:*/
        document.addEventListener("click", function (e) {
            _this._options = [];
        });
    };
    AutocompleteComponent.prototype.onSearchChange = function (event) {
        var value = event.target.value;
        if (value.length >= this.minLength)
            this.completeMethod.emit(value);
    };
    AutocompleteComponent.prototype.onSelect = function (opc) {
        this.inputValue = opc[this.field];
    };
    Object.defineProperty(AutocompleteComponent.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (options) {
            this._options = options;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input("options"),
        __metadata("design:type", Object)
    ], AutocompleteComponent.prototype, "_options", void 0);
    __decorate([
        core_1.Input("fieldLabel"),
        __metadata("design:type", String)
    ], AutocompleteComponent.prototype, "fieldLabel", void 0);
    __decorate([
        core_1.Input("field"),
        __metadata("design:type", String)
    ], AutocompleteComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input("size"),
        __metadata("design:type", Number)
    ], AutocompleteComponent.prototype, "size", void 0);
    __decorate([
        core_1.Input("minLength"),
        __metadata("design:type", Number)
    ], AutocompleteComponent.prototype, "minLength", void 0);
    __decorate([
        core_1.Output("completeMethod"),
        __metadata("design:type", Object)
    ], AutocompleteComponent.prototype, "completeMethod", void 0);
    AutocompleteComponent = __decorate([
        core_1.Component({
            selector: 'sm-autocomplete',
            templateUrl: './autocomplete.component.html',
            styleUrls: ['./autocomplete.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], AutocompleteComponent);
    return AutocompleteComponent;
}());
exports.AutocompleteComponent = AutocompleteComponent;
//# sourceMappingURL=autocomplete.component.js.map