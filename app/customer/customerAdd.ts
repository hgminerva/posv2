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

    private cmbTerm: wijmo.input.ComboBox;
    private cmbARAccount : wijmo.input.ComboBox;
    

    private static  CMB_TERM_SOURCE_LENGTH : Number = 5;

    constructor(private toastr : ToastsManager, private router : Router, private customerService : CustomerService) {

    }

    public ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {

        }
        else {

        }
        /*Else*/
        this.cmbTerm = new wijmo.input.ComboBox('#cmbTerm');
        this.cmbARAccount = new wijmo.input.ComboBox('#cmbArAccount');

        this.cmbDefaultPrice = new wijmo.input.ComboBox('#cmbDefaultPrice');

        this.customerService.initCombobox(this, this.cmbTerm, CustomerService.TERM_API_URL, 'Term', 'Id');
        this.customerService.initARCombobox(this, this.cmbARAccount);
        this.customerService.initCombobox(this, this.cmbDefaultPrice, CustomerService.ITEM_PRICE_API_URL, 'PriceDescription', 'Id');
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