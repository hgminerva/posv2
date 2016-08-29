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
    var ItemComponent;
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
            ItemComponent = (function () {
                function ItemComponent(itemService, _toastr, _router) {
                    this.itemService = itemService;
                    this._toastr = _toastr;
                    this._router = _router;
                }
                ItemComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                    }
                    else {
                    }
                    /*Else*/
                    this.itemsView = new wijmo.collections.CollectionView();
                    this.itemsView.pageSize = 15;
                    this.itemService.listItems(this);
                };
                ItemComponent.prototype.onAdd = function () {
                    this._router.navigate(['AddItem']);
                };
                ItemComponent.prototype.deleteItem = function () {
                    this.itemService.deleteItem(this.itemsView.currentItem, this);
                };
                ItemComponent.prototype.onClose = function () {
                    this._router.navigate(['Dashboard']);
                };
                ItemComponent.prototype.next = function () {
                    if (this.itemsView.pageIndex < this.itemsView.pageCount) {
                        if (document.getElementById('btnBack').hasAttribute('disabled')) {
                            document.getElementById('btnBack').removeAttribute('disabled');
                        }
                        this.itemsView.moveToNextPage();
                    }
                    if (this.itemsView.pageIndex == this.itemsView.pageCount - 1) {
                        document.getElementById('btnNext').setAttribute('disabled', 'disabled');
                    }
                };
                ItemComponent.prototype.back = function () {
                    if (this.itemsView.pageIndex > 0) {
                        if (document.getElementById('btnNext').hasAttribute('disabled')) {
                            document.getElementById('btnNext').removeAttribute('disabled');
                        }
                        this.itemsView.moveToPreviousPage();
                    }
                    if (this.itemsView.pageIndex == 0) {
                        document.getElementById('btnBack').setAttribute('disabled', 'disabled');
                    }
                };
                //getters
                ItemComponent.prototype.getToastr = function () { return this._toastr; };
                ItemComponent.prototype.getCollectionView = function () { return this.itemsView; };
                ItemComponent = __decorate([
                    core_1.Component({
                        selector: 'item',
                        templateUrl: 'app/item/item.html',
                        directives: [
                            wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate,
                            wjNg2Input.WjComboBox
                        ],
                        providers: [
                            itemService_1.ItemService, ng2_toastr_1.ToastsManager
                        ]
                    }), 
                    __metadata('design:paramtypes', [itemService_1.ItemService, ng2_toastr_1.ToastsManager, router_1.Router])
                ], ItemComponent);
                return ItemComponent;
            }());
            exports_1("ItemComponent", ItemComponent);
        }
    }
});
//# sourceMappingURL=item.js.map