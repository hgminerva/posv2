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

    public next() : void {
        if(this.stockOutView.pageIndex < this.stockOutView.pageCount){
            if(document.getElementById('btnBack').hasAttribute('disabled')){
                document.getElementById('btnBack').removeAttribute('disabled')
            }
            this.stockOutView.moveToNextPage();
        }
        if(this.stockOutView.pageIndex == this.stockOutView.pageCount - 1) {
            document.getElementById('btnNext').setAttribute('disabled', 'disabled');
        }
        console.log(this.stockOutView.sourceCollection[0].Id);
    }

    public back() : void {
        if(this.stockOutView.pageIndex < this.stockOutView.pageCount) {
            if(document.getElementById('btnNext').hasAttribute('disabled')) {
                document.getElementById('btnNext').removeAttribute('disabled'); 
            }
            this.stockOutView.moveToPreviousPage();
        }
        if(this.stockOutView.pageIndex == 0){
            document.getElementById('btnBack').setAttribute('disabled', 'disabled');
        }
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; }

    public getCollectionView() : wijmo.collections.CollectionView { return this.stockOutView; }
}