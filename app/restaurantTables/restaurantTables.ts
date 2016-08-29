import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

import {RestaurantTableService} from './restaurantTableService';

@Component({
    selector: 'disbursement',
    templateUrl: 'app/restaurantTables/restaurantTables.html',
     directives: [
        wjNg2FlexGrid.WjFlexGrid, 
        wjNg2FlexGrid.WjFlexGridColumn, 
        wjNg2FlexGrid.WjFlexGridCellTemplate,
        wjNg2Input.WjComboBox
    ],
    providers: [
        ToastsManager, RestaurantTableService
    ]
})

export class RestaurantTablesComponent implements OnInit{
    private restaurantTableView : wijmo.collections.CollectionView;

    constructor(private toastr : ToastsManager,
                private router : Router,
                private restaurantTableService : RestaurantTableService) {

    }

    public ngOnInit() : void {
          if(!localStorage.getItem('access_token')) {
            //this._router.navigate(['Login']);
        }
        else {
         
        }
        /*Else*/
        this.restaurantTableView = new wijmo.collections.CollectionView();
        this.restaurantTableView.pageSize = 10;
        this.restaurantTableService.listRestaurantTables(this);
    }

    public onAdd() : void{
        this.router.navigate(['RestaurantTablesAdd']);
    }

    public onClose() : void {
        this.router.navigate(['Dashboard']);
    }

    public deleteRestaurantTable() : void {
        this.restaurantTableService.deleteCollection(this.restaurantTableView.currentItem, this);
    }

    public next() : void {
        if(this.restaurantTableView.pageIndex < this.restaurantTableView.pageCount){
            if(document.getElementById('btnBack').hasAttribute('disabled')){
                document.getElementById('btnBack').removeAttribute('disabled')
            }
            this.restaurantTableView.moveToNextPage();
        }
        if(this.restaurantTableView.pageIndex == this.restaurantTableView.pageCount - 1) {
            document.getElementById('btnNext').setAttribute('disabled', 'disabled');
        }
        console.log(this.restaurantTableView.sourceCollection[0].Id);
    }

    public back() : void {
        if(this.restaurantTableView.pageIndex < this.restaurantTableView.pageCount) {
            if(document.getElementById('btnNext').hasAttribute('disabled')) {
                document.getElementById('btnNext').removeAttribute('disabled'); 
            }
            this.restaurantTableView.moveToPreviousPage();
        }
        if(this.restaurantTableView.pageIndex == 0){
            document.getElementById('btnBack').setAttribute('disabled', 'disabled');
        }
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; }

    public getCollectionView() : wijmo.collections.CollectionView { return this.restaurantTableView; }
    
}
