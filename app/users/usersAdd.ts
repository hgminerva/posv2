import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

@Component({
   selector: 'user-add',
   templateUrl: 'app/users/usersAdd.html',
   directives: [ 
                wjNg2FlexGrid.WjFlexGrid, 
                wjNg2FlexGrid.WjFlexGridColumn, 
                wjNg2FlexGrid.WjFlexGridCellTemplate,
                wjNg2Input.WjComboBox
            ],
    providers :[
       ToastsManager
   ]
})

export class UsersAddComponent implements OnInit{
    private cmbRights : wijmo.input.ComboBox;

    public constructor(private toastr : ToastsManager, private router : Router) {

    }

    public ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {

        }
        else {

        }
        /*Else*/
        this.cmbRights = new wijmo.input.ComboBox('#cmbRights');
    }

    public onClose() : void {
        this.router.navigate(['Users']);
        this.addUser();
    }

    public onLock() : void {
        
    }

    public onUnlock() : void {
        
    }

    private addUser() : void {
        const user = this.createUser();
        if(this.validate(user)) {

        }
        else {

        }
    }

    private createUser() {
        const user = {

        };
        return user;
    }

    //validation
    private validate(user) : boolean {
        return true;
    } 

    private validateUsername(username : string ) : boolean {
        return true;
    }

    private validatePassword(password : string ) : boolean {
        return true;
    }

    private validateAddress(address : string ) : boolean {
        return true;
    }

    private validateUserCardNo(userCardNo : string ) : boolean {
        return true;
    }
}