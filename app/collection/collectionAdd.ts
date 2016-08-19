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

export class CollectionAddComponent implements OnInit{
    private cmbCustomerSource : wijmo.collections.ObservableArray;
    private cmbSalesNumberSource : wijmo.collections.ObservableArray;
    private cmbAuthoritySource : wijmo.collections.ObservableArray;

    private collectionDetailView : wijmo.collections.CollectionView;
    private collectionDetailSource : wijmo.collections.ObservableArray;

    private collectionDate : wijmo.input.InputDate;

    constructor(private router : Router, private toastr : ToastsManager) {

    }

    public ngOnInit() : void {
        this.cmbCustomerSource = new wijmo.collections.ObservableArray();
        this.cmbSalesNumberSource = new wijmo.collections.ObservableArray();
        this.cmbAuthoritySource = new wijmo.collections.ObservableArray();

        this.collectionDetailSource = new wijmo.collections.ObservableArray();
        this.collectionDetailView = new wijmo.collections.CollectionView(this.collectionDetailSource);

        this.collectionDate = new wijmo.input.InputDate("#collectionDate", {
            format : "MM/dd/yyyy",
            value : new Date()
        });

        this.cmbCustomerSource.push('Test');
        this.cmbSalesNumberSource.push('Test');
        this.cmbAuthoritySource.push('Test');
        this.collectionDetailSource.push({Amount : '200'});
    }

    public onLock() : void {

    }

    public onUnlock() : void {
        
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