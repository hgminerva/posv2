import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

@Component({
    selector: 'item-group-add',
    templateUrl: 'app/itemGroup/itemGroupAdd.html',
    directives: [
        wjNg2FlexGrid.WjFlexGrid, 
        wjNg2FlexGrid.WjFlexGridColumn, 
        wjNg2FlexGrid.WjFlexGridCellTemplate,
        wjNg2Input.WjComboBox
    ],
    providers: [
        ToastsManager
    ]
})

export class ItemGroupAddComponent implements OnInit {
    private flexGrid : wijmo.grid.FlexGrid;

    private itemGroup : String;
    private image : ImageData;
    private cmbKitchen : wijmo.input.ComboBox;

    private itemGroupAddView : wijmo.collections.CollectionView;
    private itemGroupAddSource : wijmo.collections.ObservableArray;

    private gridCombobox = []
    //id of cmbKitchen
    private id : number = 0;

    constructor(private toastr : ToastsManager, private router : Router) {

    }

    public ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {

        }
        else {

        }
        /*Else*/

        this.itemGroupAddSource = new wijmo.collections.ObservableArray();
        this.itemGroupAddView = new wijmo.collections.CollectionView(this.itemGroupAddSource);
        this.cmbKitchen = new wijmo.input.ComboBox('#cmbKitchen');


        this.initFlexGrid();
        // this.cmb = new wijmo.input.ComboBox('#cmbKitchen1', {
        //     itemsSource : ['asa','asas']
        // });
        // this.cmb.showDropDownButton = true;

        // console.log(this.cmb.selectedItem);
    }

    public onLock() : void {
        document.getElementById('itemGroup').setAttribute('disabled', 'disabled');
        document.getElementById('cmbKitchen').setAttribute('disabled', 'disabled');
        document.getElementById('flexItemGroupAdd').setAttribute('disabled', 'disabled');
    }

    public onUnlock() : void {
        document.getElementById('itemGroup').removeAttribute('disabled');
        document.getElementById('cmbKitchen').removeAttribute('disabled');
        document.getElementById('flexItemGroupAdd').removeAttribute('disabled');
    }

    public onPreview() : void {
        
    }

    public onPrint() : void {
                 console.log(this.gridCombobox[0].selectedItem);
    }

    public onClose() : void {
        this.router.navigate(['ItemGroup']);
        this.addItemGroup();
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; }

    private addRow() : void {
        var cmb : wijmo.input.ComboBox;
        var id = this.id += 1;
        var gridCombobox = this.gridCombobox;
        var source = this.itemGroupAddSource;

       source.push({
            delete : '<button class="btn btn-danger btn-xs btn-block sharp ">Delete</button>'
        })
        this.flexGrid.formatItem.addHandler(function(s, e) {
            var grid = s;
           
        });
    }

    private test(grid, r, c, cell) {
        console.log('test');
    }

    private initFlexGrid() {
        this.flexGrid = new wijmo.grid.FlexGrid('#flexGrid', 
            {
                autoGenerateColumns : false,
                selectionMode : "Row",
                columns: 
                [
                    {
                        header : " ",
                        binding : "delete",
                        width : 70,
                        align : "center",
                        isContentHtml : true,
                        isReadOnly : true
                    },
                    {
                        header : "Item",
                        binding : "item",
                        width: "*",
                        align : "center",
                        isContentHtml : true,
                        isReadOnly : true
                    }
                ],
                itemsSource : this.itemGroupAddView
            }
        );
    }

    public count() {
        console.log(this.itemGroupAddSource.length);
    }
 
    private addItemGroup() : void {
        const itemGroup = this.createItemGroup();
        if(this.validate(itemGroup)) {

        }
        else {

        }
    }

    private createItemGroup() {
        const itemGroup = {

        };
        return itemGroup;
    }
    //validation
    private validate(itemGroup) : boolean {
        return true;
    }

    private validateItemGroup(itemGroup : string) : boolean  {
        return true;
    }
}