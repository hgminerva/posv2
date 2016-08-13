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
    private supplierSource : wijmo.collections.ObservableArray;

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
        this.supplierService.initSuppliers(this, this.supplierView);
    }

    /*
        This function will go to supplierAdd.html when clicked
    */
    public onAdd() : void{
        this.router.navigate(['SupplierAdd']);
    }

    public onClose() : void {
        this.router.navigate(['Dashboard']);
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; }

    public next() : void {
        if(this.supplierView.pageIndex < this.supplierView.pageCount){
            if(document.getElementById('btnBack').hasAttribute('disabled')){
                document.getElementById('btnBack').removeAttribute('disabled');
            }
            this.supplierView.moveToNextPage();
        }
        if(this.supplierView.pageIndex == this.supplierView.pageCount - 1) {
            document.getElementById('btnNext').setAttribute('disabled', 'disabled');
        }
    } 

    public back() : void {
       if(this.supplierView.pageIndex > 0) {
            if(document.getElementById('btnNext').hasAttribute('disabled')){
                document.getElementById('btnNext').removeAttribute('disabled');
            }
            this.supplierView.moveToPreviousPage();
       }
       if(this.supplierView.pageIndex == 0) {
           document.getElementById('btnBack').setAttribute('disabled', 'disabled');
       }
    }
    
}