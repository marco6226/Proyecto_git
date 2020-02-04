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
var common_1 = require("@angular/common");
var TreeComponent = /** @class */ (function () {
    function TreeComponent() {
    }
    TreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._nodes != null) {
            this._nodes.forEach(function (node) {
                node['parent'] = _this._parent;
                node['expanded'] = _this.expanded === true;
            });
        }
    };
    TreeComponent.prototype.toggle = function (node) {
        node['expanded'] = !node['expanded'];
    };
    TreeComponent.prototype.toggleSelect = function (node) {
        if (node['selected'] == null) {
            node['selected'] = false;
        }
        // if (node['childTouched']) {
        //   node['childTouched'] = false;
        // }
        // Check current box selection
        node['selected'] = !node['selected'];
        // // Check all children as its parent
        // if (node[this.field]) {
        //   node[this.field].forEach(child => {
        //     child['selected'] = node['selected'];
        //   });
        // }
        // // Check if any child is check, if is, the parent is marked as touched recursively
        // let touched = false;
        // let parentSelected = true;
        // this._nodes.forEach(n => {
        //   parentSelected = parentSelected && n['selected'];
        //   touched = touched || n['selected'];
        // });
        // //if any child is selected, but not all, then the parent is unselect
        // this._parent['selected'] = parentSelected;
        // if (parentSelected) {
        //   this._parent['childTouched'] = false;
        // } else {
        //   this.touchParent(node, touched);
        // }
    };
    Object.defineProperty(TreeComponent.prototype, "nodes", {
        // touchParent(node: any, touch: boolean) {
        //   let parent = node['parent'];
        //   parent['childTouched'] = touch;
        //   if (parent['parent'] != null) {
        //     this.touchParent(parent, touch);
        //   }
        // }
        get: function () {
            return this._nodes;
        },
        set: function (nodes) {
            this._nodes = nodes;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input("parent"),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "_parent", void 0);
    __decorate([
        core_1.Input("nodes"),
        __metadata("design:type", Array)
    ], TreeComponent.prototype, "_nodes", void 0);
    __decorate([
        core_1.Input("field"),
        __metadata("design:type", String)
    ], TreeComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input("label"),
        __metadata("design:type", String)
    ], TreeComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input("expanded"),
        __metadata("design:type", Boolean)
    ], TreeComponent.prototype, "expanded", void 0);
    TreeComponent = __decorate([
        core_1.Component({
            selector: 'sm-tree',
            templateUrl: './tree.component.html',
            styleUrls: ['./tree.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], TreeComponent);
    return TreeComponent;
}());
exports.TreeComponent = TreeComponent;
var TreeModule = /** @class */ (function () {
    function TreeModule() {
    }
    TreeModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [TreeComponent],
            declarations: [TreeComponent]
        })
    ], TreeModule);
    return TreeModule;
}());
exports.TreeModule = TreeModule;
//# sourceMappingURL=tree.component.js.map