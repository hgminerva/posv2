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
            },
            function (wjNg2FlexGrid_1) {
                wjNg2FlexGrid = wjNg2FlexGrid_1;
            },
            function (wjNg2Input_1) {
                wjNg2Input = wjNg2Input_1;
            }],
        execute: function() {
            StockInAddComponent = (function () {
                function StockInAddComponent(router, toastr) {
                    this.router = router;
                    this.toastr = toastr;
                    this.return = false;
                }
                StockInAddComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                    }
                    else {
                    }
                    this.stockInDate = new wijmo.input.InputDate('#inputDate', {
                        format: 'MM-dd-yyyy',
                        value: new Date()
                    });
                    this.cmbAuthoritySource = new wijmo.collections.ObservableArray();
                    this.cmbApprovedBy = new wijmo.input.ComboBox('#cmbApprovedBy');
                    this.cmbCheckedBy = new wijmo.input.ComboBox('#cmbCheckedBy');
                    this.cmbPreparedBy = new wijmo.input.ComboBox('#cmbPreparedBy');
                    this.cmbSupplier = new wijmo.input.ComboBox('#cmbSupplier');
                    this.cmbPoNumber = new wijmo.input.ComboBox('#cmbPoNumber');
                    this.cmbDownloadCatergory = new wijmo.input.ComboBox('#cmbDownload');
                };
                StockInAddComponent.prototype.onClose = function () {
                    this.router.navigate(['StockIn']);
                    this.addStockIn();
                };
                StockInAddComponent.prototype.onLock = function () {
                };
                StockInAddComponent.prototype.onUnlock = function () {
                };
                StockInAddComponent.prototype.onPreview = function () {
                };
                StockInAddComponent.prototype.onPrint = function () {
                };
                StockInAddComponent.prototype.enableReturnFields = function () {
                    var chkReturn = document.getElementById('return');
                    var txtReturnOrNo = document.getElementById('returnOrNumber');
                    var txtReturnSales = document.getElementById('returnSalesInvoice');
                    if (chkReturn.checked) {
                        txtReturnOrNo.removeAttribute('disabled');
                        txtReturnSales.removeAttribute('disabled');
                    }
                    else {
                        txtReturnOrNo.setAttribute('disabled', 'disabled');
                        txtReturnSales.setAttribute('disabled', 'disabled');
                    }
                };
                //getters
                StockInAddComponent.prototype.getToastr = function () { return this.toastr; };
                StockInAddComponent.prototype.addStockIn = function () {
                    var stockIn = this.createStockIn();
                    if (this.validate(stockIn)) {
                    }
                    else {
                    }
                };
                StockInAddComponent.prototype.createStockIn = function () {
                    var stockIn = {};
                    return stockIn;
                };
                //validation
                StockInAddComponent.prototype.validate = function (stockIn) {
                    return true;
                };
                StockInAddComponent.prototype.validateRemarks = function (remarks) {
                    return true;
                };
                StockInAddComponent.prototype.validateReturn_OR_NO = function (return_OR_NO) {
                    return true;
                };
                StockInAddComponent.prototype.validateSalesInVoice = function (salesInVoice) {
                    return true;
                };
                StockInAddComponent = __decorate([
                    core_1.Component({
                        selector: 'stock-in-add',
                        templateUrl: 'app/stockIn/stockInAdd.html',
                        directives: [
                            wjNg2Input.WjInputDate,
                            wjNg2Input.WjComboBox,
                            wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate
                        ],
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