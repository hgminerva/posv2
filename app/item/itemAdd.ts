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
    private itemCode : String
    private barCode : String;
    private itemDescription : String;
    private alias : String;
    private cmbCategory : wijmo.input.ComboBox;
    private cmbUnit : wijmo.input.ComboBox;
    private cmbDefaultSupplier : wijmo.input.ComboBox;
    private cost : String;
    private markUp : String;
    private price : String;
    private stockLevelQuantity : String;
    private onHandQuantity : String;
    private inventoty : Boolean = false;
    private package : Boolean = false;
    private expiryDate : wijmo.input.InputDate;
    private lotNumber : String;

    constructor(private router : Router, private toastr : ToastsManager,private itemService : ItemService){

    }

    public ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {

        }
        else {

        }
     
        this.expiryDate = new wijmo.input.InputDate('#expiryDate', {
            format: 'MM/dd/yyyy',
            value: new Date()
        });
        this.itemService.initUnit(this,this.cmbUnit);
    }

    public onClose() : void {
        this.addItem();
        this.router.navigate(['Item']);
    }

    public onLock() : void {
        document.getElementById('itemAddTabContent').setAttribute('class','disable');
        console.log('disabled');
    }

    public onUnLock() : void {
        document.getElementById('itemAddTabContent').setAttribute('class','enable');
        console.log('disabled');
    }

    public addItem() : void {
        var item = this.createItem();
        if(this.validate(item)) {

        }
        else {

        }
    }

    public createItem() {
        var item = {

        };
        return item;
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; } 

    //validation
    private validate(item) : boolean {
        return true;
    }

    private validateBarCode(barCode : string) : boolean {
        return true;
    }

    private validateItemDescription(itemDescription : string) : boolean {
        return true;
    }

    private validateAlias(alias : string) : boolean {
        return true;
    }

    private validateCost(cost : string ) : boolean {
        return true;
    }

    private validateMarkUp(markUp : string ) : boolean {
        return true;
    }

    private validatePrice(price : string ) : boolean {
        return true;
    }

    private validateStockLevelQuantity(stockLevelQty : string ) : boolean {
        return true;
    } 

    private validateRemarks(remarks : string ) : booean {
        return true;
    }

    private validateGenericName(genericName : string ) : boolean {
        return true;
    }

}