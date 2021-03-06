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

    public first() : void {
        this.purchaseView.moveToFirstPage();
        this.purchaseService.updatePageButtons(this);
    }
 
    public next() : void {
        this.purchaseView.moveToNextPage();
        this.purchaseService.updatePageButtons(this);
    } 

    public previous() : void {
        this.purchaseView.moveToPreviousPage();
        this.purchaseService.updatePageButtons(this);
    }

    public last() : void {
        this.purchaseView.moveToLastPage();
        this.purchaseService.updatePageButtons(this);
    }

    public setFilters() : void {
        var inputFilter = (<HTMLInputElement>document.getElementById('InputFilter'));
        var filterText = ''
        var collectionView = this.purchaseView;
        var service = this.purchaseService;
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

    public getCollectionView() : wijmo.collections.CollectionView { return this.purchaseView; }
}