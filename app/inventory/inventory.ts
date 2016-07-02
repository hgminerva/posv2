import {Component, OnInit} from 'angular2/core';
import {InventoryService} from './inventoryService';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

@Component({
    selector: 'inventory',
    templateUrl: 'app/inventory/inventory.html',
    providers: [
                InventoryService, ToastsManager
            ]
})

export class InventoryComponent implements OnInit{

    constructor(private _inventoryService : InventoryService,
                 private _toastr : ToastsManager, 
                 private _router : Router) {

    }

    ngOnInit() {
        if(!localStorage.getItem('access_token')) {
            this._router.navigate(['Login']);
        }
        else {

        }
    }

    public displayInventory() : void {

    }

    public saveInventory() : void{
       
    }

    public editInventory() : void {
       
    }

    public removeInventory() : void {

    }
    
    //getters
    public getToastr() : ToastsManager { return this._toastr; }

}