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
    var CustomerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            CustomerService = (function () {
                function CustomerService(http) {
                    this.http = http;
                    this.customers = new wijmo.collections.ObservableArray();
                }
                CustomerService.prototype.initCustomers = function (customerComponent, customerView) {
                    var _this = this;
                    var url = localStorage.getItem('api_url') + '/api/customer/list';
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_toen') });
                    var options = new http_1.RequestOptions();
                    this.http.get(url, options)
                        .subscribe(function (response) {
                        _this.customers = response.json();
                        _this.displayDataToGrid(customerView);
                    }, function (error) {
                        customerComponent.getToastr().error('Server error', '');
                    });
                };
                CustomerService.prototype.displayDataToGrid = function (customerView) {
                    if (this.customers.length > 0) {
                        var data = new wijmo.collections.ObservableArray();
                        for (var i = 0; i < CustomerService.GRID_LENGTH; i++) {
                            if (CustomerService.page < this.customers.length) {
                                data.push(this.customers[CustomerService.page++]);
                            }
                            else {
                                break;
                            }
                            customerView.sourceCollection = data;
                        }
                    }
                };
                CustomerService.page = 0;
                CustomerService.GRID_LENGTH = 10;
                CustomerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CustomerService);
                return CustomerService;
            }());
            exports_1("CustomerService", CustomerService);
        }
    }
});
//# sourceMappingURL=customerService.js.map