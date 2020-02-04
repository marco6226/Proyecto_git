"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Filter = /** @class */ (function () {
    function Filter() {
    }
    return Filter;
}());
exports.Filter = Filter;
var Criteria;
(function (Criteria) {
    Criteria[Criteria["EQUALS"] = 'eq'] = "EQUALS";
    Criteria[Criteria["NOT_EQUALS"] = "ne"] = "NOT_EQUALS";
    Criteria[Criteria["CONTAINS"] = "ct"] = "CONTAINS";
    Criteria[Criteria["NOT_CONTAINS"] = "nc"] = "NOT_CONTAINS";
    Criteria[Criteria["GREATER_THAN"] = "gt"] = "GREATER_THAN";
    Criteria[Criteria["LOWER_THAN"] = "lt"] = "LOWER_THAN";
    Criteria[Criteria["LOWER_EQUALS"] = "le"] = "LOWER_EQUALS";
    Criteria[Criteria["GREATER_EQUALS"] = "ge"] = "GREATER_EQUALS";
    Criteria[Criteria["BETWEEN"] = "bt"] = "BETWEEN";
    Criteria[Criteria["IS_NULL"] = "isn"] = "IS_NULL";
    Criteria[Criteria["IS_NOT_NULL"] = "isnn"] = "IS_NOT_NULL";
    Criteria[Criteria["LIKE"] = "lk"] = "LIKE";
})(Criteria = exports.Criteria || (exports.Criteria = {}));
var LogicOperation;
(function (LogicOperation) {
    LogicOperation[LogicOperation["AND"] = 'and'] = "AND";
    LogicOperation[LogicOperation["OR"] = "or"] = "OR";
})(LogicOperation = exports.LogicOperation || (exports.LogicOperation = {}));
//# sourceMappingURL=filter.js.map