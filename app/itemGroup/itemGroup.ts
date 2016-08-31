import {Component, OnInit } from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

import {ItemGroupService} from './itemGroupService';

@Component({
    selector: 'itemGroup',
    templateUrl: 'app/itemGroup/itemGroup.html',
    directives: [
        wjNg2FlexGrid.WjFlexGrid, 
        wjNg2FlexGrid.WjFlexGridColumn, 
        wjNg2FlexGrid.WjFlexGridCellTemplate,
        wjNg2Input.WjComboBox
    ],
    providers: [
        ToastsManager, ItemGroupService
    ]
})

export class ItemGroupComponent implements OnInit{
    private itemGroupView : wijmo.collections.CollectionView;

    constructor(private toastr : ToastsManager, private router : Router, private itemGroupService : ItemGroupService) {

    }
    
    public ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {

        }
        else {

        }
        /*Else */
        this.itemGroupView = new wijmo.collections.CollectionView();
        this.itemGroupView.pageSize = 10;
        this.itemGroupService.listItemGroup(this);      
    } 

    public onAdd() : void {
        this.router.navigate(['ItemGroupAdd']);
    }

    public onClose() : void {
        this.router.navigate(['Dashboard']);
    }

    public deleteItemGroup() : void {
        this.itemGroupService.deleteItemGroup(this.itemGroupView.currentItem, this);
    }

     public first() : void {
        this.itemGroupView.moveToFirstPage();
        this.itemGroupService.updatePageButtons(this);
    }
 
    public next() : void {
        this.itemGroupView.moveToNextPage();
        this.itemGroupService.updatePageButtons(this);
    } 

    public previous() : void {
        this.itemGroupView.moveToPreviousPage();
        this.itemGroupService.updatePageButtons(this);
    }

    public last() : void {
        this.itemGroupView.moveToLastPage();
        this.itemGroupService.updatePageButtons(this);
    }

    public setFilters() : void {
        var inputFilter = (<HTMLInputElement>document.getElementById('InputFilter'));
        var filterText = ''
        var collectionView = this.itemGroupView;
        var service = this.itemGroupService;
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

    public getCollectionView() : wijmo.collections.CollectionView { return this.itemGroupView }
}