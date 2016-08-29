import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

import {PurchaseService} from './purchaseService';

@Component({
    selector: 'purchases',
    templateUrl: 'app/purchases/purchases.html',
    directives: [
        wjNg2FlexGrid.WjFlexGrid, 
        wjNg2FlexGrid.WjFlexGridColumn, 
        wjNg2FlexGrid.WjFlexGridCellTemplate,
        wjNg2Input.WjComboBox
    ],
    providers: [
        ToastsManager, PurchaseService
    ]
})

export class PurchasesComponent implements OnInit{
    private purchaseView : wijmo.collections.CollectionView;

    constructor(private toastr : ToastsManager, private router : Router, private purchaseService : PurchaseService) {

    }

    public ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {
            //this._router.navigate(['Login']);
        }
        else {
         
        }
        /*Else*/
        this.purchaseView = new wijmo.collections.CollectionView();
        this.purchaseView.pageSize = 10;
        this.purchaseService.listPurchase(this);
    }  

    public onAdd() : void{
        this.router.navigate(['PurchasesAdd']);
    }

    public onClose() : void{
        this.router.navigate(['Dashboard']);
    }

    public deletePurchase() : void {
        this.purchaseService.deletePurchase(this.purchaseView.currentItem, this);
    }

    public next() : void {
        if(this.purchaseView .pageIndex < this.purchaseView .pageCount){
            if(document.getElementById('btnBack').hasAttribute('disabled')){
                document.getElementById('btnBack').removeAttribute('disabled')
            }
            this.purchaseView .moveToNextPage();
        }
        if(this.purchaseView .pageIndex == this.purchaseView .pageCount - 1) {
            document.getElementById('btnNext').setAttribute('disabled', 'disabled');
        }
        console.log(this.purchaseView .sourceCollection[0].Id);
    }

    public back() : void {
        if(this.purchaseView .pageIndex < this.purchaseView .pageCount) {
            if(document.getElementById('btnNext').hasAttribute('disabled')) {
                document.getElementById('btnNext').removeAttribute('disabled'); 
            }
            this.purchaseView .moveToPreviousPage();
        }
        if(this.purchaseView.pageIndex == 0){
            document.getElementById('btnBack').setAttribute('disabled', 'disabled');
        }
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; }  

    public getCollectionView() : wijmo.collections.CollectionView { return this.purchaseView; }
}