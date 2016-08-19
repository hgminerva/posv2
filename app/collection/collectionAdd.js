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
    var CollectionAddComponent;
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
            CollectionAddComponent = (function () {
                function CollectionAddComponent(router, toastr) {
                    this.router = router;
                    this.toastr = toastr;
                }
                CollectionAddComponent.prototype.ngOnInit = function () {
                    this.cmbCustomerSource = new wijmo.collections.ObservableArray();
                    this.cmbSalesNumberSource = new wijmo.collections.ObservableArray();
                    this.cmbAuthoritySource = new wijmo.collections.ObservableArray();
                    this.collectionDetailSource = new wijmo.collections.ObservableArray();
                    this.collectionDetailView = new wijmo.collections.CollectionView(this.collectionDetailSource);
                    this.collectionDate = new wijmo.input.InputDate("#collectionDate", {
                        format: "MM/dd/yyyy",
                        value: new Date()
                    });
                    this.cmbCustomerSource.push('Test');
                    this.cmbSalesNumberSource.push('Test');
                    this.cmbAuthoritySource.push('Test');
                    this.collectionDetailSource.push({ Amount: '200' });
                };
                CollectionAddComponent.prototype.onLock = function () {
                };
                CollectionAddComponent.prototype.onUnlock = function () {
                };
                CollectionAddComponent.prototype.onPreview = function () {
                };
                CollectionAddComponent.prototype.onPrint = function () {
                };
                CollectionAddComponent.prototype.onClose = function () {
                    this.router.navigate(['Dashboard']);
                    this.addCollection();
                };
                CollectionAddComponent.prototype.onSelectChange = function (combobox, source) {
                    var s = source;
                    combobox.selectedIndexChanged.addHandler(function () {
                        s.push({});
                    });
                };
                //getters
                CollectionAddComponent.prototype.getToastr = function () { return this.toastr; };
                CollectionAddComponent.prototype.addCollection = function () {
                    var collection = this.createCollection();
                    if (this.validate(collection)) {
                    }
                    else {
                    }
                };
                CollectionAddComponent.prototype.createCollection = function () {
                    var collection = {};
                    return collection;
                };
                //validation
                CollectionAddComponent.prototype.validate = function (collection) {
                    return true;
                };
                CollectionAddComponent.prototype.validateManualOR = function (manualOR) {
                    return true;
                };
                CollectionAddComponent.prototype.validateRemarks = function (remarks) {
                    return true;
                };
                CollectionAddComponent = __decorate([
                    core_1.Component({
                        selector: 'collection-add',
                        templateUrl: 'app/collection/collectionAdd.html',
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
                    __metadata('design:paramtypes', [router_1.Router, ng2_toastr_1.ToastsManager])
                ], CollectionAddComponent);
                return CollectionAddComponent;
            }());
            exports_1("CollectionAddComponent", CollectionAddComponent);
        }
    }
});
//# sourceMappingURL=collectionAdd.js.map