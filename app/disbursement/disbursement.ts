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

    public next() : void {
        if(this.disbursementView.pageIndex < this.disbursementView.pageCount){
            if(document.getElementById('btnBack').hasAttribute('disabled')){
                document.getElementById('btnBack').removeAttribute('disabled')
            }
            this.disbursementView .moveToNextPage();
        }
        if(this.disbursementView.pageIndex == this.disbursementView.pageCount - 1) {
            document.getElementById('btnNext').setAttribute('disabled', 'disabled');
        }
        console.log(this.disbursementView.sourceCollection[0].Id);
    }

    public back() : void {
        if(this.disbursementView .pageIndex < this.disbursementView.pageCount) {
            if(document.getElementById('btnNext').hasAttribute('disabled')) {
                document.getElementById('btnNext').removeAttribute('disabled'); 
            }
            this.disbursementView .moveToPreviousPage();
        }
        if(this.disbursementView.pageIndex == 0){
            document.getElementById('btnBack').setAttribute('disabled', 'disabled');
        }
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; }

    public getCollectionView() : wijmo.collections.CollectionView { return this.disbursementView; }
}
