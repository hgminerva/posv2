import {Component, OnInit} from 'angular2/core';
import {ItemService} from './itemService';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

@Component({
    selector: 'item',
    templateUrl: 'app/item/item.html',
    directives: [ 
                 wjNg2FlexGrid.WjFlexGrid, 
                 wjNg2FlexGrid.WjFlexGridColumn, 
                 wjNg2FlexGrid.WjFlexGridCellTemplate,
                 wjNg2Input.WjComboBox
               ],
    providers: [
                ItemService, ToastsManager
            ]
})
export class ItemComponent implements OnInit{
    private itemsView: wijmo.collections.CollectionView;

    constructor(private itemService : ItemService, private _toastr : ToastsManager, private _router : Router){
    
    }

    ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {
            //this._router.navigate(['Login']);
        }
        else {
         
        }
        /*Else*/
       this.itemsView = new wijmo.collections.CollectionView();
       this.itemsView.pageSize = 15;
       this.itemService.listItems(this);

       this.setFilters();
    }   

    public onAdd() : void {
        this._router.navigate(['AddItem']);
    }

    public deleteItem() : void {
        this.itemService.deleteItem(this.itemsView.currentItem, this);
    }

    public onClose() : void {
        this._router.navigate(['Dashboard']);
    }

    public first() : void {
        this.itemsView.moveToFirstPage();
        this.itemService.updatePageButtons(this);
    }
 
    public next() : void {
        this.itemsView.moveToNextPage();
        this.itemService.updatePageButtons(this);
    } 

    public previous() : void {
        this.itemsView.moveToPreviousPage();
        this.itemService.updatePageButtons(this);
    }

    public last() : void {
        this.itemsView.moveToLastPage();
        this.itemService.updatePageButtons(this);
    }

    public setFilters() : void {
        var inputFilter = (<HTMLInputElement>document.getElementById('InputFilter'));
        var filterText = ''
        var collectionView = this.itemsView;
        var service = this.itemService;
        var component = this;

        inputFilter.onkeyup = function (e) {
            filterText = inputFilter.value;
            collectionView.refresh();
        }

        this.itemsView.filter= function (item){
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
    public getToastr() : ToastsManager { return this._toastr; }

    public getCollectionView() : wijmo.collections.CollectionView { return this.itemsView; }


}