System.register(['angular2/core', 'ng2-toastr/ng2-toastr', 'angular2/router', 'wijmo/wijmo.angular2.grid', 'wijmo/wijmo.angular2.input', './customerService', './customerAdd'], function(exports_1, context_1) {
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
    var core_1, ng2_toastr_1, router_1, wjNg2FlexGrid, wjNg2Input, customerService_1, customerAdd_1;
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
            },
            function (customerAdd_1_1) {
                customerAdd_1 = customerAdd_1_1;
            }],
        execute: function() {
            CustomerComponent = (function () {
                function CustomerComponent(toastr, router, customerService) {
                    this.toastr = toastr;
                    this.router = router;
                    this.customerService = customerService;
                }
                CustomerComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                    }
                    else {
                    }
                    /*Else*/
                    this.customerView = new wijmo.collections.CollectionView();
                    this.customerView.pageSize = 10;
                    this.customerService.initCustomers(this);
                };
                CustomerComponent.prototype.onAdd = function () {
                    this.router.navigate(['CustomerAdd']);
                };
                CustomerComponent.prototype.onClose = function () {
                    this.router.navigate(['Dashboard']);
                };
                CustomerComponent.prototype.editCustomer = function () {
                    var data = this.customerView.currentItem;
                    this.router.navigate(['CustomerAdd']);
                    console.log(data);
                };
                CustomerComponent.prototype.deleteCustomer = function () {
                    this.customerService.deleteCustomer(this.customerView.currentItem, this);
                };
                CustomerComponent.prototype.first = function () {
                    this.customerView.moveToFirstPage();
                    this.customerService.updatePageButtons(this);
                };
                CustomerComponent.prototype.next = function () {
                    this.customerView.moveToNextPage();
                    this.customerService.updatePageButtons(this);
                };
                CustomerComponent.prototype.previous = function () {
                    this.customerView.moveToPreviousPage();
                    this.customerService.updatePageButtons(this);
                };
                CustomerComponent.prototype.last = function () {
                    this.customerView.moveToLastPage();
                    this.customerService.updatePageButtons(this);
                };
                CustomerComponent.prototype.setFilters = function () {
                    var inputFilter = document.getElementById('InputFilter');
                    var filterText = '';
                    var collectionView = this.customerView;
                    var service = this.customerService;
                    var component = this;
                    inputFilter.onkeyup = function (e) {
                        filterText = inputFilter.value;
                        collectionView.refresh();
                    };
                    this.customerView.filter = function (item) {
                        return !filterText || (item.ItemCode.toLowerCase().indexOf(filterText.toLowerCase()) > -1);
                    };
                    collectionView.currentChanged.addHandler(function () {
                        service.updatePageButtons(component);
                    });
                    collectionView.collectionChanged.addHandler(function () {
                        service.updatePageButtons(component);
                    });
                };
                //getters
                CustomerComponent.prototype.getToastr = function () { return this.toastr; };
                CustomerComponent.prototype.getCollectionView = function () { return this.customerView; };
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
                            ng2_toastr_1.ToastsManager, customerService_1.CustomerService, customerAdd_1.CustomerAddComponent
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