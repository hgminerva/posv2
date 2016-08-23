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
    private itemGroup : String;
    private image : ImageData;
    private cmbKitchen : wijmo.input.ComboBox;

    private itemGroupAddView : wijmo.collections.CollectionView;
    private itemGroupAddSource : wijmo.collections.ObservableArray;


    constructor(private toastr : ToastsManager, private router : Router) {

    }

    /** 
    *This function is just like a constructor will initialize all the component elements
    *when discounting in dashboard is clicked. 
    *Will go back to the login screen if you try to access this component without logging in.
    **/
    public ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {

        }
        else {

        }
        /*Else*/
        this.itemGroupAddSource = new wijmo.collections.ObservableArray();
        this.itemGroupAddView = new wijmo.collections.CollectionView(this.itemGroupAddSource);

        this.cmbKitchen = new wijmo.input.ComboBox('#cmbKitchen');
        this.itemGroupAddSource.push({});
        
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
        
    }

    public onClose() : void {
        this.router.navigate(['ItemGroup']);
        this.addItemGroup();
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; }


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