import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

@Component({
    selector: 'discount-add',
    templateUrl: 'app/discounting/discountingAdd.html',
     directives: [ 
                 wjNg2FlexGrid.WjFlexGrid, 
                 wjNg2FlexGrid.WjFlexGridColumn, 
                 wjNg2FlexGrid.WjFlexGridCellTemplate,
                 wjNg2Input.WjComboBox,
               ],
    providers : [
        ToastsManager
    ]
})

export class DiscountingAddComponent implements OnInit{
    private dateStart : wijmo.input.InputDate;
    private dateEnd : wijmo.input.InputDate;

    constructor(private router : Router) {

    }

    public ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {

        }
        else {

        }

        /*Else*/
        
        this.dateStart = new wijmo.input.InputDate('#dateStart', {
            format : 'MM/dd/yyyy',
            value : new Date()
        });

         this.dateEnd = new wijmo.input.InputDate('#dateEnd', {
            format : 'MM/dd/yyyy',
            value : new Date()
        });
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