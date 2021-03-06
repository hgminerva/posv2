System.register(['angular2/core', 'ng2-toastr/ng2-toastr', 'angular2/router', './collectionService', 'wijmo/wijmo.angular2.grid', 'wijmo/wijmo.angular2.input'], function(exports_1, context_1) {
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
    var core_1, ng2_toastr_1, router_1, collectionService_1, wjNg2FlexGrid, wjNg2Input;
    var CollectionComponent;
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
            function (collectionService_1_1) {
                collectionService_1 = collectionService_1_1;
            },
            function (wjNg2FlexGrid_1) {
                wjNg2FlexGrid = wjNg2FlexGrid_1;
            },
            function (wjNg2Input_1) {
                wjNg2Input = wjNg2Input_1;
            }],
        execute: function() {
            CollectionComponent = (function () {
                function CollectionComponent(collectionService, _toastr, _router) {
                    this.collectionService = collectionService;
                    this._toastr = _toastr;
                    this._router = _router;
                }
                CollectionComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                    }
                    else {
                    }
                    /*Else*/
                    this.collectionView = new wijmo.collections.CollectionView();
                    this.collectionView.pageSize = 10;
                    this.collectionService.listCollection(this);
                };
                CollectionComponent.prototype.onAdd = function () {
                    this._router.navigate(['AddCollection']);
                };
                CollectionComponent.prototype.onClose = function () {
                    this._router.navigate(['Dashboard']);
                };
                CollectionComponent.prototype.deleteCollection = function () {
                    this.collectionService.deleteCollection(this.collectionView.currentItem, this);
                };
                CollectionComponent.prototype.first = function () {
                    this.collectionView.moveToFirstPage();
                    this.collectionService.updatePageButtons(this);
                };
                CollectionComponent.prototype.next = function () {
                    this.collectionView.moveToNextPage();
                    this.collectionService.updatePageButtons(this);
                };
                CollectionComponent.prototype.previous = function () {
                    this.collectionView.moveToPreviousPage();
                    this.collectionService.updatePageButtons(this);
                };
                CollectionComponent.prototype.last = function () {
                    this.collectionView.moveToLastPage();
                    this.collectionService.updatePageButtons(this);
                };
                CollectionComponent.prototype.setFilters = function () {
                    var inputFilter = document.getElementById('InputFilter');
                    var filterText = '';
                    var collectionView = this.collectionView;
                    var service = this.collectionService;
                    var component = this;
                    inputFilter.onkeyup = function (e) {
                        filterText = inputFilter.value;
                        collectionView.refresh();
                    };
                    this.collectionView.filter = function (item) {
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
                CollectionComponent.prototype.getToastr = function () { return this._toastr; };
                CollectionComponent.prototype.getCollectionView = function () { return this.collectionView; };
                CollectionComponent = __decorate([
                    core_1.Component({
                        selector: 'collection',
                        templateUrl: 'app/collection/collection.html',
                        directives: [
                            wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate,
                            wjNg2Input.WjComboBox,
                        ],
                        providers: [
                            collectionService_1.CollectionService, ng2_toastr_1.ToastsManager
                        ]
                    }), 
                    __metadata('design:paramtypes', [collectionService_1.CollectionService, ng2_toastr_1.ToastsManager, router_1.Router])
                ], CollectionComponent);
                return CollectionComponent;
            }());
            exports_1("CollectionComponent", CollectionComponent);
        }
    }
});
//# sourceMappingURL=collection.js.map