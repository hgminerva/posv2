import {Component, OnInit} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

import {ChartOfAccountsService} from './chartOfAccounts/chartOfAccountsService';
import {PayTypeService} from './payType/payTypeService';
import {PeriodService} from './period/periodService';
import {TaxService} from './tax/taxService';
import {UnitService} from './unit/unitService';
import {TerminalService} from './terminal/terminalService';

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
        ToastsManager, 
        ChartOfAccountsService,
        PayTypeService, 
        PeriodService,
        TaxService,
        UnitService,
        TerminalService
    ]
})

export class SystemTablesComponent implements OnInit{
    private chartOfAccountsView : wijmo.collections.CollectionView;
    private chartOfAccountsSource : wijmo.collections.ObservableArray;
    private payTypeView : wijmo.collections.CollectionView;
    private periodView : wijmo.collections.CollectionView;
    private taxView : wijmo.collections.CollectionView;
    private unitView : wijmo.collections.CollectionView;
    private terminalView : wijmo.collections.CollectionView;

    constructor(private router : Router,
                private toastr : ToastsManager, 
                private chartOfAccountsService : ChartOfAccountsService,
                private payTypeService : PayTypeService,
                private periodService : PeriodService,
                private taxService : TaxService,
                private unitService : UnitService,
                private terminalService : TerminalService) {

    }

    public ngOnInit() : void {
        if(!localStorage.getItem('access_token')) {

        }
        else {

        }
        /*Else*/
        this.chartOfAccountsSource = new wijmo.collections.ObservableArray();
        this.chartOfAccountsView = new wijmo.collections.CollectionView(this.chartOfAccountsSource);
        this.payTypeView = new wijmo.collections.CollectionView();
        this.periodView = new wijmo.collections.CollectionView();
        this.taxView = new wijmo.collections.CollectionView();
        this.terminalView = new wijmo.collections.CollectionView();
        this.unitView = new wijmo.collections.CollectionView();

        this.chartOfAccountsView.pageSize = 10;
        this.payTypeView.pageSize = 10;
        this.unitView.pageSize = 10;
        this.taxView.pageSize = 10;
        this.periodView.pageSize = 10;
        this.terminalView.pageSize = 10;

        this.payTypeService.listPayType(this);
        this.periodService.listPeriod(this);
        this.taxService.listTax(this);
        this.unitService.listUnit(this);
        this.terminalService.listTerminal(this);
    }

    public onLock() : void {
            
    }

    public onUnLock() : void {

    }

    public onClose() : void {   
        this.router.navigate(['Dashboard']);
    }

    public getAccountsView() : wijmo.collections.CollectionView { return this.chartOfAccountsView; }

    public getPayTypeView() : wijmo.collections.CollectionView { return this.payTypeView; }

    public getPeriodView() : wijmo.collections.CollectionView { return this.periodView; }

    public getTaxView() : wijmo.collections.CollectionView { return this.taxView; }

    public getUnitView() : wijmo.collections.CollectionView { return this.unitView; }

    public getTerminalView() : wijmo.collections.CollectionView { return this.terminalView; }
}