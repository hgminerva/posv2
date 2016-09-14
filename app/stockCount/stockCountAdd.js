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
    var StockCountAddComponent;
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
            StockCountAddComponent = (function () {
                function StockCountAddComponent(router, toastr, service) {
                    this.router = router;
                    this.toastr = toastr;
                    this.service = service;
                }
                StockCountAddComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('acceess_token')) {
                    }
                    else {
                    }
                    this.stockOutDate = new wijmo.input.InputDate('#inputDate', {
                        format: 'MM-dd-yyyy',
                        value: new Date()
                    });
                    this.cmbApprovedBy = new wijmo.input.ComboBox('#cmbApprovedBy');
                    this.cmbCheckedBy = new wijmo.input.ComboBox('#cmbCheckedBy');
                    this.cmbPreparedBy = new wijmo.input.ComboBox('#cmbPreparedBy');
                    this.service.initCombobox(this, this.cmbApprovedBy);
                    this.service.initCombobox(this, this.cmbPreparedBy);
                    this.service.initCombobox(this, this.cmbCheckedBy);
                };
                StockCountAddComponent.prototype.onClose = function () {
                    this.router.navigate(['StockOut']);
                };
                StockCountAddComponent.prototype.addStockCount = function () {
                    var stockCount = this.createStockCount();
                    if (this.validate(stockCount)) {
                    }
                    else {
                    }
                };
                StockCountAddComponent.prototype.createStockCount = function () {
                    var stockCount = {};
                    return stockCount;
                };
                //validation
                StockCountAddComponent.prototype.validate = function (stockCount) {
                    return true;
                };
                StockCountAddComponent.prototype.validateRemarks = function (remarks) {
                    return true;
                };
                StockCountAddComponent = __decorate([
                    core_1.Component({
                        selector: 'stock-out-add',
                        templateUrl: 'app/stockCount/stockCountAdd.html',
                        directives: [
                            wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate,
                            wjNg2Input.WjComboBox
                        ],
                        providers: [
                            ng2_toastr_1.ToastsManager,
                            stockCountService_1.StockCountService
                        ]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, ng2_toastr_1.ToastsManager, stockCountService_1.StockCountService])
                ], StockCountAddComponent);
                return StockCountAddComponent;
            }());
            exports_1("StockCountAddComponent", StockCountAddComponent);
        }
    }
});
//# sourceMappingURL=stockCountAdd.js.map