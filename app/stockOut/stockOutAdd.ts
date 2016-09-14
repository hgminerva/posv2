import {Component, OnInit} from 'angular2/core'
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';


import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

import {StockOutService} from './stockOutService';

@Component({
    selector: 'stock-out-add',
    templateUrl: 'app/stockOut/stockOutAdd.html',
    directives: [ 
                 wjNg2FlexGrid.WjFlexGrid, 
                 wjNg2FlexGrid.WjFlexGridColumn, 
                 wjNg2FlexGrid.WjFlexGridCellTemplate,
                 wjNg2Input.WjComboBox
               ],
    providers:[
        ToastsManager,
        StockOutService
    ]
})

export class StockOutAddComponent implements OnInit{

    private stockOutDate : wijmo.input.InputDate;
    private cmbAccount : wijmo.input.ComboBox;
    private cmbPreparedBy : wijmo.input.ComboBox;
    private cmbApprovedBy : wijmo.input.ComboBox;
    private cmbCheckedBy : wijmo.input.ComboBox;

    public constructor(private router : Router, private toastr : ToastsManager, private service : StockOutService) {

    }

    public ngOnInit() : void {
        if(!localStorage.getItem('acceess_token')) {

        }
        else {

        }

        this.stockOutDate = new wijmo.input.InputDate('#inputDate', {
            format: 'MM-dd-yyyy',
            value : new Date()
        });

        this.cmbAccount = new wijmo.input.ComboBox('#cmbAccount');
        this.cmbApprovedBy = new wijmo.input.ComboBox('#cmbApprovedBy');
        this.cmbCheckedBy = new wijmo.input.ComboBox('#cmbCheckedBy');
        this.cmbPreparedBy = new wijmo.input.ComboBox('#cmbPreparedBy');

                
        this.service.initAccount(this, this.cmbAccount);
        this.service.initCombobox(this, this.cmbApprovedBy);
        this.service.initCombobox(this, this.cmbPreparedBy);
        this.service.initCombobox(this, this.cmbCheckedBy);

    }

    public onClose() : void {
        this.router.navigate(['StockOut']);
        this.addStockOut();
    }

    private addStockOut() : void {
        const stockOut = this.createStockOut();
        if(this.validate(stockOut)) {

        }
        else {

        }
    }

    private createStockOut() {
        const stockOut = {

        };
        return stockOut;
    }

    //validation
    private validate(stockOut) : boolean {
        return true;
    }

    private validateRemarks(remarks : string) : boolean {
        return true;
    }
}