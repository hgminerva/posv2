import { Component } from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

@Component({
    selector: 'stockCount',
    templateUrl: 'app/stockCount/stockCount.html',
        directives: [
        wjNg2FlexGrid.WjFlexGrid, 
        wjNg2FlexGrid.WjFlexGridColumn, 
        wjNg2FlexGrid.WjFlexGridCellTemplate,
        wjNg2Input.WjComboBox
    ],
    providers: [
        ToastsManager
    ]
})

export class StockCountComponent{

    public constructor(private router : Router, private toastr : ToastsManager) {

    }

    public onAdd() : void {
        this.router.navigate(['StockCountAdd']);
    }

    public onClose() : void {
        this.router.navigate(['Dashboard']);
    }
}