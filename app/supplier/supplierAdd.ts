import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

import {SupplierService} from './supplierService';

@Component({
    selector: 'supplier',
    templateUrl: 'app/supplier/supplierAdd.html',
    directives: [
        wjNg2Input.WjComboBox
    ],
    providers: [
        ToastsManager, SupplierService
    ]
})

export class SupplierAddComponent implements OnInit{
    private supplier : String;
    private address : String;
    private telephoneNumber : String;
    private cellphoneNumber : String;
    private faxNumber : String;
    private tin : String;

    private cmbTermSource : wijmo.collections.ObservableArray;
    private cmbAPAccountSource : wijmo.collections.ObservableArray;

    private static CMB_TERM_LEMGTH : Number = 5;

    constructor(private toastr : ToastsManager,
                private router : Router,
                private supplierService  : SupplierService) {

    }

    public ngOnInit() : void {
          if(!localStorage.getItem('access_token')) {
            //this._router.navigate(['Login']);
        }
        else {
         
        }
        /*Else*/
        this.cmbTermSource = new wijmo.collections.ObservableArray();
        this.cmbAPAccountSource = new wijmo.collections.ObservableArray();

        this.initTermCombobox();
        this.initAPAccountCombobox();
    }

     public onLock() : void {
        document.getElementById('supplier').setAttribute('disabled', 'disabled');
        document.getElementById('address').setAttribute('disabled', 'disabled');
        document.getElementById('telephoneNumber').setAttribute('disabled', 'disabled');
        document.getElementById('cellphoneNumber').setAttribute('disabled', 'disabled');
        document.getElementById('faxNumber').setAttribute('disabled', 'disabled');
        document.getElementById('cmbTerm').setAttribute('disabled','disabled');
        document.getElementById('tin').setAttribute('disabled','disabled');
        document.getElementById('cmbAPAccount').setAttribute('disabled','disabled');
    }

    public onUnlock() : void {
        document.getElementById('supplier').removeAttribute('disabled');
        document.getElementById('address').removeAttribute('disabled');
        document.getElementById('telephoneNumber').removeAttribute('disabled');
        document.getElementById('cellphoneNumber').removeAttribute('disabled');
        document.getElementById('faxNumber').removeAttribute('disabled');
        document.getElementById('cmbTerm').removeAttribute('disabled');
        document.getElementById('tin').removeAttribute('disabled');
        document.getElementById('cmbAPAccount').removeAttribute('disabled');
    }

    public onClose() : void {
        this.addSupplier();
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; }

    public getRouter() : Router { return this.router; }

    private initTermCombobox() : void {
        var i, day = 15;
        for(i = 1; i < SupplierAddComponent.CMB_TERM_LEMGTH; i++) {
            this.cmbTermSource.push(day + " days");
            day *= 2;
        }

        this.cmbTermSource.push('COD');
    }

    private initAPAccountCombobox() : void {
       this.cmbAPAccountSource.push('Accounts Payable');
       this.cmbAPAccountSource.push('Local Tax Payable');
       this.cmbAPAccountSource.push('VAT Payable-Input');
       this.cmbAPAccountSource.push('VAT Payable-Output');
    }

    private addSupplier() : void {
        const supplier = this.createSupplier();
        if(this.validate(supplier)) {
            this.supplierService.addSupplier(supplier, this);
        }
        else {

        }
    }    

    private createSupplier() {
        const supplier = {
            Supplier : this.supplier,
            Address : this.address,
            TelephoneNumber : this.telephoneNumber,
            CellphoneNumber : this.cellphoneNumber,
            FaxNumber : this.faxNumber,
            TIN : this.tin
        };
        return supplier;
    }

    private validate(supplier) : boolean {
        return true;
    }

    private validateSupplier(supplier : string ) : boolean {
        return true;
    }

    private validateAddress(address : string ) : boolean {
        return true;
    }

    private validateTelNumber(telNumber : string ) : boolean {
        return true;
    }

    private validateCelNumber(celNumber : string ) : boolean {
        return true;
    }

    private validateFaxNumber(faxNumber : string ) : boolean {
        return true;
    }

    private validateTin(TIN : string ) : boolean {
        return true;
    }
}