import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

@Component({
    selector: 'stockIn',
    templateUrl: 'app/stockIn/stockIn.html',
    directives: [

    ],
    providers: [
        ToastsManager
    ]
})

export class StockInComponent implements OnInit{

    constructor(private router: Router, private toastr : ToastsManager) {
        
    }

    public ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {

        }
        else {
            
        }
    }
}