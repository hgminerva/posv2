import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

@Component({
    selector: 'purchases',
    templateUrl: 'app/purchases/purchases.html',
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

export class PurchasesComponent implements OnInit{
    private purchaseView : wijmo.collections.CollectionView;
    private purchaseSource : wijmo.collections.ObservableArray;

    constructor(private toastr : ToastsManager, private router : Router) {

    }

    /** 
    *This function is just like a constructor will initialize all the component elements
    *when purchases in dashboard is clicked. 
    *Will go back to the login screen if you try to access this component without logging in.
    **/
    public ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {
            //this._router.navigate(['Login']);
        }
        else {
         
        }
        /*Else*/
        this.purchaseSource = new wijmo.collections.ObservableArray();
        this.purchaseView = new wijmo.collections.CollectionView(this.purchaseSource);

        this.purchaseSource.push({Lock:true});
    }  

    /*
        This function will go to purchaseAdd.html when clicked
    */
    public onAdd() : void{
        this.router.navigate(['PurchasesAdd']);
    }

    /*
        This function will go back dashboard.html when clicked
    */
    public onClose() : void{
        this.router.navigate(['Dashboard']);
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; }  
}