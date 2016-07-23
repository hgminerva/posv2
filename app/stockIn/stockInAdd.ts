import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

@Component({
    selector: 'stock-in-add',
    templateUrl: 'app/stockIn/stockInAdd.html',
    directives:[

    ],    
    providers: [
        ToastsManager
    ]
})

export class StockInAddComponent implements OnInit{

    public constructor(private router : Router, private toastr : ToastsManager) {

    }

    public ngOnInit() : void {

    }

    public onClose() : void {
        this.router.navigate(['Dashboard']);
    }

    
    public onLock() : void {
        
    }

    
    public onUnlock() : void {
        
    }

    
    public onPreview() : void {
        
    }

    
    public onPrint() : void {
        
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; }

}