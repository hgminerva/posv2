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
    var ItemService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ItemService = (function () {
                function ItemService(_http) {
                    this._http = _http;
                    this.items = new wijmo.collections.ObservableArray();
                    ItemService.page = 0;
                }
                ItemService.prototype.displayItems = function (component, itemsView) {
                    var _this = this;
                    var url = localStorage.getItem('api_url') + "/api/item/list";
                    var accessToken = localStorage.getItem('access_token');
                    var header = new http_1.Headers({ 'Authorization': 'Bearer ' + accessToken });
                    var option = new http_1.RequestOptions();
                    option.headers = header;
                    this._http.get(url, option)
                        .subscribe(function (response) {
                        _this.items = response.json();
                        _this.displayDataToGrid(itemsView);
                    }, function (error) {
                        component.getToastr().error('Server Error', '');
                    });
                };
                ItemService.prototype.addItem = function (data, component) {
                    var url = localStorage.getItem('api_url') + "/api/customer/create";
                    var accessToken = localStorage.getItem('access_token');
                    var header = new http_1.Headers({ 'Authorization': 'Bearer ' + accessToken });
                    var option = new http_1.RequestOptions();
                    header.append('Content-Type', 'application/json');
                    option.headers = header;
                    this._http.post(url, JSON.stringify(data), option)
                        .subscribe(function (response) {
                        if (response.status == ItemService.SUCCESS) {
                            component.getToastr().success('Save Successfull', '');
                        }
                        else {
                            component.getToastr().success('Server Error', '');
                        }
                    });
                };
                ItemService.prototype.updateItem = function (data, component) {
                    var url = localStorage.getItem('api_url') + "/api/customer/update";
                    var accessToken = localStorage.getItem('access_token');
                    var header = new http_1.Headers({ 'Authorization': 'Bearer ' + accessToken });
                    var option = new http_1.RequestOptions();
                    header.append('Content-Type', 'application/json');
                    option.headers = header;
                    this._http.put(url, JSON.stringify(data), option)
                        .subscribe(function (response) {
                        if (response.status == ItemService.SUCCESS) {
                            component.getToastr().success('Update Successfull', '');
                        }
                        else {
                            component.getToastr().success('Server Error', '');
                        }
                    });
                };
                ItemService.prototype.deleteItem = function (data, component) {
                    var url = localStorage.getItem('api_url') + "/api/customer/delete/" + data.id;
                    var accessToken = localStorage.getItem('access_token');
                    var header = new http_1.Headers({ 'Authorization': 'Bearer ' + accessToken });
                    var id = data.Id;
                    var option = new http_1.RequestOptions();
                    option.headers = header;
                    this._http.delete(url, option)
                        .subscribe(function (response) {
                        if (response.status == ItemService.SUCCESS) {
                            component.getToastr().success('Delete Successfull', '');
                        }
                        else {
                            component.getToastr().error('Server Error', '');
                        }
                    });
                };
                /*
                * This function will display the data by 10 to grid
                */
                ItemService.prototype.displayDataToGrid = function (itemsView) {
                    if (this.items.length > 0) {
                        var gridData = new wijmo.collections.ObservableArray();
                        for (var i = 0; i < ItemService.GRID_LENGTH; i++) {
                            if (ItemService.page < this.items.length || this.items.length >= ItemService.GRID_LENGTH) {
                                gridData.push(this.items[ItemService.page++]);
                            }
                            else {
                                break;
                            }
                        }
                        itemsView.sourceCollection = gridData;
                    }
                };
                ItemService.page = 0;
                ItemService.SUCCESS = 200;
                ItemService.GRID_LENGTH = 10;
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