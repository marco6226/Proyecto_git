"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PasswordValidator = /** @class */ (function () {
    function PasswordValidator() {
    }
    PasswordValidator.validatePassword = function (control) {
        if (control.value == null) {
            return { password: 'Campo no puede estar vacio' };
        }
        if (control.value.length < 12) {
            return { password: 'La contraseña debe tener al menos 12 caractéres' };
        }
        if (!control.value.match(PasswordValidator.REGEXP_DIGITO)) {
            return { password: 'La contraseña debe tener al menos un digito numérico' };
        }
        if (!control.value.match(PasswordValidator.REGEXP_MAYUS)) {
            return { password: 'La contraseña debe tener al menos un carácter en mayúscula' };
        }
        if (!control.value.match(PasswordValidator.REGEXP_MINUS)) {
            return { password: 'La contraseña debe tener al menos un carácter en minúscula' };
        }
        if (control.value.match(PasswordValidator.REGEXP_ESPACIO)) {
            return { password: 'La contraseña no puede contener espacios en blanco' };
        }
        if (!control.value.match(PasswordValidator.REGEXP_ESPCHAR)) {
            return { password: 'La contraseña debe tener al menos un caractér especial: @ # $ % ^ & + = _ .' };
        }
        return null;
    };
    PasswordValidator.REGEXP_DIGITO = /.*\d.*/;
    PasswordValidator.REGEXP_MAYUS = /.*[A-Z].*/;
    PasswordValidator.REGEXP_MINUS = /.*[a-z].*/;
    PasswordValidator.REGEXP_ESPACIO = /.*\s.*/;
    PasswordValidator.REGEXP_ESPCHAR = /.*[@#$%^&+=_.].*/;
    return PasswordValidator;
}());
exports.PasswordValidator = PasswordValidator;
//# sourceMappingURL=password-validator.js.map