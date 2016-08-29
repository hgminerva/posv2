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

    public next() : void {
        if(this.itemsView.pageIndex < this.itemsView.pageCount){
            if(document.getElementById('btnBack').hasAttribute('disabled')){
                document.getElementById('btnBack').removeAttribute('disabled');
            }
            this.itemsView.moveToNextPage();
        }
        if(this.itemsView.pageIndex == this.itemsView.pageCount - 1) {
            document.getElementById('btnNext').setAttribute('disabled', 'disabled');
        }
    } 

    public back() : void {
       if(this.itemsView.pageIndex > 0) {
            if(document.getElementById('btnNext').hasAttribute('disabled')){
                document.getElementById('btnNext').removeAttribute('disabled');
            }
            this.itemsView.moveToPreviousPage();
       }
       if(this.itemsView.pageIndex == 0) {
           document.getElementById('btnBack').setAttribute('disabled', 'disabled');
       }
    }

    //getters
    public getToastr() : ToastsManager { return this._toastr; }

    public getCollectionView() : wijmo.collections.CollectionView { return this.itemsView; }
}