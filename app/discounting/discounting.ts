import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';
import {DiscountingService} from './discountingService';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

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
    private discountSource : wijmo.collections.ObservableArray;

    constructor(private discountingService : DiscountingService,
                private router : Router,
                private toastr : ToastsManager
               ) {
    }

    public ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {

        }
        else {
        }
        /*
        *Else
        */
        this.discountSource = new wijmo.collections.ObservableArray();
        this.discountsView = new wijmo.collections.CollectionView();
        this.discountsView.pageSize = 15;
        this.discountingService.listDicount(this);

        var pageCount = (<HTMLInputElement>document.getElementById('pageCount'));
        pageCount.innerHTML = this.discountsView.pageIndex + 1 + "/" + (this.discountsView.pageCount + 1);
    }

    public onAdd() : void{
        this.router.navigate(['AddDiscount']);
    }

    public onClose() : void{
        this.router.navigate(['Dashboard']);
    }

    public deleteItem() : void {
        this.discountingService.deleteDiscount(this.discountsView.currentItem, this);
    }

    public next() : void {
        if(this.discountsView.pageIndex < this.discountsView.pageCount){
            if(document.getElementById('btnBack').hasAttribute('disabled')){
                document.getElementById('btnBack').removeAttribute('disabled');
            }
            this.discountsView.moveToNextPage();
        }
        if(this.discountsView.pageIndex == this.discountsView.pageCount - 1) {
            document.getElementById('btnNext').setAttribute('disabled', 'disabled');
        }
    } 

    public back() : void {
       if(this.discountsView.pageIndex > 0) {
            if(document.getElementById('btnNext').hasAttribute('disabled')){
                document.getElementById('btnNext').removeAttribute('disabled');
            }
            this.discountsView.moveToPreviousPage();
       }
       if(this.discountsView.pageIndex == 0) {
           document.getElementById('btnBack').setAttribute('disabled', 'disabled');
       }
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; };

    public getCollectionView() : wijmo.collections.CollectionView { return this.discountsView; }

    public getSource() : wijmo.collections.ObservableArray { return this.discountSource; }

}