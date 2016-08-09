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
       document.getElementById('btnBack').setAttribute('disabled', 'disabled');
       this.itemsView = new wijmo.collections.CollectionView(this.items);
       this.itemService.displayItems(this, this.itemsView);
    }   


    /*
        This function when clicked will go to addItem.html
    */
    public addItem() : void {
        this._router.navigate(['AddItem']);
    }

    public returnHome() : void {
        this._router.navigate(['Dashboard']);
    }

    //getters
    public getToastr() : ToastsManager { return this._toastr; }

    public next() : void {
        this.itemService.displayDataToGrid(this.itemsView);
        document.getElementById('btnBack').removeAttribute('disabled');
    } 

    public back() : void {
        if(ItemService.page > 10) {
                ItemService.page -= 20;
                this.itemService.displayDataToGrid(this.itemsView);
        }

        if(ItemService.page == 10) {
            document.getElementById('btnBack').setAttribute('disabled', 'disabled');
        }
    }

}