System.register(['angular2/core', 'ng2-toastr/ng2-toastr', 'angular2/router', 'wijmo/wijmo.angular2.input'], function(exports_1, context_1) {
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
    var core_1, ng2_toastr_1, router_1, wjNg2Input;
    var DisbursementAddComponent;
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
            function (wjNg2Input_1) {
                wjNg2Input = wjNg2Input_1;
            }],
        execute: function() {
            DisbursementAddComponent = (function () {
                function DisbursementAddComponent(toastr, router) {
                    this.toastr = toastr;
                    this.router = router;
                }
                /**
                *This function is just like a constructor will initialize all the component elements
                *when you add a customer.
                *Will go back to the login screen if you try to access this component without logging in.
                **/
                DisbursementAddComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                    }
                    else {
                    }
                    /*Else*/
                    this.cmbTermSource = new wijmo.collections.ObservableArray();
                    this.cmbAR_AccountSource = new wijmo.collections.ObservableArray();
                    this.cmbReturnSource = new wijmo.collections.ObservableArray();
                    this.cmbDefaultPrice = new wijmo.collections.ObservableArray();
                    this.cmbAuthoritySource = new wijmo.collections.ObservableArray();
                    this.cmbTypeSource = new wijmo.collections.ObservableArray();
                    this.disbursementDate = new wijmo.input.InputDate('#disbursementDate', {
                        format: 'MM/dd/yyyy',
                        value: new Date()
                    });
                    this.initTypeCombobox();
                    this.initPayTypeCombobox();
                    this.initReturnComboBox();
                    this.initCmbAuthority();
                    this.initCmbTYpe();
                    this.cmbDefaultPrice.push('');
                };
                DisbursementAddComponent.prototype.onLock = function () {
                    document.getElementById('inputDate').setAttribute('disabled', 'disabled');
                    document.getElementById('cmbSupplier').setAttribute('disabled', 'disabled');
                    document.getElementById('txtRemarks').setAttribute('disabled', 'disabled');
                    document.getElementById('cmbCheckedBy').setAttribute('disabled', 'disabled');
                    document.getElementById('cmbApprovedBy').setAttribute('disabled', 'disabled');
                    document.getElementById('flexPurchaseAdd').setAttribute('disabled', 'disabled');
                    document.getElementById('btnDownload').setAttribute('disabled', 'disabled');
                    document.getElementById('btnImportXLS').setAttribute('disabled', 'disabled');
                    document.getElementById('btnExportXLS').setAttribute('disabled', 'disabled');
                };
                DisbursementAddComponent.prototype.onUnlock = function () {
                    document.getElementById('inputDate').removeAttribute('disabled');
                    document.getElementById('cmbSupplier').removeAttribute('disabled');
                    document.getElementById('txtRemarks').removeAttribute('disabled');
                    document.getElementById('cmbCheckedBy').removeAttribute('disabled');
                    document.getElementById('cmbApprovedBy').removeAttribute('disabled');
                    document.getElementById('flexPurchaseAdd').removeAttribute('disabled');
                    document.getElementById('btnDownload').removeAttribute('disabled');
                    document.getElementById('btnImportXLS').removeAttribute('disabled');
                    document.getElementById('btnExportXLS').removeAttribute('disabled');
                };
                DisbursementAddComponent.prototype.onPreview = function () {
                };
                DisbursementAddComponent.prototype.onPrint = function () {
                };
                /**
                * This function will go back disburement.html when clicked
                **/
                DisbursementAddComponent.prototype.onClose = function () {
                    this.router.navigate(['Disbursement']);
                };
                DisbursementAddComponent.prototype.onReturn = function () {
                    var cmbReturn = document.getElementById('cmbReturn');
                    if (document.getElementById('chkReturn').checked) {
                        cmbReturn.removeAttribute('disabled');
                    }
                    else {
                        cmbReturn.setAttribute('disabled', 'disabled');
                    }
                };
                //getters
                DisbursementAddComponent.prototype.getToastr = function () { return this.toastr; };
                /**
                *This function initializes the  term combobox of customer add page
                **/
                DisbursementAddComponent.prototype.initTypeCombobox = function () {
                };
                /**
                *This function initializes the  AR Account combobox of customer add page
                **/
                DisbursementAddComponent.prototype.initPayTypeCombobox = function () {
                };
                DisbursementAddComponent.prototype.initReturnComboBox = function () {
                    this.cmbReturnSource.push('Test');
                };
                DisbursementAddComponent.prototype.initCmbAuthority = function () {
                    this.cmbAuthoritySource.push('Administrator');
                    this.cmbAuthoritySource.push('Cashier');
                    this.cmbAuthoritySource.push('Teller');
                };
                DisbursementAddComponent.prototype.initCmbTYpe = function () {
                    this.cmbTypeSource.push('Credit');
                    this.cmbTypeSource.push('Debit');
                };
                //validation
                DisbursementAddComponent.prototype.validate = function (disburement) {
                    return true;
                };
                DisbursementAddComponent.CMB_TERM_SOURCE_LENGTH = 5;
                DisbursementAddComponent = __decorate([
                    core_1.Component({
                        selector: 'customer-add',
                        templateUrl: 'app/disbursement/disbursementAdd.html',
                        directives: [
                            wjNg2Input.WjComboBox,
                            wjNg2Input.WjInputDate
                        ],
                        providers: [
                            ng2_toastr_1.ToastsManager
                        ]
                    }), 
                    __metadata('design:paramtypes', [ng2_toastr_1.ToastsManager, router_1.Router])
                ], DisbursementAddComponent);
                return DisbursementAddComponent;
            }());
            exports_1("DisbursementAddComponent", DisbursementAddComponent);
        }
    }
});
//# sourceMappingURL=disbursementAdd.js.map