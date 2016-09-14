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
    var StockOutAddComponent;
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
            StockOutAddComponent = (function () {
                function StockOutAddComponent(router, toastr, service) {
                    this.router = router;
                    this.toastr = toastr;
                    this.service = service;
                }
                StockOutAddComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('acceess_token')) {
                    }
                    else {
                    }
                    this.stockOutDate = new wijmo.input.InputDate('#inputDate', {
                        format: 'MM-dd-yyyy',
                        value: new Date()
                    });
                    this.cmbAccount = new wijmo.input.ComboBox('#cmbAccount');
                    this.cmbApprovedBy = new wijmo.input.ComboBox('#cmbApprovedBy');
                    this.cmbCheckedBy = new wijmo.input.ComboBox('#cmbCheckedBy');
                    this.cmbPreparedBy = new wijmo.input.ComboBox('#cmbPreparedBy');
                    this.service.initAccount(this, this.cmbAccount);
                    this.service.initCombobox(this, this.cmbApprovedBy);
                    this.service.initCombobox(this, this.cmbPreparedBy);
                    this.service.initCombobox(this, this.cmbCheckedBy);
                };
                StockOutAddComponent.prototype.onClose = function () {
                    this.router.navigate(['StockOut']);
                    this.addStockOut();
                };
                StockOutAddComponent.prototype.addStockOut = function () {
                    var stockOut = this.createStockOut();
                    if (this.validate(stockOut)) {
                    }
                    else {
                    }
                };
                StockOutAddComponent.prototype.createStockOut = function () {
                    var stockOut = {};
                    return stockOut;
                };
                //validation
                StockOutAddComponent.prototype.validate = function (stockOut) {
                    return true;
                };
                StockOutAddComponent.prototype.validateRemarks = function (remarks) {
                    return true;
                };
                StockOutAddComponent = __decorate([
                    core_1.Component({
                        selector: 'stock-out-add',
                        templateUrl: 'app/stockOut/stockOutAdd.html',
                        directives: [
                            wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate,
                            wjNg2Input.WjComboBox
                        ],
                        providers: [
                            ng2_toastr_1.ToastsManager,
                            stockOutService_1.StockOutService
                        ]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, ng2_toastr_1.ToastsManager, stockOutService_1.StockOutService])
                ], StockOutAddComponent);
                return StockOutAddComponent;
            }());
            exports_1("StockOutAddComponent", StockOutAddComponent);
        }
    }
});
//# sourceMappingURL=stockOutAdd.js.map