System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
    'use strict';
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
    var POSTouchService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            POSTouchService = (function () {
                function POSTouchService(_http) {
                    this.http = _http;
                }
                // ============
                // TABLE GROUPS
                // ============
                POSTouchService.prototype.getTableGroups = function (component) {
                    var data = new wijmo.collections.ObservableArray();
                    var api_url = localStorage.getItem('api_url');
                    var url = api_url + "/api/tableGroup/list";
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.get(url, options)
                        .subscribe(function (response) {
                        for (var key in response.json()) {
                            if (response.json().hasOwnProperty(key)) {
                                data.push({
                                    id: response.json()[key].Id,
                                    tableGroup: response.json()[key].TableGroup,
                                    entryUserId: response.json()[key].EntryUserId,
                                    entryDateTime: response.json()[key].EntryDateTime,
                                    updateUserId: response.json()[key].UpdateUserId,
                                    updateDateTime: response.json()[key].UpdateDateTime,
                                    isLocked: response.json()[key].IsLocked
                                });
                            }
                        }
                        component.fillTableGroup();
                    }, function (error) {
                        component.toastr.error('Server Error', '');
                    });
                    return data;
                };
                // ======
                // TABLES
                // ======
                POSTouchService.prototype.getTablesPerTableGroup = function (component, tableGroupId) {
                    var data = new wijmo.collections.ObservableArray();
                    var api_url = localStorage.getItem('api_url');
                    var url = api_url + "/api/MstTable/PerTableGroup/" + tableGroupId;
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.get(url, options)
                        .subscribe(function (response) {
                        for (var key in response.json()) {
                            if (response.json().hasOwnProperty(key)) {
                                data.push({
                                    id: response.json()[key].Id,
                                    tableCode: response.json()[key].TableCode,
                                    tableGroupId: response.json()[key].TableGroupId,
                                    tableGroup: response.json()[key].TableGroup,
                                    topLocation: response.json()[key].TopLocation,
                                    leftLocation: response.json()[key].LeftLocation
                                });
                            }
                        }
                        component.fillTable();
                    }, function (error) {
                        component.toastr.error('Server Error', '');
                    });
                    return data;
                };
                POSTouchService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], POSTouchService);
                return POSTouchService;
            }());
            exports_1("POSTouchService", POSTouchService);
        }
    }
});
//# sourceMappingURL=POSTouchService.js.map