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
    var StockInService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            StockInService = (function () {
                function StockInService(_http) {
                    this._http = _http;
                }
                StockInService.prototype.getStockIn = function () {
                    var stockIns = new wijmo.collections.ObservableArray();
                    var api_url = localStorage.getItem('api_url');
                    var url = api_url + "/api/TrnStockIn";
                    var header = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    var option = new http_1.RequestOptions({ headers: header });
                    this._http.get(url, option)
                        .subscribe(function (response) {
                        var data = response.json();
                        if (data.length > 0) {
                            for (var key in data) {
                                if (data.hasOwnProperty(key)) {
                                    data.push({
                                        Id: data[key].Id,
                                        PeriodId: data[key].PeriodId,
                                        StockInDate: data[key].StockInDate,
                                        StockInNumber: data[key].StockInNumber,
                                        SupplierId: data[key].SupplierId,
                                        Remarks: data[key].Remarks,
                                        IsReturn: data[key].IsReturn,
                                        CollectionId: data[key].CollectionId,
                                        PurchaseOrderId: data[key].PurchaseOrderId,
                                        PreparedBy: data[key].PeriodId.PreparedBy,
                                        CheckedBy: data[key].CheckedBy,
                                        ApprovedBy: data[key].ApprovedBy,
                                        IsLocked: data[key].IsLocked,
                                        EntryUserId: data[key].EntryUserId,
                                        EntryDateTime: data[key].EntryDateTime,
                                        UpdateUserId: data[key].UpdateUserId,
                                        UpdateDateTime: data[key].UpdateDateTime,
                                        SalesId: data[key].SalesId
                                    });
                                }
                            }
                        }
                    }, function (error) {
                    });
                    return stockIns;
                };
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