System.register(['angular2/core', 'ng2-toastr/ng2-toastr', 'angular2/router', './usersService', 'wijmo/wijmo.angular2.grid', 'wijmo/wijmo.angular2.input'], function(exports_1, context_1) {
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
    var core_1, ng2_toastr_1, router_1, usersService_1, wjNg2FlexGrid, wjNg2Input;
    var UsersComponent;
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
            function (usersService_1_1) {
                usersService_1 = usersService_1_1;
            },
            function (wjNg2FlexGrid_1) {
                wjNg2FlexGrid = wjNg2FlexGrid_1;
            },
            function (wjNg2Input_1) {
                wjNg2Input = wjNg2Input_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent(_usersService, _toastr, _router) {
                    this._usersService = _usersService;
                    this._toastr = _toastr;
                    this._router = _router;
                }
                UsersComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                    }
                    else {
                    }
                    /*Else*/
                    this.usersView = new wijmo.collections.CollectionView();
                    this.usersView.pageSize = 10;
                    this._usersService.initUsers(this);
                };
                UsersComponent.prototype.onAdd = function () {
                    this._router.navigate(['UsersAdd']);
                };
                UsersComponent.prototype.onClose = function () {
                    this._router.navigate(['Dashboard']);
                };
                UsersComponent.prototype.deleteUser = function () {
                    this._usersService.deleteUserr(this.usersView.currentItem, this);
                };
                //getters
                UsersComponent.prototype.getToastr = function () { return this._toastr; };
                UsersComponent.prototype.getCollectionView = function () { return this.usersView; };
                UsersComponent.prototype.first = function () {
                    this.usersView.moveToFirstPage();
                    this._usersService.updatePageButtons(this);
                };
                UsersComponent.prototype.next = function () {
                    this.usersView.moveToNextPage();
                    this._usersService.updatePageButtons(this);
                };
                UsersComponent.prototype.previous = function () {
                    this.usersView.moveToPreviousPage();
                    this._usersService.updatePageButtons(this);
                };
                UsersComponent.prototype.last = function () {
                    this.usersView.moveToLastPage();
                    this._usersService.updatePageButtons(this);
                };
                UsersComponent.prototype.setFilters = function () {
                    var inputFilter = document.getElementById('InputFilter');
                    var filterText = '';
                    var collectionView = this.usersView;
                    var service = this._usersService;
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
                UsersComponent = __decorate([
                    core_1.Component({
                        selector: 'users',
                        templateUrl: 'app/users/users.html',
                        directives: [
                            wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate,
                            wjNg2Input.WjComboBox
                        ],
                        providers: [
                            usersService_1.UsersService, ng2_toastr_1.ToastsManager
                        ]
                    }), 
                    __metadata('design:paramtypes', [usersService_1.UsersService, ng2_toastr_1.ToastsManager, router_1.Router])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.js.map