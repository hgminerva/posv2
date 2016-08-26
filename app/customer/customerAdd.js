System.register(['angular2/core', 'ng2-toastr/ng2-toastr', 'angular2/router', 'wijmo/wijmo.angular2.grid', 'wijmo/wijmo.angular2.input', './customerService'], function(exports_1, context_1) {
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
    var core_1, ng2_toastr_1, router_1, wjNg2FlexGrid, wjNg2Input, customerService_1;
    var CustomerAddComponent;
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
            function (customerService_1_1) {
                customerService_1 = customerService_1_1;
            }],
        execute: function() {
            CustomerAddComponent = (function () {
                function CustomerAddComponent(toastr, router, customerService) {
                    this.toastr = toastr;
                    this.router = router;
                    this.customerService = customerService;
                    this.withReward = false;
                }
                CustomerAddComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                    }
                    else {
                    }
                    /*Else*/
                    this.cmbTermSource = new wijmo.collections.ObservableArray();
                    this.cmbAR_AccountSource = new wijmo.collections.ObservableArray();
                    this.cmbDefaultPrice = new wijmo.input.ComboBox('#cmbDefaultPrice');
                    this.initTermCombobox();
                    this.initARCombobox();
                };
                CustomerAddComponent.prototype.onClose = function () {
                    this.addCustomer();
                };
                CustomerAddComponent.prototype.onLock = function () {
                    document.getElementById('customer').setAttribute('disabled', 'disabled');
                    document.getElementById('address').setAttribute('disabled', 'disabled');
                    document.getElementById('contactPerson').setAttribute('disabled', 'disabled');
                    document.getElementById('contactNumber').setAttribute('disabled', 'disabled');
                    document.getElementById('creditLimit').setAttribute('disabled', 'disabled');
                    document.getElementById('cmbTerm').setAttribute('disabled', 'disabled');
                    document.getElementById('tin').setAttribute('disabled', 'disabled');
                    document.getElementById('cmbARAccount').setAttribute('disabled', 'disabled');
                    document.getElementById('withReward').setAttribute('disabled', 'disabled');
                    document.getElementById('rewardCardNumber').setAttribute('disabled', 'disabled');
                    document.getElementById('rewardConversion').setAttribute('disabled', 'disabled');
                    document.getElementById('cmbDefaultPrice').setAttribute('disabled', 'disabled');
                };
                CustomerAddComponent.prototype.onUnlock = function () {
                    document.getElementById('customer').removeAttribute('disabled');
                    document.getElementById('address').removeAttribute('disabled');
                    document.getElementById('contactPerson').removeAttribute('disabled');
                    document.getElementById('contactNumber').removeAttribute('disabled');
                    document.getElementById('creditLimit').removeAttribute('disabled');
                    document.getElementById('cmbTerm').removeAttribute('disabled');
                    document.getElementById('tin').removeAttribute('disabled');
                    document.getElementById('cmbARAccount').removeAttribute('disabled');
                    document.getElementById('withReward').removeAttribute('disabled');
                    document.getElementById('rewardCardNumber').removeAttribute('disabled');
                    document.getElementById('rewardConversion').removeAttribute('disabled');
                    document.getElementById('cmbDefaultPrice').removeAttribute('disabled');
                };
                CustomerAddComponent.prototype.addCustomer = function () {
                    var customer = this.createCustomer();
                    if (this.validate(customer)) {
                        this.customerService.addCustomer(customer, this);
                    }
                    else {
                    }
                };
                //getters
                CustomerAddComponent.prototype.getToastr = function () { return this.toastr; };
                CustomerAddComponent.prototype.getRouter = function () { return this.router; };
                CustomerAddComponent.prototype.initTermCombobox = function () {
                    var i, day = 15;
                    for (i = 1; i < CustomerAddComponent.CMB_TERM_SOURCE_LENGTH; i++) {
                        this.cmbTermSource.push(day + " days");
                        day *= 2;
                    }
                    this.cmbTermSource.push('COD');
                };
                CustomerAddComponent.prototype.initARCombobox = function () {
                    this.cmbAR_AccountSource.push('Account Receviable - Others');
                    this.cmbAR_AccountSource.push('Account Receviable - Sales');
                    this.cmbAR_AccountSource.push('Cash on Hand');
                    this.cmbAR_AccountSource.push('Inventory');
                };
                CustomerAddComponent.prototype.createCustomer = function () {
                    var data = {
                        Customer: this.customer
                    };
                    return data;
                };
                //validation
                CustomerAddComponent.prototype.validate = function (data) {
                    return true;
                };
                CustomerAddComponent.prototype.validateCustomer = function (customer) {
                    return true;
                };
                CustomerAddComponent.prototype.validateAddress = function (address) {
                    return true;
                };
                CustomerAddComponent.prototype.validateContacNumber = function (contactNumber) {
                    return true;
                };
                CustomerAddComponent.prototype.validateContactPerson = function (contactPerson) {
                    return true;
                };
                CustomerAddComponent.prototype.validateTin = function (TIN) {
                    return true;
                };
                CustomerAddComponent.prototype.validateRewardCardNo = function (rewardCardNo) {
                    return true;
                };
                CustomerAddComponent.prototype.validateRewardConversion = function (rewardConversion) {
                    return true;
                };
                CustomerAddComponent.CMB_TERM_SOURCE_LENGTH = 5;
                CustomerAddComponent = __decorate([
                    core_1.Component({
                        selector: 'customer-add',
                        templateUrl: 'app/customer/customerAdd.html',
                        directives: [
                            wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate,
                            wjNg2Input.WjComboBox
                        ],
                        providers: [
                            ng2_toastr_1.ToastsManager, customerService_1.CustomerService
                        ]
                    }), 
                    __metadata('design:paramtypes', [ng2_toastr_1.ToastsManager, router_1.Router, customerService_1.CustomerService])
                ], CustomerAddComponent);
                return CustomerAddComponent;
            }());
            exports_1("CustomerAddComponent", CustomerAddComponent);
        }
    }
});
//# sourceMappingURL=customerAdd.js.map