System.register(['angular2/core', 'ng2-toastr/ng2-toastr', 'angular2/router', 'wijmo/wijmo.angular2.grid', 'wijmo/wijmo.angular2.input'], function(exports_1, context_1) {
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
    var core_1, ng2_toastr_1, router_1, wjNg2FlexGrid, wjNg2Input;
    var DebitCreditMemoComponent;
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
            }],
        execute: function() {
            DebitCreditMemoComponent = (function () {
                function DebitCreditMemoComponent(toastr, router) {
                    this.toastr = toastr;
                    this.router = router;
                }
                DebitCreditMemoComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                    }
                    else {
                    }
                    /*Else*/
                    this.debitCreditMemoSource = new wijmo.collections.ObservableArray();
                    this.debitCreditMemoView = new wijmo.collections.CollectionView(this.debitCreditMemoSource);
                    this.debitCreditMemoSource.push({ Lock: true });
                };
                /*
                    This function will go to debitCreditMemoAdd.html when click
                */
                DebitCreditMemoComponent.prototype.onAdd = function () {
                    this.router.navigate(['DebitCreditMemoAdd']);
                };
                DebitCreditMemoComponent.prototype.onClose = function () {
                    this.router.navigate(['Dashboard']);
                };
                //getters
                DebitCreditMemoComponent.prototype.getToastr = function () { return this.toastr; };
                DebitCreditMemoComponent = __decorate([
                    core_1.Component({
                        selector: 'disbursement',
                        templateUrl: 'app/debitCreditMemo/debitCreditMemo.html',
                        directives: [
                            wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate,
                            wjNg2Input.WjComboBox
                        ],
                        providers: [
                            ng2_toastr_1.ToastsManager
                        ]
                    }), 
                    __metadata('design:paramtypes', [ng2_toastr_1.ToastsManager, router_1.Router])
                ], DebitCreditMemoComponent);
                return DebitCreditMemoComponent;
            }());
            exports_1("DebitCreditMemoComponent", DebitCreditMemoComponent);
        }
    }
});
//# sourceMappingURL=debitCreditMemo.js.map