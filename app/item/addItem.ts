import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {ItemService} from './itemService';

@Component({
    selector: 'addItem',
    templateUrl: 'app/item/addItem.html',
    providers: [
        ToastsManager, ItemService
    ]
})

export class AddItemComponent implements OnInit{

    constructor(private _itemService : ItemService, private _toastr : ToastsManager, private _router : Router) {

    }

    ngOnInit() {
        if(!localStorage.getItem('access_token')){

        }
        else {

        }
    }

    public addItem() : void{
        const newItem = {

        }
    }
    
    //getters
    public getToastr() : ToastsManager { return this._toastr; }

    /*
       This function will check if all user's input are valid.
       Throws an exception if not.
    */
    private isAcceptable(data : Object) : boolean {
        var accept = true;

        return accept;
    }
}