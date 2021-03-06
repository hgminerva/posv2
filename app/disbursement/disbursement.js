System.register(['angular2/core', 'ng2-toastr/ng2-toastr', 'angular2/router', 'wijmo/wijmo.angular2.grid', 'wijmo/wijmo.angular2.input', './disbursementService'], function(exports_1, context_1) {
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
    var core_1, ng2_toastr_1, router_1, wjNg2FlexGrid, wjNg2Input, disbursementService_1;
    var DisbursementComponent;
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
            function (disbursementService_1_1) {
                disbursementService_1 = disbursementService_1_1;
            }],
        execute: function() {
            DisbursementComponent = (function () {
                function DisbursementComponent(toastr, router, disbursementService) {
                    this.toastr = toastr;
                    this.router = router;
                    this.disbursementService = disbursementService;
                }
                DisbursementComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                    }
                    else {
                    }
                    /*Else*/
                    this.disbursementView = new wijmo.collections.CollectionView();
                    this.disbursementView.pageSize = 10;
                    this.disbursementService.listDisbursement(this);
                };
                DisbursementComponent.prototype.onAdd = function () {
                    this.router.navigate(['DisbursementAdd']);
                };
                DisbursementComponent.prototype.onClose = function () {
                    this.router.navigate(['Dashboard']);
                };
                DisbursementComponent.prototype.deleteDisbursement = function () {
                    this.disbursementService.deleteDisbursement(this.disbursementView.currentItem, this);
                };
                DisbursementComponent.prototype.first = function () {
                    this.disbursementView.moveToFirstPage();
                    this.disbursementService.updatePageButtons(this);
                };
                DisbursementComponent.prototype.next = function () {
                    this.disbursementView.moveToNextPage();
                    this.disbursementService.updatePageButtons(this);
                };
                DisbursementComponent.prototype.previous = function () {
                    this.disbursementView.moveToPreviousPage();
                    this.disbursementService.updatePageButtons(this);
                };
                DisbursementComponent.prototype.last = function () {
                    this.disbursementView.moveToLastPage();
                    this.disbursementService.updatePageButtons(this);
                };
                DisbursementComponent.prototype.setFilters = function () {
                    var inputFilter = document.getElementById('InputFilter');
                    var filterText = '';
                    var collectionView = this.disbursementView;
                    var service = this.disbursementService;
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
                DisbursementComponent.prototype.getToastr = function () { return this.toastr; };
                DisbursementComponent.prototype.getCollectionView = function () { return this.disbursementView; };
                DisbursementComponent = __decorate([
                    core_1.Component({
                        selector: 'disbursement',
                        templateUrl: 'app/disbursement/disbursement.html',
                        directives: [
                            wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate,
                            wjNg2Input.WjComboBox
                        ],
                        providers: [
                            ng2_toastr_1.ToastsManager, disbursementService_1.DisbursementService
                        ]
                    }), 
                    __metadata('design:paramtypes', [ng2_toastr_1.ToastsManager, router_1.Router, disbursementService_1.DisbursementService])
                ], DisbursementComponent);
                return DisbursementComponent;
            }());
            exports_1("DisbursementComponent", DisbursementComponent);
        }
    }
});
//# sourceMappingURL=disbursement.js.map