System.register(['angular2/core', 'ng2-toastr/ng2-toastr', 'angular2/router', 'wijmo/wijmo.angular2.grid', 'wijmo/wijmo.angular2.input', './purchaseService'], function(exports_1, context_1) {
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
    var core_1, ng2_toastr_1, router_1, wjNg2FlexGrid, wjNg2Input, purchaseService_1;
    var PurchasesComponent;
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
            },
            function (purchaseService_1_1) {
                purchaseService_1 = purchaseService_1_1;
            }],
        execute: function() {
            PurchasesComponent = (function () {
                function PurchasesComponent(toastr, router, purchaseService) {
                    this.toastr = toastr;
                    this.router = router;
                    this.purchaseService = purchaseService;
                }
                PurchasesComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                    }
                    else {
                    }
                    /*Else*/
                    this.purchaseView = new wijmo.collections.CollectionView();
                    this.purchaseView.pageSize = 10;
                    this.purchaseService.listPurchase(this);
                };
                PurchasesComponent.prototype.onAdd = function () {
                    this.router.navigate(['PurchasesAdd']);
                };
                PurchasesComponent.prototype.onClose = function () {
                    this.router.navigate(['Dashboard']);
                };
                PurchasesComponent.prototype.deletePurchase = function () {
                    this.purchaseService.deletePurchase(this.purchaseView.currentItem, this);
                };
                PurchasesComponent.prototype.first = function () {
                    this.purchaseView.moveToFirstPage();
                    this.purchaseService.updatePageButtons(this);
                };
                PurchasesComponent.prototype.next = function () {
                    this.purchaseView.moveToNextPage();
                    this.purchaseService.updatePageButtons(this);
                };
                PurchasesComponent.prototype.previous = function () {
                    this.purchaseView.moveToPreviousPage();
                    this.purchaseService.updatePageButtons(this);
                };
                PurchasesComponent.prototype.last = function () {
                    this.purchaseView.moveToLastPage();
                    this.purchaseService.updatePageButtons(this);
                };
                PurchasesComponent.prototype.setFilters = function () {
                    var inputFilter = document.getElementById('InputFilter');
                    var filterText = '';
                    var collectionView = this.purchaseView;
                    var service = this.purchaseService;
                    var component = this;
                    inputFilter.onkeyup = function (e) {
                        filterText = inputFilter.value;
                        collectionView.refresh();
                    };
                    collectionView.filter = function (item) {
                        return !filterText || (item.ItemCode.toLowerCase().indexOf(filterText.toLowerCase()) > -1);
                    };
                    collectionView.currentChanged.addHandler(function () {
                        service.updatePageButtons(component);
                    });
                    collectionView.collectionChanged.addHandler(function () {
                        service.updatePageButtons(component);
                    });
                };
                //getters
                PurchasesComponent.prototype.getToastr = function () { return this.toastr; };
                PurchasesComponent.prototype.getCollectionView = function () { return this.purchaseView; };
                PurchasesComponent = __decorate([
                    core_1.Component({
                        selector: 'purchases',
                        templateUrl: 'app/purchases/purchases.html',
                        directives: [
                            wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate,
                            wjNg2Input.WjComboBox
                        ],
                        providers: [
                            ng2_toastr_1.ToastsManager, purchaseService_1.PurchaseService
                        ]
                    }), 
                    __metadata('design:paramtypes', [ng2_toastr_1.ToastsManager, router_1.Router, purchaseService_1.PurchaseService])
                ], PurchasesComponent);
                return PurchasesComponent;
            }());
            exports_1("PurchasesComponent", PurchasesComponent);
        }
    }
});
//# sourceMappingURL=purchases.js.map