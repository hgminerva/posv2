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
    

     public first() : void {
        this.customerView.moveToFirstPage();
        this.customerService.updatePageButtons(this);
    }
 
    public next() : void {
        this.customerView.moveToNextPage();
        this.customerService.updatePageButtons(this);
    } 

    public previous() : void {
        this.customerView.moveToPreviousPage();
        this.customerService.updatePageButtons(this);
    }

    public last() : void {
        this.customerView.moveToLastPage();
        this.customerService.updatePageButtons(this);
    }

    public setFilters() : void {
        var inputFilter = (<HTMLInputElement>document.getElementById('InputFilter'));
        var filterText = ''
        var collectionView = this.customerView;
        var service = this.customerService;
        var component = this;

        inputFilter.onkeyup = function (e) {
            filterText = inputFilter.value;
            collectionView.refresh();
        }

        this.customerView.filter= function (item){
            return !filterText || (item.ItemCode.toLowerCase().indexOf(filterText.toLowerCase()) > - 1);
        }

        collectionView.currentChanged.addHandler(function() {
            service.updatePageButtons(component);            
        })

        collectionView.collectionChanged.addHandler(function() {
            service.updatePageButtons(component);            
        })
    }


    //getters

    public getToastr() : ToastsManager { return this.toastr; }
    
    public getCollectionView() : wijmo.collections.CollectionView { return this.customerView; }

}