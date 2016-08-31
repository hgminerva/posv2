import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

import {StockInService} from './stockInService';

@Component({
    selector: 'stockIn',
    templateUrl: 'app/stockIn/stockIn.html',
    directives: [
        wjNg2FlexGrid.WjFlexGrid, 
        wjNg2FlexGrid.WjFlexGridColumn, 
        wjNg2FlexGrid.WjFlexGridCellTemplate,
        wjNg2Input.WjComboBox
    ],
    providers: [
        ToastsManager, StockInService
    ]
})

export class StockInComponent implements OnInit{
    private stockInView : wijmo.collections.CollectionView;

    constructor(private router: Router, 
                private toastr : ToastsManager,
                private stockInService : StockInService) {
        
    }

    public ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {

        }
        else {
            
        }
        /*Else */
        this.stockInView = new wijmo.collections.CollectionView();
        this.stockInView.pageSize = 10;
        this.stockInService.listStockIn(this);
    }

    public onAdd() : void {
         this.router.navigate(['StockInAdd']);
    }

    public onClose() : void {
        this.router.navigate(['Dashboard']);
    }

    public deleteStockIn() : void {
        this.stockInService.deleteStockIn(this.stockInView.currentItem, this);
    }

    public first() : void {
        this.stockInView.moveToFirstPage();
        this.stockInService.updatePageButtons(this);
    }
 
    public next() : void {
        this.stockInView.moveToNextPage();
        this.stockInService.updatePageButtons(this);
    } 

    public previous() : void {
        this.stockInView.moveToPreviousPage();
        this.stockInService.updatePageButtons(this);
    }

    public last() : void {
        this.stockInView.moveToLastPage();
        this.stockInService.updatePageButtons(this);
    }

    public setFilters() : void {
        var inputFilter = (<HTMLInputElement>document.getElementById('InputFilter'));
        var filterText = ''
        var collectionView = this.stockInView;
        var service = this.stockInService;
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

    public getCollectionView() : wijmo.collections.CollectionView { return this.stockInView; }
} 