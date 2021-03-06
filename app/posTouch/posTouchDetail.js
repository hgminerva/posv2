System.register(['angular2/core', 'angular2/router', 'wijmo/wijmo.angular2.grid'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, wjNg2FlexGrid;
    var PosTouchDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (wjNg2FlexGrid_1) {
                wjNg2FlexGrid = wjNg2FlexGrid_1;
            }],
        execute: function() {
            PosTouchDetailComponent = (function () {
                function PosTouchDetailComponent(router) {
                    this.router = router;
                }
                PosTouchDetailComponent.prototype.ngOnInit = function () {
                };
                PosTouchDetailComponent = __decorate([
                    core_1.Component({
                        selector: "posTouchDetails",
                        templateUrl: "app/posTouch/posTouchDetail.html",
                        directives: [
                            wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate
                        ]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], PosTouchDetailComponent);
                return PosTouchDetailComponent;
            }());
            exports_1("PosTouchDetailComponent", PosTouchDetailComponent);
        }
    }
});
//# sourceMappingURL=posTouchDetail.js.map