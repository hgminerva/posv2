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

    public constructor(private toastr : ToastsManager, private router : Router) {

    }

    public ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {

        }
        else {

        }
    }

    public onClose() : void {
        this.router.navigate(['Users']);
    }

    public onLock() : void {
        
    }

    public onUnlock() : void {
        
    }
}