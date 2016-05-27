System.register(['angular2/core', 'angular2/http', '../model/jvModel'], function(exports_1, context_1) {
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
    var core_1, http_1, jvModel_1;
    var JVDetailService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (jvModel_1_1) {
                jvModel_1 = jvModel_1_1;
            }],
        execute: function() {
            JVDetailService = (function () {
                function JVDetailService(_http) {
                    this.http = _http;
                }
                JVDetailService.prototype.getJV = function (component) {
                    var data = new jvModel_1.JVModel();
                    var url = "http://api.accountico.io/api/TrnJournalVoucher/" + component.id;
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.get(url, options)
                        .subscribe(function (response) {
                        data.id = +response.json().Id;
                        data.branchId = +response.json().BranchId;
                        data.branch = response.json().Branch;
                        data.jvNumber = response.json().JVNumber;
                        data.jvDate = response.json().JVDate;
                        data.particulars = response.json().Particulars;
                        data.manualJVNumber = response.json().ManualJVNumber;
                        data.preparedById = +response.json().PreparedById;
                        data.preparedBy = response.json().PreparedBy;
                        data.checkedById = +response.json().CheckedById;
                        data.checkedBy = response.json().CheckedBy;
                        data.approvedById = +response.json().ApprovedById;
                        data.approvedBy = response.json().ApprovedBy;
                        data.isLocked = response.json().IsLocked;
                        data.createdById = +response.json().CreatedById;
                        data.createdDateTime = response.json().CreatedDateTime;
                        data.updatedById = +response.json().UpdatedById;
                        data.updatedDateTime = response.json().UpdatedDateTime;
                    }, function (error) {
                        component._toastr.error('Get Error', '');
                    });
                    return data;
                };
                JVDetailService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], JVDetailService);
                return JVDetailService;
            }());
            exports_1("JVDetailService", JVDetailService);
        }
    }
});
//# sourceMappingURL=jvDetailService.js.map