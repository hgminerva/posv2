System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(_router) {
                    this._router = _router;
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    // if (!localStorage.getItem('access_token')) {
                    //     this._router.navigate(['Login']);
                    // }
                };
                DashboardComponent.prototype.logout = function () {
                    localStorage.removeItem('access_token');
                    localStorage.removeItem('expires_in');
                    localStorage.removeItem('token_type');
                    localStorage.removeItem('userName');
                    localStorage.removeItem('incomeAccountId');
                    localStorage.removeItem('branchId');
                    localStorage.removeItem('branch');
                    localStorage.removeItem('company');
                    window.location.replace('/');
                };
                DashboardComponent.prototype.item = function () {
                    this._router.navigate(['Item']);
                };
                DashboardComponent.prototype.pos = function () {
                    this._router.navigate(['POS']);
                };
                DashboardComponent.prototype.posTouch = function () {
                    this._router.navigate(['POSTouch']);
                };
                DashboardComponent.prototype.reportSales = function () {
                    this._router.navigate(['SalesReports']);
                };
                DashboardComponent.prototype.discounting = function () {
                    this._router.navigate(['Discounting']);
                };
                DashboardComponent.prototype.collection = function () {
                    this._router.navigate(['Collection']);
                };
                DashboardComponent.prototype.itemGroup = function () {
                    this._router.navigate(['ItemGroup']);
                };
                DashboardComponent.prototype.reportCollection = function () {
                    this._router.navigate(['CollectionReports']);
                };
                DashboardComponent.prototype.customer = function () {
                    this._router.navigate(['Customer']);
                };
                DashboardComponent.prototype.purchase = function () {
                    this._router.navigate(['Purchases']);
                };
                DashboardComponent.prototype.itemComponents = function () {
                    this._router.navigate(['ItemComponents']);
                };
                DashboardComponent.prototype.receivable = function () {
                    this._router.navigate(['Receivables']);
                };
                DashboardComponent.prototype.supplier = function () {
                    this._router.navigate(['Supplier']);
                };
                DashboardComponent.prototype.disbursement = function () {
                    this._router.navigate(['Disbursement']);
                };
                DashboardComponent.prototype.restaurantTables = function () {
                    this._router.navigate(['RestaurantTables']);
                };
                DashboardComponent.prototype.debitCreditMemo = function () {
                    this._router.navigate(['DebitCreditMemo']);
                };
                DashboardComponent.prototype.systemTables = function () {
                    this._router.navigate(['SystemTables']);
                };
                DashboardComponent.prototype.stockIn = function () {
                    this._router.navigate(['StockIn']);
                };
                DashboardComponent.prototype.inventory = function () {
                    this._router.navigate(['Inventory']);
                };
                DashboardComponent.prototype.reportDisbursement = function () {
                    this._router.navigate(['DisbursementReports']);
                };
                DashboardComponent.prototype.users = function () {
                    this._router.navigate(['Users']);
                };
                DashboardComponent.prototype.stockOut = function () {
                    this._router.navigate(['StockOut']);
                };
                DashboardComponent.prototype.stockCount = function () {
                    this._router.navigate(['StockCount']);
                };
                DashboardComponent.prototype.reportAccounting = function () {
                    this._router.navigate(['AccountingReports']);
                };
                DashboardComponent.prototype.settings = function () {
                    this._router.navigate(['Settings']);
                };
                DashboardComponent.prototype.reportPOS = function () {
                    this._router.navigate(['PosReports']);
                };
                DashboardComponent.prototype.report8mmPOS = function () {
                    this._router.navigate(['EightMmPosReports']);
                };
                DashboardComponent.prototype.utilities = function () {
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        templateUrl: 'app/dashboard/dashboard.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.js.map