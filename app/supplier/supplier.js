System.register(['angular2/core', 'ng2-toastr/ng2-toastr', 'angular2/router', 'wijmo/wijmo.angular2.grid', 'wijmo/wijmo.angular2.input', './SupplierService'], function(exports_1, context_1) {
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
    var core_1, ng2_toastr_1, router_1, wjNg2FlexGrid, wjNg2Input, SupplierService_1;
    var SupplierComponent;
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
            function (SupplierService_1_1) {
                SupplierService_1 = SupplierService_1_1;
            }],
        execute: function() {
            SupplierComponent = (function () {
                function SupplierComponent(toastr, router, supplierService) {
                    this.toastr = toastr;
                    this.router = router;
                    this.supplierService = supplierService;
                }
                SupplierComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                    }
                    else {
                    }
                    /*Else*/
                    this.supplierView = new wijmo.collections.CollectionView();
                    this.supplierView.pageSize = 10;
                    this.supplierService.listSuppliers(this);
                };
                SupplierComponent.prototype.onAdd = function () {
                    this.router.navigate(['SupplierAdd']);
                };
                SupplierComponent.prototype.onClose = function () {
                    this.router.navigate(['Dashboard']);
                };
                SupplierComponent.prototype.deleteSupplier = function () {
                    this.supplierService.deleteSupplier(this.supplierView.currentItem, this);
                };
                SupplierComponent.prototype.first = function () {
                    this.supplierView.moveToFirstPage();
                    this.supplierService.updatePageButtons(this);
                };
                SupplierComponent.prototype.next = function () {
                    this.supplierView.moveToNextPage();
                    this.supplierService.updatePageButtons(this);
                };
                SupplierComponent.prototype.previous = function () {
                    this.supplierView.moveToPreviousPage();
                    this.supplierService.updatePageButtons(this);
                };
                SupplierComponent.prototype.last = function () {
                    this.supplierView.moveToLastPage();
                    this.supplierService.updatePageButtons(this);
                };
                SupplierComponent.prototype.setFilters = function () {
                    var inputFilter = document.getElementById('InputFilter');
                    var filterText = '';
                    var collectionView = this.supplierView;
                    var service = this.supplierService;
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
                SupplierComponent.prototype.getToastr = function () { return this.toastr; };
                SupplierComponent.prototype.getCollectionView = function () { return this.supplierView; };
                SupplierComponent = __decorate([
                    core_1.Component({
                        selector: 'supplier',
                        templateUrl: 'app/supplier/supplier.html',
                        directives: [
                            wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate,
                            wjNg2Input.WjComboBox
                        ],
                        providers: [
                            ng2_toastr_1.ToastsManager, SupplierService_1.SupplierService
                        ]
                    }), 
                    __metadata('design:paramtypes', [ng2_toastr_1.ToastsManager, router_1.Router, SupplierService_1.SupplierService])
                ], SupplierComponent);
                return SupplierComponent;
            }());
            exports_1("SupplierComponent", SupplierComponent);
        }
    }
});
//# sourceMappingURL=supplier.js.map