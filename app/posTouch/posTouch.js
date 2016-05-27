System.register(['angular2/core', 'angular2/router', 'ng2-toastr/ng2-toastr', '../posTouch/POSTouchService'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, router_1, ng2_toastr_1, POSTouchService_1;
    var POSTouchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2_toastr_1_1) {
                ng2_toastr_1 = ng2_toastr_1_1;
            },
            function (POSTouchService_1_1) {
                POSTouchService_1 = POSTouchService_1_1;
            }],
        execute: function() {
            POSTouchComponent = (function () {
                function POSTouchComponent(_router, _toastr, _posTouchService) {
                    this.tableGroup = new Array(6);
                    this.tableGroupPicked = new Array(6);
                    this.table = new Array(46);
                    this.router = _router;
                    this.toastr = _toastr;
                    this.posTouchService = _posTouchService;
                }
                POSTouchComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                        this.router.navigate(['Login']);
                    }
                    else {
                        this.page_tableGroup = 1;
                        this.pages_tableGroup = 1;
                        this.getTableGroup();
                        this.fillTableGroup();
                        this.page_table = 1;
                        this.pages_table = 1;
                        for (var p = 0; p < this.tableGroup.length; p++) {
                            this.tableGroupPicked[p] = "";
                        }
                    }
                };
                // ============
                // Table Groups 
                // ============
                POSTouchComponent.prototype.getTableGroup = function () {
                    this.dataTableGroup = this.posTouchService.getTableGroups(this);
                };
                POSTouchComponent.prototype.fillTableGroup = function () {
                    var pages;
                    var perPage;
                    var record;
                    var currentPage;
                    var index;
                    // Clean up the buttons of the table groups
                    perPage = this.tableGroup.length;
                    for (var i = 0; i < perPage; i++) {
                        this.tableGroup[i] = "";
                    }
                    // Get the number of pages in the table groups
                    if (this.pages_tableGroup == 1) {
                        this.pages_tableGroup = this.dataTableGroup.length / perPage;
                        if (this.pages_tableGroup - Math.floor(this.pages_tableGroup) > 0) {
                            this.pages_tableGroup = Math.floor(this.pages_tableGroup) + 1;
                        }
                    }
                    // Display the table groups per page    
                    record = 1;
                    index = 0;
                    for (var i = 0; i < this.dataTableGroup.length; i++) {
                        if ((record % perPage) == 0) {
                            currentPage = 1;
                        }
                        else {
                            currentPage = Math.floor(record / perPage) + 1;
                        }
                        if (currentPage == this.page_tableGroup) {
                            if (index <= perPage) {
                                this.tableGroup[index] = this.dataTableGroup[i].tableGroup;
                                index++;
                            }
                        }
                        record++;
                    }
                };
                POSTouchComponent.prototype.clickTableGroup = function (index) {
                    var tableGroupId;
                    var i = 0;
                    var perPage;
                    perPage = this.tableGroup.length;
                    i = index + ((this.page_tableGroup - 1) * perPage);
                    if (this.dataTableGroup.length > 0 && i <= this.dataTableGroup.length) {
                        tableGroupId = this.dataTableGroup[i].id;
                        this.dataTable = this.posTouchService.getTablesPerTableGroup(this, tableGroupId);
                        for (var p = 0; p < this.tableGroup.length; p++) {
                            if (p == index) {
                                this.tableGroupPicked[p] = "↑";
                            }
                            else {
                                this.tableGroupPicked[p] = "";
                            }
                        }
                    }
                };
                POSTouchComponent.prototype.previousTableGroups = function () {
                    this.page_tableGroup--;
                    if (this.page_tableGroup < 1)
                        this.page_tableGroup = 1;
                    this.fillTableGroup();
                };
                POSTouchComponent.prototype.nextTableGroups = function () {
                    this.page_tableGroup++;
                    if (this.page_tableGroup > this.pages_tableGroup)
                        this.page_tableGroup = this.pages_tableGroup;
                    this.fillTableGroup();
                };
                // ======
                // Tables
                // ======
                POSTouchComponent.prototype.fillTable = function () {
                    var pages;
                    var perPage;
                    var record;
                    var currentPage;
                    var index;
                    // Clean up the buttons of the table
                    perPage = this.table.length;
                    for (var i = 0; i < perPage; i++) {
                        this.table[i] = "";
                    }
                    // Get the number of pages in the tables
                    if (this.pages_table == 1) {
                        this.pages_table = this.dataTable.length / perPage;
                        if (this.pages_table - Math.floor(this.pages_table) > 0) {
                            this.pages_table = Math.floor(this.pages_table) + 1;
                        }
                    }
                    // Display the tables per page    
                    record = 1;
                    index = 0;
                    for (var i = 0; i < this.dataTable.length; i++) {
                        if ((record % perPage) == 0) {
                            currentPage = 1;
                        }
                        else {
                            currentPage = Math.floor(record / perPage) + 1;
                        }
                        if (currentPage == this.page_table) {
                            if (index <= perPage) {
                                this.table[index] = this.dataTable[i].tableCode;
                                index++;
                            }
                        }
                        record++;
                    }
                };
                POSTouchComponent.prototype.previousTables = function () {
                    this.page_table--;
                    if (this.page_table < 1)
                        this.page_table = 1;
                    this.fillTable();
                };
                POSTouchComponent.prototype.nextTables = function () {
                    this.page_table++;
                    if (this.page_table > this.pages_table)
                        this.page_table = this.pages_table;
                    this.fillTable();
                };
                POSTouchComponent.prototype.clickTable = function (index) {
                };
                POSTouchComponent.prototype.clickTableOverTheCounter = function () {
                };
                POSTouchComponent.prototype.clickTableDelivery = function () {
                };
                POSTouchComponent = __decorate([
                    core_1.Component({
                        selector: 'posTouch',
                        templateUrl: 'app/posTouch/posTouch.html',
                        providers: [POSTouchService_1.POSTouchService, ng2_toastr_1.ToastsManager]
                    }),
                    __param(2, core_1.Inject(POSTouchService_1.POSTouchService)), 
                    __metadata('design:paramtypes', [router_1.Router, ng2_toastr_1.ToastsManager, POSTouchService_1.POSTouchService])
                ], POSTouchComponent);
                return POSTouchComponent;
            }());
            exports_1("POSTouchComponent", POSTouchComponent);
        }
    }
});
//# sourceMappingURL=posTouch.js.map