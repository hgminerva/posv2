import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';
import {CollectionService} from './collectionService';

@Component({
    selector: 'collection',
    templateUrl: 'app/collection/collection.html'
})

export class CollectionComponent implements OnInit{
    
    constructor(private _collectionService : CollectionService, 
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

    //getters
    public getToastr() : ToastsManager { return this._toastr; }
}