import {Component, OnInit} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Http, Headers, RequestOptions, HTTP_PROVIDERS } from 'angular2/http';
import { NgIf } from 'angular2/common';
import { Observable } from 'rxjs/Rx';

import {HomeComponent} from '../home/home';
import {LoginComponent} from '../login/login';
import {LogoutComponent} from '../logout/logout';
import {DashboardComponent} from '../dashboard/dashboard';
import {ProfileComponent} from '../profile/profile';
import {ItemComponent} from '../item/item';
import {ItemAddComponent} from '../item/ItemAdd';
import {POSComponent} from '../pos/pos';
import {POSTouchComponent} from '../posTouch/posTouch';
import {SalesReportsComponent} from '../salesReports/salesReports';
import {DiscountingComponent} from '../discounting/discounting';
import {DiscountingAddComponent} from '../discounting/discountingAdd';
import {CollectionComponent} from '../collection/collection';
import {CollectionAddComponent} from '../collection/collectionAdd';
import {ItemGroupComponent} from '../itemGroup/itemGroup';
import {ItemGroupAddComponent} from '../itemGroup/itemGroupAdd';
import {CollectionReportsComponent} from '../collectionReports/collectionReports';
import {CustomerComponent} from '../customer/customer';
import {CustomerAddComponent} from '../customer/customerAdd';
import {PurchasesComponent} from '../purchases/purchases';
import {PurchaseAddComponent} from '../purchases/purchasesAdd';
import {ItemComponentsComponent} from '../itemComponents/itemComponents';
import {ReceivableComponent} from '../receivable/receivable';
import {SupplierComponent} from '../supplier/supplier';
import {SupplierAddComponent} from '../supplier/supplierAdd';
import {DisbursementComponent} from '../disbursement/disbursement';
import {DisbursementAddComponent} from '../disbursement/disbursementAdd';
import {RestaurantTablesComponent} from '../restaurantTables/restaurantTables';
import {RestaurantTablesAddComponent} from '../restaurantTables/restaurantTablesAdd';
import {DebitCreditMemoComponent} from '../debitCreditMemo/debitCreditMemo';
import {DebitCreditMemoAddComponent} from '../debitCreditMemo/debitCreditMemoAdd';
import {SystemTablesComponent} from '../systemTables/systemTables';
import {StockInComponent} from '../stockIn/stockIn';
import {StockInAddComponent} from '../stockIn/stockInAdd';
import {InventoryComponent} from '../inventory/inventory';
import {DisbursementReportsComponent} from '../disbursementReports/disbursementReports';
import {UsersComponent} from '../users/users';
import {UsersAddComponent} from '../users/usersAdd';
import {StockOutComponent} from '../stockOut/stockOut';
import {StockOutAddComponent} from '../stockOut/stockOutAdd';
import {StockCountComponent} from '../stockCount/stockCount';
import {StockCountAddComponent} from '../stockCount/stockCountAdd';
import {AccountingReportsComponent} from '../accountingReports/accountingReports';
import {SettingsComponent} from '../settings/settings';
import {PosReportsComponent} from '../posReports/posReports';
import {EightMmPosReportsComponent} from '../8mmPosReports/8mmPosReports';
import {PosTouchDetailComponent} from '../posTouch/posTouchDetail';

@Component({
  selector: 'app',
  templateUrl: 'app/app/app.html',
  directives: [
      ROUTER_DIRECTIVES,
      NgIf
  ],
  providers: [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS
  ]
})
@RouteConfig( [{ path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
               { path: '/login', name: 'Login', component: LoginComponent },
               { path: '/logout', name: 'Logout', component: LogoutComponent },
               { path: '/item', name: 'Item', component: ItemComponent},
               { path: '/dashboard', name: 'Dashboard', component: DashboardComponent },
               { path: '/profile', name: 'Profile', component: ProfileComponent },
               { path: '/addItem', name: 'AddItem', component: ItemAddComponent },
               { path: '/pos', name: 'POS', component: POSComponent},  
               { path: '/posTouch', name: 'POSTouch', component: POSTouchComponent },
               { path: '/salesReports', name: 'SalesReports', component: SalesReportsComponent},
               { path: '/discounting', name: 'Discounting', component: DiscountingComponent},
               { path: '/addDiscount', name: 'AddDiscount', component: DiscountingAddComponent},
               { path: '/collection', name: 'Collection', component: CollectionComponent},
               { path: '/addCollection', name: 'AddCollection', component: CollectionAddComponent},
               { path: '/itemGroup', name: 'ItemGroup', component: ItemGroupComponent},
               { path: '/addItemGroup', name: 'ItemGroupAdd', component: ItemGroupAddComponent},
               { path: '/collectionReports', name: 'CollectionReports', component: CollectionReportsComponent},
               { path: '/customer', name: 'Customer', component: CustomerComponent},
               { path: '/addCustomer', name: 'CustomerAdd', component: CustomerAddComponent},
               { path: '/purchaseOrder', name: 'Purchases', component: PurchasesComponent},
               { path: '/addPurchaseOrder', name: 'PurchasesAdd', component: PurchaseAddComponent},
               { path: '/itemComponents', name: 'ItemComponents', component: ItemComponentsComponent},
               { path: '/receivable', name: 'Receivables', component: ReceivableComponent},
               { path: '/supplier', name: 'Supplier', component: SupplierComponent},
               { path: '/addSupplier', name: 'SupplierAdd', component: SupplierAddComponent},
               { path: '/disbursement', name: 'Disbursement', component: DisbursementComponent},
               { path: '/addDisbursement', name: 'DisbursementAdd', component: DisbursementAddComponent},
               { path: '/restaurantTables', name: 'RestaurantTables', component: RestaurantTablesComponent},
               { path: '/addRestaurantTables', name: 'RestaurantTablesAdd', component: RestaurantTablesAddComponent},
               { path: '/debitCreditMemo', name: 'DebitCreditMemo', component: DebitCreditMemoComponent},
               { path: '/addDebitCreditMemo', name: 'DebitCreditMemoAdd', component: DebitCreditMemoAddComponent},
               { path: '/systemTables', name: 'SystemTables', component: SystemTablesComponent},
               { path: '/stockIn', name: 'StockIn', component: StockInComponent},
               { path: '/addStockIn', name: 'StockInAdd', component: StockInAddComponent},
               { path: '/inventory', name: 'Inventory', component: InventoryComponent},
               { path: '/disbursementReports', name: 'DisbursementReports', component: DisbursementReportsComponent},
               { path: '/users', name: 'Users', component: UsersComponent},
               { path: '/addUser', name: 'UsersAdd', component: UsersAddComponent},
               { path: '/stockOut', name: 'StockOut', component: StockOutComponent},
               { path: '/addStockOut', name: 'StockOutAdd', component: StockOutAddComponent},
               { path: '/stockCount', name: 'StockCount', component: StockCountComponent},
               { path: '/addStockCount', name: 'StockCountAdd', component: StockCountAddComponent},
               { path: '/accountingReports', name: 'AccountingReports', component: AccountingReportsComponent},
               { path: '/settings', name: 'Settings', component: SettingsComponent},
               { path: '/posReports', name: 'PosReports', component: PosReportsComponent},
               { path: '/8mmPosReports', name: 'EightMmPosReports', component: EightMmPosReportsComponent},
               { path: '/posTouchDetail', name:"PosTouchDetail", component: PosTouchDetailComponent}
])

export class App {
    public profile : string;
    public login : boolean;
    public time : string;
    
    constructor (_http: Http) {
        localStorage.setItem('api_url', 'http://localhost:9934');
        
        if (!localStorage.getItem('access_token')) {
            this.profile = " "
            this.login = false;
        } else {
            var date = new Date();
            this.time = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
            
            this.profile = localStorage.getItem('userName').toUpperCase();
            this.login = true;        
        }    
    }
    
    ngOnInit(){
        let clock = Observable.timer(2000,1000);
        clock.subscribe(t => this.timer(t));
    }
    
    timer(tick) {
        var date = new Date();
        this.time = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    }
}