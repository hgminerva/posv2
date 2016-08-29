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

    public next() : void {
        if(this.itemGroupView.pageIndex < this.itemGroupView.pageCount){
            if(document.getElementById('btnBack').hasAttribute('disabled')){
                document.getElementById('btnBack').removeAttribute('disabled')
            }
            this.itemGroupView.moveToNextPage();
        }
        if(this.itemGroupView.pageIndex == this.itemGroupView.pageCount - 1) {
            document.getElementById('btnNext').setAttribute('disabled', 'disabled');
        }
        console.log(this.itemGroupView.sourceCollection[0].Id);
    }

    public back() : void {
        if(this.itemGroupView.pageIndex < this.itemGroupView.pageCount) {
            if(document.getElementById('btnNext').hasAttribute('disabled')) {
                document.getElementById('btnNext').removeAttribute('disabled'); 
            }
            this.itemGroupView.moveToPreviousPage();
        }
        if(this.itemGroupView.pageIndex == 0){
            document.getElementById('btnBack').setAttribute('disabled', 'disabled');
        }
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; }

    public getCollectionView() : wijmo.collections.CollectionView { return this.itemGroupView }
}