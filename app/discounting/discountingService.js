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
    var DiscountingService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            DiscountingService = (function () {
                function DiscountingService(_http) {
                    this._http = _http;
                    this.discounts = new wijmo.collections.ObservableArray();
                    DiscountingService.page = 0;
                }
                DiscountingService.prototype.initDicountData = function (discountComponent, discountView) {
                    var _this = this;
                    var api_url = localStorage.getItem('api_url');
                    var url = api_url + "/api/discount/list";
                    var header = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    var options = new http_1.RequestOptions({ headers: header });
                    this._http.get(url, options)
                        .subscribe(function (response) {
                        _this.discounts = response.json();
                        _this.displayDataToGrid(discountView);
                    }, function (error) {
                        discountComponent.getToastr().error('Server error', '');
                    });
                };
                /**
                * This function will display the data by 10 to grid.
                */
                DiscountingService.prototype.displayDataToGrid = function (discountView) {
                    if (this.discounts.length > 0) {
                        var discountData = new wijmo.collections.ObservableArray();
                        for (var i = 0; i < DiscountingService.GRID_LENGTH; i++) {
                            if (DiscountingService.page < this.discounts.length
                                || this.discounts.length >= DiscountingService.GRID_LENGTH) {
                                discountData.push(this.discounts[DiscountingService.page++]);
                                console.log(discountData[0].Id);
                            }
                        }
                        discountView.sourceCollection = discountData;
                    }
                };
                DiscountingService.page = 0;
                DiscountingService.GRID_LENGTH = 10;
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