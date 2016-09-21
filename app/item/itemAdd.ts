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
    //grid source
    private grid : wijmo.grid.FlexGrid;
    private collectionItem : wijmo.collections.CollectionView;
    private collectionSrc : wijmo.collections.ObservableArray;

    private priceDescription : string;
    
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

        this.collectionSrc = new wijmo.collections.ObservableArray();
        this.collectionItem = new wijmo.collections.CollectionView(this.collectionSrc);
    

        this.itemService.initCombobox(this,this.cmbUnit, ItemService.API_UNIT_URL, "Unit", "Id");
        this.itemService.initCombobox(this, this.cmbPurchase, ItemService.API_TAX_URL, "Tax", "Id");
        this.itemService.initCombobox(this, this.cmbSales, ItemService.API_TAX_URL, "Tax", "Id");
        this.itemService.initCombobox(this, this.cmbDefaultSupplier, ItemService.API_URL_SUPPLIER, "Supplier", "Id");

        this.itemService.initAccounts(this, this.cmbSalesAccount, this.cmbAssetAccount, this.cmbCostAccount); 

    }

    public onClose() : void {
        this.addItem();
        console.log(this.collectionSrc);
    }

    public onLock() : void {
        document.getElementById('itemAddTabContent').setAttribute('class','disable');
    }

    public onUnLock() : void {
        document.getElementById('itemAddTabContent').setAttribute('class','enable');
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

    public addRow() : void {
        this.collectionItem.items.push({});
        console.log(this.collectionItem.items);
    }

    public delete() : void {
        this.collectionItem.remove(this.collectionItem.currentItem);
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; } 

    public getRouter() : Router { return this.router; }

    private formatCell() : void {
        var grid = this.grid;
        var panel = this.grid.cells;
    
        this.grid.formatItem.addHandler = function(s, e) {
            if(panel.cellType == wijmo.grid.CellType.Cell) {

            }
        }
    }

    private initGrid() : void {
        this.grid = new wijmo.grid.FlexGrid('#grid', {
            autoGenerateColumns: false,
            columns: [
                {
                    header: " ",
                    binding: "deleteId",
                    width: 70,
                    isContentHtml: true,
                    isReadOnly: true,
                    align: "center"
                },
                {
                    header: "Price Description",
                    binding: "priceDescription",
                    width: "5*",
                    isContentHtml: true
                },
                {
                    header: "Price",
                    binding: "price",
                    width: 100,
                    isContentHtml: true,
                    isReadOnly: true,
                    align: "center"
                },
                {
                    header: "Trigger Quantity",
                    binding: "quantity",
                    width: 200,
                    isContentHtml: true,
                    isReadOnly: true,
                    align: "center"
                }
            ],
            itemsSource: this.collectionItem,
            selectionMode: "Row"
        });
    }

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