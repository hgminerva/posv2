System.register(['angular2/core', 'ng2-toastr/ng2-toastr', 'angular2/router', './discountingService', 'wijmo/wijmo.angular2.grid', 'wijmo/wijmo.angular2.input'], function(exports_1, context_1) {
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
    var core_1, ng2_toastr_1, router_1, discountingService_1, wjNg2FlexGrid, wjNg2Input;
    var DiscountingComponent;
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
            function (discountingService_1_1) {
                discountingService_1 = discountingService_1_1;
            },
            function (wjNg2FlexGrid_1) {
                wjNg2FlexGrid = wjNg2FlexGrid_1;
            },
            function (wjNg2Input_1) {
                wjNg2Input = wjNg2Input_1;
            }],
        execute: function() {
            DiscountingComponent = (function () {
                function DiscountingComponent(discountingService, router, toastr) {
                    this.discountingService = discountingService;
                    this.router = router;
                    this.toastr = toastr;
                }
                DiscountingComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                    }
                    else {
                    }
                    /*
                    *Else
                    */
                    this.discountSource = new wijmo.collections.ObservableArray();
                    this.discountsView = new wijmo.collections.CollectionView();
                    this.discountsView.pageSize = 15;
                    this.discountingService.listDicount(this);
                    var pageCount = document.getElementById('pageCount');
                    pageCount.innerHTML = this.discountsView.pageIndex + 1 + "/" + (this.discountsView.pageCount + 1);
                };
                DiscountingComponent.prototype.onAdd = function () {
                    this.router.navigate(['AddDiscount']);
                };
                DiscountingComponent.prototype.onClose = function () {
                    this.router.navigate(['Dashboard']);
                };
                DiscountingComponent.prototype.deleteItem = function () {
                    this.discountingService.deleteDiscount(this.discountsView.currentItem, this);
                };
                DiscountingComponent.prototype.next = function () {
                    if (this.discountsView.pageIndex < this.discountsView.pageCount) {
                        if (document.getElementById('btnBack').hasAttribute('disabled')) {
                            document.getElementById('btnBack').removeAttribute('disabled');
                        }
                        this.discountsView.moveToNextPage();
                    }
                    if (this.discountsView.pageIndex == this.discountsView.pageCount - 1) {
                        document.getElementById('btnNext').setAttribute('disabled', 'disabled');
                    }
                };
                DiscountingComponent.prototype.back = function () {
                    if (this.discountsView.pageIndex > 0) {
                        if (document.getElementById('btnNext').hasAttribute('disabled')) {
                            document.getElementById('btnNext').removeAttribute('disabled');
                        }
                        this.discountsView.moveToPreviousPage();
                    }
                    if (this.discountsView.pageIndex == 0) {
                        document.getElementById('btnBack').setAttribute('disabled', 'disabled');
                    }
                };
                //getters
                DiscountingComponent.prototype.getToastr = function () { return this.toastr; };
                ;
                DiscountingComponent.prototype.getCollectionView = function () { return this.discountsView; };
                DiscountingComponent.prototype.getSource = function () { return this.discountSource; };
                DiscountingComponent = __decorate([
                    core_1.Component({
                        selector: 'discounting',
                        templateUrl: 'app/discounting/discounting.html',
                        directives: [
                            wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate,
                            wjNg2Input.WjComboBox,
                        ],
                        providers: [
                            discountingService_1.DiscountingService, ng2_toastr_1.ToastsManager
                        ]
                    }), 
                    __metadata('design:paramtypes', [discountingService_1.DiscountingService, router_1.Router, ng2_toastr_1.ToastsManager])
                ], DiscountingComponent);
                return DiscountingComponent;
            }());
            exports_1("DiscountingComponent", DiscountingComponent);
        }
    }
});
//# sourceMappingURL=discounting.js.map