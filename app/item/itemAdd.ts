import {Component, OnInit} from 'angular2/core';
import {ItemService} from './itemService';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

@Component({
    selector: 'itemAdd',
    templateUrl: 'app/item/itemAdd.html',
    directives: [ 
                 wjNg2FlexGrid.WjFlexGrid, 
                 wjNg2FlexGrid.WjFlexGridColumn, 
                 wjNg2FlexGrid.WjFlexGridCellTemplate,
                 wjNg2Input.WjComboBox,
    ],
    providers: [
        ToastsManager, ItemService
    ]
})

export class ItemAddComponent implements OnInit{
    private testArray : wijmo.collections.ObservableArray;

    constructor(private router : Router, private toastr : ToastsManager,private itemService : ItemService){

    }

    /** 
    *This function is just like a constructor will initialize all the component elements
    *when discounting in dashboard is clicked. 
    *Will go back to the login screen if you try to access this component without logging in.
    **/
    ngOnInit() : void {
        var cmb : wijmo.input.ComboBox;
        console.log(cmb);
        this.itemService.initUnit(cmb);
    }

    /**
    * This function will go back item.html when clicked
    **/
    onClose() : void {
        this.router.navigate(['Item']);
    }

    /**
    *This function will disable all of the content of the itemAddTabContent Tab 
    **/
    onLock() : void {
        document.getElementById('itemAddTabContent').setAttribute('class','disable');
    console.log('disabled');
    }

    /**
    *This function will enable all of the content of the itemAddTabContent Tab 
    **/
    onUnLock() : void {
        document.getElementById('itemAddTabContent').setAttribute('class','enable');
        console.log('disabled');
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; } 
}