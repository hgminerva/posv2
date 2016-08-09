System.register(['angular2/core', './inventoryService', 'ng2-toastr/ng2-toastr', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, inventoryService_1, ng2_toastr_1, router_1;
    var InventoryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (inventoryService_1_1) {
                inventoryService_1 = inventoryService_1_1;
            },
            function (ng2_toastr_1_1) {
                ng2_toastr_1 = ng2_toastr_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            InventoryComponent = (function () {
                function InventoryComponent(_inventoryService, _toastr, _router) {
                    this._inventoryService = _inventoryService;
                    this._toastr = _toastr;
                    this._router = _router;
                }
                InventoryComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                    }
                    else {
                    }
                };
                InventoryComponent.prototype.displayInventory = function () {
                };
                InventoryComponent.prototype.saveInventory = function () {
                };
                InventoryComponent.prototype.editInventory = function () {
                };
                InventoryComponent.prototype.removeInventory = function () {
                };
                //getters
                InventoryComponent.prototype.getToastr = function () { return this._toastr; };
                InventoryComponent = __decorate([
                    core_1.Component({
                        selector: 'inventory',
                        templateUrl: 'app/inventory/inventory.html',
                        providers: [
                            inventoryService_1.InventoryService, ng2_toastr_1.ToastsManager
                        ]
                    }), 
                    __metadata('design:paramtypes', [inventoryService_1.InventoryService, ng2_toastr_1.ToastsManager, router_1.Router])
                ], InventoryComponent);
                return InventoryComponent;
            }());
            exports_1("InventoryComponent", InventoryComponent);
        }
    }
});
//# sourceMappingURL=inventory.js.map