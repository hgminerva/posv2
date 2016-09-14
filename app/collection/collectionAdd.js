System.register(['angular2/core', 'ng2-toastr/ng2-toastr', 'angular2/router', 'wijmo/wijmo.angular2.grid', 'wijmo/wijmo.angular2.input', './collectionService'], function(exports_1, context_1) {
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
    var core_1, ng2_toastr_1, router_1, wjNg2FlexGrid, wjNg2Input, collectionService_1;
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
            },
            function (collectionService_1_1) {
                collectionService_1 = collectionService_1_1;
            }],
        execute: function() {
            CollectionAddComponent = (function () {
                function CollectionAddComponent(router, toastr, service) {
                    this.router = router;
                    this.toastr = toastr;
                    this.service = service;
                }
                CollectionAddComponent.prototype.ngOnInit = function () {
                    this.collectionDetailSource = new wijmo.collections.ObservableArray();
                    this.collectionDetailView = new wijmo.collections.CollectionView(this.collectionDetailSource);
                    this.cmbCustomer = new wijmo.input.ComboBox('#cmbCustomer');
                    this.cmbApprovedBy = new wijmo.input.ComboBox('#cmbApprovedBy');
                    this.cmbCheckedBy = new wijmo.input.ComboBox('#cmbCheckedBy');
                    this.cmbPreparedBy = new wijmo.input.ComboBox('#cmbPreparedBy');
                    this.cmbSalesNumber = new wijmo.input.ComboBox('#cmbSalesNumber');
                    this.collectionDate = new wijmo.input.InputDate("#collectionDate", {
                        format: "MM/dd/yyyy",
                        value: new Date()
                    });
                    this.service.initCombobox(this, this.cmbApprovedBy);
                    this.service.initCombobox(this, this.cmbPreparedBy);
                    this.service.initCombobox(this, this.cmbCheckedBy);
                    this.collectionDetailSource.push({ Amount: '200' });
                };
                CollectionAddComponent.prototype.onLock = function () {
                    document.getElementById('collectionNumber').setAttribute('disabled', 'disabled');
                    document.getElementById('period').setAttribute('disabled', 'disabled');
                    document.getElementById('manualORNumber').setAttribute('disabled', 'disabled');
                    document.getElementById('cmbCustomer').setAttribute('disabled', 'disabled');
                    document.getElementById('cmbSalesNumber').setAttribute('disabled', 'disabled');
                    document.getElementById('cmbPreparedBy').setAttribute('disabled', 'disabled');
                    document.getElementById('cmbApprovedBy').setAttribute('disabled', 'disabled');
                    document.getElementById('cmbCheckedBy').setAttribute('disabled', 'disabled');
                    document.getElementById('collectionDate').setAttribute('disabled', 'disabled');
                    document.getElementById('remarks').setAttribute('disabled', 'disabled');
                    document.getElementById('flexCollectionDetail').setAttribute('disabled', 'disabled');
                };
                CollectionAddComponent.prototype.onUnlock = function () {
                    document.getElementById('collectionNumber').removeAttribute('disabled');
                    document.getElementById('period').removeAttribute('disabled');
                    document.getElementById('manualORNumber').removeAttribute('disabled');
                    document.getElementById('cmbCustomer').removeAttribute('disabled');
                    document.getElementById('cmbSalesNumber').removeAttribute('disabled');
                    document.getElementById('cmbPreparedBy').removeAttribute('disabled');
                    document.getElementById('cmbApprovedBy').removeAttribute('disabled');
                    document.getElementById('cmbCheckedBy').removeAttribute('disabled');
                    document.getElementById('collectionDate').removeAttribute('disabled');
                    document.getElementById('remarks').removeAttribute('disabled');
                    document.getElementById('flexCollectionDetail').removeAttribute('disabled');
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
                            ng2_toastr_1.ToastsManager,
                            collectionService_1.CollectionService
                        ]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, ng2_toastr_1.ToastsManager, collectionService_1.CollectionService])
                ], CollectionAddComponent);
                return CollectionAddComponent;
            }());
            exports_1("CollectionAddComponent", CollectionAddComponent);
        }
    }
});
//# sourceMappingURL=collectionAdd.js.map