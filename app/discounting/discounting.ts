import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';
import {DiscountingService} from './discountingService';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

/*
    This Component controls the behavior of all the dashboard: discounting module.
*/
@Component({
    selector: 'discounting',
    templateUrl: 'app/discounting/discounting.html',
    directives: [ 
                 wjNg2FlexGrid.WjFlexGrid, 
                 wjNg2FlexGrid.WjFlexGridColumn, 
                 wjNg2FlexGrid.WjFlexGridCellTemplate,
                 wjNg2Input.WjComboBox,
               ],
    providers: [
        DiscountingService, ToastsManager
    ]
})

export class DiscountingComponent implements OnInit{
    private discountsView : wijmo.collections.CollectionView;
    private discounts : wijmo.collections.ObservableArray;

    constructor(private discountingService : DiscountingService,
                private router : Router,
                private toastr : ToastsManager
               ) {
    }

    /*
        This function is just like a constructor will initialize all the component elements
        when discounting in dashboard is clicked. 
        Will go back to the login screen if you try to access this component without logging in.
    */
    public ngOnInit() : void {
        this.discounts = new wijmo.collections.ObservableArray();
        this.discountsView = new wijmo.collections.CollectionView(this.discounts);

        this.discounts.push({
            DiscountId : 'Test'
        });

        console.log('' + this.discounts.length);
    }

    /*
        This function will go to discountingAdd.html when clicked
    */
    public onAdd() : void{
        this.router.navigate(['AddDiscount']);
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