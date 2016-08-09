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
    var CustomerComponent;
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
            CustomerComponent = (function () {
                function CustomerComponent(toastr, router, customerService) {
                    this.toastr = toastr;
                    this.router = router;
                    this.customerService = customerService;
                }
                /**
                *This function is just like a constructor will initialize all the component elements
                *when Customer in dashboard is clicked.
                *Will go back to the login screen if you try to access this component without logging in.
                **/
                CustomerComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                    }
                    else {
                    }
                    /*Else*/
                    this.customerView = new wijmo.collections.CollectionView();
                    this.customerService.initCustomers(this, this.customerView);
                };
                /**
                *This function will go to customerAdd.html when clicked
                **/
                CustomerComponent.prototype.onAdd = function () {
                    this.router.navigate(['CustomerAdd']);
                };
                /**
                *This function will go back dashboard.html when clicked
                **/
                CustomerComponent.prototype.onClose = function () {
                    this.router.navigate(['Dashboard']);
                };
                //getter
                CustomerComponent.prototype.getToastr = function () { return this.toastr; };
                CustomerComponent.prototype.next = function () {
                    this.customerService.displayDataToGrid(this.customerView);
                };
                CustomerComponent.prototype.back = function () {
                };
                CustomerComponent = __decorate([
                    core_1.Component({
                        selector: 'customer',
                        templateUrl: 'app/customer/customer.html',
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
                ], CustomerComponent);
                return CustomerComponent;
            }());
            exports_1("CustomerComponent", CustomerComponent);
        }
    }
});
//# sourceMappingURL=customer.js.map