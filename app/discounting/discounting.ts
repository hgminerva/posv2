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

     public first() : void {
        this.discountsView.moveToFirstPage();
        this.discountingService.updatePageButtons(this);
    }
 
    public next() : void {
        this.discountsView.moveToNextPage();
        this.discountingService.updatePageButtons(this);
    } 

    public previous() : void {
        this.discountsView.moveToPreviousPage();
        this.discountingService.updatePageButtons(this);
    }

    public last() : void {
        this.discountsView.moveToLastPage();
        this.discountingService.updatePageButtons(this);
    }

    public setFilters() : void {
        var inputFilter = (<HTMLInputElement>document.getElementById('InputFilter'));
        var filterText = ''
        var collectionView = this.discountsView;
        var service = this.discountingService;
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
    public getToastr() : ToastsManager { return this.toastr; };

    public getCollectionView() : wijmo.collections.CollectionView { return this.discountsView; }

}