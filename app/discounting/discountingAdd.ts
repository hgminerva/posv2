import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

@Component({
    selector: 'discount-add',
    templateUrl: 'app/discounting/discountingAdd.html',
    providers : [
        ToastsManager
    ]
})

export class DiscountingAddComponent implements OnInit{

    constructor(private router : Router) {

    }

    public ngOnInit() : void {

    }

    public onClose() : void {
        this.router.navigate(['Discounting']);
    }

    /*
        This function will disable all of the content of the itemAddTabContent Tab 
    */
    public onLock() : void {
        
    }

    /*
        This function will enable all of the content of the itemAddTabContent Tab 
    */
    public onUnlock() : void {
       
    }

}