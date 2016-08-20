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

    public next() : void {
        if(this.stockInView.pageIndex < this.stockInView.pageCount){
            if(document.getElementById('btnBack').hasAttribute('disabled')){
                document.getElementById('btnBack').removeAttribute('disabled')
            }
            this.stockInView.moveToNextPage();
        }
        if(this.stockInView.pageIndex == this.stockInView.pageCount - 1) {
            document.getElementById('btnNext').setAttribute('disabled', 'disabled');
        }
        console.log(this.stockInView.sourceCollection[0].Id);
    }

    public back() : void {
        if(this.stockInView.pageIndex < this.stockInView.pageCount) {
            if(document.getElementById('btnNext').hasAttribute('disabled')) {
                document.getElementById('btnNext').removeAttribute('disabled'); 
            }
            this.stockInView.moveToPreviousPage();
        }
        if(this.stockInView.pageIndex == 0){
            document.getElementById('btnBack').setAttribute('disabled', 'disabled');
        }
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; }

    public getCollectionView() : wijmo.collections.CollectionView { return this.stockInView; }
} 