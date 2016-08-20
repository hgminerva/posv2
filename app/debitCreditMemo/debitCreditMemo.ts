import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

import {DebitCreditMemoService} from './debitCreditMemoService';

@Component({
    selector: 'disbursement',
    templateUrl: 'app/debitCreditMemo/debitCreditMemo.html',
     directives: [
        wjNg2FlexGrid.WjFlexGrid, 
        wjNg2FlexGrid.WjFlexGridColumn, 
        wjNg2FlexGrid.WjFlexGridCellTemplate,
        wjNg2Input.WjComboBox
    ],
    providers: [
        ToastsManager, DebitCreditMemoService
    ]
})

export class DebitCreditMemoComponent implements OnInit{
    private debitCreditMemoView : wijmo.collections.CollectionView;

    constructor(private toastr : ToastsManager,
                private router : Router,
                private debitCreditMemoService : DebitCreditMemoService) {

    }

    public ngOnInit() : void {
          if(!localStorage.getItem('access_token')) {
            //this._router.navigate(['Login']);
        }
        else {
         
        }
        /*Else*/
        this.debitCreditMemoView = new wijmo.collections.CollectionView();
        this.debitCreditMemoView.pageSize = 10;
        this.debitCreditMemoService.listDebitCreditMemo(this);
    }

    /*
        This function will go to debitCreditMemoAdd.html when click
    */
    public onAdd() : void{
        this.router.navigate(['DebitCreditMemoAdd']);
    }

    public onClose() : void {
        this.router.navigate(['Dashboard']);
    }

    public deleteDebitCreditMemo() : void {
        this.debitCreditMemoService.deleteCollection(this.debitCreditMemoView.currentItem, this);
    }

    public next() : void {
        if(this.debitCreditMemoView .pageIndex < this.debitCreditMemoView .pageCount){
            if(document.getElementById('btnBack').hasAttribute('disabled')){
                document.getElementById('btnBack').removeAttribute('disabled')
            }
            this.debitCreditMemoView .moveToNextPage();
        }
        if(this.debitCreditMemoView .pageIndex == this.debitCreditMemoView .pageCount - 1) {
            document.getElementById('btnNext').setAttribute('disabled', 'disabled');
        }
        console.log(this.debitCreditMemoView .sourceCollection[0].Id);
    }

    public back() : void {
        if(this.debitCreditMemoView .pageIndex < this.debitCreditMemoView .pageCount) {
            if(document.getElementById('btnNext').hasAttribute('disabled')) {
                document.getElementById('btnNext').removeAttribute('disabled'); 
            }
            this.debitCreditMemoView .moveToPreviousPage();
        }
        if(this.debitCreditMemoView .pageIndex == 0){
            document.getElementById('btnBack').setAttribute('disabled', 'disabled');
        }
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; }

    public getCollectionView() : wijmo.collections.CollectionView { return this.debitCreditMemoView; }
}
