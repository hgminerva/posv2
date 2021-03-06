System.register(['angular2/core', 'ng2-toastr/ng2-toastr', 'angular2/router', 'wijmo/wijmo.angular2.grid', 'wijmo/wijmo.angular2.input', './itemGroupService'], function(exports_1, context_1) {
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
    var core_1, ng2_toastr_1, router_1, wjNg2FlexGrid, wjNg2Input, itemGroupService_1;
    var ItemGroupComponent;
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
            function (itemGroupService_1_1) {
                itemGroupService_1 = itemGroupService_1_1;
            }],
        execute: function() {
            ItemGroupComponent = (function () {
                function ItemGroupComponent(toastr, router, itemGroupService) {
                    this.toastr = toastr;
                    this.router = router;
                    this.itemGroupService = itemGroupService;
                }
                ItemGroupComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                    }
                    else {
                    }
                    /*Else */
                    this.itemGroupView = new wijmo.collections.CollectionView();
                    this.itemGroupView.pageSize = 10;
                    this.itemGroupService.listItemGroup(this);
                };
                ItemGroupComponent.prototype.onAdd = function () {
                    this.router.navigate(['ItemGroupAdd']);
                };
                ItemGroupComponent.prototype.onClose = function () {
                    this.router.navigate(['Dashboard']);
                };
                ItemGroupComponent.prototype.deleteItemGroup = function () {
                    this.itemGroupService.deleteItemGroup(this.itemGroupView.currentItem, this);
                };
                ItemGroupComponent.prototype.first = function () {
                    this.itemGroupView.moveToFirstPage();
                    this.itemGroupService.updatePageButtons(this);
                };
                ItemGroupComponent.prototype.next = function () {
                    this.itemGroupView.moveToNextPage();
                    this.itemGroupService.updatePageButtons(this);
                };
                ItemGroupComponent.prototype.previous = function () {
                    this.itemGroupView.moveToPreviousPage();
                    this.itemGroupService.updatePageButtons(this);
                };
                ItemGroupComponent.prototype.last = function () {
                    this.itemGroupView.moveToLastPage();
                    this.itemGroupService.updatePageButtons(this);
                };
                ItemGroupComponent.prototype.setFilters = function () {
                    var inputFilter = document.getElementById('InputFilter');
                    var filterText = '';
                    var collectionView = this.itemGroupView;
                    var service = this.itemGroupService;
                    var component = this;
                    inputFilter.onkeyup = function (e) {
                        filterText = inputFilter.value;
                        collectionView.refresh();
                    };
                    collectionView.filter = function (item) {
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
                ItemGroupComponent.prototype.getToastr = function () { return this.toastr; };
                ItemGroupComponent.prototype.getCollectionView = function () { return this.itemGroupView; };
                ItemGroupComponent = __decorate([
                    core_1.Component({
                        selector: 'itemGroup',
                        templateUrl: 'app/itemGroup/itemGroup.html',
                        directives: [
                            wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate,
                            wjNg2Input.WjComboBox
                        ],
                        providers: [
                            ng2_toastr_1.ToastsManager, itemGroupService_1.ItemGroupService
                        ]
                    }), 
                    __metadata('design:paramtypes', [ng2_toastr_1.ToastsManager, router_1.Router, itemGroupService_1.ItemGroupService])
                ], ItemGroupComponent);
                return ItemGroupComponent;
            }());
            exports_1("ItemGroupComponent", ItemGroupComponent);
        }
    }
});
//# sourceMappingURL=itemGroup.js.map