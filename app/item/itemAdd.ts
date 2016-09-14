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

export class ItemAddComponent implements OnInit {
    private itemCode : String
    private barCode : String;
    private itemDescription : String;
    private alias : String;
    private cmbCategory : wijmo.input.ComboBox;
    private cmbUnit : wijmo.input.ComboBox;
    private cmbDefaultSupplier : wijmo.input.ComboBox;
    private cmbSalesAccount : wijmo.input.ComboBox;
    private cmbAssetAccount : wijmo.input.ComboBox;
    private cmbCostAccount : wijmo.input.ComboBox;
    private cmbPurchase : wijmo.input.ComboBox;
    private cmbSales : wijmo.input.ComboBox;
    private cmbKitchen : wijmo.input.ComboBox;
    private cost : String;
    private markUp : String;
    private price : String;
    private stockLevelQuantity : String;
    private genericName : String;
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
        /*Else */
        this.expiryDate = new wijmo.input.InputDate('#expiryDate', {
            format: 'MM/dd/yyyy',
            value: new Date()
        });

        this.cmbCategory = new wijmo.input.ComboBox('#cmbCategory');
        this.cmbUnit = new wijmo.input.ComboBox('#cmbUnit');
        this.cmbDefaultSupplier = new wijmo.input.ComboBox('#cmbDefaultSupplier');
        this.cmbSalesAccount = new wijmo.input.ComboBox('#cmbSalesAccount');
        this.cmbAssetAccount = new wijmo.input.ComboBox('#cmbAssetAccount');
        this.cmbCostAccount = new wijmo.input.ComboBox('#cmbCostAccount');
        this.cmbPurchase = new wijmo.input.ComboBox('#cmbPurchase');
        this.cmbSales = new wijmo.input.ComboBox('#cmbSales');
        this.cmbKitchen= new wijmo.input.ComboBox('#cmbKitchen');
    
        this.itemService.initCombobox(this,this.cmbUnit, ItemService.API_UNIT_URL, "Unit", "Id");
        this.itemService.initCombobox(this, this.cmbPurchase, ItemService.API_TAX_URL, "Tax", "Id");
        this.itemService.initCombobox(this, this.cmbSales, ItemService.API_TAX_URL, "Tax", "Id");
        this.itemService.initCombobox(this, this.cmbDefaultSupplier, ItemService.API_URL_SUPPLIER, "Supplier", "Id");

        this.itemService.initAccounts(this, this.cmbSalesAccount, this.cmbAssetAccount, this.cmbCostAccount);
    }

    public onClose() : void {
        this.addItem();
        console.log(this.cmbUnit.selectedValue);
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
            this.itemService.addItem(item, this);
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

    public getRouter() : Router { return this.router; }

    //validation
    private validate(item) : boolean {
        if(!this.validateBarCode(this.barCode)) {
            return false;
        }
        if(!this.validateItemDescription(this.itemDescription)) {
            return false;
        }
        if(!this.validateAlias(this.alias)) {
            return false;
        }
        if(!this.validateCost(this.cost)) {
            return false;
        }
        if(!this.validateMarkUp(this.markUp)) {
            return false;
        }
        if(!this.validatePrice(this.price)) {
            return false;
        }
        if(!this.validateStockLevelQuantity(this.stockLevelQuantity)) {
            return false;
        }
        if(!this.validateGenericName(this.genericName)) {
            return false;
        }

        return true;
    }

    private validateBarCode(barCode : String) : boolean {
        return true;
    }

    private validateItemDescription(itemDescription : String) : boolean {
        return true;
    }

    private validateAlias(alias : String) : boolean {
        return true;
    }

    private validateCost(cost : String ) : boolean {
        return true;
    }

    private validateMarkUp(markUp : String ) : boolean {
        return true;
    }

    private validatePrice(price : String ) : boolean {
        return true;
    }

    private validateStockLevelQuantity(stockLevelQty : String ) : boolean {
        return true;
    } 

    private validateGenericName(genericName : String ) : boolean {
        return true;
    }

}