System.register(['angular2/core', 'angular2/router', 'angular2/http', 'angular2/common', 'rxjs/Rx', '../home/home', '../login/login', '../logout/logout', '../dashboard/dashboard', '../profile/profile', '../item/item', '../item/ItemAdd', '../pos/pos', '../posTouch/posTouch', '../salesReports/salesReports', '../discounting/discounting', '../discounting/discountingAdd', '../collection/collection', '../collection/collectionAdd', '../itemGroup/itemGroup', '../itemGroup/itemGroupAdd', '../collectionReports/collectionReports', '../customer/customer', '../customer/customerAdd', '../purchases/purchases', '../purchases/purchasesAdd', '../itemComponents/itemComponents', '../receivable/receivable', '../supplier/supplier', '../supplier/supplierAdd', '../disbursement/disbursement', '../restaurantTables/restaurantTables', '../debitCreditMemo/debitCreditMemo', '../systemTables/systemTables', '../stockIn/stockIn', '../inventory/inventory', '../disbursementReports/disbursementReports', '../users/users', '../stockOut/stockOut', '../stockCount/stockCount', '../accountingReports/accountingReports', '../settings/settings', '../posReports/posReports', '../8mmPosReports/8mmPosReports'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, common_1, Rx_1, home_1, login_1, logout_1, dashboard_1, profile_1, item_1, ItemAdd_1, pos_1, posTouch_1, salesReports_1, discounting_1, discountingAdd_1, collection_1, collectionAdd_1, itemGroup_1, itemGroupAdd_1, collectionReports_1, customer_1, customerAdd_1, purchases_1, purchasesAdd_1, itemComponents_1, receivable_1, supplier_1, supplierAdd_1, disbursement_1, restaurantTables_1, debitCreditMemo_1, systemTables_1, stockIn_1, inventory_1, disbursementReports_1, users_1, stockOut_1, stockCount_1, accountingReports_1, settings_1, posReports_1, _8mmPosReports_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (logout_1_1) {
                logout_1 = logout_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            },
            function (profile_1_1) {
                profile_1 = profile_1_1;
            },
            function (item_1_1) {
                item_1 = item_1_1;
            },
            function (ItemAdd_1_1) {
                ItemAdd_1 = ItemAdd_1_1;
            },
            function (pos_1_1) {
                pos_1 = pos_1_1;
            },
            function (posTouch_1_1) {
                posTouch_1 = posTouch_1_1;
            },
            function (salesReports_1_1) {
                salesReports_1 = salesReports_1_1;
            },
            function (discounting_1_1) {
                discounting_1 = discounting_1_1;
            },
            function (discountingAdd_1_1) {
                discountingAdd_1 = discountingAdd_1_1;
            },
            function (collection_1_1) {
                collection_1 = collection_1_1;
            },
            function (collectionAdd_1_1) {
                collectionAdd_1 = collectionAdd_1_1;
            },
            function (itemGroup_1_1) {
                itemGroup_1 = itemGroup_1_1;
            },
            function (itemGroupAdd_1_1) {
                itemGroupAdd_1 = itemGroupAdd_1_1;
            },
            function (collectionReports_1_1) {
                collectionReports_1 = collectionReports_1_1;
            },
            function (customer_1_1) {
                customer_1 = customer_1_1;
            },
            function (customerAdd_1_1) {
                customerAdd_1 = customerAdd_1_1;
            },
            function (purchases_1_1) {
                purchases_1 = purchases_1_1;
            },
            function (purchasesAdd_1_1) {
                purchasesAdd_1 = purchasesAdd_1_1;
            },
            function (itemComponents_1_1) {
                itemComponents_1 = itemComponents_1_1;
            },
            function (receivable_1_1) {
                receivable_1 = receivable_1_1;
            },
            function (supplier_1_1) {
                supplier_1 = supplier_1_1;
            },
            function (supplierAdd_1_1) {
                supplierAdd_1 = supplierAdd_1_1;
            },
            function (disbursement_1_1) {
                disbursement_1 = disbursement_1_1;
            },
            function (restaurantTables_1_1) {
                restaurantTables_1 = restaurantTables_1_1;
            },
            function (debitCreditMemo_1_1) {
                debitCreditMemo_1 = debitCreditMemo_1_1;
            },
            function (systemTables_1_1) {
                systemTables_1 = systemTables_1_1;
            },
            function (stockIn_1_1) {
                stockIn_1 = stockIn_1_1;
            },
            function (inventory_1_1) {
                inventory_1 = inventory_1_1;
            },
            function (disbursementReports_1_1) {
                disbursementReports_1 = disbursementReports_1_1;
            },
            function (users_1_1) {
                users_1 = users_1_1;
            },
            function (stockOut_1_1) {
                stockOut_1 = stockOut_1_1;
            },
            function (stockCount_1_1) {
                stockCount_1 = stockCount_1_1;
            },
            function (accountingReports_1_1) {
                accountingReports_1 = accountingReports_1_1;
            },
            function (settings_1_1) {
                settings_1 = settings_1_1;
            },
            function (posReports_1_1) {
                posReports_1 = posReports_1_1;
            },
            function (_8mmPosReports_1_1) {
                _8mmPosReports_1 = _8mmPosReports_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(_http) {
                    localStorage.setItem('api_url', 'http://localhost:9934');
                    if (!localStorage.getItem('access_token')) {
                        this.profile = " ";
                        this.login = false;
                    }
                    else {
                        var date = new Date();
                        this.time = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
                        this.profile = localStorage.getItem('userName').toUpperCase();
                        this.login = true;
                    }
                }
                App.prototype.ngOnInit = function () {
                    var _this = this;
                    var clock = Rx_1.Observable.timer(2000, 1000);
                    clock.subscribe(function (t) { return _this.timer(t); });
                };
                App.prototype.timer = function (tick) {
                    var date = new Date();
                    this.time = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'app/app/app.html',
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            common_1.NgIf
                        ],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            http_1.HTTP_PROVIDERS
                        ]
                    }),
                    router_1.RouteConfig([{ path: '/home', name: 'Home', component: home_1.HomeComponent, useAsDefault: true },
                        { path: '/login', name: 'Login', component: login_1.LoginComponent },
                        { path: '/logout', name: 'Logout', component: logout_1.LogoutComponent },
                        { path: '/item', name: 'Item', component: item_1.ItemComponent },
                        { path: '/dashboard', name: 'Dashboard', component: dashboard_1.DashboardComponent },
                        { path: '/profile', name: 'Profile', component: profile_1.ProfileComponent },
                        { path: '/addItem', name: 'AddItem', component: ItemAdd_1.ItemAddComponent },
                        { path: '/pos', name: 'POS', component: pos_1.POSComponent },
                        { path: '/posTouch', name: 'POSTouch', component: posTouch_1.POSTouchComponent },
                        { path: '/salesReports', name: 'SalesReports', component: salesReports_1.SalesReportsComponent },
                        { path: '/discounting', name: 'Discounting', component: discounting_1.DiscountingComponent },
                        { path: '/addDiscount', name: 'AddDiscount', component: discountingAdd_1.DiscountingAddComponent },
                        { path: '/collection', name: 'Collection', component: collection_1.CollectionComponent },
                        { path: '/addCollection', name: 'AddCollection', component: collectionAdd_1.CollectionAddComponent },
                        { path: '/itemGroup', name: 'ItemGroup', component: itemGroup_1.ItemGroupComponent },
                        { path: '/addItemGroup', name: 'ItemGroupAdd', component: itemGroupAdd_1.ItemGroupAddComponent },
                        { path: '/collectionReports', name: 'CollectionReports', component: collectionReports_1.CollectionReportsComponent },
                        { path: '/customer', name: 'Customer', component: customer_1.CustomerComponent },
                        { path: '/addCustomer', name: 'CustomerAdd', component: customerAdd_1.CustomerAddComponent },
                        { path: '/purchaseOrder', name: 'Purchases', component: purchases_1.PurchasesComponent },
                        { path: '/addPurchaseOrder', name: 'PurchasesAdd', component: purchasesAdd_1.PurchaseAddComponent },
                        { path: '/itemComponents', name: 'ItemComponents', component: itemComponents_1.ItemComponentsComponent },
                        { path: '/receivable', name: 'Receivables', component: receivable_1.ReceivableComponent },
                        { path: '/supplier', name: 'Supplier', component: supplier_1.SupplierComponent },
                        { path: '/addSupplier', name: 'SupplierAdd', component: supplierAdd_1.SupplierAddComponent },
                        { path: '/disbursement', name: 'Disbursement', component: disbursement_1.DisbursementComponent },
                        { path: '/restaurantTables', name: 'RestaurantTables', component: restaurantTables_1.RestaurantTablesComponent },
                        { path: '/debitCreditMemo', name: 'DebitCreditMemo', component: debitCreditMemo_1.DebitCreditMemoComponent },
                        { path: '/systemTables', name: 'SystemTables', component: systemTables_1.SystemTablesComponent },
                        { path: '/stockIn', name: 'StockIn', component: stockIn_1.StockInComponent },
                        { path: '/inventory', name: 'Inventory', component: inventory_1.InventoryComponent },
                        { path: '/disbursementReports', name: 'DisbursementReports', component: disbursementReports_1.DisbursementReportsComponent },
                        { path: '/users', name: 'Users', component: users_1.UsersComponent },
                        { path: '/stockOut', name: 'StockOut', component: stockOut_1.StockOutComponent },
                        { path: '/stockCount', name: 'StockCount', component: stockCount_1.StockCountComponent },
                        { path: '/accountingReports', name: 'AccountingReports', component: accountingReports_1.AccountingReportsComponent },
                        { path: '/settings', name: 'Settings', component: settings_1.SettingsComponent },
                        { path: '/posReports', name: 'PosReports', component: posReports_1.PosReportsComponent },
                        { path: '/8mmPosReports', name: 'EightMmPosReports', component: _8mmPosReports_1.EightMmPosReportsComponent },
                    ]), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map