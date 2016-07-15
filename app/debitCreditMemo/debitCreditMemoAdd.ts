import {Component, OnInit, Inject, Input} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

@Component({
    selector: 'purchase-add',
    templateUrl: 'app/debitCreditMemo/debitCreditMemoAdd.html',
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
export class DebitCreditMemoAddComponent implements OnInit{
    //grid
    private purchaseAddView : wijmo.collections.CollectionView;
    private purchaseAddSource : wijmo.collections.ObservableArray;
    private cmbItemSource : wijmo.collections.ObservableArray;
    private cmbAccount : wijmo.collections.ObservableArray;
    //html elements sources
    private cmbSupplierSource : wijmo.collections.ObservableArray;
    private cmbAuthority : wijmo.collections.ObservableArray;
    //html elements input
    private txtPO_Number : String;
    private txtPeriod : Number;
    private theDate : Date;
    private cmbSupplier : String;
    private txtRemarks : String ;
    private cmbPreparedBy : String;
    private cmbCheckedBy : String;
    private cmbApprovedBy : String;
    private txtTotalAmount : Number;
    private inputDate : wijmo.input.InputDate;

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
        this.cmbItemSource = new wijmo.collections.ObservableArray();
        this.cmbAccount = new wijmo.collections.ObservableArray();

        this.cmbSupplierSource = new wijmo.collections.ObservableArray();
        this.cmbAuthority = new wijmo.collections.ObservableArray();

        this.inputDate = new  wijmo.input.InputDate('#inputDate', {
            format : 'MM/dd/yyyy',
            value : new Date()
        });

        this.initCmbSupplier();
        this.initCmbAuthority();
        this.initCmbAccount();

        this.purchaseAddSource.push({Quantity : 1});
        this.cmbItemSource.push('Test');
        this.cmbItemSource.push('Test1');
    }  

    public onLock() : void {
        document.getElementById('inputDate').setAttribute('disabled', 'disabled');
        document.getElementById('cmbSupplier').setAttribute('disabled', 'disabled');
        document.getElementById('txtRemarks').setAttribute('disabled', 'disabled');
        document.getElementById('cmbCheckedBy').setAttribute('disabled', 'disabled');
        document.getElementById('cmbApprovedBy').setAttribute('disabled', 'disabled');
        document.getElementById('flexPurchaseAdd').setAttribute('disabled','disabled');
        document.getElementById('btnDownload').setAttribute('disabled','disabled');
        document.getElementById('btnImportXLS').setAttribute('disabled','disabled');
        document.getElementById('btnExportXLS').setAttribute('disabled','disabled');
    }

    public onUnlock() : void {
        document.getElementById('inputDate').removeAttribute('disabled');
        document.getElementById('cmbSupplier').removeAttribute('disabled');
        document.getElementById('txtRemarks').removeAttribute('disabled');
        document.getElementById('cmbCheckedBy').removeAttribute('disabled');
        document.getElementById('cmbApprovedBy').removeAttribute('disabled');
        document.getElementById('flexPurchaseAdd').removeAttribute('disabled');
        document.getElementById('btnDownload').removeAttribute('disabled');
        document.getElementById('btnImportXLS').removeAttribute('disabled');
        document.getElementById('btnExportXLS').removeAttribute('disabled');
    }

    public onPreview() : void {
    }

    public onPrint() : void {
        
    }

    public onClose() : void {
        this.router.navigate(['Purchases']);
    }

    public onSelectChange() : void {
        
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

    private initCmbAccount() : void {
        this.cmbAccount.push('Test');
    }

    private addPurchaseOrder() : void {
        var data = {

        }
    }
    
    private validateUserInput() : boolean {
        return true;
    }

}