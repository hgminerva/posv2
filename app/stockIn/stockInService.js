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
    var StockInService;
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
            StockInService = (function () {
                function StockInService(http) {
                    this.http = http;
                }
                StockInService.prototype.listStockIn = function (component) {
                    var _this = this;
                    var url = localStorage.getItem('api_url') + StockInService.API_URL_STOCK_IN + "list";
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    var requestOptions = new http_1.RequestOptions();
                    this.http.get(url, requestOptions)
                        .subscribe(function (response) {
                        switch (response.status) {
                            case response_1.Response.SUCCESS:
                                component.getCollectionView().sourceCollection = response.json();
                                _this.checkPageCount(component.getCollectionView());
                                break;
                            default: break;
                        }
                    }, function (error) {
                        component.getToastr().error('Server error');
                    });
                };
                StockInService.prototype.checkPageCount = function (collectionView) {
                    if (collectionView.pageCount == 1 || collectionView.itemCount == 0) {
                        document.getElementById('btnNext').setAttribute('disabled', 'disabled');
                    }
                    document.getElementById('btnBack').setAttribute('disabled', 'disabled');
                };
                StockInService.API_URL_STOCK_IN = "/api/transaction/stockIn/";
                StockInService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], StockInService);
                return StockInService;
            }());
            exports_1("StockInService", StockInService);
        }
    }
});
//# sourceMappingURL=stockInService.js.map