System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var SupplierService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            SupplierService = (function () {
                function SupplierService(http) {
                    this.http = http;
                    this.suppliers = new wijmo.collections.ObservableArray();
                    this.page = 0;
                }
                SupplierService.prototype.initSuppliers = function (supplierComponent, supplierView) {
                    var _this = this;
                    var url = localStorage.getItem('api_url') + SupplierService.API_SUPPLIER_URL;
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    var option = new http_1.RequestOptions();
                    option.headers = headers;
                    this.http.get(url, option)
                        .subscribe(function (response) {
                        _this.suppliers = response.json();
                        _this.displaySupplierToGrid(supplierView);
                    }, function (error) {
                        supplierComponent.getToastr().error('Server error', '');
                    });
                };
                SupplierService.prototype.displaySupplierToGrid = function (supplierView) {
                    var suppliersLength = this.suppliers.length;
                    if (suppliersLength > 0) {
                        var data = new wijmo.collections.ObservableArray();
                        for (var i = 0; i < SupplierService.GRID_LENGTH; i++) {
                            if (this.page < suppliersLength || this.page >= SupplierService.GRID_LENGTH) {
                                data.push(this.suppliers[this.page++]);
                                console.log(data[i].IsLocked);
                            }
                            else {
                                break;
                            }
                        }
                        supplierView.sourceCollection = data;
                    }
                };
                SupplierService.prototype.setPage = function (p) { this.page += p; };
                SupplierService.prototype.getPage = function () { return this.page; };
                SupplierService.GRID_LENGTH = 10;
                SupplierService.SUCCESS = 200;
                SupplierService.API_SUPPLIER_URL = '/api/supplier/list';
                SupplierService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SupplierService);
                return SupplierService;
            }());
            exports_1("SupplierService", SupplierService);
        }
    }
});
//# sourceMappingURL=SupplierService.js.map