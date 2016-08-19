import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';
import {DiscountingService} from './discountingService';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

/*
    This Component controls the behavior of all the dashboard: discounting module.
*/
@Component({
    selector: 'discounting',
    templateUrl: 'app/discounting/discounting.html',
    directives: [ 
                 wjNg2FlexGrid.WjFlexGrid, 
                 wjNg2FlexGrid.WjFlexGridColumn, 
                 wjNg2FlexGrid.WjFlexGridCellTemplate,
                 wjNg2Input.WjComboBox,
               ],
    providers: [
        DiscountingService, ToastsManager
    ]
})

export class DiscountingComponent implements OnInit{
    private discountsView : wijmo.collections.CollectionView;

    constructor(private discountingService : DiscountingService,
                private router : Router,
                private toastr : ToastsManager
               ) {
    }

    /** 
    *This function is just like a constructor will initialize all the component elements
    *when discounting in dashboard is clicked. 
    *Will go back to the login screen if you try to access this component without logging in.
    **/
    public ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {

        }
        else {
        }
        /*
        *Else
        */
        this.discountsView = new wijmo.collections.CollectionView();
        this.discountsView.pageSize = 10;
        this.discountingService.initDicountData(this, this.discountsView)
    }

    /*
        This function will go to discountingAdd.html when clicked
    */
    public onAdd() : void{
        this.router.navigate(['AddDiscount']);
    }

    /*
        This function will go back dashboard.html when clicked
    */
    public onClose() : void{
        this.router.navigate(['Dashboard']);
        this.addDiscount();
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; } 

    public next() : void {
        if(this.discountsView.pageIndex < this.discountsView.pageCount){
            if(document.getElementById('btnBack').hasAttribute('disabled')){
                document.getElementById('btnBack').removeAttribute('disabled');
            }
            this.discountsView.moveToNextPage();
        }
        if(this.discountsView.pageIndex == this.discountsView.pageCount - 1) {
            document.getElementById('btnNext').setAttribute('disabled', 'disabled');
        }
    } 

    public back() : void {
       if(this.discountsView.pageIndex > 0) {
            if(document.getElementById('btnNext').hasAttribute('disabled')){
                document.getElementById('btnNext').removeAttribute('disabled');
            }
            this.discountsView.moveToPreviousPage();
       }
       if(this.discountsView.pageIndex == 0) {
           document.getElementById('btnBack').setAttribute('disabled', 'disabled');
       }
    }

    private addDiscount() : void {
        const discount = this.createDiscount();
        if(this.validate(discount)) {

        }
        else {

        }
    }
    
    private createDiscount() {
        const discount = {

        };
        return true;
    }
    //validation
    private validate(dicount) : boolean {
        return true;
    } 

    private validateDiscount(discount : string ) : boolean {
        return true;
    }
}