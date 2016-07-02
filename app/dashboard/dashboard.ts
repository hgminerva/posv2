import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/dashboard.html'
})

export class DashboardComponent implements OnInit {
    constructor(private _router: Router) {
    }    
    
    ngOnInit() {
        // if (!localStorage.getItem('access_token')) {
        //     this._router.navigate(['Login']);
        // }
    }
    
    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('token_type');
        localStorage.removeItem('userName');
        localStorage.removeItem('incomeAccountId');  
        localStorage.removeItem('branchId');
        localStorage.removeItem('branch');
        localStorage.removeItem('company');
        
        window.location.replace('/');
    }     
    
    item() {
        this._router.navigate(['Item']);
    }    

    pos() {
        this._router.navigate(['POS']);
    }

    posTouch() {
        this._router.navigate(['POSTouch']);
    }

    reportSales() {
        this._router.navigate(['SalesReports'])
    }

    discounting() {
        this._router.navigate(['Discounting']);
    }

    collection() {
        this._router.navigate(['Collection']);
    }

    itemGroup() {
        this._router.navigate(['ItemGroup']);
    }

    reportCollection() {
        this._router.navigate(['CollectionReports']);
    }

    customer() {
        this._router.navigate(['Customer']);
    }

    purchase() {
        this._router.navigate(['Purchases']);
    }

    itemComponents() {
        this._router.navigate(['ItemComponents']);
    }

    receivable() {
        this._router.navigate(['Receivables']);
    }

    supplier() {
        this._router.navigate(['Supplier']);
    }

    disbursement() {
        this._router.navigate(['Disbursement']);
    }

    restaurantTables() {
        this._router.navigate(['RestaurantTables']);
    }

    debitCreditMemo() {
        this._router.navigate(['DebitCreditMemo']);
    }

    systemTables() {
        this._router.navigate(['SystemTables']);
    }

    stockIn() {
        this._router.navigate(['StockIn']);
    }

    inventory() {
        this._router.navigate(['Inventory']);
    }

    reportDisbursement() {
        this._router.navigate(['DisbursementReports']);
    }

    users() {
        this._router.navigate(['Users']);
    }

    stockOut() {
        this._router.navigate(['StockOut']);
    }

    stockCount() {
        this._router.navigate(['StockCount']);
    }

    reportAccounting() {
        this._router.navigate(['AccountingReports']);
    }

    settings() {
        this._router.navigate(['Settings']);
    }

    reportPOS() {
        this._router.navigate(['PosReports']);
    }

    report8mmPOS() {
        this._router.navigate(['EightMmPosReports']);
    }

    utilities() {

    }

}