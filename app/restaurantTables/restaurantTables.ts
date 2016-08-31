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

    public first() : void {
        this.restaurantTableView.moveToFirstPage();
        this.restaurantTableService.updatePageButtons(this);
    }
 
    public next() : void {
        this.restaurantTableView.moveToNextPage();
        this.restaurantTableService.updatePageButtons(this);
    } 

    public previous() : void {
        this.restaurantTableView.moveToPreviousPage();
        this.restaurantTableService.updatePageButtons(this);
    }

    public last() : void {
        this.restaurantTableView.moveToLastPage();
        this.restaurantTableService.updatePageButtons(this);
    }

    public setFilters() : void {
        var inputFilter = (<HTMLInputElement>document.getElementById('InputFilter'));
        var filterText = ''
        var collectionView = this.restaurantTableView;
        var service = this.restaurantTableService;
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

    public getCollectionView() : wijmo.collections.CollectionView { return this.restaurantTableView; }
    
}
