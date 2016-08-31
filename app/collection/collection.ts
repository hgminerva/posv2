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

    public onAdd() : void {
        this._router.navigate(['AddCollection']);
    }

    
    public onClose() : void {
        this._router.navigate(['Dashboard']);
    }

    public deleteCollection() : void {
        this.collectionService.deleteCollection(this.collectionView.currentItem, this);
    }

    public first() : void {
        this.collectionView.moveToFirstPage();
        this.collectionService.updatePageButtons(this);
    }
 
    public next() : void {
        this.collectionView.moveToNextPage();
        this.collectionService.updatePageButtons(this);
    } 

    public previous() : void {
        this.collectionView.moveToPreviousPage();
        this.collectionService.updatePageButtons(this);
    }

    public last() : void {
        this.collectionView.moveToLastPage();
        this.collectionService.updatePageButtons(this);
    }

    public setFilters() : void {
        var inputFilter = (<HTMLInputElement>document.getElementById('InputFilter'));
        var filterText = ''
        var collectionView = this.collectionView;
        var service = this.collectionService;
        var component = this;

        inputFilter.onkeyup = function (e) {
            filterText = inputFilter.value;
            collectionView.refresh();
        }

        this.collectionView.filter= function (item){
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
    public getToastr() : ToastsManager { return this._toastr; }

    public getCollectionView() : wijmo.collections.CollectionView { return this.collectionView; }
}