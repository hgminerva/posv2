import {Component, OnInit, Inject, Input} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

@Component({
    selector: 'purchase-add',
    templateUrl: 'app/restaurantTables/restaurantTablesAdd.html',
    directives: [
        wjNg2FlexGrid.WjFlexGrid, 
        wjNg2FlexGrid.WjFlexGridColumn, 
        wjNg2FlexGrid.WjFlexGridCellTemplate,
        wjNg2Input.WjComboBox,
        wjNg2Input.WjInputDate
    ],
    providers: [
        ToastsManager
    ]
})

/**
* 
*/
export class RestaurantTablesAddComponent implements OnInit{
    //grid
    private tableGroup : String;

    private restaurantTableAddView : wijmo.collections.CollectionView;
    private restaurantTableAddSource : wijmo.collections.ObservableArray;


    //html elements input
    private txtTableGroup : String;

    constructor(private toastr : ToastsManager, private router : Router) {

    }

    /** 
    *This function is just like a constructor will initialize all the component elements
    *when there will be a new purchase order. 
    *Will go back to the login screen if you try to access this component without logging in.
    **/
    public ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {
            //this._router.navigate(['Login']);
        }
        else {
         
        }
        /*Else*/
        this.restaurantTableAddSource = new wijmo.collections.ObservableArray();
        this.restaurantTableAddView = new wijmo.collections.CollectionView(this.restaurantTableAddSource);

        this.addRow();

    }  

    public onLock() : void {
        document.getElementById('tableGroup').setAttribute('disabled', 'disabled');
        document.getElementById('restaurantTablesAdd').setAttribute('disabled', 'disabled');
    }

    public onUnlock() : void {
        document.getElementById('tableGroup').removeAttribute('disabled');
        document.getElementById('restaurantTablesAdd').removeAttribute('disabled');
    }

    public onPreview() : void {
    }

    public onPrint() : void {
        
    }

    public onClose() : void {
        this.router.navigate(['RestaurantTables']);
    }

    public onKey(event : any) : void {
        console.log('as');
    }

   //getters
    public getToastr() : ToastsManager { return this.toastr; }

    private addRow() : void {
        this.restaurantTableAddSource.push({Table : '<input type="text" class="input-100">'});
    }

    private addRestaurantTable() : void {
        const restaurantTable = this.createRestaurantTable();
        if(this.validate(restaurantTable)) {

        }
        else {

        }
    }
    
    private createRestaurantTable() {
        const restaurantTable = {

        };
        return restaurantTable;    
    }

    //validation
    private validate(restaurantTable) : boolean {
        return true;
    }

    private validateTableGroup(restaurantTable : string ) {
        return true;
    }
}   