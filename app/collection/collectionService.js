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
    var CollectionService;
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
            CollectionService = (function () {
                function CollectionService(_http) {
                    this._http = _http;
                }
                CollectionService.prototype.listCollection = function (component) {
                    var _this = this;
                    var url = localStorage.getItem('api_url') + CollectionService.API_COLLECTION_URL + "list";
                    var header = new http_1.Headers({ 'Authorization': 'Bearer' + localStorage.getItem('access_token') });
                    var option = new http_1.RequestOptions({ headers: header });
                    this._http.get(url, option)
                        .subscribe(function (response) {
                        switch (response.status) {
                            case response_1.Response.SUCCESS:
                                component.getCollectionView().sourceCollection = response.json();
                                _this.updatePageButtons(component);
                                break;
                        }
                    }, function (error) {
                        component.getToastr().error('Server error');
                    });
                };
                CollectionService.prototype.addCollection = function (data, component) {
                };
                CollectionService.prototype.updateCollection = function (data, component) {
                };
                CollectionService.prototype.deleteCollection = function (data, component) {
                    var url = localStorage.getItem('api_url') + CollectionService.API_COLLECTION_URL + "delete";
                    var headers = new http_1.Headers({
                        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                        'Content-Type': 'application/json'
                    });
                    var requestOptions = new http_1.RequestOptions({
                        headers: headers,
                        body: JSON.stringify(data)
                    });
                    this._http.delete(url, requestOptions)
                        .subscribe(function (response) {
                        switch (response.status) {
                            case response_1.Response.SUCCESS:
                                component.getToastr().success('Deleted successfully');
                                component.getCollectionView().remove(data);
                                break;
                            default: break;
                        }
                    }, function (error) {
                        component.getToastr().error('Server error');
                    });
                };
                CollectionService.prototype.initCombobox = function (component, cmb) {
                    var url = localStorage.getItem('api_url') + CollectionService.API_URL_USER + 'list';
                    var headers = new http_1.Headers({
                        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
                    });
                    var requestOptions = new http_1.RequestOptions({ headers: headers });
                    this._http.get(url, requestOptions)
                        .subscribe(function (response) {
                        cmb.itemsSource = response.json();
                        cmb.displayMemberPath = 'FullName';
                        cmb.selectedValuePath = 'Id';
                    }, function (error) {
                        console.log('error');
                    });
                };
                CollectionService.prototype.updatePageButtons = function (component) {
                    var currentPage = component.getCollectionView().pageIndex;
                    var totalPage = component.getCollectionView().pageCount;
                    var btnFirst = document.getElementById('btnFirst');
                    var btnPrev = document.getElementById('btnBack');
                    var btnNext = document.getElementById('btnNext');
                    var btnLast = document.getElementById('btnLast');
                    var pageButton = document.getElementById('page-button');
                    var pageCount = document.getElementById('pageCount');
                    var filterText = document.getElementById('InputFilter');
                    pageButton.style.display = "none";
                    if (totalPage == 0) {
                        btnFirst.setAttribute('disabled', 'disabled');
                        btnPrev.setAttribute('disabled', 'disabled');
                        btnNext.setAttribute('disabled', 'disabled');
                        btnLast.setAttribute('disabled', 'disabled');
                        return;
                    }
                    pageButton.style.display = "block";
                    if (currentPage == 0) {
                        if (filterText.value != "") {
                            if (totalPage <= 1) {
                                btnFirst.setAttribute('disabled', 'disabled');
                                btnPrev.setAttribute('disabled', 'disabled');
                                btnNext.setAttribute('disabled', 'disabled');
                                btnLast.setAttribute('disabled', 'disabled');
                            }
                            else {
                                btnFirst.setAttribute('disabled', 'disabled');
                                btnPrev.setAttribute('disabled', 'disabled');
                                btnNext.removeAttribute('disabled');
                                btnLast.removeAttribute('disabled');
                            }
                        }
                        else {
                            if (totalPage > 1) {
                                btnFirst.setAttribute('disabled', 'disabled');
                                btnPrev.setAttribute('disabled', 'disabled');
                                btnNext.removeAttribute('disabled');
                                btnLast.removeAttribute('disabled');
                            }
                            else {
                                btnFirst.setAttribute('disabled', 'disabled');
                                btnPrev.setAttribute('disabled', 'disabled');
                                btnNext.setAttribute('disabled', 'disabled');
                                btnLast.setAttribute('disabled', 'disabled');
                            }
                        }
                    }
                    else if (currentPage == totalPage - 1) {
                        btnNext.setAttribute('disabled', 'disabled');
                        btnLast.setAttribute('disabled', 'disabled');
                        btnFirst.removeAttribute('disabled');
                        btnPrev.removeAttribute('disabled');
                    }
                    else {
                        if (btnFirst.hasAttribute('disabled')) {
                            btnFirst.removeAttribute('disabled');
                        }
                        if (btnPrev.hasAttribute('disabled')) {
                            btnPrev.removeAttribute('disabled');
                        }
                        if (btnNext.hasAttribute('disabled')) {
                            btnNext.removeAttribute('disabled');
                        }
                        if (btnLast.hasAttribute('disabled')) {
                            btnLast.removeAttribute('disabled');
                        }
                    }
                    pageCount.innerHTML = currentPage + 1 + "/" + totalPage;
                };
                CollectionService.API_COLLECTION_URL = "/api/transaction/collection/";
                CollectionService.API_URL_USER = "/api/user/";
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