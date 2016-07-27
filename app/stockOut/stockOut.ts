import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';


import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

@Component({
    selector: 'stock-out',
    templateUrl: 'app/stockOut/stockOut.html',
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
export class StockOutComponent implements OnInit {

    public constructor(private router : Router, private toastr : ToastsManager) {

    }

    public ngOnInit() : void {

    }

    public onAdd() : void {
        this.router.navigate(['StockOutAdd']);
    }

    public onClose() : void {
        this.router.navigate(['Dashboard']);
    }
}