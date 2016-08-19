System.register(['angular2/core', 'ng2-toastr/ng2-toastr', 'angular2/router', 'wijmo/wijmo.angular2.grid', 'wijmo/wijmo.angular2.input', './stockCountService'], function(exports_1, context_1) {
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
    var core_1, ng2_toastr_1, router_1, wjNg2FlexGrid, wjNg2Input, stockCountService_1;
    var StockCountComponent;
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
            function (stockCountService_1_1) {
                stockCountService_1 = stockCountService_1_1;
            }],
        execute: function() {
            StockCountComponent = (function () {
                function StockCountComponent(router, toastr, stockCountService) {
                    this.router = router;
                    this.toastr = toastr;
                    this.stockCountService = stockCountService;
                }
                StockCountComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                    }
                    else {
                    }
                    /*Else */
                    this.stockCountView = new wijmo.collections.CollectionView();
                    this.stockCountView.pageSize = 10;
                    this.stockCountService.listStockCount(this);
                };
                StockCountComponent.prototype.onAdd = function () {
                    this.router.navigate(['StockCountAdd']);
                };
                StockCountComponent.prototype.onClose = function () {
                    this.router.navigate(['Dashboard']);
                };
                StockCountComponent.prototype.next = function () {
                    if (this.stockCountView.pageIndex < this.stockCountView.pageCount) {
                        if (document.getElementById('btnBack').hasAttribute('disabled')) {
                            document.getElementById('btnBack').removeAttribute('disabled');
                        }
                        this.stockCountView.moveToNextPage();
                    }
                    if (this.stockCountView.pageIndex == this.stockCountView.pageCount - 1) {
                        document.getElementById('btnNext').setAttribute('disabled', 'disabled');
                    }
                    console.log(this.stockCountView.sourceCollection[0].Id);
                };
                StockCountComponent.prototype.back = function () {
                    if (this.stockCountView.pageIndex < this.stockCountView.pageCount) {
                        if (document.getElementById('btnNext').hasAttribute('disabled')) {
                            document.getElementById('btnNext').removeAttribute('disabled');
                        }
                        this.stockCountView.moveToPreviousPage();
                    }
                    if (this.stockCountView.pageIndex == 0) {
                        document.getElementById('btnBack').setAttribute('disabled', 'disabled');
                    }
                };
                //getters
                StockCountComponent.prototype.getToastr = function () { return this.toastr; };
                StockCountComponent.prototype.getCollectionView = function () { return this.stockCountView; };
                StockCountComponent = __decorate([
                    core_1.Component({
                        selector: 'stockCount',
                        templateUrl: 'app/stockCount/stockCount.html',
                        directives: [
                            wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate,
                            wjNg2Input.WjComboBox
                        ],
                        providers: [
                            ng2_toastr_1.ToastsManager, stockCountService_1.StockCountService
                        ]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, ng2_toastr_1.ToastsManager, stockCountService_1.StockCountService])
                ], StockCountComponent);
                return StockCountComponent;
            }());
            exports_1("StockCountComponent", StockCountComponent);
        }
    }
});
//# sourceMappingURL=stockCount.js.map