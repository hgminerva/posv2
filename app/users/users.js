System.register(['angular2/core', 'ng2-toastr/ng2-toastr', 'angular2/router', './usersService'], function(exports_1, context_1) {
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
    var core_1, ng2_toastr_1, router_1, usersService_1;
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
                        this._router.navigate(['Login']);
                    }
                    else {
                    }
                };
                UsersComponent.prototype.getUsers = function () {
                };
                UsersComponent.prototype.addUser = function () {
                };
                UsersComponent.prototype.setUser = function () {
                };
                UsersComponent.prototype.deleteUser = function () {
                };
                //getters
                UsersComponent.prototype.getToastr = function () { return this._toastr; };
                UsersComponent = __decorate([
                    core_1.Component({
                        selector: 'users',
                        templateUrl: 'app/users/users.html',
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