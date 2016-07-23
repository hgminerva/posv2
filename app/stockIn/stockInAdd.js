System.register(['angular2/core', 'ng2-toastr/ng2-toastr', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, ng2_toastr_1, router_1;
    var StockInAddComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_toastr_1_1) {
                ng2_toastr_1 = ng2_toastr_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            StockInAddComponent = (function () {
                function StockInAddComponent(router, toastr) {
                    this.router = router;
                    this.toastr = toastr;
                }
                StockInAddComponent.prototype.ngOnInit = function () {
                };
                StockInAddComponent.prototype.onClose = function () {
                    this.router.navigate(['Dashboard']);
                };
                StockInAddComponent.prototype.onLock = function () {
                };
                StockInAddComponent.prototype.onUnlock = function () {
                };
                StockInAddComponent.prototype.onPreview = function () {
                };
                StockInAddComponent.prototype.onPrint = function () {
                };
                //getters
                StockInAddComponent.prototype.getToastr = function () { return this.toastr; };
                StockInAddComponent = __decorate([
                    core_1.Component({
                        selector: 'stock-in-add',
                        templateUrl: 'app/stockIn/stockInAdd.html',
                        directives: [],
                        providers: [
                            ng2_toastr_1.ToastsManager
                        ]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, ng2_toastr_1.ToastsManager])
                ], StockInAddComponent);
                return StockInAddComponent;
            }());
            exports_1("StockInAddComponent", StockInAddComponent);
        }
    }
});
//# sourceMappingURL=stockInAdd.js.map