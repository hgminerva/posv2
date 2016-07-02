System.register(['angular2/core', 'ng2-toastr/ng2-toastr', 'angular2/router', './collectionService'], function(exports_1, context_1) {
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
    var core_1, ng2_toastr_1, router_1, collectionService_1;
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
            }],
        execute: function() {
            CollectionComponent = (function () {
                function CollectionComponent(_collectionService, _toastr, _router) {
                    this._collectionService = _collectionService;
                    this._toastr = _toastr;
                    this._router = _router;
                }
                CollectionComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                        this._router.navigate(['Login']);
                    }
                    else {
                    }
                };
                //getters
                CollectionComponent.prototype.getToastr = function () { return this._toastr; };
                CollectionComponent = __decorate([
                    core_1.Component({
                        selector: 'collection',
                        templateUrl: 'app/collection/collection.html'
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