import {Component, OnInit, Inject, Input} from 'angular2/core';
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
    //grid
    private purchaseAddView : wijmo.collections.CollectionView;
    private purchaseAddSource : wijmo.collections.ObservableArray;
    private cmbItemSource : wijmo.collections.ObservableArray;
    private cmbUnit : wijmo.collections.ObservableArray;
    //html elements sources
    private cmbAuthority : wijmo.collections.ObservableArray;
    //html elements input
    private poNumber : String;
    private period : Number;
    private cmbSupplier : wijmo.input.ComboBox;
    private remarks : String ;
    private cmbPreparedBy : wijmo.input.ComboBox;
    private cmbCheckedBy : wijmo.input.ComboBox;
    private cmbApprovedBy : wijmo.input.ComboBox;
    private totalAmount : Number;
    private download : String;
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
        this.cmbAuthority = new wijmo.collections.ObservableArray();

        this.inputDate = new  wijmo.input.InputDate('#inputDate', {
            format : 'MM/dd/yyyy',
            value : new Date()
        });

        this.cmbPreparedBy = new wijmo.input.ComboBox('#cmbPreparedBy');
        this.cmbApprovedBy = new wijmo.input.ComboBox('#cmbApprovedBy');
        this.cmbCheckedBy = new wijmo.input.ComboBox('#cmbCheckedBy');
        this.cmbSupplier = new wijmo.input.ComboBox('#cmbSupplier');

        this.purchaseAddSource.push({Quantity : 1});
    }  

    public onLock() : void {
        document.getElementById('inputDate').setAttribute('disabled', 'disabled');
        document.getElementById('cmbSupplier').setAttribute('disabled', 'disabled');
        document.getElementById('remarks').setAttribute('disabled', 'disabled');
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
        document.getElementById('remarks').removeAttribute('disabled');
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
        this.addPurchase();
    }

    public onSelectChange() : void {
        
    }

   //getters
    public getToastr() : ToastsManager { return this.toastr; }

    private addPurchase() : void {
       const purchase = this.createPurchase();
       if(this.validate(purchase)) {

       }
       else {

       }
    }
    
    private createPurchase() {
        const purchase = {

        };
        return purchase;
    }

    private validate(purchase) : boolean {
        return true;
    }

    private validateRemarks(remarks : string ) : boolean {
        return true;
    } 

}