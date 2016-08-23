import {Component, OnInit, Output, EventEmitter} from 'angular2/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from 'angular2/router';
import {App} from '../app/app';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

@Component({
    selector: 'collection-add',
    templateUrl: 'app/collection/collectionAdd.html',
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

export class CollectionAddComponent implements OnInit {
    private collectionNumber : String;
    private period : String;
    private manualORNumber : String;
    private cmbCustomer : wijmo.input.ComboBox;
    private cmbSalesNumber : wijmo.input.ComboBox;
    private cmbPreparedBy : wijmo.input.ComboBox;
    private cmbApprovedBy : wijmo.input.ComboBox;
    private cmbCheckedBy : wijmo.input.ComboBox;
    private salesBalance : Number;
    private amount : Number;
    private terminal : Number;
    private remarks : String;

    private collectionDetailView : wijmo.collections.CollectionView;
    private collectionDetailSource : wijmo.collections.ObservableArray;

    private collectionDate : wijmo.input.InputDate;

    constructor(private router : Router, private toastr : ToastsManager) {

    }

    public ngOnInit() : void {
        this.collectionDetailSource = new wijmo.collections.ObservableArray();
        this.collectionDetailView = new wijmo.collections.CollectionView(this.collectionDetailSource);

        this.cmbCustomer = new wijmo.input.ComboBox('#cmbCustomer');
        this.cmbApprovedBy = new wijmo.input.ComboBox('#cmbApprovedBy');
        this.cmbCheckedBy = new wijmo.input.ComboBox('#cmbCheckedBy');
        this.cmbPreparedBy = new wijmo.input.ComboBox('#cmbPreparedBy');
        this.cmbSalesNumber = new wijmo.input.ComboBox('#cmbSalesNumber');

        this.collectionDate = new wijmo.input.InputDate("#collectionDate", {
            format : "MM/dd/yyyy",
            value : new Date()
        });

        this.collectionDetailSource.push({Amount : '200'});
    }

    public onLock() : void {
        document.getElementById('collectionNumber').setAttribute('disabled', 'disabled');
        document.getElementById('period').setAttribute('disabled', 'disabled');
        document.getElementById('manualORNumber').setAttribute('disabled', 'disabled');
        document.getElementById('cmbCustomer').setAttribute('disabled', 'disabled');
        document.getElementById('cmbSalesNumber').setAttribute('disabled', 'disabled');
        document.getElementById('cmbPreparedBy').setAttribute('disabled', 'disabled');
        document.getElementById('cmbApprovedBy').setAttribute('disabled', 'disabled');
        document.getElementById('cmbCheckedBy').setAttribute('disabled', 'disabled');
        document.getElementById('collectionDate').setAttribute('disabled', 'disabled');
        document.getElementById('remarks').setAttribute('disabled', 'disabled');
        document.getElementById('flexCollectionDetail').setAttribute('disabled', 'disabled');
    }

    public onUnlock() : void {
        document.getElementById('collectionNumber').removeAttribute('disabled');
        document.getElementById('period').removeAttribute('disabled');
        document.getElementById('manualORNumber').removeAttribute('disabled');
        document.getElementById('cmbCustomer').removeAttribute('disabled');
        document.getElementById('cmbSalesNumber').removeAttribute('disabled');
        document.getElementById('cmbPreparedBy').removeAttribute('disabled');
        document.getElementById('cmbApprovedBy').removeAttribute('disabled');
        document.getElementById('cmbCheckedBy').removeAttribute('disabled');
        document.getElementById('collectionDate').removeAttribute('disabled');
        document.getElementById('remarks').removeAttribute('disabled');
        document.getElementById('flexCollectionDetail').removeAttribute('disabled');
    }

    public onPreview() : void {
        
    }

    public onPrint() : void {
        
    }

    public onClose() : void {
        this.router.navigate(['Dashboard']);
        this.addCollection();
    }

    public onSelectChange(combobox : wijmo.input.ComboBox, source : wijmo.collections.ObservableArray) : void {
        const s = source;
        combobox.selectedIndexChanged.addHandler(function(){
           s.push({});
        });
    }

    //getters
    public getToastr() : ToastsManager { return this.toastr; }

    private addCollection() : void {
        const collection = this.createCollection();
        if(this.validate(collection)) {

        }
        else {

        }
    }

    private createCollection() {
        const collection = {

        };
        return collection;
    }

    //validation
    private validate(collection) : boolean {
        return true;
    }

    private validateManualOR(manualOR : string) : boolean {
        return true;
    }

    private validateRemarks(remarks : string) : boolean {
        return true;
    }
}