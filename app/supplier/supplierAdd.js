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
    var SupplierAddComponent;
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
            SupplierAddComponent = (function () {
                function SupplierAddComponent(toastr, router) {
                    this.toastr = toastr;
                    this.router = router;
                }
                SupplierAddComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                    }
                    else {
                    }
                    /*Else*/
                    this.cmbTermSource = new wijmo.collections.ObservableArray();
                    this.cmbAPAccountSource = new wijmo.collections.ObservableArray();
                    this.initTermCombobox();
                    this.initAPAccountCombobox();
                };
                SupplierAddComponent.prototype.onLock = function () {
                    document.getElementById('txtSupplier').setAttribute('disabled', 'disabled');
                    document.getElementById('txtAddress').setAttribute('disabled', 'disabled');
                    document.getElementById('txtTelephone').setAttribute('disabled', 'disabled');
                    document.getElementById('txtCellphone').setAttribute('disabled', 'disabled');
                    document.getElementById('txtFax').setAttribute('disabled', 'disabled');
                    document.getElementById('cmbTerm').setAttribute('disabled', 'disabled');
                    document.getElementById('txtTIN').setAttribute('disabled', 'disabled');
                    document.getElementById('cmbAPAccount').setAttribute('disabled', 'disabled');
                };
                SupplierAddComponent.prototype.onUnlock = function () {
                    document.getElementById('txtSupplier').removeAttribute('disabled');
                    document.getElementById('txtAddress').removeAttribute('disabled');
                    document.getElementById('txtTelephone').removeAttribute('disabled');
                    document.getElementById('txtCellphone').removeAttribute('disabled');
                    document.getElementById('txtFax').removeAttribute('disabled');
                    document.getElementById('cmbTerm').removeAttribute('disabled');
                    document.getElementById('txtTIN').removeAttribute('disabled');
                    document.getElementById('cmbAPAccount').removeAttribute('disabled');
                };
                SupplierAddComponent.prototype.onClose = function () {
                    this.router.navigate(['Supplier']);
                };
                //getters
                SupplierAddComponent.prototype.getToastr = function () { return this.toastr; };
                /**
                *This function initializes the  term combobox of supplier add page
                **/
                SupplierAddComponent.prototype.initTermCombobox = function () {
                    var i, day = 15;
                    for (i = 1; i < SupplierAddComponent.CMB_TERM_LEMGTH; i++) {
                        this.cmbTermSource.push(day + " days");
                        day *= 2;
                    }
                    this.cmbTermSource.push('COD');
                    console.log(this.cmbTermSource.length);
                };
                /**
                *This function initializes the  APAccount combobox of supplier add page
                **/
                SupplierAddComponent.prototype.initAPAccountCombobox = function () {
                    this.cmbAPAccountSource.push('Accounts Payable');
                    this.cmbAPAccountSource.push('Local Tax Payable');
                    this.cmbAPAccountSource.push('VAT Payable-Input');
                    this.cmbAPAccountSource.push('VAT Payable-Output');
                };
                SupplierAddComponent.prototype.addSupplier = function () {
                };
                SupplierAddComponent.prototype.validateUserInput = function () {
                    return true;
                };
                SupplierAddComponent.CMB_TERM_LEMGTH = 5;
                SupplierAddComponent = __decorate([
                    core_1.Component({
                        selector: 'supplier',
                        templateUrl: 'app/supplier/supplierAdd.html',
                        directives: [
                            wjNg2Input.WjComboBox
                        ],
                        providers: [
                            ng2_toastr_1.ToastsManager
                        ]
                    }), 
                    __metadata('design:paramtypes', [ng2_toastr_1.ToastsManager, router_1.Router])
                ], SupplierAddComponent);
                return SupplierAddComponent;
            }());
            exports_1("SupplierAddComponent", SupplierAddComponent);
        }
    }
});
//# sourceMappingURL=supplierAdd.js.map