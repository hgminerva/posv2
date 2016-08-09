import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

import {CustomerService} from './customerService';

@Component({
    selector: 'customer',
    templateUrl: 'app/customer/customer.html',
    directives: [
        wjNg2FlexGrid.WjFlexGrid, 
        wjNg2FlexGrid.WjFlexGridColumn, 
        wjNg2FlexGrid.WjFlexGridCellTemplate,
        wjNg2Input.WjComboBox
    ],
    providers: [
        ToastsManager, CustomerService
    ]
})
/**
*This class component will read and display all the customers from the database. 
**/
export class CustomerComponent implements OnInit {
    private customerView : wijmo.collections.CollectionView;

    constructor(private toastr : ToastsManager, private router : Router, private customerService : CustomerService ) {

    }

    /** 
    *This function is just like a constructor will initialize all the component elements
    *when Customer in dashboard is clicked. 
    *Will go back to the login screen if you try to access this component without logging in.
    **/
    public ngOnInit() {
        if(!localStorage.getItem('access_token')) {

        }
        else {

        }
        /*Else*/
        this.customerView = new wijmo.collections.CollectionView();
        this.customerService.initCustomers(this, this.customerView);
    }

    /**
    *This function will go to customerAdd.html when clicked
    **/
    public onAdd() : void  {
        this.router.navigate(['CustomerAdd']);
    }

    /**
    *This function will go back dashboard.html when clicked
    **/
    public onClose() : void {
        this.router.navigate(['Dashboard']);
    }

    //getter
    public getToastr() : ToastsManager { return this.toastr; }

    public next() : void {
        this.customerService.displayDataToGrid(this.customerView);
    }

    public back() : void {

    }

}