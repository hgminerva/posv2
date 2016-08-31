import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';


import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

import {StockOutService} from './stockOutService';

@Component({
    selector: 'stock-out',
    templateUrl: 'app/stockOut/stockOut.html',
    directives: [ 
                 wjNg2FlexGrid.WjFlexGrid, 
                 wjNg2FlexGrid.WjFlexGridColumn, 
                 wjNg2FlexGrid.WjFlexGridCellTemplate,
                 wjNg2Input.WjComboBox
               ],
    providers: [
                ToastsManager, StockOutService
            ]
})
export class StockOutComponent implements OnInit {
    private stockOutView : wijmo.collections.CollectionView;

    public constructor(private router : Router,
                       private toastr : ToastsManager,
                       private stockOutService : StockOutService) {

    }

    public ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {

        }
        else {

        }
        /*Else*/
        this.stockOutView = new wijmo.collections.CollectionView();
        this.stockOutView.pageSize = 10;
        this.stockOutService.listStockOut(this);
    }

    public onAdd() : void {
        this.router.navigate(['StockOutAdd']);
    }

    public onClose() : void {
        this.router.navigate(['Dashboard']);
    }

    public deleteStockOut() : void {
        this.stockOutService.deleteStockOut(this.stockOutView.currentItem, this);
    }

    public first() : void {
        this.stockOutView.moveToFirstPage();
        this.stockOutService.updatePageButtons(this);
    }
 
    public next() : void {
        this.stockOutView.moveToNextPage();
        this.stockOutService.updatePageButtons(this);
    } 

    public previous() : void {
        this.stockOutView.moveToPreviousPage();
        this.stockOutService.updatePageButtons(this);
    }

    public last() : void {
        this.stockOutView.moveToLastPage();
        this.stockOutService.updatePageButtons(this);
    }

    public setFilters() : void {
        var inputFilter = (<HTMLInputElement>document.getElementById('InputFilter'));
        var filterText = ''
        var collectionView = this.stockOutView;
        var service = this.stockOutService;
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

    public getCollectionView() : wijmo.collections.CollectionView { return this.stockOutView; }
}