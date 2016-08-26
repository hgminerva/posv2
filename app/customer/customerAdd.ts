import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

import {CustomerService} from './customerService';

@Component({
    selector: 'customer-add',
    templateUrl: 'app/customer/customerAdd.html',
    directives: [ 
                 wjNg2FlexGrid.WjFlexGrid, 
                 wjNg2FlexGrid.WjFlexGridColumn, 
                 wjNg2FlexGrid.WjFlexGridCellTemplate,
                 wjNg2Input.WjComboBox
    ],
    providers: [
        ToastsManager, CustomerService
    ]
})

export class CustomerAddComponent implements OnInit{
    private customer : String;
    private address : String;
    private contactPerson : String;
    private contactNumber : String;
    private creditLimit : String;
    private tin : String;
    private withReward : Boolean = false;
    private rewardCardNumber : String;
    private rewardConversion : String;
    private cmbDefaultPrice : wijmo.input.ComboBox;

    private cmbTermSource : wijmo.collections.ObservableArray;
    private cmbAR_AccountSource : wijmo.collections.ObservableArray;
    

    private static  CMB_TERM_SOURCE_LENGTH : Number = 5;

    constructor(private toastr : ToastsManager, private router : Router, private customerService : CustomerService) {

    }

    public ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {

        }
        else {

        }
        /*Else*/
        this.cmbTermSource = new wijmo.collections.ObservableArray();
        this.cmbAR_AccountSource = new wijmo.collections.ObservableArray();

        this.cmbDefaultPrice = new wijmo.input.ComboBox('#cmbDefaultPrice');

        this.initTermCombobox();
        this.initARCombobox();
    }

    public onClose() : void {
        this.addCustomer();
    }

    public onLock() : void {
       document.getElementById('customer').setAttribute('disabled', 'disabled');
       document.getElementById('address').setAttribute('disabled', 'disabled');
       document.getElementById('contactPerson').setAttribute('disabled', 'disabled');
       document.getElementById('contactNumber').setAttribute('disabled', 'disabled');
       document.getElementById('creditLimit').setAttribute('disabled', 'disabled');
       document.getElementById('cmbTerm').setAttribute('disabled', 'disabled');
       document.getElementById('tin').setAttribute('disabled', 'disabled');
       document.getElementById('cmbARAccount').setAttribute('disabled', 'disabled');
       document.getElementById('withReward').setAttribute('disabled', 'disabled');
       document.getElementById('rewardCardNumber').setAttribute('disabled', 'disabled');
       document.getElementById('rewardConversion').setAttribute('disabled', 'disabled');
       document.getElementById('cmbDefaultPrice').setAttribute('disabled', 'disabled');
    }

    public onUnlock() : void {
       document.getElementById('customer').removeAttribute('disabled');
       document.getElementById('address').removeAttribute('disabled');
       document.getElementById('contactPerson').removeAttribute('disabled');
       document.getElementById('contactNumber').removeAttribute('disabled');
       document.getElementById('creditLimit').removeAttribute('disabled');
       document.getElementById('cmbTerm').removeAttribute('disabled');
       document.getElementById('tin').removeAttribute('disabled');
       document.getElementById('cmbARAccount').removeAttribute('disabled');
       document.getElementById('withReward').removeAttribute('disabled');
       document.getElementById('rewardCardNumber').removeAttribute('disabled');
       document.getElementById('rewardConversion').removeAttribute('disabled');
       document.getElementById('cmbDefaultPrice').removeAttribute('disabled');
    }

    public addCustomer() : void {
         const customer = this.createCustomer();
         if(this.validate(customer)) {
            this.customerService.addCustomer(customer, this);
         }
         else {
             
         }
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; } 

    public getRouter() : Router { return this.router; }

    private initTermCombobox() : void {
        var i, day = 15;
        for(i = 1; i < CustomerAddComponent.CMB_TERM_SOURCE_LENGTH; i++) {
            this.cmbTermSource.push(day + " days");
            day *= 2;
        }

        this.cmbTermSource.push('COD');
    }

    private initARCombobox() : void {
        this.cmbAR_AccountSource.push('Account Receviable - Others');
        this.cmbAR_AccountSource.push('Account Receviable - Sales');
        this.cmbAR_AccountSource.push('Cash on Hand');
        this.cmbAR_AccountSource.push('Inventory');
    }

    private createCustomer() : Object {
        var data = {
             Customer : this.customer
        };
        return data;
    }

    //validation
    private validate(data) : boolean {
        return true;
    }
    
    private validateCustomer(customer : string) : boolean {
        return true;
    }

    private validateAddress(address : string) : boolean {
        return true;
    }

    private validateContacNumber(contactNumber : string) : boolean {
        return true;
    }

    private validateContactPerson(contactPerson : string) : boolean {
        return true;
    }

    private validateTin(TIN : string ) : boolean {
        return true;
    } 

    private validateRewardCardNo(rewardCardNo : string ) : boolean {
        return true;
    }

    private validateRewardConversion(rewardConversion : string ) {
        return true;
    }


}