import {Component, OnInit, Inject} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

@Component({
    selector: 'purchase-add',
    templateUrl: 'app/purchases/purchasesAdd.html',
    directives: [
        wjNg2FlexGrid.WjFlexGrid, 
        wjNg2FlexGrid.WjFlexGridColumn, 
        wjNg2FlexGrid.WjFlexGridCellTemplate,
        wjNg2Input.WjComboBox,
        wjNg2Input.WjInputDate
    ],
    providers: [
        ToastsManager
    ]
})

/**
* 
*/
export class PurchaseAddComponent implements OnInit{
    private purchaseAddView : wijmo.collections.CollectionView;
    private purchaseAddSource : wijmo.collections.ObservableArray;
    private cmbSupplierSource : wijmo.collections.ObservableArray;
    private cmbAuthority : wijmo.collections.ObservableArray;

    //user input fields
    private txtPO_NO : String;
    private txtPeriod : Number;
    private theDate : Date;
    private cmbSupplier : String;
    private txtRemarks : String ;
    private cmbPreparedBy : String;
    private cmbCheckedBy : String;
    private cmbApprovedBy : String;
    private txtTotalAmount : Number;

    constructor(private toastr : ToastsManager, private router : Router) {

    }

    /** 
    *This function is just like a constructor will initialize all the component elements
    *when there will be new purchase order. 
    *Will go back to the login screen if you try to access this component without logging in.
    **/
    public ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {
            //this._router.navigate(['Login']);
        }
        else {
         
        }
        /*Else*/
        this.purchaseAddSource = new wijmo.collections.ObservableArray();
        this.purchaseAddView = new wijmo.collections.CollectionView(this.purchaseAddSource);
        this.cmbSupplierSource = new wijmo.collections.ObservableArray();
        this.cmbAuthority = new wijmo.collections.ObservableArray();

        this.theDate = new Date();

        this.initCmbSupplier();
        this.initCmbAuthority();
    }  

    public onLock() : void {
        document.getElementById('date').setAttribute('disabled', 'disabled');
    }

    public onUnlock() : void {

    }

    public onPreview() : void {
    }

    public onPrint() : void {
        
    }

    public onClose() : void {
        this.router.navigate(['Purchases']);
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; }

    private initCmbSupplier() : void {
        this.cmbSupplierSource.push('Return from Customer');
    }

    private initCmbAuthority() : void {
        this.cmbAuthority.push('Administrator');
        this.cmbAuthority.push('Cashier');
        this.cmbAuthority.push('Teller');
    }

}