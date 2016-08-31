System.register(['angular2/core', 'ng2-toastr/ng2-toastr', 'angular2/router', 'wijmo/wijmo.angular2.grid', 'wijmo/wijmo.angular2.input', './stockInService'], function(exports_1, context_1) {
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
    var core_1, ng2_toastr_1, router_1, wjNg2FlexGrid, wjNg2Input, stockInService_1;
    var StockInComponent;
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
            function (stockInService_1_1) {
                stockInService_1 = stockInService_1_1;
            }],
        execute: function() {
            StockInComponent = (function () {
                function StockInComponent(router, toastr, stockInService) {
                    this.router = router;
                    this.toastr = toastr;
                    this.stockInService = stockInService;
                }
                StockInComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                    }
                    else {
                    }
                    /*Else */
                    this.stockInView = new wijmo.collections.CollectionView();
                    this.stockInView.pageSize = 10;
                    this.stockInService.listStockIn(this);
                };
                StockInComponent.prototype.onAdd = function () {
                    this.router.navigate(['StockInAdd']);
                };
                StockInComponent.prototype.onClose = function () {
                    this.router.navigate(['Dashboard']);
                };
                StockInComponent.prototype.deleteStockIn = function () {
                    this.stockInService.deleteStockIn(this.stockInView.currentItem, this);
                };
                StockInComponent.prototype.first = function () {
                    this.stockInView.moveToFirstPage();
                    this.stockInService.updatePageButtons(this);
                };
                StockInComponent.prototype.next = function () {
                    this.stockInView.moveToNextPage();
                    this.stockInService.updatePageButtons(this);
                };
                StockInComponent.prototype.previous = function () {
                    this.stockInView.moveToPreviousPage();
                    this.stockInService.updatePageButtons(this);
                };
                StockInComponent.prototype.last = function () {
                    this.stockInView.moveToLastPage();
                    this.stockInService.updatePageButtons(this);
                };
                StockInComponent.prototype.setFilters = function () {
                    var inputFilter = document.getElementById('InputFilter');
                    var filterText = '';
                    var collectionView = this.stockInView;
                    var service = this.stockInService;
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
                StockInComponent.prototype.getToastr = function () { return this.toastr; };
                StockInComponent.prototype.getCollectionView = function () { return this.stockInView; };
                StockInComponent = __decorate([
                    core_1.Component({
                        selector: 'stockIn',
                        templateUrl: 'app/stockIn/stockIn.html',
                        directives: [
                            wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate,
                            wjNg2Input.WjComboBox
                        ],
                        providers: [
                            ng2_toastr_1.ToastsManager, stockInService_1.StockInService
                        ]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, ng2_toastr_1.ToastsManager, stockInService_1.StockInService])
                ], StockInComponent);
                return StockInComponent;
            }());
            exports_1("StockInComponent", StockInComponent);
        }
    }
});
//# sourceMappingURL=stockIn.js.map