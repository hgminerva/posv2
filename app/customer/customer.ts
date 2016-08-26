import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

import {CustomerService} from './customerService';
import {CustomerAddComponent} from './customerAdd';

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
        ToastsManager, CustomerService, CustomerAddComponent
    ]
})

export class CustomerComponent implements OnInit {
    private customerView : wijmo.collections.CollectionView;

    constructor(private toastr : ToastsManager, 
                private router : Router, 
                private customerService : CustomerService) {

    }

    public ngOnInit() {
        if(!localStorage.getItem('access_token')) {
            
        }
        else {

        }
        /*Else*/
        this.customerView = new wijmo.collections.CollectionView();
        this.customerView.pageSize = 10;
        this.customerService.initCustomers(this);
    }

    public onAdd() : void  {
        this.router.navigate(['CustomerAdd']);
    }


    public onClose() : void {
        this.router.navigate(['Dashboard']);
    }

    public editCustomer() : void {
        var data = this.customerView.currentItem;
        this.router.navigate(['CustomerAdd']);
        console.log(data);
    }

    public deleteCustomer() : void {
        this.customerService.deleteCustomer(this.customerView.currentItem, this);
    }
    

    public next() : void {
        if(this.customerView.pageIndex < this.customerView.pageCount){
            if(document.getElementById('btnBack').hasAttribute('disabled')){
                document.getElementById('btnBack').removeAttribute('disabled')
            }
            this.customerView.moveToNextPage();
        }
        if(this.customerView.pageIndex == this.customerView.pageCount - 1) {
            document.getElementById('btnNext').setAttribute('disabled', 'disabled');
        }
        console.log(this.customerView.sourceCollection[0].Id);
    }

    public back() : void {
        if(this.customerView.pageIndex < this.customerView.pageCount) {
            if(document.getElementById('btnNext').hasAttribute('disabled')) {
                document.getElementById('btnNext').removeAttribute('disabled'); 
            }
            this.customerView.moveToPreviousPage();
        }
        if(this.customerView.pageIndex == 0){
            document.getElementById('btnBack').setAttribute('disabled', 'disabled');
        }
    }

    //getters

    public getToastr() : ToastsManager { return this.toastr; }
    
    public getCustomerView() : wijmo.collections.CollectionView { return this.customerView; }

}