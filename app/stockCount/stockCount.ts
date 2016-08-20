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

    public next() : void {
        if(this.stockCountView.pageIndex < this.stockCountView.pageCount){
            if(document.getElementById('btnBack').hasAttribute('disabled')){
                document.getElementById('btnBack').removeAttribute('disabled')
            }
            this.stockCountView.moveToNextPage();
        }
        if(this.stockCountView.pageIndex == this.stockCountView.pageCount - 1) {
            document.getElementById('btnNext').setAttribute('disabled', 'disabled');
        }
        console.log(this.stockCountView.sourceCollection[0].Id);
    }

    public back() : void {
        if(this.stockCountView.pageIndex < this.stockCountView.pageCount) {
            if(document.getElementById('btnNext').hasAttribute('disabled')) {
                document.getElementById('btnNext').removeAttribute('disabled'); 
            }
            this.stockCountView.moveToPreviousPage();
        }
        if(this.stockCountView.pageIndex == 0){
            document.getElementById('btnBack').setAttribute('disabled', 'disabled');
        }
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; }

    public getCollectionView() : wijmo.collections.CollectionView { return this.stockCountView; }
}