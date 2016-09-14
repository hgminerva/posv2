import {Component, OnInit} from 'angular2/core'
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

import {StockCountService} from './stockCountService';

@Component({
    selector: 'stock-out-add',
    templateUrl: 'app/stockCount/stockCountAdd.html',
    directives: [ 
                 wjNg2FlexGrid.WjFlexGrid, 
                 wjNg2FlexGrid.WjFlexGridColumn, 
                 wjNg2FlexGrid.WjFlexGridCellTemplate,
                 wjNg2Input.WjComboBox
               ],
    providers:[
        ToastsManager,
        StockCountService
    ]
})

export class StockCountAddComponent implements OnInit{

    private stockOutDate : wijmo.input.InputDate;
    private cmbPreparedBy : wijmo.input.ComboBox;
    private cmbApprovedBy : wijmo.input.ComboBox;
    private cmbCheckedBy : wijmo.input.ComboBox;

    public constructor(private router : Router, private toastr : ToastsManager, private service : StockCountService) {

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

        this.cmbApprovedBy = new wijmo.input.ComboBox('#cmbApprovedBy');
        this.cmbCheckedBy = new wijmo.input.ComboBox('#cmbCheckedBy');
        this.cmbPreparedBy = new wijmo.input.ComboBox('#cmbPreparedBy');

        this.service.initCombobox(this, this.cmbApprovedBy);
        this.service.initCombobox(this, this.cmbPreparedBy);
        this.service.initCombobox(this, this.cmbCheckedBy);

    }

    public onClose() : void {
        this.router.navigate(['StockOut']);
    }

     private addStockCount() : void {
        const stockCount = this.createStockCount();
        if(this.validate(stockCount)) {

        }
        else {

        }
    }

    private createStockCount() {
        const stockCount = {

        };
        return stockCount;
    }

    //validation
    private validate(stockCount) : boolean {
        return true;
    }

    private validateRemarks(remarks : string) : boolean {
        return true;
    }
}