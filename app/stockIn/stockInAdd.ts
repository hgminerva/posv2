import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

@Component({
    selector: 'stock-in-add',
    templateUrl: 'app/stockIn/stockInAdd.html',
    directives:[
        wjNg2Input.WjInputDate,
        wjNg2Input.WjComboBox,
         wjNg2FlexGrid.WjFlexGrid, 
        wjNg2FlexGrid.WjFlexGridColumn, 
        wjNg2FlexGrid.WjFlexGridCellTemplate
    ],    
    providers: [
        ToastsManager
    ]
})

export class StockInAddComponent implements OnInit{
    private stockInNumber : String;
    private period : String;
    private stockInDate : wijmo.input.InputDate;
    private cmbSupplier : wijmo.input.ComboBox;
    private cmbPoNumber : wijmo.input.ComboBox;
    private remarks : String;
    private return : Boolean = false;
    private returnOrNumber : String;
    private returnSalesInvoice : String;
    private cmbDownloadCategory : wijmo.input.ComboBox;

    private cmbSupplierSource : wijmo.collections.ObservableArray;
    private cmbPO_NoSource : wijmo.collections.ObservableArray;
    private cmbAuthority : wijmo.collections.ObservableArray;
    private cmbDownloadSource : wijmo.collections.ObservableArray;

    public constructor(private router : Router, private toastr : ToastsManager) {

    }

    public ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {

        }
        else {

        }

        this.stockInDate = new wijmo.input.InputDate('#inputDate', {
            format: 'MM-dd-yyyy',
            value: new Date()
        });
        this.cmbSupplierSource = new wijmo.collections.ObservableArray();
        this.cmbPO_NoSource = new wijmo.collections.ObservableArray();
        this.cmbAuthority = new wijmo.collections.ObservableArray();
        this.cmbDownloadSource = new wijmo.collections.ObservableArray();

        this.initCmbSupplier();
        this.initCmbPO_No();
        this.initCmbAuthority();
        this.initCmbDownload();
    }

    public onClose() : void {
        this.router.navigate(['StockIn']);
        this.addStockIn();
    }

    
    public onLock() : void {
        
    }

    
    public onUnlock() : void {
        
    }

    
    public onPreview() : void {
        
    }

    
    public onPrint() : void {
        
    }

    public enableReturnFields() : void {
        const chkReturn = <HTMLInputElement>document.getElementById('chkReturn');
        const txtReturnOrNo = document.getElementById('txtReturnNo');
        const txtReturnSales = document.getElementById('txtReturnSales');
        if(chkReturn.checked) {
            txtReturnOrNo.removeAttribute('disabled');
            txtReturnSales.removeAttribute('disabled');
        } 
        else {
            txtReturnOrNo.setAttribute('disabled', 'disabled');
            txtReturnSales.setAttribute('disabled', 'disabled');
        }
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; }

    //fill comboboxes
    private initCmbSupplier() : void {
        var ctr;
        const NA_LENGHT = 6;

        for(ctr = 0; ctr < NA_LENGHT; ctr++) {
            this.cmbSupplierSource.push('NA');
        }
        this.cmbSupplierSource.push('Return from customer');
    }

    private initCmbPO_No() : void {
        this.cmbPO_NoSource.push('test');
    }

    private initCmbAuthority() : void {
        this.cmbAuthority.push('Administrator');
        this.cmbAuthority.push('Cashier');
        this.cmbAuthority.push('Teller');
    }

    private initCmbDownload() : void {
        this.cmbDownloadSource.push('test');
    }

    private addStockIn() : void {
        const stockIn = this.createStockIn();
        if(this.validate(stockIn)) {

        }
        else {

        }
    }

    private createStockIn() {
        const stockIn = {

        };
        return stockIn;
    }

    //validation
    private validate(stockIn) : boolean {
        return true;
    }

    private validateRemarks(remarks : string ) : boolean {
        return true;
    }

    private validateReturn_OR_NO(return_OR_NO : string ) : boolean {
        return true;
    }

    private validateSalesInVoice(salesInVoice : string ) : boolean {
        return true;
    }

}