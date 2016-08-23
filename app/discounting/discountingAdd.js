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
    var DiscountingAddComponent;
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
            DiscountingAddComponent = (function () {
                function DiscountingAddComponent(router) {
                    this.router = router;
                    this.vatExempt = false;
                    this.dayScheduled = false;
                    this.dateScheduled = false;
                    this.timeScheduled = false;
                    this.monday = false;
                    this.tuesday = false;
                    this.wednesday = false;
                    this.thursday = false;
                    this.friday = false;
                    this.saturday = false;
                    this.sunday = false;
                }
                DiscountingAddComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                    }
                    else {
                    }
                    /*Else*/
                    this.timeStart = new wijmo.input.InputTime('#timeStart', {
                        format: 'hh:mm tt',
                        value: new Date()
                    });
                    this.timeStart = new wijmo.input.InputTime('#timeEnd', {
                        format: 'hh:mm tt',
                        value: new Date()
                    });
                    this.dateStart = new wijmo.input.InputDate('#dateStart', {
                        format: 'MM/dd/yyyy',
                        value: new Date()
                    });
                    this.dateEnd = new wijmo.input.InputDate('#dateEnd', {
                        format: 'MM/dd/yyyy',
                        value: new Date()
                    });
                };
                DiscountingAddComponent.prototype.onClose = function () {
                    this.router.navigate(['Discounting']);
                };
                /*
                    This function will disable all of the content of the itemAddTabContent Tab
                */
                DiscountingAddComponent.prototype.onLock = function () {
                    document.getElementById('discount').setAttribute('disabled', 'disabled');
                    document.getElementById('discountRate').setAttribute('disabled', 'disabled');
                    document.getElementById('vatExempt').setAttribute('disabled', 'disabled');
                    document.getElementById('dayScheduled').setAttribute('disabled', 'disabled');
                    document.getElementById('dateScheduled').setAttribute('disabled', 'disabled');
                    document.getElementById('timeScheduled').setAttribute('disabled', 'disabled');
                    document.getElementById('dateStart').setAttribute('disabled', 'disabled');
                    document.getElementById('timeStart').setAttribute('disabled', 'disabled');
                    document.getElementById('dateEnd').setAttribute('disabled', 'disabled');
                    document.getElementById('timeEnd').setAttribute('disabled', 'disabled');
                    document.getElementById('monday').setAttribute('disabled', 'disabled');
                    document.getElementById('tuesday').setAttribute('disabled', 'disabled');
                    document.getElementById('wednesday').setAttribute('disabled', 'disabled');
                    document.getElementById('thursday').setAttribute('disabled', 'disabled');
                    document.getElementById('friday').setAttribute('disabled', 'disabled');
                    document.getElementById('saturday').setAttribute('disabled', 'disabled');
                    document.getElementById('sunday').setAttribute('disabled', 'disabled');
                    document.getElementById('flexDiscount').setAttribute('disabled', 'disabled');
                };
                /*
                    This function will enable all of the content of the itemAddTabContent Tab
                */
                DiscountingAddComponent.prototype.onUnlock = function () {
                    document.getElementById('discount').removeAttribute('disabled');
                    document.getElementById('discountRate').removeAttribute('disabled');
                    document.getElementById('vatExempt').removeAttribute('disabled');
                    document.getElementById('dayScheduled').removeAttribute('disabled');
                    document.getElementById('dateScheduled').removeAttribute('disabled');
                    document.getElementById('timeScheduled').removeAttribute('disabled');
                    document.getElementById('dateStart').removeAttribute('disabled');
                    document.getElementById('timeStart').removeAttribute('disabled');
                    document.getElementById('dateEnd').removeAttribute('disabled');
                    document.getElementById('timeEnd').removeAttribute('disabled');
                    document.getElementById('monday').removeAttribute('disabled');
                    document.getElementById('tuesday').removeAttribute('disabled');
                    document.getElementById('wednesday').removeAttribute('disabled');
                    document.getElementById('thursday').removeAttribute('disabled');
                    document.getElementById('friday').removeAttribute('disabled');
                    document.getElementById('saturday').removeAttribute('disabled');
                    document.getElementById('sunday').removeAttribute('disabled');
                    document.getElementById('flexDiscount').removeAttribute('disabled');
                };
                DiscountingAddComponent.prototype.addDiscount = function () {
                    var discount = this.createDiscount();
                    if (this.validate(discount)) {
                    }
                    else {
                    }
                };
                DiscountingAddComponent.prototype.createDiscount = function () {
                    var discount = {};
                    return true;
                };
                //validation
                DiscountingAddComponent.prototype.validate = function (dicount) {
                    return true;
                };
                DiscountingAddComponent.prototype.validateDiscount = function (discount) {
                    return true;
                };
                DiscountingAddComponent = __decorate([
                    core_1.Component({
                        selector: 'discount-add',
                        templateUrl: 'app/discounting/discountingAdd.html',
                        directives: [
                            wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate,
                            wjNg2Input.WjComboBox,
                        ],
                        providers: [
                            ng2_toastr_1.ToastsManager
                        ]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], DiscountingAddComponent);
                return DiscountingAddComponent;
            }());
            exports_1("DiscountingAddComponent", DiscountingAddComponent);
        }
    }
});
//# sourceMappingURL=discountingAdd.js.map