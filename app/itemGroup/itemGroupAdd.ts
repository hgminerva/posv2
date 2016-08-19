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

export class ItemGroupAddComponent implements OnInit{
    private itemGroupAddView : wijmo.collections.CollectionView;
    private itemGroupAddSource : wijmo.collections.ObservableArray;

    private static KITCHEN_REPORT_LENGTH : Number  = 9;
    private kitchenReportSource: wijmo.collections.ObservableArray;

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
        this.kitchenReportSource = new wijmo.collections.ObservableArray();

        this.initComboKitchenReports();

        this.itemGroupAddSource.push({});
        console.log(this.itemGroupAddSource.length)
    }

    public onLock() : void {

    }

    public onUnlock() : void {
        
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

    private initComboKitchenReports() : void {
        var i;
        for(i = 1; i <=ItemGroupAddComponent.KITCHEN_REPORT_LENGTH; i++ ) {
            this.kitchenReportSource.push('Kitchen' + i);
        }
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