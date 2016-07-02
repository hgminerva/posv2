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
                 wjNg2Input.WjComboBox,
               ],
    providers: [
                ItemService, ToastsManager
            ]
})
export class ItemComponent implements OnInit{
    public collectionItems : wijmo.collections.CollectionView;
    public items : wijmo.collections.ObservableArray;

    constructor(private _itemService : ItemService, private _toastr : ToastsManager, private _router : Router){
    
    }

    ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {
            //this._router.navigate(['Login']);
        }
        else {
         
        }
        this.items = new wijmo.collections.ObservableArray();
        this.collectionItems = new wijmo.collections.CollectionView(this.items);
        this.items.push({itemCode : 'test1'});
        this.items.push({itemCode : 'test2'});
        console.log(this.items.length);
    }   

    public getItems() : void {

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

}