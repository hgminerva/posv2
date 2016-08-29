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
    private cmbPreparedBy : wijmo.input.ComboBox;
    private cmbApprovedBy : wijmo.input.ComboBox;
    private cmbCheckedBy : wijmo.input.ComboBox;
    private cmbDownloadCatergory : wijmo.input.ComboBox;
    private remarks : String;
    private return : Boolean = false;
    private returnOrNumber : String;
    private returnSalesInvoice : String;
    private cmbDownloadCategory : wijmo.input.ComboBox;

    private cmbAuthoritySource : wijmo.collections.ObservableArray;

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

        this.cmbAuthoritySource = new wijmo.collections.ObservableArray();

        this.cmbApprovedBy = new wijmo.input.ComboBox('#cmbApprovedBy');
        this.cmbCheckedBy = new wijmo.input.ComboBox('#cmbCheckedBy');
        this.cmbPreparedBy = new wijmo.input.ComboBox('#cmbPreparedBy');
        this.cmbSupplier = new wijmo.input.ComboBox('#cmbSupplier');
        this.cmbPoNumber = new wijmo.input.ComboBox('#cmbPoNumber');
        this.cmbDownloadCatergory = new wijmo.input.ComboBox('#cmbDownload');
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
        const chkReturn = <HTMLInputElement>document.getElementById('return');
        const txtReturnOrNo = document.getElementById('returnOrNumber');
        const txtReturnSales = document.getElementById('returnSalesInvoice');
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