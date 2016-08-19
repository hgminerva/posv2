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
    private cmbTermSource : wijmo.collections.ObservableArray;
    private cmbAR_AccountSource : wijmo.collections.ObservableArray;
    private cmbDefaultPrice : wijmo.collections.ObservableArray;
    

    private static  CMB_TERM_SOURCE_LENGTH : Number = 5;

    constructor(private toastr : ToastsManager, private router : Router, private customerService : CustomerService) {

    }

    /** 
    *This function is just like a constructor will initialize all the component elements
    *when you add a customer. 
    *Will go back to the login screen if you try to access this component without logging in.
    **/
    public ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {

        }
        else {

        }
        /*Else*/
        this.cmbTermSource = new wijmo.collections.ObservableArray();
        this.cmbAR_AccountSource = new wijmo.collections.ObservableArray();
        this.cmbDefaultPrice = new wijmo.collections.ObservableArray();

        this.initTermCombobox();
        this.initARCombobox();
        this.cmbDefaultPrice.push('');
    }

    /**
    * This function will go back customer.html when clicked
    **/
    public onClose() : void {
        this.addCustomer();
    }

    /**
    *This function will disable all of the content of the  CustomerAdd 
    **/
    public onLock() : void {
       
    }

    /**
    *This function will enable all of the content of the CustomerAdd 
    **/
    public onUnlock() : void {
       
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

    /**
    *This function initializes the  term combobox of customer add page  
    **/
    private initTermCombobox() : void {
        var i, day = 15;
        for(i = 1; i < CustomerAddComponent.CMB_TERM_SOURCE_LENGTH; i++) {
            this.cmbTermSource.push(day + " days");
            day *= 2;
        }

        this.cmbTermSource.push('COD');
    }

    /**
    *This function initializes the  AR Account combobox of customer add page  
    **/
    private initARCombobox() : void {
        this.cmbAR_AccountSource.push('Account Receviable - Others');
        this.cmbAR_AccountSource.push('Account Receviable - Sales');
        this.cmbAR_AccountSource.push('Cash on Hand');
        this.cmbAR_AccountSource.push('Inventory');
    }

    private createCustomer() : Object {
        var data = {
             Customer :(<HTMLInputElement>document.getElementById('txtCustomer')).value,
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