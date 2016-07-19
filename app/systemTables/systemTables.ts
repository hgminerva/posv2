import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

@Component({
    selector: 'systemTables',
    templateUrl: 'app/systemTables/systemTables.html',
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

export class SystemTablesComponent implements OnInit{
    private chartOfAccountsView : wijmo.collections.CollectionView;
    private chartOfAccountsSource : wijmo.collections.ObservableArray;
    private payTypeView : wijmo.collections.CollectionView;
    private payTypeSource : wijmo.collections.ObservableArray;

    constructor(private router : Router, private toastr : ToastsManager) {

    }

    public ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {

        }
        else {

        }
        /*Else*/
        this.chartOfAccountsSource = new wijmo.collections.ObservableArray();
        this.chartOfAccountsView = new wijmo.collections.CollectionView(this.chartOfAccountsSource);
        this.payTypeSource = new wijmo.collections.ObservableArray();
        this.payTypeView = new wijmo.collections.CollectionView(this.payTypeSource);

        this.chartOfAccountsSource.push({});
    }

    public onLock() : void {

    }

    public onUnLock() : void {

    }

    public onClose() : void {   
        this.router.navigate(['Dashboard']);
    }
}