import {Component, OnInit, Inject, Input} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

import {DebitCreditMemoService} from './debitCreditMemoService';

@Component({
    selector: 'purchase-add',
    templateUrl: 'app/debitCreditMemo/debitCreditMemoAdd.html',
    directives: [
        wjNg2FlexGrid.WjFlexGrid, 
        wjNg2FlexGrid.WjFlexGridColumn, 
        wjNg2FlexGrid.WjFlexGridCellTemplate,
        wjNg2Input.WjComboBox,
        wjNg2Input.WjInputDate
    ],
    providers: [
        ToastsManager,
        DebitCreditMemoService
    ]
})

export class DebitCreditMemoAddComponent implements OnInit {
    private debitCreditMemoNumber : String;
    private period : String;
    private inputDate : wijmo.input.InputDate;
    private particulars : String;
    private cmbPreparedBy : wijmo.input.ComboBox;
    private cmbCheckedBy : wijmo.input.ComboBox;
    private cmbApprovedBy : wijmo.input.ComboBox;

    private purchaseAddView : wijmo.collections.CollectionView;
    private purchaseAddSource : wijmo.collections.ObservableArray;


    constructor(private toastr : ToastsManager, private router : Router, private service : DebitCreditMemoService) {

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

        this.purchaseAddSource.push({Quantity : 1});

        this.service.initCombobox(this, this.cmbApprovedBy);
        this.service.initCombobox(this, this.cmbPreparedBy);
        this.service.initCombobox(this, this.cmbCheckedBy);
    }  

    public onLock() : void {
        document.getElementById('flexDebitCreditAdd').setAttribute('disabled', 'disabled');
        document.getElementById('cmbCheckedBy').setAttribute('disabled', 'disabled');
        document.getElementById('cmbApprovedBy').setAttribute('disabled', 'disabled');
        document.getElementById('particulars').setAttribute('disabled','disabled');
        document.getElementById('inputDate').setAttribute('disabled','disabled');
    }

    public onUnlock() : void {
        document.getElementById('flexDebitCreditAdd').removeAttribute('disabled');
        document.getElementById('cmbCheckedBy').removeAttribute('disabled');
        document.getElementById('cmbApprovedBy').removeAttribute('disabled');
        document.getElementById('particulars').removeAttribute('disabled');
        document.getElementById('inputDate').removeAttribute('disabled');
    }

    public onPreview() : void {
    }

    public onPrint() : void {
        
    }

    public onClose() : void {
        this.router.navigate(['DebitCreditMemo']);
        this.addDebitCredit()
    }

    public onSelectChange() : void {
        
    }

   //getters
    public getToastr() : ToastsManager { return this.toastr; }

    private addDebitCredit() : void {
       const debitCredit = this.createDebitCredit();
       if(this.validate(debitCredit)) {

       }
       else {

       }
    }

    private createDebitCredit() {
        const debitCredit = {

        };
        return true;
    }
    
    private validate(debitCredit) : boolean {
        return true;
    }

    private validateRemarks() : boolean {
        return true;
    }
}