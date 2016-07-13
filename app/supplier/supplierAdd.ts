import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

@Component({
    selector: 'supplier',
    templateUrl: 'app/supplier/supplierAdd.html',
       directives: [
        wjNg2Input.WjComboBox
    ],
    providers: [
        ToastsManager
    ]
})

export class SupplierAddComponent implements OnInit{
    private cmbTermSource : wijmo.collections.ObservableArray;
    private cmbAPAccountSource : wijmo.collections.ObservableArray;

    private static CMB_TERM_LEMGTH : Number = 5;

    constructor(private toastr : ToastsManager, private router : Router) {

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
        document.getElementById('txtSupplier').setAttribute('disabled', 'disabled');
        document.getElementById('txtAddress').setAttribute('disabled', 'disabled');
        document.getElementById('txtTelephone').setAttribute('disabled', 'disabled');
        document.getElementById('txtCellphone').setAttribute('disabled', 'disabled');
        document.getElementById('txtFax').setAttribute('disabled', 'disabled');
        document.getElementById('cmbTerm').setAttribute('disabled','disabled');
        document.getElementById('txtTIN').setAttribute('disabled','disabled');
        document.getElementById('cmbAPAccount').setAttribute('disabled','disabled');
    }

    public onUnlock() : void {
        document.getElementById('txtSupplier').removeAttribute('disabled');
        document.getElementById('txtAddress').removeAttribute('disabled');
        document.getElementById('txtTelephone').removeAttribute('disabled');
        document.getElementById('txtCellphone').removeAttribute('disabled');
        document.getElementById('txtFax').removeAttribute('disabled');
        document.getElementById('cmbTerm').removeAttribute('disabled');
        document.getElementById('txtTIN').removeAttribute('disabled');
        document.getElementById('cmbAPAccount').removeAttribute('disabled');
    }

    public onClose() : void {
        this.router.navigate(['Supplier']);
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; }

    
    /**
    *This function initializes the  term combobox of supplier add page  
    **/
    private initTermCombobox() : void {
        var i, day = 15;
        for(i = 1; i < SupplierAddComponent.CMB_TERM_LEMGTH; i++) {
            this.cmbTermSource.push(day + " days");
            day *= 2;
        }

        this.cmbTermSource.push('COD');

        console.log(this.cmbTermSource.length);
    }

    /**
    *This function initializes the  APAccount combobox of supplier add page  
    **/
    private initAPAccountCombobox() : void {
       this.cmbAPAccountSource.push('Accounts Payable');
       this.cmbAPAccountSource.push('Local Tax Payable');
       this.cmbAPAccountSource.push('VAT Payable-Input');
       this.cmbAPAccountSource.push('VAT Payable-Output');
    }

    private addSupplier() : void {
        
    }    

    private validateUserInput() : boolean {
        return true;
    }
}