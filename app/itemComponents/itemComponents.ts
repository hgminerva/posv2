import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

import {ItemComponentService} from './itemComponentService';

@Component({
    selector: 'itemComponents',
    templateUrl: 'app/itemComponents/itemComponents.html',
    directives: [
        wjNg2FlexGrid.WjFlexGrid, 
        wjNg2FlexGrid.WjFlexGridColumn, 
        wjNg2FlexGrid.WjFlexGridCellTemplate,
        wjNg2Input.WjComboBox
    ],
    providers: [
        ToastsManager, ItemComponentService
    ]
})

export class ItemComponentsComponent implements OnInit{
    private itemComponentView : wijmo.collections.CollectionView;

    constructor(private toastr : ToastsManager,
                private router : Router,
                private itemComponentsService : ItemComponentService) {

    }

    public ngOnInit() : void {
          if(!localStorage.getItem('access_token')) {
            //this._router.navigate(['Login']);
        }
        else {
         
        }
        /*Else*/
        this.itemComponentView = new wijmo.collections.CollectionView();
        this.itemComponentView.pageSize = 10;
        this.itemComponentsService.listItemComponent(this);
    }
    
    public onClose() : void {
        this.router.navigate(['Dashboard']);
    }

    public deleteItemComponent() : void {
        
    }

     public first() : void {
        this.itemComponentView.moveToFirstPage();
        this.itemComponentsService.updatePageButtons(this);
    }
 
    public next() : void {
        this.itemComponentView.moveToNextPage();
        this.itemComponentsService.updatePageButtons(this);
    } 

    public previous() : void {
        this.itemComponentView.moveToPreviousPage();
        this.itemComponentsService.updatePageButtons(this);
    }

    public last() : void {
        this.itemComponentView.moveToLastPage();
        this.itemComponentsService.updatePageButtons(this);
    }

    public setFilters() : void {
        var inputFilter = (<HTMLInputElement>document.getElementById('InputFilter'));
        var filterText = ''
        var collectionView = this.itemComponentView;
        var service = this.itemComponentsService;
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
    //getters
    public getToastr() : ToastsManager { return this.toastr; }  

    public getCollectionView() : wijmo.collections.CollectionView { return this.itemComponentView; }; 
}