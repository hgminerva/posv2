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

export class DiscountingAddComponent implements OnInit {
    private discount : String;
    private discountRate : String;
    private vatExempt : Boolean = false;
    private dayScheduled : Boolean = false;
    private dateScheduled : Boolean = false;
    private timeScheduled : Boolean = false;
    private monday : Boolean = false;
    private tuesday : Boolean = false;
    private wednesday : Boolean = false;
    private thursday : Boolean = false;
    private friday : Boolean = false;
    private saturday : Boolean = false;
    private sunday : Boolean = false;


    private timeStart : wijmo.input.InputTime;
    private timeEnd : wijmo.input.InputTime;
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
        this.timeStart = new wijmo.input.InputTime('#timeStart', {
            format: 'hh:mm tt',
            value : new Date()
        });
        this.timeStart = new wijmo.input.InputTime('#timeEnd', {
            format: 'hh:mm tt',
            value : new Date()
        });
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
        document.getElementById('discount').setAttribute('disabled', 'disabled');
        document.getElementById('discountRate').setAttribute('disabled', 'disabled');
        document.getElementById('vatExempt').setAttribute('disabled', 'disabled');
        document.getElementById('dayScheduled').setAttribute('disabled', 'disabled');
        document.getElementById('dateScheduled').setAttribute('disabled', 'disabled');
        document.getElementById('timeScheduled').setAttribute('disabled', 'disabled');
        document.getElementById('dateStart').setAttribute('disabled', 'disabled');
        document.getElementById('timeStart').setAttribute('disabled', 'disabled');
        document.getElementById('dateEnd').setAttribute('disabled', 'disabled');
        document.getElementById('timeEnd').setAttribute('disabled', 'disabled');
        document.getElementById('monday').setAttribute('disabled', 'disabled');
        document.getElementById('tuesday').setAttribute('disabled', 'disabled');
        document.getElementById('wednesday').setAttribute('disabled', 'disabled');
        document.getElementById('thursday').setAttribute('disabled', 'disabled');
        document.getElementById('friday').setAttribute('disabled', 'disabled');
        document.getElementById('saturday').setAttribute('disabled', 'disabled');
        document.getElementById('sunday').setAttribute('disabled', 'disabled');
        document.getElementById('flexDiscount').setAttribute('disabled', 'disabled');
    }

    /*
        This function will enable all of the content of the itemAddTabContent Tab 
    */
    public onUnlock() : void {
        document.getElementById('discount').removeAttribute('disabled');
        document.getElementById('discountRate').removeAttribute('disabled');
        document.getElementById('vatExempt').removeAttribute('disabled');
        document.getElementById('dayScheduled').removeAttribute('disabled');
        document.getElementById('dateScheduled').removeAttribute('disabled');
        document.getElementById('timeScheduled').removeAttribute('disabled');
        document.getElementById('dateStart').removeAttribute('disabled');
        document.getElementById('timeStart').removeAttribute('disabled');
        document.getElementById('dateEnd').removeAttribute('disabled');
        document.getElementById('timeEnd').removeAttribute('disabled');
        document.getElementById('monday').removeAttribute('disabled');
        document.getElementById('tuesday').removeAttribute('disabled');
        document.getElementById('wednesday').removeAttribute('disabled');
        document.getElementById('thursday').removeAttribute('disabled');
        document.getElementById('friday').removeAttribute('disabled');
        document.getElementById('saturday').removeAttribute('disabled');
        document.getElementById('sunday').removeAttribute('disabled');
        document.getElementById('flexDiscount').removeAttribute('disabled');
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