System.register(['angular2/core', 'angular2/http', '../response/response'], function(exports_1, context_1) {
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
    var core_1, http_1, response_1;
    var ItemService;
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
            ItemService = (function () {
                function ItemService(_http) {
                    this._http = _http;
                }
                ItemService.prototype.listItems = function (component, itemsView) {
                    var _this = this;
                    var url = localStorage.getItem('api_url') + ItemService.API_ITEM_URL + "list";
                    var accessToken = localStorage.getItem('access_token');
                    var header = new http_1.Headers({ 'Authorization': 'Bearer ' + accessToken });
                    var option = new http_1.RequestOptions();
                    option.headers = header;
                    this._http.get(url, option)
                        .subscribe(function (response) {
                        switch (response.status) {
                            case response_1.Response.SUCCESS:
                                itemsView.sourceCollection = response.json();
                                _this.checkPageCount(itemsView);
                                break;
                            case response_1.Response.BAD_REQUEST: break;
                            case response_1.Response.FORBIDDEN_ERROR: break;
                            case response_1.Response.NOT_FOUND:
                                break;
                            default: break;
                        }
                    }, function (error) {
                        component.getToastr().error('Server Error', '');
                    });
                };
                ItemService.prototype.initUnit = function (itemComponent, cmbUnit) {
                    var _this = this;
                    var url = localStorage.getItem('api_url') + ItemService.API_UNIT_URL + "list";
                    var accessToken = localStorage.getItem('access_token');
                    var header = new http_1.Headers({ 'Authorization': 'Bearer ' + accessToken });
                    var option = new http_1.RequestOptions();
                    option.headers = header;
                    this._http.get(url, option)
                        .subscribe(function (response) {
                        cmbUnit = new wijmo.input.ComboBox('#cmbUnit', {
                            itemsSource: _this.getUnits(response.json())
                        });
                    }, function (error) {
                        itemComponent.getToastr().error('Server Error', '');
                    });
                };
                ItemService.prototype.getUnits = function (units) {
                    if (units != null) {
                        var data = new wijmo.collections.ObservableArray();
                        for (var i = 0; i < units.length; i++) {
                            data.push(units[i].Unit);
                        }
                        return data;
                    }
                    return null;
                };
                ItemService.prototype.checkPageCount = function (itemsView) {
                    if (itemsView.pageCount == 1 || itemsView.itemCount == 0) {
                        document.getElementById('btnNext').setAttribute('disabled', 'disabled');
                    }
                    document.getElementById('btnBack').setAttribute('disabled', 'disabled');
                };
                ItemService.API_ITEM_URL = '/api/item/';
                ItemService.API_UNIT_URL = '/api/unit/';
                ItemService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ItemService);
                return ItemService;
            }());
            exports_1("ItemService", ItemService);
        }
    }
});
//# sourceMappingURL=itemService.js.map