import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

@Component({
    selector: 'customer-add',
    templateUrl: 'app/disbursement/disbursementAdd.html',
    directives: [
        wjNg2Input.WjComboBox,
        wjNg2Input.WjInputDate
    ],
    providers: [
        ToastsManager
    ]
})

export class DisbursementAddComponent implements OnInit{
    private cmbTermSource : wijmo.collections.ObservableArray;
    private cmbAR_AccountSource : wijmo.collections.ObservableArray;
    private cmbReturnSource : wijmo.collections.ObservableArray;
    private cmbDefaultPrice : wijmo.collections.ObservableArray;
    private cmbTypeSource: wijmo.collections.ObservableArray;

    private cmbAuthoritySource : wijmo.collections.ObservableArray;
    private disbursementDate : wijmo.input.InputDate;

    private static  CMB_TERM_SOURCE_LENGTH : Number = 5;


    constructor(private toastr : ToastsManager, private router : Router) {

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
        this.cmbReturnSource = new wijmo.collections.ObservableArray();
        this.cmbDefaultPrice = new wijmo.collections.ObservableArray();
        this.cmbAuthoritySource = new wijmo.collections.ObservableArray();
        this.cmbTypeSource = new wijmo.collections.ObservableArray();

        this.disbursementDate = new wijmo.input.InputDate('#disbursementDate', {
            format : 'MM/dd/yyyy',
            value : new Date()
        });
        
        this.initTypeCombobox();
        this.initPayTypeCombobox();
        this.initReturnComboBox();
        this.initCmbAuthority();
        this.initCmbTYpe();

        this.cmbDefaultPrice.push('');
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

    /**
    * This function will go back disburement.html when clicked
    **/
    public onClose() : void {
        this.router.navigate(['Disbursement']);
    }
    
    public onReturn() : void {
        var cmbReturn = document.getElementById('cmbReturn');
        if((<HTMLInputElement>document.getElementById('chkReturn')).checked) {
            cmbReturn.removeAttribute('disabled');
        }
        else{
             cmbReturn.setAttribute('disabled','disabled');
        }
    }
    //getters
    public getToastr() : ToastsManager { return this.toastr; } 

    /**
    *This function initializes the  term combobox of customer add page  
    **/
    private initTypeCombobox() : void {
       
    }

    /**
    *This function initializes the  AR Account combobox of customer add page  
    **/
    private initPayTypeCombobox() : void {
      
    }

    private initReturnComboBox() : void{
        this.cmbReturnSource.push('Test');
    }

    private initCmbAuthority() : void {
        this.cmbAuthoritySource.push('Administrator');
        this.cmbAuthoritySource.push('Cashier');
        this.cmbAuthoritySource.push('Teller');
    }

    private initCmbTYpe() : void {
        this.cmbTypeSource.push('Credit');
        this.cmbTypeSource.push('Debit');
    }
}