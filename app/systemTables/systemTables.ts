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
    private currentCollectionView : wijmo.collections.CollectionView;
    private currentService;

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

        this.chartOfAccountsView.pageSize = 15;
        this.payTypeView.pageSize = 15;
        this.unitView.pageSize = 15;
        this.taxView.pageSize = 15;
        this.periodView.pageSize = 15;
        this.terminalView.pageSize = 15;

        this.chartOfAccountsService.listChartOfAccounts(this);
    }

    public onLock() : void {
            
    }

    public onUnLock() : void {

    }

    public onClose() : void {   
        this.router.navigate(['Dashboard']);
    }

    public first() : void {
        this.currentCollectionView.moveToFirstPage();
        this.currentService.updatePageButtons(this);
    }
 
    public next() : void {
        this.currentCollectionView.moveToNextPage();
        this.currentService.updatePageButtons(this);
    } 

    public previous() : void {
        this.currentCollectionView.moveToPreviousPage();
        this.currentService.updatePageButtons(this);
    }

    public last() : void {
        this.currentCollectionView.moveToLastPage();
        this.currentService.updatePageButtons(this);
    }

    public setFilters() : void {
        var inputFilter = (<HTMLInputElement>document.getElementById('InputFilter'));
        var filterText = ''
        var collectionView = this.currentCollectionView;
        var service = this.currentService;
        var component = this;

        inputFilter.onkeyup = function (e) {
            filterText = inputFilter.value;
            collectionView.refresh();
        }

        collectionView.filter= function (item){
            return !filterText || (item.ItemCode.toLowerCase().indexOf(filterText.toLowerCase()) > - 1);
        }

        collectionView.currentChanged.addHandler(function() {
            service.updatePageButtons(component);            
        })

        collectionView.collectionChanged.addHandler(function() {
            service.updatePageButtons(component);            
        })
    }

    public displayChartOfAccounts() : void {
        this.currentCollectionView = this.chartOfAccountsView;
        this.currentService = this.chartOfAccountsService;
        this.chartOfAccountsService.listChartOfAccounts(this);
    }

    public displayPayType() : void {
        this.currentCollectionView = this.payTypeView;
        this.currentService = this.payTypeService;
        this.payTypeService.listPayType(this);
    }

    public displayUnit() : void {
        this.currentCollectionView = this.unitView
        this.currentService = this.unitService
        this.unitService.listUnit(this);
    }

    public displayTerminal() : void {
        this.currentCollectionView = this.terminalView
        this.currentService = this.terminalService
        this.terminalService.listTerminal(this);
    }

    public displayPeriod() : void {
        this.currentCollectionView = this.periodView;
        this.currentService = this.periodService;
        this.periodService.listPeriod(this);
    }

    public displayTax() : void {
        this.currentCollectionView = this.taxView;
        this.currentService = this.taxService;
        this.taxService.listTax(this);
    }

    public getAccountsView() : wijmo.collections.CollectionView { return this.chartOfAccountsView; }

    public getPayTypeView() : wijmo.collections.CollectionView { return this.payTypeView; }

    public getPeriodView() : wijmo.collections.CollectionView { return this.periodView; }

    public getTaxView() : wijmo.collections.CollectionView { return this.taxView; }

    public getUnitView() : wijmo.collections.CollectionView { return this.unitView; }

    public getTerminalView() : wijmo.collections.CollectionView { return this.terminalView; }
}