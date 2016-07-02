import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';
import {UsersService} from './usersService';

@Component({
    selector: 'users',
    templateUrl: 'app/users/users.html',
    providers: [
                UsersService, ToastsManager
            ]
})

export class UsersComponent implements OnInit{

    constructor(private _usersService : UsersService,
                 private _toastr : ToastsManager,
                 private _router : Router) {

    }

    ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {
            this._router.navigate(['Login']);
        }
        else {

        }
    }

    public getUsers() : void {

    }

    public addUser() : void {

    }

    public setUser() : void {

    }

    public deleteUser() : void {

    }

    //getters
    public getToastr() : ToastsManager { return this._toastr }
}