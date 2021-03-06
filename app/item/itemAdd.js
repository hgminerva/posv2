System.register(['angular2/core', './itemService', 'ng2-toastr/ng2-toastr', 'angular2/router', 'wijmo/wijmo.angular2.grid', 'wijmo/wijmo.angular2.input', './item.directive'], function(exports_1, context_1) {
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
    var core_1, itemService_1, ng2_toastr_1, router_1, wjNg2FlexGrid, wjNg2Input, item_directive_1;
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
            },
            function (item_directive_1_1) {
                item_directive_1 = item_directive_1_1;
            }],
        execute: function() {
            ItemAddComponent = (function () {
                function ItemAddComponent(router, toastr, itemService) {
                    this.router = router;
                    this.toastr = toastr;
                    this.itemService = itemService;
                    this.inventoty = false;
                    this.package = false;
                }
                ItemAddComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                    }
                    else {
                    }
                    /*Else */
                    this.expiryDate = new wijmo.input.InputDate('#expiryDate', {
                        format: 'MM/dd/yyyy',
                        value: new Date()
                    });
                    this.cmbCategory = new wijmo.input.ComboBox('#cmbCategory');
                    this.cmbUnit = new wijmo.input.ComboBox('#cmbUnit');
                    this.cmbDefaultSupplier = new wijmo.input.ComboBox('#cmbDefaultSupplier');
                    this.cmbSalesAccount = new wijmo.input.ComboBox('#cmbSalesAccount');
                    this.cmbAssetAccount = new wijmo.input.ComboBox('#cmbAssetAccount');
                    this.cmbCostAccount = new wijmo.input.ComboBox('#cmbCostAccount');
                    this.cmbPurchase = new wijmo.input.ComboBox('#cmbPurchase');
                    this.cmbSales = new wijmo.input.ComboBox('#cmbSales');
                    this.cmbKitchen = new wijmo.input.ComboBox('#cmbKitchen');
                    this.collectionSrc = new wijmo.collections.ObservableArray();
                    this.collectionItem = new wijmo.collections.CollectionView(this.collectionSrc);
                    this.itemService.initCombobox(this, this.cmbUnit, itemService_1.ItemService.API_UNIT_URL, "Unit", "Id");
                    this.itemService.initCombobox(this, this.cmbPurchase, itemService_1.ItemService.API_TAX_URL, "Tax", "Id");
                    this.itemService.initCombobox(this, this.cmbSales, itemService_1.ItemService.API_TAX_URL, "Tax", "Id");
                    this.itemService.initCombobox(this, this.cmbDefaultSupplier, itemService_1.ItemService.API_URL_SUPPLIER, "Supplier", "Id");
                    this.itemService.initAccounts(this, this.cmbSalesAccount, this.cmbAssetAccount, this.cmbCostAccount);
                    //this.initGrid();
                };
                ItemAddComponent.prototype.onClose = function () {
                    this.addItem();
                    console.log(this.collectionSrc);
                };
                ItemAddComponent.prototype.onLock = function () {
                    document.getElementById('itemAddTabContent').setAttribute('class', 'disable');
                };
                ItemAddComponent.prototype.onUnLock = function () {
                    document.getElementById('itemAddTabContent').setAttribute('class', 'enable');
                };
                ItemAddComponent.prototype.addItem = function () {
                    var item = this.createItem();
                    if (this.validate(item)) {
                        this.itemService.addItem(item, this);
                    }
                    else {
                    }
                };
                ItemAddComponent.prototype.createItem = function () {
                    var item = {};
                    return item;
                };
                ItemAddComponent.prototype.addRow = function () {
                };
                ItemAddComponent.prototype.delete = function () {
                    this.collectionItem.remove(this.collectionItem.currentItem);
                };
                //getters
                ItemAddComponent.prototype.getToastr = function () { return this.toastr; };
                ItemAddComponent.prototype.getRouter = function () { return this.router; };
                ItemAddComponent.prototype.initGrid = function () {
                    var cv = this.collectionItem;
                    this.grid = new wijmo.grid.FlexGrid('#grid', {
                        autoGenerateColumns: false,
                        columns: [
                            {
                                header: " ",
                                binding: "deleteId",
                                width: 70,
                                isContentHtml: true,
                                isReadOnly: true,
                                align: "center"
                            },
                            {
                                header: "Price Description",
                                binding: "priceDescription",
                                width: "5*",
                                dataMap: ['1', '2', '3', '4']
                            },
                            {
                                header: "Price",
                                binding: "price",
                                width: 100,
                                align: "center"
                            },
                            {
                                header: "Trigger Quantity",
                                binding: "quantity",
                                width: 200,
                                align: "center"
                            }
                        ],
                        itemsSource: cv,
                        selectionMode: "Row",
                        allowAddNew: true,
                        allowDelete: true,
                        rowAdded: function (s, e) {
                            var flex = s;
                            if (flex.rows.length > 2) {
                                if (flex.itemsSource.items[flex.rows.length - 3].price == undefined || flex.itemsSource.items[flex.rows.length - 3].quantity == undefined) {
                                    cv.cancelNew();
                                }
                            }
                            // console.log(flex.itemsSource.items);
                        }
                    });
                    //  console.log(this.grid.rows.length);
                };
                //validation
                ItemAddComponent.prototype.validate = function (item) {
                    if (!this.validateBarCode(this.barCode)) {
                        return false;
                    }
                    if (!this.validateItemDescription(this.itemDescription)) {
                        return false;
                    }
                    if (!this.validateAlias(this.alias)) {
                        return false;
                    }
                    if (!this.validateCost(this.cost)) {
                        return false;
                    }
                    if (!this.validateMarkUp(this.markUp)) {
                        return false;
                    }
                    if (!this.validatePrice(this.price)) {
                        return false;
                    }
                    if (!this.validateStockLevelQuantity(this.stockLevelQuantity)) {
                        return false;
                    }
                    if (!this.validateGenericName(this.genericName)) {
                        return false;
                    }
                    return true;
                };
                ItemAddComponent.prototype.validateBarCode = function (barCode) {
                    return true;
                };
                ItemAddComponent.prototype.validateItemDescription = function (itemDescription) {
                    return true;
                };
                ItemAddComponent.prototype.validateAlias = function (alias) {
                    return true;
                };
                ItemAddComponent.prototype.validateCost = function (cost) {
                    return true;
                };
                ItemAddComponent.prototype.validateMarkUp = function (markUp) {
                    return true;
                };
                ItemAddComponent.prototype.validatePrice = function (price) {
                    return true;
                };
                ItemAddComponent.prototype.validateStockLevelQuantity = function (stockLevelQty) {
                    return true;
                };
                ItemAddComponent.prototype.validateGenericName = function (genericName) {
                    return true;
                };
                ItemAddComponent = __decorate([
                    core_1.Component({
                        selector: 'itemAdd',
                        templateUrl: 'app/item/itemAdd.html',
                        directives: [
                            wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate,
                            wjNg2Input.WjComboBox,
                            item_directive_1.myGridDirective
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
//# sourceMappingURL=itemAdd.js.map