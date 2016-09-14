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
            },
            function (purchaseService_1_1) {
                purchaseService_1 = purchaseService_1_1;
            }],
        execute: function() {
            PurchaseAddComponent = (function () {
                function PurchaseAddComponent(toastr, router, service) {
                    this.toastr = toastr;
                    this.router = router;
                    this.service = service;
                }
                PurchaseAddComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                    }
                    else {
                    }
                    /*Else*/
                    this.purchaseAddSource = new wijmo.collections.ObservableArray();
                    this.purchaseAddView = new wijmo.collections.CollectionView(this.purchaseAddSource);
                    this.inputDate = new wijmo.input.InputDate('#inputDate', {
                        format: 'MM/dd/yyyy',
                        value: new Date()
                    });
                    this.cmbPreparedBy = new wijmo.input.ComboBox('#cmbPreparedBy');
                    this.cmbApprovedBy = new wijmo.input.ComboBox('#cmbApprovedBy');
                    this.cmbCheckedBy = new wijmo.input.ComboBox('#cmbCheckedBy');
                    this.cmbSupplier = new wijmo.input.ComboBox('#cmbSupplier');
                    this.purchaseAddSource.push({ Quantity: 1 });
                    this.service.initCombobox(this, this.cmbSupplier, purchaseService_1.PurchaseService.API_URL_SUPPLIER, 'Supplier', 'Id');
                    this.service.initCombobox(this, this.cmbApprovedBy, purchaseService_1.PurchaseService.API_URL_USER, 'FullName', 'Id');
                    this.service.initCombobox(this, this.cmbPreparedBy, purchaseService_1.PurchaseService.API_URL_USER, 'FullName', 'Id');
                    this.service.initCombobox(this, this.cmbCheckedBy, purchaseService_1.PurchaseService.API_URL_USER, 'FullName', 'Id');
                };
                PurchaseAddComponent.prototype.onLock = function () {
                    document.getElementById('inputDate').setAttribute('disabled', 'disabled');
                    document.getElementById('cmbSupplier').setAttribute('disabled', 'disabled');
                    document.getElementById('remarks').setAttribute('disabled', 'disabled');
                    document.getElementById('cmbCheckedBy').setAttribute('disabled', 'disabled');
                    document.getElementById('cmbApprovedBy').setAttribute('disabled', 'disabled');
                    document.getElementById('flexPurchaseAdd').setAttribute('disabled', 'disabled');
                    document.getElementById('btnDownload').setAttribute('disabled', 'disabled');
                    document.getElementById('btnImportXLS').setAttribute('disabled', 'disabled');
                    document.getElementById('btnExportXLS').setAttribute('disabled', 'disabled');
                };
                PurchaseAddComponent.prototype.onUnlock = function () {
                    document.getElementById('inputDate').removeAttribute('disabled');
                    document.getElementById('cmbSupplier').removeAttribute('disabled');
                    document.getElementById('remarks').removeAttribute('disabled');
                    document.getElementById('cmbCheckedBy').removeAttribute('disabled');
                    document.getElementById('cmbApprovedBy').removeAttribute('disabled');
                    document.getElementById('flexPurchaseAdd').removeAttribute('disabled');
                    document.getElementById('btnDownload').removeAttribute('disabled');
                    document.getElementById('btnImportXLS').removeAttribute('disabled');
                    document.getElementById('btnExportXLS').removeAttribute('disabled');
                };
                PurchaseAddComponent.prototype.onPreview = function () {
                };
                PurchaseAddComponent.prototype.onPrint = function () {
                };
                PurchaseAddComponent.prototype.onClose = function () {
                    this.router.navigate(['Purchases']);
                    this.addPurchase();
                };
                PurchaseAddComponent.prototype.onSelectChange = function () {
                };
                //getters
                PurchaseAddComponent.prototype.getToastr = function () { return this.toastr; };
                PurchaseAddComponent.prototype.addPurchase = function () {
                    var purchase = this.createPurchase();
                    if (this.validate(purchase)) {
                    }
                    else {
                    }
                };
                PurchaseAddComponent.prototype.createPurchase = function () {
                    var purchase = {};
                    return purchase;
                };
                PurchaseAddComponent.prototype.validate = function (purchase) {
                    return true;
                };
                PurchaseAddComponent.prototype.validateRemarks = function (remarks) {
                    return true;
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
                            ng2_toastr_1.ToastsManager,
                            purchaseService_1.PurchaseService
                        ]
                    }), 
                    __metadata('design:paramtypes', [ng2_toastr_1.ToastsManager, router_1.Router, purchaseService_1.PurchaseService])
                ], PurchaseAddComponent);
                return PurchaseAddComponent;
            }());
            exports_1("PurchaseAddComponent", PurchaseAddComponent);
        }
    }
});
//# sourceMappingURL=purchasesAdd.js.map