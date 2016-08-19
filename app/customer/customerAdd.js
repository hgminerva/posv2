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
                }
                /**
                *This function is just like a constructor will initialize all the component elements
                *when you add a customer.
                *Will go back to the login screen if you try to access this component without logging in.
                **/
                CustomerAddComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                    }
                    else {
                    }
                    /*Else*/
                    this.cmbTermSource = new wijmo.collections.ObservableArray();
                    this.cmbAR_AccountSource = new wijmo.collections.ObservableArray();
                    this.cmbDefaultPrice = new wijmo.collections.ObservableArray();
                    this.initTermCombobox();
                    this.initARCombobox();
                    this.cmbDefaultPrice.push('');
                };
                /**
                * This function will go back customer.html when clicked
                **/
                CustomerAddComponent.prototype.onClose = function () {
                    this.addCustomer();
                };
                /**
                *This function will disable all of the content of the  CustomerAdd
                **/
                CustomerAddComponent.prototype.onLock = function () {
                };
                /**
                *This function will enable all of the content of the CustomerAdd
                **/
                CustomerAddComponent.prototype.onUnlock = function () {
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
                /**
                *This function initializes the  term combobox of customer add page
                **/
                CustomerAddComponent.prototype.initTermCombobox = function () {
                    var i, day = 15;
                    for (i = 1; i < CustomerAddComponent.CMB_TERM_SOURCE_LENGTH; i++) {
                        this.cmbTermSource.push(day + " days");
                        day *= 2;
                    }
                    this.cmbTermSource.push('COD');
                };
                /**
                *This function initializes the  AR Account combobox of customer add page
                **/
                CustomerAddComponent.prototype.initARCombobox = function () {
                    this.cmbAR_AccountSource.push('Account Receviable - Others');
                    this.cmbAR_AccountSource.push('Account Receviable - Sales');
                    this.cmbAR_AccountSource.push('Cash on Hand');
                    this.cmbAR_AccountSource.push('Inventory');
                };
                CustomerAddComponent.prototype.createCustomer = function () {
                    var data = {
                        Customer: document.getElementById('txtCustomer').value,
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