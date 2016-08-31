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

    public onAdd() : void{
        this.router.navigate(['DebitCreditMemoAdd']);
    }

    public onClose() : void {
        this.router.navigate(['Dashboard']);
    }

    public deleteDebitCreditMemo() : void {
        this.debitCreditMemoService.deleteCollection(this.debitCreditMemoView.currentItem, this);
    }

    public first() : void {
        this.debitCreditMemoView.moveToFirstPage();
        this.debitCreditMemoService.updatePageButtons(this);
    }
 
    public next() : void {
        this.debitCreditMemoView.moveToNextPage();
        this.debitCreditMemoService.updatePageButtons(this);
    } 

    public previous() : void {
        this.debitCreditMemoView.moveToPreviousPage();
        this.debitCreditMemoService.updatePageButtons(this);
    }

    public last() : void {
        this.debitCreditMemoView.moveToLastPage();
        this.debitCreditMemoService.updatePageButtons(this);
    }

    public setFilters() : void {
        var inputFilter = (<HTMLInputElement>document.getElementById('InputFilter'));
        var filterText = ''
        var collectionView = this.debitCreditMemoView;
        var service = this.debitCreditMemoService;
        var component = this;

        inputFilter.onkeyup = function (e) {
            filterText = inputFilter.value;
            collectionView.refresh();
        }

        collectionView.filter= function (item){
            return !filterText || (item.ItemCode.toLowerCase().indexOf(filterText.toLowerCase()) > - 1);
        }

        collectionView.currentChanged.addHandler(function() {
            service.updatePageButtons(component);            
        })

        collectionView.collectionChanged.addHandler(function() {
            service.updatePageButtons(component);            
        })
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; }

    public getCollectionView() : wijmo.collections.CollectionView { return this.debitCreditMemoView; }
}
