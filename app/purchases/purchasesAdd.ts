import {Component, OnInit, Inject, Input} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

import {PurchaseService} from './purchaseService';

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
        ToastsManager,
        PurchaseService
    ]
})

export class PurchaseAddComponent implements OnInit{
    private purchaseAddView : wijmo.collections.CollectionView;
    private purchaseAddSource : wijmo.collections.ObservableArray;
    private cmbItemSource : wijmo.collections.ObservableArray;
    private cmbUnit : wijmo.collections.ObservableArray;
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

    constructor(private toastr : ToastsManager, private router : Router, private service : PurchaseService) {

    }

    public ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {
            //this._router.navigate(['Login']);
        }
        else {
         
        }
        /*Else*/
        this.purchaseAddSource = new wijmo.collections.ObservableArray();
        this.purchaseAddView = new wijmo.collections.CollectionView(this.purchaseAddSource);

        this.inputDate = new  wijmo.input.InputDate('#inputDate', {
            format : 'MM/dd/yyyy',
            value : new Date()
        });

        this.cmbPreparedBy = new wijmo.input.ComboBox('#cmbPreparedBy');
        this.cmbApprovedBy = new wijmo.input.ComboBox('#cmbApprovedBy');
        this.cmbCheckedBy = new wijmo.input.ComboBox('#cmbCheckedBy');
        this.cmbSupplier = new wijmo.input.ComboBox('#cmbSupplier');

    this.purchaseAddSource.push({Quantity : 1});

    this.service.initCombobox(this, this.cmbSupplier, PurchaseService.API_URL_SUPPLIER, 'Supplier', 'Id');
    this.service.initCombobox(this, this.cmbApprovedBy, PurchaseService.API_URL_USER, 'FullName', 'Id');
    this.service.initCombobox(this, this.cmbPreparedBy, PurchaseService.API_URL_USER, 'FullName', 'Id');
    this.service.initCombobox(this, this.cmbCheckedBy, PurchaseService.API_URL_USER, 'FullName', 'Id');
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