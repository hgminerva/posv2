import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

@Component({
    selector: 'collection-add',
    templateUrl: 'app/collection/collectionAdd.html',
    providers: [
        ToastsManager
    ]
})

export class CollectionAddComponent implements OnInit{
    
    constructor(private router : Router, private toastr : ToastsManager) {

    }

    public ngOnInit() : void {

    }

    public onLock() : void {

    }

    public onUnLock() : void {
        
    }

    public onPreview() : void {
        
    }

    public onPrint() : void {
        
    }

    public onClose() : void {
        this.router.navigate(['Dashboard']);
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; }
}