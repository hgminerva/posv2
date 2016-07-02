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
    var CollectionService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            CollectionService = (function () {
                function CollectionService(_http) {
                    this._http = _http;
                    this.url = localStorage.getItem('api_url') + '/api/TrnCollection';
                }
                CollectionService.prototype.getCollection = function (component) {
                    var collection = new wijmo.collections.ObservableArray();
                    var header = new http_1.Headers({ 'Authorization': 'Bearer' + localStorage.getItem('access_token') });
                    var option = new http_1.RequestOptions({ headers: header });
                    this._http.get(this.url, option)
                        .subscribe(function (response) {
                        var data = response.json();
                        if (data.length > 0) {
                            for (var key in data) {
                                if (data.hasOwnProperty(key)) {
                                    collection.push({
                                        Id: data[key].Id,
                                        PeriodId: data[key].PeriodId,
                                        CollectionDate: data[key].CollectionDate,
                                        CollectionNumber: data[key].CollectionNumber,
                                        TerminalId: data[key].TerminalId,
                                        ManualORNumber: data[key].ManualORNumber,
                                        CustomerId: data[key].CustomerId,
                                        Remarks: data[key].Remarks,
                                        SelectId: data[key].SelectId,
                                        SalesBalanceAmount: data[key].SalesBalanceAmount,
                                        Amount: data[key].Amount,
                                        TenderAmount: data[key].TenderAmount,
                                        ChangeAmount: data[key].ChangeAmount,
                                        PreparedBy: data[key].PreparedBy,
                                        CheckedBy: data[key].CheckedBy,
                                        ApprovedBy: data[key].ApprovedBy,
                                        IsCancelled: data[key].IsCancelled,
                                        IsLocked: data[key].IsLocked,
                                        EntryUserId: data[key].EntryUserId,
                                        EntryDateTime: data[key].EntryDateTime,
                                        UpdateUserId: data[key].UpdateUserId,
                                        UpdateDateTime: data[key].UpdateDateTime
                                    });
                                }
                            }
                        }
                    }, function (error) {
                        component.getToastr().error('Server Error', '');
                    });
                    return collection;
                };
                CollectionService.prototype.addCollection = function (data, component) {
                    var header = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    header.append('Content-Type', 'application/json');
                    var option = new http_1.RequestOptions({ headers: header });
                    this._http.post(this.url, JSON.stringify(data), option)
                        .subscribe(function (response) {
                        if (response.status == 200) {
                            component.getToastr().success('Saved Successfully', '');
                        }
                        else {
                            component.getToastr().error('Server Error', '');
                        }
                    });
                };
                CollectionService.prototype.updateCollection = function (data, component) {
                    var header = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    header.append('Content-Type', 'application/json');
                    var option = new http_1.RequestOptions({ headers: header });
                    this._http.put(this.url, JSON.stringify(data), option)
                        .subscribe(function (response) {
                        if (response.status == 200) {
                            component.getToastr().success('Updated Successfully', '');
                        }
                        else {
                            component.getToastr().error('Server Error', '');
                        }
                    });
                };
                CollectionService.prototype.deleteCollection = function (data, component) {
                    var header = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    var option = new http_1.RequestOptions({ headers: header });
                    this._http.delete(this.url, option)
                        .subscribe(function (response) {
                        if (response.status == 200) {
                            component.getToastr().success('Deleted Successfully', '');
                        }
                        else {
                            component.getToastr().error('Server Error', '');
                        }
                    });
                };
                CollectionService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CollectionService);
                return CollectionService;
            }());
            exports_1("CollectionService", CollectionService);
        }
    }
});
//# sourceMappingURL=collectionService.js.map