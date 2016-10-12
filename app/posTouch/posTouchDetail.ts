import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';

@Component({
    selector: "posTouchDetails",
    templateUrl: "app/posTouch/posTouchDetail.html",
     directives: [ 
                 wjNg2FlexGrid.WjFlexGrid, 
                 wjNg2FlexGrid.WjFlexGridColumn, 
                 wjNg2FlexGrid.WjFlexGridCellTemplate
               ]
})

export class PosTouchDetailComponent implements OnInit {

    public constructor(private router : Router) {

    }
 
    public ngOnInit() :void {

    }
}