import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

@Component({
    selector: 'disbursement',
    templateUrl: 'app/disbursement/disbursement.html',
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

export class DisbursementComponent implements OnInit{
    private disbursementView : wijmo.collections.CollectionView;
    private disbursementSource : wijmo.collections.ObservableArray;

    constructor(private toastr : ToastsManager, private router : Router) {

    }

    public ngOnInit() : void {
          if(!localStorage.getItem('access_token')) {
            //this._router.navigate(['Login']);
        }
        else {
         
        }
        /*Else*/
        this.disbursementSource = new wijmo.collections.ObservableArray();
        this.disbursementView = new wijmo.collections.CollectionView(this.disbursementSource);

        this.disbursementSource.push({Lock : true});
    }

    /*
        This function will go to disbursementAdd.html when clicked
    */
    public onAdd() : void{
        this.router.navigate(['DisbursementAdd']);
    }

    public onClose() : void {
        this.router.navigate(['Dashboard']);
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; }

    
}
