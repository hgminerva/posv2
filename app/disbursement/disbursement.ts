import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

import {DisbursementService} from './disbursementService';

@Component({
    selector: 'disbursement',
    templateUrl: 'app/disbursement/disbursement.html',
     directives: [
        wjNg2FlexGrid.WjFlexGrid, 
        wjNg2FlexGrid.WjFlexGridColumn, 
        wjNg2FlexGrid.WjFlexGridCellTemplate,
        wjNg2Input.WjComboBox
    ],
    providers: [
        ToastsManager, DisbursementService
    ]
})

export class DisbursementComponent implements OnInit{
    private disbursementView : wijmo.collections.CollectionView;

    constructor(private toastr : ToastsManager, 
                private router : Router,
                private disbursementService : DisbursementService) {

    }

    public ngOnInit() : void {
          if(!localStorage.getItem('access_token')) {
            //this._router.navigate(['Login']);
        }
        else {
         
        }
        /*Else*/
        this.disbursementView = new wijmo.collections.CollectionView();
        this.disbursementView.pageSize = 10;
        this.disbursementService.listDisbursement(this);
    }

    public onAdd() : void{
        this.router.navigate(['DisbursementAdd']);
    }

    public onClose() : void {
        this.router.navigate(['Dashboard']);
    }

    public deleteDisbursement() : void {
        this.disbursementService.deleteDisbursement(this.disbursementView.currentItem, this);
    }

    public first() : void {
        this.disbursementView.moveToFirstPage();
        this.disbursementService.updatePageButtons(this);
    }
 
    public next() : void {
        this.disbursementView.moveToNextPage();
        this.disbursementService.updatePageButtons(this);
    } 

    public previous() : void {
        this.disbursementView.moveToPreviousPage();
        this.disbursementService.updatePageButtons(this);
    }

    public last() : void {
        this.disbursementView.moveToLastPage();
        this.disbursementService.updatePageButtons(this);
    }

    public setFilters() : void {
        var inputFilter = (<HTMLInputElement>document.getElementById('InputFilter'));
        var filterText = ''
        var collectionView = this.disbursementView;
        var service = this.disbursementService;
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

    public getCollectionView() : wijmo.collections.CollectionView { return this.disbursementView; }
}
