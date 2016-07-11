import {Component, OnInit } from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

@Component({
    selector: 'itemGroup',
    templateUrl: 'app/itemGroup/itemGroup.html',
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

export class ItemGroupComponent implements OnInit{
    private itemGroupListView : wijmo.collections.CollectionView;
    private itemGroupListSource : wijmo.collections.ObservableArray;

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
        /*Else */
        this.itemGroupListSource = new wijmo.collections.ObservableArray();
        this.itemGroupListView = new wijmo.collections.CollectionView(this.itemGroupListSource);

        this.itemGroupListSource.push({Lock:true});
    } 

    public onAdd() : void {
        this.router.navigate(['ItemGroupAdd']);
    }

    public onClose() : void {
        this.router.navigate(['Dashboard']);
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; }
}