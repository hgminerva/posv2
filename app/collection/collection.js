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
                /**
                *This function is just like a constructor will initialize all the component elements
                *when discounting in dashboard is clicked.
                *Will go back to the login screen if you try to access this component without logging in.
                **/
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
                /*
                    This function will go to discountingAdd.html when clicked
                */
                CollectionComponent.prototype.onAdd = function () {
                    this._router.navigate(['AddCollection']);
                };
                /*
                    This function will go back dashboard.html when clicked
                */
                CollectionComponent.prototype.onClose = function () {
                    this._router.navigate(['Dashboard']);
                };
                CollectionComponent.prototype.next = function () {
                    if (this.collectionView.pageIndex < this.collectionView.pageCount) {
                        if (document.getElementById('btnBack').hasAttribute('disabled')) {
                            document.getElementById('btnBack').removeAttribute('disabled');
                        }
                        this.collectionView.moveToNextPage();
                    }
                    if (this.collectionView.pageIndex == this.collectionView.pageCount - 1) {
                        document.getElementById('btnNext').setAttribute('disabled', 'disabled');
                    }
                    console.log(this.collectionView.sourceCollection[0].Id);
                };
                CollectionComponent.prototype.back = function () {
                    if (this.collectionView.pageIndex < this.collectionView.pageCount) {
                        if (document.getElementById('btnNext').hasAttribute('disabled')) {
                            document.getElementById('btnNext').removeAttribute('disabled');
                        }
                        this.collectionView.moveToPreviousPage();
                    }
                    if (this.collectionView.pageIndex == 0) {
                        document.getElementById('btnBack').setAttribute('disabled', 'disabled');
                    }
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