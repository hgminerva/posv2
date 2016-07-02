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
    var InventoryService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            InventoryService = (function () {
                function InventoryService(_http) {
                    this._http = _http;
                    this.url = localStorage.getItem('api_url') + "/api/MstItemInventory";
                    this.accessToken = localStorage.getItem('access_token');
                    this.option = new http_1.RequestOptions();
                }
                InventoryService.prototype.getInventory = function (component) {
                    var inventory = new wijmo.collections.ObservableArray();
                    var header = new http_1.Headers({ 'Authorization': 'Bearer ' + this.accessToken });
                    this.option.headers = header;
                    this._http.get(this.url, this.option)
                        .subscribe(function (response) {
                        var data = response.json();
                        if (data.length > 0) {
                            for (var key in data) {
                                if (data.hasOwnPropertyKey(key)) {
                                    inventory.push({
                                        Id: data[key].Id
                                    });
                                }
                            }
                        }
                    }, function (error) {
                        component.getToastr().error('Server Error', '');
                    });
                    return inventory;
                };
                InventoryService.prototype.addInventory = function (data, component) {
                    var header = new http_1.Headers({ 'Authorization': 'Bearer ' + this.accessToken });
                    header.append('Content-Type', 'application/json');
                    this.option.headers = header;
                    this._http.post(this.url, JSON.stringify(data), this.option)
                        .subscribe(function (response) {
                        if (response.status == InventoryService.SUCCESS) {
                            component.getToastr().success('Save Successfull', '');
                        }
                        else {
                            component.getToastr().error('Server Error', '');
                        }
                    });
                };
                InventoryService.prototype.updateInventory = function (data, component) {
                    var header = new http_1.Headers({ 'Authorization': 'Bearer ' + this.accessToken });
                    header.append('Content-Type', 'application/json');
                    this.option.headers = header;
                    this._http.put(this.url, JSON.stringify(data), this.option)
                        .subscribe(function (response) {
                        if (response.status == InventoryService.SUCCESS) {
                            component.getToastr().success('Update Successfull', '');
                        }
                        else {
                            component.getToastr().error('Server Error', '');
                        }
                    });
                };
                InventoryService.prototype.deleteInventory = function (data, component) {
                    var header = new http_1.Headers({ 'Authorization': 'Bearer ' + this.accessToken });
                    var id = data.Id;
                    var url = this.url + '/' + id;
                    this.option.headers = header;
                    this._http.delete(url, this.option)
                        .subscribe(function (response) {
                        if (response.status == InventoryService.SUCCESS) {
                            component.getToastr().success('Delete Successfull', '');
                        }
                        else {
                            component.getToastr().error('Server Error', '');
                        }
                    });
                };
                InventoryService.SUCCESS = 200;
                InventoryService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], InventoryService);
                return InventoryService;
            }());
            exports_1("InventoryService", InventoryService);
        }
    }
});
//# sourceMappingURL=inventoryService.js.map