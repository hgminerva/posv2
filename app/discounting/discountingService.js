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
    var DiscountingService;
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
            DiscountingService = (function () {
                function DiscountingService(_http) {
                    this._http = _http;
                }
                DiscountingService.prototype.listDicount = function (discountComponent) {
                    var _this = this;
                    var url = localStorage.getItem('api_url') + DiscountingService.API_DISCOUNT_URL + "list";
                    var header = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    var options = new http_1.RequestOptions({ headers: header });
                    this._http.get(url, options)
                        .subscribe(function (response) {
                        switch (response.status) {
                            case response_1.Response.SUCCESS:
                                discountComponent.setSource(response.json());
                                discountComponent.getCollectionView().sourceCollection = discountComponent.getSource();
                                _this.checkPageCount(discountComponent.getCollectionView());
                                break;
                            case response_1.Response.BAD_REQUEST: break;
                            case response_1.Response.FORBIDDEN_ERROR: break;
                            case response_1.Response.NOT_FOUND:
                                break;
                            default: break;
                        }
                    }, function (error) {
                        discountComponent.getToastr().error('Server error', '');
                    });
                };
                DiscountingService.prototype.deleteDiscount = function (data, component) {
                    var _this = this;
                    var url = localStorage.getItem('api_url') + DiscountingService.API_DISCOUNT_URL + "delete";
                    var headers = new http_1.Headers({
                        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                        'Content-Type': 'application/json'
                    });
                    var requestOptions = new http_1.RequestOptions({
                        headers: headers,
                        body: JSON.stringify(data)
                    });
                    this._http.delete(url, requestOptions)
                        .subscribe(function (response) {
                        switch (response.status) {
                            case response_1.Response.SUCCESS:
                                component.getToastr().success('Deleted successfully');
                                _this.listDicount(component);
                                break;
                            default: break;
                        }
                    }, function (error) {
                        component.getToastr().error('Server error');
                    });
                };
                DiscountingService.prototype.checkPageCount = function (customerView) {
                    if (customerView.pageCount == 1 || customerView.itemCount == 0) {
                        document.getElementById('btnNext').setAttribute('disabled', 'disabled');
                        document.getElementById('btnBack').setAttribute('disabled', 'disabled');
                    }
                };
                DiscountingService.API_DISCOUNT_URL = "/api/discount/";
                DiscountingService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DiscountingService);
                return DiscountingService;
            }());
            exports_1("DiscountingService", DiscountingService);
        }
    }
});
//# sourceMappingURL=discountingService.js.map