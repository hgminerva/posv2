import {Component, OnInit, Inject} from 'angular2/core';
import {Router,RouteParams,Location} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import {JVDetailService} from '../jvDetail/jvDetailService';
import {JVModel} from '../model/jvModel';

@Component({
  selector: 'jvDetail',
  templateUrl: 'app/jvDetail/jvDetail.html',
  directives: [ wjNg2FlexGrid.WjFlexGrid, 
                wjNg2FlexGrid.WjFlexGridColumn, 
                wjNg2FlexGrid.WjFlexGridCellTemplate,
                wjNg2Input.WjInputDate],
   providers: [ToastsManager,JVDetailService]
})
export class JVDetailComponent implements OnInit {
    public jvHeader : JVModel;
    
    public dataJV : wijmo.collections.ObservableArray;
    public collectionJV : wijmo.collections.CollectionView;
    
    public id : string;
    
    constructor (public _router: Router, 
                 public _location: Location,
                 public _toastr: ToastsManager,
                 @Inject(JVDetailService) private _jvDetailService: JVDetailService,
                 private _routerParams: RouteParams) {
        this.id = _routerParams.get('id');
        this.jvHeader = new JVModel();
    }     
    
    ngOnInit() {
        if (!localStorage.getItem('access_token')) {
            this._router.navigate(['Login']);
        } else {     
            this.initJVDetail();
        }
    } 
    
    initJVDetail() {
        if(+this.id > 0) {
            // Edit
            this.jvHeader = this._jvDetailService.getJV(this);
        } 
    }
    
    closeJVDetail() {
        this._router.navigate(['JV']);
    }
    
    jvDate() {
        return this.jvHeader.jvDate == null ? new Date() : this.jvHeader.jvDate;
    }
}