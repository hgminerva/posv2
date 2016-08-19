System.register(['angular2/core', 'angular2/http', '../response/response'], function(exports_1, context_1) {
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
    var core_1, http_1, response_1;
    var CustomerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (response_1_1) {
                response_1 = response_1_1;
            }],
        execute: function() {
            CustomerService = (function () {
                function CustomerService(http) {
                    this.http = http;
                }
                CustomerService.prototype.initCustomers = function (customerComponent) {
                    var _this = this;
                    var url = localStorage.getItem('api_url') + CustomerService.CUSTOMER_API_URL + 'list';
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    var options = new http_1.RequestOptions(headers);
                    this.http.get(url, options)
                        .subscribe(function (response) {
                        switch (response.status) {
                            case response_1.Response.SUCCESS:
                                customerComponent.getCustomerView().sourceCollection = response.json();
                                _this.checkPageCount(customerComponent.getCustomerView());
                                break;
                            case response_1.Response.BAD_REQUEST: break;
                            case response_1.Response.FORBIDDEN_ERROR: break;
                            case response_1.Response.NOT_FOUND:
                                customerComponent.getToastr().error('Server error', '');
                                break;
                            default: break;
                        }
                    });
                };
                CustomerService.prototype.addCustomer = function (data, customerAddComponent) {
                    var url = localStorage.getItem('api_url') + CustomerService.CUSTOMER_API_URL + 'create';
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    headers.append('Content-Type', 'application/json');
                    var requestOptions = new http_1.RequestOptions({ headers: headers });
                    this.http.post(url, JSON.stringify(data), requestOptions)
                        .subscribe(function (response) {
                        switch (response.status) {
                            case response_1.Response.SUCCESS:
                                customerAddComponent.getToastr().success('Added Successfully', '');
                                customerAddComponent.getRouter().navigate(['Customer']);
                                break;
                            case response_1.Response.BAD_REQUEST: break;
                            case response_1.Response.FORBIDDEN_ERROR: break;
                            case response_1.Response.NOT_FOUND:
                                customerAddComponent.getToastr().error('Server error', '');
                                break;
                            default: break;
                        }
                    });
                };
                CustomerService.prototype.updateCustomer = function (data, customerComponent) {
                };
                CustomerService.prototype.deleteCustomer = function (data, customerComponent) {
                    var _this = this;
                    var url = localStorage.getItem('api_url') + CustomerService.CUSTOMER_API_URL + "delete";
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    headers.append('Content-Type', 'application/json');
                    var requestOptions = new http_1.RequestOptions({ headers: headers, body: JSON.stringify(data) });
                    this.http.delete(url, requestOptions)
                        .subscribe(function (response) {
                        switch (response.status) {
                            case response_1.Response.SUCCESS:
                                _this.initCustomers(customerComponent);
                                customerComponent.getToastr().success("Deleted successfully");
                                break;
                            case response_1.Response.BAD_REQUEST: break;
                            case response_1.Response.FORBIDDEN_ERROR: break;
                            case response_1.Response.NOT_FOUND:
                                customerComponent.getToastr().error('Server error', '');
                                break;
                            default: break;
                        }
                    });
                };
                CustomerService.prototype.checkPageCount = function (customerView) {
                    if (customerView.pageCount == 1 || customerView.itemCount == 0) {
                        document.getElementById('btnBack').setAttribute('disabled', 'disabled');
                        document.getElementById('btnNext').setAttribute('disabled', 'disabled');
                    }
                    else {
                        document.getElementById('btnBack').setAttribute('disabled', 'disabled');
                    }
                };
                CustomerService.CUSTOMER_API_URL = '/api/customer/';
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