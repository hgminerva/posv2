System.register(['angular2/core', 'ng2-toastr/ng2-toastr', 'angular2/router', 'wijmo/wijmo.angular2.grid', 'wijmo/wijmo.angular2.input', './stockOutService'], function(exports_1, context_1) {
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
    var core_1, ng2_toastr_1, router_1, wjNg2FlexGrid, wjNg2Input, stockOutService_1;
    var StockOutComponent;
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
            function (stockOutService_1_1) {
                stockOutService_1 = stockOutService_1_1;
            }],
        execute: function() {
            StockOutComponent = (function () {
                function StockOutComponent(router, toastr, stockOutService) {
                    this.router = router;
                    this.toastr = toastr;
                    this.stockOutService = stockOutService;
                }
                StockOutComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                    }
                    else {
                    }
                    /*Else*/
                    this.stockOutView = new wijmo.collections.CollectionView();
                    this.stockOutView.pageSize = 10;
                    this.stockOutService.listStockOut(this);
                };
                StockOutComponent.prototype.onAdd = function () {
                    this.router.navigate(['StockOutAdd']);
                };
                StockOutComponent.prototype.onClose = function () {
                    this.router.navigate(['Dashboard']);
                };
                StockOutComponent.prototype.deleteStockOut = function () {
                    this.stockOutService.deleteStockOut(this.stockOutView.currentItem, this);
                };
                StockOutComponent.prototype.first = function () {
                    this.stockOutView.moveToFirstPage();
                    this.stockOutService.updatePageButtons(this);
                };
                StockOutComponent.prototype.next = function () {
                    this.stockOutView.moveToNextPage();
                    this.stockOutService.updatePageButtons(this);
                };
                StockOutComponent.prototype.previous = function () {
                    this.stockOutView.moveToPreviousPage();
                    this.stockOutService.updatePageButtons(this);
                };
                StockOutComponent.prototype.last = function () {
                    this.stockOutView.moveToLastPage();
                    this.stockOutService.updatePageButtons(this);
                };
                StockOutComponent.prototype.setFilters = function () {
                    var inputFilter = document.getElementById('InputFilter');
                    var filterText = '';
                    var collectionView = this.stockOutView;
                    var service = this.stockOutService;
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
                StockOutComponent.prototype.getToastr = function () { return this.toastr; };
                StockOutComponent.prototype.getCollectionView = function () { return this.stockOutView; };
                StockOutComponent = __decorate([
                    core_1.Component({
                        selector: 'stock-out',
                        templateUrl: 'app/stockOut/stockOut.html',
                        directives: [
                            wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate,
                            wjNg2Input.WjComboBox
                        ],
                        providers: [
                            ng2_toastr_1.ToastsManager, stockOutService_1.StockOutService
                        ]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, ng2_toastr_1.ToastsManager, stockOutService_1.StockOutService])
                ], StockOutComponent);
                return StockOutComponent;
            }());
            exports_1("StockOutComponent", StockOutComponent);
        }
    }
});
//# sourceMappingURL=stockOut.js.map