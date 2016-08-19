import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';
import {CollectionService} from './collectionService';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';


@Component({
    selector: 'collection',
    templateUrl: 'app/collection/collection.html',
    directives: [ 
                wjNg2FlexGrid.WjFlexGrid, 
                wjNg2FlexGrid.WjFlexGridColumn, 
                wjNg2FlexGrid.WjFlexGridCellTemplate,
                wjNg2Input.WjComboBox,
            ],
    providers: [
        CollectionService, ToastsManager
    ]
})

export class CollectionComponent implements OnInit{
    private collectionView : wijmo.collections.CollectionView;

    constructor(private collectionService : CollectionService, 
                private _toastr : ToastsManager,
                 private _router : Router) {

    }

    /** 
    *This function is just like a constructor will initialize all the component elements
    *when discounting in dashboard is clicked. 
    *Will go back to the login screen if you try to access this component without logging in.
    **/
    public ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {
           // this._router.navigate(['Login']);
        }
        else {
        }
        /*Else*/
        this.collectionView = new wijmo.collections.CollectionView();
        this.collectionView.pageSize = 10;
        this.collectionService.listCollection(this);
    }

    /*
        This function will go to discountingAdd.html when clicked
    */

    public onAdd() : void {
        this._router.navigate(['AddCollection']);
    }

    
    /*
        This function will go back dashboard.html when clicked
    */
    public onClose() : void {
        this._router.navigate(['Dashboard']);
    }

    public next() : void {
        if(this.collectionView.pageIndex < this.collectionView.pageCount){
            if(document.getElementById('btnBack').hasAttribute('disabled')){
                document.getElementById('btnBack').removeAttribute('disabled')
            }
            this.collectionView.moveToNextPage();
        }
        if(this.collectionView.pageIndex == this.collectionView.pageCount - 1) {
            document.getElementById('btnNext').setAttribute('disabled', 'disabled');
        }
        console.log(this.collectionView.sourceCollection[0].Id);
    }

    public back() : void {
        if(this.collectionView.pageIndex < this.collectionView.pageCount) {
            if(document.getElementById('btnNext').hasAttribute('disabled')) {
                document.getElementById('btnNext').removeAttribute('disabled'); 
            }
            this.collectionView.moveToPreviousPage();
        }
        if(this.collectionView.pageIndex == 0){
            document.getElementById('btnBack').setAttribute('disabled', 'disabled');
        }
    }

    //getters
    public getToastr() : ToastsManager { return this._toastr; }

    public getCollectionView() : wijmo.collections.CollectionView { return this.collectionView; }
}