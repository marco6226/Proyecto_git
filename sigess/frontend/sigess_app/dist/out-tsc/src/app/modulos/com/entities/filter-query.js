"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filter_1 = require("./filter");
var filter_2 = require("./filter");
var FilterQuery = /** @class */ (function () {
    function FilterQuery() {
    }
    FilterQuery.filtersToArray = function (filters) {
        var filterArray = [];
        for (var fieldName in filters) {
            var filter = new filter_1.Filter();
            filter.field = fieldName;
            filter.value1 = filters[fieldName].value;
            switch (filters[fieldName].matchMode) {
                case 'contains':
                default:
                    filter.criteria = filter_2.Criteria.LIKE;
                    filter.value1 = '%' + filters[fieldName].value + '%';
                    break;
            }
            filterArray.push(filter);
        }
        return filterArray;
    };
    FilterQuery.dtoToObject = function (dto) {
        var object = {};
        for (var field in dto) {
            this.recursiveObjectBuild(field, object, field, dto);
        }
        return object;
    };
    FilterQuery.recursiveObjectBuild = function (field, object, field_data, data) {
        if (field.indexOf('_') == -1) {
            object[field] = data[field_data];
        }
        else {
            var parentField = field.substring(0, field.indexOf('_'));
            var childField = field.substring(field.indexOf('_') + 1, field.length);
            object[parentField] = object[parentField] == null ? {} : object[parentField];
            this.recursiveObjectBuild(childField, object[parentField], field_data, data);
        }
    };
    return FilterQuery;
}());
exports.FilterQuery = FilterQuery;
//# sourceMappingURL=filter-query.js.map