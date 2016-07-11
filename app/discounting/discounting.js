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
            /*
                This Component controls the behavior of all the dashboard: discounting module.
            */
            DiscountingComponent = (function () {
                function DiscountingComponent(discountingService, router, toastr) {
                    this.discountingService = discountingService;
                    this.router = router;
                    this.toastr = toastr;
                }
                /**
                *This function is just like a constructor will initialize all the component elements
                *when discounting in dashboard is clicked.
                *Will go back to the login screen if you try to access this component without logging in.
                **/
                DiscountingComponent.prototype.ngOnInit = function () {
                    this.discounts = new wijmo.collections.ObservableArray();
                    this.discountsView = new wijmo.collections.CollectionView(this.discounts);
                    this.discounts.push({
                        Lock: true
                    });
                    console.log('' + this.discounts.length);
                };
                /*
                    This function will go to discountingAdd.html when clicked
                */
                DiscountingComponent.prototype.onAdd = function () {
                    this.router.navigate(['AddDiscount']);
                };
                /*
                    This function will go back dashboard.html when clicked
                */
                DiscountingComponent.prototype.onClose = function () {
                    this.router.navigate(['Dashboard']);
                };
                //getters
                DiscountingComponent.prototype.getToastr = function () { return this.toastr; };
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