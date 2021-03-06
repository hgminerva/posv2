System.register(['angular2/core', 'ng2-toastr/ng2-toastr', 'angular2/router', 'wijmo/wijmo.angular2.grid', 'wijmo/wijmo.angular2.input'], function(exports_1, context_1) {
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
    var core_1, ng2_toastr_1, router_1, wjNg2FlexGrid, wjNg2Input;
    var ItemGroupAddComponent;
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
            }],
        execute: function() {
            ItemGroupAddComponent = (function () {
                function ItemGroupAddComponent(toastr, router) {
                    this.toastr = toastr;
                    this.router = router;
                    this.gridCombobox = [];
                    //id of cmbKitchen
                    this.id = 0;
                }
                ItemGroupAddComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                    }
                    else {
                    }
                    /*Else*/
                    this.itemGroupAddSource = new wijmo.collections.ObservableArray();
                    this.itemGroupAddView = new wijmo.collections.CollectionView(this.itemGroupAddSource);
                    this.cmbKitchen = new wijmo.input.ComboBox('#cmbKitchen');
                    this.initFlexGrid();
                    // this.cmb = new wijmo.input.ComboBox('#cmbKitchen1', {
                    //     itemsSource : ['asa','asas']
                    // });
                    // this.cmb.showDropDownButton = true;
                    // console.log(this.cmb.selectedItem);
                };
                ItemGroupAddComponent.prototype.onLock = function () {
                    document.getElementById('itemGroup').setAttribute('disabled', 'disabled');
                    document.getElementById('cmbKitchen').setAttribute('disabled', 'disabled');
                    document.getElementById('flexItemGroupAdd').setAttribute('disabled', 'disabled');
                };
                ItemGroupAddComponent.prototype.onUnlock = function () {
                    document.getElementById('itemGroup').removeAttribute('disabled');
                    document.getElementById('cmbKitchen').removeAttribute('disabled');
                    document.getElementById('flexItemGroupAdd').removeAttribute('disabled');
                };
                ItemGroupAddComponent.prototype.onPreview = function () {
                };
                ItemGroupAddComponent.prototype.onPrint = function () {
                    console.log(this.gridCombobox[0].selectedItem);
                };
                ItemGroupAddComponent.prototype.onClose = function () {
                    this.router.navigate(['ItemGroup']);
                    this.addItemGroup();
                };
                //getters
                ItemGroupAddComponent.prototype.getToastr = function () { return this.toastr; };
                ItemGroupAddComponent.prototype.addRow = function () {
                    var cmb;
                    var id = this.id += 1;
                    var gridCombobox = this.gridCombobox;
                    var source = this.itemGroupAddSource;
                    source.push({
                        delete: '<button class="btn btn-danger btn-xs btn-block sharp ">Delete</button>'
                    });
                    this.flexGrid.formatItem.addHandler(function (s, e) {
                        var grid = s;
                    });
                };
                ItemGroupAddComponent.prototype.test = function (grid, r, c, cell) {
                    console.log('test');
                };
                ItemGroupAddComponent.prototype.initFlexGrid = function () {
                    this.flexGrid = new wijmo.grid.FlexGrid('#flexGrid', {
                        autoGenerateColumns: false,
                        selectionMode: "Row",
                        columns: [
                            {
                                header: " ",
                                binding: "delete",
                                width: 70,
                                align: "center",
                                isContentHtml: true,
                                isReadOnly: true
                            },
                            {
                                header: "Item",
                                binding: "item",
                                width: "*",
                                align: "center",
                                isContentHtml: true,
                                isReadOnly: true
                            }
                        ],
                        itemsSource: this.itemGroupAddView
                    });
                };
                ItemGroupAddComponent.prototype.count = function () {
                    console.log(this.itemGroupAddSource.length);
                };
                ItemGroupAddComponent.prototype.addItemGroup = function () {
                    var itemGroup = this.createItemGroup();
                    if (this.validate(itemGroup)) {
                    }
                    else {
                    }
                };
                ItemGroupAddComponent.prototype.createItemGroup = function () {
                    var itemGroup = {};
                    return itemGroup;
                };
                //validation
                ItemGroupAddComponent.prototype.validate = function (itemGroup) {
                    return true;
                };
                ItemGroupAddComponent.prototype.validateItemGroup = function (itemGroup) {
                    return true;
                };
                ItemGroupAddComponent = __decorate([
                    core_1.Component({
                        selector: 'item-group-add',
                        templateUrl: 'app/itemGroup/itemGroupAdd.html',
                        directives: [
                            wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate,
                            wjNg2Input.WjComboBox
                        ],
                        providers: [
                            ng2_toastr_1.ToastsManager
                        ]
                    }), 
                    __metadata('design:paramtypes', [ng2_toastr_1.ToastsManager, router_1.Router])
                ], ItemGroupAddComponent);
                return ItemGroupAddComponent;
            }());
            exports_1("ItemGroupAddComponent", ItemGroupAddComponent);
        }
    }
});
//# sourceMappingURL=itemGroupAdd.js.map