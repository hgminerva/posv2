System.register(['angular2/core', 'ng2-toastr/ng2-toastr', 'angular2/router', 'wijmo/wijmo.angular2.grid', 'wijmo/wijmo.angular2.input'], function(exports_1, context_1) {
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
    var core_1, ng2_toastr_1, router_1, wjNg2FlexGrid, wjNg2Input;
    var PurchaseAddComponent;
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
            },
            function (wjNg2FlexGrid_1) {
                wjNg2FlexGrid = wjNg2FlexGrid_1;
            },
            function (wjNg2Input_1) {
                wjNg2Input = wjNg2Input_1;
            }],
        execute: function() {
            PurchaseAddComponent = (function () {
                function PurchaseAddComponent(toastr, router) {
                    this.toastr = toastr;
                    this.router = router;
                }
                /**
                *This function is just like a constructor will initialize all the component elements
                *when there will be new purchase order.
                *Will go back to the login screen if you try to access this component without logging in.
                **/
                PurchaseAddComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                    }
                    else {
                    }
                    /*Else*/
                    this.purchaseAddSource = new wijmo.collections.ObservableArray();
                    this.purchaseAddView = new wijmo.collections.CollectionView(this.purchaseAddSource);
                    this.cmbSupplierSource = new wijmo.collections.ObservableArray();
                    this.cmbAuthority = new wijmo.collections.ObservableArray();
                    this.theDate = new Date();
                    this.initCmbSupplier();
                    this.initCmbAuthority();
                };
                PurchaseAddComponent.prototype.onLock = function () {
                    document.getElementById('date').setAttribute('disabled', 'disabled');
                };
                PurchaseAddComponent.prototype.onUnlock = function () {
                };
                PurchaseAddComponent.prototype.onPreview = function () {
                };
                PurchaseAddComponent.prototype.onPrint = function () {
                };
                PurchaseAddComponent.prototype.onClose = function () {
                    this.router.navigate(['Purchases']);
                };
                //getters
                PurchaseAddComponent.prototype.getToastr = function () { return this.toastr; };
                PurchaseAddComponent.prototype.initCmbSupplier = function () {
                    this.cmbSupplierSource.push('Return from Customer');
                };
                PurchaseAddComponent.prototype.initCmbAuthority = function () {
                    this.cmbAuthority.push('Administrator');
                    this.cmbAuthority.push('Cashier');
                    this.cmbAuthority.push('Teller');
                };
                PurchaseAddComponent = __decorate([
                    core_1.Component({
                        selector: 'purchase-add',
                        templateUrl: 'app/purchases/purchasesAdd.html',
                        directives: [
                            wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate,
                            wjNg2Input.WjComboBox,
                            wjNg2Input.WjInputDate
                        ],
                        providers: [
                            ng2_toastr_1.ToastsManager
                        ]
                    }), 
                    __metadata('design:paramtypes', [ng2_toastr_1.ToastsManager, router_1.Router])
                ], PurchaseAddComponent);
                return PurchaseAddComponent;
            }());
            exports_1("PurchaseAddComponent", PurchaseAddComponent);
        }
    }
});
//# sourceMappingURL=purchasesAdd.js.map