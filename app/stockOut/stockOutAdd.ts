import {Component, OnInit} from 'angular2/core'
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';


import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';


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
        ToastsManager
    ]
})

export class StockOutAddComponent implements OnInit{

    private cmbAuthority : wijmo.collections.ObservableArray;
    private cmbAccount : wijmo.collections.ObservableArray;
    private stockOutDate : wijmo.input.InputDate;

    public constructor(private router : Router, private toastr : ToastsManager) {

    }

    public ngOnInit() : void {
        if(true) {

        }
        else {

        }

        this.cmbAuthority = new wijmo.collections.ObservableArray();
        this.cmbAccount = new wijmo.collections.ObservableArray();
        this.stockOutDate = new wijmo.input.InputDate('#inputDate', {
            format: 'MM-dd-yyyy',
            value : new Date()
        });

        this.initCmbAuthority();
        this.initCmbAccount();
    }

    public onClose() : void {
        this.router.navigate(['StockOut']);
        this.addStockOut();
    }

    private initCmbAuthority() : void {
        this.cmbAuthority.push('Administrator');
        this.cmbAuthority.push('Cashier');
        this.cmbAuthority.push('Teller');
    }

    private initCmbAccount() : void {
        this.cmbAccount.push('Test');
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