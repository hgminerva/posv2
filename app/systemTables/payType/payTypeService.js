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
    var PayTypeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            PayTypeService = (function () {
                function PayTypeService(http) {
                    this.http = http;
                }
                PayTypeService.prototype.listPayType = function (component) {
                    var _this = this;
                    var url = localStorage.getItem('api_url') + PayTypeService.API_URL_PAYTYPE + "list";
                    var headers = new http_1.Headers({
                        'Authentication': 'Bearer ' + localStorage.getItem('access_token')
                    });
                    var requestOptions = new http_1.RequestOptions(headers);
                    this.http.get(url, requestOptions)
                        .subscribe(function (response) {
                        component.getPayTypeView().sourceCollection = response.json();
                        _this.checkPageCount(component.getPayTypeView());
                        console.log(component.getPayTypeView().sourceCollection);
                    }, function (error) {
                    });
                };
                PayTypeService.prototype.checkPageCount = function (collectionView) {
                    if (collectionView.pageCount == 1 || collectionView.itemCount == 0) {
                        document.getElementById('btnNext').setAttribute('disabled', 'disabled');
                        document.getElementById('btnBack').setAttribute('disabled', 'disabled');
                    }
                };
                PayTypeService.API_URL_PAYTYPE = "/api/payType/";
                PayTypeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PayTypeService);
                return PayTypeService;
            }());
            exports_1("PayTypeService", PayTypeService);
        }
    }
});
//# sourceMappingURL=payTypeService.js.map