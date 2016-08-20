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
    var DebitCreditMemoService;
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
            DebitCreditMemoService = (function () {
                function DebitCreditMemoService(http) {
                    this.http = http;
                }
                DebitCreditMemoService.prototype.listDebitCreditMemo = function (component) {
                    var _this = this;
                    var url = localStorage.getItem('api_url') + DebitCreditMemoService.API_URL_RESTAURANT_TABLE + "list";
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    var requestOptions = new http_1.RequestOptions();
                    this.http.get(url, requestOptions)
                        .subscribe(function (response) {
                        switch (response.status) {
                            case response_1.Response.SUCCESS:
                                component.getCollectionView().sourceCollection = response.json();
                                _this.checkPageCount(component.getCollectionView());
                                console.log(response.json());
                                break;
                            default: break;
                        }
                    }, function (error) {
                        component.getToastr().error('Server error');
                    });
                };
                DebitCreditMemoService.prototype.deleteCollection = function (data, component) {
                    var _this = this;
                    var url = localStorage.getItem('api_url') + DebitCreditMemoService.API_URL_RESTAURANT_TABLE + "delete";
                    var headers = new http_1.Headers({
                        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                        'Content-Type': 'application/json'
                    });
                    var requestOptions = new http_1.RequestOptions({
                        headers: headers,
                        body: JSON.stringify(data)
                    });
                    this.http.delete(url, requestOptions)
                        .subscribe(function (response) {
                        switch (response.status) {
                            case response_1.Response.SUCCESS:
                                component.getToastr().success('Deleted successfully');
                                _this.listDebitCreditMemo(component);
                                break;
                            default: break;
                        }
                    }, function (error) {
                        component.getToastr().error('Server error');
                    });
                };
                DebitCreditMemoService.prototype.checkPageCount = function (collectionView) {
                    if (collectionView.pageCount == 1 || collectionView.itemCount == 0) {
                        document.getElementById('btnNext').setAttribute('disabled', 'disabled');
                        document.getElementById('btnBack').setAttribute('disabled', 'disabled');
                    }
                };
                DebitCreditMemoService.API_URL_RESTAURANT_TABLE = "/api/transaction/debitCreditMemo/";
                DebitCreditMemoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DebitCreditMemoService);
                return DebitCreditMemoService;
            }());
            exports_1("DebitCreditMemoService", DebitCreditMemoService);
        }
    }
});
//# sourceMappingURL=debitCreditMemoService.js.map