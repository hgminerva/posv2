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
    public next() : void {
        if(this.usersView.pageIndex < this.usersView.pageCount){
            if(document.getElementById('btnBack').hasAttribute('disabled')){
                document.getElementById('btnBack').removeAttribute('disabled');
            }
            this.usersView.moveToNextPage();
        }
        if(this.usersView.pageIndex == this.usersView.pageCount - 1) {
            document.getElementById('btnNext').setAttribute('disabled', 'disabled');
        }
    } 

    public back() : void {
       if(this.usersView.pageIndex > 0) {
            if(document.getElementById('btnNext').hasAttribute('disabled')){
                document.getElementById('btnNext').removeAttribute('disabled');
            }
            this.usersView.moveToPreviousPage();
       }
       if(this.usersView.pageIndex == 0) {
           document.getElementById('btnBack').setAttribute('disabled', 'disabled');
       }
    }
}