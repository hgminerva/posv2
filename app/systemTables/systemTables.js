System.register(['angular2/core', 'ng2-toastr/ng2-toastr', 'angular2/router', 'wijmo/wijmo.angular2.grid', 'wijmo/wijmo.angular2.input', './chartOfAccounts/chartOfAccountsService', './payType/payTypeService', './period/periodService', './tax/taxService', './unit/unitService', './terminal/terminalService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ng2_toastr_1, router_1, wjNg2FlexGrid, wjNg2Input, chartOfAccountsService_1, payTypeService_1, periodService_1, taxService_1, unitService_1, terminalService_1;
    var SystemTablesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_toastr_1_1) {
                ng2_toastr_1 = ng2_toastr_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (wjNg2FlexGrid_1) {
                wjNg2FlexGrid = wjNg2FlexGrid_1;
            },
            function (wjNg2Input_1) {
                wjNg2Input = wjNg2Input_1;
            },
            function (chartOfAccountsService_1_1) {
                chartOfAccountsService_1 = chartOfAccountsService_1_1;
            },
            function (payTypeService_1_1) {
                payTypeService_1 = payTypeService_1_1;
            },
            function (periodService_1_1) {
                periodService_1 = periodService_1_1;
            },
            function (taxService_1_1) {
                taxService_1 = taxService_1_1;
            },
            function (unitService_1_1) {
                unitService_1 = unitService_1_1;
            },
            function (terminalService_1_1) {
                terminalService_1 = terminalService_1_1;
            }],
        execute: function() {
            SystemTablesComponent = (function () {
                function SystemTablesComponent(router, toastr, chartOfAccountsService, payTypeService, periodService, taxService, unitService, terminalService) {
                    this.router = router;
                    this.toastr = toastr;
                    this.chartOfAccountsService = chartOfAccountsService;
                    this.payTypeService = payTypeService;
                    this.periodService = periodService;
                    this.taxService = taxService;
                    this.unitService = unitService;
                    this.terminalService = terminalService;
                }
                SystemTablesComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
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
                };
                SystemTablesComponent.prototype.onLock = function () {
                };
                SystemTablesComponent.prototype.onUnLock = function () {
                };
                SystemTablesComponent.prototype.onClose = function () {
                    this.router.navigate(['Dashboard']);
                };
                SystemTablesComponent.prototype.getPayTypeView = function () { return this.payTypeView; };
                SystemTablesComponent.prototype.getPeriodView = function () { return this.periodView; };
                SystemTablesComponent.prototype.getTaxView = function () { return this.taxView; };
                SystemTablesComponent.prototype.getUnitView = function () { return this.unitView; };
                SystemTablesComponent.prototype.getTerminalView = function () { return this.terminalView; };
                SystemTablesComponent = __decorate([
                    core_1.Component({
                        selector: 'systemTables',
                        templateUrl: 'app/systemTables/systemTables.html',
                        directives: [
                            wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate,
                            wjNg2Input.WjComboBox
                        ],
                        providers: [
                            ng2_toastr_1.ToastsManager,
                            chartOfAccountsService_1.ChartOfAccountsService,
                            payTypeService_1.PayTypeService,
                            periodService_1.PeriodService,
                            taxService_1.TaxService,
                            unitService_1.UnitService,
                            terminalService_1.TerminalService
                        ]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, ng2_toastr_1.ToastsManager, chartOfAccountsService_1.ChartOfAccountsService, payTypeService_1.PayTypeService, periodService_1.PeriodService, taxService_1.TaxService, unitService_1.UnitService, terminalService_1.TerminalService])
                ], SystemTablesComponent);
                return SystemTablesComponent;
            }());
            exports_1("SystemTablesComponent", SystemTablesComponent);
        }
    }
});
//# sourceMappingURL=systemTables.js.map