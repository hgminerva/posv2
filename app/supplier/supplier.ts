import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

import {SupplierService} from './SupplierService';

@Component({
    selector: 'supplier',
    templateUrl: 'app/supplier/supplier.html',
     directives: [
        wjNg2FlexGrid.WjFlexGrid, 
        wjNg2FlexGrid.WjFlexGridColumn, 
        wjNg2FlexGrid.WjFlexGridCellTemplate,
        wjNg2Input.WjComboBox
    ],
    providers: [
        ToastsManager, SupplierService
    ]
})

export class SupplierComponent implements OnInit{
    private supplierView : wijmo.collections.CollectionView;

    constructor(private toastr : ToastsManager, private router : Router, private supplierService : SupplierService) {

    }

    public ngOnInit() : void {
          if(!localStorage.getItem('access_token')) {
            //this._router.navigate(['Login']);
        }
        else {
         
        }
        /*Else*/
        this.supplierView = new wijmo.collections.CollectionView();
        this.supplierView.pageSize = 10;
        this.supplierService.listSuppliers(this);
    }

    public onAdd() : void{
        this.router.navigate(['SupplierAdd']);
    }

    public onClose() : void {
        this.router.navigate(['Dashboard']);
    }


    public deleteSupplier() : void {
        this.supplierService.deleteSupplier(this.supplierView.currentItem, this);
    }

    public first() : void {
        this.supplierView.moveToFirstPage();
        this.supplierService.updatePageButtons(this);
    }
 
    public next() : void {
        this.supplierView.moveToNextPage();
        this.supplierService.updatePageButtons(this);
    } 

    public previous() : void {
        this.supplierView.moveToPreviousPage();
        this.supplierService.updatePageButtons(this);
    }

    public last() : void {
        this.supplierView.moveToLastPage();
        this.supplierService.updatePageButtons(this);
    }

    public setFilters() : void {
        var inputFilter = (<HTMLInputElement>document.getElementById('InputFilter'));
        var filterText = ''
        var collectionView = this.supplierView;
        var service = this.supplierService;
        var component = this;

        inputFilter.onkeyup = function (e) {
            filterText = inputFilter.value;
            collectionView.refresh();
        }

        collectionView.filter= function (item){
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

    public getCollectionView() : wijmo.collections.CollectionView { return this.supplierView; }
    
}