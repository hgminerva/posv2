import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';
import {UsersService} from './usersService';


import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

@Component({
    selector: 'users',
    templateUrl: 'app/users/users.html',
    directives: [ 
                 wjNg2FlexGrid.WjFlexGrid, 
                 wjNg2FlexGrid.WjFlexGridColumn, 
                 wjNg2FlexGrid.WjFlexGridCellTemplate,
                 wjNg2Input.WjComboBox
               ],
    providers: [
                UsersService, ToastsManager
            ]
})

export class UsersComponent implements OnInit{
    
    private usersView : wijmo.collections.CollectionView;

    constructor(private _usersService : UsersService,
                 private _toastr : ToastsManager,
                 private _router : Router) {

    }

    ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {
           // this._router.navigate(['Login']);
        }
        else {

        }
        /*Else*/
        this.usersView = new wijmo.collections.CollectionView();
        this.usersView.pageSize = 10;
        this._usersService.initUsers(this);
    }

    public onAdd() : void {
        this._router.navigate(['UsersAdd']);
    }

    public onClose() : void {
        this._router.navigate(['Dashboard']);
    }

    public deleteUser() : void {
        this._usersService.deleteUserr(this.usersView.currentItem, this);
    }

    //getters
    public getToastr() : ToastsManager { return this._toastr }

    public getCollectionView() : wijmo.collections.CollectionView { return this.usersView; }
    
    public first() : void {
        this.usersView.moveToFirstPage();
        this._usersService.updatePageButtons(this);
    }
 
    public next() : void {
        this.usersView.moveToNextPage();
        this._usersService.updatePageButtons(this);
    } 

    public previous() : void {
        this.usersView.moveToPreviousPage();
        this._usersService.updatePageButtons(this);
    }

    public last() : void {
        this.usersView.moveToLastPage();
        this._usersService.updatePageButtons(this);
    }

    public setFilters() : void {
        var inputFilter = (<HTMLInputElement>document.getElementById('InputFilter'));
        var filterText = ''
        var collectionView = this.usersView;
        var service = this._usersService;
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

}