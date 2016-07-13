import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

@Component({
    selector: 'itemComponents',
    templateUrl: 'app/itemComponents/itemComponents.html',
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

export class ItemComponentsComponent implements OnInit{
    private itemComponentView : wijmo.collections.CollectionView;
    private itemComponentSource : wijmo.collections.ObservableArray;

    constructor(private toastr : ToastsManager, private router : Router) {

    }

    public ngOnInit() : void {
          if(!localStorage.getItem('access_token')) {
            //this._router.navigate(['Login']);
        }
        else {
         
        }
        /*Else*/
        this.itemComponentSource = new wijmo.collections.ObservableArray();
        this.itemComponentView = new wijmo.collections.CollectionView(this.itemComponentSource);

        this.itemComponentSource.push({Lock : true});
    }
    
    public onClose() : void {
        this.router.navigate(['Dashboard']);
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; }
}