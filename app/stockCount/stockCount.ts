import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

import {StockCountService} from './stockCountService';

@Component({
    selector: 'stockCount',
    templateUrl: 'app/stockCount/stockCount.html',
        directives: [
        wjNg2FlexGrid.WjFlexGrid, 
        wjNg2FlexGrid.WjFlexGridColumn, 
        wjNg2FlexGrid.WjFlexGridCellTemplate,
        wjNg2Input.WjComboBox
    ],
    providers: [
        ToastsManager, StockCountService
    ]
})

export class StockCountComponent implements OnInit{
    private stockCountView : wijmo.collections.CollectionView;

    public constructor(private router : Router, 
                       private toastr : ToastsManager,
                       private stockCountService : StockCountService) {

    }

     public ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {

        }
        else {
            
        }
        /*Else */
        this.stockCountView = new wijmo.collections.CollectionView();
        this.stockCountView .pageSize = 10;
        this.stockCountService.listStockCount(this);
    }

    public onAdd() : void {
        this.router.navigate(['StockCountAdd']);
    }

    public onClose() : void {
        this.router.navigate(['Dashboard']);
    }

    public deleteStockCount() : void {
        this.stockCountService.deleteStockCount(this.stockCountView.currentItem, this);
    }

     public first() : void {
        this.stockCountView.moveToFirstPage();
        this.stockCountService.updatePageButtons(this);
    }
 
    public next() : void {
        this.stockCountView.moveToNextPage();
        this.stockCountService.updatePageButtons(this);
    } 

    public previous() : void {
        this.stockCountView.moveToPreviousPage();
        this.stockCountService.updatePageButtons(this);
    }

    public last() : void {
        this.stockCountView.moveToLastPage();
        this.stockCountService.updatePageButtons(this);
    }

    public setFilters() : void {
        var inputFilter = (<HTMLInputElement>document.getElementById('InputFilter'));
        var filterText = ''
        var collectionView = this.stockCountView;
        var service = this.stockCountService;
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

    public getCollectionView() : wijmo.collections.CollectionView { return this.stockCountView; }
}