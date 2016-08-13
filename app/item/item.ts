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
    private items : wijmo.collections.ObservableArray;

    constructor(private itemService : ItemService, private _toastr : ToastsManager, private _router : Router){
    
    }

    /** 
    *This function is just like a constructor will initialize all the component elements
    *when discounting in dashboard is clicked. 
    *Will go back to the login screen if you try to access this component without logging in.
    **/
    ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {
            //this._router.navigate(['Login']);
        }
        else {
         
        }
        /*Else*/
       this.itemsView = new wijmo.collections.CollectionView();
       this.itemsView.pageSize = 10;
       this.itemService.initItems(this, this.itemsView);

    }   


    /*
        This function when clicked will go to addItem.html
    */
    public addItem() : void {
        this._router.navigate(['AddItem']);
    }

    public deleteItem() : void {
        var grid = document.getElementById('flexItem');
        //console.log(grid.selectedItems);
    }

    public returnHome() : void {
        this._router.navigate(['Dashboard']);
    }

    //getters
    public getToastr() : ToastsManager { return this._toastr; }

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
}