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

    public next() : void {
        if(this.itemComponentView .pageIndex < this.itemComponentView .pageCount){
            if(document.getElementById('btnBack').hasAttribute('disabled')){
                document.getElementById('btnBack').removeAttribute('disabled')
            }
            this.itemComponentView .moveToNextPage();
        }
        if(this.itemComponentView .pageIndex == this.itemComponentView .pageCount - 1) {
            document.getElementById('btnNext').setAttribute('disabled', 'disabled');
        }
        console.log(this.itemComponentView .sourceCollection[0].Id);
    }

    public back() : void {
        if(this.itemComponentView .pageIndex < this.itemComponentView .pageCount) {
            if(document.getElementById('btnNext').hasAttribute('disabled')) {
                document.getElementById('btnNext').removeAttribute('disabled'); 
            }
            this.itemComponentView .moveToPreviousPage();
        }
        if(this.itemComponentView.pageIndex == 0){
            document.getElementById('btnBack').setAttribute('disabled', 'disabled');
        }
    }

    //getters
    //getters
    public getToastr() : ToastsManager { return this.toastr; }  

    public getCollectionView() : wijmo.collections.CollectionView { return this.itemComponentView; }; 
}