"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncLocalStorage = {
    setItem: function (key, value) {
        return Promise.resolve().then(function () {
            localStorage.setItem(key, value);
        });
    },
    getItem: function (key) {
        return Promise.resolve().then(function () {
            return JSON.parse(localStorage.getItem(key));
        });
    },
    removeItem: function (key) {
        return Promise.resolve().then(function () {
            localStorage.removeItem(key);
        });
    }
};
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.fechaComponentADate = function (valor) {
        var isoDate = (valor.year == null ? '00' : valor.year.text) +
            '-' + (valor.month == null ? '00' : (valor.month.value < 10 ? '0' + valor.month.value : valor.month.value)) +
            '-' + (valor.day == null ? '00' : valor.day.text) +
            'T' + (valor.hour == null ? '00' : valor.hour.text) +
            ':' + (valor.minute == null ? '00' : valor.minute.text);
        return new Date(isoDate);
    };
    Util.arrayAString = function (separador, array) {
        if (array.length > 0) {
            var valorArray_1 = "";
            array.forEach(function (element) {
                valorArray_1 += element + separador;
            });
            valorArray_1 = valorArray_1.substring(0, valorArray_1.length - 1);
            return valorArray_1;
        }
        else {
            return null;
        }
    };
    Util.dataURLtoFile = function (dataurl, filename) {
        return new Promise(function (resolve, reject) {
            var file = fetch(dataurl).then(function (r) { return r.blob(); }).then(function (blobFile) {
                resolve(new File([blobFile], filename));
            });
        });
    };
    return Util;
}());
exports.Util = Util;
//# sourceMappingURL=util.js.map