import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

@Component({
    selector: 'itemAdd',
    templateUrl: 'app/item/itemAdd.html',
    directives: [ 
                 wjNg2FlexGrid.WjFlexGrid, 
                 wjNg2FlexGrid.WjFlexGridColumn, 
                 wjNg2FlexGrid.WjFlexGridCellTemplate,
                 wjNg2Input.WjComboBox,
    ]
})

export class ItemAddComponent implements OnInit{
    private testArray : wijmo.collections.ObservableArray;

    constructor(private router : Router){

    }

    ngOnInit(){
        this.testArray = new wijmo.collections.ObservableArray();
        this.testArray.push('test');
        this.testArray.push('test');
        console.log('test1' + this.testArray.length);
    }
}