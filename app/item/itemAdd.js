System.register(['angular2/core', './itemService', 'ng2-toastr/ng2-toastr', 'angular2/router', 'wijmo/wijmo.angular2.grid', 'wijmo/wijmo.angular2.input'], function(exports_1, context_1) {
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
    var core_1, itemService_1, ng2_toastr_1, router_1, wjNg2FlexGrid, wjNg2Input;
    var ItemAddComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (itemService_1_1) {
                itemService_1 = itemService_1_1;
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
            ItemAddComponent = (function () {
                function ItemAddComponent(router, toastr, itemService) {
                    this.router = router;
                    this.toastr = toastr;
                    this.itemService = itemService;
                }
                /**
                *This function is just like a constructor will initialize all the component elements
                *when discounting in dashboard is clicked.
                *Will go back to the login screen if you try to access this component without logging in.
                **/
                ItemAddComponent.prototype.ngOnInit = function () {
                    var cmb;
                    console.log(cmb);
                    this.itemService.initUnit(cmb);
                };
                /**
                * This function will go back item.html when clicked
                **/
                ItemAddComponent.prototype.onClose = function () {
                    this.router.navigate(['Item']);
                };
                /**
                *This function will disable all of the content of the itemAddTabContent Tab
                **/
                ItemAddComponent.prototype.onLock = function () {
                    document.getElementById('itemAddTabContent').setAttribute('class', 'disable');
                    console.log('disabled');
                };
                /**
                *This function will enable all of the content of the itemAddTabContent Tab
                **/
                ItemAddComponent.prototype.onUnLock = function () {
                    document.getElementById('itemAddTabContent').setAttribute('class', 'enable');
                    console.log('disabled');
                };
                //getters
                ItemAddComponent.prototype.getToastr = function () { return this.toastr; };
                ItemAddComponent = __decorate([
                    core_1.Component({
                        selector: 'itemAdd',
                        templateUrl: 'app/item/itemAdd.html',
                        directives: [
                            wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate,
                            wjNg2Input.WjComboBox,
                        ],
                        providers: [
                            ng2_toastr_1.ToastsManager, itemService_1.ItemService
                        ]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, ng2_toastr_1.ToastsManager, itemService_1.ItemService])
                ], ItemAddComponent);
                return ItemAddComponent;
            }());
            exports_1("ItemAddComponent", ItemAddComponent);
        }
    }
});
//# sourceMappingURL=ItemAdd.js.map